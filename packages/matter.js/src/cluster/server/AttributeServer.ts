/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Session } from "../../session/Session.js";
import { SecureSession } from "../../session/SecureSession.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";
import { Endpoint } from "../../device/Endpoint.js";
import { Cluster } from "../Cluster.js";
import { Fabric } from "../../fabric/Fabric.js";
import { isDeepEqual } from "../../util/DeepEqual.js";

export abstract class BaseAttributeServer<T> {
    protected value: T;
    protected version = 0;
    protected endpoint?: Endpoint;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        protected readonly validator: (value: T, name: string) => void,
        readonly isWritable: boolean,
        readonly defaultValue: T,
    ) {
        validator(defaultValue, name);
        this.value = defaultValue;
    }

    assignToEndpoint(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    /** Initialize the value of the attribute, used when a persisted value is set initially */
    init(_value: T, _version: number) {
        /* no init for fixed because configuration wins */
    }
}

/**
 * Attribute server class that handled fixed attribute values that never change and is the base class for other
 * Attribute server types.
 */
export class FixedAttributeServer<T> extends BaseAttributeServer<T> {
    get(_session?: Session<MatterDevice>): T {
        // TODO: check ACL

        return this.getLocal();
    }

    getWithVersion(session?: Session<MatterDevice>) {
        return { version: this.version, value: this.get(session) };
    }

    getLocal(): T {
        return this.value;
    }
}

/**
 * Attribute server for normal attributes that can be read and written.
 */
export class AttributeServer<T> extends BaseAttributeServer<T> {
    private readonly matterListeners = new Array<(value: T, version: number) => void>();
    private readonly listeners = new Array<(newValue: T, oldValue: T) => void>();

    /** Initialize the value of the attribute, used when a persisted value is set initially */
    override init(value: T, version: number) {
        this.validator(value, this.name);
        this.version = version;
        this.value = value;
    }

    get(_session?: Session<MatterDevice>): T {
        // TODO: check ACL

        return this.getLocal();
    }

    getWithVersion(session?: Session<MatterDevice>) {
        return { version: this.version, value: this.get(session) };
    }

    getLocal(): T {
        return this.value;
    }

    set(value: T, _session?: Session<MatterDevice>) {
        // TODO: check ACL

        this.setLocal(value);
    }

    setLocal(value: T) {
        const oldValue = this.value;
        if (!isDeepEqual(value, oldValue)) {
            this.validator(value, this.name);
            this.version++;
            this.value = value;
            this.matterListeners.forEach(listener => listener(value, this.version));
        }
        this.listeners.forEach(listener => listener(value, oldValue));
    }

    addMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.push(listener);
    }

    removeMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.splice(this.matterListeners.findIndex(item => item === listener), 1);
    }

    addListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.push(listener);
    }

    subscribe(listener: (newValue: T, oldValue: T) => void) {
        this.addListener(listener);
    }

    removeListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.splice(this.listeners.findIndex(item => item === listener), 1);
    }
}

/**
 * Attribute Server class where the value is dynamically queried on need. This means it can only be read by calling a
 * getter function and no set is allowed.
 */
export class AttributeGetterServer<T> extends AttributeServer<T> {

    constructor(
        id: number,
        name: string,
        schema: TlvSchema<T>,
        validator: (value: T, name: string) => void,
        isWritable: boolean,
        defaultValue: T,
        readonly getter: (session?: Session<MatterDevice>, endpoint?: Endpoint) => T,
    ) {
        super(id, name, schema, validator, isWritable, defaultValue);
    }

    override setLocal(_value: T) {
        throw new Error("Setter is not supported on attribute defined by a getter");
    }

    override get(session?: SecureSession<MatterDevice>): T {
        // TODO: check ACL
        // TODO handle "version" for getter
        return this.getter(session, this.endpoint);
    }
}

/**
 * Attribute server which is getting and setting the value for a defined fabric. The data are automatically persisted
 * on fabric level.
 */
export class FabricScopedAttributeServer<T> extends BaseAttributeServer<T>{
    private readonly matterListeners = new Array<(value: T, version: number) => void>();
    private readonly listeners = new Array<(newValue: T, oldValue: T) => void>();

    constructor(
        id: number,
        name: string,
        schema: TlvSchema<T>,
        validator: (value: T, name: string) => void,
        isWritable: boolean,
        defaultValue: T,
        readonly cluster: Cluster<any, any, any, any, any>,
    ) {
        super(id, name, schema, validator, isWritable, defaultValue);
    }

    set(value: T, session?: Session<MatterDevice>) {
        if (session === undefined) throw new Error("Session is required for fabric scoped attributes");
        // TODO: check ACL
        this.setLocal(value, (session as SecureSession<MatterDevice>).getAccessingFabric());
    }

    setLocal(value: T, fabric: Fabric) {
        const oldData = fabric.getScopedClusterDataValue<{ version: number, value: T }>(this.cluster, this.name);
        const oldValue = oldData?.value ?? this.defaultValue;
        let version = oldData?.version ?? 0;
        if (!isDeepEqual(value, oldValue)) {
            this.validator(value, this.name);
            version++;
            fabric.setScopedClusterDataValue(this.cluster, this.name, { version, value });
            this.matterListeners.forEach(listener => listener(value, version)); // TODO Make callbacks sense without fabric, but then they would have other signature?
        }
        this.listeners.forEach(listener => listener(value, oldValue)); // TODO Make callbacks sense without fabric, but then they would have other signature?
    }

    get(session?: Session<MatterDevice>): T {
        // TODO: check ACL
        if (session === undefined) throw new Error("Session is required for fabric scoped attributes");

        return this.getLocal((session as SecureSession<MatterDevice>).getAccessingFabric());
    }

    getWithVersion(session?: Session<MatterDevice>) {
        // TODO: check ACL
        if (session === undefined) throw new Error("Session is required for fabric scoped attributes");

        const fabric = (session as SecureSession<MatterDevice>).getAccessingFabric();
        const data = fabric.getScopedClusterDataValue<{ version: number, value: T }>(this.cluster, this.name);
        const value: T = data?.value ?? this.defaultValue;
        const version = data?.version ?? 0;

        return { version, value };
    }

    getLocal(fabric: Fabric): T {
        const data = fabric.getScopedClusterDataValue<{ version: number, value: T }>(this.cluster, this.name);
        return data?.value ?? this.defaultValue;
    }

    addMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.push(listener);
    }

    removeMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.splice(this.matterListeners.findIndex(item => item === listener), 1);
    }

    addListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.push(listener);
    }

    subscribe(listener: (newValue: T, oldValue: T) => void) {
        this.addListener(listener);
    }

    removeListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.splice(this.listeners.findIndex(item => item === listener), 1);
    }
}
