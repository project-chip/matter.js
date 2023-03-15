/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice";
import { PaseServer } from "../../session/secure/PaseServer";
import { SecureChannelProtocol } from "../../session/secure/SecureChannelProtocol";
import { Session } from "../../session/Session";
import { AdminCommissioningCluster, CommissioningWindowStatus } from "../AdminCommissioningCluster"
import { Attributes } from "../Cluster";
import { AttributeServers, ClusterServerHandlers } from "./ClusterServer"

export const AdminCommissioningHandler: (secureChannelProtocol: SecureChannelProtocol) => ClusterServerHandlers<typeof AdminCommissioningCluster> = (secureChannelProtocol) => ({
    openCommissioningWindow: async function ({ request: { pakePasscodeVerifier: pakeVerifier, discriminator, iterations, salt }, session, attributes: { windowStatus }}) {
        //windowStatus.set(CommissioningWindowStatus.EnhancedWindowOpen);
        secureChannelProtocol.updatePaseCommissioner(PaseServer.fromVerificationValue(pakeVerifier, { iterations, salt }));
        session.getContext().openCommissioningModeWindow(2, discriminator);
    },

    openBasicCommissioningWindow: async function ({}) {
        throw new Error("Not implemented");
    },

    revokeCommissioning: async function (args: { request: {}; attributes: AttributeServers<Attributes>; session: Session<MatterDevice>; }) {
        // TODO: implement this
        throw new Error("Not implemented");
    }
});
