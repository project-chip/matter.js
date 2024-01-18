/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OperationalCredentials } from "../../../cluster/definitions/OperationalCredentialsCluster.js";
import { MatterFabricConflictError } from "../../../common/FailSafeManager.js";
import { MatterFlowError } from "../../../common/MatterError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { Fabric } from "../../../fabric/Fabric.js";
import { FabricTableFullError } from "../../../fabric/FabricManager.js";
import { Logger } from "../../../log/Logger.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { assertSecureSession } from "../../../session/SecureSession.js";
import { Val } from "../../state/managed/Val.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { BasicInformationBehavior } from "../basic-information/BasicInformationBehavior.js";
import { CommissioningBehavior } from "../commissioning/CommissioningBehavior.js";
import { DeviceCertification } from "./DeviceCertification.js";
import { OperationalCredentialsBehavior } from "./OperationalCredentialsBehavior.js";
import {
    AddNocRequest,
    AddTrustedRootCertificateRequest,
    AttestationRequest,
    CertificateChainRequest,
    CsrRequest,
    RemoveFabricRequest,
    UpdateFabricLabelRequest,
    UpdateNocRequest,
} from "./OperationalCredentialsInterface.js";
import { TlvAttestation, TlvCertSigningRequest } from "./OperationalCredentialsTypes.js";

const logger = Logger.get("OperationalCredentials");

/**
 * This is the default server implementation of OperationalCredentialsBehavior.
 *
 * TODO - currently "source of truth" for fabric data is persisted by FabricManager.  I'd probably convert so we just
 * load fabrics from persisted OperationalCredentials state but right now we just sync the state
 *
 * TODO - we either need to change source of truth as mentioned above or sync state.  Perhaps just at startup but most
 * complete solution would be to hook fabric for all changes.  Right now this code assumes it's the only source of
 * fabric mutation
 */
export class OperationalCredentialsServer extends OperationalCredentialsBehavior {
    declare internal: OperationalCredentialsServer.Internal;
    declare state: OperationalCredentialsServer.State;

    override initialize() {
        // maximum number of fabrics. Also FabricBuilder uses 254 as max!
        if (this.state.supportedFabrics === undefined) {
            this.state.supportedFabrics = 254;
        }

        this.state.commissionedFabrics = this.state.fabrics.length;
    }

    get #certification() {
        const certification = this.internal.certification;
        if (certification) {
            return certification;
        }

        const commissioning = this.agent.get(CommissioningBehavior);

