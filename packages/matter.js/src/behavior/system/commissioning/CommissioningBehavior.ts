/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import type { PartServer } from "../../../endpoint/PartServer.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { DatatypeModel, FieldElement } from "../../../model/index.js";
import { NodeLifecycle } from "../../../node/NodeLifecycle.js";
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
import { NetworkServer } from "../networking/NetworkServer.js";
import { CommissioningOptions } from "./CommissioningOptions.js";

const logger = Logger.get("Commissioning");

/**
 * Server functionality related to commissioning used by {@link PartServer}.
 *
 * Better name would be CommissioningServer but we already have one of those.
 */
export class CommissioningBehavior extends Behavior {
    static override readonly id = "commissioning";

    declare state: CommissioningBehavior.State;

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

        this.reactTo(this.part.lifecycle.treeReady, this.#nodeReady);

        this.reactTo(
            this.agent.get(OperationalCredentialsBehavior).events.commissionedFabrics$Change,
            this.#updateCommissioningStatus,
        );
    }

    async #updateCommissioningStatus() {
        const commissioned = !!this.agent.get(OperationalCredentialsBehavior).state.commissionedFabrics;
        if (commissioned === this.state.commissioned) {
            return;
        }
        this.state.commissioned = commissioned;
        if (this.state.commissioned) {
            (this.part.lifecycle as NodeLifecycle).commissioned.emit(this.context);
        } else {
            (this.part.lifecycle as NodeLifecycle).decommissioned.emit(this.context);
            this.part.lifecycle.factoryReset();
        }
    }

    /**
     * The server invokes this method if the node is not yet commissioned.
     *
     * An uncommissioned node is not yet associated with fabrics.  It cannot be used until commissioned by a controller.
     */
    initiateCommissioning() {
        const { passcode, discriminator } = this.state;

        const { qrPairingCode, manualPairingCode } = this.pairingCodes;

        logger.notice(
            "Node",
            Diagnostic.strong(this.part.toString()),
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
     * Obtain pairing codes.
     */
    get pairingCodes() {
        const bi = this.agent.get(BasicInformationBehavior).state;

        const qrPairingCode = QrPairingCodeCodec.encode({
            version: 0,
            vendorId: bi.vendorId,
            productId: bi.productId,
            flowType: this.state.flowType,
            discriminator: this.state.discriminator as number,
            passcode: this.state.passcode as number,
            discoveryCapabilities: DiscoveryCapabilitiesSchema.encode(
                this.agent.get(NetworkServer).state.discoveryCapabilities,
            ),
        });

        return {
            manualPairingCode: ManualPairingCodeCodec.encode({
                discriminator: this.state.discriminator as number,
                passcode: this.state.passcode as number,
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

    #nodeReady() {
        if (!this.agent.get(OperationalCredentialsBehavior).state.commissionedFabrics) {
            this.initiateCommissioning();
        }
    }
}

export namespace CommissioningBehavior {
    export class State implements CommissioningOptions {
        commissioned = false;
        passcode = -1;
        discriminator = -1;
        readonly flowType = CommissioningFlowType.Standard;
        readonly additionalBleAdvertisementData?: ByteArray;
        readonly automaticAnnouncement = true;
    }
}
