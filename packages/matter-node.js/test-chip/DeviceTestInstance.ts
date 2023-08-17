// eslint-disable-next-line no-restricted-imports
import { CommissioningServer, MatterServer } from "../src/export";

import { StorageManager } from "@project-chip/matter.js/storage";

/** Base class for all chip tool test instances */
export abstract class DeviceTestInstance {
    matterServer: MatterServer | undefined;

    constructor(
        public testName: string,
        public PICSConfig: string,
        public storageManager: StorageManager,
    ) {}

    /** Set up the test instance MatterServer. */
    async setup() {
        this.matterServer = new MatterServer(this.storageManager);

        this.matterServer.addCommissioningServer(await this.setupCommissioningServer());

        process.stdout.write(`====> Chip test Runner "${this.testName}": Setup done\n`);
    }

    /** Set up the test instance CommissioningServer. Needs to be implemented per test. */
    abstract setupCommissioningServer(): Promise<CommissioningServer>;

    /** Start the test instance MatterServer with the included device. */
    async start() {
        if (!this.matterServer) throw new Error("matterServer not initialized");
        await this.matterServer.start();
        process.stdout.write(`====> Chip test Runner "${this.testName}": Start instance\n`);
    }

    /** Stop the test instance MatterServer and the device. */
    async stop() {
        if (!this.matterServer) throw new Error("matterServer not initialized");
        await this.matterServer.close();
        this.matterServer = undefined;
        process.stdout.write(`====> Chip test Runner "${this.testName}": Stop instance\n`);
    }

    /** Handle a command from the chip-tool. */
    async handleCommand(command: string, params: string[]) {
        process.stdout.write(
            `====> Chip test Runner "${this.testName}": Command to handle ${command} with parameters: ${params.join(
                ",",
            )}\n`,
        );
        switch (command) {
            case "Reboot":
                await new Promise(resolve => setTimeout(resolve, 500));
                await this.stop();
                this.matterServer = undefined;
                process.stdout.write(`====> Chip test Runner "${this.testName}": Instance stopped for reboot ...\n`);
                await new Promise(resolve => setTimeout(resolve, 2000));
                process.stdout.write(`====> Chip test Runner "${this.testName}": Restart instance now ...\n`);
                await this.setup();
                await this.start();
                process.stdout.write(`====> Chip test Runner "${this.testName}": Restart done\n`);
                break;
            default:
                throw new Error(`Test instance ${this.testName} do not know how to handle command "${command}"`);
        }
    }

    /** Handle a user prompt from the chip-tool. The response is the answer to give. */
    async handleUserprompt(userPrompt: string, testDescription: string): Promise<string> {
        if (testDescription.includes("TH reads")) {
            return "y\n"; // We acknowledge the TH reads as checked
        }
        throw new Error(
            `Test instance ${this.testName} do not know how to handle Userprompt ${testDescription} with prompt: ${userPrompt}`,
        );
    }
}
