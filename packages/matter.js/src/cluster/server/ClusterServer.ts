/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { CommandId } from "../../datatype/CommandId.js";
import { EventId } from "../../datatype/EventId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { Fabric } from "../../fabric/Fabric.js";
import { Logger } from "../../log/Logger.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { BitSchema, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { capitalize } from "../../util/String.js";
import { Attributes, Cluster, Commands, ConditionalFeatureList, Events, TlvNoResponse } from "../Cluster.js";
import { Scenes } from "../definitions/ScenesCluster.js";
import { createAttributeServer } from "./AttributeServer.js";
import {
    AttributeInitialValues,
    AttributeServers,
    ClusterServerHandlers,
    ClusterServerObj,
    CommandServers,
    EventServers,
    SupportedEventsList,
} from "./ClusterServerTypes.js";
import { CommandServer } from "./CommandServer.js";
import { EventServer } from "./EventServer.js";

const logger = Logger.get("ClusterServer");

function isConditionMatching<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>>(
    featureSets: ConditionalFeatureList<F>,
    supportedFeatures: SF,
): boolean {
    for (const features of featureSets) {
        if (Object.keys(features).every(feature => !!features[feature] === !!supportedFeatures[feature])) {
            return true;
        }
    }
    return false;
}

export function ClusterServer<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    A extends Attributes,
    C extends Commands,
    E extends Events,
    H extends ClusterServerHandlers<Cluster<F, SF, A, C, E>>,
