/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Icac } from "#certificate/kinds/Icac.js";
import { Noc } from "#certificate/kinds/Noc.js";
import { Bytes, Logger, PublicKey, UnexpectedDataError } from "#general";
import { ChannelStatusResponseError } from "#securechannel/SecureChannelMessenger.js";
import { SessionManager } from "#session/SessionManager.js";
import { NodeId, SecureChannelStatusCode } from "#types";
import { Fabric } from "../../fabric/Fabric.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
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
import { CaseClientMessenger } from "./CaseMessenger.js";

const logger = Logger.get("CaseClient");

export class CaseClient {
    #sessions: SessionManager;

    constructor(sessions: SessionManager) {
        this.#sessions = sessions;
    }

    async pair(exchange: MessageExchange, fabric: Fabric, peerNodeId: NodeId, expectedProcessingTimeMs?: number) {
        const messenger = new CaseClientMessenger(exchange, expectedProcessingTimeMs);

        try {
            return await this.#doPair(messenger, exchange, fabric, peerNodeId);
        } catch (error) {
            if (!(error instanceof ChannelStatusResponseError)) {
                await messenger.sendError(SecureChannelStatusCode.InvalidParam);
            }
            throw error;
        }
    }

    async #doPair(messenger: CaseClientMessenger, exchange: MessageExchange, fabric: Fabric, peerNodeId: NodeId) {
        const { crypto } = fabric;

        // Generate pairing info
        const initiatorRandom = crypto.randomBytes(32);
        const initiatorSessionId = await this.#sessions.getNextAvailableSessionId(); // Initiator Session Id
        const { operationalIdentityProtectionKey, operationalCert: localNoc, intermediateCACert: localIcac } = fabric;
        const localKey = await crypto.createKeyPair();

        // Send sigma1
        let sigma1Bytes;
        let resumed = false;
        let resumptionRecord = this.#sessions.findResumptionRecordByAddress(fabric.addressOf(peerNodeId));
        if (resumptionRecord !== undefined) {
            const { sharedSecret, resumptionId } = resumptionRecord;
            const resumeKey = await crypto.createHkdfKey(
                sharedSecret,
                Bytes.concat(initiatorRandom, resumptionId),
                KDFSR1_KEY_INFO,
            );
            const initiatorResumeMic = crypto.encrypt(resumeKey, new Uint8Array(0), RESUME1_MIC_NONCE);
            sigma1Bytes = await messenger.sendSigma1({
                initiatorSessionId,
                destinationId: await fabric.currentDestinationIdFor(peerNodeId, initiatorRandom),
                initiatorEcdhPublicKey: localKey.publicBits,
                initiatorRandom,
                resumptionId,
                initiatorResumeMic,
                initiatorSessionParams: this.#sessions.sessionParameters,
            });
        } else {
            sigma1Bytes = await messenger.sendSigma1({
                initiatorSessionId,
                destinationId: await fabric.currentDestinationIdFor(peerNodeId, initiatorRandom),
                initiatorEcdhPublicKey: localKey.publicBits,
                initiatorRandom,
                initiatorSessionParams: this.#sessions.sessionParameters,
            });
        }

