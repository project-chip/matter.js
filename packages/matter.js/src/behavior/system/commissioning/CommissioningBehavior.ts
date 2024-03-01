/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FailsafeContext } from "../../../common/FailsafeContext.js";
import { Lifecycle } from "../../../common/Lifecycle.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { Endpoint } from "../../../endpoint/Endpoint.js";
import type { EndpointServer } from "../../../endpoint/EndpointServer.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { DatatypeModel, FieldElement } from "../../../model/index.js";
import type { Node } from "../../../node/Node.js";
import { NodeLifecycle } from "../../../node/NodeLifecycle.js";
import { ServerNode } from "../../../node/ServerNode.js";
import {
    CommissioningFlowType,
    DiscoveryCapabilitiesSchema,
    ManualPairingCodeCodec,
    QrPairingCodeCodec,
} from "../../../schema/PairingCodeSchema.js";
import { QrCode } from "../../../schema/QrCodeSchema.js";
import { PaseClient } from "../../../session/pase/PaseClient.js";
import { ByteArray } from "../../../util/ByteArray.js";
import { Behavior } from "../../Behavior.js";
import { BasicInformationBehavior } from "../../definitions/basic-information/BasicInformationBehavior.js";
import { OperationalCredentialsBehavior } from "../../definitions/operational-credentials/OperationalCredentialsBehavior.js";
import { Val } from "../../state/Val.js";
import { NetworkServer } from "../network/NetworkServer.js";
import { CommissioningOptions } from "./CommissioningOptions.js";

const logger = Logger.get("Commissioning");

/**
 * Server functionality related to commissioning used by {@link EndpointServer}.
 *
 * Better name would be CommissioningServer but we already have one of those.
 */
export class CommissioningBehavior extends Behavior {
    static override readonly id = "commissioning";

    declare state: CommissioningBehavior.State;
    declare internal: CommissioningBehavior.Internal;

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

        this.reactTo((this.endpoint as Node).lifecycle.treeReady, this.#initializeNode);

        this.reactTo(
            this.agent.get(OperationalCredentialsBehavior).events.commissionedFabrics$Change,
            this.#updateCommissioningStatus,
        );
    }

    override [Symbol.asyncDispose]() {
        this.internal.unregisterFailsafeListener?.();
    }

    async #updateCommissioningStatus() {
        const commissioned = !!this.agent.get(OperationalCredentialsBehavior).state.commissionedFabrics;
        if (commissioned === this.state.commissioned) {
            return;
        }

        // Do not consider commissioned so long as there is an active failsafe timer as commissioning may not be
        // complete and could still be rolled back
        if (this.endpoint.env.has(FailsafeContext)) {
            const failsafe = this.endpoint.env.get(FailsafeContext);
            if (failsafe.construction.status !== Lifecycle.Status.Destroyed) {
                this.#monitorFailsafe(failsafe);
                return;
            }
        }

        this.state.commissioned = commissioned;
        if (commissioned) {
            (this.endpoint.lifecycle as NodeLifecycle).commissioned.emit(this.context);
        } else {
            (this.endpoint.lifecycle as NodeLifecycle).decommissioned.emit(this.context);

            this.endpoint.env.runtime.addWorker(
                (this.endpoint as ServerNode).factoryReset().then(this.callback(this.initiateCommissioning)),
            );
        }
    }

    #monitorFailsafe(failsafe: FailsafeContext) {
        if (this.internal.unregisterFailsafeListener) {
            return;
        }

        // Callback that listens to the failsafe for destruction and triggers commissioning status update
        const listener = this.callback(function (this: CommissioningBehavior, status: Lifecycle.Status) {
            if (status === Lifecycle.Status.Destroyed) {
                this.endpoint.env.runtime.addWorker(this.#updateCommissioningStatus());
                this.internal.unregisterFailsafeListener?.();
            }
        });

        // Callback that removes above listener
        this.internal.unregisterFailsafeListener = this.callback(function (this: CommissioningBehavior) {
            failsafe.construction.change.off(listener);
            this.internal.unregisterFailsafeListener = undefined;
        });

        // Register the listener
        failsafe.construction.change.on(listener);
    }

    /**
     * The server invokes this method when the node is active but not yet commissioned.
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
        const comm = node.stateOf(CommissioningBehavior);
        const net = node.stateOf(NetworkServer);

        const qrPairingCode = QrPairingCodeCodec.encode({
            version: 0,
            vendorId: bi.vendorId,
            productId: bi.productId,
            flowType: comm.flowType,
            discriminator: comm.discriminator,
            passcode: comm.passcode,
            discoveryCapabilities: DiscoveryCapabilitiesSchema.encode(net.discoveryCapabilities),
        });

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

        children: [
            FieldElement({ name: "passcode", type: "uint32", quality: "N" }),
            FieldElement({ name: "discriminator", type: "uint16", quality: "N" }),
        ],
    });

    #nodeOnline() {
        if (!this.agent.get(OperationalCredentialsBehavior).state.commissionedFabrics) {
            this.initiateCommissioning();
        }
    }

    #initializeNode() {
        const isCommissioned = !!this.agent.get(OperationalCredentialsBehavior).state.commissionedFabrics;
        (this.endpoint.lifecycle as NodeLifecycle).initialized.emit(isCommissioned);
    }
}

export namespace CommissioningBehavior {
    export interface PairingCodes {
        manualPairingCode: string;
        qrPairingCode: string;
    }

    export class Internal {
        unregisterFailsafeListener?: () => void = undefined;
    }

    export class State implements CommissioningOptions {
        commissioned = false;
        passcode = -1;
        discriminator = -1;
        flowType = CommissioningFlowType.Standard;
        additionalBleAdvertisementData?: ByteArray = undefined;
        pairingCodes = {} as PairingCodes;

        [Val.properties](endpoint: Endpoint) {
            return {
                get pairingCodes() {
                    return CommissioningBehavior.pairingCodesFor(endpoint);
                },
            };
        }
    }
}
