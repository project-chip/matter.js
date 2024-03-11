/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This example is not optimized for simplicity, but to show all the advanced use cases for matter.js.
 * If you want to see a simple minimalistic and more standard example please look at DeviceNode.ts or the other examples.
 *
 * This example shows how to create a simple on-off Matter device as a light or as a socket.
 * It can be used as CLI script and starting point for your own device node implementation.
 * Additional to this it shows the following:
 * * How to modify the existing clusters on Root and also Device Endpoints
 * * How to add own Cluster implementations for Standard clusters
 * * How to add a custom Cluster to an Endpoint
 * * Which events are available to get status information from the Node aon commissioning and session/subscription changes
 * * How to get cluster state values
 * * How to set one or multiple state values in a transaction.
 */

/**
 * Import needed modules from @project-chip/matter-node.js
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import "@project-chip/matter-node.js";

import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { createFileLogger } from "@project-chip/matter-node.js/log";
import { requireMinNodeVersion } from "@project-chip/matter-node.js/util";
import { TestEventTriggerRequest } from "@project-chip/matter.js/behavior/definitions/general-diagnostics";
import { NetworkCommissioningServer } from "@project-chip/matter.js/behavior/definitions/network-commissioning";
import { OnOffServer } from "@project-chip/matter.js/behavior/definitions/on-off";
import { Ble } from "@project-chip/matter.js/ble";
import { NetworkCommissioning } from "@project-chip/matter.js/cluster";
import { DeviceTypeId, VendorId } from "@project-chip/matter.js/datatype";
import { logEndpoint } from "@project-chip/matter.js/device";
import { OnOffLightDevice } from "@project-chip/matter.js/devices/OnOffLightDevice";
import { OnOffPlugInUnitDevice } from "@project-chip/matter.js/devices/OnOffPlugInUnitDevice";
import { Endpoint, EndpointServer } from "@project-chip/matter.js/endpoint";
import { RootRequirements } from "@project-chip/matter.js/endpoint/definitions";
import { Environment, StorageService } from "@project-chip/matter.js/environment";
import { FabricAction } from "@project-chip/matter.js/fabric";
import { Level, Logger, levelFromString } from "@project-chip/matter.js/log";
import { ServerNode } from "@project-chip/matter.js/node";
import { QrCode } from "@project-chip/matter.js/schema";
import { Time } from "@project-chip/matter.js/time";
import { ByteArray, singleton } from "@project-chip/matter.js/util";
import { execSync } from "child_process";
import { DummyThreadNetworkCommissioningServer } from "./cluster/DummyThreadNetworkCommissioningServer.js";
import { DummyWifiNetworkCommissioningServer } from "./cluster/DummyWifiNetworkCommissioningServer.js";
import {
    MyFancyCommandRequest,
    MyFancyCommandResponse,
    MyFancyOwnFunctionalityBehavior,
} from "./cluster/MyFancyOwnFunctionality.js";

/**
 * The following code brings some convenience to the CLI script. It allows to set the log level and format via
 * command line parameters. It also initializes the BLE stack if the `--ble` parameter is present.
 * Some of these parameters can also be replaced by generically accepted parameters or even environment variables. See the comments in the relevant places for information.
 * When using this code as basis for your own device node implementation, you can remove this part or hard code it.
 */

requireMinNodeVersion(16);

// To configure Logging use
// * "--log-level" or environment variable "MATTER_LOG_LEVEL" or "environment.vars.set('log.level', Level.DEBUG)"
//   Allowed values are: Level.FATAL, Level.ERROR, Level.WARN, Level.NOTICE, Level.INFO, Level.DEBUG
// * "--log-format" or environment variable "MATTER_LOG_FORMAT" or "environment.vars.set('log.format', Format.PLAIN)"
//   Allowed values are: Format.PLAIN, Format.HTML, Format.ANSI,

const environment = Environment.default;

// Alternatively "--ble-enable" or environment variable "BLE_ENABLED"
// Alternatively "--ble-hciId" or environment variable "BLE_HCIID"
if (environment.vars.get("ble.enable")) {
    // Initialize Ble
    Ble.get = singleton(
        () =>
            new BleNode({
                hciId: environment.vars.number("ble.hciId"),
            }),
    );
}

function executeCommand(scriptParamName: string) {
    const script = environment.vars.string(scriptParamName);
    if (script === undefined) return undefined;
    console.log(`${scriptParamName}: ${execSync(script).toString().slice(0, -1)}`);
}

