/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Session } from "../../session/Session.js";
import { SecureSession } from "../../session/SecureSession.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";

export class AttributeServer<T> {
    private value: T;
    private version = 0;
    private readonly matterListeners = new Array<(value: T, version: number) => void>();
    private readonly listeners = new Array<(newValue: T, oldValue: T) => void>();

    constructor(
        readonly id: number,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        private readonly validator: (value: T, name: string) => void,
        readonly isWritable: boolean,
        readonly defaultValue: T,
    ) {
        validator(defaultValue, name);
        this.value = defaultValue;
    }

    set(value: T, _session?: Session<MatterDevice>) {
        // TODO: check ACL

        this.setLocal(value);
    }

    setLocal(value: T) {
        const oldValue = this.value;
        if (value !== oldValue) {
            this.validator(value, this.name);
            this.version++;
            this.value = value;
            this.matterListeners.forEach(listener => listener(value, this.version));
        }
        this.listeners.forEach(listener => listener(value, oldValue));
    }

    /** Initialize the value of the attribute, used when a persisted value is set initially */
    init(value: T, version: number) {
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

    addMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.push(listener);
    }

    removeMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.splice(this.matterListeners.findIndex(item => item === listener), 1);
    }

    addListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.splice(this.listeners.findIndex(item => item === listener), 1);
    }
}

export class AttributeGetterServer<T> extends AttributeServer<T> {

    constructor(
        id: number,
        name: string,
        schema: TlvSchema<T>,
        validator: (value: T, name: string) => void,
        isWritable: boolean,
        defaultValue: T,
        readonly getter: (session?: Session<MatterDevice>) => T,
    ) {
        super(id, name, schema, validator, isWritable, defaultValue);
    }

    override setLocal(_value: T) {
        throw new Error("Setter is not supported on attribute defined by a getter");
    }

    override get(session?: SecureSession<MatterDevice>): T {
        // TODO: check ACL
        // TODO handle "version" for getter
        return this.getter(session);
    }
}
