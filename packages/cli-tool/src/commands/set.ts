/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvalidArgumentError, TooManyArgsError } from "#errors.js";
import { bin } from "#globals.js";
import { Environment, VariableService } from "@matter/general";

bin.set = function (keyOrAssignment: unknown, value: unknown) {
    switch (arguments.length) {
        case 0:
            return Environment.default.vars.vars;

        case 1:
            const assignment = `${keyOrAssignment}`;
            const equalPos = assignment.indexOf("=");
            if (equalPos === -1) {
                throw new InvalidArgumentError(`Invalid argument: parameter must be of the form key=value`);
            }
            Environment.default.vars.set(assignment.slice(0, equalPos), assignment.slice(equalPos + 1));
            break;

        case 2:
            Environment.default.vars.set(`${keyOrAssignment}`, value as VariableService.Value);
            break;

        default:
            throw new TooManyArgsError("set");
    }
};
