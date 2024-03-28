/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { Message } from "../../codec/MessageCodec.js";
import { ImplementationError, InternalError, MatterError } from "../../common/MatterError.js";
import { tryCatch } from "../../common/TryCatchHandler.js";
import { ValidationError } from "../../common/ValidationError.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { Endpoint as EndpointInterface } from "../../device/Endpoint.js";
import { Fabric } from "../../fabric/Fabric.js";
import { Logger } from "../../log/Logger.js";
import { Globals } from "../../model/index.js";
import { StatusCode, StatusResponseError } from "../../protocol/interaction/StatusCode.js";
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { NoAssociatedFabricError, SecureSession, assertSecureSession } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";
import { isDeepEqual } from "../../util/DeepEqual.js";
import { MaybePromise } from "../../util/Promises.js";
import { Attribute, Attributes, Cluster, Commands, Events } from "../Cluster.js";
import { ClusterDatasource } from "./ClusterServerTypes.js";

const logger = Logger.get("AttributeServer");

/**
 * Thrown when an operation cannot complete because fabric information is
 * unavailable.
 */
export class FabricScopeError extends MatterError {}

export type AnyAttributeServer<T> = AttributeServer<T> | FabricScopedAttributeServer<T> | FixedAttributeServer<T>;

/**
 * Factory function to create an attribute server.
 */
export function createAttributeServer<
    T,
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    A extends Attributes,
    C extends Commands,
    E extends Events,
>(
    clusterDef: Cluster<F, SF, A, C, E>,
    attributeDef: Attribute<T, F>,
    attributeName: string,
    initValue: T,
    datasource: ClusterDatasource,
    getter?: (
        session?: Session<MatterDevice>,
        endpoint?: EndpointInterface,
        isFabricFiltered?: boolean,
        message?: Message,
    ) => T,
    setter?: (value: T, session?: Session<MatterDevice>, endpoint?: EndpointInterface, message?: Message) => boolean,
    validator?: (value: T, session?: Session<MatterDevice>, endpoint?: EndpointInterface) => void,
) {
    const { id, schema, writable, fabricScoped, fixed, omitChanges, timed, default: defaultValue } = attributeDef;

    if (fixed) {
        return new FixedAttributeServer(
            id,
            attributeName,
            schema,
            writable,
            false,
            timed,
            initValue,
            defaultValue,
            datasource,
            getter,
        );
    }

    if (fabricScoped) {
        return new FabricScopedAttributeServer(
            id,
            attributeName,
            schema,
            writable,
            !omitChanges,
            timed,
            initValue,
            defaultValue,
            clusterDef,
            datasource,
            getter,
            setter,
            validator,
        );
    }

    return new AttributeServer(
        id,
        attributeName,
        schema,
        writable,
        !omitChanges,
        timed,
        initValue,
        defaultValue,
        datasource,
        getter,
        setter,
        validator,
    );
}

/**
 * Base class for all attribute servers.
 */
export abstract class BaseAttributeServer<T> {
    /**
     * The value is undefined when getter/setter are used. But we still handle the version number here.
     */
    protected value: T | undefined = undefined;
    protected endpoint?: EndpointInterface;
    readonly defaultValue: T;

    constructor(
        readonly id: AttributeId,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        readonly isWritable: boolean,
        readonly isSubscribable: boolean,
        readonly requiresTimedInteraction: boolean,
        initValue: T,
        defaultValue: T | undefined,
    ) {
        try {
            this.validateWithSchema(initValue);
            this.value = initValue;
        } catch (error) {
            logger.warn(
                `Attribute value to initialize for ${name} has an invalid value ${Logger.toJSON(
                    initValue,
                )}. Restore to default ${Logger.toJSON(defaultValue)}`,
            );
            if (defaultValue === undefined) {
                throw new ImplementationError(`Attribute value to initialize for ${name} can not be undefined.`);
            }
            this.validateWithSchema(defaultValue);
            this.value = defaultValue;
        }
        this.defaultValue = this.value;
    }

