/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Domain } from "#domain.js";
import { IncompleteError } from "#errors.js";
import { Diagnostic, LogFormat } from "#general";
import { isCommand } from "#parser.js";
import colors from "ansi-colors";
import { homedir } from "os";
import { join } from "path";
import { AsyncCompleter, CompleterResult } from "readline";
import { Recoverable, REPLEval, REPLServer, start } from "repl";
import "./commands/index.js";
import "./providers/index.js";

// Node.js repl implementation does good stuff for us so want to keep it but we don't want the "." commands and it has
// no way to disable those.  So use this prefix as a hack to prevent it from noticing lines that start with "."
const LINE_PROTECTOR_CHAR = "\u0001";

export async function repl() {
    const domain = Domain();

    let server: REPLServer | undefined = undefined;

    const doEval: REPLEval = function (this, evalCmd, _context, _file, cb: (err: Error | null, result: any) => void) {
        // See comment below r.e. "realEmit".  We can't just strip first character because the line protector will
        // appear multiple times if there are multiple lines
        evalCmd = evalCmd.replace(new RegExp(LINE_PROTECTOR_CHAR, "g"), "");

        if (evalCmd.endsWith("\n")) {
            evalCmd = evalCmd.slice(0, evalCmd.length - 1);
        }
        const result: Promise<unknown> = domain.execute(evalCmd);
        result.then(handleSuccess, handleError);

        function handleSuccess(result: unknown) {
            server?.setPrompt(createPrompt());
            cb(null, result);
        }

        function handleError(error: Error) {
            server?.setPrompt(createPrompt());

            if (error.constructor.name === "IncompleteError") {
                cb(new Recoverable((error as IncompleteError).cause as Error), undefined);
                return;
            }

            // Stack frames following our special matter-cli-* "filenames" are just cruft.  And if the first filename
            // then just remove the stack and place location at end of message
            const stack = error.stack;
            if (stack !== undefined) {
                const lines = stack.split("\n");
                let specialLoc: string | undefined;
                let specialLine;
                if ("isCliError" in error) {
                    // These are thrown at the top level and should not display a stack trace
                    specialLine = 1;
                } else {
                    // Look for the "matter-cli-" marker which we prefix on the "filename"
                    specialLine = lines.findIndex(line => {
                        const match = line.match(/at matter-cli-(?:[a-z]+):([0-9]+:[0-9]+)?/);
                        if (match) {
                            specialLoc = match[1];
                            return true;
                        }
                    });
                }

                if (specialLine === 1) {
                    if (specialLoc) {
                        error.message += ` (${specialLoc})`;
                    }
                    error.stack = `${error.constructor.name}: ${error.message}`;
                } else if (specialLine !== -1) {
                    error.stack = lines.slice(0, specialLine + 1).join("\n");
                }
            }

            // Display the error ourselves so is pretty and captures all details
            const diagnostic = Diagnostic.error(error);
            const formatted = LogFormat[colors.enabled ? "ansi" : "plain"](diagnostic);
            process.stderr.write(`${formatted}\n`);

            // Do not report the error to node
            cb(null, undefined);
        }
    };

    server = start({
        prompt: createPrompt(),
        eval: doEval,
        ignoreUndefined: true,
    });

    const historyPath = process.env.MATTER_REPL_HISTORY || join(homedir(), ".matter-cli-history");
    server.setupHistory(historyPath, error => {
        if (error) {
            console.error(error);
            process.exit(1);
        }
    });

    const realEmit = server.emit as (...args: unknown[]) => boolean;
    server.emit = (event, ...args: any[]) => {
        if (event === "line") {
            args[0] = `${LINE_PROTECTOR_CHAR}${args[0]}`;
        }
        return realEmit.call(server, event, ...args);
    };

    const complete: AsyncCompleter = (line, callback) => {
        findCompletions(line).then(result => {
            if (result) {
                callback(null, result);
            } else {
                nodeCompleter.call(server, line, callback);
            }
        }, callback);
    };

    const nodeCompleter = server.completer;
    Object.defineProperty(server, "completer", { value: complete });

    function createPrompt() {
        return `${colors.dim("matter")} ${colors.yellow(domain.location.path)} ❯ `;
    }

    async function findCompletions(line: string): Promise<undefined | CompleterResult> {
        if (line.endsWith("/") ? !isCommand(line.slice(0, line.length - 1)) : !isCommand(line)) {
            return;
        }

        const possiblePath = line.replace(/^.*\s/u, "");
        if (!possiblePath.match(/^[/0-9\p{L}$_%]*$/u)) {
            return;
        }

        const pathsToSearch = Array<string>();

        const slashPos = possiblePath.lastIndexOf("/");
        let partial;
        if (slashPos === -1) {
            pathsToSearch.push("");
            pathsToSearch.push("/bin");
            partial = possiblePath;
        } else {
            pathsToSearch.push(possiblePath.slice(0, slashPos));
            partial = possiblePath.slice(slashPos + 1);
        }

        const completions = Array<string>();

        for (const path of pathsToSearch) {
            const location = await domain.location.maybeAt(path);
            if (location?.kind !== "directory") {
                continue;
            }

            completions.push(...(await location.paths).filter(path => path.startsWith(partial)));
        }

        return [completions.sort(), partial];
    }
}
