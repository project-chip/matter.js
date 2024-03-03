/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterController } from "../../MatterController.js";
import { TlvOperationalCertificate } from "../../certificate/CertificateManager.js";
import { UnexpectedDataError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { PublicKey } from "../../crypto/Key.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Fabric } from "../../fabric/Fabric.js";
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
        const random = Crypto.getRandom();
        const sessionId = await client.getNextAvailableSessionId(); // Initiator Session Id
        const { operationalIdentityProtectionKey, operationalCert: nodeOpCert, intermediateCACert } = fabric;
        const { publicKey: ecdhPublicKey, ecdh } = Crypto.ecdhGeneratePublicKey();

        // Send sigma1
        let sigma1Bytes;
        let resumptionRecord = client.findResumptionRecordByNodeId(peerNodeId);
        if (resumptionRecord !== undefined) {
            const { sharedSecret, resumptionId } = resumptionRecord;
            const resumeKey = await Crypto.hkdf(sharedSecret, ByteArray.concat(random, resumptionId), KDFSR1_KEY_INFO);
            const resumeMic = Crypto.encrypt(resumeKey, new ByteArray(0), RESUME1_MIC_NONCE);
            sigma1Bytes = await messenger.sendSigma1({
                sessionId,
                destinationId: fabric.getDestinationId(peerNodeId, random),
                ecdhPublicKey,
                random,
                resumptionId,
                resumeMic,
            });
        } else {
            sigma1Bytes = await messenger.sendSigma1({
                sessionId,
                destinationId: fabric.getDestinationId(peerNodeId, random),
                ecdhPublicKey,
                random,
            });
        }

        let secureSession;
        const { sigma2Bytes, sigma2, sigma2Resume } = await messenger.readSigma2();
        if (sigma2Resume !== undefined) {
            // Process sigma2 resume
            if (resumptionRecord === undefined) throw new UnexpectedDataError("Received an unexpected sigma2Resume.");
            const { sharedSecret, fabric, sessionParameters: resumptionSessionParams } = resumptionRecord;
            const { sessionId: peerSessionId, resumptionId, resumeMic } = sigma2Resume;

            const sessionParameters = {
                ...exchange.session.getSessionParameters(),
                ...(resumptionSessionParams ?? {}),
            };

            const resumeSalt = ByteArray.concat(random, resumptionId);
            const resumeKey = await Crypto.hkdf(sharedSecret, resumeSalt, KDFSR2_KEY_INFO);
            Crypto.decrypt(resumeKey, resumeMic, RESUME2_MIC_NONCE);

            const secureSessionSalt = ByteArray.concat(random, resumptionRecord.resumptionId);
            secureSession = await client.sessionManager.createSecureSession({
                sessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: true,
                isResumption: true,
                sessionParameters,
            });
            await messenger.sendSuccess();
            logger.info(`Case client: session resumed with ${messenger.getChannelName()}`);

            resumptionRecord.resumptionId = resumptionId; /* update resumptionId */
            resumptionRecord.sessionParameters = secureSession.getSessionParameters(); /* update mrpParams */
        } else {
            // Process sigma2
            const {
                ecdhPublicKey: peerEcdhPublicKey,
                encrypted: peerEncrypted,
                random: peerRandom,
                sessionId: peerSessionId,
                sessionParams: sigma2SessionParams,
            } = sigma2;
            const sessionParameters = {
                ...exchange.session.getSessionParameters(),
                ...(sigma2SessionParams ?? {}),
            };
            const sharedSecret = Crypto.ecdhGenerateSecret(peerEcdhPublicKey, ecdh);
            const sigma2Salt = ByteArray.concat(
                operationalIdentityProtectionKey,
                peerRandom,
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
                peerEcdhPublicKey: ecdhPublicKey,
            });
            const {
                ellipticCurvePublicKey: peerPublicKey,
                subject: { nodeId: peerNodeIdCert },
            } = TlvOperationalCertificate.decode(peerNewOpCert);

            if (peerNodeIdCert !== peerNodeId) {
                throw new UnexpectedDataError(
                    "The node ID in the peer certificate doesn't match the expected peer node ID",
                );
            }

            // TODO also verify:
            //  * FabricId matches
            //  * If an ICAC is present, and it contains a Fabric ID in its subject, then it SHALL match the FabricID in
            //    the NOC leaf certificate.
            //  * The certificate chain SHALL chain back to the Trusted Root CA Certificate TrustedRCAC whose public key
            //    was used in the computation of the Destination Identifier when generating Sigma1.
            //  * All the elements in the certificate chain SHALL respect the Matter Certificate DN Encoding Rules,
            //    including range checks for identifiers such as Fabric ID and Node ID.
            //  * verify certificate chain of TBEData2.responderNOC (incl. ICAC if present)

            Crypto.verify(PublicKey(peerPublicKey), peerSignatureData, peerSignature);

            // Generate and send sigma3
            const sigma3Salt = ByteArray.concat(
                operationalIdentityProtectionKey,
                Crypto.hash([sigma1Bytes, sigma2Bytes]),
            );
            const sigma3Key = await Crypto.hkdf(sharedSecret, sigma3Salt, KDFSR3_INFO);
            const signatureData = TlvSignedData.encode({
                nodeOpCert,
                intermediateCACert,
                ecdhPublicKey,
                peerEcdhPublicKey,
            });
            const signature = fabric.sign(signatureData);
            const encryptedData = TlvEncryptedDataSigma3.encode({ nodeOpCert, intermediateCACert, signature });
            const encrypted = Crypto.encrypt(sigma3Key, encryptedData, TBE_DATA3_NONCE);
            const sigma3Bytes = await messenger.sendSigma3({ encrypted });
            await messenger.waitForSuccess();

            // All good! Create secure session
            const secureSessionSalt = ByteArray.concat(
                operationalIdentityProtectionKey,
                Crypto.hash([sigma1Bytes, sigma2Bytes, sigma3Bytes]),
            );
            secureSession = await client.sessionManager.createSecureSession({
                sessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                salt: secureSessionSalt,
                isInitiator: true,
                isResumption: false,
                sessionParameters,
            });
            logger.info(`Case client: Paired successfully with ${messenger.getChannelName()}`);
            resumptionRecord = {
                fabric,
                peerNodeId,
                sharedSecret,
                resumptionId: peerResumptionId,
                sessionParameters: secureSession.getSessionParameters(),
            };
        }

        await messenger.close();
        client.saveResumptionRecord(resumptionRecord);

        return secureSession;
    }
}
