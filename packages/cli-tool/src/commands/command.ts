/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain } from "#domain.js";
import { FormattedText, ImplementationError, MaybePromise } from "#general";
import { bin } from "#globals.js";
import colors from "ansi-colors";

export interface CommandDefinition {
    invoke: (this: Domain, args: unknown[], flags: Record<string, boolean>) => MaybePromise<unknown>;
    usage?: string | string[];
    description: string;
    flagArgs?: Record<string, string>;
    minArgs?: number;
    maxArgs?: number;
    aliases?: string[];
}

export function Command({
    invoke: doInvoke,
    usage,
    description,
    flagArgs,
    minArgs,
    maxArgs,
    aliases,
}: CommandDefinition) {
    function help(domain: Domain) {
        const flagDetails = [
            ...Object.entries(flagArgs ?? {}).map(([k, v]) => [k.length > 1 ? `--${k}` : `-${k}`, v]),
            ["--help", "Show this help"],
        ];

        const maxArgWidth = Math.max(...flagDetails.map(([arg]) => arg.length));
        const argNameWidth = maxArgWidth + 4;
        const argDetailWidth = domain.terminalWidth - argNameWidth;

        const argHelp = flagDetails.map(([arg, description]) => {
            arg = colors.blue(arg.padEnd(maxArgWidth));
            description = FormattedText(description, argDetailWidth).join("\n").replace(/\n/g, "".padEnd(maxArgWidth));
            return `  ${arg}  ${description}`;
        });

        let usageStr;
        const name = colors.blue(doInvoke.name);
        switch (typeof usage) {
            case "object":
                usageStr = ["", ...usage.map(str => `${name}${str ? ` ${str}` : ""}`)].join("\n  ");
                break;

            case "string":
                usageStr = ` ${name} ${usage}`;
                break;

            default:
                usageStr = ` ${name}`;
                break;
        }

        domain.out(
            [
                `\n${colors.bold("Usage:")}${usageStr}`,
                "",
                ...FormattedText(description, domain.terminalWidth),
                "",
                ...argHelp,
            ].join("\n"),
            "\n\n",
        );
    }

    const { name } = doInvoke;
    const command = function invoke(this: { domain: Domain }, ...args: unknown[]) {
        const domain = this.domain;
        if (!domain?.isDomain) {
            throw new ImplementationError(`Domain command ${name} invoked without bin scope`);
        }

        const otherArgs = Array<unknown>();
        const flags = {} as Record<string, boolean>;

        for (const arg of args) {
            if (typeof arg !== "string" || !arg.startsWith("-")) {
                otherArgs.push(arg);
                continue;
            }

            if (!flagArgs) {
                domain.err(`Invalid argumetn: ${arg}\n`);
                return;
            }

            if (arg[1] === "-") {
                const name = arg.slice(2);

                if (name === "help") {
                    help(domain);
                    return;
                }

                if (!(name in flagArgs)) {
                    domain.err(`Invalid argument: ${arg}\n`);
                    return;
                }

                flags[name] = true;
                continue;
            }

            for (const name of arg.slice(1).split("")) {
                if (!(name in flagArgs)) {
                    domain.err(`Invalid argument: ${arg}\n`);
                    return;
                }

                if (!(name in flagArgs)) {
                    domain.err(`Invalid argument: ${arg}\n`);
                    return;
                }

                flags[name] = true;
            }
        }

        if (minArgs !== undefined && minArgs < args.length) {
            domain.err(`Too few arguments\n`);
            return;
        }

        if (maxArgs !== undefined && maxArgs < args.length) {
            domain.err(`Too many arguments\n`);
            return;
        }

        return doInvoke.call(domain, otherArgs, flags);
    };

    command.help = help;

    bin[name] = command;

    if (aliases) {
        for (const alias of aliases) {
            bin[alias] = command;
        }
    }
}
