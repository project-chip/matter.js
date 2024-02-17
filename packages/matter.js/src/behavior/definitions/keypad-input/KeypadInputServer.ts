/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { KeypadInputBehavior } from "./KeypadInputBehavior.js";

const Base = KeypadInputBehavior.with("NavigationKeyCodes", "LocationKeys", "NumberKeys");

/**
 * This is the default server implementation of KeypadInputBehavior.
 *
 * This implementation includes all features of KeypadInput.Cluster. You should use KeypadInputServer.with to
 * specialize the class for the features your implementation supports.
 */
export class KeypadInputServer extends Base {
}
