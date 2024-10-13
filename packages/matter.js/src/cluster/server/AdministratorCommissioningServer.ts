/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdministratorCommissioning } from "#clusters";
import { InternalError, Logger, Time, Timer } from "#general";
import { MatterDevice } from "#MatterDevice.js";
import { AccessLevel } from "#model";
import { AttributeServer, PaseServer, Session } from "#protocol";
import {
    Command,
    FabricIndex,
    MAXIMUM_COMMISSIONING_TIMEOUT_S,
    MINIMUM_COMMISSIONING_TIMEOUT_S,
    PAKE_PASSCODE_VERIFIER_LENGTH,
    StatusCode,
    StatusResponseError,
    TlvByteString,
    TlvField,
    TlvNoResponse,
    TlvObject,
    TlvUInt16,
    TlvUInt32,
    VendorId,
} from "#types";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

const logger = Logger.get("AdministratorCommissioningServer");

/**
 * Monkey patching Tlv Structure of openCommissioningWindow command to prevent data validation of the fields to be
 * handled as ConstraintError because we need to return a special error.
 * We do this to leave the model in fact for other validations and only apply the change for our Schema-aware Tlv parsing.
 */
AdministratorCommissioning.Cluster.commands = {
    ...AdministratorCommissioning.Cluster.commands,
    openCommissioningWindow: Command(
        0x0,
        TlvObject({
            commissioningTimeout: TlvField(0, TlvUInt16),
            pakePasscodeVerifier: TlvField(1, TlvByteString),
            discriminator: TlvField(2, TlvUInt16.bound({ max: 4095 })),
            iterations: TlvField(3, TlvUInt32),
            salt: TlvField(4, TlvByteString),
        }),
        0x0,
        TlvNoResponse,
        {
            invokeAcl: AccessLevel.Administer,
            timed: true,
        },
    ),
};

// General:
// TODO If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this command SHALL fail with a cluster specific status code of PAKEParameterError.
// TODO In case of any other parameter error, this command SHALL fail with a status code of COMMAND_INVALID.

/** Class which executed the cluster commands for the AdministratorCommissioning cluster. */
class AdministratorCommissioningManager {
    private commissioningWindowTimeout?: Timer;
    private fabricRemoveHandler = async () => this.adminFabricIndexAttribute.setLocal(null);

    constructor(
        private readonly windowStatusAttribute: AttributeServer<AdministratorCommissioning.CommissioningWindowStatus>,
        private readonly adminFabricIndexAttribute: AttributeServer<FabricIndex | null>,
        private readonly adminVendorIdAttribute: AttributeServer<VendorId | null>,
    ) {
        windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen);
    }

    /**
     * Called whenever a Commissioning/Announcement Window is opened by this cluster. This method starts the timer and
     * adjusts the needed attributes.
     */
    initializeCommissioningWindow(commissioningTimeout: number, session: Session) {
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

        this.adminFabricIndexAttribute.setLocal(session.associatedFabric.fabricIndex);
        this.adminVendorIdAttribute.setLocal(session.associatedFabric.rootVendorId);
        session.associatedFabric.addRemoveCallback(async () => this.fabricRemoveHandler());
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
        pakeVerifier: Uint8Array,
        discriminator: number,
        iterations: number,
        salt: Uint8Array,
        commissioningTimeout: number,
        session: Session,
    ) {
        // We monkey patched the Tlv definition above, so take care about correct error handling
        if (pakeVerifier.length !== PAKE_PASSCODE_VERIFIER_LENGTH) {
            throw new StatusResponseError(
                "PAKE Passcode verifier length is invalid.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.PakeParameterError,
            );
        }
        if (iterations < 1000 || iterations > 100_000) {
            throw new StatusResponseError(
                "PAKE iterations invalid.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.PakeParameterError,
            );
        }
        if (salt.length < 16 || salt.length > 32) {
            throw new StatusResponseError(
                "PAKE salt has invalid length.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.PakeParameterError,
            );
        }

        const device = MatterDevice.of(session);

        this.assertCommissioningWindowRequirements(commissioningTimeout, device);

        this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen);
        this.initializeCommissioningWindow(commissioningTimeout, session);

        await device.allowEnhancedCommissioning(
            discriminator,
            PaseServer.fromVerificationValue(device.sessionManager, pakeVerifier, { iterations, salt }),
            () => {
                session.associatedFabric.deleteRemoveCallback(this.fabricRemoveHandler);
                this.endCommissioning();
            },
        );
    }

    /** This method opens a Basic Commissioning Window. The default passcode is used. */
    async openBasicCommissioningWindow(commissioningTimeout: number, session: Session) {
        const device = MatterDevice.of(session);

        this.assertCommissioningWindowRequirements(commissioningTimeout, device);

        this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen);
        this.initializeCommissioningWindow(commissioningTimeout, session);

        await device.allowBasicCommissioning(() => {
            session.associatedFabric.deleteRemoveCallback(this.fabricRemoveHandler);
            this.endCommissioning();
        });
    }

    /**
     * This method is used internally when the commissioning window timer expires or the commissioning was completed.
     */
    private endCommissioning() {
        if (this.commissioningWindowTimeout === undefined) {
            return;
        }
        this.commissioningWindowTimeout.stop();
        this.commissioningWindowTimeout = undefined;

        logger.debug("End commissioning window.");
        this.windowStatusAttribute.setLocal(AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen);
        this.adminFabricIndexAttribute.setLocal(null);
        this.adminVendorIdAttribute.setLocal(null);
    }

    /** This method is used to close a commissioning window. */
    async closeCommissioningWindow(session: Session) {
        this.endCommissioning();
        await MatterDevice.of(session).endCommissioning();
    }

    /** This method is used to revoke a commissioning window. */
    async revokeCommissioning(session: Session) {
        if (this.commissioningWindowTimeout === undefined) {
            throw new StatusResponseError(
                "No commissioning window is opened that could be revoked.",
                StatusCode.Failure,
                AdministratorCommissioning.StatusCode.WindowNotOpen,
            );
        }
        logger.debug("Revoking commissioning window.");
        await this.closeCommissioningWindow(session);

        const device = MatterDevice.of(session);
        if (device.isFailsafeArmed()) {
            await device.failsafeContext.close();
        }
    }

    /** Cleanup resources and stop the timer when the ClusterServer is destroyed. */
    close() {
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

        revokeCommissioning: async ({ session }) => await manager.revokeCommissioning(session),

        destroyClusterServer: () => manager?.close(),
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

        revokeCommissioning: async ({ session }) => await manager.revokeCommissioning(session),

        destroyClusterServer: () => manager?.close(),
    };
};
