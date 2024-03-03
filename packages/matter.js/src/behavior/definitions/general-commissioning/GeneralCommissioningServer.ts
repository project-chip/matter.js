/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdministratorCommissioning } from "../../../cluster/definitions/AdministratorCommissioningCluster.js";
import { GeneralCommissioning } from "../../../cluster/definitions/GeneralCommissioningCluster.js";
import { MatterFlowError } from "../../../common/MatterError.js";
import { Logger } from "../../../log/Logger.js";
import type { Node } from "../../../node/Node.js";
import { assertSecureSession } from "../../../session/SecureSession.js";
import { AdministratorCommissioningServer } from "../administrator-commissioning/AdministratorCommissioningServer.js";
import { BasicInformationServer } from "../basic-information/BasicInformationServer.js";
import { GeneralCommissioningBehavior } from "./GeneralCommissioningBehavior.js";
import { ArmFailSafeRequest, SetRegulatoryConfigRequest } from "./GeneralCommissioningInterface.js";
import { ServerNodeFailsafeContext } from "./ServerNodeFailsafeContext.js";

const SuccessResponse = { errorCode: GeneralCommissioning.CommissioningError.Ok, debugText: "" };
const logger = Logger.get("GeneralCommissioningClusterHandler");

/**
 * This is the default server implementation of GeneralCommissioningBehavior.
 */
export class GeneralCommissioningServer extends GeneralCommissioningBehavior {
    declare state: GeneralCommissioningServer.State;

    override initialize() {
        const bci = this.state.basicCommissioningInfo;

        if (bci.failSafeExpiryLengthSeconds === undefined) {
            // One minute
            bci.failSafeExpiryLengthSeconds = 60;
        }

        if (bci.maxCumulativeFailsafeSeconds === undefined) {
            // 5 minutes, recommended by spec
            bci.maxCumulativeFailsafeSeconds = 900;
        }

        this.state.breadcrumb = 0;
    }

    override async armFailSafe({ breadcrumb, expiryLengthSeconds }: ArmFailSafeRequest) {
        assertSecureSession(this.session, "armFailSafe can only be called on a secure session");
        const device = this.session.context;

        try {
            // If the fail-safe timer is not currently armed, the commissioning window is open, and the command was
            // received over a CASE session, the command SHALL leave the current fail-safe state unchanged and
            // immediately respond with an ArmFailSafeResponse containing an ErrorCode value of BusyWithOtherAdmin. This
            // is done to allow commissioners, which use PASE connections, the opportunity to use the failsafe during
            // the relatively short commissioning window.
            if (
                !device.isFailsafeArmed() &&
                this.agent.get(AdministratorCommissioningServer).state.windowStatus !==
                    AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen &&
                !this.session.isPase
            ) {
                throw new MatterFlowError("Failed to arm failsafe using CASE while commissioning window is opened.");
            }

            if (device.isFailsafeArmed()) {
                await device.failsafeContext.extend(this.session.fabric, expiryLengthSeconds);
            } else {
                // If ExpiryLengthSeconds is 0 and the fail-safe timer was not armed, then this command invocation SHALL lead
                // to a success response with no side effect against the fail-safe context.
                if (expiryLengthSeconds === 0) return SuccessResponse;

                await device.beginTimed(
                    new ServerNodeFailsafeContext(this.endpoint as Node, {
                        fabrics: device.fabricManager,
                        sessions: device.sessionManager,
                        expiryLengthSeconds,
                        maxCumulativeFailsafeSeconds: this.state.basicCommissioningInfo.maxCumulativeFailsafeSeconds,
                        associatedFabric: this.session.fabric,
                    }),
                );
            }

            if (device.isFailsafeArmed()) {
                // If failsafe is armed after the command, set breadcrumb (not when expired)
                this.state.breadcrumb = breadcrumb;
            }
        } catch (error) {
            if (error instanceof MatterFlowError) {
                logger.debug(`Error while arming failSafe timer`, error);
                return {
                    errorCode: GeneralCommissioning.CommissioningError.BusyWithOtherAdmin,
                    debugText: error.message,
                };
            } else {
                throw error;
            }
        }

        return SuccessResponse;
    }

