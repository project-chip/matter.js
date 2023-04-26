/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../log/Logger.js";
import { MatterDevice } from "../../MatterDevice.js";
import { SecureSession } from "../../session/SecureSession.js";
import { CommissioningError, GeneralCommissioningCluster } from "../GeneralCommissioningCluster.js";
import { ClusterServerHandlers } from "./ClusterServer.js";

const SuccessResponse = { errorCode: CommissioningError.Ok, debugText: "" };
const logger = Logger.get("GeneralCommissioningClusterHandler");

export const GeneralCommissioningClusterHandler: ClusterServerHandlers<typeof GeneralCommissioningCluster> = {
    armFailSafe: async ({ request: { breadcrumb: breadcrumbStep }, attributes: { breadcrumb }, session }) => {
        // TODO Add handling for ExpiryLengthSeconds field and Error handling, see 11.9.7.2

        session.getContext().armFailSafe();
        breadcrumb.set(breadcrumbStep);
        return SuccessResponse;
    },

    setRegulatoryConfig: async ({ request: { breadcrumb: breadcrumbStep, newRegulatoryConfig }, attributes: { breadcrumb, regulatoryConfig, /* locationCapability */ } }) => {

        /*
        TODO: test this code before activating again
        const locationCapabilityValue = locationCapability.get();

        let validValues;
        switch (locationCapabilityValue) {
            case (RegulatoryLocationType.Outdoor):
                validValues = [RegulatoryLocationType.Outdoor];
                break;
            case (RegulatoryLocationType.Indoor):
                validValues = [RegulatoryLocationType.Indoor];
                break;
            case (RegulatoryLocationType.IndoorOutdoor):
                validValues = [RegulatoryLocationType.Indoor, RegulatoryLocationType.Outdoor, RegulatoryLocationType.IndoorOutdoor];
                break;
            default:
                return { errorCode: CommissioningError.ValueOutsideRange, debugText: "Invalid regulatory location" };
        }

        if (!validValues.includes(newRegulatoryConfig)) {
            return { errorCode: CommissioningError.ValueOutsideRange, debugText: "Invalid regulatory location" };
        }
        */

        regulatoryConfig.set(newRegulatoryConfig);

        // TODO countryCode should be set for the BasicInformationCluster.location!

        breadcrumb.set(breadcrumbStep);
        return SuccessResponse;
    },

    commissioningComplete: async ({ session, attributes: { breadcrumb } }) => {
        // TODO Add error handling as defined in 11.9.7.6

        if (!session.isSecure()) throw new Error("commissioningComplete can only be called on a secure session");
        const fabric = (session as SecureSession<MatterDevice>).getFabric();
        if (fabric === undefined) throw new Error("commissioningComplete is called but the fabric has not been defined yet");
        breadcrumb.set(BigInt(0));
        logger.info(`Commissioning completed on fabric #${fabric.fabricId.id} as node #${fabric.nodeId}.`);

        session.getContext().completeCommission();

        return SuccessResponse;
    },
};
