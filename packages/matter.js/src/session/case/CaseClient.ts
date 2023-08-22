/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvOperationalCertificate } from "../../certificate/CertificateManager.js";
import { UnexpectedDataError } from "../../common/MatterError.js";
import { Crypto } from "../../crypto/Crypto.js";
import { PublicKey } from "../../crypto/Key.js";
import { NodeId } from "../../datatype/NodeId.js";
import { Fabric } from "../../fabric/Fabric.js";
import { Logger } from "../../log/Logger.js";
import { MatterController } from "../../MatterController.js";
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
        const sessionId = client.getNextAvailableSessionId();
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
            const { sharedSecret, fabric } = resumptionRecord;
            const { sessionId: peerSessionId, resumptionId, resumeMic } = sigma2Resume;

            const resumeSalt = ByteArray.concat(random, resumptionId);
            const resumeKey = await Crypto.hkdf(sharedSecret, resumeSalt, KDFSR2_KEY_INFO);
            Crypto.decrypt(resumeKey, resumeMic, RESUME2_MIC_NONCE);

            const secureSessionSalt = ByteArray.concat(random, resumptionRecord.resumptionId);
            secureSession = await client.createSecureSession(
                sessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                secureSessionSalt,
                true,
                true,
            );
            await messenger.sendSuccess();
            logger.info(`Case client: session resumed with ${messenger.getChannelName()}`);

            resumptionRecord.resumptionId = resumptionId; /* update resumptionId */
        } else {
            // Process sigma2
            const {
                ecdhPublicKey: peerEcdhPublicKey,
                encrypted: peerEncrypted,
                random: peerRandom,
                sessionId: peerSessionId,
            } = sigma2;
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
            if (peerNodeIdCert !== peerNodeId)
                throw new UnexpectedDataError(
                    "The node ID in the peer certificate doesn't match the expected peer node ID",
                );
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
            secureSession = await client.createSecureSession(
                sessionId,
                fabric,
                peerNodeId,
                peerSessionId,
                sharedSecret,
                secureSessionSalt,
                true,
                false,
            );
            logger.info(`Case client: Paired succesfully with ${messenger.getChannelName()}`);
            resumptionRecord = { fabric, peerNodeId, sharedSecret, resumptionId: peerResumptionId };
        }

        await messenger.close();
        client.saveResumptionRecord(resumptionRecord);

        return secureSession;
    }
}
