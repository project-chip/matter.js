/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FALLBACK_INTERACTIONMODEL_REVISION } from "#session/Session.js";
import { ClusterType, CommandData, InvokeRequest, TlvSchema, TypeFromSchema } from "#types";
import { MalformedRequestError } from "./MalformedRequestError.js";
import { Specifier } from "./Specifier.js";

export interface Invoke extends InvokeRequest {
    timeout?: number;
}

/**
 * Request invocation of one or more commands.
 */
export function Invoke(definition: Invoke.Definition): Invoke {
    const {
        commands,
        interactionModelRevision = FALLBACK_INTERACTIONMODEL_REVISION,
        suppressResponse = false,
        timed: timedRequest = false,
    } = definition;

    if (!commands?.length) {
        throw new MalformedRequestError(`Invocation requires at least one command`);
    }

    return {
        invokeRequests: commands,
        interactionModelRevision,
        suppressResponse,
        timedRequest,
    };
}

export namespace Invoke {
    export interface Definition {
        commands: CommandData[];
        suppressResponse?: boolean;
        timed?: boolean;
        interactionModelRevision?: number;
    }

    export function Command<const C extends ClusterType>(request: Invoke.CommandRequest<C>): CommandData {
        const result: CommandData = {
            commandPath: {
                clusterId: Specifier.clusterFor(request.cluster).id,
                commandId: Invoke.commandOf(request).requestId,
            },
        };

        const endpointId = Specifier.endpointIdOf(request);
        if (endpointId !== undefined) {
            result.commandPath.endpointId = endpointId;
        }

        return result;
    }

    export type CommandRequest<
        C extends Specifier.Cluster = Specifier.Cluster,
        CMD extends Specifier.Command<Specifier.ClusterFor<C>> = Specifier.Command<Specifier.ClusterFor<C>>,
    > = {
        endpoint?: Specifier.Endpoint;
        cluster: C;
        command: CMD;
    } & Fields<Specifier.CommandFor<Specifier.ClusterFor<C>, CMD>["requestSchema"]>;

    export function commandOf<const R extends CommandRequest>(request: R): ClusterType.Command {
        if (typeof request.command === "string") {
            const cluster = Specifier.clusterFor(request.cluster);
            if (cluster === undefined) {
                throw new MalformedRequestError(`Cannot designate command "${request.command}" without cluster`);
            }
            const command = cluster.commands[request.command];
            if (command === undefined) {
                throw new MalformedRequestError(`Cluster ${cluster.name} does not define command ${request.command}`);
            }
            return command as Specifier.CommandFor<Specifier.ClusterOf<R>, R["command"]>;
        }
        return request.command as Specifier.CommandFor<Specifier.ClusterOf<R>, R["command"]>;
    }

    export type Fields<S extends TlvSchema<any>> =
        S extends TlvSchema<void>
            ? {}
            : S extends TlvSchema<null>
              ? { fields?: TypeFromSchema<S> }
              : { fields: TypeFromSchema<S> };
}
