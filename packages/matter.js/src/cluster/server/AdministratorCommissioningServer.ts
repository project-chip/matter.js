/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { InternalError } from "../../common/MatterError.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { VendorId } from "../../datatype/VendorId.js";
import { Logger } from "../../log/Logger.js";
import { StatusCode, StatusResponseError } from "../../protocol/interaction/StatusCode.js";
import { Session } from "../../session/Session.js";
import { PaseServer } from "../../session/pase/PaseServer.js";
import { Time, Timer } from "../../time/Time.js";
import { AsyncConstruction } from "../../util/AsyncConstruction.js";
import { ByteArray } from "../../util/ByteArray.js";
import { AdministratorCommissioning } from "../definitions/AdministratorCommissioningCluster.js";
import { AttributeServer } from "./AttributeServer.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

const logger = Logger.get("AdministratorCommissioningServer");

export const MAXIMUM_COMMISSIONING_TIMEOUT_S = 15 * 60; // 900 seconds/15 minutes
export const MINIMUM_COMMISSIONING_TIMEOUT_S = 3 * 60; // 180 seconds/3 minutes

// General:
// TODO If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this command SHALL fail with a cluster specific status code of PAKEParameterError.
// TODO In case of any other parameter error, this command SHALL fail with a status code of COMMAND_INVALID.

/** Class which executed the cluster commands for the AdministratorCommissioning cluster. */
class AdministratorCommissioningManager {
    private commissioningWindowTimeout?: Timer;
    private fabricRemoveHandler = () => this.adminFabricIndexAttribute.setLocal(null);
    #construction: AsyncConstruction<AdministratorCommissioningManager>;

    get construction() {
        return this.#construction;
    }

    constructor(
        private readonly windowStatusAttribute: AttributeServer<AdministratorCommissioning.CommissioningWindowStatus>,
        private readonly adminFabricIndexAttribute: AttributeServer<FabricIndex | null>,
        private readonly adminVendorIdAttribute: AttributeServer<VendorId | null>,
    ) {
        this.#construction = AsyncConstruction(this, async () => {
            await windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen);
        });
    }

    /**
     * Called whenever a Commissioning/Announcement Window is opened by this cluster. This method starts the timer and
     * adjusts the needed attributes.
     */
    async initializeCommissioningWindow(commissioningTimeout: number, session: Session<MatterDevice>) {
        if (this.commissioningWindowTimeout !== undefined) {
            // Should never happen, but let's make sure
            throw new InternalError("Commissioning window already initialized.");
        }
        logger.debug(`Commissioning window timer started for ${commissioningTimeout} seconds for ${session.name}.`);
        this.commissioningWindowTimeout = Time.getTimer(
            "Commissioning timeout",
            commissioningTimeout * 1000,
            async () => await this.closeCommissioningWindow(session),
        ).start();

        await this.adminFabricIndexAttribute.setLocal(session.getAssociatedFabric().fabricIndex);
        await this.adminVendorIdAttribute.setLocal(session.getAssociatedFabric().rootVendorId);
        session.getAssociatedFabric().addRemoveCallback(this.fabricRemoveHandler);
    }

    /**
     * This method validates if a commissioning window can be opened and throws various exceptions in case of failures.
     */
    assertCommissioningWindowRequirements(commissioningTimeout: number, device: MatterDevice) {
        if (this.commissioningWindowTimeout !== undefined) {
            throw new StatusResponseError(
                "A commissioning window is already opened.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.Busy,
            );
        }

        if (commissioningTimeout > MAXIMUM_COMMISSIONING_TIMEOUT_S) {
            throw new StatusResponseError(
                `Commissioning timeout must not exceed ${MAXIMUM_COMMISSIONING_TIMEOUT_S} seconds.`,
                StatusCode.InvalidCommand,
            );
        }
        if (commissioningTimeout < MINIMUM_COMMISSIONING_TIMEOUT_S) {
            throw new StatusResponseError(
                `Commissioning timeout must not be lower then ${MINIMUM_COMMISSIONING_TIMEOUT_S} seconds.`,
                StatusCode.InvalidCommand,
            );
        }

        if (device.isFailsafeArmed()) {
            throw new StatusResponseError(
                "Failsafe timer armed, assume commissioning in progress.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.Busy,
            );
        }
    }

    /**
     * This method opens an Enhanced Commissioning Window (A dynamic passcode is used which was provided by the caller).
     */
    async openEnhancedCommissioningWindow(
        pakeVerifier: ByteArray,
        discriminator: number,
        iterations: number,
        salt: ByteArray,
        commissioningTimeout: number,
        session: Session<MatterDevice>,
    ) {
        const device = session.getContext();

        this.assertCommissioningWindowRequirements(commissioningTimeout, device);

        await this.windowStatusAttribute.setLocal(
            AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen,
        );
        await this.initializeCommissioningWindow(commissioningTimeout, session);

        await device.allowEnhancedCommissioning(
            discriminator,
            PaseServer.fromVerificationValue(pakeVerifier, { iterations, salt }),
            async () => {
                session.getAssociatedFabric().deleteRemoveCallback(this.fabricRemoveHandler);
                await this.endCommissioning();
            },
        );
    }

    /** This method opens a Basic Commissioning Window. The default passcode is used. */
    async openBasicCommissioningWindow(commissioningTimeout: number, session: Session<MatterDevice>) {
        const device = session.getContext();

        this.assertCommissioningWindowRequirements(commissioningTimeout, device);

        await this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen);
        await this.initializeCommissioningWindow(commissioningTimeout, session);

        await device.allowBasicCommissioning(async () => {
            session.getAssociatedFabric().deleteRemoveCallback(this.fabricRemoveHandler);
            await this.endCommissioning();
        });
    }

    /**
     * This method is used internally when the commissioning window timer expires or the commissioning was completed.
     */
    private async endCommissioning() {
        logger.debug("End commissioning window.");
        if (this.commissioningWindowTimeout !== undefined) {
            this.commissioningWindowTimeout.stop();
            this.commissioningWindowTimeout = undefined;
        }
        await this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen);
        await this.adminFabricIndexAttribute.setLocal(null);
        await this.adminVendorIdAttribute.setLocal(null);
    }

    /** This method is used to close a commissioning window. */
    async closeCommissioningWindow(session: Session<MatterDevice>) {
        await this.endCommissioning();
        await session.getContext().endCommissioning();
    }

    /** This method is used to revoke a commissioning window. */
    async revokeCommissioning(session: Session<MatterDevice>) {
        if (this.commissioningWindowTimeout === undefined) {
            throw new StatusResponseError(
                "No commissioning window is opened that could be revoked.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.WindowNotOpen,
            );
        }
        logger.debug("Revoking commissioning window.");
        await this.closeCommissioningWindow(session);
    }

    /** Cleanup resources and stop the timer when the ClusterServer is destroyed. */
    destroy() {
        if (this.commissioningWindowTimeout !== undefined) {
            this.commissioningWindowTimeout.stop();
            this.commissioningWindowTimeout = undefined;
        }
    }
}

