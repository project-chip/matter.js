import { Network } from "@project-chip/matter.js/net";
import { StorageBackendMemory } from "@project-chip/matter.js/storage";
import * as assert from "assert";
import { spawn } from "child_process";
import { promises as fs } from "fs";
import { DeviceTestInstance } from "../src/DeviceTestInstance";
import * as LongRunningTests from "../src/suites-long/index.js";
import * as NormalTests from "../src/suites/index.js";

const CHIP_BIN_PATH = process.env.CHIP_BIN_PATH ?? `${__dirname}/../../../../bin`;

/**
 * Execute an external process and return a promise that resolves when the process exits.
 * For test interaction callbacks are support for commands and user prompts from the chip test suites.
 * Additionally, all "TOO" lines (from chip-tool) are collected and printed at the end of the test as summary.
 */
async function executeProcess(
    executable: string,
    params: string[] = [],
    cwd?: string,
    startedCallback?: () => Promise<void>,
    commandCallback?: (command: string, params: string[]) => Promise<void>,
    userPromptCallback?: (testDescription: string, userPrompt: string) => Promise<string>,
): Promise<void> {
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
                // TODO: Optimize to make sure we always have complete lines ... so maybe we need to buffer
                //       an incomplete "last line" or such
                const commandIndex = string.indexOf("@ChipTestRunner: Command: '");
                if (commandIndex !== -1 && commandCallback !== undefined) {
                    const commandEndIndex = string.indexOf("'", commandIndex + 27);
                    const command = string.substring(commandIndex + 27, commandEndIndex);
                    const params = string.substring(commandEndIndex + 2, string.indexOf("\n", commandEndIndex)).trim();
                    commandCallback(command, params.split(",")).catch(error => console.log(error)); // Verify Params when we get some real
                }
                if (string.includes("TOO")) {
                    const lines = string.match(/^(.*[[:]TOO[\]:].*)$/gm);
                    if (lines !== null && lines.length > 0) {
                        const userPromptLineIndex = lines.findIndex(line => line.includes(" USER_PROMPT: "));
                        const userPromptLine = lines[userPromptLineIndex];
                        if (userPromptLine !== undefined && userPromptCallback !== undefined) {
                            const userPromptPreviousLine =
                                lines[userPromptLineIndex - 1] ?? testResults[testResults.length - 1] ?? "";
                            const userPrompt = userPromptLine.substring(userPromptLine.indexOf("USER_PROMPT: ") + 13);
                            process.stdout.write(`====> Chip test Runner: Detected TH USER_PROMPT: ${userPrompt}\n`);
                            userPromptCallback(userPromptPreviousLine, userPrompt)
                                .then(answer => proc.stdin?.write(answer)) // We acknowledge the TH reads as checked
                                .catch(error => console.log(error));
                        }
                        testResults.push(...lines);
                    }
                }
            });
        });
        proc.stderr?.on("data", (data: Buffer) => process.stderr.write(data));

        proc.unref();
    }
    if (startedCallback !== undefined) {
        await startedCallback();
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
        ["tests", testName, "--PICS", `${__dirname}/../../../config/${picsFilename}`],
        CHIP_BIN_PATH,
        undefined,
        commandCallback,
        userPromptCallback,
    );

    /*
    await executeProcess(
        "bash",
        [
            "-c",
            `"source .environment/activate.sh && ./scripts/tests/yaml/chiptool.py tests ${testName} chiptool --PICS ${__dirname}/config/${picsFilename}"`,
        ],
        "/Users/ingof/Dev/matter/connectedhomeip",
        undefined,
        commandCallback,
        userPromptCallback,
    );*/
}

async function clearChipToolStorage() {
    process.stdout.write(`====> Chip test Runner: Cleanup /tmp/chip* for a new Test\n`);
    try {
        await executeProcess("rm", ["/tmp/chip*"]);
    } catch {
        // ignore for now, nothing to cleanup
    }
}

/** Wrapper method to initially clean up and pair the test device with chip-tool to prepare testing. */
async function pairWithChipTool(startedCallback?: () => Promise<void>) {
    await clearChipToolStorage();

    process.stdout.write(`====> Chip test Runner: Pairing with Chip-Tool\n`);

    await executeProcess(
        "./chip-tool",
        ["pairing", "onnetwork", "305414945", "20202021"],
        CHIP_BIN_PATH,
        startedCallback,
    );
}

describe("Chip-Tool-Tests", () => {
    /** Add scripts to the chip-tool binary folder because needed for execution of some tests. */
    before(async () => {
        await fs.mkdir(`${CHIP_BIN_PATH}/src/app/tests/suites/commands/system/scripts`, { recursive: true });
        await executeProcess("cp", [
            `${__dirname}/../../../src/scripts/*`,
            `${CHIP_BIN_PATH}/src/app/tests/suites/commands/system/scripts/`,
        ]);
        await executeProcess("chmod", ["+x", `${CHIP_BIN_PATH}/src/app/tests/suites/commands/system/scripts/*`]);
    });

    let Tests = {} as any;
    if (process.env.LONG_TESTS_ONLY !== undefined) {
        Tests = LongRunningTests;
    } else if (process.env.INCLUDE_LONG_TESTS !== undefined) {
        Tests = { ...NormalTests, ...LongRunningTests };
    } else {
        Tests = NormalTests;
    }

    /** Collect and execute all tests that are exported from the suites folder. */
    for (const suiteName in Tests) {
        if (process.env.LIMIT_TESTS !== undefined) {
            const limitTests = process.env.LIMIT_TESTS;
            const isWildcard = limitTests.endsWith("*");
            if (
                (isWildcard && !suiteName.startsWith(limitTests.substring(0, limitTests.length - 2))) ||
                (!isWildcard && suiteName !== limitTests)
            ) {
                continue;
            }
        }
        describe(suiteName, () => {
            const suite = Tests[suiteName];
            const storage = new StorageBackendMemory();
            const testInstance = new suite(storage) as DeviceTestInstance;

            it(`"${suiteName}": Setup test instance`, async () =>
                await assert.doesNotReject(async () => await testInstance.setup())).timeout(5000);

            it(`"${suiteName}": Start chip-tool and test instance for initial pairing`, async () =>
                await assert.doesNotReject(
                    async () => await pairWithChipTool(async () => await testInstance.start()),
                )).timeout(30000);

            it(`"${suiteName}": Execute tests`, async () =>
                await assert.doesNotReject(
                    async () =>
                        await executeChipToolTest(
                            testInstance.testName,
                            testInstance.PICSConfig,
                            (command, params) => testInstance.handleCommand(command, params),
                            async (testDescription, userPrompt) =>
                                testInstance.handleUserprompt(testDescription, userPrompt),
                        ),
                )).timeout(suiteName in LongRunningTests ? 1200000 : 120000);

            after(async () => await assert.doesNotReject(async () => await testInstance.stop()));
        });
    }

    after(async () => {
        await Network.get().close();
    });
});
