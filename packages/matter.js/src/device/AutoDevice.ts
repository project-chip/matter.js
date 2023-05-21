/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Device } from "./Device.js";
import { DeviceTypeDefinition } from "./DeviceTypes.js";
import { CodeModel, ClusterInterface, ClusterModel, AttributeModel, CommandModel, EventModel, UntypedHandlers } from "./CodeModel.js";
import { ClusterServer } from "../protocol/interaction/InteractionServer.js";

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

function notImplemented() {
    throw new Error("Not implemented");
}

function ignore() {
}

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

type Constructor = new (...args: any[]) => any;

// TODO - should this be properly typed and added to the public API?  I'm
// thinking yes but want to wait to see if shape changes significantly first
type CallContext = { session: any, message: any, endpoint: any };

/**
 * Construction options for AutoDevice.
 */
export type AutoDeviceOptions<State> = {
    state?: Partial<State>;
    endpointId?: number;
}

// Automatic wiring support class
class WiringContext {
    private serverHandlers: UntypedHandlers = {};

    constructor(
        // The cluster to wire
        public cluster: ClusterModel,

        // Hooks invoked at construction time to do perform setup
        public initializers: Array<(this: AutoDevice, options: AutoDeviceOptions<BaseState>) => void>,

        // Target prototype for device class
        public deviceProto: any,

        // Target prototype for state class
        public stateProto: any,
    ) {}

    // Auto-wire state and device interfaces for a specific cluster
    wire() {
        this.cluster.attributes.forEach((attr) => {
            this.wireAttributeState(attr);
        });
        this.wireAttributeEvents();

        this.cluster.commands.forEach((command) => {
            this.wireCommand(command);
        });
        
        this.cluster.events.forEach((event) => {
            this.wireEvent(event);
        });

        this.wireClusterServer();
    }

    // Implement the state interface
    private wireAttributeState(attr: AttributeModel) {
        const cluster = this.cluster;

        // Getter
        const descriptor = <PropertyDescriptor>{
            get(this: BaseState) {
                return this[DEVICE].attributeFor(cluster, attr).getLocal();
            }
        };

        // Setter
        if (!attr.fixed) {
            descriptor.set = function(this: BaseState, value) {
                this[DEVICE].attributeFor(cluster, attr).setLocal(value);
                return true;
            }
        } else {
            descriptor.writable = false;
        }

        // Add the property
        Object.defineProperty(this.stateProto, attr.name, descriptor);

        // If there's a default "get" handler, install it
        // TODO - remove
        const handler = cluster.defaultServerHandlers[attr.getter];
        if (handler) this.serverHandlers[attr.getter] = handler;
    }

    // Implement attribute change events
    private wireAttributeEvents() {
        const cluster = this.cluster;

        // Add the callback function that just ignores the event
        cluster.attributes.forEach((attr) => this.deviceProto[attr.handler] = ignore);

        // Add an initializer that registers listeners
        this.initializers.push(function(this: AutoDevice) {
            cluster.attributes.forEach((attr) => {
                const clusterAttr = this.attributeFor(cluster, attr);
                clusterAttr.addListener((...args) =>
                    (<any>this)[attr.handler](...args));
            });
        });
    }

    // Implement device commands
    private wireCommand(command: CommandModel) {
        // Install the default handler
        const defaultHandler = this.cluster.defaultServerHandlers[command.handler];
        if (defaultHandler) {
            // TODO - this may not work or may otherwise change pending PR
            // conversations
            this.deviceProto[command.invoker] = function(request: any, { session, message, endpoint }: CallContext) {
                defaultHandler(request, session, message, endpoint);
            }
        } else {
            // No default handler - just throw "not implemented"
            this.deviceProto[command.invoker] = notImplemented;
        }

        // Add our handler that proxies to the default handler (if present)
        // through our prototype chain
        this.serverHandlers[command.handler] =
            async (request: any, session, message, endpoint: any) =>
                await endpoint[command.handler](request, { session, message, endpoint });
    }

    // Implement device events
    private wireEvent(event: EventModel) {
        // TODO - finish once InteractionServer has event support
        this.deviceProto[event.invoker] = notImplemented;
    }

    // Wire cluster server installation
    private wireClusterServer() {
        const cluster = this.cluster;
        const handlers = this.serverHandlers;
        this.initializers.push(function(this: AutoDevice, options: AutoDeviceOptions<BaseState>) {
            this.addClusterServer(ClusterServer(
                cluster.definition,
                Object.assign({}, cluster.defaultState, options.state || {}),
                handlers));
        });
    }
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

    serverFor(cluster: ClusterModel) {
        const server = this.getClusterServer(cluster.definition);
        if (server === undefined) {
            throw new Error(`Internal: No server for cluster ${cluster.name}`)
        }
        return server;
    }

    attributeFor(cluster: ClusterModel, attribute: AttributeModel) {
        const attr = this.serverFor(cluster).attributes[attribute.name];
        if (!attr) {
            throw new Error(`Internal: No attribute ${attribute.name} on cluster ${cluster.name} server`);
        }
        return attr;
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
        const initializers = new Array<(this: AutoDevice) => void>;

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
                initializers.forEach((initializer) => initializer.apply(<AutoDevice><unknown>this));
            }
        }

        interfaces.forEach((cluster) => {
            const context = new WiringContext(
                CodeModel.forCluster(cluster),
                initializers,
                ExtendedDevice.prototype,
                ExtendedState.prototype);
            context.wire();
        });

        return <any>ExtendedDevice;
    }
}
