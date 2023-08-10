/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterFlowError, NotImplementedError } from "../../common/MatterError.js";
import { MatterDevice } from "../../MatterDevice.js";
import { SecureChannelProtocol } from "../../protocol/securechannel/SecureChannelProtocol.js";
import { PaseServer } from "../../session/pase/PaseServer.js";
import { Session } from "../../session/Session.js";
import { ByteArray } from "../../util/ByteArray.js";
import { AdministratorCommissioning } from "../definitions/AdministratorCommissioningCluster.js";
import { ClusterServerHandlers } from "./ClusterServerTypes.js";

async function openCommissioningWindow(
    secureChannelProtocol: SecureChannelProtocol,
    pakeVerifier: ByteArray,
    discriminator: number,
    iterations: number,
    salt: ByteArray,
    commissioningTimeout: number,
    session: Session<MatterDevice>,
) {
    //windowStatus.set(CommissioningWindowStatus.EnhancedWindowOpen);
    secureChannelProtocol.updatePaseCommissioner(PaseServer.fromVerificationValue(pakeVerifier, { iterations, salt }));
    await session.getContext().openCommissioningModeWindow(2, discriminator, commissioningTimeout);
}

function revokeCommissioning() {
    // TODO: implement this
    throw new NotImplementedError("Not implemented");
}

export const AdministratorCommissioningHandler: (
    secureChannelProtocol: SecureChannelProtocol,
) => ClusterServerHandlers<typeof AdministratorCommissioning.Cluster> = secureChannelProtocol => ({
    openCommissioningWindow: async function ({
        request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt, commissioningTimeout },
        session /* attributes: { windowStatus } */,
    }) {
        await openCommissioningWindow(
            secureChannelProtocol,
            pakeVerifier,
            discriminator,
            iterations,
            salt,
            commissioningTimeout,
            session,
        );
    },

    revokeCommissioning: async function () {
        revokeCommissioning();
    },
});

const Cluster = AdministratorCommissioning.Cluster.with("Basic");
export const BasicAdminCommissioningHandler: (
    secureChannelProtocol: SecureChannelProtocol,
) => ClusterServerHandlers<typeof Cluster> = secureChannelProtocol => ({
    openCommissioningWindow: async function ({
        request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt, commissioningTimeout },
        session /* attributes: { windowStatus } */,
    }) {
        await openCommissioningWindow(
            secureChannelProtocol,
            pakeVerifier,
            discriminator,
            iterations,
            salt,
            commissioningTimeout,
            session,
        );
    },

    revokeCommissioning: async function () {
        revokeCommissioning();
    },

    openBasicCommissioningWindow: async function ({
        request: { commissioningTimeout },
        session /* attributes: { windowStatus } */,
    }) {
        const device = session.getContext();
        if (device.getFabrics().length > 0) {
            throw new MatterFlowError("Already commissioned"); // is that correct?
        }
        await session.getContext().openCommissioningModeWindow(1, undefined, commissioningTimeout);
    },
});
