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
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";

/**
 * Base class for all attribute servers.
 */
export abstract class BaseAttributeServer<T> {
    /**
     * The value is undefined when getter/setter are used. But we still handle the version number here.
     */
    protected value: T | undefined = undefined;
    protected version = 0;
    protected endpoint?: Endpoint;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        protected readonly schemaValidator: (value: T, name: string) => void,
        readonly isWritable: boolean,
        readonly isSubscribable: boolean,
        readonly defaultValue: T,

        /**
         * Optional getter function to handle special requirements or the data are stored in different places.
         * If a getter method is used for a writable attribute, the setter method must be implemented as well.
         *
         * @param session the session that is requesting the value (if any).
         * @param endpoint the endpoint the cluster server of this attribute is assigned to.
         * @param isFabricFiltered whether the read request is fabric scoped or not
         */
        readonly getter?: (session?: Session<MatterDevice>, endpoint?: Endpoint, isFabricFiltered?: boolean) => T,

        /**
         * Optional setter function to handle special requirements or the data are stored in different places.
         * If a setter method is used for a writable attribute, the getter method must be implemented as well.
         * The method needs to return if the stored value has changed or not.
         *
         * @param value the value to be set.
         * @param session the session that is requesting the value (if any).
         * @param endpoint the endpoint the cluster server of this attribute is assigned to.
         * @returns true if the value has changed, false otherwise.
         */
        readonly setter?: (value: T, session?: Session<MatterDevice>, endpoint?: Endpoint) => boolean,

        /**
         * Optional Validator function to handle special requirements for verification of stored data.
         * The method should throw an error if the value is not valid. If a StatusResponseError is thrown this one is
         * also returned to the client.
         * If a setter is used then no validator should be used as the setter should handle the validation itself!
         *
         * @param value the value to be set.
         * @param session the session that is requesting the value (if any).
         * @param endpoint the endpoint the cluster server of this attribute is assigned to.
         */
        readonly validator?: (value: T, session?: Session<MatterDevice>, endpoint?: Endpoint) => void,
    ) {
        schemaValidator(defaultValue, name);
        if (this.getter === undefined && this.setter === undefined) {
            this.value = defaultValue;
        } else if (isWritable && (this.getter === undefined || this.setter === undefined)) {
            throw new Error("Getter and setter must be implemented together when attribute is writeable.");
        }
        if (this.validator !== undefined && this.setter !== undefined) {
            throw new Error("Validator and setter must not be implemented together.");
        }
    }

    assignToEndpoint(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    /**
     * Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
     * adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
     */
    abstract init(value: T | undefined, version?: number): void;
}

/**
 * Attribute server class that handled fixed attribute values that never change and is the base class for other
 * Attribute server types.
 */
export class FixedAttributeServer<T> extends BaseAttributeServer<T> {
    readonly isFixed: boolean = true;

    /**
     * Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
     * and includes the ACL check. It should not be used locally in the code!
     * If a getter is defined the value is determined by that getter method.
     */
    get(session?: Session<MatterDevice>, isFabricFiltered?: boolean): T {
        // TODO: check ACL

        if (this.getter !== undefined) {
            return this.getter(session, this.endpoint, isFabricFiltered);
        }

        return this.getLocal();
    }

    /**
     * Get the value of the attribute including the version number. This method is used by the Interaction model to read
     * the value of the attribute and includes the ACL check. It should not be used locally in the code!
     * If a getter is defined the value is determined by that getter method. The version number is always 0 for fixed
     * attributes.
     */
    getWithVersion(session?: Session<MatterDevice>, isFabricFiltered?: boolean) {
        return { version: this.version, value: this.get(session, isFabricFiltered) };
    }

    /**
     * Get the value of the attribute locally. This method should be used locally in the code and does not include the
     * ACL check.
     * If a getter is defined the value is determined by that getter method.
     */
    getLocal(): T {
        if (this.getter !== undefined) {
            return this.getter(undefined, this.endpoint);
        }
        if (this.value === undefined) { // Should not happen
            throw new Error("Attribute value is not initialized.");
        }
        return this.value;
    }

