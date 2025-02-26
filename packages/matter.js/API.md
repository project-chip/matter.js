# Matter.js Development Legacy-API Overview

[!NOTE]
The Device building legacy API was deprecated in matter.js 0.8 and removed in 0.13. Only some last controller exports are 
 still available in the legacy API. 

The following table describes the main functionality of the classes and their functions. The classes that are used by developers are described in more detail in the following sections.

| Class                   | Description                                                                                                                                                                            |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CommissioningController | Acts as a controller to pair another Matter node. After pairing the structure of the paired node is analyzed and represented as Device instance structure to be used by the developer. |
| PairedDevice            | Class used for all Devices automatically instanced when pairing a node                                                                                                                 |

## CommissioningController

An instance of this class is added to the Matter process by calling `addCommissioningController` of the Matter class. It represents a Matter node that can be used to pair another Matter node as controller.

The constructor of this class provides all needed data to pair the node.

The method `connect` will try to pair (if not yet paired) and connect to the device. Afterwards the node structure is analyzed and Device instances are created for each endpoint and also subscribes to all data of the device. They can be accessed by the `getDevices` method.

The clusters from the Device Root Endpoint can get accessed via the `getRootClusterClient` method.

## PairedDevice

This class represents a Matter device that is paired to a controller. It is automatically instanced when pairing a node and allows to access all Clusters of the paired node. For each Server cluster of the device a ClusterClient is created and for each Client cluster a ClusterServer is created. 

The class also provides the `getClusterServer` and `getClusterClient` methods to access the clusters of the device.

## ClusterClient/ClusterServer

Clusters are used to represent a collection of attributes and commands that are related to a specific feature or functionality. They are used to represent the functionality of a device. Clusters can also have different functionalities based on different features they define. For example, a light bulb can have a OnOff cluster to control the on/off state of the light bulb, and a LevelControl cluster to control the brightness of the light bulb.

All the above Device classes allow to access the ClusterClient and ClusterServer instances used internally by the device and have a same-ish API.

### ClusterClient API

A ClusterClient is used to interact with a remote ClusterServer instance. The API also consists of generic objects to be used for programmatic access and convenient named methods to access specific attributes. Thanks to Typescript both have full typing support!

The ClusterClient class provides the following access options:
* property `id` to access the cluster id as a number
* property `name` to access the cluster name as a string
* property ´endpointId` to access the endpoint id this ClusterClient instance is assigned to when doing communications
* property `attributes` to access the "AttributeClients" of the cluster as an object with named properties. This should only be used if you want to iterate programmatically over all attributes. The AttributeClient offers async `get` and `set` method to access the attribute value and an `subscribe` method to subscribe on the remote device to receive value changes.
* method `async getNAMEAttribute(alwaysRequestFromRemote: boolean)` (NAME is placeholder here for the attributeName) to get value of the attribute directly. This should be used if you want to access a specific attribute value. If the attribute is subscribed the value is used from last pushed value and is not requested from the remote device unless you use the `alwaysRequestFromRemote´ parameter
* method `async setNAMEAttribute(value)` (NAME is placeholder here for the attributeName) to set value of the attribute directly. This should be used if you want to set a specific attribute value.
* method `async subscribeNAMEAttribute(handler)` (NAME is placeholder here for the attributeName) to subscribe to value changes of the attribute. This should be used if you want to subscribe to a specific attribute value and is a alias for the addValueSetListener on the AttributeServer.

All methods above are called **asynchronously** because the values come from the remote device normally.

When a ClusterClient instance gets initialize it gets bound to an Interaction Client which provides the remote connection. There is one default connection initialized when connecting the "CommissioningController" to the remote device which is used by default and also allows to subscribe to all data automatically (TODO). If you want to structure requests customly you can use `createInteractionClient` on the CommissioningController instance to get a InteractionClient that you can then use with `getClusterClient` method on any Device/Endpoint instance.

## See the API in action?

For a basic overview on how to use the API you can check:
* For creating a Matter controller, check ControllerNode.ts in the matter-node.js package
