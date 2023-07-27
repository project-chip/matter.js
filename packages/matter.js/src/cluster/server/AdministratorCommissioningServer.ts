/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdministratorCommissioningCluster } from "../definitions/AdministratorCommissioningCluster.js"
import { ClusterServerHandlers } from "./ClusterServer.js"
import { PaseServer } from "../../session/pase/PaseServer.js";
import { SecureChannelProtocol } from "../../protocol/securechannel/SecureChannelProtocol.js";

export const AdministratorCommissioningHandler: (secureChannelProtocol: SecureChannelProtocol) => ClusterServerHandlers<typeof AdministratorCommissioningCluster> = (secureChannelProtocol) => ({
    openCommissioningWindow: async function({ request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt, commissioningTimeout }, session, /* attributes: { windowStatus } */ }) {
        //windowStatus.set(CommissioningWindowStatus.EnhancedWindowOpen);
        secureChannelProtocol.updatePaseCommissioner(PaseServer.fromVerificationValue(pakeVerifier, { iterations, salt }));
        session.getContext().openCommissioningModeWindow(2, discriminator, commissioningTimeout);
    },

    openBasicCommissioningWindow: async function() {
        throw new Error("Not implemented");
    },

    revokeCommissioning: async function() {
        // TODO: implement this
        throw new Error("Not implemented");
    }
});
