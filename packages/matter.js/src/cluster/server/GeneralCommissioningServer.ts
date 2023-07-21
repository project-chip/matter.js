/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../log/Logger.js";
import { MatterDevice } from "../../MatterDevice.js";
import { SecureSession } from "../../session/SecureSession.js";
import {
    CommissioningError, GeneralCommissioningCluster, RegulatoryLocationType
} from "../GeneralCommissioningCluster.js";
import { ClusterServerHandlers } from "./ClusterServer.js";
import { BasicInformationCluster } from "../BasicInformationCluster.js";

const SuccessResponse = { errorCode: CommissioningError.Ok, debugText: "" };
const logger = Logger.get("GeneralCommissioningClusterHandler");

export const GeneralCommissioningClusterHandler: (options?: {
    /** Is the commissioner allowed to change the country code? */
    allowCountryCodeChange?: boolean,
    /** If set, only these country codes are allowed to be set when changing country is allowed. */
    countryCodeWhitelist?: string[]
}) => ClusterServerHandlers<typeof GeneralCommissioningCluster> = (options) => ({
    armFailSafe: async ({ request: { breadcrumb: breadcrumbStep }, attributes: { breadcrumb }, session }) => {
        // TODO Add handling for ExpiryLengthSeconds field and Error handling, see 11.9.7.2

        session.getContext().armFailSafe();
        breadcrumb.set(breadcrumbStep);
        return SuccessResponse;
    },

    setRegulatoryConfig: async ({ request: { breadcrumb: breadcrumbStep, newRegulatoryConfig, countryCode }, attributes: { breadcrumb, regulatoryConfig, locationCapability }, endpoint }) => {

        const locationCapabilityValue = locationCapability.getLocal();

        // Check and handle country code
        const basicInformationCluster = endpoint.getClusterServer(BasicInformationCluster);
        if (basicInformationCluster === undefined) {
            throw new Error("BasicInformationCluster needs to be present on the root endpoint");
        }
        const currentLocationCountryCode = basicInformationCluster.getLocationAttribute();

        if (currentLocationCountryCode !== countryCode) {
            if (options?.allowCountryCodeChange === false && countryCode !== "XX") {
                return {
                    errorCode: CommissioningError.ValueOutsideRange,
                    debugText: `Country code change not allowed: ${countryCode}`
                };
            }
            if (options?.countryCodeWhitelist !== undefined && !options?.countryCodeWhitelist.includes(countryCode)) {
                return {
                    errorCode: CommissioningError.ValueOutsideRange,
                    debugText: `Country code change not allowed: ${countryCode}`
                };
            }
            if (countryCode !== "XX") {
                basicInformationCluster.setLocationAttribute(countryCode);
            }
        }

        // Check and handle regulatory config for LocationCapability
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
                return { errorCode: CommissioningError.ValueOutsideRange, debugText: `Invalid regulatory location: ${newRegulatoryConfig === RegulatoryLocationType.Indoor ? "Indoor" : "Outdoor"}` };
        }
        if (!validValues.includes(newRegulatoryConfig)) {
            return { errorCode: CommissioningError.ValueOutsideRange, debugText: `Invalid regulatory location: ${newRegulatoryConfig === RegulatoryLocationType.Indoor ? "Indoor" : "Outdoor"}` };
        }
        regulatoryConfig.setLocal(newRegulatoryConfig);

        breadcrumb.setLocal(breadcrumbStep);
        return SuccessResponse;
    },

    commissioningComplete: async ({ session, attributes: { breadcrumb } }) => {
        // TODO Add error handling as defined in 11.9.7.6

        if (!session.isSecure()) throw new Error("commissioningComplete can only be called on a secure session");
        const fabric = (session as SecureSession<MatterDevice>).getFabric();
        if (fabric === undefined) throw new Error("commissioningComplete is called but the fabric has not been defined yet");
        breadcrumb.setLocal(BigInt(0));
        logger.info(`Commissioning completed on fabric #${fabric.fabricId.id} as node #${fabric.nodeId}.`);

        session.getContext().completeCommission();

        return SuccessResponse;
    },
});
