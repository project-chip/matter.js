/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, Crypto, Logger, PublicKey, UnexpectedDataError } from "#general";
import { SessionManager } from "#session/SessionManager.js";
import { NodeId, ProtocolStatusCode, SECURE_CHANNEL_PROTOCOL_ID } from "#types";
import { TlvOperationalCertificate } from "../../certificate/CertificateManager.js";
import { FabricManager, FabricNotFoundError } from "../../fabric/FabricManager.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ProtocolHandler } from "../../protocol/ProtocolHandler.js";
import { ChannelStatusResponseError } from "../../securechannel/SecureChannelMessenger.js";
import {
    KDFSR1_KEY_INFO,
    KDFSR2_INFO,
    KDFSR2_KEY_INFO,
    KDFSR3_INFO,
    RESUME1_MIC_NONCE,
    RESUME2_MIC_NONCE,
    TBE_DATA2_NONCE,
    TBE_DATA3_NONCE,
    TlvEncryptedDataSigma2,
    TlvEncryptedDataSigma3,
    TlvSignedData,
} from "./CaseMessages.js";
import { CaseServerMessenger } from "./CaseMessenger.js";

const logger = Logger.get("CaseServer");

export class CaseServer implements ProtocolHandler {
    readonly id = SECURE_CHANNEL_PROTOCOL_ID;

    #sessions: SessionManager;
    #fabrics: FabricManager;

    constructor(sessions: SessionManager, fabrics: FabricManager) {
        this.#sessions = sessions;
        this.#fabrics = fabrics;
    }

    async onNewExchange(exchange: MessageExchange) {
        const messenger = new CaseServerMessenger(exchange);
        try {
            await this.handleSigma1(messenger);
        } catch (error) {
            logger.error("An error occurred during the commissioning", error);

            if (error instanceof FabricNotFoundError) {
                await messenger.sendError(ProtocolStatusCode.NoSharedTrustRoots);
            }
            // If we received a ChannelStatusResponseError we do not need to send one back, so just cancel pairing
            else if (!(error instanceof ChannelStatusResponseError)) {
                await messenger.sendError(ProtocolStatusCode.InvalidParam);
            }
        } finally {
            // Destroy the unsecure session used to establish the secure Case session
            await exchange.session.destroy();
        }
    }

    private async handleSigma1(messenger: CaseServerMessenger) {
        logger.info(`Received pairing request from ${messenger.getChannelName()}`);
        // Generate pairing info
        const responderRandom = Crypto.getRandom();

        // Read and process sigma 1
        const { sigma1Bytes, sigma1 } = await messenger.readSigma1();
        const {
            initiatorSessionId: peerSessionId,
            resumptionId: peerResumptionId,
            initiatorResumeMic: peerResumeMic,
            destinationId,
            initiatorRandom: peerRandom,
            initiatorEcdhPublicKey: peerEcdhPublicKey,
            initiatorSessionParams,
        } = sigma1;

        // Try to resume a previous session
        const resumptionId = Crypto.getRandomData(16);

        const resumptionRecord =
            peerResumptionId !== undefined && peerResumeMic !== undefined
                ? this.#sessions.findResumptionRecordById(peerResumptionId)
                : undefined;
        // We try to resume the session
        if (peerResumptionId !== undefined && peerResumeMic !== undefined && resumptionRecord !== undefined) {
            const { sharedSecret, fabric, peerNodeId, caseAuthenticatedTags } = resumptionRecord;
            const peerResumeKey = await Crypto.hkdf(
                sharedSecret,
                Bytes.concat(peerRandom, peerResumptionId),
                KDFSR1_KEY_INFO,
            );
            Crypto.decrypt(peerResumeKey, peerResumeMic, RESUME1_MIC_NONCE);

            // All good! Create secure session
            const responderSessionId = await this.#sessions.getNextAvailableSessionId();
            const secureSessionSalt = Bytes.concat(peerRandom, peerResumptionId);
            const secureSession = await this.#sessions.createSecureSession({
                sessionId: responderSessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: false,
                isResumption: true,
                peerSessionParameters: initiatorSessionParams,
                caseAuthenticatedTags,
            });

            // Generate sigma 2 resume
            const resumeSalt = Bytes.concat(peerRandom, resumptionId);
            const resumeKey = await Crypto.hkdf(sharedSecret, resumeSalt, KDFSR2_KEY_INFO);
            const resumeMic = Crypto.encrypt(resumeKey, new Uint8Array(0), RESUME2_MIC_NONCE);
            try {
                await messenger.sendSigma2Resume({
                    resumptionId,
                    resumeMic,
                    responderSessionId,
                    responderSessionParams: this.#sessions.sessionParameters, // responder session parameters
                });
            } catch (error) {
                // If we fail to send the resume, we destroy the session
                await secureSession.destroy(false);
                throw error;
            }

            logger.info(
                `Session ${secureSession.id} resumed with ${messenger.getChannelName()} for Fabric ${NodeId.toHexString(
                    fabric.nodeId,
                )} (index ${fabric.fabricIndex}) and PeerNode ${NodeId.toHexString(peerNodeId)}`,
                "with CATs",
                caseAuthenticatedTags,
            );
            resumptionRecord.resumptionId = resumptionId; /* Update the ID */