    validateWithSchema(value: T) {
        try {
            this.schema.validate(value);
        } catch (error) {
            if (error instanceof ValidationError) {
                error.message = `Validation error for attribute "${this.name}"${error.fieldName !== undefined ? `in field ${error.fieldName}` : ""}: ${error.message}`;
            }
            throw error;
        }
    }

    assignToEndpoint(endpoint: EndpointInterface) {
        this.endpoint = endpoint;
    }

    /**
     * Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
     * adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
     */
    abstract init(value: T | undefined): void;
}

/**
 * Attribute server class that handled fixed attribute values that never change and is the base class for other
 * Attribute server types.
 */
export class FixedAttributeServer<T> extends BaseAttributeServer<T> {
    readonly isFixed: boolean = true;
    protected readonly getter: (
        session?: Session<MatterDevice>,
        endpoint?: EndpointInterface,
        isFabricFiltered?: boolean,
        message?: Message,
    ) => T;

    constructor(
        id: AttributeId,
        name: string,
        schema: TlvSchema<T>,
        isWritable: boolean,
        isSubscribable: boolean,
        requiresTimedInteraction: boolean,
        initValue: T,
        defaultValue: T | undefined,
        protected readonly datasource: ClusterDatasource,

        /**
         * Optional getter function to handle special requirements or the data are stored in different places.
         *
         * @param session the session that is requesting the value (if any)
         * @param endpoint the endpoint the cluster server of this attribute is assigned to
         * @param isFabricFiltered whether the read request is fabric scoped or not
         * @param message the wire message that initiated the request (if any)
         */
        getter?: (
            session?: Session<MatterDevice>,
            endpoint?: EndpointInterface,
            isFabricFiltered?: boolean,
            message?: Message,
        ) => T,
    ) {
        super(id, name, schema, isWritable, isSubscribable, requiresTimedInteraction, initValue, defaultValue); // Fixed attributes do not change, so are not subscribable

        if (getter === undefined) {
            this.getter = () => {
                if (this.value === undefined) {
                    // Should not happen
                    throw new InternalError(`Attribute value for attribute "${name}" is not initialized.`);
                }
                return this.value;
            };
        } else {
            this.getter = getter;
        }
    }

    /**
     * Get the value of the attribute. This method is used by the Interaction model to read the value of the attribute
     * and includes the ACL check. It should not be used locally in the code!
     *
     * If a getter is defined the value is determined by that getter method.
     */
    get(session: Session<MatterDevice>, isFabricFiltered: boolean, message?: Message): T {
        // TODO: check ACL

        return this.getter(session, this.endpoint, isFabricFiltered, message);
    }

    /**
     * Get the value of the attribute including the version number. This method is used by the Interaction model to read
     * the value of the attribute and includes the ACL check. It should not be used locally in the code!
     *
     * If a getter is defined the value is determined by that getter method. The version number is always 0 for fixed
     * attributes.
     */
    getWithVersion(session: Session<MatterDevice>, isFabricFiltered: boolean, message?: Message) {
        return { version: this.datasource.version, value: this.get(session, isFabricFiltered, message) };
    }

    /**
     * Get the value of the attribute locally. This method should be used locally in the code and does not include the
     * ACL check.
     * If a getter is defined the value is determined by that getter method.
     */
    getLocal(): T {
        return this.getter(undefined, this.endpoint);
    }

    /**
     * Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
     * adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
     * If a getter or setter is defined the value must be undefined The version number must also be undefined.
     */
    init(value: T | undefined) {
        if (value === undefined) {
            throw new InternalError(`Can not initialize fixed attribute "${this.name}" with undefined value.`);
        }
        this.validateWithSchema(value);
        this.value = value;
    }

    /**
     * Add an internal listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the version number.
     */
    addValueChangeListener(_listener: (value: T, version: number) => void) {
        /** Fixed attributes do not change. */
    }

