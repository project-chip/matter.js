// We agreed that server interface is the priority...  Here's a more detailed
// proposal on the API.
//
// Note 1: This is a conceptual interface that models what the current PR is
// generating (or will generate) for a single cluster.  I pulled it together
// into a single place for discussion purposes.
//
// Question 1. We just call this "Device" but it's really a "ServerDevice".
// In a controller we could potentially also have a "ClientDevice" that looks
// very similar but proxies over the fabric to a remote endpoint.  So should
// we consider making space in the API for a future Client/Server bifurcation
// or am I thinking about this wrong?
//
// Note 2. The concept of a "ClientDevice" wouldn't be just for controllers, it
// would also be for client clusters of a "ServerDevice".  I think.

// ATTRIBUTES VALUES
//
// Attribute values are stored in an immutable "State" object.  This is not
// necessarily the "source of truth".  It's just what the implementation
// has conveyed to matter.js as the current attribute values.
//
// Note 3: (no longer relevant)
//
// Question 2: (resolved myself)
type State = {
    readonly currentLevel: number | undefined;
    readonly minLevel?: number;
    readonly maxLevel?: number;
    readonly onOffTransitionTime?: number;
    readonly onLevel: number | undefined;
    readonly onTransitionTime?: number | undefined;
    readonly offTransitionTime?: number | undefined;
    readonly defaultMoveRate?: number | undefined;
    readonly options: number;
    readonly remainingTime?: number;
    readonly startUpCurrentLevel?: number | undefined;
}

export interface PumpDevice extends Device {
    // ATTRIBUTE MUTATION
    //
    // This is how the device implementation tells matter.js that attribute
    // values are different.  Internal implementation would then read all
    // attribute values and push any changes into the appropriate
    // ClusterServer.
    //
    // Question 3: One reason I like this approach is I worry that notifying
    // matter.js for every change would get too chatty.  Right now changes
    // are coalesced in SubscriptionHandler before notifying subscribers so
    // I don't think this is an issue from a network perspective.  But there
    // are a lot of internal function calls for every attribute on every change
    // I don't think there's any immediate need for change but is it worth
    // considering for the shape of the public API for when there are hundreds
    // of endpoints and thousands of attributes on a low-power device?
    //
    // Note 4: (no longer relevant)
    set(changes: Partial<State>): void;

    // This is a convenience form of set for updating a single attribute.
    //
    // Note 8: We could also generate a setter for every individual attribute.
    // However, I worry that would encourage inefficient implementation.
    //
    // Note 9: Not sure how to validate value type in the interface so might
    // need to do that programmatically.
    set(name: keyof (State), value: any): void;

    // This is how matter.js conveys a request to change values from the
    // fabric.  It would be wired to AttributeServers via InteractionServer
    // internally.
    //
    // Question 4: We discussed whether this should be asynchronous or not.
    // I'm thinking of use cases like bridges or even I/O in the case of a
    // local device implementation.  But should this be asynchronous so an
    // attribute write fails if the "source of truth" rejects the change?
    //
    // Question 5: I worry about chattiness here too.  If we don't shape the
    // API like this, are we potentially forcing API consumers to handle
    // coalescing of values on their side?  For example, if a controller says
    // "turn this light to 70%, red, with a 5 second delay" am I correct in
    // surmising that a Hue bridge implementation would want to take receipt of
    // all three attribute changes simultaneously?
    write(changes: Partial<State>): Promise<void>;

    // COMMANDS
    //
    // These are callbacks.  The internal device implementation wires these to
    // a CommandServer via CommandHandler.  This means a device implementer
    // just needs to override a function to implement the functionality.
    //
    // Note 5: We can offer default implementations for these functions that
    // try to make the user's life easier.  But until we do that we can just
    // install a default implementation that throws a "not supported" error.
    // Then the fancier implementation won't be a breaking API change, it'll
    // just be a smarter default.
    invokeMoveToLevel(request: MoveToLevelRequest): Promise<void>;
    invokeMove(request: MoveRequest): Promise<void>;
    invokeStep(request: StepRequest): Promise<void>;
    invokeStop(request: StopRequest): Promise<void>;
    invokeMoveToLevelWithOnOff(request: MoveToLevelWithOnOffRequest): Promise<void>;
    invokeMoveWithOnOff(request: MoveWithOnOffRequest): Promise<void>;
    invokeStepWithOnOff(request: StepWithOnOffRequest): Promise<void>;
    invokeStopWithOnOff(request: StopWithOnOffRequest): Promise<void>;

    // EVENTS
    //
    // These are invoked by the API consumer to notify matter.js of an event.
    //
    // Question 6: I haven't figured where to wire these yet.  Is this bit of
    // interaction server still in flight or did I just miss it?
    //
    // Note 6: I'm assuming these are "fire and forget" so no need for
    // async.  Probably good to validate that assumption.
    //
    // Note 7: Pumps levels don't apparently have events so I had to snag these
    // from a different cluster for illustration purposes.
    triggerWiredFaultChange(): void;
    triggerBatFaultChange(): void;
    triggerBatChargeFaultChange(): void;
}
