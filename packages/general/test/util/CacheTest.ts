/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClosedError } from "#MatterError.js";
import { Minutes } from "#time/TimeUnit.js";
import { AsyncCache, Cache } from "#util/Cache.js";
import { Lifetime } from "#util/Lifetime.js";

describe("Cache", () => {
    describe("key encoding", () => {
        it("distinguishes `['a,b']` from `['a','b']`", async () => {
            const calls = new Array<unknown[]>();
            const cache = new Cache<string>(
                "test",
                (...params) => {
                    calls.push(params);
                    return `v${calls.length}`;
                },
                Minutes(5),
            );

            const v1 = cache.get("a,b");
            const v2 = cache.get("a", "b");

            expect(v1).equals("v1");
            expect(v2).equals("v2");
            expect(calls).deep.equals([["a,b"], ["a", "b"]]);

            await cache.close();
        });

        it("keeps single-param keys round-trippable via keys()", async () => {
            const cache = new Cache<string>("test", (iface: string) => `records-${iface}`, Minutes(5));

            cache.get("eth0");
            cache.get("wlan0");

            const keys = cache.keys();
            expect(keys).deep.equals(["eth0", "wlan0"]);
            for (const key of keys) {
                expect(cache.get(key)).equals(`records-${key}`);
            }

            await cache.close();
        });
    });

    describe("cached values", () => {
        it("caches an `undefined` result instead of re-running the generator", async () => {
            let calls = 0;
            const cache = new Cache<string | undefined>(
                "test",
                () => {
                    calls++;
                    return undefined;
                },
                Minutes(5),
            );

            expect(cache.get("k")).equals(undefined);
            expect(cache.get("k")).equals(undefined);
            expect(calls).equals(1);

            await cache.close();
        });
    });

    describe("close()", () => {
        it("throws on get() after close and creates nothing", async () => {
            let calls = 0;
            const cache = new Cache<string>("test", () => `v${++calls}`, Minutes(5));

            await cache.close();

            expect(() => cache.get("k")).throws(ClosedError);
            expect(calls).equals(0);
            expect(cache.keys()).deep.equals([]);
        });
    });
});