            // Wait for success on the peer side
            await messenger.waitForSuccess("Sigma2Resume-Success");

            await messenger.close();
            await this.#sessions.saveResumptionRecord(resumptionRecord);
        } else if (
            (peerResumptionId === undefined && peerResumeMic === undefined) ||
            (peerResumptionId !== undefined && peerResumeMic !== undefined && resumptionRecord === undefined)
        ) {
            // Generate sigma 2
            // TODO: Pass through a group id?
            const fabric = this.#fabrics.findFabricFromDestinationId(destinationId, peerRandom);
            const { operationalCert: nodeOpCert, intermediateCACert, operationalIdentityProtectionKey } = fabric;
            const { publicKey: responderEcdhPublicKey, sharedSecret } =
                Crypto.ecdhGeneratePublicKeyAndSecret(peerEcdhPublicKey);
            const sigma2Salt = Bytes.concat(
                operationalIdentityProtectionKey,
                responderRandom,
                responderEcdhPublicKey,
                Crypto.hash(sigma1Bytes),
            );
            const sigma2Key = await Crypto.hkdf(sharedSecret, sigma2Salt, KDFSR2_INFO);
            const signatureData = TlvSignedData.encode({
                nodeOpCert,
                intermediateCACert,
                ecdhPublicKey: responderEcdhPublicKey,
                peerEcdhPublicKey,
            });
            const signature = fabric.sign(signatureData);
            const encryptedData = TlvEncryptedDataSigma2.encode({
                nodeOpCert,
                intermediateCACert,
                signature,
                resumptionId,
            });
            const encrypted = Crypto.encrypt(sigma2Key, encryptedData, TBE_DATA2_NONCE);
            const responderSessionId = await this.#sessions.getNextAvailableSessionId();
            const sigma2Bytes = await messenger.sendSigma2({
                responderRandom,
                responderSessionId,
                responderEcdhPublicKey,
                encrypted,
                responderSessionParams: this.#sessions.sessionParameters, // responder session parameters
            });

            // Read and process sigma 3
            const {
                sigma3Bytes,
                sigma3: { encrypted: peerEncrypted },
            } = await messenger.readSigma3();
            const sigma3Salt = Bytes.concat(operationalIdentityProtectionKey, Crypto.hash([sigma1Bytes, sigma2Bytes]));
            const sigma3Key = await Crypto.hkdf(sharedSecret, sigma3Salt, KDFSR3_INFO);
            const peerDecryptedData = Crypto.decrypt(sigma3Key, peerEncrypted, TBE_DATA3_NONCE);
            const {
                nodeOpCert: peerNewOpCert,
                intermediateCACert: peerIntermediateCACert,
                signature: peerSignature,
            } = TlvEncryptedDataSigma3.decode(peerDecryptedData);

            fabric.verifyCredentials(peerNewOpCert, peerIntermediateCACert);

            const peerSignatureData = TlvSignedData.encode({
                nodeOpCert: peerNewOpCert,
                intermediateCACert: peerIntermediateCACert,
                ecdhPublicKey: peerEcdhPublicKey,
                peerEcdhPublicKey: responderEcdhPublicKey,
            });
            const {
                ellipticCurvePublicKey: peerPublicKey,
                subject: { fabricId: peerFabricId, nodeId: peerNodeId, caseAuthenticatedTags },
            } = TlvOperationalCertificate.decode(peerNewOpCert);

            if (fabric.fabricId !== peerFabricId) {
                throw new UnexpectedDataError(`Fabric ID mismatch: ${fabric.fabricId} !== ${peerFabricId}`);
            }

            Crypto.verify(PublicKey(peerPublicKey), peerSignatureData, peerSignature);

            // All good! Create secure session
            const secureSessionSalt = Bytes.concat(
                operationalIdentityProtectionKey,
                Crypto.hash([sigma1Bytes, sigma2Bytes, sigma3Bytes]),
            );
            const secureSession = await this.#sessions.createSecureSession({
                sessionId: responderSessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: false,
                isResumption: false,
                peerSessionParameters: initiatorSessionParams,
                caseAuthenticatedTags,
            });
            logger.info(
                `Session ${secureSession.id} created with ${messenger.getChannelName()} for Fabric ${NodeId.toHexString(
                    fabric.nodeId,
                )} (index ${fabric.fabricIndex}) and PeerNode ${NodeId.toHexString(peerNodeId)}`,
                "with CATs",
                caseAuthenticatedTags,
            );
            await messenger.sendSuccess();

            const resumptionRecord = {
                peerNodeId,
                fabric,
                sharedSecret,
                resumptionId,
                sessionParameters: secureSession.parameters,
                caseAuthenticatedTags,
            };

            await messenger.close();
            await this.#sessions.saveResumptionRecord(resumptionRecord);
        } else {
            logger.info(
                `Invalid resumption ID or resume MIC received from ${messenger.getChannelName()}`,
                peerResumptionId,
                peerResumeMic,
            );
            throw new UnexpectedDataError("Invalid resumption ID or resume MIC.");
        }
    }

    async close() {
        // Nothing to do
    }
}
