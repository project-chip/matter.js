/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControlCluster } from "#clusters";
import { Diagnostic, InternalError, Logger } from "#general";
import { AccessLevel } from "#model";
import {
    AccessControlManager,
    AccessDeniedError,
    AnyAttributeServer,
    AnyEventServer,
    AttributePath,
    AttributeServer,
    CommandPath,
    CommandServer,
    EndpointInterface,
    EventPath,
    EventStorageData,
    FabricScopedAttributeServer,
    InteractionContext,
    InteractionEndpointStructure,
    InteractionServer,
    Message,
    MessageExchange,
    SecureSession,
    Session,
} from "#protocol";
import { EndpointNumber, TlvEventFilter, TypeFromSchema } from "#types";
import { Endpoint } from "./Endpoint.js";

const logger = Logger.get("LegacyInteractionServer");

/**
 * Interactionserver for the legacy API code paths which includes ACL checks before calling the actual
 * attribute/command handlers.
 */
export class LegacyInteractionServer extends InteractionServer {
    #endpointStructure: InteractionEndpointStructure;
    #aclManager?: AccessControlManager;

    constructor(context: InteractionContext) {
        super(context);
        this.#endpointStructure = context.structure;
    }

    #getAclManager(session: Session) {
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
        exchange: MessageExchange,
        desiredAccessLevel: AccessLevel,
    ) {
        const { endpointId, clusterId } = path;
        const endpoint = this.#endpointStructure.getEndpoint(endpointId);
        if (endpoint === undefined) {
            throw new InternalError("Endpoint not found for ACL check. This should never happen.");
        }
        const aclManager = this.#getAclManager(exchange.session);
        if (!aclManager.allowsPrivilege(exchange.session as SecureSession, endpoint, clusterId, desiredAccessLevel)) {
            throw new AccessDeniedError(
                `Access to ${endpointId}/${Diagnostic.hex(clusterId)} denied on ${exchange.session.name}.`,
            );
        }
    }

    protected override async readAttribute(
        path: AttributePath,
        attribute: AnyAttributeServer<any>,
        exchange: MessageExchange,
        isFabricFiltered: boolean,
        message: Message,
        endpoint: EndpointInterface,
        offline = false,
    ) {
        // Offline read do not require ACL checks
        if (!offline) {
            this.#assertAccess(path, exchange, attribute.readAcl);
        }
        const data = await super.readAttribute(path, attribute, exchange, isFabricFiltered, message, endpoint);
        if (attribute instanceof FabricScopedAttributeServer && !isFabricFiltered) {
            const { value, version } = data;
            return {
                value: attribute.sanitizeFabricSensitiveFields(value, (exchange.session as SecureSession).fabric),
                version,
            };
        }
        return data;
    }

    protected override async readEvent(
        path: EventPath,
        eventFilters: TypeFromSchema<typeof TlvEventFilter>[] | undefined,
        event: AnyEventServer<any, any>,
        exchange: MessageExchange,
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
        exchange: MessageExchange,
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
        exchange: MessageExchange,
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
