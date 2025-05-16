/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Invoke, InvokeResult } from "#action/index.js";
import { InteractionSession } from "#action/Interactable.js";
import { ClusterProtocol, CommandTypeProtocol, EndpointProtocol, NodeProtocol } from "#action/protocols.js";
import { AccessControl } from "#action/server/AccessControl.js";
import { DataResponse, FallbackLimits } from "#action/server/DataResponse.js";
import { Diagnostic, InternalError, Logger, MatterAggregateError } from "#general";
import { CommandModel, DataModelPath, ElementTag, FabricIndex as FabricIndexField } from "#model";
import {
    CommandPath,
    FabricIndex,
    NodeId,
    Status,
    StatusCode,
    StatusResponseError,
    TlvSchema,
    TlvStream,
    ValidationError,
} from "#types";

// On Encoding level there is no nodeId, bit the Interaction Model allows a Node to be specified which can only be the
// target node
type InteractionCommandPath = CommandPath & {
    nodeId?: NodeId;
};

const logger = Logger.get("CommandInvokeResponse");

/**
 * Implements invoking of commands for matter "invoke" interactions.
 *
 * TODO - profile; ensure nested functions are properly JITed and/or inlined
 */
export class CommandInvokeResponse<
    SessionT extends InteractionSession = InteractionSession,
