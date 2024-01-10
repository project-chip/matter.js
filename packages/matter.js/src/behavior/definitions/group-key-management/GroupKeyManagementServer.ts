/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { NotImplementedError } from "../../../common/MatterError.js";
import { GroupKeyManagementBehavior } from "./GroupKeyManagementBehavior.js";
import { KeySetReadAllIndicesResponse, KeySetReadResponse } from "./GroupKeyManagementInterface.js";

/**
 * This is the default server implementation of GroupKeyManagementBehavior.
 */
export class GroupKeyManagementServer extends GroupKeyManagementBehavior {
    override keySetWrite() {
        // TODO
        throw new NotImplementedError;
    }

    override keySetRead(): KeySetReadResponse {
        // TODO
        throw new NotImplementedError;
    }

    override keySetRemove() {
        // TODO
        throw new NotImplementedError;
    }

    override keySetReadAllIndices(): KeySetReadAllIndicesResponse {
        // TODO
        throw new NotImplementedError("Not implemented");
    }
}
