/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NumberedOccurrence, Occurrence } from "#events/Occurrence.js";
import { OccurrenceManager } from "#events/OccurrenceManager.js";
import {
    ImplementationError,
    InternalError,
    isObject,
    MatterAggregateError,
    MaybePromise,
    Storage,
    StorageOperationResult,
    Time,
} from "#general";
import { AccessLevel, ClusterModel, EventModel, MatterModel } from "#model";
import {
    Attributes,
    BitSchema,
    Cluster,
    ClusterId,
    Commands,
    Event,
    EventId,
    EventPriority,
    Events,
    FabricIndex,
    TlvEventFilter,
    TlvSchema,
    TypeFromPartialBitSchema,
    TypeFromSchema,
} from "#types";
import { Message } from "../../codec/MessageCodec.js";
import { EndpointInterface } from "../../endpoint/EndpointInterface.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";

export type AnyEventServer<T = any, S extends Storage = any> = EventServer<T, S> | FabricSensitiveEventServer<T, S>;

export function createEventServer<
    T,
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    A extends Attributes,
    C extends Commands,
    E extends Events,
    S extends Storage,
>(
    clusterDef: Cluster<F, SF, A, C, E>,
    eventDef: Event<T, F>,
    eventName: string,
    schema: TlvSchema<T>,
    priority: EventPriority,
    readAcl: AccessLevel | undefined,
): EventServer<T, S> {
    let fabricSensitive = false;
    const clusterFromModel = MatterModel.standard.get(ClusterModel, clusterDef.id);
    if (clusterFromModel !== undefined) {
        const eventModel = clusterFromModel.get(EventModel, eventDef.id);
        if (eventModel !== undefined) {
            fabricSensitive = eventModel.fabricSensitive;
        }
    }
    if (fabricSensitive) {
        return new FabricSensitiveEventServer(eventDef.id, clusterDef.id, eventName, schema, priority, readAcl);
    }
    return new EventServer(eventDef.id, clusterDef.id, eventName, schema, priority, readAcl);
}

export class EventServer<T = any, S extends Storage = any> {
    private eventList = new Array<Occurrence>();
    private readonly listeners = new Array<(event: NumberedOccurrence) => void>();
    protected endpoint?: EndpointInterface;
    protected eventHandler?: OccurrenceManager;
    #readAcl: AccessLevel | undefined;
    hasFabricSensitiveData = false;

    constructor(
        readonly id: EventId,
        readonly clusterId: ClusterId,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        readonly priority: EventPriority,
        readAcl: AccessLevel | undefined,
    ) {
        this.#readAcl = readAcl;
    }

    get readAcl() {
        return this.#readAcl ?? AccessLevel.View; // ???
    }

    assignToEndpoint(endpoint: EndpointInterface) {
        this.endpoint = endpoint;
    }

    // TODO Try to get rid of that late binding and simply things again
    //      potentially with refactoring out MatterDevice and MatterController
    bindToEventHandler(eventHandler: OccurrenceManager) {
        this.eventHandler = eventHandler;
        // Send all stored events to the new listener
        const promises = new Array<PromiseLike<void>>();
        for (const event of this.eventList) {
            const finalEvent = this.eventHandler.add(event);
            if (finalEvent !== undefined && MaybePromise.is(finalEvent)) {
                promises.push(finalEvent.then(e => this.listeners.forEach(listener => listener(e))));
            } else {
                this.listeners.forEach(listener => listener(finalEvent));
            }
        }
        this.eventList = [];
        if (promises.length > 0) {
            return MatterAggregateError.allSettled(promises, "Error binding events to the event handlers").then(
                () => {},
            ) as StorageOperationResult<S>;
        }
        return undefined as StorageOperationResult<S>;
    }

    triggerEvent(data: T) {
        if (this.endpoint === undefined || this.endpoint.number === undefined) {
            throw new InternalError("Endpoint not assigned");
        }
        const occurrence: Occurrence = {
            eventId: this.id,
            clusterId: this.clusterId,
            endpointId: this.endpoint.number,
            epochTimestamp: Time.nowMs(),
            priority: this.priority,
            payload: data,
        };
        if (this.eventHandler === undefined) {
            // As long as we have no occurrence manager, we store the events
            this.eventList.push(occurrence);
        } else {
            const finalEvent = this.eventHandler.add(occurrence);
            return MaybePromise.then(finalEvent, e => {
                this.listeners.forEach(listener => listener(e));
            }) as StorageOperationResult<S>;
        }
        return undefined as StorageOperationResult<S>;
    }

    addListener(listener: (event: NumberedOccurrence) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (event: NumberedOccurrence) => void) {
        const entryIndex = this.listeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.listeners.splice(entryIndex, 1);
        }
    }

    get(
        session: Session,
        isFabricFiltered: boolean,
        _message?: Message,
        filters?: TypeFromSchema<typeof TlvEventFilter>[],
    ) {
        if (this.eventHandler === undefined) {
            throw new InternalError("EventServer not bound to OccurrenceManager");
        }
        if (this.endpoint === undefined) {
            throw new InternalError("EventServer not bound to Endpoint");
        }

        return this.eventHandler.query(
            { endpointId: this.endpoint.number, clusterId: this.clusterId, eventId: this.id },
            filters,
            // When request is fabric filtered or the event is Fabric sensitive then filter the events for the fabrics
            isFabricFiltered ? ((session as SecureSession).fabric?.fabricIndex ?? FabricIndex.NO_FABRIC) : undefined,
        );
    }
}

export class FabricSensitiveEventServer<T, S extends Storage> extends EventServer<T, S> {
    override hasFabricSensitiveData = true;

    override get(
        session: Session,
        _isFabricFiltered: boolean,
        message?: Message,
        filters?: TypeFromSchema<typeof TlvEventFilter>[],
    ) {
        // because the event is fabric sensitive it is always filtered out when another fabric tries to access it
        return super.get(session, true, message, filters);
    }

    override triggerEvent(data: T) {
        if (!isObject(data) || data === null) {
            throw new ImplementationError("FabricSensitive events need to have an object as data.");
        }
        if (!("fabricIndex" in data)) {
            throw new InternalError("FabricSensitive events requires fabricIndex in data.");
        }
        return super.triggerEvent(data);
    }
}