/**
 * Collect all needed data
 *
 * This block collects all needed data from cli or storage. Replace this with where ever your data come from.
 *
 * Note: This example uses the matter.js process storage system to store the device parameter data for convenience
 * and easy reuse. When you also do that be careful to not overlap with Matter-Server own storage contexts
 * (so maybe better not do it ;-)).
 */

const logFile = environment.vars.string("logfile.filename");
if (logFile !== undefined) {
    Logger.addLogger("filelogger", await createFileLogger(logFile), {
        defaultLogLevel: levelFromString(environment.vars.string("logfile.loglevel")) ?? Level.DEBUG,
    });
}

const storageService = environment.get(StorageService);
console.log(`Storage location: ${storageService.location} (Directory)`);
console.log(
    'Use the parameter "--storage-path=NAME-OR-PATH" to specify a different storage location in this directory, use --storage-clear to start with an empty storage.',
);

const deviceStorage = (await storageService.open("device")).createContext("data");

if (deviceStorage.has("isSocket")) {
    console.log("Device type found in storage. --type parameter is ignored.");
}
const isSocket = deviceStorage.get("isSocket", environment.vars.string("type") === "socket");
const deviceName = "Matter test device";
const vendorName = "matter-node.js";
const passcode = environment.vars.number("passcode") ?? deviceStorage.get("passcode", 20202021);
const discriminator = environment.vars.number("discriminator") ?? deviceStorage.get("discriminator", 3840);
// product name / id and vendor id should match what is in the device certificate
const vendorId = environment.vars.number("vendorid") ?? deviceStorage.get("vendorid", 0xfff1);
const productName = `node-matter OnOff ${isSocket ? "Socket" : "Light"}`;
const productId = environment.vars.number("productid") ?? deviceStorage.get("productid", 0x8000);

const port = environment.vars.number("port") ?? 5540;

const uniqueId = environment.vars.string("uniqueid") ?? deviceStorage.get("uniqueid", Time.nowMs().toString());

deviceStorage.set("passcode", passcode);
deviceStorage.set("discriminator", discriminator);
deviceStorage.set("vendorid", vendorId);
deviceStorage.set("productid", productId);
deviceStorage.set("isSocket", isSocket);
deviceStorage.set("uniqueid", uniqueId);

// Matter exposes functionality in groups called "clusters".  For this example device we override the matter.js "On/Off"
// cluster implementation to print status to the console.
class OnOffShellExecServer extends OnOffServer {
    // Intercept the "on" command to the Matter On/Off cluster to print a log message.
    override on() {
        executeCommand("on");
        super.on();
    }

    // This is the functional inverse of on() above.
    //
    // For demonstration purposes we update state ourselves rather than deferring to matter.js's default "off" handler
    // via super.off().
    override off() {
        executeCommand("off");
        this.state.onOff = false;
    }

    // Use event handlers to log on/off state reactively, after it changes.
    override initialize() {
        this.events.onOff$Change.on(value => {
            console.log(`Light is now ${value ? "ON" : "OFF"}`);
        });
    }
}

class TestGeneralDiagnosticsServer extends RootRequirements.GeneralDiagnosticsServer {
    override initialize() {
        this.state.testEventTriggersEnabled = true; // set to true if you support test triggers ...
        super.initialize();
    }

    override testEventTrigger({ enableKey, eventTrigger }: TestEventTriggerRequest) {
        console.log(`testEventTrigger called on GeneralDiagnostic cluster: ${enableKey} ${eventTrigger}`);
    }
}

class MyFancyOwnFunctionalityServer extends MyFancyOwnFunctionalityBehavior {
    /** We return the incoming value and store the length of the string in our attribute and send it out as event */
    override myFancyCommand(request: MyFancyCommandRequest): MyFancyCommandResponse {
        const { value } = request;
        this.state.myFancyValue = value.length;

        this.events.myFancyEvent.emit({ eventValue: value }, this.context);

        return { response: value };
    }

    override initialize() {
        this.state.myFancyValue = -1; // Always initialize with -1
    }
}

/**
 * Create Device instance and add needed Listener
 *
 * Create an instance of the matter device class you want to use.
 * This example uses the OnOffLightDevice or OnOffPluginUnitDevice depending on the value of the type  parameter.
 * To execute the on/off scripts defined as parameters a listener for the onOff attribute is registered via the
 * device specific API.
 *
 * The below logic also adds command handlers for commands of clusters that normally are handled device internally
 * like identify that can be implemented with the logic when these commands are called.
 */

