/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Message } from "../../codec/MessageCodec.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EventId } from "../../datatype/EventId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { EventData, EventHandler, EventStorageData } from "../../protocol/interaction/EventHandler.js";
import { TlvEventFilter } from "../../protocol/interaction/InteractionProtocol.js";
import { SecureSession } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";
import { Storage, StorageOperationResult } from "../../storage/Storage.js";
import { Time } from "../../time/Time.js";
import { TlvSchema, TypeFromSchema } from "../../tlv/TlvSchema.js";
import { MaybePromise } from "../../util/Promises.js";
import { AccessLevel, EventPriority } from "../Cluster.js";

export class EventServer<T, S extends Storage> {
    private eventList = new Array<EventData<T>>();
    private readonly listeners = new Array<(event: EventStorageData<T>) => void>();
    protected endpoint?: Endpoint;
    protected eventHandler?: EventHandler;
    #readAcl: AccessLevel | undefined;

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

    assignToEndpoint(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    // TODO Try to get rid of that late binding and simply things again
    //      potentially with refactoring out MatterDevice and MatterController
    bindToEventHandler(eventHandler: EventHandler<S>) {
        this.eventHandler = eventHandler;
        // Send all stored events to the new listener
        const promises = new Array<PromiseLike<void>>();
        for (const event of this.eventList) {
            const finalEvent = this.eventHandler.pushEvent(event);
            if (finalEvent !== undefined && MaybePromise.is(finalEvent)) {
                promises.push(finalEvent.then(e => this.listeners.forEach(listener => listener(e))));
            } else {
                this.listeners.forEach(listener => listener(finalEvent));
            }
        }
        this.eventList = [];
        if (promises.length > 0) {
            return Promise.all(promises).then(() => Promise.resolve()) as StorageOperationResult<S>;
        }
        return undefined as StorageOperationResult<S>;
    }

    triggerEvent(data: T) {
        if (this.endpoint === undefined || this.endpoint.number === undefined) {
            throw new InternalError("Endpoint not assigned");
        }
        const event: EventData<T> = {
            eventId: this.id,
            clusterId: this.clusterId,
            endpointId: this.endpoint.number,
            epochTimestamp: Time.nowMs(),
            priority: this.priority,
            data,
        };
        if (this.eventHandler === undefined) {
            // As long as we have no eventManager, we store the events
            this.eventList.push(event);
        } else {
            const finalEvent = this.eventHandler.pushEvent(event);
            return MaybePromise.then(finalEvent, e => {
                this.listeners.forEach(listener => listener(e));
            }) as StorageOperationResult<S>;
        }
        return undefined as StorageOperationResult<S>;
    }

    addListener(listener: (event: EventStorageData<T>) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (event: EventStorageData<T>) => void) {
        const entryIndex = this.listeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.listeners.splice(entryIndex, 1);
        }
    }

    get(
        session: Session<MatterDevice>,
        isFabricFiltered: boolean,
        _message?: Message,
        filters?: TypeFromSchema<typeof TlvEventFilter>[],
    ) {
        if (this.eventHandler === undefined) {
            throw new InternalError("EventServer not bound to EventHandler");
        }
        if (this.endpoint === undefined) {
            throw new InternalError("EventServer not bound to Endpoint");
        }
        return this.eventHandler.getEvents(
            { endpointId: this.endpoint.number, clusterId: this.clusterId, eventId: this.id },
            filters,
            // TODO When not fabricscoped event later then only pass isFabricFiltered through for fabric filtered variant
            isFabricFiltered && (session as SecureSession<any>).fabric
                ? session.associatedFabric.fabricIndex
                : undefined,
        );
    }
}

// TODO this can be added and used once we generate fabric scoped property in the Event definition
export class FabricScopedEventServer<T, S extends Storage> extends EventServer<T, S> {
    override triggerEvent(data: T) {
        if (typeof data !== "object" || data === null) {
            throw new ImplementationError("FabricScoped events need to have an object as data.");
        }
        if (!("fabricIndex" in data)) {
            throw new InternalError("FabricScoped events requires fabricIndex in data.");
        }
        return super.triggerEvent(data);
    }
}