    override async setRegulatoryConfig({ breadcrumb, newRegulatoryConfig, countryCode }: SetRegulatoryConfigRequest) {
        const locationCapabilityValue = this.state.locationCapability;

        // Check and handle country code
        const basicInformation = this.agent.get(BasicInformationServer);
        const currentLocationCountryCode = basicInformation.state.location;

        if (currentLocationCountryCode !== countryCode) {
            if (this.state.allowCountryCodeChange === false && countryCode !== "XX") {
                return {
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                    debugText: `Country code change not allowed: ${countryCode}`,
                };
            }
            if (
                this.state.countryCodeWhitelist !== undefined &&
                !this.state.countryCodeWhitelist.includes(countryCode)
            ) {
                return {
                    errorCode: GeneralCommissioning.CommissioningError.ValueOutsideRange,
                    debugText: `Country code change not allowed: ${countryCode}`,
                };
            }
            if (countryCode !== "XX") {
                basicInformation.state.location = countryCode;
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

        // Regulatory config is not fabric-writable so requires elevated privileges
        this.asAdmin(() => {
            this.state.regulatoryConfig = newRegulatoryConfig;
        });

        this.state.breadcrumb = breadcrumb;

        return SuccessResponse;
    }

    override async commissioningComplete() {
        if (this.session.isPase) {
            return {
                errorCode: GeneralCommissioning.CommissioningError.InvalidAuthentication,
                debugText: "Command not executed over CASE session.",
            };
        }

        const fabric = this.session.associatedFabric;

        const device = this.session.context;
        if (!device.isFailsafeArmed()) {
            return { errorCode: GeneralCommissioning.CommissioningError.NoFailSafe, debugText: "FailSafe not armed." };
        }
        const failsafeContext = device.failsafeContext;

        assertSecureSession(this.session, "commissioningComplete can only be called on a secure session");

        const timedFabric = failsafeContext.associatedFabric?.fabricIndex;
        if (fabric.fabricIndex !== timedFabric) {
            return {
                errorCode: GeneralCommissioning.CommissioningError.InvalidAuthentication,
                debugText: `Associated fabric ${fabric.fabricIndex} does not match the one from the failsafe context ${timedFabric}.`,
            };
        }

        // On successful execution of the CommissioningComplete command the following actions SHALL be undertaken on the
        // Server:
        // 1. The Fail-Safe timer associated with the current Fail-Safe context SHALL be disarmed.
        // 2. The commissioning window at the Server SHALL be closed.
        // 3. Any temporary administrative privileges automatically granted to any open PASE session SHALL be revoked
        //    (see Section 6.6.2.8, “Bootstrapping of the Access Control Cluster”).
        // 4. The Secure Session Context of any PASE session still established at the Server SHALL be cleared.
        await failsafeContext.completeCommission();

        // 5. The Breadcrumb attribute SHALL be reset to zero.
        this.state.breadcrumb = BigInt(0);

        logger.info(`Commissioning completed on fabric #${fabric.fabricId} as node #${fabric.nodeId}.`);

        return SuccessResponse;
    }
}

export namespace GeneralCommissioningServer {
    // We place the following configuration options in State rather than Internal so they can be conveniently configured
    // using GeneralCommissioningServer.set()
    export class State extends GeneralCommissioningBehavior.State {
        /**
         * Set to false to prevent the controller from changing the country code during commissioning.
         */
        allowCountryCodeChange = true; // Default true if not set

        /**
         * Set to an array of two-letter country codes to limit the countries the controller may assign.
         */
        countryCodeWhitelist?: string[] = undefined;
    }
}
