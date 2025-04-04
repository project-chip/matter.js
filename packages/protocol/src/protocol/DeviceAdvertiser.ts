/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningMode, CommissioningModeInstanceData, InstanceBroadcaster } from "#common/InstanceBroadcaster.js";
import { Fabric } from "#fabric/Fabric.js";
import { FabricManager } from "#fabric/FabricManager.js";
import {
    AsyncObservable,
    Diagnostic,
    Environment,
    Environmental,
    Logger,
    MatterAggregateError,
    Mutex,
    ObserverGroup,
    Time,
    Timer,
} from "#general";
import { SessionManager } from "#session/SessionManager.js";
import { DEVICE_ANNOUNCEMENT_DURATION_MS, DEVICE_ANNOUNCEMENT_INTERVAL_MS } from "#types";

const logger = Logger.get("DeviceAdvertiser");

/**
 * Interfaces the {@link DeviceAdvertiser} with other components.
 */
export interface DeviceAdvertiserContext {
    fabrics: FabricManager;
    sessions: SessionManager;
}

/**
 * Advertises a node for commissioning (if uncommissioned) or operationally (if commissioned).
 */
export class DeviceAdvertiser {
    readonly #context: DeviceAdvertiserContext;
    readonly #broadcasters = new Set<InstanceBroadcaster>();
    readonly #timedOut = AsyncObservable<[]>();
    readonly #operationalModeEnabled = new AsyncObservable<[]>();
    readonly #operationalModeEnded = new AsyncObservable<[]>();
    readonly #observers = new ObserverGroup();
    #interval: Timer;
    #startTime: number | null = null;
    #isClosing = false;
    #commissioningMode = CommissioningMode.NotCommissioning;

    // Currently we do not put much effort into synchronizing announcements as it probably isn't really necessary.  But
    // this mutex prevents automated announcements from piling up and allows us to ensure announcements are complete on
    // close
    #mutex = new Mutex(this);

    constructor(context: DeviceAdvertiserContext) {
        this.#context = context;

        this.#interval = Time.getPeriodicTimer("Server node announcement", DEVICE_ANNOUNCEMENT_INTERVAL_MS, () =>
            // Announcement needs to await a previous announcement because otherwise in testing at least announcement
            // may crash if started simultaneously
            this.#mutex.run(this.advertise.bind(this)),
        );

