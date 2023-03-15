/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { execSync } from "child_process";

const commandArguments = process.argv.slice(2);

export function getParameter(name: string) {
    const markerIndex = commandArguments.indexOf(`-${name}`);
    if (markerIndex === -1 || markerIndex + 1 === commandArguments.length) return undefined;
    return commandArguments[markerIndex + 1];
}

export function getIntParameter(name: string) {
    const value = getParameter(name);
    if (value === undefined) return undefined;
    return parseInt(value);
}

export function commandExecutor(scriptParamName: string) {
    const script = getParameter(scriptParamName);
    if (script === undefined) return undefined;
    return () => console.log(`${scriptParamName}: ${execSync(script).toString().slice(0, -1)}`);
}