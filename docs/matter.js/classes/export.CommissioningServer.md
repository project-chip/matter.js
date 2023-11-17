[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningServer

# Class: CommissioningServer

[export](../modules/export.md).CommissioningServer

A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
host

## Hierarchy

- [`MatterNode`](export.MatterNode.md)

  ↳ **`CommissioningServer`**

## Table of contents

### Constructors

- [constructor](export.CommissioningServer.md#constructor)

### Properties

- [commandHandler](export.CommissioningServer.md#commandhandler)
- [delayedAnnouncement](export.CommissioningServer.md#delayedannouncement)
- [deviceInstance](export.CommissioningServer.md#deviceinstance)
- [discriminator](export.CommissioningServer.md#discriminator)
- [endpointStructureStorage](export.CommissioningServer.md#endpointstructurestorage)
- [flowType](export.CommissioningServer.md#flowtype)
- [interactionServer](export.CommissioningServer.md#interactionserver)
- [ipv4Disabled](export.CommissioningServer.md#ipv4disabled)
- [mdnsInstanceBroadcaster](export.CommissioningServer.md#mdnsinstancebroadcaster)
- [mdnsScanner](export.CommissioningServer.md#mdnsscanner)
- [nextEndpointId](export.CommissioningServer.md#nextendpointid)
- [options](export.CommissioningServer.md#options)
- [passcode](export.CommissioningServer.md#passcode)
- [port](export.CommissioningServer.md#port)
- [rootEndpoint](export.CommissioningServer.md#rootendpoint)
- [storage](export.CommissioningServer.md#storage)

### Methods

- [addCommandHandler](export.CommissioningServer.md#addcommandhandler)
- [addDevice](export.CommissioningServer.md#adddevice)
- [addEndpoint](export.CommissioningServer.md#addendpoint)
- [addRootClusterClient](export.CommissioningServer.md#addrootclusterclient)
- [addRootClusterServer](export.CommissioningServer.md#addrootclusterserver)
- [advertise](export.CommissioningServer.md#advertise)
- [assignEndpointIds](export.CommissioningServer.md#assignendpointids)
- [close](export.CommissioningServer.md#close)
- [factoryReset](export.CommissioningServer.md#factoryreset)
- [fillAndStoreEndpointIds](export.CommissioningServer.md#fillandstoreendpointids)
- [getActiveSessionInformation](export.CommissioningServer.md#getactivesessioninformation)
- [getChildEndpoint](export.CommissioningServer.md#getchildendpoint)
- [getCommissionedFabricInformation](export.CommissioningServer.md#getcommissionedfabricinformation)
- [getNextEndpointId](export.CommissioningServer.md#getnextendpointid)
- [getPairingCode](export.CommissioningServer.md#getpairingcode)
- [getPort](export.CommissioningServer.md#getport)
- [getRootClusterClient](export.CommissioningServer.md#getrootclusterclient)
- [getRootClusterServer](export.CommissioningServer.md#getrootclusterserver)
- [getRootEndpoint](export.CommissioningServer.md#getrootendpoint)
- [initialize](export.CommissioningServer.md#initialize)
- [initializeEndpointIdsFromStorage](export.CommissioningServer.md#initializeendpointidsfromstorage)
- [isCommissioned](export.CommissioningServer.md#iscommissioned)
- [removeCommandHandler](export.CommissioningServer.md#removecommandhandler)
- [setMdnsBroadcaster](export.CommissioningServer.md#setmdnsbroadcaster)
- [setMdnsScanner](export.CommissioningServer.md#setmdnsscanner)
- [setPort](export.CommissioningServer.md#setport)
- [setReachability](export.CommissioningServer.md#setreachability)
- [setStorage](export.CommissioningServer.md#setstorage)
- [start](export.CommissioningServer.md#start)
- [updateStructure](export.CommissioningServer.md#updatestructure)

## Constructors

### constructor

• **new CommissioningServer**(`options`)

Creates a new CommissioningServer node and add all needed Root clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md) | The options for the CommissioningServer node |

#### Overrides

[MatterNode](export.MatterNode.md).[constructor](export.MatterNode.md#constructor)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:240](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L240)

## Properties

### commandHandler

• `Private` `Readonly` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)<[`CommissioningServerCommands`](../modules/export._internal_.md#commissioningservercommands)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:233](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L233)

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:231](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L231)

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: [`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:224](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L224)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:216](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L216)

___

### endpointStructureStorage

• `Private` `Optional` **endpointStructureStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:220](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L220)

___

### flowType

• `Private` `Readonly` **flowType**: [`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:217](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L217)

___

### interactionServer

• `Private` `Optional` **interactionServer**: [`InteractionServer`](protocol_interaction_export.InteractionServer.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:225](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L225)

___

### ipv4Disabled

• `Private` `Optional` **ipv4Disabled**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:213](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L213)

___

### mdnsInstanceBroadcaster

• `Private` `Optional` **mdnsInstanceBroadcaster**: [`MdnsInstanceBroadcaster`](export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:222](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L222)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:221](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L221)

___

### nextEndpointId

• `Private` **nextEndpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:229](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L229)

___

### options

• `Private` `Readonly` **options**: [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md)

The options for the CommissioningServer node

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:240](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L240)

___

### passcode

• `Private` `Readonly` **passcode**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:215](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L215)

___

### port

• `Private` `Optional` **port**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:214](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L214)

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:227](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L227)

___

### storage

• `Private` `Optional` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:219](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L219)

## Methods

### addCommandHandler

▸ **addCommandHandler**<`K`\>(`command`, `handler`): `void`

Add a new command handler for the given command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"testEventTrigger"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to add the handler for |
| `handler` | [`CommissioningServerCommands`](../modules/export._internal_.md#commissioningservercommands)[`K`] | Handler function to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:893](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L893)

___

### addDevice

▸ **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device_export.Device.md) \| [`Aggregator`](device_export.Aggregator.md) | Device or Aggregator instance to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:837](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L837)

___

### addEndpoint

▸ `Protected` **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:503](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L503)

___

### addRootClusterClient

▸ **addRootClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:469](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L469)

___

### addRootClusterServer

▸ **addRootClusterServer**<`A`, `E`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:524](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L524)

___

### advertise

▸ **advertise**(`limitTo?`): `Promise`<`void`\>

Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limitTo?` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag-1)  }\> | Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet and BLE if configured |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:544](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L544)

___

### assignEndpointIds

▸ **assignEndpointIds**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:678](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L678)

___

### close

▸ **close**(): `Promise`<`void`\>

Close network connections of the device and stop responding to requests

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:860](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L860)

___

### factoryReset

▸ **factoryReset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:868](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L868)

___

### fillAndStoreEndpointIds

▸ `Private` **fillAndStoreEndpointIds**(`endpoint`, `parentUniquePrefix?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:720](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L720)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(`fabricIndex?`): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

Get some basic details of all currently active sessions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) | Optional fabric index to filter for. If not set all sessions are returned. |

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:966](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L966)

___

### getChildEndpoint

▸ `Protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:513](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L513)

___

### getCommissionedFabricInformation

▸ **getCommissionedFabricInformation**(`fabricIndex?`): { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  }[]

Get some basic details of all Fabrics the server is commissioned to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) | Optional fabric index to filter for. If not set all fabrics are returned. |

#### Returns

{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  }[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:954](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L954)

___

### getNextEndpointId

▸ **getNextEndpointId**(`increase?`): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `increase` | `boolean` | `true` |

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:671](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L671)

___

### getPairingCode

▸ **getPairingCode**(`discoveryCapabilities?`): [`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

Return the pairing information for the device

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag-1)  }\> |

#### Returns

[`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:756](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L756)

___

### getPort

▸ **getPort**(): `undefined` \| `number`

Return the port the device is listening on

#### Returns

`undefined` \| `number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:844](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L844)

___

### getRootClusterClient

▸ **getRootClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:480](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L480)

___

### getRootClusterServer

▸ **getRootClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:454](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L454)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device_export.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:493](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L493)

___

### initialize

▸ **initialize**(`ipv4Disabled`): `void`

used internally by MatterServer to initialize the state of the device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[initialize](export.MatterNode.md#initialize)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:930](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L930)

___

### initializeEndpointIdsFromStorage

▸ `Private` **initializeEndpointIdsFromStorage**(`endpoint`, `parentUniquePrefix?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:685](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L685)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:749](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L749)

___

### removeCommandHandler

▸ **removeCommandHandler**<`K`\>(`command`, `handler`): `void`

Remove a command handler for the given command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"testEventTrigger"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to remove the handler for |
| `handler` | [`CommissioningServerCommands`](../modules/export._internal_.md#commissioningservercommands)[`K`] | Handler function to remove |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:906](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L906)

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:816](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L816)

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

[packages/matter.js/src/CommissioningServer.ts:807](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L807)

___

### setPort

▸ **setPort**(`port`): `void`

Set the port the device is listening on. Can only be called before the device is initialized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:849](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L849)

___

### setReachability

▸ **setReachability**(`reachable`): `void`

Set the reachability of the commissioning server aka "the main matter device". This call only has effect when
the reachability flag was set in the BasicInformationCluster or in the BasicInformation data in the constructor!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reachable` | `boolean` | true if reachable, false otherwise |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:919](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L919)

___

### setStorage

▸ **setStorage**(`storage`): `void`

Set the StorageManager instance. Should be only used internally

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:827](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L827)

___

### start

▸ **start**(): `Promise`<`void`\>

Starts the Matter device and advertises it.

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:940](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L940)

___

### updateStructure

▸ **updateStructure**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:664](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/CommissioningServer.ts#L664)
