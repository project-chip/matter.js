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
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { ArraySchema } from "../../tlv/TlvArray.js";
import { NullableSchema } from "../../tlv/TlvNullable.js";
import { FieldType, ObjectSchema } from "../../tlv/TlvObject.js";
import { MatterError } from "../../common/MatterError.js";
import { Globals } from "../../model/index.js";

/**
 * Thrown when an operation cannot complete because fabric information is
 * unavailable.
 */
export class FabricScopeError extends MatterError { };

export abstract class BaseAttributeServer<T> {
    protected value: T;
    protected version = 0;
    protected endpoint?: Endpoint;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        readonly isWritable: boolean,
        readonly defaultValue: T,
    ) {
        this.value = defaultValue;
        this.schema.validate(defaultValue);
    }

    assignToEndpoint(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    /**
     * Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
     * adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
     */
    abstract init(value: T, version?: number): void;
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

    init(value: T, version?: number) {
        if (version !== undefined) {
            throw new Error("Version is not supported on fixed attributes");
        }
        this.schema.validate(value);
        this.value = value;
    }
}

/**
 * Base class for attribute servers that back mutable (non-fixed) attributes.
 */
export abstract class MutableAttributeServer<T> extends BaseAttributeServer<T> {
    set(value: T, session?: Session<MatterDevice>) {
        // TODO - ACL enforcement

        this.setFabricIndex(value, session?.getAccessingFabric().fabricIndex, this.schema);

        this.setRemote(value, session);
    }

    /**
     * Set an attribute value in the context of a remote request.
     */
    abstract setRemote(value: T, session?: Session<MatterDevice>): void;

    /**
     * Set the value for the global "FabricIndex" attribute.
     */
    private setFabricIndex(value: any, fabricIndex: FabricIndex | undefined, schema: TlvSchema<any>) {
        if (schema instanceof ArraySchema) {
            if (Array.isArray(value)) {
                for (const item of value) {
                    this.setFabricIndex(item, fabricIndex, schema.elementSchema);
                }
            }
        } else if (schema instanceof NullableSchema) {
            this.setFabricIndex(value, fabricIndex, schema.schema);
        } else if (schema instanceof ObjectSchema) {
            if (typeof schema !== "object") {
                return;
            }

            for (const k in schema.fieldDefinitions) {
                const field = schema.fieldDefinitions[k] as FieldType<any>;

                // 0xfe = global FieldIndex attribute
                if (field.id === Globals.FabricIndex.id) {
                    if (fabricIndex === undefined) {
                        throw new FabricScopeError("Session is required to initialize fabricIndex attribute");
                    }

                    value[k] = fabricIndex;
                } else {
                    this.setFabricIndex(value[k], fabricIndex, field.schema);
                }
            }
        }
    }
}

/**
 * Attribute server for normal attributes that can be read and written.
 */
export class AttributeServer<T> extends MutableAttributeServer<T> {
    private readonly matterListeners = new Array<(value: T, version: number) => void>();
    private readonly listeners = new Array<(newValue: T, oldValue: T) => void>();

    /** Initialize the value of the attribute, used when a persisted value is set initially */
    override init(value: T, version: number) {
        this.schema.validate(value);
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

    setRemote(value: T, _session?: Session<MatterDevice>) {
        this.setLocal(value);
    }

    setLocal(value: T) {
        const oldValue = this.value;
        if (!isDeepEqual(value, oldValue)) {
            this.schema.validate(value);
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
        isWritable: boolean,
        defaultValue: T,
        readonly getter: (session?: Session<MatterDevice>, endpoint?: Endpoint) => T,
    ) {
        super(id, name, schema, isWritable, defaultValue);
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
export class FabricScopedAttributeServer<T> extends MutableAttributeServer<T>{
    private readonly matterListeners = new Array<(value: T, version: number) => void>();
    private readonly listeners = new Array<(newValue: T, oldValue: T) => void>();

    constructor(
        id: number,
        name: string,
        schema: TlvSchema<T>,
        isWritable: boolean,
        defaultValue: T,
        readonly cluster: Cluster<any, any, any, any, any>,
    ) {
        super(id, name, schema, isWritable, defaultValue);
    }

    setRemote(value: T, session?: Session<MatterDevice>) {
        if (session === undefined) throw new FabricScopeError("Session is required for fabric scoped attributes");
        this.setLocal(value, (session as SecureSession<MatterDevice>).getAccessingFabric());
    }

    setLocal(value: T, fabric: Fabric) {
        const oldData = fabric.getScopedClusterDataValue<{ version: number, value: T }>(this.cluster, this.name);
        const oldValue = oldData?.value ?? this.defaultValue;
        let version = oldData?.version ?? 0;
        if (!isDeepEqual(value, oldValue)) {
            this.schema.validate(value);
            version++;
            fabric.setScopedClusterDataValue(this.cluster, this.name, { version, value });
            this.matterListeners.forEach(listener => listener(value, version)); // TODO Make callbacks sense without fabric, but then they would have other signature?
        }
        this.listeners.forEach(listener => listener(value, oldValue)); // TODO Make callbacks sense without fabric, but then they would have other signature?
    }

    get(session?: Session<MatterDevice>): T {
        // TODO: check ACL
        if (session === undefined) throw new FabricScopeError("Session is required for fabric scoped attributes");

        return this.getLocal((session as SecureSession<MatterDevice>).getAccessingFabric());
    }

    getWithVersion(session?: Session<MatterDevice>) {
        // TODO: check ACL
        if (session === undefined) throw new FabricScopeError("Session is required for fabric scoped attributes");

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

    init(_value: T, _version?: number) {
        throw new Error("Initialization is not supported on fabric scoped attributes");
    }
}
