/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PaseServer } from "../../session/secure/PaseServer";
import { SecureChannelProtocol } from "../../session/secure/SecureChannelProtocol";
import { AdminCommissioningCluster } from "../AdminCommissioningCluster"
import { ClusterServerHandlers } from "./ClusterServer"

export const AdminCommissioningHandler: (secureChannelProtocol: SecureChannelProtocol) => ClusterServerHandlers<typeof AdminCommissioningCluster> = (secureChannelProtocol) => ({
    openCommissioningWindow: async function({ request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt, commissioningTimeout }, session, attributes: { windowStatus } }) {
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
