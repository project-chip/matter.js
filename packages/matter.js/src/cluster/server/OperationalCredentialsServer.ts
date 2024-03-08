/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// TODO: Rename to NodeOperationalCredentialsServer to match with specs

import { DeviceCertification } from "../../behavior/definitions/operational-credentials/DeviceCertification.js";
import {
    TlvAttestation,
    TlvCertSigningRequest,
} from "../../behavior/definitions/operational-credentials/OperationalCredentialsTypes.js";
import { MatterFabricConflictError } from "../../common/FailsafeTimer.js";
import { MatterFlowError } from "../../common/MatterError.js";
import { tryCatch } from "../../common/TryCatchHandler.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { FabricTableFullError } from "../../fabric/FabricManager.js";
import { Logger } from "../../log/Logger.js";
import { StatusCode, StatusResponseError } from "../../protocol/interaction/StatusCode.js";
import { NoAssociatedFabricError, assertSecureSession } from "../../session/SecureSession.js";
import { BasicInformation } from "../definitions/BasicInformationCluster.js";
import { OperationalCredentials } from "../definitions/OperationalCredentialsCluster.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

const logger = Logger.get("OperationalCredentialsServer");

export const OperationalCredentialsClusterHandler: (
    cert: DeviceCertification,
) => ClusterServerHandlers<typeof OperationalCredentials.Cluster> = cert => ({
    attestationRequest: async ({ request: { attestationNonce }, session }) => {
        assertSecureSession(session);
        const elements = TlvAttestation.encode({
            declaration: cert.declaration,
            attestationNonce,
            timestamp: 0,
        });
        return { attestationElements: elements, attestationSignature: cert.sign(session, elements) };
    },

    csrRequest: async ({ request: { csrNonce, isForUpdateNoc }, session }) => {
        assertSecureSession(session);
        if (isForUpdateNoc && session.isPase) {
            throw new StatusResponseError(
                "csrRequest for UpdateNoc received on a PASE session.",
                StatusCode.InvalidCommand,
            );
        }
        const device = session.context;
        device.assertFailSafeArmed("csrRequest received while failsafe is not armed.");

        const timedOp = device.failsafeContext;
        if (timedOp.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `csrRequest received after ${timedOp.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        const certSigningRequest = timedOp.createCertificateSigningRequest(isForUpdateNoc ?? false, session.id);
        const nocsrElements = TlvCertSigningRequest.encode({ certSigningRequest, csrNonce });
        return { nocsrElements, attestationSignature: cert.sign(session, nocsrElements) };
    },

    certificateChainRequest: async ({ request: { certificateType } }) => {
        switch (certificateType) {
            case OperationalCredentials.CertificateChainType.DacCertificate:
                return { certificate: cert.certificate };
            case OperationalCredentials.CertificateChainType.PaiCertificate:
                return { certificate: cert.intermediateCertificate };
            default:
                throw new MatterFlowError(`Unsupported certificate type: ${certificateType}`);
        }
    },

    addNoc: async ({
        request: { nocValue, icacValue, ipkValue, caseAdminSubject, adminVendorId },
        attributes: { nocs, commissionedFabrics, fabrics, trustedRootCertificates, supportedFabrics },
        session,
    }) => {
        if (!session.isSecure) throw new MatterFlowError("addOperationalCert should be called on a secure session.");

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

        const device = session.context;

        const failsafeContext = device.failsafeContext;

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

        if (failsafeContext.csrSessionId !== session.id) {
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

        if (device.getFabrics().length === supportedFabrics.getLocal()) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.TableFull,
                debugText: `No more fabrics can be added because limit ${supportedFabrics.getLocal()} reached.`,
            };
        }

        let fabric;
        try {
            fabric = await failsafeContext.buildFabric({
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
        await failsafeContext.addFabric(fabric);

        assertSecureSession(session);
        if (session.isPase) {
            logger.debug(`Add Fabric with index ${fabric.fabricIndex} to PASE session ${session.name}.`);
            session.addAssociatedFabric(fabric);
        }

        // Update connected attributes
        nocs.updated(session);
        commissionedFabrics.updated(session);
        fabrics.updated(session);
        trustedRootCertificates.updated(session);

        // TODO: The receiver SHALL create and add a new Access Control Entry using the CaseAdminSubject field to grant
        //  subsequent Administer access to an Administrator member of the new Fabric. It is RECOMMENDED that the
        //  Administrator presented in CaseAdminSubject exist within the same entity that is currently invoking the
        //  AddNOC command, within another of the Fabrics of which it is a member.

        // TODO The incoming IPKValue SHALL be stored in the Fabric-scoped slot within the Group Key Management cluster
        //  (see KeySetWrite), for subsequent use during CASE.

        // TODO If the current secure session was established with PASE, the receiver SHALL:
        //  a. Augment the secure session context with the FabricIndex generated above, such that subsequent interactions
        //     have the proper accessing fabric.

        logger.info(`addNoc success, adminVendorId ${adminVendorId}, caseAdminSubject ${caseAdminSubject}`);

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex: fabric.fabricIndex };
    },

    fabricsAttributeGetter: ({ session, isFabricFiltered }) => {
        if (session === undefined || !session.isSecure) return []; // ???
        const fabrics = isFabricFiltered ? [session.associatedFabric] : session.context.getFabrics();

        return fabrics.map(fabric => ({
            fabricId: fabric.fabricId,
            label: fabric.label,
            nodeId: fabric.nodeId,
            rootPublicKey: fabric.rootPublicKey,
            vendorId: fabric.rootVendorId,
            fabricIndex: fabric.fabricIndex,
        }));
    },

    // Needed because FabricScopedAttributeServer clas requires both getter and setter if custom
    fabricsAttributeSetter: () => {
        throw new MatterFlowError("fabrics attribute is read-only.");
    },

    nocsAttributeGetter: ({ session, isFabricFiltered }) => {
        if (session === undefined || !session.isSecure) return []; // ???
        const fabrics = isFabricFiltered ? [session.associatedFabric] : session.context.getFabrics();
        return fabrics.map(fabric => ({
            noc: fabric.operationalCert,
            icac: fabric.intermediateCACert ?? null,
            fabricIndex: fabric.fabricIndex,
        }));
    },

    // Needed because FabricScopedAttributeServer clas requires both getter and setter if custom
    nocsAttributeSetter: () => {
        throw new MatterFlowError("fabrics attribute is read-only.");
    },

    commissionedFabricsAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure) return 0; // ???
        return session.context.getFabrics().length;
    },

    trustedRootCertificatesAttributeGetter: ({ session, isFabricFiltered }) => {
        if (session === undefined || !session.isSecure) return []; // ???
        const fabrics = isFabricFiltered ? [session.associatedFabric] : session.context.getFabrics();
        return fabrics.map(fabric => fabric.rootCert);
    },

    currentFabricIndexAttributeGetter: ({ session }) => {
        if (session === undefined || !session.isSecure) return FabricIndex.NO_FABRIC;
        assertSecureSession(session);
        return session.fabric?.fabricIndex ?? FabricIndex.NO_FABRIC;
    },

    updateNoc: async ({ request: { nocValue, icacValue }, attributes: { nocs, fabrics }, session }) => {
        assertSecureSession(session);

        tryCatch(
            () => session.associatedFabric,
            NoAssociatedFabricError,
            () => {
                throw new StatusResponseError("No associated fabric existing", StatusCode.UnsupportedAccess);
            },
        );

        const device = session.context;

        const failsafeContext = device.failsafeContext;

        if (failsafeContext.fabricIndex !== undefined) {
            throw new StatusResponseError(
                `updateNoc received after ${failsafeContext.forUpdateNoc ? "UpdateNOC" : "AddNOC"} already invoked.`,
                StatusCode.ConstraintError,
            );
        }

        if (failsafeContext.forUpdateNoc) {
            throw new StatusResponseError(
                `addNoc received after csr request was invoked for UpdateNOC.`,
                StatusCode.ConstraintError,
            );
        }

        if (failsafeContext.hasRootCert) {
            throw new StatusResponseError(
                "Trusted root certificate added in this session which is now allowed for UpdateNOC.",
                StatusCode.ConstraintError,
            );
        }

        if (!failsafeContext.forUpdateNoc) {
            throw new StatusResponseError("csrRequest not invoked for UpdateNOC.", StatusCode.ConstraintError);
        }

        if (session.associatedFabric.fabricIndex !== failsafeContext.associatedFabric?.fabricIndex) {
            throw new StatusResponseError(
                "Fabric of this session and the failsafe context do not match.",
                StatusCode.ConstraintError,
            );
        }

        // Build a new Fabric with the updated NOC and ICAC
        const updateFabric = await failsafeContext.buildUpdatedFabric(nocValue, icacValue);

        // update FabricManager and Resumption records but leave current session intact
        failsafeContext.updateFabric(updateFabric);

        // Update connected attributes
        nocs.updated(session);
        fabrics.updated(session);

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex: updateFabric.fabricIndex,
        };
    },

    updateFabricLabel: async ({ request: { label }, attributes: { fabrics }, session }) => {
        assertSecureSession(session, "updateOperationalCert should be called on a secure session.");

        const fabric = tryCatch(
            () => session.associatedFabric,
            NoAssociatedFabricError,
            () => {
                throw new StatusResponseError("No associated fabric existing", StatusCode.UnsupportedAccess);
            },
        );

        const currentFabricIndex = fabric.fabricIndex;
        const device = session.context;
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

        fabrics.updated(session);

        return { statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok, fabricIndex: fabric.fabricIndex };
    },

    removeFabric: async ({
        request: { fabricIndex },
        attributes: { nocs, commissionedFabrics, fabrics, trustedRootCertificates },
        session,
        endpoint,
    }) => {
        const device = session.context;

        const fabric = device.getFabricByIndex(fabricIndex);

        if (fabric === undefined) {
            return {
                statusCode: OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex,
                debugText: `Fabric ${fabricIndex} not found`,
            };
        }

        const basicInformationCluster = endpoint.getClusterServer(BasicInformation.Cluster);
        basicInformationCluster?.triggerLeaveEvent?.({ fabricIndex });

        assertSecureSession(session);

        await fabric.remove(session.id);
        nocs.updated(session);
        commissionedFabrics.updated(session);
        fabrics.updated(session);
        trustedRootCertificates.updated(session);

        return {
            statusCode: OperationalCredentials.NodeOperationalCertStatus.Ok,
            fabricIndex,
        };
    },

    addTrustedRootCertificate: async ({ request: { rootCaCertificate }, session }) => {
        const failsafeContext = session.context.failsafeContext;

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

        failsafeContext.setRootCert(rootCaCertificate);
    },
});
