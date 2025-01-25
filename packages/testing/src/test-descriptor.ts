/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { FilesystemSync } from "#tools";
import { PicsExpression } from "./chip/pics-expression.js";
import type { PicsFile } from "./chip/pics-file.js";

/**
 * Metadata for a single test or group of tests.
 */
export interface TestDescriptor {
    name: string;
    kind: TestDescriptor.Kind;
    path?: string;
    members?: TestDescriptor[];
    isDisabled?: boolean;
    timeoutMs?: number;
    description?: string;
    pics?: string;
    config?: Record<string, unknown>;
}

export interface TestFileDescriptor extends TestDescriptor {
    path: string;
}

export interface TestSuiteDescriptor extends TestDescriptor {
    members: TestDescriptor[];
}

export namespace TestDescriptor {
    export type Kind = "suite" | "js" | "py" | "yaml" | "manual" | "step";

    export interface Filesystem extends FilesystemSync<Stat> {
        descriptor: TestDescriptor;
    }

    export interface Stat extends FilesystemSync.Stat {
        descriptor: TestDescriptor;
    }

    /**
     * Create a filtering predicate based on specified criteria.
     *
     * The predicate treats tests as atomic and ignores empty suites.
     */
    export function predicateFor(criteria: { includePaths?: string[]; kinds?: Kind[]; pics?: PicsFile }): Predicate {
        const { includePaths, kinds, pics } = criteria;

        // Index the inclusion paths so we can efficiently short-circuit search
        interface InclusionNode extends Record<string, InclusionNode> {}
        let inclusion: undefined | InclusionNode;
        if (includePaths) {
            inclusion = {};
            for (const path of includePaths) {
                let incl = inclusion;
                for (const segment of path.split("/").filter(segment => segment !== "")) {
                    incl = incl[segment] ??= {};
                }
            }
        }

        let firstLevel = true;

        return (descriptor, recurse) => {
            // Short circuit irrelevant paths
            if (!firstLevel && inclusion && !inclusion[descriptor.name]) {
                return;
            }

            // Apply PICS to any descriptor with a PICS expression
            if (pics && descriptor.pics !== undefined) {
                const expr = new PicsExpression(descriptor.pics);
                if (!expr.evaluate(pics)) {
                    return;
                }
            }

            // Recurse into suites
            if (descriptor.kind === "suite") {
                const revertInclusion = inclusion;
                try {
                    if (firstLevel) {
                        firstLevel = false;
                    } else if (inclusion) {
                        inclusion = inclusion[descriptor.name];
                    }

                    const result = recurse();
                    if (!result?.members?.length) {
                        return;
                    }

                    return result;
                } finally {
                    inclusion = revertInclusion;
                }
            }

            // Filter tests based on kind
            if (kinds && !kinds.includes(descriptor.kind)) {
                return;
            }

            return descriptor;
        };
    }

    export interface Predicate {
        (descriptor: TestDescriptor, recurse: () => TestDescriptor | undefined): TestDescriptor | undefined;
    }

    /**
     * Filter a {@link TestDescriptor} hierarchy using a predicate.
     */
    export function filter(descriptor: TestDescriptor, predicate: Predicate): TestDescriptor | undefined {
        return predicate(descriptor, () => {
            let { members } = descriptor;

            if (members) {
                members = members.map(member => filter(member, predicate)).filter(member => member) as TestDescriptor[];
            }

            if (descriptor.members === undefined || members?.length === descriptor.members?.length) {
                return descriptor;
            }

            descriptor = { ...descriptor };
            if (members?.length) {
                descriptor.members = members;
            } else {
                delete descriptor.members;
            }

            return descriptor;
        });
    }

    /**
     * Visit a {@link TestDescriptor} hierarchy.
     */
    export function visit(descriptor: TestDescriptor, fn: (descriptor: TestDescriptor) => void | boolean): void {
        if (fn(descriptor) === false) {
            return;
        }

        if (!descriptor.members) {
            return;
        }

        for (const member of descriptor.members) {
            visit(member, fn);
        }
    }

    /**
     * A {@link FilesystemSync} adapter for {@link TestDescriptor}.
     */
    export function Filesystem(root: TestDescriptor): TestDescriptor.Filesystem {
        const index = new WeakMap<TestDescriptor, Record<string, TestDescriptor>>();

        return {
            descriptor: root,

            resolve(...segments) {
                let result = "/";

                for (const segment of segments) {
                    if (segment.startsWith("/")) {
                        result = segment;
                        continue;
                    }

                    if (result[result.length - 1] !== "/") {
                        result = `${result}/${segment}`;
                        continue;
                    }

                    result = `${result}${segment}`;
                }

                return result;
            },

            readdir(path) {
                return this.stat(path)?.descriptor.members?.map(m => m.name);
            },

            stat(path) {
                const segments = path.split("/");

                const breadcrumb = [root];
                for (const segment of segments) {
                    if (segment === "." || segment === "") {
                        continue;
                    }

                    if (segment === "..") {
                        if (breadcrumb.length > 1) {
                            breadcrumb.pop();
                        }
                        continue;
                    }

                    const descriptor = memberOf(breadcrumb[breadcrumb.length - 1], segment);
                    if (!descriptor) {
                        return;
                    }

                    breadcrumb.push(descriptor);
                }

                const descriptor = breadcrumb[breadcrumb.length - 1];

                const isSuite = descriptor.kind === "suite";
                return {
                    isDirectory: isSuite,
                    isFile: !isSuite && descriptor.path !== undefined,
                    descriptor,
                };
            },
        };

        function memberOf(descriptor: TestDescriptor, name: string): TestDescriptor | undefined {
            const { members } = descriptor;
            if (!members?.length) {
                return;
            }

            let slot = index.get(descriptor);
            if (!slot) {
                slot = {} as Record<string, TestDescriptor>;
                for (const member of members) {
                    const existing = slot[member.name];
                    if (existing !== undefined) {
                        switch (existing.kind) {
                            case "suite":
                                continue;

                            case "js":
                                if (member.kind === "suite") {
                                    continue;
                                }
                                break;

                            case "py":
                                if (member.kind === "suite" || member.kind !== "js") {
                                    continue;
                                }
                                break;

                            case "yaml":
                                if (member.kind === "suite" || member.kind === "js" || member.kind === "py") {
                                    continue;
                                }
                                break;

                            case member.kind:
                                continue;
                        }
                    }

                    slot[member.name] = member;
                }
                index.set(descriptor, slot);
            }

            return slot[name];
        }
    }
}