    /**
     * Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
     * adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
     * If a getter or setter is defined the value must be undefined The version number must also be undefined.
     */
    init(value: T | undefined, version?: number) {
        if (version !== undefined) {
            throw new Error("Version is not supported on fixed attributes.");
        }
        if (this.setter !== undefined || this.getter !== undefined) {
            throw new Error("Can not initialize fixed attributes with getter or setter methods.");
        }
        if (value === undefined) {
            throw new Error("Can not initialize fixed attributes with undefined value.");
        }
        this.schemaValidator(value, this.name);
        this.value = value;
    }
}

/**
 * Attribute server for normal attributes that can be read and written.
 */
export class AttributeServer<T> extends FixedAttributeServer<T> {
    override readonly isFixed = false;
    private readonly matterListeners = new Array<(value: T, version: number) => void>();
    private readonly listeners = new Array<(newValue: T, oldValue: T) => void>();

    /**
     * Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
     * adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
     */
    override init(value: T | undefined, version: number) {
        if (this.setter !== undefined || this.getter !== undefined) {
            if (value !== undefined) {
                throw new Error("Can not initialize attributes with getter or setter methods and a value.");
            }
        } else if (value === undefined) {
            throw new Error("Can not initialize attributes with undefined value.");
        }
        if (value !== undefined) {
            this.schemaValidator(value, this.name);
            this.value = value;
        }
        this.version = version;
    }

    /**
     * Set the value of the attribute. This method is used by the Interaction model to write the value of the attribute
     * and includes the ACL check. It should not be used locally in the code!
     * If a setter is defined this setter method is called to store the value.
     * Listeners are called when the value changes (internal listeners) or in any case (external listeners).
     */
    set(value: T, session?: Session<MatterDevice>) {
        if (!this.isWritable) {
            throw new StatusResponseError(`Attribute ${this.name} is not writable.`, StatusCode.UnsupportedWrite);
        }
        // TODO: check ACL

        if (this.setter !== undefined) {
            if (this.getter === undefined) {
                throw new Error("Attributes with Setter methods also need a Getter method to be readable.");
            }

            this.schemaValidator(value, this.name);

            const oldValue = this.getter(session, this.endpoint);
            const valueChanged = this.setter(value, session, this.endpoint);
            if (valueChanged) {
                this.version++;
                this.matterListeners.forEach(listener => listener(value, this.version));
            }
            this.listeners.forEach(listener => listener(value, oldValue));
            return;
        }

        this.setLocal(value);
    }

    /**
     * Set the value of the attribute locally. This method should be used locally in the code and does not include the
     * ACL check.
     * If a setter is defined this setter method is called to validate and store the value.
     * Else if a validator is defined the value is validated before it is stored.
     * Listeners are called when the value changes (internal listeners) or in any case (external listeners).
     */
    setLocal(value: T) {
        this.schemaValidator(value, this.name);

        if (this.setter !== undefined) {
            if (this.getter === undefined) {
                throw new Error("Attributes with Setter methods also need a Getter method to be readable.");
            }

            const oldValue = this.getter(undefined, this.endpoint);
            const valueChanged = this.setter(value, undefined, this.endpoint);
            if (valueChanged) {
                this.version++;
                this.matterListeners.forEach(listener => listener(value, this.version));
            }
            this.listeners.forEach(listener => listener(value, oldValue));
            return;
        }

        if (this.validator !== undefined) {
            this.validator(value, undefined, this.endpoint);
        }

        const oldValue = this.value;
        if (!isDeepEqual(value, oldValue)) {
            this.version++;
            this.value = value;
            this.matterListeners.forEach(listener => listener(value, this.version));
        }
        if (oldValue !== undefined) { // should always be the case, but let's make sure
            this.listeners.forEach(listener => listener(value, oldValue));
        }
    }

    /**
     * When the value is handled by getter or setter methods and is changed by other processes this method can be used
     * to notify the attribute server that the value has changed. This will increase the version number and trigger the
     * listeners.
     * ACL checks needs to be performed before calling this method.
     */
    updated(session?: SecureSession<MatterDevice>) {
        if (this.getter === undefined && this.setter === undefined) {
            throw new Error("Updated can only be used if the attribute has a getter or setter method.");
        }
        const value = this.get(session, true);
        this.version++;
        this.matterListeners.forEach(listener => listener(value, this.version));
        // We can not call the internal listeners here, because we do not know the old value.
    }