// Devices are compositions of behaviors like OnOffServer above.  To extend an existing device you use builder methods.
//
// In this case we are using with() to install our On/Off cluster behavior.
// .with("LevelControlForLighting") not needed because we always have it in by default because we have default implementation
const OnOffDevice = isSocket
    ? vendorId === 0xfff4
        ? OnOffPlugInUnitDevice.with(OnOffShellExecServer, MyFancyOwnFunctionalityServer)
        : OnOffPlugInUnitDevice.with(OnOffShellExecServer)
    : vendorId === 0xfff4
      ? OnOffLightDevice.with(OnOffShellExecServer, MyFancyOwnFunctionalityServer)
      : OnOffLightDevice.with(OnOffShellExecServer);

/**
 * Modify automatically added clusters of the Root endpoint if needed
 * In this example we change the networkCommissioning cluster into one for "Wifi only" devices when BLE is used
 * for commissioning, to demonstrate how to do this.
 * If you want to implement Ethernet only devices that get connected to the network via LAN/Ethernet cable,
 * then all this is not needed.
 * The same as shown here for Wi-Fi is also possible theoretical for Thread only or combined devices.
 */

// We use the Basic Root Endpoint without a NetworkCommissioning cluster
let RootEndpoint = ServerNode.RootEndpoint.with(TestGeneralDiagnosticsServer);

let wifiOrThreadAdded = false;
if (Ble.enabled) {
    // matter.js will create a Ethernet-only device by default when ut comes to Network Commissioning Features.
    // To offer e.g. a "Wi-Fi only device" (or any other combination) we need to override the Network Commissioning
    // cluster and implement all the need handling here. This is a "static implementation" for pure demonstration
    // purposes and just "simulates" the actions to be done. In a real world implementation this would be done by
    // the device implementor based on the relevant networking stack.
    // The NetworkCommissioningCluster and all logics are described in Matter Core Specifications section 11.8
    if (environment.vars.has("ble.wifi.fake")) {
        RootEndpoint = RootEndpoint.with(DummyWifiNetworkCommissioningServer);
        wifiOrThreadAdded = true;
    } else if (environment.vars.has("ble.thread.fake")) {
        RootEndpoint = RootEndpoint.with(DummyThreadNetworkCommissioningServer);
        wifiOrThreadAdded = true;
    }
} else {
    RootEndpoint = RootEndpoint.with(
        NetworkCommissioningServer.with(NetworkCommissioning.Feature.EthernetNetworkInterface),
    );
}

const networkId = new ByteArray(32);
// Physical devices appear as "nodes" on a Matter network.  As a device implementer you use a NodeServer to bring a
// device online.
//
// Note there are a large number of options to NodeServer that we are allowing to take default values here.  See
// CompositeWindowCovering.ts for a more detailed example.
const server = await ServerNode.create(RootEndpoint, {
    id: uniqueId,
    network: {
        port,
        discoveryCapabilities: {
            onIpNetwork: !environment.vars.has("ble.enable"),
            ble: environment.vars.has("ble.enable"),
        },
        ble: environment.vars.has("ble.enable"), // TODO remove when state init is fixed
    },
    commissioning: {
        passcode,
        discriminator,
    },
    productDescription: {
        name: deviceName,
        deviceType: DeviceTypeId(OnOffDevice.deviceType),
    },
    basicInformation: {
        vendorName,
        vendorId: VendorId(vendorId),
        nodeLabel: productName,
        productName,
        productLabel: productName,
        productId,
        serialNumber: `node-matter-${uniqueId}`,
        uniqueId,
    },

    // @ts-expect-error ... TS do not see the types because both next clusters was added conditionally
    networkCommissioning: {
        maxNetworks: 1,
        interfaceEnabled: true,
        lastConnectErrorValue: 0,
        lastNetworkId: wifiOrThreadAdded ? null : networkId,
        lastNetworkingStatus: wifiOrThreadAdded ? null : NetworkCommissioning.NetworkCommissioningStatus.Success,
        networks: [{ networkId: networkId, connected: !wifiOrThreadAdded }],
        scanMaxTimeSeconds: wifiOrThreadAdded ? 3 : undefined,
        connectMaxTimeSeconds: wifiOrThreadAdded ? 3 : undefined,
    },
    myFancyFunctionality: {
        myFancyValue: 0,
    },
});

// Nodes are a composition of endpoints.  Add a single endpoint to the node, our example light device.
const endpoint = new Endpoint(OnOffDevice, { id: "onoff" });
await server.add(endpoint);

/**
 * This event is triggered when the device is initially commissioned successfully.
 * This means: It is added to the first fabric.
 */
server.lifecycle.commissioned.on(() => console.log("Server was initially commissioned successfully!"));

