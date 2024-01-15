/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterDevice } from "../../MatterDevice.js";
import { AccessLevel } from "../../cluster/Cluster.js";
import { TransactionalInteractionServer } from "../../node/server/TransactionalInteractionServer.js";
import { assertSecureSession } from "../../session/SecureSession.js";
import { Session } from "../../session/Session.js";
import { ActionContext } from "../ActionContext.js";

/**
 * Create an online {@link ActionContext} for Matter actions.
 */
export function ServerActionContext(
    fields: Partial<ActionContext>,
    session?: Session<MatterDevice>
): ActionContext {
    // TODO -ideally there'd be something more explicit here to indicate we're
    // operating without ACL enforcement but currently lower levels just omit
    // the session.
    //
    // I think read access is correct here
    if (!session) {
        return { session, accessLevel: AccessLevel.View }
    }

    assertSecureSession(session);

    // TODO - here too would be good to explicitly designate session as PASE
    // or something so we know fabric wasn't simply omitted by a bug or
    // something
    const fabric = session.getFabric();

    const transaction = fields.message
        ? TransactionalInteractionServer.transactionFor(fields.message)
        : undefined;

    return {
        ...fields,
        associatedFabric: fabric?.fabricIndex,
        session,
        transaction,

        // TODO - this effectively disables access level enforcement because we
        // don't have privilege management implemented yet
        accessLevel: AccessLevel.Administer,
    };
}
