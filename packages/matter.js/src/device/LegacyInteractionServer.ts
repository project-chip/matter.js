/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../MatterDevice.js";
import { AccessLevel } from "../cluster/Cluster.js";
import { AccessControlCluster } from "../cluster/definitions/index.js";
import { AnyAttributeServer, AttributeServer, FabricScopedAttributeServer } from "../cluster/server/AttributeServer.js";
import { CommandServer } from "../cluster/server/CommandServer.js";
import { AnyEventServer } from "../cluster/server/EventServer.js";
import { Message } from "../codec/MessageCodec.js";
import { InternalError } from "../common/MatterError.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { EndpointInterface } from "../endpoint/EndpointInterface.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { MessageExchange } from "../protocol/MessageExchange.js";
import { AccessControlManager, AccessDeniedError } from "../protocol/interaction/AccessControlManager.js";
import { EventStorageData } from "../protocol/interaction/EventHandler.js";
import { InteractionEndpointStructure } from "../protocol/interaction/InteractionEndpointStructure.js";
import { TlvEventFilter } from "../protocol/interaction/InteractionProtocol.js";
import { AttributePath, CommandPath, EventPath, InteractionServer } from "../protocol/interaction/InteractionServer.js";
import { SecureSession } from "../session/SecureSession.js";
import { Session } from "../session/Session.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { Endpoint } from "./Endpoint.js";

const logger = Logger.get("LegacyInteractionServer");

/**
 * Interactionserver for the legacy API code paths which includes ACL checks before calling the actual
 * attribute/command handlers.
 */
export class LegacyInteractionServer extends InteractionServer {
    #endpointStructure: InteractionEndpointStructure;
    #aclManager?: AccessControlManager;

    constructor(config: InteractionServer.Configuration) {
        const { endpointStructure } = config;
        super(config);
        this.#endpointStructure = endpointStructure;
    }

    #getAclManager(session: Session<MatterDevice>) {
        if (this.#aclManager !== undefined) {
            return this.#aclManager;
        }
        const rootEndpoint = this.#endpointStructure.getEndpoint(EndpointNumber(0)) as Endpoint;
        if (rootEndpoint === undefined) {
            throw new InternalError("Root endpoint must exist.");
        }
        const aclCluster = rootEndpoint.getClusterServer(AccessControlCluster);
        if (aclCluster === undefined) {
            throw new InternalError("Access control cluster must exist on root endpoint.");
        }
        const aclManager = (this.#aclManager = new AccessControlManager(aclCluster.attributes.acl.get(session, false)));
        aclCluster.subscribeAclAttribute(() => {
            const completeVal = aclCluster.attributes.acl.get(session, false);
            logger.info("ACL updated", completeVal);
            aclManager.updateAccessControlList(completeVal);
        });
        return aclManager;
    }

    #assertAccess(
        path: AttributePath | EventPath | CommandPath,
        exchange: MessageExchange<MatterDevice>,
        desiredAccessLevel: AccessLevel,
    ) {
        const { endpointId, clusterId } = path;
        const endpoint = this.#endpointStructure.getEndpoint(endpointId);
        if (endpoint === undefined) {
            throw new InternalError("Endpoint not found for ACL check. This should never happen.");
        }
        const aclManager = this.#getAclManager(exchange.session);
        if (
            !aclManager.allowsPrivilege(exchange.session as SecureSession<any>, endpoint, clusterId, desiredAccessLevel)
        ) {
            throw new AccessDeniedError(
                `Access to ${endpointId}/${Diagnostic.hex(clusterId)} denied on ${exchange.session.name}.`,
            );
        }
    }

    protected override async readAttribute(
        path: AttributePath,
        attribute: AnyAttributeServer<any>,
        exchange: MessageExchange<MatterDevice>,
        isFabricFiltered: boolean,
        message: Message,
        endpoint: EndpointInterface,
    ) {
        this.#assertAccess(path, exchange, attribute.readAcl);
        const data = await super.readAttribute(path, attribute, exchange, isFabricFiltered, message, endpoint);
        if (attribute instanceof FabricScopedAttributeServer && !isFabricFiltered) {
            const { value, version } = data;
            return {
                value: attribute.sanitizeFabricSensitiveFields(
                    value,
                    (exchange.session as SecureSession<MatterDevice>).fabric,
                ),
                version,
            };
        }
        return data;
    }

    protected override async readEvent(
        path: EventPath,
        eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
        event: AnyEventServer<any, any>,
        exchange: MessageExchange<MatterDevice>,
        isFabricFiltered: boolean,
        message: Message,
        endpoint: EndpointInterface,
    ): Promise<EventStorageData<any>[]> {
        this.#assertAccess(path, exchange, event.readAcl);
        return super.readEvent(path, eventFilters, event, exchange, isFabricFiltered, message, endpoint);
    }

    protected override async writeAttribute(
        path: AttributePath,
        attribute: AttributeServer<any>,
        value: any,
        exchange: MessageExchange<MatterDevice>,
        message: Message,
        endpoint: EndpointInterface,
        receivedWithinTimedInteraction?: boolean,
        isListWrite?: boolean,
    ) {
        this.#assertAccess(path, exchange, attribute.writeAcl);
        return super.writeAttribute(
            path,
            attribute,
            value,
            exchange,
            message,
            endpoint,
            receivedWithinTimedInteraction,
            isListWrite,
        );
    }

    protected override async invokeCommand(
        path: CommandPath,
        command: CommandServer<any, any>,
        exchange: MessageExchange<MatterDevice>,
        commandFields: any,
        message: Message,
        endpoint: EndpointInterface,
        receivedWithinTimedInteraction = false,
    ) {
        this.#assertAccess(path, exchange, command.invokeAcl);
        return super.invokeCommand(
            path,
            command,
            exchange,
            commandFields,
            message,
            endpoint,
            receivedWithinTimedInteraction,
        );
    }
}