    /**
     * Add an internal listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the version number.
     */
    addMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.push(listener);
    }

    /**
     * Remove an internal listener.
     */
    removeMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.splice(this.matterListeners.findIndex(item => item === listener), 1);
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value.
     */
    addListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.push(listener);
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value. This method is a convenient alias for addListener.
     */
    subscribe(listener: (newValue: T, oldValue: T) => void) {
        this.addListener(listener);
    }

    /**
     * Remove an external listener.
     */
    removeListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.splice(this.listeners.findIndex(item => item === listener), 1);
    }
}

/**
 * Attribute server which is getting and setting the value for a defined fabric. The values are automatically persisted
 * on fabric level if no custom getter or setter is defined.
 */
export class FabricScopedAttributeServer<T> extends BaseAttributeServer<T>{
    readonly isFixed = false;
    private readonly matterListeners = new Array<(value: T, version: number) => void>();
    private readonly listeners = new Array<(newValue: T, oldValue: T) => void>();

    constructor(
        id: number,
        name: string,
        schema: TlvSchema<T>,
        schemaValidator: (value: T, name: string) => void,
        isWritable: boolean,
        isSubscribable: boolean,
        defaultValue: T,
        readonly cluster: Cluster<any, any, any, any, any>,
        getter?: (session?: Session<MatterDevice>, endpoint?: Endpoint, isFabricFiltered?: boolean) => T,
        setter?: (value: T, session?: Session<MatterDevice>, endpoint?: Endpoint) => boolean,
        validator?: (value: T, session?: Session<MatterDevice>, endpoint?: Endpoint) => void,
    ) {
        super(id, name, schema, schemaValidator, isWritable, isSubscribable, defaultValue, getter, setter, validator);
    }

    /**
     * Initialize the attribute with a value. Because the value is stored on fabric level this method only initializes
     * the version number.
     */
    override init(value: T | undefined, version?: number) {
        if (value !== undefined) {
            throw new Error("Can not initialize fabric scoped attributes with a value.");
        }
        this.version = version ?? 0;
    }

    /**
     * Set the value of the attribute. This method is used by the Interaction model to write the value of the attribute
     * and includes the ACL check. It should not be used locally in the code!
     * If a setter is defined this setter method is called to store the value.
     * Listeners are called when the value changes (internal listeners) or in any case (external listeners).
     */
    set(value: T, session?: Session<MatterDevice>) {
        if (!this.isWritable) {
            throw new StatusResponseError(`Attribute ${this.name} is not writable.`, StatusCode.UnsupportedWrite);
        }
        // TODO: check ACL

        if (this.setter !== undefined) {
            if (this.getter === undefined) {
                throw new Error("Attributes with Setter methods also need a Getter method to be readable.");
            }
            this.schemaValidator(value, this.name);

            const oldValue = this.getter(session, this.endpoint, true);
            const valueChanged = this.setter(value, session, this.endpoint);
            if (valueChanged) {
                this.version++;
                this.matterListeners.forEach(listener => listener(value, this.version)); // TODO Make callbacks sense without fabric, but then they would have other signature?
            }
            this.listeners.forEach(listener => listener(value, oldValue));
            return;
        }

        if (session === undefined) throw new Error("Session is required for fabric scoped attributes");
        this.setLocal(value, (session as SecureSession<MatterDevice>).getAccessingFabric());
    }

