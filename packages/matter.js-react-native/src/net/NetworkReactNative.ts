/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import dgram from "react-native-udp";

// @ts-expect-error globalThis is no index structure
global.dgram = dgram;

import { NetworkNode } from "@project-chip/matter-node.js/net";

export class NetworkReactNative extends NetworkNode {}
