[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningController

# Class: CommissioningController

[export](../modules/export.md).CommissioningController

Controller class to commission and connect multiple nodes into one fabric.

## Hierarchy

- [`MatterNode`](export.MatterNode.md)

  ↳ **`CommissioningController`**

## Table of contents

### Constructors

- [constructor](export.CommissioningController.md#constructor)

### Properties

- [connectedNodes](export.CommissioningController.md#connectednodes)
- [controllerInstance](export.CommissioningController.md#controllerinstance)
- [enhanceDeviceDetailsFromCache](export.CommissioningController.md#enhancedevicedetailsfromcache)
- [enhanceDeviceDetailsFromRemote](export.CommissioningController.md#enhancedevicedetailsfromremote)
- [initializeController](export.CommissioningController.md#initializecontroller)
- [ipv4Disabled](export.CommissioningController.md#ipv4disabled)
- [listeningAddressIpv4](export.CommissioningController.md#listeningaddressipv4)
- [listeningAddressIpv6](export.CommissioningController.md#listeningaddressipv6)
- [mdnsScanner](export.CommissioningController.md#mdnsscanner)
- [options](export.CommissioningController.md#options)
- [sessionDisconnectedHandler](export.CommissioningController.md#sessiondisconnectedhandler)
- [started](export.CommissioningController.md#started)
- [storage](export.CommissioningController.md#storage)

### Accessors

- [nodeId](export.CommissioningController.md#nodeid)

### Methods

- [assertControllerIsStarted](export.CommissioningController.md#assertcontrollerisstarted)
- [assertIsAddedToMatterServer](export.CommissioningController.md#assertisaddedtomatterserver)
- [cancelCommissionableDeviceDiscovery](export.CommissioningController.md#cancelcommissionabledevicediscovery)
- [close](export.CommissioningController.md#close)
- [commissionNode](export.CommissioningController.md#commissionnode)
- [connect](export.CommissioningController.md#connect)
- [connectNode](export.CommissioningController.md#connectnode)
- [createInteractionClient](export.CommissioningController.md#createinteractionclient)
- [disconnectNode](export.CommissioningController.md#disconnectnode)
- [discoverCommissionableDevices](export.CommissioningController.md#discovercommissionabledevices)
- [getActiveSessionInformation](export.CommissioningController.md#getactivesessioninformation)
- [getCommissionedNodes](export.CommissioningController.md#getcommissionednodes)
- [getCommissionedNodesDetails](export.CommissioningController.md#getcommissionednodesdetails)
- [getConnectedNode](export.CommissioningController.md#getconnectednode)
- [getPort](export.CommissioningController.md#getport)
- [initialize](export.CommissioningController.md#initialize)
- [isCommissioned](export.CommissioningController.md#iscommissioned)
- [isNodeCommissioned](export.CommissioningController.md#isnodecommissioned)
- [removeNode](export.CommissioningController.md#removenode)
- [resetStorage](export.CommissioningController.md#resetstorage)
- [setMdnsBroadcaster](export.CommissioningController.md#setmdnsbroadcaster)
- [setMdnsScanner](export.CommissioningController.md#setmdnsscanner)
- [setStorage](export.CommissioningController.md#setstorage)
- [start](export.CommissioningController.md#start)

## Constructors

### constructor

• **new CommissioningController**(`options`): [`CommissioningController`](export.CommissioningController.md)

Creates a new CommissioningController instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningControllerOptions`](../modules/export.md#commissioningcontrolleroptions) | The options for the CommissioningController |

#### Returns

[`CommissioningController`](export.CommissioningController.md)

#### Overrides

[MatterNode](export.MatterNode.md).[constructor](export.MatterNode.md#constructor)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:113

## Properties

### connectedNodes

• `Private` **connectedNodes**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:106

___

### controllerInstance

• `Private` `Optional` **controllerInstance**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:105

___

### enhanceDeviceDetailsFromCache

• `Private` **enhanceDeviceDetailsFromCache**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:142

___

### enhanceDeviceDetailsFromRemote

• `Private` **enhanceDeviceDetailsFromRemote**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:143

___

### initializeController

• `Private` **initializeController**: `any`

Internal method to initialize a MatterController instance.

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:121

___

### ipv4Disabled

• `Private` `Optional` **ipv4Disabled**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:100

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:101

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:102

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:104

___

### options

• `Private` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:98

___

### sessionDisconnectedHandler

• `Private` **sessionDisconnectedHandler**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:107

___

### started

• `Private` **started**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:99

___

### storage

• `Private` `Optional` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:103

## Accessors

### nodeId

• `get` **nodeId**(): `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:114

## Methods

### assertControllerIsStarted

▸ **assertControllerIsStarted**(`errorText?`): [`MatterController`](export._internal_.MatterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorText?` | `string` |

#### Returns

[`MatterController`](export._internal_.MatterController.md)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:119

___

### assertIsAddedToMatterServer

▸ **assertIsAddedToMatterServer**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:115

___

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`identifierData`, `discoveryCapabilities?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `discoveryCapabilities?` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:191

___

### close

▸ **close**(): `Promise`\<`void`\>

Disconnects all connected nodes and Closes the network connections and other resources of the controller.

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:186

___

### commissionNode

▸ **commissionNode**(`nodeOptions`): `Promise`\<[`PairedNode`](exports_device.PairedNode.md)\>

Commissions/Pairs a new device into the controller fabric. The method returns a PairedNode instance of the
paired node on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeOptions` | [`NodeCommissioningOptions`](../modules/export.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`PairedNode`](exports_device.PairedNode.md)\>

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:126

___

### connect

▸ **connect**(`connectOptions?`): `Promise`\<[`PairedNode`](exports_device.PairedNode.md)[]\>

Connects to all paired nodes.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectOptions?` | [`CommissioningControllerNodeOptions`](../modules/exports_device.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](exports_device.PairedNode.md)[]\>

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:148

___

### connectNode

▸ **connectNode**(`nodeId`, `connectOptions?`): `Promise`\<[`PairedNode`](exports_device.PairedNode.md)\>

Connect to an already paired Node.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `connectOptions?` | [`CommissioningControllerNodeOptions`](../modules/exports_device.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](exports_device.PairedNode.md)\>

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:141

___

### createInteractionClient

▸ **createInteractionClient**(`nodeId`): `Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

Creates and Return a new InteractionClient to communicate with a node. This is mainly used internally and should
not be used directly. See the PairedNode class for the public API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:173

___

### disconnectNode

▸ **disconnectNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:136

___

### discoverCommissionableDevices

▸ **discoverCommissionableDevices**(`identifierData`, `discoveryCapabilities?`, `discoveredCallback?`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `discoveryCapabilities?` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\> |
| `discoveredCallback?` | (`device`: [`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)) => `void` |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:192

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

Returns active session information for all connected nodes.

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:195

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/exports_datatype.md#nodeid)[]

Returns an array with the Node Ids for all commissioned nodes.

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:177

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/exports_common.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/exports_common.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:178

___

### getConnectedNode

▸ **getConnectedNode**(`nodeId`): `undefined` \| [`PairedNode`](exports_device.PairedNode.md)

Returns the PairedNode instance for a given node id, if this node is connected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`undefined` \| [`PairedNode`](exports_device.PairedNode.md)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:175

___

### getPort

▸ **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:187

___

### initialize

▸ **initialize**(`ipv4Disabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[initialize](export.MatterNode.md#initialize)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:188

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Returns true if t least one node is commissioned/paired with this controller instance.

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:168

___

### isNodeCommissioned

▸ **isNodeCommissioned**(`nodeId`): `boolean`

Check if a given node id is commissioned on this controller.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:128

___

### removeNode

▸ **removeNode**(`nodeId`, `tryDecommissioning?`): `Promise`\<`void`\>

Remove a Node id from the controller. This method should only be used if the decommission method on the
PairedNode instance returns an error. By default it tries to decommission the node from the controller but will
remove it also in case of an error during decommissioning. Ideally try to decommission the node before and only
use this in case of an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `tryDecommissioning?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:135

___

### resetStorage

▸ **resetStorage**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:193

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`_mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_mdnsBroadcaster` | [`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:160

___

### setMdnsScanner

▸ **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsScanner](export.MatterNode.md#setmdnsscanner)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:154

___

### setStorage

▸ **setStorage**(`storage`): `void`

Set the Storage instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) | storage context to use |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:166

___

### start

▸ **start**(): `Promise`\<`void`\>

Initialize the controller and connect to all commissioned nodes if autoConnect is not set to false.

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:190
