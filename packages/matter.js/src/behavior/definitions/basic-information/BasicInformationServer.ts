/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformation } from "../../../cluster/definitions/BasicInformationCluster.js";
import { VendorId } from "../../../datatype/VendorId.js";
import { Fabric } from "../../../fabric/Fabric.js";
import { FabricManager } from "../../../fabric/FabricManager.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { Specification } from "../../../model/definitions/Specification.js";
import { NodeLifecycle } from "../../../node/NodeLifecycle.js";
import { DEFAULT_MAX_PATHS_PER_INVOKE } from "../../../protocol/interaction/InteractionServer.js";
import { Observable } from "../../../util/Observable.js";
import { ActionContext } from "../../context/ActionContext.js";
import { BasicInformationBehavior } from "./BasicInformationBehavior.js";

const logger = Logger.get("BasicInformationServer");

// Enable Events support by the Default implementation and tweak the maxPathsPerInvoke to 0 to have default handling
const Base = BasicInformationBehavior.enable({
    events: { startUp: true, shutDown: true, leave: true },
}).set({ maxPathsPerInvoke: 0 });

/**
 * This is the default server implementation of BasicInformationBehavior.
 */
export class BasicInformationServer extends Base {
    override initialize() {
        const state = this.state;

        const defaultsSet = {} as Record<string, any>;

        function setDefault<T extends keyof typeof state>(name: T, value: (typeof state)[T]) {
            if (state[name] === undefined || state[name] === 0) {
                state[name] = value;
                defaultsSet[name] = value;
            }
        }

        // These are development defaults, we log a warning when we set them
        setDefault("vendorId", VendorId(0xfff1));
        setDefault("vendorName", "Matter.js Test Vendor");
        setDefault("productId", 0x8000);
        setDefault("productName", "Matter.js Test Product");
        setDefault("hardwareVersion", 0);
        setDefault("softwareVersion", 0);

        // Warn if we used development defaults
        if (Object.keys(defaultsSet).length) {
            logger.warn("Using development values for some BasicInformation attributes:", Diagnostic.dict(defaultsSet));
        }

        // These defaults are appropriate for development or production so do not warn
        setDefault("productLabel", state.productName);
        setDefault("nodeLabel", state.productName);
        setDefault("dataModelRevision", Specification.DATA_MODEL_REVISION);
        setDefault("hardwareVersionString", state.hardwareVersion.toString());
        setDefault("softwareVersionString", state.softwareVersion.toString());
        setDefault("specificationVersion", Specification.SPECIFICATION_VERSION);
        setDefault("maxPathsPerInvoke", DEFAULT_MAX_PATHS_PER_INVOKE);

        const lifecycle = this.endpoint.lifecycle as NodeLifecycle;

        if (lifecycle.online !== undefined) {
            this.reactTo(lifecycle.online, this.#online);
        }

        if (this.state.reachable !== undefined && this.events.reachable$Changed !== undefined) {
            // Manually enable the reachableChanged event if not yet existing when reachable attribute exists
            if (this.events.reachableChanged === undefined) {
                this.events.reachableChanged = Observable<
                    [payload: BasicInformation.ReachableChangedEvent, context: ActionContext],
                    void
                >();
            }
            this.reactTo(this.events.reachable$Changed, this.#emitReachableChange);
        }

        if (
            this.state.uniqueId !== undefined &&
            this.state.serialNumber !== undefined &&
            this.state.uniqueId === this.state.serialNumber
        ) {
            logger.warn("uniqueId and serialNumber shall not be the same.");
        }
    }

    [Symbol.asyncDispose]() {
        this.events.shutDown?.emit(undefined, this.context);
    }

    #online() {
        this.events.startUp.emit({ softwareVersion: this.state.softwareVersion }, this.context);

        const fabricManager = this.endpoint.env.get(FabricManager);
        this.reactTo(fabricManager.events.deleted, this.#handleRemovedFabric);
    }

    #emitReachableChange(reachable: boolean) {
        this.events.reachableChanged?.emit({ reachableNewValue: reachable }, this.context);
    }

    #handleRemovedFabric({ fabricIndex }: Fabric) {
        this.events.leave.emit({ fabricIndex }, this.context);
    }
}

export namespace BasicInformationServer {
    export interface ProductDescription {
        /**
         * The device name for commissioning announcements.
         */
        readonly name: string;

        /**
         * The device type for commissioning announcements.
         */
        readonly deviceType: number;

        /**
         * The vendor ID for commissioning announcements.
         */
        readonly vendorId: VendorId;

        /**
         * The product ID for commissioning announcements.
         */
        readonly productId: number;
    }
}
