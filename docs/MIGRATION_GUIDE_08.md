# Migration guide matter.js Device API to 0.8

With version 0.8 the matter.js project introduces a new high level API to build devices bases on code generation
for all Matter 1.1 device types, clusters and functionality. In the past we already generated the code for all 
cluster definitions and this got now enhanced for all device types. Additionally, the way how own cluster logic can be 
implemented also needed to be adjusted and got enhanced together with a very flexible way to choose the wanted cluster 
features.

This means that developers need to adjust their code to use the new classes and concepts introduced by this change. The
former API (pre 0.8, called "Legacy" for of now) is still 100% functional, but will be deprecated and removed in upcoming 
releases and might not get cluster specific adjustments or new features if they are not part of the core library
functionality!
The Controller API is still the same as before, but will be also adjusted in the future to the new concepts where 
applicable.

This document tries to give an overview how the commonly used components and classes from the legacy API need to be 
adjusted for the new API.

## Examples
Matter.js contains several examples to show how devices are built that also can be used in practice as CLI scripts. 
These examples got also adjusted and exists for Legacy API (*Legacy.ts) and new API. This can be used too to see the 
differences between the APIs.

## Components
The following sections shows the legacy and matching new components and tries to show the differences and what they 
have in common.

### New:Environment <--> Legacy:MatterServer
The new API introduces an Environment singleton which represents a platform specific basic environment and is in our 
current case initialized as soon as matter-node.js is imported. It encapsulates the basic Process, Network, Storage, 
Configuration and logging for the rest of the components in one central place. The old API also had parts of this registered automatically but especially configuration and storage was needed to be provided by the developer.
Like in MatterServer the Environment also maintains the MDNS broadcasting and scanning for all nodes that are added later. In fact this is all what they have in common, so the differences are:
* The default storage is defined by the Environment which is initialized - in the case of the Node.js Environment it is the file based key value store "node-localstorage". To exchange the storage to something else you can implement/extend an own Environment class (see [NodeJsEnvironment](../packages/matter-node.js/src/environment/NodeJsEnvironment.ts)) or just overwrite the storage factory (`Environment.default.get(StorageService).factory = (namespace: string) => createMyStorage(namespace);`)
* Basic configuration can be provided via a config file, CLI parameters or also environment variables. Some defined configuration keys are used by the base environment or the Node.js environment (e.g. MDNS network interface and such), but also custom configuration can be added and access from within every place in the code by accessing the environment. So this also acts as central place to share configuration for the device implementation. Some variables and their usage is documented in the [Examples Readme](../packages/matter-node.js-examples/README.md). Else check the [Environment.ts](../packages/matter.js/src/environment/Environment.ts) and [NodeJsEnvironment.ts](../packages/matter-node.js/src/environment/NodeJsEnvironment.ts).
* The "ProcessManager" of the environment will, in case of the Node.js environment, also register Process signal handlers to handle Shutdown (SIGINT, SIGTERM, exit) or to trigger logging diagnostic data (SIGUSR2). For other environments this needs to be implemented accordingly. 
* The environment adds the concept of Workers that can execute tasks/jobs/logic and these workers are used to run Nodes and finish when they are ended. With this Matter Servers (old name CommissioningServer)/Server Nodes (new) are registered on the Environment as workers. The ServerNode (see below) has convenient methods to do that registration, so these Workers are ideally encapsulated and are not needed be used directly the developer, but could for own workloads. The Workers are all disposed/ended when the Environment is disposed.

This Environment component even more simplifies to build devices by making sure base components are handled centrally for all things needed.

The environment related classes are exported unter `matter(-node).js/environment`.

