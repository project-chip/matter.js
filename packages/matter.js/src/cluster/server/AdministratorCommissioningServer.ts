/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricIndex } from "../../datatype/FabricIndex.js";
import { VendorId } from "../../datatype/VendorId.js";
import { MatterDevice } from "../../MatterDevice.js";
import { StatusResponseError } from "../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../protocol/interaction/InteractionProtocol.js";
import { PaseServer } from "../../session/pase/PaseServer.js";
import { Session } from "../../session/Session.js";
import { Time, Timer } from "../../time/Time.js";
import { ByteArray } from "../../util/ByteArray.js";
import { AdministratorCommissioning } from "../definitions/AdministratorCommissioningCluster.js";
import { AttributeServer } from "./AttributeServer.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

export const MAXIMUM_COMMISSIONING_TIMEOUT_S = 15 * 60; // 900 seconds/15 minutes
export const MINIMUM_COMMISSIONING_TIMEOUT_S = 3 * 60; // 180 seconds/3 minutes

// General:
// TODO If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this command SHALL fail with a cluster specific status code of PAKEParameterError.
// TODO In case of any other parameter error, this command SHALL fail with a status code of COMMAND_INVALID.

class AdministratorCommissioningManager {
    private commissioningWindowTimeout?: Timer;
    private fabricRemoveHandler = () => this.adminFabricIndexAttribute.setLocal(null);

    constructor(
        private readonly windowStatusAttribute: AttributeServer<AdministratorCommissioning.CommissioningWindowStatus>,
        private readonly adminFabricIndexAttribute: AttributeServer<FabricIndex | null>,
        private readonly adminVendorIdAttribute: AttributeServer<VendorId | null>,
    ) {
        windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen);
    }

    initializeCommissioningWindow(commissioningTimeout: number, session: Session<MatterDevice>) {
        this.commissioningWindowTimeout = Time.getTimer(commissioningTimeout * 1000, () =>
            this.closeCommissioningWindow(session),
        ).start();

        this.adminFabricIndexAttribute.setLocal(session.getAssociatedFabric().fabricIndex);
        this.adminVendorIdAttribute.setLocal(session.getAssociatedFabric().rootVendorId);
        session.getAssociatedFabric().addRemoveCallback(this.fabricRemoveHandler);
    }

    validateCommissioningWindowRequirements(commissioningTimeout: number, device: MatterDevice) {
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

    async openEnhancedCommissioningWindow(
        pakeVerifier: ByteArray,
        discriminator: number,
        iterations: number,
        salt: ByteArray,
        commissioningTimeout: number,
        session: Session<MatterDevice>,
    ) {
        const device = session.getContext();

        this.validateCommissioningWindowRequirements(commissioningTimeout, device);

        await device.allowEnhancedCommissioning(
            discriminator,
            PaseServer.fromVerificationValue(pakeVerifier, { iterations, salt }),
            () => {
                session.getAssociatedFabric().deleteRemoveCallback(this.fabricRemoveHandler);
                this.endCommissioning();
            },
        );
        this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen);

        this.initializeCommissioningWindow(commissioningTimeout, session);
    }

    async openBasicCommissioningWindow(commissioningTimeout: number, session: Session<MatterDevice>) {
        const device = session.getContext();

        this.validateCommissioningWindowRequirements(commissioningTimeout, device);

        await device.allowBasicCommissioning(() => {
            session.getAssociatedFabric().deleteRemoveCallback(this.fabricRemoveHandler);
            this.endCommissioning();
        });
        this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen);

        this.initializeCommissioningWindow(commissioningTimeout, session);
    }

    private endCommissioning() {
        if (this.commissioningWindowTimeout !== undefined) {
            this.commissioningWindowTimeout.stop();
            this.commissioningWindowTimeout = undefined;
        }
        this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen);
        this.adminFabricIndexAttribute.setLocal(null);
        this.adminVendorIdAttribute.setLocal(null);
    }

    closeCommissioningWindow(session: Session<MatterDevice>) {
        session.getContext().endCommissioning();
        this.endCommissioning();
    }

    async revokeCommissioning(session: Session<MatterDevice>) {
        if (this.commissioningWindowTimeout === undefined) {
            throw new StatusResponseError(
                "No commissioning window is opened that could be revoked.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.WindowNotOpen,
            );
        }
        this.closeCommissioningWindow(session);
    }

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
        initializeClusterServer: ({ attributes: { windowStatus, adminVendorId, adminFabricIndex } }) => {
            manager = new AdministratorCommissioningManager(windowStatus, adminFabricIndex, adminVendorId);
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

        revokeCommissioning: async ({ session }) => manager.revokeCommissioning(session),

        destroyClusterServer: () => manager.destroy(),
    };
};

const AdministratorCommissioningBasicCluster = AdministratorCommissioning.Cluster.with("Basic");
export const BasicAdminCommissioningHandler: () => ClusterServerHandlers<
    typeof AdministratorCommissioningBasicCluster
> = () => {
    let manager: AdministratorCommissioningManager;

    return {
        initializeClusterServer: ({ attributes: { windowStatus, adminVendorId, adminFabricIndex } }) => {
            manager = new AdministratorCommissioningManager(windowStatus, adminFabricIndex, adminVendorId);
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

        revokeCommissioning: async ({ session }) => manager.revokeCommissioning(session),

        destroyClusterServer: () => manager.destroy(),
    };
};
