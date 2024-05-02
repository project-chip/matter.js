/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CertificateError } from "../../../certificate/CertificateManager.js";
import { AccessLevel, Command } from "../../../cluster/Cluster.js";
import { OperationalCredentials } from "../../../cluster/definitions/OperationalCredentialsCluster.js";
import { MatterFabricConflictError } from "../../../common/FailsafeTimer.js";
import { MatterFlowError, UnexpectedDataError } from "../../../common/MatterError.js";
import { ValidationError } from "../../../common/ValidationError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { Fabric, PublicKeyError } from "../../../fabric/Fabric.js";
import { FabricAction, FabricManager, FabricTableFullError } from "../../../fabric/FabricManager.js";
import { Logger } from "../../../log/Logger.js";
import type { Node } from "../../../node/Node.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { assertSecureSession } from "../../../session/SecureSession.js";
import { TlvBoolean } from "../../../tlv/TlvBoolean.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../../tlv/TlvObject.js";
import { TlvByteString } from "../../../tlv/TlvString.js";
import { Val } from "../../state/Val.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { CommissioningBehavior } from "../../system/commissioning/CommissioningBehavior.js";
import { ProductDescriptionServer } from "../../system/product-description/ProductDescriptionServer.js";
import { DeviceCertification } from "./DeviceCertification.js";
import { OperationalCredentialsBehavior } from "./OperationalCredentialsBehavior.js";
import {
    AddNocRequest,
    AddTrustedRootCertificateRequest,
    AttestationRequest,
    CertificateChainRequest,
    CsrRequest,
    NocResponse,
    RemoveFabricRequest,
    UpdateFabricLabelRequest,
    UpdateNocRequest,
} from "./OperationalCredentialsInterface.js";
import { TlvAttestation, TlvCertSigningRequest } from "./OperationalCredentialsTypes.js";

const logger = Logger.get("OperationalCredentials");

/**
 * Monkey patching Tlv Structure of attestationRequest and csrRequest commands to prevent data validation of the nonce
 * fields to be handled as ConstraintError because we need to return a special error.
 * We do this to leave the model in fact for other validations and only apply the change for our Schema-aware Tlv parsing.
 */
OperationalCredentials.Cluster.commands = {
    ...OperationalCredentials.Cluster.commands,
    attestationRequest: Command(
        0x0,
        TlvObject({ attestationNonce: TlvField(0, TlvByteString) }),
        0x1,
        OperationalCredentials.TlvAttestationResponse,
        { invokeAcl: AccessLevel.Administer },
    ),
    csrRequest: Command(
        0x4,
        TlvObject({
            csrNonce: TlvField(0, TlvByteString),
            isForUpdateNoc: TlvOptionalField(1, TlvBoolean),
        }),
        0x5,
        OperationalCredentials.TlvCsrResponse,
        { invokeAcl: AccessLevel.Administer },
    ),
};