### New:ServerNode <--> Legacy:CommissioningServer
The `new CommissioningServer()` is replaced by `await ServerNode.create()` in the new API and both represent one Matter Server node that starts on a provided port, announces itself as Device in the network to be paired with Controllers. The instance also represents the Matter Root-Endpoint with all mandatory Root clusters. The configuration is provided in a comparable way to the ServerNode as before too and can contain node specific configurations (network, productDescription and commissioning details) and also Root endpoint cluster configurations.
The create() method takes one or two parameters:
* The definition of the RootEndpoint as first parameter. It can be omitted when it is the default RootEndpoint, or it is the definition including all relevant adjusted clusters or needed features. Check out [DeviceNodeFull.ts](../packages/matter-node.js-examples/src/examples/DeviceNodeFull.ts) or the [Testing Apps](../chip-testing/src/AllClustersTestInstance.ts) on how to extend the Root Cluster. See also details and examples below when we present the "Part" component.
* The configuration of the node as second (or if definition above is omitted as first) parameter. Provide the default configuration for all relevant clusters and such here. The configuration should also contain a unique id property for the Node.

When the node is created you add Endpoints to it (called "Part", see below) which is comparable to the Device instances added in the legacy API.

Afterward you start the node. Here you have two options:
* **`node.run()`**: This registers the node as worker on the environment and runs the server and resolves when the node gets closed! SO there is no code executed after this await until the devices was closed. Use this if you just have such a single node in one Node.js process and nothing else is needed and all additional logic is done by event handlers that were attached earlier in code.
* **`node.bringOnline()`**: This registers the node as worker on the environment and start the server. The promise resolves when the node is online and announced in the network, so additional code can be executed afterwards.

The following methods are also existing on the ServerNode:
* **`start()`**: This starts the node - mainly used internally
* **`cancel()`**: This brings the node offline and removes all network sockets but leave state and structure intact, so it can be started again.
* **`factoryReset()`**: This factory resets the device. If started it is stopped and restarted afterwards.
* **`destroy()`**: This destroys the node, taking it offline and removing it from the environment workers (??) 

### New:Part <--> Legacy:Endpoint and Device-Classes/Clusters
A "Part" describes an endpoint which is added in the Matter endpoint structure.

As the ServerNode above each Part consists of an endpoint type definition and configuration for the part and the contained clusters.

The Device class exports to use for the new API are all located in "@project-chip/matter.js/devices/<Devicename>" and can be imported as needed to prevent importing too many classes.
The main difference between the new and the legacy Device classes are that the new ones are working generically, so that special convenience shortcut methods like in the legacy classes do not exist. But the new API adds a lot more flexibility.

There are several options to define and interact with the Parts that are described now.

#### Add a simple DeviceType
The most simple way is to add a device endpoint to the server node and get the Part instance out of it

```javascript
const part = await serverNode.add(OnOffLightDevice, { id: "myonofflight" });
```

Alternatively the Part can be created beforehand and added then

```javascript
const part = new Part(OnOffLightDevice, { id: "myonofflight" });
await serverNode.add(part);
```

The third alternative is to add the parts directly when configuring the ServerNode

```javascript
const serverNode = await ServerNode.create({
    id: "myNode",
    
    //... serverNode configuration
    
    parts: [
        {
            type: OnOffLightDevice,
            id: "myonofflight"
            
            //... more config for this part
        }
    ]
});
```

**IMPORTANT**
Please note that attribute change events can __not__ be added before the part is added to te node!

#### Provide cluster properties/defaults with creation
Each Device type has mandatory clusters that are added by default automatically and use their default values as define dby the Matter specification. To override these defaults you can add them as configuration when adding the node:

```javascript
const part = await serverNode.add(OnOffLightDevice, { 
    id: "myonofflight",
    
    onOff: { // OnOff Cluster
        onOff: true // OnOff attribute from OnOff cluster
    }
});
```

The TypeScript typing should exactly tell you which attributes are existing and provide full typing support.

#### Add/Overwrite Clusters on the device
matter.js provides the Device classes with their mandatory clusters included and the defined or basic feature variants. If you want to overwrite this you can do this by modifying the Type definition:

You can overwrite clusters which are defined by own implemetations

```javascript
class ReportingOnOffServer extends OnOffLightRequirements.OnOffServer {
    // see LightDevice.ts in examples package
    //...
}

// Use the above defined OnOffServer for the OnOff cluster in the Device
const ExampleLight = OnOffLightDevice.with(ReportingOnOffServer);

const part = await serverNode.add(ExampleLight, { id: "myonofflight" });
```

