/**
 * Import needed modules from @project-chip/matter-node.js
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { CommissioningController, MatterServer } from "@project-chip/matter-node.js";
import { Ble } from "@project-chip/matter-node.js/ble";
import { BasicInformationCluster, DescriptorCluster, OnOffCluster } from "@project-chip/matter-node.js/cluster";
import { Logger } from "@project-chip/matter-node.js/log";
import { StorageBackendDisk, StorageContext, StorageManager } from "@project-chip/matter-node.js/storage";
import { hasParameter, requireMinNodeVersion, singleton } from "@project-chip/matter-node.js/util";

requireMinNodeVersion(16);

const logger = Logger.get("Node");

if (hasParameter("ble")) {
    // Initialize Ble
    Ble.get = singleton(() => new BleNode());
}

export class MatterNode {
    private storageLocation?: string;
    private storage?: StorageBackendDisk;
    private storageManager?: StorageManager;
    private storageContext: StorageContext;

    private commissioningController?: CommissioningController;
    private matterDevice?: MatterServer;

    get Store() {
        return this.storageContext;
    }

    async close() {
        await this.matterDevice?.close();
        this.closeStorage();
    }

    closeStorage() {
        this.storage
            ?.close()
            .then(() => process.exit(0))
            .catch(() => process.exit(1));
    }

    async start(nodenum = 0) {
        logger.info(`matter.js shell started`);

        /**
         * Initialize the storage system.
         *
         * The storage manager is then also used by the Matter server, so this code block in general is required,
         * but you can choose a different storage backend as long as it implements the required API.
         */

        this.storageLocation = `.matter-shell-${nodenum}`;
        this.storage = new StorageBackendDisk(this.storageLocation, false);
        logger.info(`Storage location: ${this.storageLocation} (Directory)`);
        this.storageManager = new StorageManager(this.storage);
        await this.storageManager.initialize();
        this.storageContext = this.storageManager.createContext("Node");

        /**
         * Collect all needed data
         *
         * This block makes sure to collect all needed data from cli or storage. Replace this with where ever your data
         * come from.
         *
         * Note: This example also uses the initialized storage system to store the device parameter data for convenience
         * and easy reuse. When you also do that be careful to not overlap with Matter-Server own contexts
         * (so maybe better not ;-)).
         */

        const store = this.storageContext;
        const ip = store.get<string>("ip", "::1");
        const port = store.get<number>("port", 5540 + nodenum);
        const setupPin = store.get<number>("pin", 20202021);
        const longDiscriminator = store.get<number>("discriminator", 3840);

        // Write default values to storage if not already present.
        store.set("ip", ip);
        store.set("port", port);
        store.set("pin", setupPin);
        store.set("discriminator", longDiscriminator);

        const shortDiscriminator = (longDiscriminator >> 8) & 0x0f;

        /**
         * Create Matter Server and Controller Node
         *
         * To allow the device to be announced, found, paired and operated we need a MatterServer instance and add a
         * CommissioningController to it and add the just created device instance to it.
         * The Controller node defines the port where the server listens for the UDP packages of the Matter protocol
         * and initializes deice specific certificates and such.
         *
         * The below logic also adds command handlers for commands of clusters that normally are handled internally
         * like testEventTrigger (General Diagnostic Cluster) that can be implemented with the logic when these commands
         * are called.
         */

        this.matterDevice = new MatterServer(this.storageManager);
        this.commissioningController = new CommissioningController({
            serverAddress: ip !== undefined && port !== undefined ? { ip, port, type: "udp" } : undefined,
            longDiscriminator,
            shortDiscriminator,
            passcode: setupPin,
            delayedPairing: true,
        });
        this.matterDevice.addCommissioningController(this.commissioningController);

        /**
         * Start the Matter Server
         *
         * After everything was plugged together we can start the server. When not delayed announcement is set for the
         * CommissioningServer node then this command also starts the announcement of the device into the network.
         */

        await this.matterDevice.start();
    }

    public async pair() {
        try {
            await this.commissioningController?.connect();

            const store = this.storageContext;
            if (store && this.commissioningController?.serverAddress !== undefined) {
                const { ip, port } = this.commissioningController.serverAddress;
                store.set("ip", ip);
                store.set("port", port);
            }

            // Important: This is a temporary API to proof the methods working and this will change soon and is NOT stable!
            // It is provided to proof the concept

            // Example to initialize a ClusterClient and access concrete fields as API methods
            const descriptor = this.commissioningController?.getRootClusterClient(DescriptorCluster);
            if (descriptor !== undefined) {
                console.log(await descriptor.attributes.deviceTypeList.get()); // you can call that way
                console.log(await descriptor.getServerListAttribute()); // or more convenient that way
            } else {
                console.log("No Descriptor Cluster found. This should never happen!");
            }

            // Example to subscribe to a field and get the value
            const info = this.commissioningController?.getRootClusterClient(BasicInformationCluster);
            if (info !== undefined) {
                console.log(await info.getProductNameAttribute()); // This call is executed remotely
                //console.log(await info.subscribeProductNameAttribute(value => console.log("productName", value), 5, 30));
                //console.log(await info.getProductNameAttribute()); // This call is resolved locally because we have subscribed to the value!
            } else {
                console.log("No BasicInformation Cluster found. This should never happen!");
            }
        } finally {
            //await matterDevice.close(); // Comment out when subscribes are used, else the connection will be closed
            //setTimeout(() => process.exit(0), 100000);
        }
    }

    public async onoff() {
        try {
            await this.commissioningController?.connect();

            // Example to get all Attributes of the commissioned node: */*/*
            //const attributesAll = await interactionClient.getAllAttributes();
            //console.log("Attributes-All:", Logger.toJSON(attributesAll));

            // Example to get all Attributes of all Descriptor Clusters of the commissioned node: */DescriptorCluster/*
            //const attributesAllDescriptor = await interactionClient.getMultipleAttributes([{ clusterId: DescriptorCluster.id} ]);
            //console.log("Attributes-Descriptor:", JSON.stringify(attributesAllDescriptor, null, 2));

            // Example to get all Attributes of the Basic Information Cluster of endpoint 0 of the commissioned node: 0/BasicInformationCluster/*
            //const attributesBasicInformation = await interactionClient.getMultipleAttributes([{ endpointId: 0, clusterId: BasicInformationCluster.id} ]);
            //console.log("Attributes-BasicInformation:", JSON.stringify(attributesBasicInformation, null, 2));

            if (this.commissioningController) {
                const devices = this.commissioningController.getDevices();
                if (devices[0] && devices[0].id === 1) {
                    // Example to subscribe to all Attributes of endpoint 1 of the commissioned node: */*/*
                    //await interactionClient.subscribeMultipleAttributes([{ endpointId: 1, /* subscribe anything from endpoint 1 */ }], 0, 180, data => {
                    //    console.log("Subscribe-All Data:", Logger.toJSON(data));
                    //});

                    const onOff = devices[0].getClusterClient(OnOffCluster);
                    if (onOff !== undefined) {
                        let onOffStatus = await onOff.getOnOffAttribute();
                        console.log("onOffStatus", onOffStatus);
                        // read data every minute to keep up the connection to show the subscription is working
                        setInterval(() => {
                            onOff
                                .toggle()
                                .then(() => {
                                    onOffStatus = !onOffStatus;
                                    console.log("onOffStatus", onOffStatus);
                                })
                                .catch(error => logger.error(error));
                        }, 60000);
                    }
                }
            }
        } finally {
            //await matterDevice.close(); // Comment out when subscribes are used, else the connection will be closed
            //setTimeout(() => process.exit(0), 100000);
        }
    }
}

/// Create singleton version of the MatterNode class for use by this process.
export const theNode = new MatterNode();
