/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#endpoint/Endpoint.js";
import {
    AsyncObservable,
    Diagnostic,
    EventEmitter,
    ImplementationError,
    Lifecycle,
    Logger,
    MatterFlowError,
    Observable,
} from "#general";
import { DatatypeModel, FieldElement } from "#model";
import type { Node } from "#node/Node.js";
import { NodeLifecycle } from "#node/NodeLifecycle.js";
import type { ServerNode } from "#node/ServerNode.js";
import { ExposedFabricInformation, FabricAction, FabricManager, FailsafeContext, PaseClient, Val } from "#protocol";
import {
    CommissioningFlowType,
    CommissioningOptions,
    DiscoveryCapabilitiesSchema,
    FabricIndex,
    ManualPairingCodeCodec,
    QrCode,
    QrPairingCodeCodec,
} from "#types";
import { BasicInformationBehavior } from "../../../behaviors/basic-information/BasicInformationBehavior.js";
import { OperationalCredentialsBehavior } from "../../../behaviors/operational-credentials/OperationalCredentialsBehavior.js";
import { Behavior } from "../../Behavior.js";
import { ActionContext } from "../../context/ActionContext.js";
import { NetworkServer } from "../network/NetworkServer.js";
import { SessionsBehavior } from "../sessions/SessionsBehavior.js";

const logger = Logger.get("Commissioning");

/**
 * Server behavior related to commissioning.
 *
 * Updates node state based on commissioning status.
 */
export class CommissioningServer extends Behavior {
    static override readonly id = "commissioning";

    declare state: CommissioningServer.State;
    declare events: CommissioningServer.Events;
    declare internal: CommissioningServer.Internal;

    static override early = true;

    override initialize() {
        if (this.state.passcode === -1) {
            this.state.passcode = PaseClient.generateRandomPasscode();
        } else if (CommissioningOptions.FORBIDDEN_PASSCODES.includes(this.state.passcode)) {
            throw new ImplementationError(`Passcode ${this.state.passcode} is not allowed`);
        }

        if (this.state.discriminator === -1) {
            this.state.discriminator = PaseClient.generateRandomDiscriminator();
        }

        this.reactTo((this.endpoint as Node).lifecycle.online, this.#nodeOnline);

        this.reactTo((this.endpoint as Node).lifecycle.partsReady, this.#initializeNode);
    }

    override [Symbol.asyncDispose]() {
        this.internal.unregisterFailsafeListener?.();
    }

    handleFabricChange(fabricIndex: FabricIndex, fabricAction: FabricAction) {
        // Do not consider commissioned so long as there is an active failsafe timer as commissioning may not be
        // complete and could still be rolled back
        if (this.env.has(FailsafeContext)) {
            const failsafe = this.env.get(FailsafeContext);
            if (fabricAction === FabricAction.Added || fabricAction === FabricAction.Updated) {
                // Added or updated fabric with active Failsafe are temporary and should not be considered until failsafe ends
                if (failsafe.construction.status !== Lifecycle.Status.Destroyed) {
                    if (failsafe.fabricIndex === fabricIndex) {
                        this.#monitorFailsafe(failsafe);
                        return;
                    } else {
                        throw new MatterFlowError(
                            `Failsafe owns a different fabricIndex then ${failsafe.forUpdateNoc ? "updated" : "added"}.`,
                        );
                    }
                }
            } else if (fabricAction === FabricAction.Removed) {
                // Removed fabric with active Failsafe are ignored but should match the failsafe one
                if (failsafe.fabricIndex !== fabricIndex) {
                    throw new MatterFlowError("Failsafe owns a different fabricIndex then removed.");
                }
            }
        }

        const commissioned = !!this.env.get(FabricManager).fabrics.length;

        let doFactoryReset = false;
        if (commissioned !== this.state.commissioned) {
            this.state.commissioned = commissioned;
            if (commissioned) {
                this.events.commissioned.emit(this.context);
                (this.endpoint.lifecycle as NodeLifecycle).commissioned.emit(this.context);
            } else {
                this.events.decommissioned.emit(this.context);
                (this.endpoint.lifecycle as NodeLifecycle).decommissioned.emit(this.context);

                doFactoryReset = true;
            }
        }

        this.events.fabricsChanged.emit(fabricIndex, fabricAction);

        if (doFactoryReset) {
            const sessions = this.agent.get(SessionsBehavior);
            if (Object.keys(sessions.state.sessions).length > 0) {
                // We have still open sessions, wait for them to close
                this.reactTo(sessions.events.closed, this.#handleSessionClosed);
            } else {
                this.#triggerFactoryReset();
            }
        }
    }

    #handleSessionClosed() {
        const sessions = this.agent.get(SessionsBehavior);
        if (Object.keys(sessions.state.sessions).length === 0) {
            this.#triggerFactoryReset();
        }
    }

    #triggerFactoryReset() {
        this.env.runtime.add((this.endpoint as ServerNode).erase());
    }

    #monitorFailsafe(failsafe: FailsafeContext) {
        if (this.internal.unregisterFailsafeListener) {
            return;
        }

        // Callback that listens to the failsafe for destruction and triggers commissioning status update
        const listener = this.callback(function (this: CommissioningServer, status: Lifecycle.Status) {
            if (status === Lifecycle.Status.Destroyed) {
                if (failsafe.fabricIndex !== undefined) {
                    this.handleFabricChange(
                        failsafe.fabricIndex,
                        failsafe.forUpdateNoc ? FabricAction.Updated : FabricAction.Added,
                    );
                }
                this.internal.unregisterFailsafeListener?.();
            }
        });

        // Callback that removes above listener
        this.internal.unregisterFailsafeListener = this.callback(function (this: CommissioningServer) {
            failsafe.construction.change.off(listener);
            this.internal.unregisterFailsafeListener = undefined;
        });

        // Register the listener
        failsafe.construction.change.on(listener);
    }

