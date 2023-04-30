# Matter.js Development API Overview

Until we have a proper generated API doc this file should summarize the basic API concept of matter.js.

The following table describes the main functionality of the classes and their functions. The classes that are used by developers are described in more detail in the following sections.

| Class                    | Description                                                                                                                                                                                                                    |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Matter                   | Main process class which allows to add multiple (pairable and commissionable) nodes and provides the central MDNSScanner and Broadcaster.                                                                                      |
| MatterNode               | Abstract node class which provides the basic functionality of a matter node. This clas is not used directly!                                                                                                                   |
| CommissionableMatterNode | Used by a pairable Matter Node on a defined port which has it's own pairing data. You can operate multiple of them in one Matter process. You use instances of "Device" classes to add Logic Matter Device types to this node. |
| PairableMatterNode       | Acts as a controller to pair another Matter node. After pairing the structure of the paired node is analyzed and represented as Device instance structure to be used by the developer.                                         |
| Endpoint                 | base class that epresents one endpoint of a Matter node that handles all clusters on that endpoint. This class is normally not used directly.                                                                                  |
| RootEndpoint             | Represents a Root Endpoint of the matter node. This class is normally not used directly.                                                                                                                                       |
| Device                   | Base class that represents a "Device" endpoint. This is not used directly normally, but derived classes.                                                                                                                       |
| PairedDevice             | Class used for all Devices automatically instanced when pairing a node                                                                                                                                                         |
| ComposedDevice           | Represents a Matter devices that combines multiple Devicetypes as sub endpoints                                                                                                                                                |
| Aggregator               | Represents a Aggregator node used to offer a Bridge in the Matter ecosystem and contains the Sub device endpoints                                                                                                              |
| XYZDevice                | For all defined Device types of Matter the API offers a derived device class (e.g. OnOffLightDevice) to be used. This automatically contains all required clusters.                                                            |

## Matter

The Matter class is the main class of the matter.js library. It is used to create a Matter process that can handle multiple Matter nodes. It also provides the central MDNSScanner and Broadcaster needed.

The class has two main methods `addCommissionableNode` and `addPairableNode` to add nodes to the process. The first one is used to add a node that is commissionable and can be paired by matter controllers. The second one is used to add a node that can be paired as controller.

The `start` method initializes all added nodes if they are not set in their settings to be announced/paired delayed.

> **Note:** Currently only ONE node is supported because Mdns classes need to be refactored to support multiple nodes. This comes later.

> Only one instance of this class should be instanced in a process!

## CommissionableMatterNode

An instance of this class is added to the Matter process by calling `addCommissionableNode` of the Matter class. It represents a Matter node that can be paired by a Matter controller. 

The constructor of this class allows to define the port on which the node should listen for incoming messages. One port can only be used once. The class initializes all needed Root Endpoint clusters for the node to be commissionable and for this it allows/requires to define the data of the "BasicInformationCluster" and allows to override certificates/DAC used for the device (Development Certificates and DAC are used if nothing is provided).

The class provides the `addEndpoint` method to add and endpoint to the node, which could be a device, composed device or a aggregator. The class also provides the `advertise` method to start the advertising of node, which allows it to be paired (if not yet commissioned) or to commission (if commissioned).

The method `getPairingCode` returns the pairing details like the manual pairing code and the QR code (pairing data and a test representation of the qr code).

The clusters from the Device Root Endpoint can be accessed via the `getRootClusterServer` method and also be overridden by using `setRootClusterServer`.

> All CLusters need to be set or adjusted **before** calling `advertise`!

## PairableMatterNode

An instance of this class is added to the Matter process by calling `addPairableNode` of the Matter class. It represents a Matter node that can be used to pair another Matter node as controller.

The constructor of this class provides all needed data to pair the node.

The method `connect` will try to pair (if not yet paired) and connect to the device. Afterwards the node structure is analyzed and Device instances are created for each endpoint and also subscribes to all data of the device. They can be accessed by the `getDevices` method.

The clusters from the Device Root Endpoint can get accessed via the `getRootClusterClient` method.

## ComposedDevice

This class represents a Matter device that combines multiple Devicetypes as sub endpoints. 

Use `addDevice` to add a sub device to the composed device. The class also provides the `getDevices` method to get all devices.

## Aggregator

This class represents a Aggregator node used to offer a Bridge in the Matter ecosystem and contains the Sub device endpoints. 

Use `addBridgedDevice` or `addBridgedDeviceWithPowerSourceInfo` to add a sub device to the aggregator. All sub devices will automatically get the "Brided Node" device type added if not already set. The class also provides the `getDevices` method to get all devices.

## PairedDevice

This class represents a Matter device that is paired to a controller. It is automatically instanced when pairing a node and allows to access all Clusters of the paired node. For each Server cluster of the device a ClusterClient is created and for each Client cluster a ClusterServer is created. 

The class also provides the `getClusterServer` and `getClusterClient` methods to access the clusters of the device.

## Device/XYZDevice (e.g. OnOffLightDevice)

For all defined Device types of Matter the API offers a derived device class (e.g. OnOffDevice) to be used. This instance automatically contains all required clusters with default Handlers and attribute values. The `Device` class is the parent of these classes and provides the basic functionality.

Using `addClusterServer` and `addClusterClient` you can add additional clusters to the device or overwrite the default cluster instances. 
The class also provides the `getClusterServer` and `getClusterClient` methods to get the clusters. When an optional Cluster instance is requested via one of the `get` methods which does not exist already a dummy cluster instance is added and returned.

> **Note:** The `setClusterClient` should not be used right now for Commissionable devices because it is not yet supported and requires more refactoring. This will be added later. 

> All CLusters need to be set or adjusted **before** calling `advertise` on the commissionable node!

The following derived device classes exist right now:

| Class            | Description                                                    |
|------------------|----------------------------------------------------------------|
| OnOffDevice      | Implements a OnOff plugin device without Level control feature |
| OnOffLightDevice | Implements a OnOff light device without Level control feature  |

More devices will be implemented in the next time.

TODO Define and describe Device API

## See the API in action?

For a basic overview on how to use the API you can check:
* For creating a Matter device, check NewDeviceNode.ts in the matter-node.js package
* For creating a Matter bridge, check NewBridgedDevicesNode.ts in the matter-node.js package
* For creating a Matter composed device, check NewComposedDeviceNode.ts in the matter-node.js package
* For creating a Matter controller, check NewControllerNode.ts in the matter-node.js package
* For examples on how to create different device structures check test/device/MatterNodeStructureTest.ts