export const AdministratorCommissioningHandler: () => ClusterServerHandlers<
    typeof AdministratorCommissioning.Cluster
> = () => {
    let manager: AdministratorCommissioningManager;

    return {
        initializeClusterServer: async ({ attributes: { windowStatus, adminVendorId, adminFabricIndex } }) => {
            manager = new AdministratorCommissioningManager(windowStatus, adminFabricIndex, adminVendorId);
            await manager.construction;
        },

        openCommissioningWindow: async ({
            request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt, commissioningTimeout },
            session /* attributes: { windowStatus } */,
        }) =>
            manager.openEnhancedCommissioningWindow(
                pakeVerifier,
                discriminator,
                iterations,
                salt,
                commissioningTimeout,
                session,
            ),

        revokeCommissioning: async ({ session }) => await manager.revokeCommissioning(session),

        destroyClusterServer: () => manager?.destroy(),
    };
};

const AdministratorCommissioningBasicCluster = AdministratorCommissioning.Cluster.with("Basic");

export const BasicAdminCommissioningHandler: () => ClusterServerHandlers<
    typeof AdministratorCommissioningBasicCluster
> = () => {
    let manager: AdministratorCommissioningManager;

    return {
        initializeClusterServer: async ({ attributes: { windowStatus, adminVendorId, adminFabricIndex } }) => {
            manager = new AdministratorCommissioningManager(windowStatus, adminFabricIndex, adminVendorId);
            await manager.construction;
        },

        openCommissioningWindow: async ({
            request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt, commissioningTimeout },
            session,
        }) =>
            manager.openEnhancedCommissioningWindow(
                pakeVerifier,
                discriminator,
                iterations,
                salt,
                commissioningTimeout,
                session,
            ),

        openBasicCommissioningWindow: async ({ request: { commissioningTimeout }, session }) =>
            manager.openBasicCommissioningWindow(commissioningTimeout, session),

        revokeCommissioning: async ({ session }) => await manager.revokeCommissioning(session),

        destroyClusterServer: () => manager?.destroy(),
    };
};
