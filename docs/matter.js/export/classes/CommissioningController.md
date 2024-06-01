[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [export](../README.md) / CommissioningController

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

[packages/matter.js/src/CommissioningController.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L169)

## Properties

### connectedNodes

> `private` **connectedNodes**: `Map`\<[`NodeId`](../../datatype/export/README.md#nodeid), [`PairedNode`](../../device/export/classes/PairedNode.md)\>

#### Source

[packages/matter.js/src/CommissioningController.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L161)

***

### controllerInstance?

> `private` `optional` **controllerInstance**: [`MatterController`](../-internal-/classes/MatterController.md)

#### Source

[packages/matter.js/src/CommissioningController.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L160)

***

### environment?

> `private` `optional` **environment**: [`Environment`](../../environment/export/classes/Environment.md)

#### Source

[packages/matter.js/src/CommissioningController.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L155)

***

### ipv4Disabled?

> `private` `optional` **ipv4Disabled**: `boolean`

#### Source

[packages/matter.js/src/CommissioningController.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L151)

***

### listeningAddressIpv4?

> `private` `optional` `readonly` **listeningAddressIpv4**: `string`

#### Source

[packages/matter.js/src/CommissioningController.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L152)

***

### listeningAddressIpv6?

> `private` `optional` `readonly` **listeningAddressIpv6**: `string`

#### Source

[packages/matter.js/src/CommissioningController.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L153)

***

### mdnsScanner?

> `private` `optional` **mdnsScanner**: [`MdnsScanner`](../../mdns/export/classes/MdnsScanner.md)

#### Source

[packages/matter.js/src/CommissioningController.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L158)

***

### options

> `private` `readonly` **options**: [`CommissioningControllerOptions`](../README.md#commissioningcontrolleroptions)

The options for the CommissioningController

#### Source

[packages/matter.js/src/CommissioningController.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L169)

***

### sessionDisconnectedHandler

> `private` **sessionDisconnectedHandler**: `Map`\<[`NodeId`](../../datatype/export/README.md#nodeid), () => `Promise`\<`void`\>\>

#### Source

[packages/matter.js/src/CommissioningController.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L162)

***

### started

> `private` **started**: `boolean` = `false`

#### Source

[packages/matter.js/src/CommissioningController.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L150)

***

### storage?

> `private` `optional` **storage**: [`StorageContext`](../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/CommissioningController.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L156)

## Accessors

### nodeId

> `get` **nodeId**(): `undefined` \| [`NodeId`](../../datatype/export/README.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/CommissioningController.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L173)

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

[packages/matter.js/src/CommissioningController.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L187)

***

### assertIsAddedToMatterServer()

> **assertIsAddedToMatterServer**(): `object`

#### Returns

`object`

##### environment

> **environment**: `undefined` \| [`Environment`](../../environment/export/classes/Environment.md)

##### mdnsScanner

> **mdnsScanner**: [`MdnsScanner`](../../mdns/export/classes/MdnsScanner.md)

##### storage

> **storage**: `undefined` \| [`StorageContext`](../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/CommissioningController.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L177)

***

### cancelCommissionableDeviceDiscovery()

> **cancelCommissionableDeviceDiscovery**(`identifierData`, `discoveryCapabilities`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../../common/export/README.md#commissionabledeviceidentifiers) |
| `discoveryCapabilities`? | [`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningController.ts:532](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L532)

***

### close()

> **close**(): `Promise`\<`void`\>

Disconnects all connected nodes and Closes the network connections and other resources of the controller.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`close`](MatterNode.md#close)

#### Source

[packages/matter.js/src/CommissioningController.ts:474](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L474)

***

### commissionNode()

> **commissionNode**(`nodeOptions`): `Promise`\<[`PairedNode`](../../device/export/classes/PairedNode.md)\>

Commissions/Pairs a new device into the controller fabric. The method returns a PairedNode instance of the
paired node on success.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeOptions` | [`NodeCommissioningOptions`](../README.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`PairedNode`](../../device/export/classes/PairedNode.md)\>

#### Source

[packages/matter.js/src/CommissioningController.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L249)

***

### connect()

> **connect**(`connectOptions`?): `Promise`\<[`PairedNode`](../../device/export/classes/PairedNode.md)[]\>

Connects to all paired nodes.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connectOptions`? | [`CommissioningControllerNodeOptions`](../../device/export/README.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](../../device/export/classes/PairedNode.md)[]\>

#### Source

[packages/matter.js/src/CommissioningController.ts:396](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L396)

***

### connectNode()

> **connectNode**(`nodeId`, `connectOptions`?): `Promise`\<[`PairedNode`](../../device/export/classes/PairedNode.md)\>

Connect to an already paired Node.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |
| `connectOptions`? | [`CommissioningControllerNodeOptions`](../../device/export/README.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](../../device/export/classes/PairedNode.md)\>

#### Source

[packages/matter.js/src/CommissioningController.ts:309](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L309)

***

### createInteractionClient()

> **createInteractionClient**(`nodeId`): `Promise`\<[`InteractionClient`](../../protocol/interaction/export/classes/InteractionClient.md)\>

Creates and Return a new InteractionClient to communicate with a node. This is mainly used internally and should
not be used directly. See the PairedNode class for the public API.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |

#### Returns

`Promise`\<[`InteractionClient`](../../protocol/interaction/export/classes/InteractionClient.md)\>

#### Source

[packages/matter.js/src/CommissioningController.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L450)

***

### disconnectNode()

> **disconnectNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningController.ts:297](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L297)

***

### discoverCommissionableDevices()

> **discoverCommissionableDevices**(`identifierData`, `discoveryCapabilities`?, `discoveredCallback`?, `timeoutSeconds`?): `Promise`\<[`CommissionableDevice`](../../common/export/README.md#commissionabledevice)[]\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../../common/export/README.md#commissionabledeviceidentifiers) | `undefined` |
| `discoveryCapabilities`? | [`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> | `undefined` |
| `discoveredCallback`? | (`device`) => `void` | `undefined` |
| `timeoutSeconds`? | `number` | `900` |

#### Returns

`Promise`\<[`CommissionableDevice`](../../common/export/README.md#commissionabledevice)[]\>

#### Source

[packages/matter.js/src/CommissioningController.ts:543](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L543)

***

### enhanceDeviceDetailsFromCache()

> `private` **enhanceDeviceDetailsFromCache**(`nodeId`, `pairedNode`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |
| `pairedNode` | [`PairedNode`](../../device/export/classes/PairedNode.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningController.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L342)

***

### enhanceDeviceDetailsFromRemote()

> `private` **enhanceDeviceDetailsFromRemote**(`nodeId`, `pairedNode`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |
| `pairedNode` | [`PairedNode`](../../device/export/classes/PairedNode.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningController.ts:368](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L368)

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

Returns active session information for all connected nodes.

#### Returns

`object`[]

#### Source

[packages/matter.js/src/CommissioningController.ts:575](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L575)

***

### getCommissionedNodes()

> **getCommissionedNodes**(): [`NodeId`](../../datatype/export/README.md#nodeid)[]

Returns an array with the Node Ids for all commissioned nodes.

#### Returns

[`NodeId`](../../datatype/export/README.md#nodeid)[]

#### Source

[packages/matter.js/src/CommissioningController.ts:461](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L461)

***

### getCommissionedNodesDetails()

> **getCommissionedNodesDetails**(): `object`[]

#### Returns

`object`[]

#### Source

[packages/matter.js/src/CommissioningController.ts:467](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L467)

***

### getConnectedNode()

> **getConnectedNode**(`nodeId`): `undefined` \| [`PairedNode`](../../device/export/classes/PairedNode.md)

Returns the PairedNode instance for a given node id, if this node is connected.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`PairedNode`](../../device/export/classes/PairedNode.md)

#### Source

[packages/matter.js/src/CommissioningController.ts:456](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L456)

***

### getPort()

> **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Overrides

[`MatterNode`](MatterNode.md).[`getPort`](MatterNode.md#getport)

#### Source

[packages/matter.js/src/CommissioningController.ts:485](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L485)

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

[packages/matter.js/src/CommissioningController.ts:489](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L489)

***

### initializeController()

> `private` **initializeController**(): `Promise`\<[`MatterController`](../-internal-/classes/MatterController.md)\>

Internal method to initialize a MatterController instance.

#### Returns

`Promise`\<[`MatterController`](../-internal-/classes/MatterController.md)\>

#### Source

[packages/matter.js/src/CommissioningController.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L197)

***

### isCommissioned()

> **isCommissioned**(): `boolean`

Returns true if t least one node is commissioned/paired with this controller instance.

#### Returns

`boolean`

#### Source

[packages/matter.js/src/CommissioningController.ts:440](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L440)

***

### isNodeCommissioned()

> **isNodeCommissioned**(`nodeId`): `boolean`

Check if a given node id is commissioned on this controller.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/CommissioningController.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L266)

***

### removeNode()

> **removeNode**(`nodeId`, `tryDecommissioning`): `Promise`\<`void`\>

Remove a Node id from the controller. This method should only be used if the decommission method on the
PairedNode instance returns an error. By default it tries to decommission the node from the controller but will
remove it also in case of an error during decommissioning. Ideally try to decommission the node before and only
use this in case of an error.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) | `undefined` |
| `tryDecommissioning` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningController.ts:277](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L277)

***

### resetStorage()

> **resetStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningController.ts:559](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L559)

***

### setMdnsBroadcaster()

> **setMdnsBroadcaster**(`_mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `_mdnsBroadcaster` | [`MdnsBroadcaster`](../../mdns/export/classes/MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsBroadcaster`](MatterNode.md#setmdnsbroadcaster)

#### Source

[packages/matter.js/src/CommissioningController.ts:425](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L425)

***

### setMdnsScanner()

> **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](../../mdns/export/classes/MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsScanner`](MatterNode.md#setmdnsscanner)

#### Source

[packages/matter.js/src/CommissioningController.ts:416](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L416)

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

[packages/matter.js/src/CommissioningController.ts:434](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L434)

***

### start()

> **start**(): `Promise`\<`void`\>

Initialize the controller and connect to all commissioned nodes if autoConnect is not set to false.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`start`](MatterNode.md#start)

#### Source

[packages/matter.js/src/CommissioningController.ts:502](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L502)