        this.#observers.on(this.#context.fabrics.events.deleted, () => {
            if (this.#context.fabrics.length === 0) {
                // Last fabric got removed, so expire all announcements
                this.#mutex.run(this.#exitOperationalMode.bind(this));
            } else {
                // At least one fabric is still present, so re-announce
                this.#mutex.run(() => this.advertise(true));
            }
        });

        this.#observers.on(this.#context.sessions.resubmissionStarted, (session?) => {
            logger.debug(`Resubmission started, re-announce node ${session?.nodeId}`);
            this.#mutex.run(() => this.advertise(true));
        });

        this.#observers.on(this.#context.sessions.subscriptionsChanged, (_session, subscription) => {
            if (subscription.isCanceledByPeer) {
                logger.debug(`Subscription canceled by peer, re-announce`);
                this.#mutex.run(this.startAdvertising.bind(this));
            }
        });
    }

    toString() {
        return "DeviceAdvertiser";
    }

    static [Environmental.create](env: Environment) {
        const instance = new DeviceAdvertiser({
            fabrics: env.get(FabricManager),
            sessions: env.get(SessionManager),
        });
        env.set(DeviceAdvertiser, instance);
        return instance;
    }

    /**
     * Emitted when the advertising window closes with no response.
     */
    get timedOut() {
        return this.#timedOut;
    }

    /**
     * Emitted when the device stops advertising due to decommissioning.
     */
    get operationalModeEnded() {
        return this.#operationalModeEnded;
    }

    /**
     * Emitted when the device starts advertising in operational mode.
     */
    get operationalModeEnabled() {
        return this.#operationalModeEnabled;
    }

    async enterCommissioningMode(mode: CommissioningMode, deviceData: CommissioningModeInstanceData) {
        this.#commissioningMode = mode;
        for (const broadcaster of this.#broadcasters) {
            await broadcaster.setCommissionMode(mode, deviceData);
        }
        await this.startAdvertising();
    }

    async exitCommissioningMode() {
        this.#commissioningMode = CommissioningMode.NotCommissioning;
        this.#interval.stop();
        this.#startTime = null;
        for (const broadcaster of this.#broadcasters) {
            await broadcaster.expireCommissioningAnnouncement();
        }
    }

    async startAdvertising() {
        if (this.#isClosing) return;
        if (this.#interval.isRunning) {
            this.#interval.stop();
        }
        this.#startTime = Time.nowMs();
        this.#interval.start();
        await this.advertise();
    }

    async advertise(once = false) {
        if (!once) {
            // Stop announcement if duration is reached
            if (this.#startTime !== null && Time.nowMs() - this.#startTime > DEVICE_ANNOUNCEMENT_DURATION_MS) {
                logger.debug("Announcement duration reached, stop announcing");
                await this.#timedOut.emit();
                return;
            }

            if (this.#commissioningMode !== CommissioningMode.NotCommissioning) {
                // Re-Announce but do not reset Fabrics
                for (const broadcaster of this.#broadcasters) {
                    await broadcaster.announce();
                }
                return;
            }
        }

        const fabrics = this.#context.fabrics;

        if (fabrics.length) {
            let fabricsWithoutSessions = 0;
            for (const fabric of fabrics) {
                const session = this.#context.sessions.getSessionForNode(fabric.addressOf(fabric.rootNodeId));
                if (session === undefined || !session.isSecure || session.subscriptions.size === 0) {
                    fabricsWithoutSessions++;
                    logger.debug(
                        "Announcing",
                        Diagnostic.dict({ fabricIndex: fabric.fabricIndex, fabricId: fabric.fabricId }),
                    );
                }
            }
            for (const broadcaster of this.#broadcasters) {
                await broadcaster.setFabrics(fabrics.fabrics);
                if (fabricsWithoutSessions > 0 || this.#commissioningMode !== CommissioningMode.NotCommissioning) {
                    await broadcaster.announce();
                }
            }
        } else {
            // Expire operational Fabric announcements (if fabric got just deleted)
            await this.#exitOperationalMode();
            await this.#operationalModeEnded.emit();
        }
    }

    async advertiseFabrics(fabrics: Fabric[], expireCommissioningAnnouncement = false) {
        if (expireCommissioningAnnouncement) {
            // TODO: For real "non-ethernet-only" cases like Wifi or Thread devices this might still be too early.
            //  In these cases we might need an option to (re-)create mdns broadcaster just when interface
            //  is connected
            await this.#operationalModeEnabled.emit();
        }
        for (const broadcaster of this.#broadcasters) {
            await broadcaster.setFabrics(fabrics, expireCommissioningAnnouncement);
            await broadcaster.announce();
        }
    }

    async #exitOperationalMode() {
        for (const broadcaster of this.#broadcasters) {
            await broadcaster.expireFabricAnnouncement();
        }
    }

    async close() {
        this.#isClosing = true;
        await this.#mutex;
        this.#observers.close();
        this.#interval.stop();
        await this.clearBroadcasters();
    }

    hasBroadcaster(broadcaster: InstanceBroadcaster) {
        return this.#broadcasters.has(broadcaster);
    }

    addBroadcaster(broadcaster: InstanceBroadcaster) {
        this.#broadcasters.add(broadcaster);
    }

    async deleteBroadcaster(broadcaster: InstanceBroadcaster) {
        if (this.#broadcasters.delete(broadcaster)) {
            await broadcaster.expireAllAnnouncements();
        }
    }

    async clearBroadcasters() {
        const broadcasters = [...this.#broadcasters];
        const closed = MatterAggregateError.allSettled(
            broadcasters.map(b => b.close()),
            "Error closing broadcasters",
        ).catch(error => logger.error(error));
        this.#broadcasters.clear();
        await closed;
    }
}