        return (this.internal.certification = new DeviceCertification(
            this.state.certification,
            commissioning.productDescription,
        ));
    }

    override attestationRequest({ attestationNonce }: AttestationRequest) {
        const elements = TlvAttestation.encode({
            declaration: this.#certification.declaration,
            attestationNonce: attestationNonce,
            timestamp: 0,
        });
        return {
            attestationElements: elements,
            attestationSignature: this.#certification.sign(this.session, elements),
        };
    }

    override csrRequest({ csrNonce, isForUpdateNoc }: CsrRequest) {
        if (isForUpdateNoc && this.session.isPase()) {
            throw new StatusResponseError(
                "csrRequest for UpdateNoc received on a PASE session.",
                StatusCode.InvalidCommand,
            );
        }
        const device = this.session.getContext();
        device.assertFailSafeArmed("csrRequest received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();
        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `csrRequest received after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        const certSigningRequest = failSafeContext.createCertificateSigningRequest(
            isForUpdateNoc ?? false,
            this.session.getId(),
        );
        const nocsrElements = TlvCertSigningRequest.encode({ certSigningRequest, csrNonce });
        return { nocsrElements, attestationSignature: this.#certification.sign(this.session, nocsrElements) };
    }

    override certificateChainRequest({ certificateType }: CertificateChainRequest) {
        switch (certificateType) {
            case OperationalCredentials.CertificateChainType.DacCertificate:
                return { certificate: this.#certification.certificate };
            case OperationalCredentials.CertificateChainType.PaiCertificate:
                return { certificate: this.#certification.intermediateCertificate };
            default:
                throw new MatterFlowError(`Unsupported certificate type: ${certificateType}`);
        }
    }

    override async addNoc({ nocValue, icacValue, ipkValue, caseAdminSubject, adminVendorId }: AddNocRequest) {
        // TODO 1. Verify the NOC using:
        //         a. Crypto_VerifyChain(certificates = [NOCValue, ICACValue, RootCACertificate]) if ICACValue is present,
        //         b. Crypto_VerifyChain(certificates = [NOCValue, RootCACertificate]) if ICACValue is not present. If this
        //            verification fails, the error status SHALL be InvalidNOC.
        //     2. The public key of the NOC SHALL match the last generated operational public key on this session, and
        //        therefore the public key present in the last CSRResponse provided to the Administrator or
        //        Commissioner that sent the AddNOC or UpdateNOC command. If this check fails, the error status SHALL
        //        be InvalidPublicKey.
        //     3. The DN Encoding Rules SHALL be validated for every certificate in the chain, including valid value
        //        range checks for identifiers such as Fabric ID and Node ID. If this validation fails, the error status
        //        SHALL be InvalidNodeOpId if the matter-node-id attribute in the subject DN of the NOC has a value
        //        outside the Operational Node ID range and InvalidNOC for all other failures.

        const device = this.session.getContext();
        device.assertFailSafeArmed("addNoc received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();

        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `addNoc received after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        if (!failSafeContext.fabricBuilder.hasRootCert()) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidNoc,
                debugText: "Root certificate not found.",
            };
        }

        if (failSafeContext.csrSessionId !== this.session.getId()) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.MissingCsr,
                debugText: "CSR not found in failsafe context.",
            };
        }

        if (failSafeContext.forUpdateNoc) {
            throw new StatusResponseError(
                `addNoc received after csr request was invoked for UpdateNOC.`,
                StatusCode.ConstraintError,
            );
        }

        const state = this.state;
        if (device.getFabrics().length >= state.supportedFabrics) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.TableFull,
                debugText: `No more fabrics can be added because limit ${state.supportedFabrics} reached.`,
            };
        }

        let fabric: Fabric;
        try {
            fabric = await failSafeContext.buildFabric({
                nocValue,
                icacValue,
                adminVendorId,
                ipkValue,
                caseAdminSubject,
            });
        } catch (error) {
            if (error instanceof MatterFabricConflictError) {
                return {
                    statusCode: OperationalCredentials.NodeOperationalCertStatus.FabricConflict,
                    debugText: error.message,
                };
            } else if (error instanceof FabricTableFullError) {
                return {
                    statusCode: OperationalCredentials.NodeOperationalCertStatus.TableFull,
                    debugText: error.message,
                };
            } else {
                throw error;
            }
        }
        await device.addFabric(fabric);

        if (this.session.isPase()) {
            logger.debug(`Add Fabric ${fabric.fabricIndex} to PASE session ${this.session.name}.`);
            this.session.addAssociatedFabric(fabric);
        }

        // Update attributes
        this.asAdmin(() => {
            const existingFabricIndex = this.state.fabrics.findIndex(f => f.fabricIndex === fabric.fabricIndex);
            const existingNocIndex = this.state.nocs.findIndex(n => n.fabricIndex === fabric.fabricIndex);
            if (existingFabricIndex !== -1 || existingNocIndex !== -1) {
                throw new MatterFlowError(
                    `FabricIndex ${fabric.fabricIndex} already exists in state. This should not happen.`,
                );
            }

            this.state.fabrics.push({
                fabricId: fabric.fabricId,
                label: fabric.label,
                nodeId: fabric.nodeId,
                rootPublicKey: fabric.rootPublicKey,
                vendorId: fabric.rootVendorId,
                fabricIndex: fabric.fabricIndex,
            });

            this.state.nocs.push({
                noc: fabric.operationalCert,
                icac: fabric.intermediateCACert ?? null,
                fabricIndex: fabric.fabricIndex,
            });

            this.state.trustedRootCertificates.push(fabric.rootCert);

            this.state.commissionedFabrics = this.state.fabrics.length;
        });

        // TODO: The receiver SHALL create and add a new Access Control Entry using the CaseAdminSubject field to grant
        //  subsequent Administer access to an Administrator member of the new Fabric. It is RECOMMENDED that the
        //  Administrator presented in CaseAdminSubject exist within the same entity that is currently invoking the
        //  AddNOC command, within another of the Fabrics of which it is a member.

        // TODO The incoming IPKValue SHALL be stored in the Fabric-scoped slot within the Group Key Management cluster
        //  (see KeySetWrite), for subsequent use during CASE.

        // TODO If the current secure session was established with PASE, the receiver SHALL: a. Augment the secure
        //  session context with the FabricIndex generated above, such that subsequent interactions have the proper
        //  accessing fabric.

        logger.info(`addNoc success, adminVendorId ${adminVendorId}, caseAdminSubject ${caseAdminSubject}`);

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex: fabric.fabricIndex,
        };
    }

    override async updateNoc({ nocValue, icacValue }: UpdateNocRequest) {
        assertSecureSession(this.session);

        const device = this.session.getContext();

        device.assertFailSafeArmed("updateNoc received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();

        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `updateNoc received after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        if (failSafeContext.forUpdateNoc) {
            throw new StatusResponseError(
                `addNoc received after csr request was invoked for UpdateNOC.`,
                StatusCode.ConstraintError,
            );
        }

        if (failSafeContext.fabricBuilder.hasRootCert()) {
            throw new StatusResponseError(
                "Trusted root certificate added in this session which is now allowed for UpdateNOC.",
                StatusCode.ConstraintError,
            );
        }

        if (!failSafeContext.forUpdateNoc) {
            throw new StatusResponseError("csrRequest not invoked for UpdateNOC.", StatusCode.ConstraintError);
        }

        if (this.session.getAssociatedFabric().fabricIndex !== failSafeContext.associatedFabric?.fabricIndex) {
            throw new StatusResponseError(
                "Fabric of this session and the failsafe context do not match.",
                StatusCode.ConstraintError,
            );
        }

        // Build a new Fabric with the updated NOC and ICAC
        const updateFabric = await failSafeContext.buildUpdatedFabric(nocValue, icacValue);

        // update FabricManager and Resumption records but leave current session intact
        device.updateFabric(updateFabric);

        const nocIndex = this.state.nocs.findIndex(n => n.fabricIndex === updateFabric.fabricIndex);
        if (nocIndex === -1) {
            throw new MatterFlowError(
                `FabricIndex ${updateFabric.fabricIndex} not found in state. This should not happen.`,
            );
        }
        // Update attributes
        this.state.nocs[nocIndex] = {
            noc: updateFabric.operationalCert,
            icac: updateFabric.intermediateCACert ?? null,
            fabricIndex: updateFabric.fabricIndex,
        };

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex: updateFabric.fabricIndex,
        };
    }

    override updateFabricLabel({ label }: UpdateFabricLabelRequest) {
        const fabric = this.session.getFabric();
        if (fabric === undefined) throw new MatterFlowError("updateOperationalCert on a session linked to a fabric.");

        const currentFabricIndex = fabric.fabricIndex;
        const device = this.session.getContext();
        const conflictingLabelFabric = device
            .getFabrics()
            .find(f => f.label === label && f.fabricIndex !== currentFabricIndex);
        if (conflictingLabelFabric !== undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.LabelConflict,
                debugText: `Label ${label} already used by fabric ${conflictingLabelFabric.fabricIndex}`,
            };
        }

        fabric.setLabel(label);

        const fabricEntry = this.state.fabrics.find(f => f.fabricIndex === currentFabricIndex);
        if (fabricEntry === undefined) {
            throw new MatterFlowError(`Fabric ${currentFabricIndex} not found in state. This should not happen.`);
        }
        fabricEntry.label = label;

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex: fabric.fabricIndex };
    }

    override async removeFabric({ fabricIndex }: RemoveFabricRequest) {
        const device = this.session.getContext();

        const fabric = device.getFabricByIndex(fabricIndex);

        if (fabric === undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex,
                debugText: `Fabric ${fabricIndex} not found`,
            };
        }

        const bi = this.agent.get(BasicInformationBehavior);
        bi.events.leave?.emit({ fabricIndex }, this.context);

        await fabric.remove(this.session.getId());
        for (const array of [this.state.fabrics, this.state.nocs]) {
            const index = array.findIndex(f => f.fabricIndex === fabricIndex);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
        this.state.trustedRootCertificates = device.getFabrics().map(f => f.rootCert);
        this.state.commissionedFabrics = this.state.fabrics.length;

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex,
        };
    }

    override addTrustedRootCertificate({ rootCaCertificate }: AddTrustedRootCertificateRequest) {
        const device = this.session.getContext();

        device.assertFailSafeArmed("addTrustedRootCertificate received while failsafe is not armed.");

        const failSafeContext = device.getFailSafeContext();
        if (failSafeContext.fabricBuilder.hasRootCert()) {
            throw new StatusResponseError(
                "Trusted root certificate already added in this FailSafe context.",
                StatusCode.ConstraintError,
            );
        }

        if (failSafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `Can not add trusted root certificates after ${failSafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"}.`,
                StatusCode.ConstraintError,
            );
        }

        this.session.getContext().getFailSafeContext().setRootCert(rootCaCertificate);
    }
}

export namespace OperationalCredentialsServer {
    export class Internal {
        certification?: DeviceCertification;
    }

    export class State extends OperationalCredentialsBehavior.State {
        /**
         * Device certification information.
         *
         * Device certification provides a cryptographic certificate that asserts the official status of a device.
         * Production consumer-facing devices are certified by the CSA.
         *
         * Development devices and those intended for personal use may use a development certificate.  This is the
         * default if you do not provide an official certification in {@link ServerOptions.certification}.
         */
        certification?: DeviceCertification.Configuration;

        [Val.properties](session: ValueSupervisor.Session) {
            return {
                get currentFabricIndex() {
                    return session.associatedFabric ?? FabricIndex.NO_FABRIC;
                },
            };
        }
    }
}