/**
 * This is the default server implementation of OperationalCredentialsBehavior.
 *
 * TODO - currently "source of truth" for fabric data is persisted by FabricManager.  If we remove some legacy code
 * paths we can move source of truth to here.  Right now we just sync fabrics with MatterDevice.  This sync is only as
 * comprehensive as required by current use cases.  If fabrics are mutated directly on MatterDevice then this code will
 * require update.
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

        this.reactTo((this.endpoint as Node).lifecycle.online, this.#nodeOnline);
    }

    override attestationRequest({ attestationNonce }: AttestationRequest) {
        if (attestationNonce.length !== 32) {
            throw new StatusResponseError("Invalid attestation nonce length", StatusCode.InvalidCommand);
        }
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
        if (csrNonce.length !== 32) {
            throw new StatusResponseError("Invalid csr nonce length", StatusCode.InvalidCommand);
        }

        if (isForUpdateNoc && this.session.isPase) {
            throw new StatusResponseError(
                "csrRequest for UpdateNoc received on a PASE session.",
                StatusCode.InvalidCommand,
            );
        }

        const failsafeContext = this.session.context.failsafeContext;
        if (failsafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `csrRequest received after ${failsafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        const certSigningRequest = failsafeContext.createCertificateSigningRequest(
            isForUpdateNoc ?? false,
            this.session.id,
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
                throw new StatusResponseError(
                    `Unsupported certificate type: ${certificateType}`,
                    StatusCode.InvalidCommand,
                );
        }
    }

    #mapNocErrors(error: unknown): NocResponse {
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
        } else if (
            error instanceof CertificateError ||
            error instanceof ValidationError ||
            error instanceof UnexpectedDataError
        ) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidNoc,
                debugText: error.message,
            };
        } else if (error instanceof PublicKeyError) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidPublicKey,
                debugText: error.message,
            };
        }
        throw error;
    }

    override async addNoc({ nocValue, icacValue, ipkValue, caseAdminSubject, adminVendorId }: AddNocRequest) {
        const failsafeContext = this.session.context.failsafeContext;

        if (failsafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `addNoc received after ${failsafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        if (!failsafeContext.hasRootCert) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidNoc,
                debugText: "Root certificate not found.",
            };
        }

        if (failsafeContext.csrSessionId !== this.session.id) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.MissingCsr,
                debugText: "CSR not found in failsafe context.",
            };
        }

        if (failsafeContext.forUpdateNoc) {
            throw new StatusResponseError(
                `addNoc received after csr request was invoked for UpdateNOC.`,
                StatusCode.ConstraintError,
            );
        }

        const state = this.state;
        if (state.commissionedFabrics >= state.supportedFabrics) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.TableFull,
                debugText: `No more fabrics can be added because limit ${state.supportedFabrics} reached.`,
            };
        }

        let fabric: Fabric;
        try {
            fabric = await failsafeContext.buildFabric({
                nocValue,
                icacValue,
                adminVendorId,
                ipkValue,
                caseAdminSubject,
            });
        } catch (error) {
            logger.info("Building fabric for addNoc failed", error);
            return this.#mapNocErrors(error);
        }

        await failsafeContext.addFabric(fabric);

        try {
            if (this.session.isPase) {
                logger.debug(`Add Fabric ${fabric.fabricIndex} to PASE session ${this.session.name}.`);
                this.session.addAssociatedFabric(fabric);
            }

            // Update attributes
            const existingFabricIndex = this.state.fabrics.findIndex(f => f.fabricIndex === fabric.fabricIndex);
            const existingNocIndex = this.state.nocs.findIndex(n => n.fabricIndex === fabric.fabricIndex);
            if (existingFabricIndex !== -1 || existingNocIndex !== -1) {
                throw new MatterFlowError(
                    `FabricIndex ${fabric.fabricIndex} already exists in state. This should not happen.`,
                );
            }
        } catch (e) {
            // Fabric insertion into MatterDevice is not currently transactional so we need to remove manually
            await fabric.remove(this.session.id);
            throw e;
        }

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

        const device = this.session.context;

        const timedOp = device.failsafeContext;

        if (timedOp.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `updateNoc received after ${timedOp.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        if (timedOp.forUpdateNoc) {
            throw new StatusResponseError(
                `addNoc received after csr request was invoked for UpdateNOC.`,
                StatusCode.ConstraintError,
            );
        }

        if (timedOp.hasRootCert) {
            throw new StatusResponseError(
                "Trusted root certificate added in this session which is now allowed for UpdateNOC.",
                StatusCode.ConstraintError,
            );
        }

        if (!timedOp.forUpdateNoc) {
            throw new StatusResponseError("csrRequest not invoked for UpdateNOC.", StatusCode.ConstraintError);
        }

        if (this.session.associatedFabric.fabricIndex !== timedOp.associatedFabric?.fabricIndex) {
            throw new StatusResponseError(
                "Fabric of this session and the failsafe context do not match.",
                StatusCode.ConstraintError,
            );
        }

        // Build a new Fabric with the updated NOC and ICAC
        try {
            const updateFabric = await timedOp.buildUpdatedFabric(nocValue, icacValue);

            // update FabricManager and Resumption records but leave current session intact
            await timedOp.updateFabric(updateFabric);

            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
                fabricIndex: updateFabric.fabricIndex,
            };
        } catch (error) {
            logger.info("Building fabric for updateNoc failed", error);
            return this.#mapNocErrors(error);
        }
    }

    override async updateFabricLabel({ label }: UpdateFabricLabelRequest) {
        const fabric = this.session.associatedFabric;

        const currentFabricIndex = fabric.fabricIndex;
        const device = this.session.context;
        const conflictingLabelFabric = device
            .getFabrics()
            .find(f => f.label === label && f.fabricIndex !== currentFabricIndex);
        if (conflictingLabelFabric !== undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.LabelConflict,
                debugText: `Label ${label} already used by fabric ${conflictingLabelFabric.fabricIndex}`,
            };
        }

        await fabric.setLabel(label);

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex: fabric.fabricIndex };
    }

    override async removeFabric({ fabricIndex }: RemoveFabricRequest) {
        const device = this.session.context;

        const fabric = device.getFabricByIndex(fabricIndex);

        if (fabric === undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex,
                debugText: `Fabric ${fabricIndex} not found`,
            };
        }

        await fabric.remove(this.session.id);
        // The state is updated on removal via commissionedFabricChanged event, see constructor

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex,
        };
    }

    override addTrustedRootCertificate({ rootCaCertificate }: AddTrustedRootCertificateRequest) {
        const failsafeContext = this.session.context.failsafeContext;

        if (failsafeContext.hasRootCert) {
            throw new StatusResponseError(
                "Trusted root certificate already added in this FailSafe context.",
                StatusCode.ConstraintError,
            );
        }

        if (failsafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `Can not add trusted root certificates after ${failsafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"}.`,
                StatusCode.ConstraintError,
            );
        }

        try {
            failsafeContext.setRootCert(rootCaCertificate);
        } catch (error) {
            logger.info("setting root certificate failed", error);
            if (
                error instanceof CertificateError ||
                error instanceof ValidationError ||
                error instanceof UnexpectedDataError
            ) {
                throw new StatusResponseError(error.message, StatusCode.InvalidCommand);
            }
            throw error;
        }
    }

    async #updateFabrics() {
        const fabrics = this.endpoint.env.get(FabricManager).getFabrics();
        this.state.fabrics = fabrics.map(fabric => ({
            fabricId: fabric.fabricId,
            label: fabric.label,
            nodeId: fabric.nodeId,
            rootPublicKey: fabric.rootPublicKey,
            vendorId: fabric.rootVendorId,
            fabricIndex: fabric.fabricIndex,
        }));

        this.state.nocs = fabrics.map(fabric => ({
            noc: fabric.operationalCert,
            icac: fabric.intermediateCACert ?? null,
            fabricIndex: fabric.fabricIndex,
        }));

        this.state.trustedRootCertificates = fabrics.map(fabric => fabric.rootCert);

        this.state.commissionedFabrics = fabrics.length;

        await this.context.transaction.commit();
    }

    get #certification() {
        const certification = this.internal.certification;
        if (certification) {
            return certification;
        }

        return (this.internal.certification = new DeviceCertification(
            this.state.certification,
            this.agent.get(ProductDescriptionServer).state,
        ));
    }

    async #handleAddedFabric({ fabricIndex }: Fabric) {
        await this.#updateFabrics();
        this.agent.get(CommissioningBehavior).handleFabricChange(fabricIndex, FabricAction.Added);
    }

    async #handleUpdatedFabric({ fabricIndex }: Fabric) {
        await this.#updateFabrics();
        this.agent.get(CommissioningBehavior).handleFabricChange(fabricIndex, FabricAction.Updated);
    }

    async #handleRemovedFabric({ fabricIndex }: Fabric) {
        await this.#updateFabrics();
        this.agent.get(CommissioningBehavior).handleFabricChange(fabricIndex, FabricAction.Removed);
    }

    async #nodeOnline() {
        const fabricManager = this.endpoint.env.get(FabricManager);
        this.reactTo(fabricManager.events.added, this.#handleAddedFabric);
        this.reactTo(fabricManager.events.updated, this.#handleUpdatedFabric);
        this.reactTo(fabricManager.events.deleted, this.#handleRemovedFabric);
        await this.#updateFabrics();
    }
}

export namespace OperationalCredentialsServer {
    export class Internal {
        certification?: DeviceCertification;
        commissionedFabric?: FabricIndex;
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
        certification?: DeviceCertification.Configuration = undefined;

        [Val.properties](_endpoint: any, session: ValueSupervisor.Session) {
            return {
                get currentFabricIndex() {
                    return session.fabric ?? FabricIndex.NO_FABRIC;
                },
            };
        }
    }
}
