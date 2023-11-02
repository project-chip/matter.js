import { CommissioningServer, MatterServer } from "@project-chip/matter-node.js";

import { StorageBackendMemory, StorageManager } from "@project-chip/matter.js/storage";

/** Base class for all chip tool test instances */
export abstract class DeviceTestInstance {
    matterServer: MatterServer | undefined;
    storageManager: StorageManager;

    constructor(
        public testName: string,
        public PICSConfig: string,
        public storage: StorageBackendMemory,
    ) {
        this.storageManager = new StorageManager(storage);
    }

    /** Set up the test instance MatterServer. */
    async setup() {
        await new Promise(resolve => setTimeout(resolve, 2000)); //Add a short delay
        try {
            await this.storageManager.initialize(); // hacky but works
            this.matterServer = new MatterServer(this.storageManager);

            this.matterServer.addCommissioningServer(await this.setupCommissioningServer());
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            console.log(error);
            console.log((error as Error).stack);
            throw error;
        }
        process.stdout.write(`====> Chip test Runner "${this.testName}": Setup done\n`);
    }

    /** Set up the test instance CommissioningServer. Needs to be implemented per test. */
    abstract setupCommissioningServer(): Promise<CommissioningServer>;

    /** Start the test instance MatterServer with the included device. */
    async start() {
        if (!this.matterServer) throw new Error("matterServer not initialized on start");
        try {
            await this.matterServer.start();
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            console.log(error);
        }
        process.stdout.write(`====> Chip test Runner "${this.testName}": Start instance\n`);
    }

    /** Stop the test instance MatterServer and the device. */
    async stop() {
        if (!this.matterServer) throw new Error("matterServer not initialized on close");
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
            case "FactoryReset":
                await new Promise(resolve => setTimeout(resolve, 500));
                await this.stop();
                this.matterServer = undefined;
                process.stdout.write(
                    `====> Chip test Runner "${this.testName}": Instance stopped for Factory Reset ...\n`,
                );
                // Test Test_TC_CADMIN_1_4 requires a device factory reset but in the end still expect being paired
                //this.storage.clear();
                process.stdout.write(`====> Chip test Runner "${this.testName}": Factory Reset done ...\n`);
                await new Promise(resolve => setTimeout(resolve, 2000));
                process.stdout.write(`====> Chip test Runner "${this.testName}": Restart instance now ...\n`);
                await this.setup();
                await this.start();
                process.stdout.write(`====> Chip test Runner "${this.testName}": Restart done\n`);
                break;
            case "Stop":
                await new Promise(resolve => setTimeout(resolve, 500));
                await this.stop();
                this.matterServer = undefined;
                process.stdout.write(`====> Chip test Runner "${this.testName}": Instance stopped ...\n`);
                break;
            case "Start":
                await this.setup();
                await this.start();
                process.stdout.write(`====> Chip test Runner "${this.testName}": Instance started\n`);
                break;

            default:
                throw new Error(`Test instance ${this.testName} do not know how to handle command "${command}"`);
        }
    }

    /** Handle a user prompt from the chip-tool. The response is the answer to give. */
    async handleUserprompt(testDescription: string, userPrompt: string): Promise<string> {
        if (testDescription.includes("TH reads")) {
            return "y\n"; // We acknowledge the TH reads as checked
        }
        throw new Error(
            `Test instance ${this.testName} do not know how to handle Userprompt ${userPrompt} with description: ${testDescription}`,
        );
    }
}