You can also add features for single clusters:

```javascript
// Create Server type with the needed features
const LiftingWindowCoveringServer = WindowCoveringServer.with("Lift", "AbsolutePosition", "PositionAwareLift");

// If needed, provide a implementation that supports all features as defined by Matter specs
class RollerShade extends LiftingWindowCoveringServer {
    // see IlluminatedRollerShade.ts in examples package
    //...
}

// Use the above defined WindowCovering cluster for the WindowCovering cluster in the Device
// if you do not add an own implementation simply use `WindowCoveringDevice.with(LiftingWindowCoveringServer)`
const part = await serverNode.add(WindowCoveringDevice.with(RollerShade), { id: "myrollershade" });
```

To redefine multiple Clusters just separate them with comma in the with method

```javascript
// Enable the query feature for Identify cluster and the Colortemperature feature for the ColorControl cluster
const part = await serverNode.add(
    ExtendedColorLightDevice.with(IdentifyServer.with("Query"), ColorControlServer.with("ColorTemperature"))
);
```

### React to change events on cluster attributes
To react to change events in your code outside of cluster implementations (there special rule might apply because of the transactionality) you do:

```javascript
// Register for the change event of the onOff attribute for the OnOff cluster of the part
part.events.onOff.onOff$Change.on(value => {
    console.log(`OnOff is now ${value ? "ON" : "OFF"}`);
});
```

**IMPORTANT**
The change handlers are executed in the scope of the called command. This means that exceptions that are thrown in the 
state change handlers let the command fail! This also means that the transaction fails and all other changes are rolled 
back automatically.

### Read or write attribute values
The Part provides a direct structure to read attributes:

```javascript
// Read onOff attribute from onOff cluster
const onOffValue = part.state.onOff.onOff;
console.log(`current OnOff attribute: ${onOffValue}`);
```

To set one or multiple (!) attributes use the set() method of the part:

```javascript
// Set onOff attribute from OnOff cluster
await part.set({
    onOff: {
        onOff: false,
    },
});
```

You can provide multiple values also from multiple clusters within this part to set together. This means that they are set as a transaction - if one fails, all fail!

#### How to get QR Code and pairing details if device is not commissioned?
```javascript
if (!serverNode.lifecycle.isCommissioned) {
    const { qrPairingCode, manualPairingCode } = await serverNode.act(agent => agent.commissioning.pairingCodes);

    console.log(QrCode.get(qrPairingCode));
    logger.info(`QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`);
    logger.info(`Manual pairing code: ${manualPairingCode}`);
} else {
    logger.info("Device is already commissioned. Waiting for controllers to connect ...");
}
```

#### More options?
Take a look at the [DeviceNodeFull.ts](../packages/matter-node.js-examples/src/examples/DeviceNodeFull.ts) example for more interaction points.





## Changelog 0.8 (WIP)
* The new Environment concept allows (for node.js) the handling of CLI parameters in parallel to (new) Environment variables and config file to pass in configurations
* Introducing new High Level Device building API with full support for all Matter 1.1 device types
* Add Transactionality ... Rollback on Exception


## TOPICS/DISCUSSIONS/TODOs:
* Bug: tear down - block events (to prevent reporting empty partsLists)
* Bug: Expiry broken again, Mdns broadcaster hangs shutdown?
* Bug: State values that are undefined/optional in State defaults will never be taken over when config is initialized and stay undefined
* Missing: multiple nodes duplicate port check missing
* Missing: Re-Add Session changed callbacks
* How: add a Controller to environment how?
* How: how add custom cluster servers?
* Discussion: Discuss and decide matter-node.js re-exports vs not
* Discussion: change handlers should also allow async implementations
* Discussion: act/actAsync to get rid of MaybePromise in some places vs "linter" and have more type safeness? (MaybePromise at all?)
* Discussion: Go over Examples and discuss "convenience" for devs :-)
