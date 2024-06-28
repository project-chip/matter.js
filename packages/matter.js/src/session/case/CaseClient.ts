/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterController } from "../../MatterController.js";
import { TlvIntermediateCertificate, TlvOperationalCertificate } from "../../certificate/CertificateManager.js";
import { UnexpectedDataError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { PublicKey } from "../../crypto/Key.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Fabric } from "../../fabric/Fabric.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { Logger } from "../../log/Logger.js";
import { MessageExchange } from "../../protocol/MessageExchange.js";
import { ByteArray } from "../../util/ByteArray.js";
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
    async pair(
        client: MatterController,
        exchange: MessageExchange<MatterController>,
        fabric: Fabric,
        peerNodeId: NodeId,
    ) {
        const messenger = new CaseClientMessenger(exchange);

        // Generate pairing info
        const initiatorRandom = Crypto.getRandom();
        const initiatorSessionId = await client.getNextAvailableSessionId(); // Initiator Session Id
        const { operationalIdentityProtectionKey, operationalCert: nodeOpCert, intermediateCACert } = fabric;
        const { publicKey: initiatorEcdhPublicKey, ecdh } = Crypto.ecdhGeneratePublicKey();

        // Send sigma1
        let sigma1Bytes;
        let resumptionRecord = client.findResumptionRecordByNodeId(peerNodeId);
        if (resumptionRecord !== undefined) {
            const { sharedSecret, resumptionId } = resumptionRecord;
            const resumeKey = await Crypto.hkdf(
                sharedSecret,
                ByteArray.concat(initiatorRandom, resumptionId),
                KDFSR1_KEY_INFO,
            );
            const initiatorResumeMic = Crypto.encrypt(resumeKey, new ByteArray(0), RESUME1_MIC_NONCE);
            sigma1Bytes = await messenger.sendSigma1({
                initiatorSessionId,
                destinationId: fabric.getDestinationId(peerNodeId, initiatorRandom),
                initiatorEcdhPublicKey,
                initiatorRandom,
                resumptionId,
                initiatorResumeMic,
                initiatorSessionParams: client.sessionParameters,
            });
        } else {
            sigma1Bytes = await messenger.sendSigma1({
                initiatorSessionId,
                destinationId: fabric.getDestinationId(peerNodeId, initiatorRandom),
                initiatorEcdhPublicKey,
                initiatorRandom,
                initiatorSessionParams: client.sessionParameters,
            });
        }

        let secureSession;
        const { sigma2Bytes, sigma2, sigma2Resume } = await messenger.readSigma2();
        if (sigma2Resume !== undefined) {
            // Process sigma2 resume
            if (resumptionRecord === undefined) throw new UnexpectedDataError("Received an unexpected sigma2Resume.");
            const { sharedSecret, fabric, sessionParameters: resumptionSessionParams } = resumptionRecord;
            const { responderSessionId: peerSessionId, resumptionId, resumeMic } = sigma2Resume;

            // We use the Fallbacks for the session parameters overridden by our stored ones from the resumption record
            const sessionParameters = {
                ...exchange.session.parameters,
                ...(resumptionSessionParams ?? {}),
            };

            const resumeSalt = ByteArray.concat(initiatorRandom, resumptionId);
            const resumeKey = await Crypto.hkdf(sharedSecret, resumeSalt, KDFSR2_KEY_INFO);
            Crypto.decrypt(resumeKey, resumeMic, RESUME2_MIC_NONCE);

            const secureSessionSalt = ByteArray.concat(initiatorRandom, resumptionRecord.resumptionId);
            secureSession = await client.sessionManager.createSecureSession({
                sessionId: initiatorSessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: true,
                isResumption: true,
                peerSessionParameters: sessionParameters,
            });
            await messenger.sendSuccess();
            logger.info(
                `Case client: session resumed with ${messenger.getChannelName()} and parameters`,
                Diagnostic.dict(secureSession.parameters),
            );

            resumptionRecord.resumptionId = resumptionId; /* update resumptionId */
            resumptionRecord.sessionParameters = secureSession.parameters; /* update mrpParams */
        } else {
            // Process sigma2
            const {
                responderEcdhPublicKey: peerEcdhPublicKey,
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
            const sharedSecret = Crypto.ecdhGenerateSecret(peerEcdhPublicKey, ecdh);
            const sigma2Salt = ByteArray.concat(
                operationalIdentityProtectionKey,
                responderRandom,
                peerEcdhPublicKey,
                Crypto.hash(sigma1Bytes),
            );
            const sigma2Key = await Crypto.hkdf(sharedSecret, sigma2Salt, KDFSR2_INFO);
            const peerEncryptedData = Crypto.decrypt(sigma2Key, peerEncrypted, TBE_DATA2_NONCE);
            const {
                nodeOpCert: peerNewOpCert,
                intermediateCACert: peerIntermediateCACert,
                signature: peerSignature,
                resumptionId: peerResumptionId,
            } = TlvEncryptedDataSigma2.decode(peerEncryptedData);
            const peerSignatureData = TlvSignedData.encode({
                nodeOpCert: peerNewOpCert,
                intermediateCACert: peerIntermediateCACert,
                ecdhPublicKey: peerEcdhPublicKey,
                peerEcdhPublicKey: initiatorEcdhPublicKey,
            });
            const {
                ellipticCurvePublicKey: peerPublicKey,
                subject: { fabricId: peerFabricIdNOCert, nodeId: peerNodeIdNOCert },
            } = TlvOperationalCertificate.decode(peerNewOpCert);

            Crypto.verify(PublicKey(peerPublicKey), peerSignatureData, peerSignature);

            if (peerNodeIdNOCert !== peerNodeId) {
                throw new UnexpectedDataError(
                    "The node ID in the peer certificate doesn't match the expected peer node ID",
                );
            }
            if (peerNodeIdNOCert !== peerNodeId) {
                throw new UnexpectedDataError(
                    "The node ID in the peer certificate doesn't match the expected peer node ID",
                );
            }
            if (peerFabricIdNOCert !== fabric.fabricId) {
                throw new UnexpectedDataError(
                    "The fabric ID in the peer certificate doesn't match the expected fabric ID",
                );
            }
            if (peerIntermediateCACert !== undefined) {
                const {
                    subject: { fabricId: peerFabricIdIcaCert },
                } = TlvIntermediateCertificate.decode(peerIntermediateCACert);

                if (peerFabricIdIcaCert !== fabric.fabricId) {
                    throw new UnexpectedDataError(
                        "The fabric ID in the peer intermediate CA certificate doesn't match the expected fabric ID",
                    );
                }
            }
            fabric.verifyCredentials(peerNewOpCert, peerIntermediateCACert);

            // Generate and send sigma3
            const sigma3Salt = ByteArray.concat(
                operationalIdentityProtectionKey,
                Crypto.hash([sigma1Bytes, sigma2Bytes]),
            );
            const sigma3Key = await Crypto.hkdf(sharedSecret, sigma3Salt, KDFSR3_INFO);
            const signatureData = TlvSignedData.encode({
                nodeOpCert,
                intermediateCACert,
                ecdhPublicKey: initiatorEcdhPublicKey,
                peerEcdhPublicKey,
            });
            const signature = fabric.sign(signatureData);
            const encryptedData = TlvEncryptedDataSigma3.encode({ nodeOpCert, intermediateCACert, signature });
            const encrypted = Crypto.encrypt(sigma3Key, encryptedData, TBE_DATA3_NONCE);
            const sigma3Bytes = await messenger.sendSigma3({ encrypted });
            await messenger.waitForSuccess("Success after CASE Sigma3");

            // All good! Create secure session
            const secureSessionSalt = ByteArray.concat(
                operationalIdentityProtectionKey,
                Crypto.hash([sigma1Bytes, sigma2Bytes, sigma3Bytes]),
            );
            secureSession = await client.sessionManager.createSecureSession({
                sessionId: initiatorSessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: true,
                isResumption: false,
                peerSessionParameters: sessionParameters,
            });
            logger.info(
                `Case client: Paired successfully with ${messenger.getChannelName()} and parameters`,
                Diagnostic.dict(secureSession.parameters),
            );
            resumptionRecord = {
                fabric,
                peerNodeId,
                sharedSecret,
                resumptionId: peerResumptionId,
                sessionParameters: secureSession.parameters,
            };
        }

        await messenger.close();
        await client.saveResumptionRecord(resumptionRecord);

        return secureSession;
    }
}
