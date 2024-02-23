[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningController

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
- [enhanceDeviceDetailsFromCache](export.CommissioningController.md#enhancedevicedetailsfromcache)
- [enhanceDeviceDetailsFromRemote](export.CommissioningController.md#enhancedevicedetailsfromremote)
- [getActiveSessionInformation](export.CommissioningController.md#getactivesessioninformation)
- [getCommissionedNodes](export.CommissioningController.md#getcommissionednodes)
- [getCommissionedNodesDetails](export.CommissioningController.md#getcommissionednodesdetails)
- [getConnectedNode](export.CommissioningController.md#getconnectednode)
- [getPort](export.CommissioningController.md#getport)
- [initialize](export.CommissioningController.md#initialize)
- [initializeController](export.CommissioningController.md#initializecontroller)
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

[packages/matter.js/src/CommissioningController.ts:146](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L146)

## Properties

### connectedNodes

• `Private` **connectedNodes**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`PairedNode`](device_export.PairedNode.md)\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:138](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L138)

___

### controllerInstance

• `Private` `Optional` **controllerInstance**: [`MatterController`](export._internal_.MatterController.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:137](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L137)

___

### ipv4Disabled

• `Private` `Optional` **ipv4Disabled**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:130](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L130)

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `string`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:131](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L131)

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `string`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:132](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L132)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:135](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L135)

___

### options

• `Private` `Readonly` **options**: [`CommissioningControllerOptions`](../modules/export.md#commissioningcontrolleroptions)

The options for the CommissioningController

#### Defined in

[packages/matter.js/src/CommissioningController.ts:146](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L146)

___

### sessionDisconnectedHandler

• `Private` **sessionDisconnectedHandler**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), () => `Promise`\<`void`\>\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:139](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L139)

___

### started

• `Private` **started**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:129](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L129)

___

### storage

• `Private` `Optional` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:134](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L134)

## Accessors

### nodeId

• `get` **nodeId**(): `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

`undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:150](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L150)

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

[packages/matter.js/src/CommissioningController.ts:164](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L164)

___

### assertIsAddedToMatterServer

▸ **assertIsAddedToMatterServer**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

[packages/matter.js/src/CommissioningController.ts:154](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L154)

___

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`identifierData`, `discoveryCapabilities?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |
| `discoveryCapabilities?` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:469](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L469)

___

### close

▸ **close**(): `Promise`\<`void`\>

Disconnects all connected nodes and Closes the network connections and other resources of the controller.

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:428](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L428)

___

### commissionNode

▸ **commissionNode**(`nodeOptions`): `Promise`\<[`PairedNode`](device_export.PairedNode.md)\>

Commissions/Pairs a new device into the controller fabric. The method returns a PairedNode instance of the
paired node on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeOptions` | [`NodeCommissioningOptions`](../modules/export.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`PairedNode`](device_export.PairedNode.md)\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:204](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L204)

___

### connect

▸ **connect**(`connectOptions?`): `Promise`\<[`PairedNode`](device_export.PairedNode.md)[]\>

Connects to all paired nodes.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectOptions?` | [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](device_export.PairedNode.md)[]\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:351](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L351)

___

### connectNode

▸ **connectNode**(`nodeId`, `connectOptions?`): `Promise`\<[`PairedNode`](device_export.PairedNode.md)\>

Connect to an already paired Node.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `connectOptions?` | [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) |

#### Returns

`Promise`\<[`PairedNode`](device_export.PairedNode.md)\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:264](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L264)

___

### createInteractionClient

▸ **createInteractionClient**(`nodeId`): `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Creates and Return a new InteractionClient to communicate with a node. This is mainly used internally and should
not be used directly. See the PairedNode class for the public API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:404](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L404)

___

### disconnectNode

▸ **disconnectNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:252](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L252)

___

### discoverCommissionableDevices

▸ **discoverCommissionableDevices**(`identifierData`, `discoveryCapabilities?`, `discoveredCallback?`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `discoveryCapabilities?` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> | `undefined` |
| `discoveredCallback?` | (`device`: [`CommissionableDevice`](../modules/common_export.md#commissionabledevice)) => `void` | `undefined` |
| `timeoutSeconds` | `number` | `900` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:480](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L480)

___

### enhanceDeviceDetailsFromCache

▸ **enhanceDeviceDetailsFromCache**(`nodeId`, `pairedNode`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `pairedNode` | [`PairedNode`](device_export.PairedNode.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:297](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L297)

___

### enhanceDeviceDetailsFromRemote

▸ **enhanceDeviceDetailsFromRemote**(`nodeId`, `pairedNode`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `pairedNode` | [`PairedNode`](device_export.PairedNode.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:323](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L323)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

Returns active session information for all connected nodes.

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/CommissioningController.ts:505](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L505)

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/datatype_export.md#nodeid)[]

Returns an array with the Node Ids for all commissioned nodes.

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Defined in

[packages/matter.js/src/CommissioningController.ts:415](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L415)

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` = discoveryData.DN; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` = discoveryData.DN; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

[packages/matter.js/src/CommissioningController.ts:421](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L421)

___

### getConnectedNode

▸ **getConnectedNode**(`nodeId`): `undefined` \| [`PairedNode`](device_export.PairedNode.md)

Returns the PairedNode instance for a given node id, if this node is connected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`PairedNode`](device_export.PairedNode.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:410](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L410)

___

### getPort

▸ **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:439](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L439)

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

[packages/matter.js/src/CommissioningController.ts:443](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L443)

___

### initializeController

▸ **initializeController**(): `Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

Internal method to initialize a MatterController instance.

#### Returns

`Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:174](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L174)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Returns true if t least one node is commissioned/paired with this controller instance.

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:394](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L394)

___

### isNodeCommissioned

▸ **isNodeCommissioned**(`nodeId`): `boolean`

Check if a given node id is commissioned on this controller.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:221](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L221)

___

### removeNode

▸ **removeNode**(`nodeId`, `tryDecommissioning?`): `Promise`\<`void`\>

Remove a Node id from the controller. This method should only be used if the decommission method on the
PairedNode instance returns an error. By default it tries to decommission the node from the controller but will
remove it also in case of an error during decommissioning. Ideally try to decommission the node before and only
use this in case of an error.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `tryDecommissioning` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:232](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L232)

___

### resetStorage

▸ **resetStorage**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:496](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L496)

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`_mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:380](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L380)

___

### setMdnsScanner

▸ **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsScanner](export.MatterNode.md#setmdnsscanner)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:371](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L371)

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

[packages/matter.js/src/CommissioningController.ts:389](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L389)

___

### start

▸ **start**(): `Promise`\<`void`\>

Initialize the controller and connect to all commissioned nodes if autoConnect is not set to false.

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:456](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/CommissioningController.ts#L456)
