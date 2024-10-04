/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AdministratorCommissioning,
    BasicInformationCluster,
    GeneralCommissioning,
    GeneralCommissioningCluster,
} from "#clusters";
import { ImplementationError, Logger, MatterFlowError } from "#general";
import { MatterDevice } from "#MatterDevice.js";
import { assertSecureSession } from "#protocol";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";
import { CommissioningServerFailsafeContext } from "./CommissioningServerFailsafeContext.js";

const SuccessResponse = { errorCode: GeneralCommissioning.CommissioningError.Ok, debugText: "" };
const logger = Logger.get("GeneralCommissioningClusterHandler");

export const GeneralCommissioningClusterHandler: (options?: {
    /** Is the commissioner allowed to change the country code? */
    allowCountryCodeChange?: boolean;
    /** If set, only these country codes are allowed to be set when changing country is allowed. */
    countryCodeWhitelist?: string[];
}) => ClusterServerHandlers<typeof GeneralCommissioningCluster> = options => ({
    initializeClusterServer: ({ attributes: { breadcrumb } }) => {
        breadcrumb.setLocal(BigInt(0));
    },

    armFailSafe: async ({
        request: { breadcrumb: breadcrumbStep, expiryLengthSeconds },
        attributes: { breadcrumb, basicCommissioningInfo },
        session,
        endpoint,
    }) => {
        assertSecureSession(session, "armFailSafe can only be called on a secure session");
        const device = MatterDevice.of(session);

        try {
            // If the fail-safe timer is not currently armed, the commissioning window is open, and the command was
            // received over a CASE session, the command SHALL leave the current fail-safe state unchanged and immediately
            // respond with an ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin. This is done to
            // allow commissioners, which use PASE connections, the opportunity to use the failsafe during the
            // relatively short commissioning window.
            if (
                !device.isFailsafeArmed() &&
                endpoint.getClusterServer(AdministratorCommissioning.Cluster)?.getWindowStatusAttribute() !==
                    AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen &&
                !session.isPase
            ) {
                throw new MatterFlowError("Failed to arm failsafe using CASE while commissioning window is opened.");
            }

            if (device.isFailsafeArmed()) {
                await device.failsafeContext.extend(session.fabric, expiryLengthSeconds);
            } else {
                // If ExpiryLengthSeconds is 0 and the fail-safe timer was not armed, then this command invocation SHALL
                // lead to a success response with no side effect against the fail-safe context.
                if (expiryLengthSeconds === 0) return SuccessResponse;

                await device.beginTimed(
                    new CommissioningServerFailsafeContext(endpoint, {
                        fabrics: device.fabricManager,
                        sessions: device.sessionManager,
                        expiryLengthSeconds,
                        maxCumulativeFailsafeSeconds: basicCommissioningInfo.getLocal().maxCumulativeFailsafeSeconds,
                        associatedFabric: session.fabric,
                    }),
                );
            }

            if (device.isFailsafeArmed()) {
                // If failsafe is armed after the command, set breadcrumb (not when expired)
                breadcrumb.setLocal(breadcrumbStep);
            }
        } catch (error) {
            MatterFlowError.accept(error);

            logger.debug(`Error while arming failSafe timer`, error);
            return {
                errorCode: GeneralCommissioning.CommissioningError.BusyWithOtherAdmin,
                debugText: error.message,
            };
        }
        return SuccessResponse;
    },

    setRegulatoryConfig: async ({
        request: { breadcrumb: breadcrumbStep, newRegulatoryConfig, countryCode },
        attributes: { breadcrumb, regulatoryConfig, locationCapability },
        endpoint,
    }) => {
        const locationCapabilityValue = locationCapability.getLocal();

        // Check and handle country code
        const basicInformationCluster = endpoint.getClusterServer(BasicInformationCluster);
        if (basicInformationCluster === undefined) {
            throw new ImplementationError("BasicInformationCluster needs to be present on the root endpoint");
        }
        const currentLocationCountryCode = basicInformationCluster.getLocationAttribute();

        if (currentLocationCountryCode !== countryCode) {
            if (options?.allowCountryCodeChange === false && countryCode !== "XX") {
                return {
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                    debugText: `Country code change not allowed: ${countryCode}`,
                };
            }
            if (options?.countryCodeWhitelist !== undefined && !options?.countryCodeWhitelist.includes(countryCode)) {
                return {
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                    debugText: `Country code change not allowed: ${countryCode}`,
                };
            }
            if (countryCode !== "XX") {
                basicInformationCluster.setLocationAttribute(countryCode);
            }
        }

        // Check and handle regulatory config for LocationCapability
        let validValues;
        switch (locationCapabilityValue) {
            case GeneralCommissioning.RegulatoryLocationType.Outdoor:
                validValues = [GeneralCommissioning.RegulatoryLocationType.Outdoor];
                break;
            case GeneralCommissioning.RegulatoryLocationType.Indoor:
                validValues = [GeneralCommissioning.RegulatoryLocationType.Indoor];
                break;
            case GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor:
                validValues = [
                    GeneralCommissioning.RegulatoryLocationType.Indoor,
                    GeneralCommissioning.RegulatoryLocationType.Outdoor,
                    GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                ];
                break;
            default:
                return {
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                    debugText: `Invalid regulatory location: ${
                        newRegulatoryConfig === GeneralCommissioning.RegulatoryLocationType.Indoor
                            ? "Indoor"
                            : "Outdoor"
                    }`,
                };
        }
        if (!validValues.includes(newRegulatoryConfig)) {
            return {
                errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                debugText: `Invalid regulatory location: ${
                    newRegulatoryConfig === GeneralCommissioning.RegulatoryLocationType.Indoor ? "Indoor" : "Outdoor"
                }`,
            };
        }
        regulatoryConfig.setLocal(newRegulatoryConfig);

        breadcrumb.setLocal(breadcrumbStep);
        return SuccessResponse;
    },

    commissioningComplete: async ({ session, attributes: { breadcrumb } }) => {
        const fabric = session.associatedFabric;

        if (session.isPase) {
            return {
                errorCode: GeneralCommissioning.CommissioningError.InvalidAuthentication,
                debugText: "Command not executed over CASE session.",
            };
        }

        const device = MatterDevice.of(session);
        if (!device.isFailsafeArmed()) {
            return { errorCode: GeneralCommissioning.CommissioningError.NoFailSafe, debugText: "FailSafe not armed." };
        }

        assertSecureSession(session, "commissioningComplete can only be called on a secure session");

        const failsafeFabric = device.failsafeContext.associatedFabric?.fabricIndex;
        if (fabric.fabricIndex !== failsafeFabric) {
            return {
                errorCode: GeneralCommissioning.CommissioningError.InvalidAuthentication,
                debugText: `Associated fabric ${fabric.fabricIndex} does not match the one from the failsafe context ${failsafeFabric}.`,
            };
        }

        // On successful execution of the CommissioningComplete command the following actions SHALL be undertaken on the Server:
        // 1. The Fail-Safe timer associated with the current Fail-Safe context SHALL be disarmed.
        // 2. The commissioning window at the Server SHALL be closed.
        // 3. Any temporary administrative privileges automatically granted to any open PASE session SHALL be revoked (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”).
        // 4. The Secure Session Context of any PASE session still established at the Server SHALL be cleared.
        await device.failsafeContext.completeCommission();

        // 5. The Breadcrumb attribute SHALL be reset to zero.
        breadcrumb.setLocal(BigInt(0));

        logger.info(`Commissioning completed on fabric #${fabric.fabricId} as node #${fabric.nodeId}.`);

        return SuccessResponse;
    },
});