    /**
     * Set the value of the attribute locally. This method should be used locally in the code and does not include the
     * ACL check.
     * If a setter is defined this method can not be used!
     * If a validator is defined the value is validated before it is stored.
     * Listeners are called when the value changes (internal listeners) or in any case (external listeners).
     */
    setLocal(value: T, fabric: Fabric) {
        if (this.setter !== undefined) {
            throw new Error("Setter method is not allowed to set fabric scoped attributes locally.");
        }

        this.schemaValidator(value, this.name);

        if (this.validator !== undefined) {
            this.validator(value, undefined, this.endpoint);
        }

        const oldData = fabric.getScopedClusterDataValue<{ value: T }>(this.cluster, this.name);
        const oldValue = oldData?.value ?? this.defaultValue;
        if (!isDeepEqual(value, oldValue)) {
            this.version++;
            fabric.setScopedClusterDataValue(this.cluster, this.name, { value });
            this.matterListeners.forEach(listener => listener(value, this.version)); // TODO Make callbacks sense without fabric, but then they would have other signature?
        }
        this.listeners.forEach(listener => listener(value, oldValue)); // TODO Make callbacks sense without fabric, but then they would have other signature?
    }

    /**
     * Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
     * and includes the ACL check. It should not be used locally in the code!
     * If a getter is defined the value is determined by that getter method.
     */
    get(session?: Session<MatterDevice>, isFabricFiltered?: boolean): T {
        // TODO: check ACL

        if (this.getter !== undefined) {
            return this.getter(session, this.endpoint, isFabricFiltered);
        }

        if (session === undefined) throw new Error("Session is required for fabric scoped attributes");
        if (!isFabricFiltered) throw new Error("Default attribute getter only support Fabric scoped reads");

        return this.getLocal((session as SecureSession<MatterDevice>).getAccessingFabric());
    }

    /**
     * Get the value of the attribute including the version number. This method is used by the Interaction model to read
     * the value of the attribute and includes the ACL check. It should not be used locally in the code!
     * If a getter is defined the value is determined by that getter method. The version number is always 0 for fixed
     * attributes.
     */
    getWithVersion(session?: Session<MatterDevice>, isFabricFiltered?: boolean) {
        // TODO: check ACL

        if (this.getter !== undefined) {
            return { version: this.version, value: this.getter(session, this.endpoint, isFabricFiltered) };
        }

        if (session === undefined) throw new Error("Session is required for fabric scoped attributes");
        if (!isFabricFiltered) throw new Error("Default attribute getter only support Fabric scoped reads");

        const fabric = (session as SecureSession<MatterDevice>).getAccessingFabric();
        const data = fabric.getScopedClusterDataValue<{ value: T }>(this.cluster, this.name);
        const value: T = data?.value ?? this.defaultValue;

        return { version: this.version, value };
    }

    /**
     * Get the value of the attribute locally. This method should be used locally in the code and does not include the
     * ACL check.
     * When the value is not handled by a getter isFabricFiltered needs to be true.
     * If a getter is defined the value is determined by that getter method.
     */
    getLocal(fabric: Fabric, isFabricFiltered?: boolean): T {
        if (this.getter !== undefined) {
            return this.getter(undefined, this.endpoint, isFabricFiltered);
        }

        if (!isFabricFiltered) throw new Error("Default attribute getter only support Fabric scoped reads");

        const data = fabric.getScopedClusterDataValue<{ value: T }>(this.cluster, this.name);
        return data?.value ?? this.defaultValue;
    }

    /**
     * When the value is handled by getter or setter methods and is changed by other processes this method can be used
     * to notify the attribute server that the value has changed. This will increase the version number and trigger the
     * internal listeners. External listeners are not triggered by this method.
     * ACL checks needs to be performed before calling this method.
     */
    updated(session?: SecureSession<MatterDevice>) {
        const value = this.get(session, true);
        this.version++;
        this.matterListeners.forEach(listener => listener(value, this.version));
        // We can not call the internal listeners here, because we do not know the old value.
    }

    /**
     * Add an internal listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the version number.
     */
    addMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.push(listener);
    }

    /**
     * Remove an internal listener.
     */
    removeMatterListener(listener: (value: T, version: number) => void) {
        this.matterListeners.splice(this.matterListeners.findIndex(item => item === listener), 1);
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value.
     */
    addListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.push(listener);
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value. This method is a convenient alias for addListener.
     */
    subscribe(listener: (newValue: T, oldValue: T) => void) {
        this.addListener(listener);
    }

    /**
     * Remove an external listener.
     */
    removeListener(listener: (newValue: T, oldValue: T) => void) {
        this.listeners.splice(this.listeners.findIndex(item => item === listener), 1);
    }
}