    /**
     * Remove an internal listener.
     */
    removeValueChangeListener(_listener: (value: T, version: number) => void) {
        /** Fixed attributes do not change. */
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value.
     */
    addValueSetListener(_listener: (newValue: T, oldValue: T) => void) {
        /** Fixed attributes do not change. */
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value. This method is a convenient alias for addValueSetListener.
     */
    subscribe(_listener: (newValue: T, oldValue: T) => void) {
        /** Fixed attributes do not change. */
    }

    /**
     * Remove an external listener.
     */
    removeValueSetListener(_listener: (newValue: T, oldValue: T) => void) {
        /** Fixed attributes do not change. */
    }
}

/**
 * Attribute server for normal attributes that can be read and written.
 */
export class AttributeServer<T> extends FixedAttributeServer<T> {
    override readonly isFixed = false;
    protected readonly valueChangeListeners = new Array<(value: T, version: number) => void>();
    protected readonly valueSetListeners = new Array<(newValue: T, oldValue: T) => void>();
    protected readonly setter: (
        value: T,
        session?: Session<MatterDevice>,
        endpoint?: EndpointInterface,
        message?: Message,
    ) => boolean;
    protected readonly validator: (value: T, session?: Session<MatterDevice>, endpoint?: EndpointInterface) => void;

    constructor(
        id: AttributeId,
        name: string,
        schema: TlvSchema<T>,
        isWritable: boolean,
        isSubscribable: boolean,
        requiresTimedInteraction: boolean,
        initValue: T,
        defaultValue: T | undefined,
        datasource: ClusterDatasource,
        getter?: (
            session?: Session<MatterDevice>,
            endpoint?: EndpointInterface,
            isFabricFiltered?: boolean,
            message?: Message,
        ) => T,

        /**
         * Optional setter function to handle special requirements or the data are stored in different places. If a
         * setter method is used for a writable attribute, the getter method must be implemented as well. The method
         * needs to return if the stored value has changed or not.
         *
         * @param value the value to be set.
         * @param session the session that is requesting the value (if any).
         * @param endpoint the endpoint the cluster server of this attribute is assigned to.
         * @returns true if the value has changed, false otherwise.
         */
        setter?: (
            value: T,
            session?: Session<MatterDevice>,
            endpoint?: EndpointInterface,
            message?: Message,
        ) => boolean,

        /**
         * Optional Validator function to handle special requirements for verification of stored data. The method should
         * throw an error if the value is not valid. If a StatusResponseError is thrown this one is also returned to the
         * client.
         *
         * If a setter is used then no validator should be used as the setter should handle the validation itself!
         *
         * @param value the value to be set.
         * @param session the session that is requesting the value (if any).
         * @param endpoint the endpoint the cluster server of this attribute is assigned to.
         */
        validator?: (value: T, session?: Session<MatterDevice>, endpoint?: EndpointInterface) => void,
    ) {
        if (
            isWritable &&
            (getter === undefined || setter === undefined) &&
            !(getter === undefined && setter === undefined)
        ) {
            throw new ImplementationError(
                `Getter and setter must be implemented together for writeable attribute "${name}".`,
            );
        }

        super(
            id,
            name,
            schema,
            isWritable,
            isSubscribable,
            requiresTimedInteraction,
            initValue,
            defaultValue,
            datasource,
            getter,
        );

        if (setter === undefined) {
            this.setter = value => {
                const oldValue = this.value;
                this.value = value;
                return !isDeepEqual(value, oldValue);
            };
        } else {
            this.setter = setter;
        }

        this.validator = (value, session, endpoint) => {
            this.validateWithSchema(value);
            if (validator !== undefined) {
                validator(value, session, endpoint);
            }
        };
    }

    /**
     * Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
     * adjusted before the Device gets announced. Do not use this method to change values when the device is in use!
     */
    override init(value: T | undefined) {
        if (value === undefined) {
            value = this.getter(undefined, this.endpoint);
        }
        if (value === undefined) {
            throw new InternalError(`Can not initialize attribute "${this.name}" with undefined value.`);
        }
        this.validator(value, undefined, this.endpoint);
        this.value = value;
    }

    /**
     * Set the value of the attribute. This method is used by the Interaction model to write the value of the attribute
     * and includes the ACL check. It should not be used locally in the code!
     *
     * If a setter is defined this setter method is called to store the value.
     *
     * Listeners are called when the value changes (internal listeners) or in any case (external listeners).
     */
    set(value: T, session: Session<MatterDevice>, message?: Message) {
        if (!this.isWritable) {
            throw new StatusResponseError(`Attribute "${this.name}" is not writable.`, StatusCode.UnsupportedWrite);
        }
        // TODO: check ACL

        this.setRemote(value, session, message);
    }

    /**
     * Method that contains the logic to set a value "from remote" (e.g. from a client).
     */
    protected setRemote(value: T, session: Session<MatterDevice>, message?: Message) {
        this.processSet(value, session, message);
        this.value = value;
    }

    /**
     * Set the value of the attribute locally. This method should be used locally in the code and does not include the
     * ACL check.
     *
     * If a setter is defined this setter method is called to validate and store the value.
     *
     * Else if a validator is defined the value is validated before it is stored.
     *
     * Listeners are called when the value changes (internal listeners) or in any case (external listeners).
     */
    setLocal(value: T) {
        this.processSet(value, undefined);
        this.value = value;
    }

    /**
     * Helper Method to process the set of a value in a generic way. This method is used internally.
     */
    protected processSet(value: T, session?: Session<MatterDevice>, message?: Message) {
        this.validator(value, session, this.endpoint);
        const oldValue = this.getter(session, this.endpoint, undefined, message);
        const valueChanged = this.setter(value, session, this.endpoint, message);
        this.handleVersionAndTriggerListeners(value, oldValue, valueChanged);
    }

    /**
     * Helper Method to handle needed version increases and trigger the relevant listeners. This method is used
     * internally.
     */
    protected handleVersionAndTriggerListeners(value: T, oldValue: T | undefined, considerVersionChanged: boolean) {
        if (considerVersionChanged) {
            const version = this.datasource.increaseVersion();
            this.valueChangeListeners.forEach(listener => listener(value, version));
        }
        if (oldValue !== undefined) {
            this.valueSetListeners.forEach(listener => listener(value, oldValue));
        }
    }

    /**
     * When the value is handled by getter or setter methods and is changed by other processes this method can be used
     * to notify the attribute server that the value has changed. This will increase the version number and trigger the
     * listeners.
     *
     * ACL checks needs to be performed before calling this method.
     */
    updated(session: SecureSession<MatterDevice>) {
        const oldValue = this.value ?? this.defaultValue;
        this.value = tryCatch(
            () => this.get(session, false),
            NoAssociatedFabricError, // Handle potential error cases where the session does not have a fabric assigned.
            this.value ?? this.defaultValue,
        );
        this.handleVersionAndTriggerListeners(this.value, oldValue, true);
    }

    /**
     * When the value is handled by getter or setter methods and is changed by other processes and no session from the
     * originating process is known this method can be used to notify the attribute server that the value has changed.
     * This will increase the version number and trigger the listeners.
     *
     * ACL checks needs to be performed before calling this method.
     */
    updatedLocal() {
        const oldValue = this.value ?? this.defaultValue;
        this.value = this.getLocal();
        this.handleVersionAndTriggerListeners(this.value, oldValue, true);
    }

    /**
     * Add an internal listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the version number.
     */
    override addValueChangeListener(listener: (value: T, version: number) => void) {
        this.valueChangeListeners.push(listener);
    }

    /**
     * Remove an internal listener.
     */
    override removeValueChangeListener(listener: (value: T, version: number) => void) {
        const entryIndex = this.valueChangeListeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.valueChangeListeners.splice(entryIndex, 1);
        }
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value.
     */
    override addValueSetListener(listener: (newValue: T, oldValue: T) => void) {
        this.valueSetListeners.push(listener);
    }

    /**
     * Add an external listener that is called when the value of the attribute changes. The listener is called with the
     * new value and the old value. This method is a convenient alias for addValueSetListener.
     */
    override subscribe(listener: (newValue: T, oldValue: T) => void) {
        this.addValueSetListener(listener);
    }

    /**
     * Remove an external listener.
     */
    override removeValueSetListener(listener: (newValue: T, oldValue: T) => void) {
        const entryIndex = this.valueSetListeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.valueSetListeners.splice(entryIndex, 1);
        }
    }
}

/**
 * Attribute server which is getting and setting the value for a defined fabric. The values are automatically persisted
 * on fabric level if no custom getter or setter is defined.
 */
export class FabricScopedAttributeServer<T> extends AttributeServer<T> {
    private readonly isCustomGetter: boolean;
    private readonly isCustomSetter: boolean;