describe("AsyncCache", () => {
    describe("concurrent fill", () => {
        it("runs generator once for parallel get() on a cold key", async () => {
            let pendingResolve!: (value: string) => void;
            let calls = 0;
            const cache = new AsyncCache<string>(
                "test",
                () => {
                    calls++;
                    return new Promise<string>(resolve => (pendingResolve = resolve));
                },
                Minutes(5),
            );

            const p1 = cache.get("k");
            const p2 = cache.get("k");

            expect(calls).equals(1);

            pendingResolve("value");

            expect(await p1).equals("value");
            expect(await p2).equals("value");
            expect(calls).equals(1);

            await cache.close();
        });

        it("rejects all awaiters on generator failure and retries on next call", async () => {
            let attempt = 0;
            let pendingReject!: (reason: unknown) => void;
            let pendingResolve!: (value: string) => void;
            const cache = new AsyncCache<string>(
                "test",
                () => {
                    attempt++;
                    if (attempt === 1) {
                        return new Promise<string>((_, reject) => (pendingReject = reject));
                    }
                    return new Promise<string>(resolve => (pendingResolve = resolve));
                },
                Minutes(5),
            );

            const p1 = cache.get("k");
            const p2 = cache.get("k");
            expect(attempt).equals(1);

            pendingReject(new Error("boom"));
            await expect(p1).rejectedWith("boom");
            await expect(p2).rejectedWith("boom");

            const p3 = cache.get("k");
            expect(attempt).equals(2);
            pendingResolve("ok");
            expect(await p3).equals("ok");

            await cache.close();
        });

        it("serves cached value to subsequent get() without calling generator again", async () => {
            let calls = 0;
            const cache = new AsyncCache<string>(
                "test",
                async (key: string) => {
                    calls++;
                    return `v-${key}`;
                },
                Minutes(5),
            );

            expect(await cache.get("k")).equals("v-k");
            expect(await cache.get("k")).equals("v-k");
            expect(calls).equals(1);

            await cache.close();
        });

        it("releases the in-flight slot when the generator throws synchronously", async () => {
            let attempt = 0;
            const cache = new AsyncCache<string>(
                "test",
                (): Promise<string> => {
                    attempt++;
                    if (attempt === 1) {
                        throw new Error("sync boom");
                    }
                    return Promise.resolve("ok");
                },
                Minutes(5),
            );

            await expect(cache.get("k")).rejectedWith("sync boom");
            expect(await cache.get("k")).equals("ok");
            expect(attempt).equals(2);

            await cache.close();
        });
    });

    describe("delete during fill", () => {
        it("awaits in-flight fill and invokes expireCallback with the settled value", async () => {
            let pendingResolve!: (value: string) => void;
            const expired = new Array<[string, string]>();
            const cache = new AsyncCache<string>(
                "test",
                () => new Promise<string>(resolve => (pendingResolve = resolve)),
                Minutes(5),
                async (key, value) => {
                    expired.push([key, value]);
                },
            );

            const getPromise = cache.get("k");
            const deletePromise = cache.delete("k");

            pendingResolve("settled");

            expect(await getPromise).equals("settled");
            await deletePromise;

            expect(expired).deep.equals([["k", "settled"]]);
            expect(cache.keys()).deep.equals(["k"]); // knownKeys is preserved, only values/timestamps cleared

            await cache.close();
        });

        it("tolerates generator rejection during delete()", async () => {
            let pendingReject!: (reason: unknown) => void;
            let expireCalls = 0;
            const cache = new AsyncCache<string>(
                "test",
                () => new Promise<string>((_, reject) => (pendingReject = reject)),
                Minutes(5),
                async () => {
                    expireCalls++;
                },
            );

            const getPromise = cache.get("k");
            const deletePromise = cache.delete("k");

            pendingReject(new Error("boom"));

            await expect(getPromise).rejectedWith("boom");
            await deletePromise;

            expect(expireCalls).equals(0);

            await cache.close();
        });
    });

    describe("cached values", () => {
        it("caches an `undefined` result instead of re-running the generator", async () => {
            let calls = 0;
            const cache = new AsyncCache<string | undefined>(
                "test",
                async () => {
                    calls++;
                    return undefined;
                },
                Minutes(5),
            );

            expect(await cache.get("k")).equals(undefined);
            expect(await cache.get("k")).equals(undefined);
            expect(calls).equals(1);

            await cache.close();
        });
    });

    describe("keys()", () => {
        it("lists only keys that resolved at least once (rejected fills are not tracked)", async () => {
            let attempt = 0;
            const cache = new AsyncCache<string>(
                "test",
                async (key: string) => {
                    attempt++;
                    if (key === "bad") {
                        throw new Error("boom");
                    }
                    return `v-${key}`;
                },
                Minutes(5),
            );

            expect(await cache.get("good")).equals("v-good");
            await expect(cache.get("bad")).rejectedWith("boom");

            expect(cache.keys()).deep.equals(["good"]);
            expect(attempt).equals(2);

            await cache.close();
        });
    });

    describe("clear during fill", () => {
        it("drains in-flight fills and invokes expireCallback for each", async () => {
            const resolvers = new Map<string, (value: string) => void>();
            const expired = new Array<[string, string]>();
            const cache = new AsyncCache<string>(
                "test",
                (key: string) => new Promise<string>(resolve => resolvers.set(key, resolve)),
                Minutes(5),
                async (key, value) => {
                    expired.push([key, value]);
                },
            );

            const g1 = cache.get("a");
            const g2 = cache.get("b");
            const clearPromise = cache.clear();

            resolvers.get("a")!("A");
            resolvers.get("b")!("B");

            expect(await g1).equals("A");
            expect(await g2).equals("B");
            await clearPromise;

            expired.sort(([a], [b]) => a.localeCompare(b));
            expect(expired).deep.equals([
                ["a", "A"],
                ["b", "B"],
            ]);

            await cache.close();
        });
    });

    describe("close()", () => {
        it("rejects get() after close and creates nothing", async () => {
            let calls = 0;
            const cache = new AsyncCache<string>("test", async () => `v${++calls}`, Minutes(5));

            await cache.close();

            await expect(cache.get("k")).rejectedWith(ClosedError);
            expect(calls).equals(0);
            expect(cache.keys()).deep.equals([]);
        });

        it("rejects get() while close runs and expires a creation pending at close", async () => {
            let pendingResolve!: (value: string) => void;
            let calls = 0;
            const expired = new Array<[string, string]>();
            const cache = new AsyncCache<string>(
                "test",
                () => {
                    calls++;
                    return new Promise<string>(resolve => (pendingResolve = resolve));
                },
                Minutes(5),
                async (key, value) => {
                    expired.push([key, value]);
                },
            );

            const pending = cache.get("a");
            const closing = cache.close();

            await expect(cache.get("b")).rejectedWith(ClosedError);

            // Characterization from here: clear() expired pending creations before close() refused get()
            pendingResolve("A");
            expect(await pending).equals("A");
            await closing;

            expect(calls).equals(1);
            expect(expired).deep.equals([["a", "A"]]);
            expect(cache.keys()).deep.equals([]);
        });
    });

    describe("lifetime", () => {
        it("joins the owner's lifetime and leaves it on close", async () => {
            const owner = Lifetime.mock;
            const cache = new AsyncCache<string>("test", async () => "v", Minutes(5), undefined, owner);

            expect([...owner.spans].map(span => span.name)).deep.equals(["test cache"]);

            await cache.close();

            expect(owner.spans.size).equals(0);
        });

        it("joins the process lifetime without an owner", async () => {
            const cache = new AsyncCache<string>("ownerless test", async () => "v", Minutes(5));

            using probe = Lifetime.process.join("probe");
            const processSpans = () => [...(probe.owner?.spans ?? [])].map(span => span.name);
            expect(processSpans()).contains("ownerless test cache");

            await cache.close();

            expect(processSpans()).not.contains("ownerless test cache");
        });

        it("rejects get() once the owner closes and still expires the values on close()", async () => {
            const owner = Lifetime.mock.join("owner");
            const expired = new Array<[string, string]>();
            const cache = new AsyncCache<string>(
                "test",
                async (key: string) => `v-${key}`,
                Minutes(5),
                async (key, value) => {
                    expired.push([key, value]);
                },
                owner,
            );
            expect(await cache.get("a")).equals("v-a");

            using _closing = owner.closing();

            await expect(cache.get("b")).rejectedWith(ClosedError);
            await expect(cache.get("a")).rejectedWith(ClosedError);

            await cache.close();

            expect(expired).deep.equals([["a", "v-a"]]);
            expect([...owner.spans].map(span => span.name)).not.contains("test cache");
        });
    });

    describe("evict()", () => {
        it("closes the cached resource and regenerates on the next get() for the same params", async () => {
            let calls = 0;
            const expired = new Array<string>();
            const cache = new AsyncCache<string>(
                "test",
                async (netInterface: string, isIPv4: boolean) => `${netInterface}-${isIPv4}-${++calls}`,
                Minutes(5),
                async (_key, value) => {
                    expired.push(value);
                },
            );

            expect(await cache.get("eth0", true)).equals("eth0-true-1");
            expect(await cache.get("eth0", true)).equals("eth0-true-1");
            expect(calls).equals(1);

            await cache.evict("eth0", true);
            expect(expired).deep.equals(["eth0-true-1"]);

            expect(await cache.get("eth0", true)).equals("eth0-true-2");
            expect(calls).equals(2);

            await cache.close();
        });
    });
});
