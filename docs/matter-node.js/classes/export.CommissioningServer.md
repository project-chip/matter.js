[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningServer

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
- [fillAndStoreEndpointIds](export.CommissioningServer.md#fillandstoreendpointids)
- [flowType](export.CommissioningServer.md#flowtype)
- [initializeEndpointIdsFromStorage](export.CommissioningServer.md#initializeendpointidsfromstorage)
- [interactionServer](export.CommissioningServer.md#interactionserver)
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
- [getActiveSessionInformation](export.CommissioningServer.md#getactivesessioninformation)
- [getChildEndpoint](export.CommissioningServer.md#getchildendpoint)
- [getCommissionedFabricInformation](export.CommissioningServer.md#getcommissionedfabricinformation)
- [getNextEndpointId](export.CommissioningServer.md#getnextendpointid)
- [getPairingCode](export.CommissioningServer.md#getpairingcode)
- [getPort](export.CommissioningServer.md#getport)
- [getRootClusterClient](export.CommissioningServer.md#getrootclusterclient)
- [getRootClusterServer](export.CommissioningServer.md#getrootclusterserver)
- [getRootEndpoint](export.CommissioningServer.md#getrootendpoint)
- [isCommissioned](export.CommissioningServer.md#iscommissioned)
- [removeCommandHandler](export.CommissioningServer.md#removecommandhandler)
- [setMdnsBroadcaster](export.CommissioningServer.md#setmdnsbroadcaster)
- [setMdnsScanner](export.CommissioningServer.md#setmdnsscanner)
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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:132

## Properties

### commandHandler

• `Private` `Readonly` **commandHandler**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:126

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:125

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:122

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:116

___

### endpointStructureStorage

• `Private` `Optional` **endpointStructureStorage**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:119

___

### fillAndStoreEndpointIds

• `Private` **fillAndStoreEndpointIds**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:152

___

### flowType

• `Private` `Readonly` **flowType**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:117

___

### initializeEndpointIdsFromStorage

• `Private` **initializeEndpointIdsFromStorage**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:151

___

### interactionServer

• `Private` `Optional` **interactionServer**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:123

___

### mdnsInstanceBroadcaster

• `Private` `Optional` **mdnsInstanceBroadcaster**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:121

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:120

___

### nextEndpointId

• `Private` **nextEndpointId**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:124

___

### options

• `Private` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:113

___

### passcode

• `Private` `Readonly` **passcode**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:115

___

### port

• `Private` `Readonly` **port**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:114

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](exports_device.RootEndpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[rootEndpoint](export.MatterNode.md#rootendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:19

___

### storage

• `Private` `Optional` **storage**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:118

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:198

___

### addDevice

▸ **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](exports_device.Device.md) \| [`Aggregator`](exports_device.Aggregator.md) | Device or Aggregator instance to add |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:183

___

### addEndpoint

▸ `Protected` **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Inherited from

[MatterNode](export.MatterNode.md).[addEndpoint](export.MatterNode.md#addendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:54

___

### addRootClusterClient

▸ **addRootClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](export.MatterNode.md).[addRootClusterClient](export.MatterNode.md#addrootclusterclient)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:37

___

### addRootClusterServer

▸ **addRootClusterServer**<`A`, `E`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[addRootClusterServer](export.MatterNode.md#addrootclusterserver)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:140

___

### advertise

▸ **advertise**(`limitTo?`): `Promise`<`void`\>

Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limitTo?` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\> | Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet and BLE if configured |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:147

___

### assignEndpointIds

▸ **assignEndpointIds**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:150

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:191

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

Get some basic details of all currently active sessions.

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:210

___

### getChildEndpoint

▸ `Protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[getChildEndpoint](export.MatterNode.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:61

___

### getCommissionedFabricInformation

▸ **getCommissionedFabricInformation**(): `any`

Get some basic details of all Fabrics the server is commissioned to.

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:208

___

### getNextEndpointId

▸ **getNextEndpointId**(`increase?`): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `increase?` | `boolean` |

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:149

___

### getPairingCode

▸ **getPairingCode**(`discoveryCapabilities?`): [`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

Return the pairing information for the device

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\> |

#### Returns

[`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:160

___

### getPort

▸ **getPort**(): `number`

Return the port the device is listening on

#### Returns

`number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:187

___

### getRootClusterClient

▸ **getRootClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootClusterClient](export.MatterNode.md#getrootclusterclient)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:43

___

### getRootClusterServer

▸ **getRootClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootClusterServer](export.MatterNode.md#getrootclusterserver)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:31

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](exports_device.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](exports_device.RootEndpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootEndpoint](export.MatterNode.md#getrootendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:47

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:156

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:205

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:172

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:166

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:177

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:206

___

### updateStructure

▸ **updateStructure**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:148