    constructor(
        id: AttributeId,
        name: string,
        schema: TlvSchema<T>,
        isWritable: boolean,
        isSubscribable: boolean,
        requiresTimedInteraction: boolean,
        initValue: T,
        defaultValue: T | undefined,
        readonly cluster: Cluster<any, any, any, any, any>,
        datasource: ClusterDatasource,
        getter?: (session?: Session<MatterDevice>, endpoint?: EndpointInterface, isFabricFiltered?: boolean) => T,
        setter?: (
            value: T,
            session?: Session<MatterDevice>,
            endpoint?: EndpointInterface,
            message?: Message,
        ) => boolean,
        validator?: (value: T, session?: Session<MatterDevice>, endpoint?: EndpointInterface) => void,
    ) {
        if (
            isWritable &&
            (getter === undefined || setter === undefined) &&
            !(getter === undefined && setter === undefined)
        ) {
            throw new ImplementationError(
                `Getter and setter must be implemented together for writeable fabric scoped attribute "${name}".`,
            );
        }

        let isCustomGetter = false;
        if (getter === undefined) {
            getter = (session, _endpoint, isFabricFiltered) => {
                if (session === undefined)
                    throw new FabricScopeError(`Session is required for fabric scoped attribute ${name}`);

                if (isFabricFiltered === true) {
                    assertSecureSession(session);
                    return this.getLocalForFabric(session.associatedFabric);
                } else {
                    const fabrics = session.context.getFabrics();
                    const values = new Array<any>();
                    for (const fabric of fabrics) {
                        const value = this.getLocalForFabric(fabric);
                        if (!Array.isArray(value)) {
                            throw new FabricScopeError(
                                `Fabric scoped attribute "${name}" can only be read for all fabrics if they are arrays.`,
                            );
                        }
                        values.push(...value);
                    }
                    return values as T;
                }
            };
        } else {
            isCustomGetter = true;
        }

        let isCustomSetter = false;
        if (setter === undefined) {
            setter = (value, session) => {
                if (session === undefined)
                    throw new FabricScopeError(`Session is required for fabric scoped attribute "${name}".`);

                assertSecureSession(session);
                const fabric = session.associatedFabric;

                const oldData = fabric.getScopedClusterDataValue<{ value: T }>(this.cluster, this.name);
                const oldValue = oldData?.value ?? this.defaultValue;
                if (!isDeepEqual(value, oldValue)) {
                    const setResult = fabric.setScopedClusterDataValue(this.cluster, this.name, { value });
                    if (MaybePromise.is(setResult)) {
                        throw new ImplementationError(
                            "Seems like an Asynchronous Storage is used with Legacy code paths which is forbidden!",
                        );
                    }
                    return true;
                }
                return false;
            };
        } else {
            isCustomSetter = true;
        }

        super(
            id,
            name,
            schema,
            isWritable,
            isSubscribable,
            requiresTimedInteraction,
            initValue,
            defaultValue,
            datasource,
            getter,
            setter,
            validator,
        );
        this.isCustomGetter = isCustomGetter;
        this.isCustomSetter = isCustomSetter;
    }