        let secureSession;
        const { sigma2Bytes, sigma2, sigma2Resume } = await messenger.readSigma2();
        if (sigma2Resume !== undefined) {
            // Process sigma2 resume
            if (resumptionRecord === undefined) throw new UnexpectedDataError("Received an unexpected sigma2Resume.");
            const {
                sharedSecret,
                fabric,
                sessionParameters: resumptionSessionParams,
                caseAuthenticatedTags,
            } = resumptionRecord;
            const { responderSessionId: peerSessionId, resumptionId, resumeMic } = sigma2Resume;

            // We use the Fallbacks for the session parameters overridden by our stored ones from the resumption record
            const sessionParameters = {
                ...exchange.session.parameters,
                ...(resumptionSessionParams ?? {}),
            };

            const resumeSalt = Bytes.concat(initiatorRandom, resumptionId);
            const resumeKey = await crypto.createHkdfKey(sharedSecret, resumeSalt, KDFSR2_KEY_INFO);
            crypto.decrypt(resumeKey, resumeMic, RESUME2_MIC_NONCE);

            const secureSessionSalt = Bytes.concat(initiatorRandom, resumptionRecord.resumptionId);
            secureSession = await this.#sessions.createSecureSession({
                sessionId: initiatorSessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: true,
                isResumption: true,
                peerSessionParameters: sessionParameters,
                caseAuthenticatedTags,
            });
            await messenger.sendSuccess();
            logger.info(
                `Case client: Session ${secureSession.id} successfully resumed with ${messenger.getChannelName()} for Fabric ${NodeId.toHexString(fabric.nodeId)} (index ${fabric.fabricIndex}) and PeerNode ${NodeId.toHexString(peerNodeId)} with parameters`,
                secureSession.parameterDiagnostics(),
            );

            resumptionRecord.resumptionId = resumptionId; /* update resumptionId */
            resumptionRecord.sessionParameters = secureSession.parameters; /* update mrpParams */
            resumed = true;
        } else {
            // Process sigma2
            const {
                responderEcdhPublicKey: peerKey,
                encrypted: peerEncrypted,
                responderRandom,
                responderSessionId: peerSessionId,
                responderSessionParams,
            } = sigma2;
            // We use the Fallbacks for the session parameters overridden by what was sent by the device in Sigma2
            const sessionParameters = {
                ...exchange.session.parameters,
                ...(responderSessionParams ?? {}),
            };
            const sharedSecret = await crypto.generateDhSecret(localKey, PublicKey(peerKey));
            const sigma2Salt = Bytes.concat(
                operationalIdentityProtectionKey,
                responderRandom,
                peerKey,
                await crypto.computeSha256(sigma1Bytes),
            );
            const sigma2Key = await crypto.createHkdfKey(sharedSecret, sigma2Salt, KDFSR2_INFO);
            const peerEncryptedData = crypto.decrypt(sigma2Key, peerEncrypted, TBE_DATA2_NONCE);
            const {
                responderNoc: peerNoc,
                responderIcac: peerIcac,
                signature: peerSignature,
                resumptionId: peerResumptionId,
            } = TlvEncryptedDataSigma2.decode(peerEncryptedData);
            const peerSignatureData = TlvSignedData.encode({
                responderNoc: peerNoc,
                responderIcac: peerIcac,
                responderPublicKey: peerKey,
                initiatorPublicKey: localKey.publicBits,
            });
            const {
                ellipticCurvePublicKey: peerPublicKey,
                subject: { fabricId: peerFabricIdNOCert, nodeId: peerNodeIdNOCert },
            } = Noc.fromTlv(peerNoc).cert;

            await crypto.verifyEcdsa(PublicKey(peerPublicKey), peerSignatureData, peerSignature);

            if (peerNodeIdNOCert !== peerNodeId) {
                throw new UnexpectedDataError(
                    `The node ID in the peer certificate ${peerNodeIdNOCert} doesn't match the expected peer node ID ${peerNodeId}`,
                );
            }
            if (peerFabricIdNOCert !== fabric.fabricId) {
                throw new UnexpectedDataError(
                    `The fabric ID in the peer certificate ${peerFabricIdNOCert} doesn't match the expected fabric ID ${fabric.fabricId}`,
                );
            }
            if (peerIcac !== undefined) {
                const {
                    subject: { fabricId: peerFabricIdIcaCert },
                } = Icac.fromTlv(peerIcac).cert;

                if (peerFabricIdIcaCert !== undefined && peerFabricIdIcaCert !== fabric.fabricId) {
                    throw new UnexpectedDataError(
                        `The fabric ID in the peer intermediate CA certificate ${peerFabricIdIcaCert} doesn't match the expected fabric ID ${fabric.fabricId}`,
                    );
                }
            }
            await fabric.verifyCredentials(peerNoc, peerIcac);

            // Generate and send sigma3
            const sigma3Salt = Bytes.concat(
                operationalIdentityProtectionKey,
                await crypto.computeSha256([sigma1Bytes, sigma2Bytes]),
            );
            const sigma3Key = await crypto.createHkdfKey(sharedSecret, sigma3Salt, KDFSR3_INFO);
            const signatureData = TlvSignedData.encode({
                responderNoc: localNoc,
                responderIcac: localIcac,
                responderPublicKey: localKey.publicBits,
                initiatorPublicKey: peerKey,
            });
            const signature = await fabric.sign(signatureData);
            const encryptedData = TlvEncryptedDataSigma3.encode({
                responderNoc: localNoc,
                responderIcac: localIcac,
                signature,
            });
            const encrypted = crypto.encrypt(sigma3Key, encryptedData, TBE_DATA3_NONCE);
            const sigma3Bytes = await messenger.sendSigma3({ encrypted });
            await messenger.waitForSuccess("Sigma3-Success");

            // All good! Create secure session
            const { caseAuthenticatedTags } = resumptionRecord ?? {}; // Even if resumption does not work try to reuse the caseAuthenticatedTags
            const secureSessionSalt = Bytes.concat(
                operationalIdentityProtectionKey,
                await crypto.computeSha256([sigma1Bytes, sigma2Bytes, sigma3Bytes]),
            );
            secureSession = await this.#sessions.createSecureSession({
                sessionId: initiatorSessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: true,
                isResumption: false,
                peerSessionParameters: sessionParameters,
                caseAuthenticatedTags,
            });
            logger.info(
                `Case client Session ${secureSession.id} established successfully with ${messenger.getChannelName()} for Fabric ${NodeId.toHexString(
                    fabric.nodeId,
                )} (index ${fabric.fabricIndex}) and PeerNode ${NodeId.toHexString(peerNodeId)} with parameters`,
                secureSession.parameterDiagnostics(),
            );
            resumptionRecord = {
                fabric,
                peerNodeId,
                sharedSecret,
                resumptionId: peerResumptionId,
                sessionParameters: secureSession.parameters,
                caseAuthenticatedTags,
            };
        }

        await messenger.close();
        await this.#sessions.saveResumptionRecord(resumptionRecord);

        return { session: secureSession, resumed };
    }
}
