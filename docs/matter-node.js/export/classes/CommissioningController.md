[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / [export](../README.md) / CommissioningController

# Class: CommissioningController

Controller class to commission and connect multiple nodes into one fabric.

## Extends

- [`MatterNode`](MatterNode.md)

## Constructors

### new CommissioningController()

> **new CommissioningController**(`options`): [`CommissioningController`](CommissioningController.md)

Creates a new CommissioningController instance

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningControllerOptions`](../README.md#commissioningcontrolleroptions) | The options for the CommissioningController |

#### Returns

[`CommissioningController`](CommissioningController.md)

#### Overrides

[`MatterNode`](MatterNode.md).[`constructor`](MatterNode.md#constructors)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:130

## Properties

### connectedNodes

> `private` **connectedNodes**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:123

***

### controllerInstance?

> `private` `optional` **controllerInstance**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:122

***

### enhanceDeviceDetailsFromCache

> `private` **enhanceDeviceDetailsFromCache**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:160

***

### enhanceDeviceDetailsFromRemote

> `private` **enhanceDeviceDetailsFromRemote**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:161

***

### environment?

> `private` `optional` **environment**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:119

***

### initializeController

> `private` **initializeController**: `any`

Internal method to initialize a MatterController instance.

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:139

***

### ipv4Disabled?

> `private` `optional` **ipv4Disabled**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:116

***

### listeningAddressIpv4?

> `private` `optional` `readonly` **listeningAddressIpv4**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:117

***

### listeningAddressIpv6?

> `private` `optional` `readonly` **listeningAddressIpv6**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:118

***

### mdnsScanner?

> `private` `optional` **mdnsScanner**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:121

***

### options

> `private` `readonly` **options**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:114

***

### sessionDisconnectedHandler

> `private` **sessionDisconnectedHandler**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:124

***

### started

> `private` **started**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:115

***

### storage?

> `private` `optional` **storage**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:120

## Accessors

### nodeId

> `get` **nodeId**(): `undefined` \| [`NodeId`](../../exports/datatype/README.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../../exports/datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:131

## Methods

### assertControllerIsStarted()

> **assertControllerIsStarted**(`errorText`?): [`MatterController`](../-internal-/classes/MatterController.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `errorText`? | `string` |

#### Returns

[`MatterController`](../-internal-/classes/MatterController.md)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:137

***

### assertIsAddedToMatterServer()

> **assertIsAddedToMatterServer**(): `object`

#### Returns

`object`

##### environment

> **environment**: `undefined` \| [`Environment`](../../environment/export/-internal-/classes/Environment.md)

##### mdnsScanner

> **mdnsScanner**: [`MdnsScanner`](../../exports/mdns/classes/MdnsScanner.md)

##### storage

> **storage**: `undefined` \| [`StorageContext`](../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:132

***

### cancelCommissionableDeviceDiscovery()

> **cancelCommissionableDeviceDiscovery**(`identifierData`, `discoveryCapabilities`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../../exports/common/README.md#commissionabledeviceidentifiers) |
| `discoveryCapabilities`? | [`TypeFromPartialBitSchema`](../../exports/schema/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:209

***

### close()

> **close**(): `Promise`\<`void`\>

Disconnects all connected nodes and Closes the network connections and other resources of the controller.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`close`](MatterNode.md#close)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:204

***

### commissionNode()

> **commissionNode**(`nodeOptions`): `Promise`\<[`PairedNode`](../../exports/device/classes/PairedNode.md)\>

Commissions/Pairs a new device into the controller fabric. The method returns a PairedNode instance of the
paired node on success.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeOptions` | [`NodeCommissioningOptions`](../README.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`PairedNode`](../../exports/device/classes/PairedNode.md)\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:144

***

### connect()

> **connect**(`connectOptions`?): `Promise`\<[`PairedNode`](../../exports/device/classes/PairedNode.md)[]\>

Connects to all paired nodes.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connectOptions`? | [`CommissioningControllerNodeOptions`](../../exports/device/README.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](../../exports/device/classes/PairedNode.md)[]\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:166

***

### connectNode()

> **connectNode**(`nodeId`, `connectOptions`?): `Promise`\<[`PairedNode`](../../exports/device/classes/PairedNode.md)\>

Connect to an already paired Node.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../exports/datatype/README.md#nodeid) |
| `connectOptions`? | [`CommissioningControllerNodeOptions`](../../exports/device/README.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](../../exports/device/classes/PairedNode.md)\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:159

***

### createInteractionClient()

> **createInteractionClient**(`nodeId`): `Promise`\<[`InteractionClient`](../../exports/interaction/classes/InteractionClient.md)\>

Creates and Return a new InteractionClient to communicate with a node. This is mainly used internally and should
not be used directly. See the PairedNode class for the public API.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../exports/datatype/README.md#nodeid) |

#### Returns

`Promise`\<[`InteractionClient`](../../exports/interaction/classes/InteractionClient.md)\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:191

***

### disconnectNode()

> **disconnectNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../exports/datatype/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:154

***

### discoverCommissionableDevices()

> **discoverCommissionableDevices**(`identifierData`, `discoveryCapabilities`?, `discoveredCallback`?, `timeoutSeconds`?): `Promise`\<[`CommissionableDevice`](../../exports/common/README.md#commissionabledevice)[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../../exports/common/README.md#commissionabledeviceidentifiers) |
| `discoveryCapabilities`? | [`TypeFromPartialBitSchema`](../../exports/schema/README.md#typefrompartialbitschemat)\<`object`\> |
| `discoveredCallback`? | (`device`) => `void` |
| `timeoutSeconds`? | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../../exports/common/README.md#commissionabledevice)[]\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:210

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

Returns active session information for all connected nodes.

#### Returns

`object`[]

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:213

***

### getCommissionedNodes()

> **getCommissionedNodes**(): [`NodeId`](../../exports/datatype/README.md#nodeid)[]

Returns an array with the Node Ids for all commissioned nodes.

#### Returns

[`NodeId`](../../exports/datatype/README.md#nodeid)[]

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:195

***

### getCommissionedNodesDetails()

> **getCommissionedNodesDetails**(): `object`[]

#### Returns

`object`[]

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:196

***

### getConnectedNode()

> **getConnectedNode**(`nodeId`): `undefined` \| [`PairedNode`](../../exports/device/classes/PairedNode.md)

Returns the PairedNode instance for a given node id, if this node is connected.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../exports/datatype/README.md#nodeid) |

#### Returns

`undefined` \| [`PairedNode`](../../exports/device/classes/PairedNode.md)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:193

***

### getPort()

> **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Overrides

[`MatterNode`](MatterNode.md).[`getPort`](MatterNode.md#getport)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:205

***

### initialize()

> **initialize**(`ipv4Disabled`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`initialize`](MatterNode.md#initialize)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:206

***

### isCommissioned()

> **isCommissioned**(): `boolean`

Returns true if t least one node is commissioned/paired with this controller instance.

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:186

***

### isNodeCommissioned()

> **isNodeCommissioned**(`nodeId`): `boolean`

Check if a given node id is commissioned on this controller.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../exports/datatype/README.md#nodeid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:146

***

### removeNode()

> **removeNode**(`nodeId`, `tryDecommissioning`?): `Promise`\<`void`\>

Remove a Node id from the controller. This method should only be used if the decommission method on the
PairedNode instance returns an error. By default it tries to decommission the node from the controller but will
remove it also in case of an error during decommissioning. Ideally try to decommission the node before and only
use this in case of an error.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../exports/datatype/README.md#nodeid) |
| `tryDecommissioning`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:153

***

### resetStorage()

> **resetStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:211

***

### setMdnsBroadcaster()

> **setMdnsBroadcaster**(`_mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `_mdnsBroadcaster` | [`MdnsBroadcaster`](../../exports/mdns/classes/MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsBroadcaster`](MatterNode.md#setmdnsbroadcaster)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:178

***

### setMdnsScanner()

> **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](../../exports/mdns/classes/MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsScanner`](MatterNode.md#setmdnsscanner)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:172

***

### setStorage()

> **setStorage**(`storage`): `void`

Set the Storage instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `storage` | [`StorageContext`](../../storage/export/classes/StorageContext.md)\<[`SyncStorage`](../../storage/export/classes/SyncStorage.md)\> | storage context to use |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:184

***

### start()

> **start**(): `Promise`\<`void`\>

Initialize the controller and connect to all commissioned nodes if autoConnect is not set to false.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`start`](MatterNode.md#start)

#### Source

packages/matter.js/dist/esm/CommissioningController.d.ts:208
