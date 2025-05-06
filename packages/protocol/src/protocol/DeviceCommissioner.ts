/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdministratorCommissioning } from "#clusters/administrator-commissioning";
import { FailsafeContext } from "#common/FailsafeContext.js";
import { CommissioningMode } from "#common/InstanceBroadcaster.js";
import { FabricManager } from "#fabric/FabricManager.js";
import {
    Crypto,
    Diagnostic,
    Environment,
    Environmental,
    InternalError,
    Lifecycle,
    Logger,
    MatterFlowError,
    MaybePromise,
    ObserverGroup,
} from "#general";
import { SecureChannelProtocol } from "#securechannel/SecureChannelProtocol.js";
import { PaseServer, SessionManager } from "#session/index.js";
import { CommissioningOptions, StatusCode, StatusResponseError } from "#types";
import type { ControllerCommissioner } from "../peer/ControllerCommissioner.js";
import { DeviceAdvertiser } from "./DeviceAdvertiser.js";

const logger = Logger.get("DeviceCommissioner");

/**
 * The component allows commissioning configuration to change after the {@link DeviceCommissioner} is initialized.
 */
export abstract class CommissioningConfigProvider {
    abstract values: CommissioningOptions.Configuration;
}

/**
 * Interfaces the {@link DeviceCommissioner} with other components.
 */
export interface DeviceCommissionerContext {
    fabrics: FabricManager;
    sessions: SessionManager;
    advertiser: DeviceAdvertiser;
    secureChannelProtocol: SecureChannelProtocol;
    commissioningConfig: CommissioningConfigProvider;
}

/**
 * Implements commissioning for devices.
 *
 * Note this implements commissioning for a *local* device; use {@link ControllerCommissioner} to commission a *remote*
 * device.
 */
export class DeviceCommissioner {
    #context: DeviceCommissionerContext;
    #failsafeContext?: FailsafeContext;
    #windowStatus = AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen;
    #activeDiscriminator?: number;
    #activeCommissioningEndCallback?: () => MaybePromise;
    #observers = new ObserverGroup(this);

