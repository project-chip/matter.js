/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../Behavior.js";
import type { PartServer } from "../../../endpoint/PartServer.js";
import { CommissioningOptions } from "../../../node/options/CommissioningOptions.js";
import { DatatypeModel, FieldElement } from "../../../model/index.js";
import { Logger } from "../../../log/Logger.js";
import { Part } from "../../../endpoint/Part.js";
import { DeviceTypeId } from "../../../datatype/DeviceTypeId.js";
import { DescriptorBehavior } from "../descriptor/DescriptorBehavior.js";
import { BridgedNodeEndpoint } from "../../../endpoint/definitions/system/BridgedNodeEndpoint.js";
import { AggregatorEndpoint } from "../../../endpoint/definitions/system/AggregatorEndpoint.js";
import { QrCode } from "../../../schema/QrCodeSchema.js";
import { CommissioningFlowType, DiscoveryCapabilitiesBitmap, DiscoveryCapabilitiesSchema, ManualPairingCodeCodec, QrPairingCodeCodec } from "../../../schema/PairingCodeSchema.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { RootEndpoint } from "../../../endpoint/definitions/system/RootEndpoint.js";
import { BasicInformationBehavior } from "../basic-information/BasicInformationBehavior.js";
import { ByteArray } from "../../../util/ByteArray.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { PaseClient } from "../../../session/pase/PaseClient.js";
import { Ble } from "../../../ble/Ble.js";
import { TypeFromPartialBitSchema } from "../../../schema/BitmapSchema.js";
import { FORBIDDEN_PASSCODES } from "../../../CommissioningServer.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { IdentityService } from "../../../node/server/IdentityService.js";

const logger = Logger.get("Commissioning");

/**
 * Server functionality related to commissioning used by {@link PartServer}.
 * 
 * Better name would be CommissioningServer but we already have one of those.
 */
export class CommissioningBehavior extends Behavior {
    static override id = "commissioning";

    declare state: CommissioningBehavior.State;

    static override immediate = true;

    override initialize() {
        if (this.state.passcode === undefined) {
            this.state.passcode = PaseClient.generateRandomPasscode();
        } else if (FORBIDDEN_PASSCODES.includes(this.state.passcode)) {
            throw new ImplementationError(`Passcode ${this.state.passcode} is not allowed`);
        }

        if (this.state.discriminator === undefined) {
            this.state.discriminator = PaseClient.generateRandomDiscriminator();
        }

        if (this.state.ble === undefined) {
            this.state.ble = Ble.enabled;
        }
    }

    /**
     * The {@link CommissioningOptions.ProductDescription} advertised by the node.
     */
    get productDescription() {
        let pd = this.state.productDescription;

        if (!pd) {
            const bi = this.agent.get(BasicInformationBehavior).state;

            const deviceType = inferDeviceType(this.part);

            if (!deviceType) {
                throw new ImplementationError(
                    "Cannot infer announcement device type because no device part is present; please set ProductDescription.deviceType",
                );
            }

            pd = this.state.productDescription = {
                name: bi.productName,
                deviceType,
                vendorId: bi.vendorId,
                productId: bi.productId,
            }
        }

        return pd;
    }

    /**
     * The server invokes this method if the node is not yet commissioned.
     * 
     * An uncommissioned node is not yet associated with fabrics.  It cannot
     * be used until commissioned by a controller.
     */
    initiateCommissioning() {
        const { passcode, discriminator } = this.state;

        const { qrPairingCode, manualPairingCode } = this.pairingCodes;

        logger.notice(
            "Node", Diagnostic.strong(this.part.serviceFor(IdentityService).nodeDescription), "is uncommissioned",
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
                this.state
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
        ]
    });
}

export namespace CommissioningBehavior {
    export class State implements CommissioningOptions, TypeFromPartialBitSchema<typeof DiscoveryCapabilitiesBitmap> {
        productDescription?: CommissioningOptions.ProductDescription = undefined;
        passcode?: number = undefined;
        discriminator?: number = undefined;
        flowType = CommissioningFlowType.Standard;
        additionalBleAdvertisementData?: ByteArray = undefined;
        automaticAnnouncement = true;
        ble?: boolean = undefined;
        softAccessPoint?: boolean = false;
        onIpNetwork?: boolean = false;
    }
}

function inferDeviceType(part: Part): DeviceTypeId | undefined {
    const agent = part.agent;
    let recurse = false;
    for (const dt of agent.get(DescriptorBehavior).state.deviceTypeList) {
        switch (dt.deviceType) {
            case RootEndpoint.deviceType:
            case BridgedNodeEndpoint.deviceType:
            case AggregatorEndpoint.deviceType:
                recurse = true;
                break;

            default:
                if (part.type.deviceClass === DeviceClasses.Simple) {
                    return dt.deviceType;
                }
        }
    }

    if (!recurse || !part.hasParts) {
        return;
    }
    
    for (const child of part.parts) {
        const deviceType = inferDeviceType(child);
        if (deviceType !== undefined) {
            return deviceType;
        }
    }
}
