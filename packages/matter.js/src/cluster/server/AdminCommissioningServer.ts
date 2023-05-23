/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdminCommissioningCluster } from "../AdminCommissioningCluster.js"
import { ClusterServerHandlers } from "./ClusterServer.js"
import { PaseServer } from "../../session/pase/PaseServer.js";
import { SecureChannelProtocol } from "../../protocol/securechannel/SecureChannelProtocol.js";
import { UnsupportedCommandError } from "./CommandServer.js";

export const AdminCommissioningHandler: (secureChannelProtocol: SecureChannelProtocol) => ClusterServerHandlers<typeof AdminCommissioningCluster> = (secureChannelProtocol) => ({
    openCommissioningWindow: async function({ request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt, commissioningTimeout }, session, /* attributes: { windowStatus } */ }) {
        //windowStatus.set(CommissioningWindowStatus.EnhancedWindowOpen);
        secureChannelProtocol.updatePaseCommissioner(PaseServer.fromVerificationValue(pakeVerifier, { iterations, salt }));
        session.getContext().openCommissioningModeWindow(2, discriminator, commissioningTimeout);
    },

    openBasicCommissioningWindow: async function() {
        throw new UnsupportedCommandError();
    },

    revokeCommissioning: async function() {
        // TODO: implement this
        throw new UnsupportedCommandError();
    }
});
