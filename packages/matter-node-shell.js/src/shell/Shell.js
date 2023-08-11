/**
 * Copyright 2022 Project CHIP Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *  https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const readline = require('readline');
const { exec } = require("child_process");

/**
 * Class to process and dispatch shell commands.
 */
class Shell {
    /**
     * Construct a new Shell object.
     *
     * @param {string} prompt Prompt string to use for each command line.
     * @param {Array} commandList Array of JSON commands dispatch structures.
     */
    constructor(prompt, commandList) {
        this.prompt = prompt;
        this.commandList = commandList;
        this.configExecPassthrough = false
    }

    start() {
        const self = this;

        this.readline = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true,
            prompt: this.prompt,
        });
        this.readline.on('line', function (cmd) {
            self.onReadLine(cmd.trim());
        }).on('close', function () {
            process.stdout.write('goodbye\n');
            process.exit(0);
        });

        this.readline.prompt()
    }

    /**
     * Method to process a line of raw cli text input.
     *
     * @param {string} line
     */
    onReadLine(line) {
        var handled = 0;
        var err = -1;
        if (line) {
            var args = line.split(/\s+/);

            var entry = this.commandList.find(entry => entry['command'] == args[0])
            if (entry) {
                handled = 1
                err = entry['handler'](args)
            }
            if (!handled) {

                if (!this.configExecPassthrough) {
                    console.log("Error: command not found")
                } else {
                    // Pass unhandled commands through to underlying shell.
                    exec(line, (error, stdout, stderr) => {
                        err = error
                        console.log(`\n${stdout}`);
                        if (error) {
                            console.log(`error: ${error.message}`);
                            return;
                        }
                        if (stderr) {
                            console.log(`stderr: ${stderr}`);
                            return;
                        }
                        console.log((err) ? `Error ${err}` : "Done")
                        this.readline.prompt()
                    })
                }
            }
        }
        if (handled) {
            console.log((err) ? `Error ${err}` : "Done")
        }
        this.readline.prompt()
    }
}

module.exports = {
    Shell
}