    /**
     * The server invokes this method when the node is active but not yet commissioned unless you set
     * {@link CommissioningServer.State#enabled} to false.
     *
     * An uncommissioned node is not yet associated with fabrics.  It cannot be used until commissioned by a controller.
     *
     * The default implementation logs the QR code and credentials.
     */
    initiateCommissioning() {
        const { passcode, discriminator } = this.state;

        const { qrPairingCode, manualPairingCode } = this.state.pairingCodes;

        logger.notice(
            Diagnostic.strong(this.endpoint.toString()),
            "is uncommissioned",
            Diagnostic.dict({
                passcode,
                discriminator,
                "manual pairing code": manualPairingCode,
            }),
            Diagnostic.list([
                QrCode.get(qrPairingCode).trim(),
                `QR code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}\n`,
            ]),
        );
    }

    /**
     * Obtain pairing codes for a node.
     */
    static pairingCodesFor(node: Endpoint) {
        const bi = node.stateOf(BasicInformationBehavior);
        const comm = node.stateOf(CommissioningServer);
        const net = node.stateOf(NetworkServer);

        const qrPairingCode = QrPairingCodeCodec.encode([
            {
                version: 0,
                vendorId: bi.vendorId,
                productId: bi.productId,
                flowType: comm.flowType,
                discriminator: comm.discriminator,
                passcode: comm.passcode,
                discoveryCapabilities: DiscoveryCapabilitiesSchema.encode(net.discoveryCapabilities),
            },
        ]);

        return {
            manualPairingCode: ManualPairingCodeCodec.encode({
                discriminator: comm.discriminator,
                passcode: comm.passcode,
            }),
            qrPairingCode,
        };
    }

    /**
     * Define logical schema to make passcode and discriminator persistent.
     */
    static override readonly schema = new DatatypeModel({
        name: "CommissioningState",
        type: "struct",

        children: [
            FieldElement({ name: "passcode", type: "uint32", quality: "N" }),
            FieldElement({ name: "discriminator", type: "uint16", quality: "N" }),
        ],
    });

    #nodeOnline() {
        if (this.state.enabled && !this.env.get(FabricManager).fabrics.length) {
            this.initiateCommissioning();
        }
    }

    #initializeNode() {
        this.state.commissioned = !!this.agent.get(OperationalCredentialsBehavior).state.commissionedFabrics;
        (this.endpoint.lifecycle as NodeLifecycle).initialized.emit(this.state.commissioned);
    }
}

export namespace CommissioningServer {
    export interface PairingCodes {
        manualPairingCode: string;
        qrPairingCode: string;
    }

    export class Internal {
        unregisterFailsafeListener?: () => void = undefined;
    }

    export class State {
        enabled?: boolean;
        commissioned = false;
        fabrics: Record<FabricIndex, ExposedFabricInformation> = {};
        passcode = -1;
        discriminator = -1;
        flowType = CommissioningFlowType.Standard;
        additionalBleAdvertisementData?: Uint8Array = undefined;
        pairingCodes = {} as PairingCodes;

        [Val.properties](endpoint: Endpoint) {
            return {
                get pairingCodes() {
                    return CommissioningServer.pairingCodesFor(endpoint);
                },

                get fabrics() {
                    const exposedFabrics: Record<FabricIndex, ExposedFabricInformation> = {};
                    endpoint.env
                        .get(FabricManager)
                        .fabrics.forEach(
                            ({ fabricIndex, externalInformation }) =>
                                (exposedFabrics[fabricIndex] = externalInformation),
                        );
                    return exposedFabrics;
                },
            };
        }
    }

    export class Events extends EventEmitter {
        commissioned = Observable<[context: ActionContext]>();
        decommissioned = Observable<[context: ActionContext]>();
        fabricsChanged = Observable<[fabricIndex: FabricIndex, action: FabricAction]>();
        enabled$Changed = AsyncObservable<[context: ActionContext]>();
    }
}
