/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { VariableService } from "#general";
import { Command } from "./command.js";

Command({
    usage: ["", "KEY=VALUE", "KEY VALUE"],
    description:
        'Set or display environment variables.  matter.js defines variables in a hierarchy with "." as a delimiter.  Variables persist across restarts.',
    maxArgs: 2,

    invoke: async function set(args) {
        switch (args.length) {
            case 0:
                return this.env.vars.vars;

            case 1:
                const assignment = `${args[0]}`;
                const equalPos = assignment.indexOf("=");
                if (equalPos === -1) {
                    this.err("Invalid argument: parameter must be of the form key=value");
                }
                await this.env.vars.persist(assignment.slice(0, equalPos), assignment.slice(equalPos + 1));
                break;

            case 2:
                await this.env.vars.persist(`${args[0]}`, args[1] as VariableService.Value);
                break;
        }
    },
});