    constructor(context: DeviceCommissionerContext) {
        this.#context = context;

        this.#observers.on(this.#context.advertiser.timedOut, this.endCommissioning);

        // If a commissioning window is open then we re-announce this because it was ended as fabric got added
        this.#observers.on(this.#context.fabrics.events.deleted, async () => {
            // If a commissioning window is open, or we removed the last fabric, then we re-announce this
            // because it was ended as fabric got added
            if (
                this.#context.fabrics.length === 0 ||
                this.#windowStatus !== AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen
            ) {
                this.reactivateAdvertiser();
            }
        });

        // No fabric paired yet, so announce as "ready for commissioning"
        this.#observers.on(this.#context.advertiser.operationalModeEnded, this.allowBasicCommissioning);

        // Cancel commissioning when there are too many PASE errors
        this.#observers.on(this.#context.secureChannelProtocol.tooManyPaseErrors, async () => {
            logger.info("Maximum number of PASE pairing errors reached, canceling commissioning");
            await this.endCommissioning();
        });

        this.#observers.on(this.#context.sessions.sessions.deleted, session => {
            const currentFabricIndex = session.fabric?.fabricIndex;

            // Verify if the session associated fabric still exists
            const existingSessionFabric =
                currentFabricIndex === undefined
                    ? undefined
                    : this.#context.fabrics.findByIndex(currentFabricIndex)?.fabricIndex;

            // When a session closes, announce existing fabrics again so that controller can detect the device again.
            // When session was closed and no fabric exist anymore then this is triggering a factory reset in upper
            // layer and it would be not good to announce a commissionable device and then reset that again with the
            // factory reset
            if (this.#context.fabrics.length > 0 || session.isPase || !existingSessionFabric) {
                this.#context.advertiser
                    .startAdvertising()
                    .catch(error => logger.warn(`Error while announcing`, error));
            }
        });
    }

    static [Environmental.create](env: Environment) {
        const instance = new DeviceCommissioner({
            fabrics: env.get(FabricManager),
            sessions: env.get(SessionManager),
            advertiser: env.get(DeviceAdvertiser),
            secureChannelProtocol: env.get(SecureChannelProtocol),
            commissioningConfig: env.get(CommissioningConfigProvider),
        });
        env.set(DeviceCommissioner, instance);
        return instance;
    }

    get failsafeContext() {
        this.assertFailsafeArmed();
        return this.#failsafeContext!;
    }

    async allowEnhancedCommissioning(
        discriminator: number,
        paseServer: PaseServer,
        commissioningEndCallback: () => MaybePromise,
    ) {
        if (this.#windowStatus === AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen) {
            throw new MatterFlowError(
                "Basic commissioning window is already open! Cannot set Enhanced commissioning mode.",
            );
        }

        this.#context.secureChannelProtocol.setPaseCommissioner(paseServer);
        await this.#becomeCommissionable(
            AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen,
            commissioningEndCallback,
            discriminator,
        );
    }

    async allowBasicCommissioning(commissioningEndCallback?: () => MaybePromise) {
        if (this.#windowStatus === AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen) {
            throw new MatterFlowError(
                "Enhanced commissioning window is already open! Cannot set Basic commissioning mode.",
            );
        }

        this.#context.secureChannelProtocol.setPaseCommissioner(
            await PaseServer.fromPin(this.#context.sessions, this.#context.commissioningConfig.values.passcode, {
                iterations: 1000,
                salt: Crypto.get().getRandomData(32),
            }),
        );

        await this.#becomeCommissionable(
            AdministratorCommissioning.CommissioningWindowStatus.BasicWindowOpen,
            commissioningEndCallback,
        );
    }

    async beginTimed(failsafeContext: FailsafeContext) {
        await failsafeContext.construction;

        this.#failsafeContext = failsafeContext;

        this.#context.fabrics.events.added.on(fabric => {
            const fabrics = this.#context.fabrics.fabrics;
            this.#context.advertiser
                .advertiseFabrics(fabrics, true)
                .catch(error =>
                    logger.warn(`Error sending Fabric announcement for Index ${fabric.fabricIndex}`, error),
                );
            logger.info("Announce done", Diagnostic.dict({ fabric: fabric.fabricId, fabricIndex: fabric.fabricIndex }));
        });

        failsafeContext.commissioned.on(async () => await this.endCommissioning());

        failsafeContext.construction.change.on(status => {
            if (status === Lifecycle.Status.Destroyed) {
                this.#failsafeContext = undefined;
            }
        });
    }

    get isFailsafeArmed() {
        return this.#failsafeContext !== undefined;
    }

    assertFailsafeArmed(message?: string) {
        if (this.isFailsafeArmed) return;
        throw new StatusResponseError(
            message ?? "Failsafe timer needs to be armed to execute this action.",
            StatusCode.FailsafeRequired,
        );
    }

    reactivateAdvertiser() {
        if (this.#windowStatus === AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen) {
            return;
        }
        this.#enterCommissioningMode(this.#windowStatus, this.#activeDiscriminator).catch(error =>
            logger.warn("Error sending announcement:", error),
        );
    }

    async #enterCommissioningMode(
        windowStatus: AdministratorCommissioning.CommissioningWindowStatus,
        discriminator?: number,
    ) {
        this.#windowStatus = windowStatus;
        const commissioningConfig = this.#context.commissioningConfig.values;
        await this.#context.advertiser.enterCommissioningMode(
            windowStatus === AdministratorCommissioning.CommissioningWindowStatus.EnhancedWindowOpen
                ? CommissioningMode.Enhanced
                : CommissioningMode.Basic,
            {
                ...commissioningConfig.productDescription,
                discriminator: discriminator ?? commissioningConfig.discriminator,
            },
        );
    }

    async #becomeCommissionable(
        windowStatus: AdministratorCommissioning.CommissioningWindowStatus,
        activeCommissioningEndCallback?: () => MaybePromise,
        discriminator?: number,
    ) {
        if (
            this.#windowStatus === windowStatus &&
            (discriminator === undefined || discriminator === this.#activeDiscriminator)
        ) {
            // We want to re-announce
            return this.reactivateAdvertiser();
        }
        if (this.#windowStatus !== AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen) {
            throw new InternalError(`Commissioning window already open with different mode (${this.#windowStatus})!`);
        }
        if (this.#activeCommissioningEndCallback !== undefined) {
            throw new InternalError("Commissioning window already open with different callback!");
        }
        this.#activeCommissioningEndCallback = activeCommissioningEndCallback;
        this.#activeDiscriminator = discriminator;

        // MDNS is sent in parallel
        // TODO - untracked promise
        this.#enterCommissioningMode(windowStatus, discriminator).catch(error =>
            logger.warn("Error sending announcement:", error),
        );
    }

    async endCommissioning() {
        if (this.#windowStatus === AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen) {
            return;
        }

        logger.debug("Commissioning mode ended, stop announcements.");

        this.#context.secureChannelProtocol.removePaseCommissioner();

        this.#windowStatus = AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen;

        if (this.#activeCommissioningEndCallback !== undefined) {
            const activeCommissioningEndCallback = this.#activeCommissioningEndCallback;
            this.#activeCommissioningEndCallback = undefined;
            await activeCommissioningEndCallback();
        }

        await this.#context.advertiser.exitCommissioningMode();

        logger.info("All commissioning announcements stopped");
    }

    async close() {
        this.#observers.close();
        await this.endCommissioning();
        if (this.#failsafeContext) {
            await this.#failsafeContext.close();
            this.#failsafeContext = undefined;
        }
    }
}
