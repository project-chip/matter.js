/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "@matter/general";
import { ReactNativeEnvironment } from "./ReactNativeEnvironment.js";

// Mainly import TextEncoder and TextDecoder polyfill
// @ts-expect-error No types but all fine
import { polyfill } from "react-native-polyfill-globals/src/encoding";

polyfill();

Environment.default = ReactNativeEnvironment();