    /**
     * Initialize the attribute with a value. Because the value is stored on fabric level this method only initializes
     * the version number.
     */
    override init(value: T | undefined) {
        if (value !== undefined) {
            throw new InternalError(`Can not initialize fabric scoped attribute "${this.name}" with a value.`);
        }
    }

    /**
     * Method that contains the logic to set a value "from remote" (e.g. from a client). For Fabric scoped attributes
     * we need to inject the fabric index into the value.
     */
    protected override setRemote(value: T, session: Session<MatterDevice>, message: Message) {
        // Inject fabric index into structures in general if undefined, if set it will be used
        value = this.schema.injectField(
            value,
            <number>Globals.FabricIndex.id,
            session.associatedFabric.fabricIndex,
            existingFieldIndex => existingFieldIndex === undefined,
        );

        super.setRemote(value, session, message);
    }

    /**
     * Set Local is not allowed for fabric scoped attributes. Use setLocalForFabric instead.
     */
    override setLocal(_value: T) {
        throw new FabricScopeError(
            `Fabric scoped attribute "${this.name}" can only be set locally by providing a Fabric. Use setLocalForFabric instead.`,
        );
    }

    /**
     * Set the value of the attribute locally for a fabric. This method should be used locally in the code and does not
     * include the ACL check.
     * If a setter is defined this method can not be used!
     * If a validator is defined the value is validated before it is stored.
     * Listeners are called when the value changes (internal listeners) or in any case (external listeners).
     */
    setLocalForFabric(value: T, fabric: Fabric) {
        if (this.isCustomSetter) {
            throw new FabricScopeError(
                `Fabric scoped attribute "${this.name}" can not be set locally when a custom setter is defined.`,
            );
        }
        this.validator(value, undefined, this.endpoint);

        const oldValue = this.getLocalForFabric(fabric);
        const valueChanged = !isDeepEqual(value, oldValue);
        if (valueChanged) {
            const setResult = fabric.setScopedClusterDataValue(this.cluster, this.name, { value });
            if (MaybePromise.is(setResult)) {
                throw new ImplementationError(
                    "Seems like an Asynchronous Storage is used with Legacy code paths which is forbidden!",
                );
            }
        }
        this.handleVersionAndTriggerListeners(value, oldValue, valueChanged); // TODO Make callbacks sense without fabric, but then they would have other signature?
    }

    /**
     * When the value is handled by getter or setter methods and is changed by other processes and no session from the
     * originating process is known this method can be used to notify the attribute server that the value has changed.
     * This will increase the version number and trigger the listeners.
     * ACL checks needs to be performed before calling this method.
     */
    updatedLocalForFabric(fabric: Fabric) {
        const oldValue = this.value ?? this.defaultValue;
        this.value = tryCatch(
            () => this.getLocalForFabric(fabric),
            FabricScopeError, // Handle potential error cases where a custom getter is used.
            this.value ?? this.defaultValue,
        );
        this.handleVersionAndTriggerListeners(this.value, oldValue, true);
    }

    /**
     * Get the value of the attribute locally for a special Fabric. This method should be used locally in the code and
     * does not include the ACL check.
     * If a getter is defined this method returns an error and the value should be retrieved directly internally.
     */
    getLocalForFabric(fabric: Fabric): T {
        if (this.isCustomGetter) {
            throw new FabricScopeError(
                `Fabric scoped attribute "${this.name}" can not be read locally when a custom getter is defined.`,
            );
        }
        const data = fabric.getScopedClusterDataValue<{ value: T }>(this.cluster, this.name);
        return data?.value ?? this.defaultValue;
    }
}
