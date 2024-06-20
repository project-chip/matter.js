/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { install } from "react-native-quick-crypto";

install(); // Install the react-native crypto module

import { CryptoNode } from "@project-chip/matter-node.js/crypto";

export class CryptoReactNative extends CryptoNode {}
