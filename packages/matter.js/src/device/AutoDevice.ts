/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Device } from "./Device.js";
import { DeviceTypeDefinition } from "./DeviceTypes.js";
import { CodeModel, ClusterInterface, ClusterModel, AttributeModel, CommandModel, EventModel } from "./CodeModel.js";

// AutoDevice static private, AutoDeviceOptions private
const DEFINITION = Symbol("definition");
const STATE_IMPLEMENTATION = Symbol("StateImplementation");

// AutoDevice private
const STATE = Symbol("state");

// AutoDeviceOptions private
const DEVICE = Symbol("device");

// State has no fields by default except one private field that allows wired
// properties to access the containing device
type BaseState = {
    [DEVICE]: AutoDevice;
};

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

/**
 * Methods related to state management.
 */
export interface StateManager<State extends BaseState> {
    /**
     * Access current attribute values.
     */
    get state(): State;

    /**
     * Update internal state.
     * 
     * @param state an object mapping attribute names to new values
     */
    set(changes: Partial<State>): void;

    /**
     * Process a validated write request from the fabric.  The default
     * implementation applies all writes directly to internal state.
     * 
     * Derivatives should override this method to process state changes that
     * have external dependencies.
     * 
     * @param state the attribute values to change
     */
    write(changes: Partial<State>): Promise<void>;
}

type Constructor = new (...args: any[]) => AutoDevice & StateManager<BaseState>

/**
 * Construction options for AutoDevice.
 */
export type AutoDeviceOptions<State> = {
    state?: Partial<State>;
    endpointId?: number;
}

// Wiring targets, used to pass closure privates into wiring logic
class WiringContext {
    constructor(
        // The cluster to wire
        public cluster: ClusterModel,

        // Hooks invoked at construction time to do perform setup
        public constructors: Array<(this: AutoDevice) => void>,

        // Target prototype for device class
        public device: any,

        // Target prototype for state class
        public state: any,
    ) {};

    // Access the cluster server.  This is called from *inside* wiring logic
    // at runtime to access the ClusterServer
    server(implementation: AutoDevice | BaseState) {
        if (implementation instanceof Device) {
            return implementation.getClusterServer(this.cluster.definition);
        }
        return this.server(implementation[DEVICE]);
    }
}

// Wire cluster server construction
function wireClusterServer(context: WiringContext) {
    // TODO - select or create cluster server
    context;

    context.constructors.push(function(this: AutoDevice) {
        // TODO - instantiate cluster server
    });
}

// Implement the state interface
function wireAttributeState(context: WiringContext, attr: AttributeModel) {
    const getter = attr.getter;
    const setter = attr.setter;
    const descriptor = <PropertyDescriptor>{
        get() {
            return context.server(this)[getter]();
        }
    };

    if (attr.default !== undefined) descriptor.value = attr.default;

    if (attr.writable)
        descriptor.set = function(this: BaseState, value) {
            context.server(this)[setter](value);
            return true;
        }
    else
        descriptor.writable = false;

    Object.defineProperty(context.state, attr.name, descriptor);
}

// Implement device change events
function wireAttributeEvent(context: WiringContext, attr: AttributeModel) {
    // TODO
    context;
    attr;
}

// Implement device commands
function wireCommand(context: WiringContext, command: CommandModel) {
    // TODO    
    context;
    command;
}

// Implement device events
function wireEvent(context: WiringContext, event: EventModel) {
    // TODO - finish once InteractionServer has event support
    context;
    event;
}

// Auto-wire state and device interfaces for a specific cluster
function wire(context: WiringContext) {
    wireClusterServer(context);

    context.cluster.attributes.forEach((attr) => {
        wireAttributeState(context, attr);
        wireAttributeEvent(context, attr);
    });

    context.cluster.commands.forEach((command) => {
        wireCommand(context, command);
    });
    
    context.cluster.events.forEach((event) => {
        wireEvent(context, event);
    });
}

/**
 * An extension of Device that offers automatic cluster implementation.  You
 * probably want to access via one of standard device modules.
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
            BaseT extends Constructor,
            Interfaces extends ClusterInterface<any, any, any>[]
        >(
            base: BaseT,
            ...interfaces: Interfaces
        ) {
        return this.extendWithDefinition(base, undefined, ...interfaces);
    }

    // TODO - should probably be memoized
    // This is about as pretty as I can make it.  We're abusing TypeScript
    // pretty badly here
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
        const BaseState = <new (device: AutoDevice) => any>(<any>base)[STATE_IMPLEMENTATION];
        class ExtendedState extends BaseState {
            constructor(device: AutoDevice) {
                super(device);
            }
        }

        // ExtendedDevice private 
        const constructors = new Array<(this: AutoDevice) => void>;

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
                args[0][STATE_IMPLEMENTATION] = ExtendedState;

                // It's probably completely unclear from this code but we're
                // building a normal class hierarchy.  This invokes the base
                // AutoDevice constructor and any code from previous extensions
                super(...args);

                // Any construction-time wiring logic goes here
                constructors.forEach((initializer) => initializer.apply(this));
            }
        }

        interfaces.forEach((cluster) => wire(new WiringContext(
            CodeModel.forCluster(cluster),
            constructors,
            ExtendedDevice.prototype,
            ExtendedState.prototype
        )));

        return <any>ExtendedDevice;
    }
}
