import { Network } from "@project-chip/matter.js/net";
import { StorageBackendMemory, StorageManager } from "@project-chip/matter.js/storage";
import { spawn } from "child_process";
import { promises as fs } from "fs";
import { DeviceTestInstance } from "./DeviceTestInstance";
import * as Tests from "./suites/index.js";

const CHIP_BIN_PATH = process.env.CHIP_BIN_PATH ?? `${__dirname}/../../../bin`;

/**
 * Execute an external process and return a promise that resolves when the process exits.
 * For test interaction callbacks are support for commands and user prompts from the chip test suites.
 * Additionally, all "TOO" lines (from chip-tool) are collected and printed at the end of the test as summary.
 */
function executeProcess(
    executable: string,
    params: string[] = [],
    cwd?: string,
    commandCallback?: (command: string, params: string[]) => Promise<void>,
    userPromptCallback?: (testDescription: string, userPrompt: string) => Promise<string>,
): Promise<void> {
    try {
        const proc = spawn(executable, params, {
            shell: true,
            cwd,
            stdio: commandCallback !== undefined ? undefined : "inherit",
        });

        const testResults = new Array<string>();
        if (commandCallback !== undefined || userPromptCallback !== undefined) {
            proc.stdout?.on("data", (data: Buffer) => {
                process.stdout.write(data);
                setImmediate(() => {
                    const string = data.toString();
                    const commandIndex = string.indexOf("@ChipTestRunner: Command: '");
                    if (commandIndex !== -1 && commandCallback !== undefined) {
                        const commandEndIndex = string.indexOf("'", commandIndex + 27);
                        const command = string.substring(commandIndex + 27, commandEndIndex);
                        const params = string
                            .substring(commandEndIndex + 2, string.indexOf("\n", commandEndIndex))
                            .trim();
                        void commandCallback(command, params.split(",")); // Verify Params when we get some real
                    }
                    if (string.includes("[TOO]")) {
                        const lines = string.match(/^(.*\[TOO\].*)$/gm);
                        if (lines !== null && lines.length > 0) {
                            const userPromptLineIndex = lines.findIndex(line => line.includes("[TOO] USER_PROMPT"));
                            const userPromptLine = lines[userPromptLineIndex];
                            if (userPromptLine !== undefined && userPromptCallback !== undefined) {
                                const userPromptPreviousLine =
                                    lines[userPromptLineIndex - 1] ?? testResults[testResults.length - 1] ?? "";
                                const userPrompt = userPromptLine.substring(
                                    userPromptLine.indexOf("USER_PROMPT: ") + 13,
                                );
                                process.stdout.write(
                                    `====> Chip test Runner: Detected TH USER_PROMPT: ${userPrompt}\n`,
                                );
                                userPromptCallback(userPrompt, userPromptPreviousLine)
                                    .then(answer => proc.stdin?.write(answer)) // We acknowledge the TH reads as checked
                                    .catch(e => console.log(e));
                            }
                            testResults.push(...lines);
                        }
                    }
                });
            });
            proc.stderr?.on("data", (data: Buffer) => process.stderr.write(data));

            proc.unref();
        }

        return new Promise<void>((resolve, reject) => {
            proc.on("close", (code: number) => {
                process.stdout.write(
                    `====> Chip test Runner: process execution of "${executable} ${params.join(
                        " ",
                    )}" ended with code ${code}\n`,
                );
                if (testResults.length > 0) {
                    process.stdout.write(`====> Chip test Runner: TOO Test summary:\n`);
                    testResults.forEach(line => process.stdout.write(`====> Chip test Runner: TOO: ${line}\n`));
                }
                if (code !== 0 && code !== null) {
                    reject(`process ${executable} exited with code ${code}`);
                } else {
                    resolve();
                }
            });
        });
    } catch (e) {
        return Promise.reject(e);
    }
}

/** Wrapper method to execute a chip tool test with the correct parameters. */
async function executeChipToolTest(
    testName: string,
    picsFilename: string,
    commandCallback?: (command: string, params: string[]) => Promise<void>,
    userPromptCallback?: (testDescription: string, userPrompt: string) => Promise<string>,
) {
    process.stdout.write(
        `====> Chip test Runner: Executing Chip-Tool Testsuite "${testName}" with PICS config ${picsFilename}\n`,
    );
    await executeProcess(
        "./chip-tool",
        ["tests", testName, "--PICS", `${__dirname}/config/${picsFilename}`],
        CHIP_BIN_PATH,
        commandCallback,
        userPromptCallback,
    );
}

/** Wrapper method to initially clean up and pair the test device with chip-tool to prepare testing. */
async function pairWithChipTool() {
    process.stdout.write(`====> Chip test Runner: Cleanup /tmp/chip* for a new Test\n`);
    try {
        await executeProcess("rm", ["/tmp/chip_*"]);
    } catch {
        // ignore for now, nothing to cleanup
    }

    process.stdout.write(`====> Chip test Runner: Pairing with Chip-Tool\n`);

    await executeProcess("./chip-tool", ["pairing", "onnetwork", "305414945", "20202021"], CHIP_BIN_PATH);
}

describe("Chip-Tool-Tests", () => {
    const storage = new StorageBackendMemory();
    const storageManager = new StorageManager(storage);
    void storageManager.initialize(); // hacky but works

    /** Add scripts to the chip-tool binary folder because needed for execution of some tests. */
    beforeAll(async () => {
        await fs.mkdir(`${CHIP_BIN_PATH}/src/app/tests/suites/commands/system/scripts`, { recursive: true });
        await executeProcess("cp", [
            `${__dirname}/scripts/*`,
            `${CHIP_BIN_PATH}/src/app/tests/suites/commands/system/scripts/`,
        ]);
        await executeProcess("chmod", ["+x", `${CHIP_BIN_PATH}/src/app/tests/suites/commands/system/scripts/*`]);
    });

    /** Collect and execute all tests that are exported from the suites folder. */
    for (const suiteName in Tests) {
        describe(suiteName, () => {
            const suite = (Tests as any)[suiteName];
            const testInstance = new suite(storageManager) as DeviceTestInstance;

            it(`"${suiteName}": Setup test instance`, async () => await testInstance.setup());

            it(`${suiteName}": Start test instance`, async () => await testInstance.start());

            it(`${suiteName}": Pair with chip-tool`, async () => await pairWithChipTool(), 30000);

            it(
                `Execute "{suiteName}" Tests`,
                async () =>
                    await executeChipToolTest(
                        testInstance.testName,
                        testInstance.PICSConfig,
                        (command, params) => testInstance.handleCommand(command, params),
                        async (testDescription, userPrompt) =>
                            testInstance.handleUserprompt(testDescription, userPrompt),
                    ),
                120000,
            );

            afterAll(async () => {
                await testInstance.stop();
                await new Promise(resolve => setTimeout(resolve, 2000)); //Add a short delay
            });
        });
    }

    afterAll(async () => {
        Network.get().close();
    });
});
