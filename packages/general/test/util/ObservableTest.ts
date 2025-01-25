/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Observable, ObserverGroup } from "#util/Observable.js";

// Observable deserves proper unit tests but is tested heavily via other modules.  Currently this file just tests a
// few spot cases

describe("ObservableGroup", () => {
    // Test for TS bug workaround
    it("supports variable argument lengths", () => {
        const observable = Observable<[foo: string, bar: boolean]>();
        const observers = new ObserverGroup();
        observers.on(observable, foo => {
            if (foo === "four") return;
        });
        observers.on(observable, (foo, bar) => {
            if (foo === "four") return;
            if (bar === true) return;
        });
    });

    it("installs observers", () => {
        const observable = Observable<[foo: string]>();
        const observers = new ObserverGroup();

        let observedValue: string | undefined;
        observers.on(observable, foo => {
            observedValue = foo;
        });

        expect(observable.isObserved).true;

        observable.emit("bar");

        expect(observedValue).equals("bar");
    });

    it("removes observers on close", () => {
        const observable = Observable<[foo: string]>();
        const observers = new ObserverGroup();

        observers.on(observable, () => {});

        expect(observable.isObserved);

        observers.close();

        expect(observable.isObserved).false;
    });
});