> extends DataResponse<SessionT> {
    #fabricIndex: FabricIndex;

    // The initial "chunk" may be a list of errors.  As producers execute it is a set of records associated with the
    // most recently touched endpoint.  When the endpoint changes the previous chunk emits
    #chunk?: InvokeResult.Data[];

    // Each input CommandDataIB that does not have an error installs a producer.  Producers run after validation and
    // generate actual command data
    #dataProducers?: Array<(this: CommandInvokeResponse) => AsyncIterable<InvokeResult.Chunk>>;

    // The following state updates as data producers execute.  This serves both to convey state between functions and as
    // a cache between producers that touch the same endpoint and/or cluster
    #currentEndpoint?: EndpointProtocol;
    #currentCluster?: ClusterProtocol;

    #registeredPaths = new Set<string>();
    #registeredCommandRefs = new Set<number>();

    // Count how many command status (on error) and command invokes (success) we have emitted
    #statusCount = 0;
    #successCount = 0;
    #errorCount = 0;

    constructor(node: NodeProtocol, session: SessionT) {
        super(node, session);
        this.#fabricIndex = session.fabric ?? FabricIndex.NO_FABRIC;
    }

    process<T extends Invoke>({ invokeRequests, suppressResponse }: T): InvokeResult<T> {
        const multipleInvokes = invokeRequests.length > 1;

        // Register paths
        for (const command of invokeRequests) {
            const { commandPath: path, commandFields, commandRef } = command;
            if (path.endpointId === undefined || path.clusterId === undefined || path.commandId === undefined) {
                if (multipleInvokes) {
                    throw new StatusResponseError(
                        "Wildcard path must not be used with multiple invokes",
                        StatusCode.InvalidAction,
                    );
                }
                this.#addWildcard(path, commandRef, commandFields);
            } else {
                if (multipleInvokes && commandRef === undefined) {
                    throw new StatusResponseError(
                        "The CommandRef field must be specified for all commands in a batch invoke",
                        StatusCode.InvalidAction,
                    );
                }
                this.#addConcrete(path as InvokeResult.ConcreteCommandPath, commandRef, commandFields);
            }
        }

        if (suppressResponse) {
            if (this.#dataProducers) {
                const promises = this.#dataProducers.map(async producer => {
                    for await (const _chunk of producer.apply(this)) {
                        // we just need to process it, not emit it
                    }
                });
                return MatterAggregateError.allSettled(promises).then(() => {}) as InvokeResult<T>;
            }
            return Promise.resolve() as InvokeResult<T>;
        } else {
            return this.processResponses() as InvokeResult<T>;
        }
    }

    async *processResponses(): AsyncIterable<InvokeResult.Chunk> {
        if (this.#dataProducers) {
            for (const producer of this.#dataProducers) {
                for await (const chunk of producer.apply(this)) {
                    yield chunk;
                }
            }
        }

        // We emit chunks lazily when the endpoint changes so there may be one remaining chunk.  There may also be a
        // chunk with errors even if there are no data producers
        if (this.#chunk !== undefined) {
            yield this.#chunk;
        }
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
    #addWildcard(path: InteractionCommandPath, commandRef: number | undefined, commandFields: TlvStream | undefined) {
        const { nodeId, endpointId } = path;

        if (nodeId !== undefined && nodeId !== this.nodeId) {
            return;
        }

        // TODO: Add Group handling and validation
        /*
        if (isGroupSession && endpointId !== undefined) {
            throw new StatusResponseError("Illegal write request with group ID and endpoint ID", StatusCode.InvalidAction);
        }
        */

        if (endpointId === undefined) {
            this.#addProducer(async function* (this: CommandInvokeResponse) {
                for (const endpoint of this.node) {
                    yield* this.#addEndpointForWildcard(endpoint, path, commandRef, commandFields);
                }
            });
        } else {
            const endpoint = this.node[endpointId];
            if (endpoint) {
                this.#addProducer(async function* (this: CommandInvokeResponse) {
                    yield* this.#addEndpointForWildcard(endpoint, path, commandRef, commandFields);
                });
            }
        }
    }

    /**
     * Write to a concrete path and update internal state.
     */
    #addConcrete(
        path: InvokeResult.ConcreteCommandPath,
        commandRef: number | undefined,
        commandFields: TlvStream | undefined,
    ) {
        const { nodeId, endpointId, clusterId, commandId } = path;

        const pathKey = `${endpointId}-${clusterId}-${commandId}`;
        if (this.#registeredPaths.has(pathKey)) {
            throw new StatusResponseError(
                `Duplicate concrete command path ${this.node.inspectPath(path)} on batch invoke`,
                StatusCode.InvalidAction,
            );
        }
        this.#registeredPaths.add(pathKey);
        if (commandRef !== undefined) {
            if (this.#registeredCommandRefs.has(commandRef)) {
                throw new StatusResponseError(
                    `Duplicate commandRef ${commandRef} on batch invoke`,
                    StatusCode.InvalidAction,
                );
            }
            this.#registeredCommandRefs.add(commandRef);
        }

        if (nodeId !== undefined && this.nodeId !== nodeId) {
            return this.#addStatus(path, commandRef, Status.UnsupportedNode);
        }

        // Resolve path elements
        const endpoint = this.node[endpointId];
        const cluster = endpoint?.[clusterId];
        const command = cluster?.type.commands[commandId];
        let limits;
        if (command === undefined) {
            // We still need to authorize the user for access even though this path doesn't resolve.  Spec is not
            // explicit on what privilege level we should require as normally that information comes from the resolved
            // command.  So attempt to resolve via the active model
            const modelAttr = this.node.matter
                .member(path.clusterId, [ElementTag.Cluster])
                ?.member(path.commandId, [ElementTag.Command]);

            if (modelAttr) {
                // OK cluster doesn't exist at that location, but we do understand semantically, so use limits from the
                // model
                limits = AccessControl(modelAttr as CommandModel).limits;
            } else {
                // We've got no idea.  This effectively falls back to "view" privilege
                limits = FallbackLimits;
            }
        } else {
            limits = command.limits;
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

        const permission = this.session.authorityAt(limits.writeLevel, location);
        switch (permission) {
            case AccessControl.Authority.Granted:
                break;

            case AccessControl.Authority.Unauthorized:
                return this.#addStatus(path, commandRef, Status.UnsupportedAccess);

            case AccessControl.Authority.Restricted:
                return this.#addStatus(path, commandRef, Status.AccessRestricted);

            default:
                throw new InternalError(`Unsupported authorization state ${permission}`);
        }

        if (endpoint === undefined) {
            return this.#addStatus(path, commandRef, Status.UnsupportedEndpoint);
        }
        if (cluster === undefined) {
            return this.#addStatus(path, commandRef, Status.UnsupportedCluster);
        }
        if (command === undefined || !cluster.type.commands[command.id]) {
            return this.#addStatus(path, commandRef, Status.UnsupportedCommand);
        }

        if (limits.fabricScoped && this.session.fabric === undefined) {
            this.#errorCount++;
            return this.#addStatus(path, commandRef, Status.UnsupportedAccess);
        }

        if (limits.timed && !this.session.timed) {
            this.#errorCount++;
            return this.#addStatus(path, commandRef, Status.NeedsTimedInteraction);
        }

        // This path contributes an command value
        this.#addProducer(async function* () {
            // Update internal state for target endpoint
            if (this.#currentEndpoint !== endpoint) {
                if (this.#chunk) {
                    yield this.#chunk;
                    this.#chunk = undefined;
                }
                this.#currentEndpoint = endpoint;
                this.#currentCluster = cluster;
            } else if (this.#currentCluster !== cluster) {
                this.#currentCluster = cluster;
            }

            await this.#invokeCommand(command, path, commandRef, commandFields);
        });
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
    async *#addEndpointForWildcard(
        endpoint: EndpointProtocol,
        path: CommandPath,
        commandRef: number | undefined,
        commandFields: TlvStream | undefined,
    ) {
        const { clusterId, commandId } = path;
        if (clusterId === undefined || commandId === undefined) {
            throw new StatusResponseError(
                "Wildcard path write must specify a clusterId and commandId",
                StatusCode.InvalidAction,
            );
        }

        if (this.#currentEndpoint !== endpoint) {
            if (this.#chunk) {
                yield this.#chunk;
                this.#chunk = undefined;
            }
            this.#currentEndpoint = endpoint;
            this.#currentCluster = undefined;
        }

        const cluster = endpoint[clusterId];
        if (cluster !== undefined) {
            await this.#addClusterForWildcard(cluster, path, commandRef, commandFields);
        }
    }

    /**
     * Read values from a specific {@link cluster} for a wildcard path.
     *
     * Depends on state initialized by {@link #addEndpointForWildcard}.
     *
     * TODO - skip clusters for which subject is unauthorized
     */
    async #addClusterForWildcard(
        cluster: ClusterProtocol,
        path: CommandPath,
        commandRef: number | undefined,
        commandFields: TlvStream | undefined,
    ) {
        if (this.#currentCluster !== cluster) {
            this.#currentCluster = cluster;
        }
        const { commandId } = path;

        if (commandId === undefined) {
            throw new StatusResponseError("Wildcard path write must specify an commandId", StatusCode.InvalidAction);
        } else {
            const command = cluster.type.commands[commandId];
            if (command !== undefined) {
                await this.#addCommandForWildcard(command, path, commandRef, commandFields);
            }
        }
    }

    /**
     * Read values from a specific {@link command} for a wildcard path.
     *
     * Depends on state initialized by {@link #addClusterForWildcard}.
     */
    async #addCommandForWildcard(
        command: CommandTypeProtocol,
        path: CommandPath,
        commandRef: number | undefined,
        commandFields: TlvStream | undefined,
    ) {
        if (!this.#guardedCurrentCluster.type.commands[command.id]) {
            return;
        }

        if (
            this.session.authorityAt(command.limits.writeLevel, this.#guardedCurrentCluster.location) !==
                AccessControl.Authority.Granted ||
            (command.limits.timed && !this.session.timed)
        ) {
            return;
        }

        await this.#invokeCommand(
            command,
            {
                ...path,
                endpointId: this.#guardedCurrentEndpoint.id,
                clusterId: this.#guardedCurrentCluster.type.id,
                commandId: command.id,
            },
            commandRef,
            commandFields,
        );
    }

    /**
     * Add a function that produces data.  These functions are run after validation of input paths.
     */
    #addProducer(producer: (this: CommandInvokeResponse) => AsyncIterable<InvokeResult.Chunk>) {
        if (this.#dataProducers) {
            this.#dataProducers.push(producer);
        } else {
            this.#dataProducers = [producer];
        }
    }

    #addResponse(chunk: InvokeResult.Data) {
        if (this.#chunk) {
            this.#chunk.push(chunk);
        } else {
            this.#chunk = [chunk];
        }
    }

    /**
     * Add a status value.
     */
    #addStatus(
        path: InvokeResult.ConcreteCommandPath,
        commandRef: number | undefined,
        status: Status,
        clusterStatus?: number,
    ) {
        if (status !== StatusCode.Success) {
            logger.debug(
                () =>
                    `Error invoking command ${this.node.inspectPath(path)}: Status=${StatusCode[status]}(${status}), ClusterStatus=${clusterStatus}`,
            );
        }

        const response: InvokeResult.CommandStatus = {
            kind: "cmd-status",
            path,
            status,
            clusterStatus,
            commandRef,
        };

        if (status !== StatusCode.Success) {
            this.#statusCount++;
        }
        this.#addResponse(response);
    }

    async #invokeCommand(
        command: CommandTypeProtocol,
        path: InvokeResult.ConcreteCommandPath,
        commandRef: number | undefined,
        commandFields: TlvStream | undefined,
    ) {
        try {
            const { requestTlv, responseTlv } = command;
            const request = this.#decodeWithSchema(requestTlv, commandFields);
            requestTlv.validate(request);
            const response = await this.#guardedCurrentCluster.invokeCommand(command, request, this.session);
            await this.session.transaction?.commit();

            this.#successCount++;
            const encodedResponse = responseTlv.encodeTlv(response);
            if (encodedResponse.length === 0) {
                this.#addStatus(path, commandRef, StatusCode.Success);
            } else {
                this.#addResponse({
                    kind: "cmd-response",
                    path: {
                        ...path,
                        commandId: command.responseId,
                    },
                    data: encodedResponse,
                    commandRef,
                });
            }
        } catch (error) {
            await this.session.transaction?.rollback();
            if (StatusResponseError.is(error)) {
                this.#errorCount++;

                let errorCode = error.code;
                const errorLogText = `Error ${Diagnostic.hex(errorCode)}${
                    error.clusterCode !== undefined ? `/${Diagnostic.hex(error.clusterCode)}` : ""
                } while invoking command: ${error.message}`;

                if (error instanceof ValidationError) {
                    logger.info(
                        `Validation-${errorLogText}${error.fieldName !== undefined ? ` in field ${error.fieldName}` : ""}`,
                    );
                    if (errorCode === StatusCode.InvalidAction) {
                        errorCode = StatusCode.InvalidCommand;
                    }
                } else {
                    logger.info(errorLogText);
                }

                this.#addStatus(path, commandRef, errorCode, error.clusterCode);
                return;
            }
            throw error;
        }
    }

    #decodeWithSchema(tlv: TlvSchema<any>, value: TlvStream | undefined) {
        if (value === undefined) {
            return undefined; // The validation will fail if the schema expected data
        }
        return tlv.injectField(
            tlv.decodeTlv(value),
            <number>FabricIndexField.id,
            this.#fabricIndex,
            () => true, // We always inject the current fabricIndex for invokes
        );
    }
}
