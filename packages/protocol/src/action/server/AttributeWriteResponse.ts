/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionSession } from "#action/Interactable.js";
import { AttributeTypeProtocol, ClusterProtocol, EndpointProtocol, NodeProtocol } from "#action/protocols.js";
import { Write } from "#action/request/Write.js";
import { WriteResult } from "#action/response/WriteResult.js";
import { AccessControl } from "#action/server/AccessControl.js";
import { DataResponse, FallbackLimits, WildcardPathFlagsCodec } from "#action/server/DataResponse.js";
import { Diagnostic, InternalError, Logger } from "#general";
import { AttributeModel, DataModelPath, ElementTag, FabricIndex as FabricIndexField } from "#model";
import {
    ArraySchema,
    AttributePath,
    FabricIndex,
    Status,
    StatusCode,
    StatusResponseError,
    TlvSchema,
    TlvStream,
} from "#types";

const logger = Logger.get("AttributeWriteResponse");

/**
 * Implements read of attribute data for Matter "read" and "subscribe" interactions.
 *
 * TODO - profile; ensure nested functions are properly JITed and/or inlined
 */
export class AttributeWriteResponse<
    SessionT extends InteractionSession = InteractionSession,
> extends DataResponse<SessionT> {
    #fabricIndex: FabricIndex;
    // The following state updates as data producers execute.  This serves both to convey state between functions and as
    // a cache between producers that touch the same endpoint and/or cluster
    #currentEndpoint?: EndpointProtocol;
    #currentCluster?: ClusterProtocol;
    #previousProcessedAttributePath?: WriteResult.ConcreteAttributePath;
    #wildcardPathFlags = 0;

    // Count how many attribute status (on error) and attribute values (on success) we have emitted
    #statusCount = 0;
    #successCount = 0;
    #errorCount = 0;

    constructor(node: NodeProtocol, session: SessionT) {
        super(node, session);
        this.#fabricIndex = session.fabric ?? FabricIndex.NO_FABRIC;
    }

    async process<T extends Write>({ writeRequests, suppressResponse }: T): WriteResult<T> {
        const writeResponses = new Array<WriteResult.AttributeStatus>();
        for (const { path, data, dataVersion } of writeRequests) {
            if (path.endpointId === undefined || path.clusterId === undefined || path.attributeId === undefined) {
                // dataVersion silently ignored for Wildcard?
                const responses = await this.#processWildcard(path, data);
                if (responses !== undefined) {
                    writeResponses.push(...responses);
                }
            } else {
                writeResponses.push(
                    await this.#writeConcrete(path as WriteResult.ConcreteAttributePath, data, dataVersion),
                );
            }
        }

        if (!suppressResponse) {
            return writeResponses as Awaited<WriteResult<T>>;
        }
        return undefined as Awaited<WriteResult<T>>;
    }

    /** Guarded accessor for this.#currentEndpoint.  This should never be undefined */
    get #guardedCurrentEndpoint() {
        if (this.#currentEndpoint === undefined) {
            throw new InternalError("currentEndpoint is not set. Should never happen");
        }
        return this.#currentEndpoint;
    }

    /** Guarded accessor for this.#currentCluster.  This should never be undefined */
    get #guardedCurrentCluster(): ClusterProtocol {
        if (this.#currentCluster === undefined) {
            throw new InternalError("currentCluster is not set. Should never happen");
        }
        return this.#currentCluster;
    }

    get counts() {
        return {
            status: this.#statusCount,
            success: this.#successCount,
            existent: this.#successCount + this.#errorCount,
        };
    }

    /**
     * Validate a wildcard path and update internal state.
     */
    async #processWildcard(path: AttributePath, value: TlvStream) {
        const { nodeId, endpointId, wildcardPathFlags } = path;

        if (nodeId !== undefined && nodeId !== this.nodeId) {
            return;
        }

        // TODO clarify isf that's needed or not
        this.#wildcardPathFlags = wildcardPathFlags ? WildcardPathFlagsCodec.encode(wildcardPathFlags) : 0;

        // TODO: Add Group handling and validation
        /*
        if (isGroupSession && endpointId !== undefined) {
            throw new StatusResponseError("Illegal write request with group ID and endpoint ID", StatusCode.InvalidAction);
        }
        */

        if (endpointId === undefined) {
            const responses = new Array<WriteResult.AttributeStatus>();
            for (const endpoint of this.node) {
                const response = await this.#writeEndpointForWildcard(endpoint, path, value);
                if (response !== undefined) {
                    responses.push(response);
                }
            }
            return responses;
        }

        const endpoint = this.node[endpointId];
        if (endpoint) {
            const response = await this.#writeEndpointForWildcard(endpoint, path, value);
            if (response !== undefined) {
                return [response];
            }
        }
    }

    /**
     * Write to a concrete path and update internal state.
     */
    async #writeConcrete(path: WriteResult.ConcreteAttributePath, value: TlvStream, version?: number) {
        const { nodeId, endpointId, clusterId, attributeId } = path;

        if (nodeId !== undefined && this.nodeId !== nodeId) {
            return this.#asStatus(path, Status.UnsupportedNode);
        }

        // Resolve path elements
        const endpoint = this.node[endpointId];
        const cluster = endpoint?.[clusterId];
        const attribute = cluster?.type.attributes[attributeId];
        let limits;
        if (attribute === undefined) {
            // We still need to authorize the user for access even though this path doesn't resolve.  Spec is not
            // explicit on what privilege level we should require as normally that information comes from the resolved
            // attribute.  So attempt to resolve via the active model
            const modelAttr = this.node.matter
                .member(path.clusterId, [ElementTag.Cluster])
                ?.member(path.attributeId, [ElementTag.Attribute]);

            if (modelAttr) {
                // OK cluster doesn't exist at that location, but we do understand semantically, so use limits from the
                // model
                limits = AccessControl(modelAttr as AttributeModel).limits;
            } else {
                // We've got no idea.  This effectively falls back to "view" privilege
                limits = FallbackLimits;
            }
        } else {
            limits = attribute.limits;
        }

        // Validate access.  Order here prescribed by 1.4 core spec 8.4.3.2
        // We need some fallback location if cluster is not defined
        const location = {
            ...(cluster?.location ?? {
                path: DataModelPath.none,
                endpoint: endpointId,
                cluster: clusterId,
            }),
            owningFabric: this.session.fabric,
        };
        const permission = this.session.authorityAt(limits.readLevel, location);
        switch (permission) {
            case AccessControl.Authority.Granted:
                break;

            case AccessControl.Authority.Unauthorized:
                return this.#asStatus(path, Status.UnsupportedAccess);

            case AccessControl.Authority.Restricted:
                return this.#asStatus(path, Status.AccessRestricted);

            default:
                throw new InternalError(`Unsupported authorization state ${permission}`);
        }
        if (endpoint === undefined) {
            return this.#asStatus(path, Status.UnsupportedEndpoint);
        }
        if (cluster === undefined) {
            return this.#asStatus(path, Status.UnsupportedCluster);
        }
        if (attribute === undefined || !cluster.type.attributes[attribute.id]) {
            return this.#asStatus(path, Status.UnsupportedAttribute);
        }
        if (!limits.writable) {
            this.#errorCount++;
            return this.#asStatus(path, Status.UnsupportedWrite);
        }
        if (limits.timed && !this.session.timed) {
            this.#errorCount++;
            return this.#asStatus(path, Status.NeedsTimedInteraction);
        }
        if (limits.fabricScoped && this.session.fabric === undefined) {
            this.#errorCount++;
            return this.#asStatus(path, Status.UnsupportedAccess);
        }

        if (version !== undefined && version !== cluster.version) {
            this.#errorCount++;
            return this.#asStatus(path, Status.DataVersionMismatch);
        }

        // Update internal state for target endpoint
        if (this.#currentEndpoint !== endpoint) {
            this.#currentEndpoint = endpoint;
            this.#currentCluster = cluster;
        } else if (this.#currentCluster !== cluster) {
            this.#currentCluster = cluster;
        }

        return await this.writeValue(attribute, path, value);
    }

    /**
     * Starts new chunk or adds to current chunk all values from {@link endpoint} selected by {@link path}.
     *
     * Emits previous chunk if it exists and was not for this endpoint.  This means that our chunk size is one endpoint
     * worth of data, except for the initial error chunk if there are path errors.
     *
     * {@link this.#wildcardPathFlags} to numeric bitmap must be set prior to invocation.
     *
     * TODO - skip endpoints for which subject is unauthorized as optimization
     */
    #writeEndpointForWildcard(endpoint: EndpointProtocol, path: AttributePath, value: TlvStream) {
        const { clusterId, attributeId } = path;
        if (clusterId === undefined || attributeId === undefined) {
            throw new StatusResponseError(
                "Wildcard path write must specify a clusterId and attributeId",
                StatusCode.InvalidAction,
            );
        }

        if (endpoint.wildcardPathFlags & this.#wildcardPathFlags) {
            return; // TODO ???
        }

        if (this.#currentEndpoint !== endpoint) {
            this.#currentEndpoint = endpoint;
            this.#currentCluster = undefined;
        }

        const cluster = endpoint[clusterId];
        if (cluster !== undefined) {
            return this.#writeClusterForWildcard(cluster, path, value);
        }
    }

    /**
     * Read values from a specific {@link cluster} for a wildcard path.
     *
     * Depends on state initialized by {@link #writeEndpointForWildcard}.
     *
     * TODO - skip clusters for which subject is unauthorized
     */
    #writeClusterForWildcard(cluster: ClusterProtocol, path: AttributePath, value: TlvStream) {
        if (cluster.type.wildcardPathFlags & this.#wildcardPathFlags) {
            return; // TODO ???
        }

        if (this.#currentCluster !== cluster) {
            this.#currentCluster = cluster;
        }
        const { attributeId } = path;

        if (attributeId === undefined) {
            throw new StatusResponseError("Wildcard path write must specify an attributeId", StatusCode.InvalidAction);
        } else {
            const attribute = cluster.type.attributes[attributeId];
            if (attribute !== undefined) {
                return this.#writeAttributeForWildcard(attribute, path, value);
            }
        }
    }

    /**
     * Read values from a specific {@link attribute} for a wildcard path.
     *
     * Depends on state initialized by {@link #writeClusterForWildcard}.
     */
    #writeAttributeForWildcard(attribute: AttributeTypeProtocol, path: AttributePath, value: TlvStream) {
        if (!this.#guardedCurrentCluster.type.attributes[attribute.id]) {
            return;
        }

        if (attribute.wildcardPathFlags & this.#wildcardPathFlags) {
            return; // TODO ????
        }

        if (
            !attribute.limits.writable ||
            this.session.authorityAt(attribute.limits.readLevel, this.#guardedCurrentCluster.location) !==
                AccessControl.Authority.Granted ||
            (attribute.limits.timed && !this.session.timed)
        ) {
            return;
        }

        return this.writeValue(
            attribute,
            {
                ...path,
                endpointId: this.#guardedCurrentEndpoint.id,
                clusterId: this.#guardedCurrentCluster.type.id,
                attributeId: attribute.id,
            },
            value,
        );
    }

    /**
     * Add a status value.
     */
    #asStatus(path: WriteResult.ConcreteAttributePath, status: Status, clusterStatus?: number) {
        if (status !== Status.Success) {
            logger.debug(
                () =>
                    `Error writing attribute ${this.node.inspectPath(path)}: Status=${StatusCode[status]}(${status}), ClusterStatus=${clusterStatus}`,
            );
        }

        const report: WriteResult.AttributeStatus = {
            kind: "attr-status",
            path,
            status,
            clusterStatus,
        };

        if (status !== Status.Success) {
            this.#statusCount++;
        }
        return report;
    }

    protected async writeValue(
        attribute: AttributeTypeProtocol,
        path: WriteResult.ConcreteAttributePath,
        value: TlvStream,
    ) {
        const { attributeId, listIndex } = path;

        if (listIndex !== undefined && listIndex !== null) {
            throw new StatusResponseError(
                `Unsupported Write path provided: listIndex === ${listIndex}`,
                Status.InvalidAction,
            );
        }

        const previousPath = this.#previousProcessedAttributePath;
        this.#previousProcessedAttributePath = path;

        try {
            const { tlv } = attribute;
            if (listIndex === undefined) {
                const decoded = this.#decodeWithSchema(tlv, value);
                // REPLACE_ALL
                //await this.session.transaction?.begin();
                logger.debug(() => `Writing attribute ${this.node.inspectPath(path)}=${Diagnostic.json(decoded)}`);
                const writeState = await this.#guardedCurrentCluster.openForWrite(this.session);
                writeState[attributeId] = decoded;
                await this.session.transaction?.commit();
            } else if (listIndex === null) {
                if (
                    previousPath?.endpointId !== path.endpointId ||
                    previousPath?.clusterId !== path.clusterId ||
                    previousPath?.attributeId !== path.attributeId
                ) {
                    // Mimic chip sdk behavior
                    throw new StatusResponseError("ADD list action without a former REPLACE_ALL action", Status.Busy);
                }
                // ADD
                if (!(tlv instanceof ArraySchema)) {
                    throw new StatusResponseError(
                        `Unsupported Write path provided: listIndex === ${listIndex} but attribute is not a list`,
                        Status.InvalidAction,
                    );
                }
                const writeState = await this.#guardedCurrentCluster.openForWrite(this.session);
                const decoded = this.#decodeWithSchema(tlv.elementSchema, value);
                logger.debug(
                    () => `Writing attribute chunk ${this.node.inspectPath(path)} adding ${Diagnostic.json(decoded)}`,
                );
                (writeState[attributeId] as any[]).push(decoded);
                await this.session.transaction?.commit();
            }
        } catch (error) {
            if (StatusResponseError.is(error)) {
                this.#errorCount++;
                return this.#asStatus(path, error.code, error.clusterCode);
            }
            throw error;
        }

        this.#successCount++;
        return this.#asStatus(path, Status.Success);
    }

    #decodeWithSchema(tlv: TlvSchema<any>, value: TlvStream) {
        return tlv.injectField(
            tlv.decodeTlv(value),
            <number>FabricIndexField.id,
            this.#fabricIndex,
            () => true, // We always inject the current fabricIndex for writes
        );
    }
}