>(
    clusterDef: Cluster<F, SF, A, C, E>,
    attributesInitialValues: AttributeInitialValues<A>,
    handlers: H,
    supportedEvents: SupportedEventsList<E> = <SupportedEventsList<E>>{},
): ClusterServerObj<A, E> {
    const {
        id: clusterId,
        name,
        commands: commandDef,
        attributes: attributeDef,
        events: eventDef,
        supportedFeatures,
    } = clusterDef;
    let clusterStorage: StorageContext | null = null;
    const attributeStorageListeners = new Map<AttributeId, (value: any) => void>();
    const sceneAttributeList = new Array<string>();
    const attributes = <AttributeServers<A>>{};
    const commands = <CommandServers<C>>{};
    const events = <EventServers<E>>{};

    const result: any = {
        id: clusterId,
        name,
        _type: "ClusterServer",
        clusterDataVersion: Crypto.getRandomUInt32(),
        attributes,
        _commands: commands,
        _events: events,

        _assignToEndpoint: (endpoint: Endpoint) => {
            for (const name in attributes) {
                (attributes as any)[name].assignToEndpoint(endpoint);
            }
            for (const name in events) {
                (events as any)[name].assignToEndpoint(endpoint);
            }
        },

        _setStorage: (storageContext: StorageContext) => {
            clusterStorage = storageContext;

            result.clusterDataVersion = storageContext.get<number>("_clusterDataVersion", result.clusterDataVersion);
            logger.debug(
                `${storageContext.has("_clusterDataVersion") ? "Restore" : "Set"} cluster data version ${
                    result.clusterDataVersion
                } in cluster ${name} (${clusterId})`,
            );
            storageContext.set("_clusterDataVersion", result.clusterDataVersion);

            for (const attributeName in attributes) {
                const attribute = (attributes as any)[attributeName];
                if (!attributeStorageListeners.has(attribute.id)) continue;
                if (!storageContext.has(attribute.name)) continue;
                try {
                    const value = storageContext.get<any>(attribute.name);
                    logger.debug(
                        `Restoring attribute ${attributeName} (${attribute.id}) in cluster ${name} (${clusterId})`,
                    );
                    attribute.init(value);
                } catch (error) {
                    logger.warn(
                        `Failed to restore attribute ${attributeName} (${attribute.id}) in cluster ${name} (${clusterId})`,
                        error,
                    );
                    storageContext.delete(attribute.name); // Storage broken so we should delete it
                }
            }
        },

        _registerEventHandler: (eventHandler: EventHandler) => {
            for (const eventName in events) {
                (events as any)[eventName].bindToEventHandler(eventHandler);
            }
        },

        _getSceneExtensionFieldSets: () => {
            const values = new Array<TypeFromSchema<typeof Scenes.TlvAttributeValuePair>>();
            for (const name of sceneAttributeList) {
                const attributeServer = (attributes as any)[name];
                values.push({
                    attributeId: attributeServer.id,
                    attributeValue: attributeServer.schema.encodeTlv(attributeServer.get()),
                });
            }
            return values;
        },

        _setSceneExtensionFieldSets: (
            values: TypeFromSchema<typeof Scenes.TlvAttributeValuePair>[],
            _transitionTime: number,
        ) => {
            // TODO It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data type),
            //  a gradual transition SHOULD take place from the old to the new state over this time. However, the exact
            //  transition is manufacturer dependent.

            for (const { attributeId, attributeValue } of values) {
                if (attributeId === undefined) {
                    logger.warn(`Empty attributeId in scene extension field not supported for "set" yet`);
                    continue;
                }
                const attributeName = sceneAttributeList.find(name => (attributes as any)[name].id === attributeId);
                if (attributeName) {
                    const attributeServer = (attributes as any)[attributeName];
                    attributeServer.setLocal(attributeServer.schema.decodeTlv(attributeValue));
                }
            }
        },

        _verifySceneExtensionFieldSets(values: TypeFromSchema<typeof Scenes.TlvAttributeValuePair>[]) {
            for (const { attributeId, attributeValue } of values) {
                if (attributeId === undefined) {
                    logger.warn(`Empty attributeId in scene extension field not supported for "verify" yet`);
                    continue;
                }
                const attributeName = sceneAttributeList.find(name => (attributes as any)[name].id === attributeId);
                if (attributeName) {
                    const attributeServer = (attributes as any)[attributeName];
                    if (attributeServer.getLocal() !== attributeServer.schema.decodeTlv(attributeValue)) return false;
                }
            }
            return true;
        },
    };

    const attributeStorageListener = (attributeName: string, value: any) => {
        if (!clusterStorage || value === undefined) return;
        logger.debug(`Storing attribute ${attributeName} in cluster ${name} (${clusterId})`);
        clusterStorage.set(attributeName, value);
    };

    // Create attributes
    attributesInitialValues = {
        ...attributesInitialValues,
        clusterRevision: clusterDef.revision,
        featureMap: supportedFeatures,
        attributeList: new Array<AttributeId>(),
        acceptedCommandList: new Array<CommandId>(),
        generatedCommandList: new Array<CommandId>(),
        eventList: new Array<EventId>(),
    };

    const attributeList = new Array<AttributeId>();
    for (const attributeName in attributeDef) {
        const capitalizedAttributeName = capitalize(attributeName);

        // logger.info(`check this for REQUIRED Attributes ${Logger.toJSON(attributeName)}`)
        if (attributeDef[attributeName].isConditional) {
            const { mandatoryIf, optionalIf } = attributeDef[attributeName];
            let conditionHasMatched = false;
            if (mandatoryIf !== undefined && mandatoryIf.length > 0) {
                // Check if mandatoryIf is relevant for current feature combination and the attribute initial value is set
                const conditionMatched = isConditionMatching(mandatoryIf, supportedFeatures);
                if (conditionMatched && (attributesInitialValues as any)[attributeName] === undefined) {
                    logger.warn(
                        `InitialAttributeValue for "${
                            clusterDef.name
                        }/${attributeName}" is REQUIRED by supportedFeatures: ${JSON.stringify(
                            supportedFeatures,
                        )} but is not set!`,
                    );
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }
            // TODO Remove optional info/checks
            if (!conditionHasMatched && optionalIf !== undefined && optionalIf.length > 0) {
                const conditionMatched = isConditionMatching(optionalIf, supportedFeatures);
                if (conditionMatched && (attributesInitialValues as any)[attributeName] === undefined) {
                    logger.debug(
                        `InitialAttributeValue for "${
                            clusterDef.name
                        }/${attributeName}" is optional by supportedFeatures: ${JSON.stringify(
                            supportedFeatures,
                        )} and is not set!`,
                    );
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }

            if (!conditionHasMatched && (attributesInitialValues as any)[attributeName] !== undefined) {
                logger.warn(
                    `InitialAttributeValue for "${
                        clusterDef.name
                    }/${attributeName}" is provided but it's neither optional or mandatory for supportedFeatures: ${JSON.stringify(
                        supportedFeatures,
                    )} but is set!`,
                );
            }
        }

        const { id, persistent, fabricScoped, scene, fixed } = attributeDef[attributeName];
        if ((attributesInitialValues as any)[attributeName] !== undefined) {
            // Get the handlers for this attribute if present
            const getter = (handlers as any)[`${attributeName}AttributeGetter`];
            const setter = (handlers as any)[`${attributeName}AttributeSetter`];
            const validator = (handlers as any)[`${attributeName}AttributeValidator`];

            (attributes as any)[attributeName] = createAttributeServer(
                clusterDef,
                attributeDef[attributeName],
                attributeName,
                (attributesInitialValues as any)[attributeName],
                () => result.clusterDataVersion,
                () => {
                    if (result.clusterDataVersion === 0xffffffff) {
                        result.clusterDataVersion = -1;
                    }
                    clusterStorage?.set("_clusterDataVersion", ++result.clusterDataVersion);
                    return result.clusterDataVersion;
                },
                getter
                    ? (session, endpoint, isFabricFiltered) =>
                          getter({
                              attributes,
                              endpoint,
                              session,
                              isFabricFiltered,
                          })
                    : undefined,
                setter
                    ? (value, session, endpoint) =>
                          setter(value, {
                              attributes,
                              endpoint,
                              session,
                          })
                    : undefined,
                validator
                    ? (value, session, endpoint) =>
                          validator(value, {
                              attributes,
                              endpoint,
                              session,
                          })
                    : undefined,
            );

            // Add the relevant convenient methods to the CLusterServerObj
            if (fixed) {
                result[`get${capitalizedAttributeName}Attribute`] = () => (attributes as any)[attributeName].getLocal();
            } else if (fabricScoped) {
                result[`get${capitalizedAttributeName}Attribute`] = (fabric: Fabric) =>
                    (attributes as any)[attributeName].getLocalForFabric(fabric);
                result[`set${capitalizedAttributeName}Attribute`] = <T>(value: T, fabric: Fabric) =>
                    (attributes as any)[attributeName].setLocalForFabric(value, fabric);
                result[`subscribe${capitalizedAttributeName}Attribute`] = <T>(
                    listener: (newValue: T, oldValue: T) => void,
                ) => (attributes as any)[attributeName].addValueSetListener(listener);
            } else {
                if (scene) {
                    sceneAttributeList.push(attributeName);
                }
                result[`get${capitalizedAttributeName}Attribute`] = () => (attributes as any)[attributeName].getLocal();
                result[`set${capitalizedAttributeName}Attribute`] = <T>(value: T) =>
                    (attributes as any)[attributeName].setLocal(value);
                result[`subscribe${capitalizedAttributeName}Attribute`] = <T>(
                    listener: (newValue: T, oldValue: T) => void,
                ) => (attributes as any)[attributeName].addValueSetListener(listener);
            }
            if (persistent || getter || setter) {
                const listener = (value: any) =>
                    attributeStorageListener(attributeName, fabricScoped || getter || setter ? undefined : value);
                attributeStorageListeners.set(id, listener);
                (attributes as any)[attributeName].addValueChangeListener(listener);
            }
            attributeList.push(AttributeId(id));
        } else {
            // TODO: Find maybe a better way to do this including strong typing according to attribute initial values set?
            result[`get${capitalizedAttributeName}Attribute`] = () => undefined;
            if (!fixed) {
                result[`set${capitalizedAttributeName}Attribute`] = () => {
                    throw new ImplementationError(
                        `Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`,
                    );
                };
                result[`subscribe${capitalizedAttributeName}Attribute`] = () => {
                    throw new ImplementationError(
                        `Attribute ${attributeName} is optional and not initialized. To use it please initialize it first.`,
                    );
                };
            }
        }
    }
    (attributes as any).attributeList.setLocal(attributeList.sort((a, b) => a - b));

    // Create commands
    const acceptedCommandList = new Array<CommandId>();
    const generatedCommandList = new Array<CommandId>();
    for (const name in commandDef) {
        const handler = (handlers as any)[name];

        if (commandDef[name].isConditional) {
            const { mandatoryIf, optionalIf } = commandDef[name];
            let conditionHasMatched = false;
            if (mandatoryIf !== undefined && mandatoryIf.length > 0) {
                const conditionMatched = isConditionMatching(mandatoryIf, supportedFeatures);
                if (conditionMatched && handler === undefined) {
                    logger.warn(
                        `Command "${clusterDef.name}/${name}" is REQUIRED by supportedFeatures: ${JSON.stringify(
                            supportedFeatures,
                        )} but is not set!`,
                    );
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }
            // TODO Remove optional info/checks
            if (!conditionHasMatched && optionalIf !== undefined && optionalIf.length > 0) {
                const conditionMatched = isConditionMatching(optionalIf, supportedFeatures);
                if (conditionMatched && handler === undefined) {
                    logger.debug(
                        `Command "${clusterDef.name}/${name}" is optional by supportedFeatures: ${JSON.stringify(
                            supportedFeatures,
                        )} and is not set!`,
                    );
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }

            if (!conditionHasMatched && handler !== undefined) {
                logger.warn(
                    `Command "${
                        clusterDef.name
                    }/${name}" is provided but it's neither optional or mandatory for supportedFeatures: ${JSON.stringify(
                        supportedFeatures,
                    )} but is set!`,
                );
            }
        }

        if (handler === undefined) continue;
        const { requestId, requestSchema, responseId, responseSchema } = commandDef[name];
        (commands as any)[name] = new CommandServer(
            requestId,
            responseId,
            name,
            requestSchema,
            responseSchema,
            (request, session, message, endpoint) =>
                handler({
                    request,
                    attributes,
                    events,
                    session,
                    message,
                    endpoint,
                }),
        );
        if (!acceptedCommandList.includes(requestId)) {
            acceptedCommandList.push(requestId);
        }
        if (responseSchema !== TlvNoResponse) {
            if (!generatedCommandList.includes(responseId)) {
                generatedCommandList.push(responseId);
            }
        }
    }
    (attributes as any).acceptedCommandList.setLocal(acceptedCommandList.sort((a, b) => a - b));
    (attributes as any).generatedCommandList.setLocal(generatedCommandList.sort((a, b) => a - b));

    const eventList = new Array<EventId>();
    for (const eventName in eventDef) {
        const { id, schema, priority, optional } = eventDef[eventName];
        if (!optional && (supportedEvents as any)[eventName] !== true) {
            throw new ImplementationError(`Event ${eventName} needs to be supported by cluster ${name} (${clusterId})`);
        }

        if (eventDef[eventName].isConditional) {
            const { mandatoryIf, optionalIf } = eventDef[eventName];
            let conditionHasMatched = false;
            if (mandatoryIf !== undefined) {
                const conditionMatched = isConditionMatching(mandatoryIf, supportedFeatures);
                if (conditionMatched && (supportedEvents as any)[eventName] === undefined) {
                    logger.warn(
                        `Event "${clusterDef.name}/${eventName}" is REQUIRED by supportedFeatures: ${JSON.stringify(
                            supportedFeatures,
                        )} but is not set!`,
                    );
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }
            // TODO Remove optional info/checks
            if (!conditionHasMatched && optionalIf !== undefined && optionalIf.length > 0) {
                const conditionMatched = isConditionMatching(optionalIf, supportedFeatures);
                if (conditionMatched && (supportedEvents as any)[eventName] === undefined) {
                    logger.debug(
                        `Event "${clusterDef.name}/${eventName}" is optional by supportedFeatures: ${JSON.stringify(
                            supportedFeatures,
                        )} and is not set!`,
                    );
                }
                conditionHasMatched = conditionHasMatched || conditionMatched;
            }

            if (!conditionHasMatched && (supportedEvents as any)[eventName] !== undefined) {
                logger.warn(
                    `Event "${
                        clusterDef.name
                    }/${eventName}" is provided but it's neither optional or mandatory for supportedFeatures: ${JSON.stringify(
                        supportedFeatures,
                    )} but is set!`,
                );
            }
        }

        if ((supportedEvents as any)[eventName] === true) {
            (events as any)[eventName] = new EventServer(id, clusterId, eventName, schema, priority);
            const capitalizedEventName = capitalize(eventName);
            result[`trigger${capitalizedEventName}Event`] = <T>(event: T) =>
                (events as any)[eventName].triggerEvent(event);
            eventList.push(id);
        }
    }
    (attributes as any).eventList.setLocal(eventList.sort((a, b) => a - b));

    return result as ClusterServerObj<A, E>;
}
