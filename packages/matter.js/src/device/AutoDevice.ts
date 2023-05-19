/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Device } from "./Device.js";
import { DeviceTypeDefinition } from "./DeviceTypes.js";
import { CodeModel, ClusterInterface } from "./CodeModel.js";

const DEFINITION = Symbol("definition");

/**
 * Methods related to state management.
 */
export interface StateManager<State extends {}> {
    /**
     * Access current attribute values.
     */
    get state(): State;

    /**
     * Get default attribute values.
     */
    get defaults(): Partial<State>;

    /**
     * Update internal state.
     * 
     * @param state an object mapping attribute names to new values
     */
    set(changes: {}): void;

    /**
     * Update internal state.
     * 
     * @param name the value of the attribute to modify 
     * @param value the new value for the attribute
     */
    set(name: string, value: any): void;

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

function updateState(original: { [key: string]: any }, changes: { [key: string]: any }) {
    const result = {} as typeof original;
    Object.assign(result, original);
    Object.entries(changes as { [name: string]: any }).forEach(
        ([k, v]) => { if (v !== undefined) result[k] = v; });
    return result;
}

const STATE = Symbol("state");

/**
 * An extension of Device that offers automatic cluster implementation.  This
 * class is not intended for direct consumption.
 */
export class AutoDevice extends Device {
    constructor(options: AutoDeviceOptions<{}>) {
        const definition = (<any>options)[DEFINITION];

        // This constructor is really private but we can't tell TS that or it
        // won't allow us to pass it in AutoDevice.with()
        if (definition === undefined) {
            throw new Error("Cannot directly instantiate AutoDevice; must use a derivative");
        }

        super(definition, [], options.endpointId);

        let initialState = Object.assign({}, this.defaults) as {};
        if (options.state)
            initialState = updateState(this.defaults, options.state);
        this[STATE] = initialState;
    }

    private [STATE]: {};

    get state(): {} {
        return this[STATE];
    }

    get defaults(): {} {
        const result = {};

        // TODO - read default values from cluster definitions

        return result;
    }

    set(changesOrAttr: {} | string, value?: any): void {
        if (typeof changesOrAttr == "string") {
            // TODO - validate value as I'm not sure there's a way to do it
            // via typing
            return this.set({ [changesOrAttr]: value });
        }

        // TODO - detect changes, persist and notify subscribers
        changesOrAttr;
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
        
        class ExtendedDevice extends base {
            constructor(...args: any[]) {
                args[0][DEFINITION] = definition;

                super(...args);

                initializers.forEach((initializer) => initializer.apply(this));
            }

            override get state() {
                return super.state as StateType<BaseT, Interfaces>;
            }
        }

        const initializers = new Array<(this: ExtendedDevice) => void>;

        function implementCluster(definition: ClusterInterface<any, any, any>) {
            const model = CodeModel.forCluster(definition);
            model.attributes.forEach((attr) => {
                attr; // TODO
            });

            model.commands.forEach((command) => {
                command; // TODO
            });

            model.events.forEach((event) => {
                event; // TODO
            });
        }

        interfaces.forEach(implementCluster);

        return <any>ExtendedDevice;
    }
}
