/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Device } from "./Device.js";
import { DeviceTypeDefinition } from "./DeviceTypes.js";
import { CodeModel, ClusterInterface } from "./CodeModel.js";

// AutoDevice static private, AutoDeviceOptions private
const DEFINITION = Symbol("definition");
const STATE_IMPLEMENTATION = Symbol("StateImplementation");

// AutoDevice private
const STATE = Symbol("state");

// AutoDeviceOptions private
const DEVICE = Symbol("device");

/**
 * Methods related to state management.
 */
export interface StateManager<State extends {}> {
    /**
     * Access current attribute values.
     */
    get state(): State;

    /**
     * Update internal state.
     * 
     * @param state an object mapping attribute names to new values
     */
    set(changes: {}): void;

    /**
     * Process a validated write request from the fabric.  The default
     * implementation applies all writes directly to internal state.
     * 
     * Derivatives should override this method to process state changes that
     * have external dependencies.
     * 
     * @param state the attribute values to change
     */
    write(changes: {}): Promise<void>;
}

type Constructor = new (...args: any[]) => AutoDevice & StateManager<{}>

/**
 * Unified device interface for a set of clusters.  This defines the interface
 * for a device that implements the listed clusters.
 */
export type ServerType<T> =
    T extends [ClusterInterface<any, any, infer S>]
    ? S
    : T extends [ClusterInterface<any, any, infer S>, ...infer R]
    ? S & ServerType<R>
    : T extends []
    ? {}
    : T;

/**
 * Unified state type for a base server and a set of clusters.  This defines
 * the state type for a device that implements the listed clusters.
 */
export type StateType<C extends Constructor, T> =
    T extends [ClusterInterface<infer S, any, any>]
    ? InstanceType<C>["state"] & S
    : T extends [ClusterInterface<infer S, any, any>, ...infer R]
    ? S & StateType<C, R>
    : T extends []
    ? InstanceType<C>["state"]
    : never;

export type AutoDeviceOptions<State> = {
    state?: Partial<State>;
    endpointId?: number;
}

/**
 * An extension of Device that offers automatic cluster implementation.  This
 * class is not intended for direct consumption.
 */
export class AutoDevice extends Device {
    constructor(options: AutoDeviceOptions<{}>) {
        // The definition could be a class member except we need it for the
        // constructor so can't access it yet
        const definition = (<any>options)[DEFINITION];
        const StateClass = (<any>options)[STATE_IMPLEMENTATION] as new (state: {}) => {};

        // This constructor is really private but we can't tell TS that or it
        // won't allow us to pass it in AutoDevice.with()
        if (definition === undefined) {
            throw new Error("Cannot directly instantiate AutoDevice; must use a derivative");
        }

        super(definition, [], options.endpointId);

        this[STATE] = new StateClass(options.state || {});
    }

    private [STATE]: {};

    // This is actually private but can't make it so because TS doesn't see
    // our read.  Use of symbol should suffice as documentation
    [STATE_IMPLEMENTATION]: new (device: AutoDevice) => {} = class {
        constructor(device: AutoDevice) {
            (<any>this)[DEVICE] = device;
        }
    };

    static [STATE_IMPLEMENTATION] = class {
        constructor(device: any) {
            (<any>this)[DEVICE] = device;
        }
    };

    get state(): {} {
        return this[STATE];
    }

    set(changes: {}): void {
        Object.entries(changes).forEach(([k, v]) => (<any>this.state)[k] = v);
    }

    async write(changes: {}): Promise<void> {
        this.set(changes);
    }

    static implement<Interfaces extends ClusterInterface<any, any, any>[]>(definition: DeviceTypeDefinition, ...interfaces: Interfaces) {
        return this.extendWithDefinition(this, definition, ...interfaces);
    }

    /**
     * Creates a new class that extends a base device type with additional
     * cluster implementations.
     * 
     * @param base the class to extend
     * @param interfaces the set of interfaces to implement
     * @returns the new class
     */
    protected static
        extend<
            BaseT extends new (...args: any[]) => AutoDevice,
            Interfaces extends ClusterInterface<any, any, any>[]
        >(
            base: BaseT,
            ...interfaces: Interfaces
        ) {
        return this.extendWithDefinition(base, undefined, ...interfaces);
    }

    protected static
        extendWithDefinition<
            BaseT extends Constructor,
            Interfaces extends ClusterInterface<any, any, any>[]
        >(
            base: BaseT,
            definition?: DeviceTypeDefinition,
            ...interfaces: Interfaces
        ): new (options?: AutoDeviceOptions<StateType<BaseT, Interfaces>>)
            => InstanceType<BaseT>
            & ServerType<Interfaces>
            & StateManager<StateType<BaseT, Interfaces>> {

        // Create the new state implementation.  We only tell TS about the
        // base class here so it gets into the prototype chain.  We wire the
        // attributes for the added clusters below and then inform TS of the
        // real interface via our function signature
        const BaseStateImplementation = <new (device: AutoDevice) => any>(<any>base)[STATE_IMPLEMENTATION];
        class StateImplementation extends BaseStateImplementation {
            constructor(device: AutoDevice) {
                super(device);
            }
        }

        // Create the new device implementation.  Again, only tell TS about
        // base class then handle extension wiring below.
        class ExtendedDevice extends base {
            constructor(...args: any[]) {
                // args[0] is really an options argument.  But we can't define
                // our actual arguments because TS thinks this is a Mixin
                // because it's defined inline and insists we need to have
                // spread arguments
                //
                // These could just be readonly private instance variables
                // except definition is needed in the constructor to call
                // super().  So we just use this hack to pass them into the
                // instance
                args[0][DEFINITION] = definition;
                args[0][STATE_IMPLEMENTATION] = StateImplementation;

                // It's probably completely unclear from this code but we're
                // building a normal class hierarchy.  This invokes the base
                // AutoDevice constructor and any code from previous extensions
                super(...args);

                // Any construction-time logic goes here
                initializers.forEach((initializer) => initializer.apply(this));
            }
        }

        // ExtendedDevice private 
        const initializers = new Array<(this: ExtendedDevice) => void>;

        // Auto-wire state and device interfaces for a specific cluster
        function implementCluster(definition: ClusterInterface<any, any, any>) {
            const model = CodeModel.forCluster(definition);
            const attrClusterServer = (state: any) => (<any>state)[DEVICE].getClusterServer(definition.definition);

            // Wire attributes
            model.attributes.forEach((attr) => {
                const getter = attr.getter;
                const setter = attr.setter;
                let descriptor = <PropertyDescriptor>{
                    get() {
                        return attrClusterServer(this)[getter]();
                    }
                };

                if (attr.default !== undefined) descriptor.value = attr.default;

                if (attr.writable)
                    descriptor.set = function(value) {
                        attrClusterServer(this)[setter](value);
                        return true;
                    }
                else
                    descriptor.writable = false;

                Object.defineProperty(StateImplementation.prototype, attr.name, descriptor);
            });

            model.commands.forEach((command) => {
                command; // TODO
            });

            model.events.forEach((event) => {
                // TODO - wire here once implemented in InteractionServer
                event;
            });
        }

        interfaces.forEach(implementCluster);

        return <any>ExtendedDevice;
    }
}