/** This event is triggered when all fabrics are removed from the device, usually it also does a factory reset then. */
server.lifecycle.decommissioned.on(() => console.log("Server was fully decommissioned successfully!"));

/** This event is triggered when the device went online. This means that it is discoverable in the network. */
server.lifecycle.online.on(() => console.log("Server is online"));

/** This event is triggered when the device went offline. it is not longer discoverable or connectable in the network. */
server.lifecycle.offline.on(() => console.log("Server is offline"));

/**
 * This event is triggered when a fabric is added, removed or updated on the device. Use this if more granular
 * information is needed.
 */
server.events.commissioning.fabricsChanged.on((fabricIndex, fabricAction) => {
    let action = "";
    switch (fabricAction) {
        case FabricAction.Added:
            action = "added";
            break;
        case FabricAction.Removed:
            action = "removed";
            break;
        case FabricAction.Updated:
            action = "updated";
            break;
    }
    console.log(`Commissioned Fabrics changed event (${action}) for ${fabricIndex} triggered`);
    console.log(server.state.commissioning.fabrics[fabricIndex]);
});

/**
 * This event is triggered when an operative new session was opened by a Controller.
 * It is not triggered for the initial commissioning process, just afterwards for real connections.
 */
server.events.sessions.opened.on(session => console.log(`Session opened`, session));

/**
 * This event is triggered when an operative session is closed by a Controller or because the Device goes offline.
 */
server.events.sessions.closed.on(session => console.log(`Session closed`, session));

/** This event is triggered when a subscription gets added or removed on an operative session. */
server.events.sessions.subscriptionsChanged.on(session => {
    console.log(`Session subscriptions changed`, session);
    console.log(`Status of all sessions`, server.state.sessions.sessions);
});

// React on a change of identificationTime to do Identify stuff for the own device
let isIdentifying = false;
endpoint.events.identify.identifyTime$Change.on(value => {
    if (value > 0 && !isIdentifying) {
        isIdentifying = true;
        console.log(`Run identify logic, ideally blink a light every 0.5s ...`);
    } else if (value === 0) {
        isIdentifying = false;
        console.log(`Stop identify logic ...`);
    }
});

// Our device is now built and we can bring the node online.
//
// Note that you may serve multiple nodes from a single process.  We only have one, however, so we can use the run()
// method of the node.

logEndpoint(EndpointServer.forEndpoint(server));

/**
 * In order to start the node and announce it into the network we start the node. This method resolves when the Matter
 * node enters his online state. Alternatively, we could also use `await server.run()` which
 * resolves when the node goes offline again, but we want to execute code afterwards, so we use start() here
 */
await server.bringOnline();

console.log("Initial Fabrics", server.state.operationalCredentials.fabrics);

/**
 * If the node is not commissioned already we display the QR code on console. The QR code is also logged
 */
if (!server.lifecycle.isCommissioned) {
    const { qrPairingCode, manualPairingCode } = server.state.commissioning.pairingCodes;

    console.log(QrCode.get(qrPairingCode));
    console.log(`QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`);
    console.log(`Manual pairing code: ${manualPairingCode}`);
} else {
    console.log("Device is already commissioned. Waiting for controllers to connect ...");

    /**
     * Sometimes reading or writing attributes is required. The following code shows how this works.
     * For read it is basically `endpoint.state.clustername.attributename`.
     * The set method allows to set one or multiple values via the structure of also clustername.attributename. When multiple values are set they are considered being one transaction which would be rolled back completely if one value fails to be set.
     */

    // Read onOff attribute from onOff cluster
    const onOffValue = endpoint.state.onOff.onOff;
    console.log(`current OnOff attribute: ${onOffValue}`);

    if (vendorId === 0xfff4) {
        // Set onOff attribute from OnOff cluster AND the myFancyValue of the MyFancyOwnFunctionality cluster together
        await endpoint.set({
            onOff: {
                onOff: !onOffValue,
            },
            // @ts-expect-error Needed because the Fancy cluster is added conditionally, so TS do not get that it's there.
            myFancyOwnFunctionality: {
                myFancyValue: 36,
            },
        });
    } else {
        // Set onOff attribute from OnOff cluster only
        await endpoint.set({
            onOff: {
                onOff: !onOffValue,
            },
        });
    }
}

/**
 * To correctly tear down the now we can use server[Symbol.asyncDispose]().
 */
process.on("SIGINT", () => {
    // Clean up on CTRL-C
    server
        .close()
        .then(() => process.exit(0))
        .catch(err => console.error(err));
});
