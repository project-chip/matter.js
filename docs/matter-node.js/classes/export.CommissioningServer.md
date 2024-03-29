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

- [certification](export.CommissioningServer.md#certification)
- [commandHandler](export.CommissioningServer.md#commandhandler)
- [delayedAnnouncement](export.CommissioningServer.md#delayedannouncement)
- [deviceInstance](export.CommissioningServer.md#deviceinstance)
- [discriminator](export.CommissioningServer.md#discriminator)
- [endpointStructure](export.CommissioningServer.md#endpointstructure)
- [endpointStructureStorage](export.CommissioningServer.md#endpointstructurestorage)
- [eventHandler](export.CommissioningServer.md#eventhandler)
- [fillAndStoreEndpointIds](export.CommissioningServer.md#fillandstoreendpointids)
- [flowType](export.CommissioningServer.md#flowtype)
- [initializeEndpointIdsFromStorage](export.CommissioningServer.md#initializeendpointidsfromstorage)
- [interactionServer](export.CommissioningServer.md#interactionserver)
- [ipv4Disabled](export.CommissioningServer.md#ipv4disabled)
- [mdnsBroadcaster](export.CommissioningServer.md#mdnsbroadcaster)
- [mdnsInstanceBroadcaster](export.CommissioningServer.md#mdnsinstancebroadcaster)
- [mdnsScanner](export.CommissioningServer.md#mdnsscanner)
- [nextEndpointId](export.CommissioningServer.md#nextendpointid)
- [options](export.CommissioningServer.md#options)
- [passcode](export.CommissioningServer.md#passcode)
- [port](export.CommissioningServer.md#port)
- [productDescription](export.CommissioningServer.md#productdescription)
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

• **new CommissioningServer**(`options`): [`CommissioningServer`](export.CommissioningServer.md)

Creates a new CommissioningServer node and add all needed Root clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md) | The options for the CommissioningServer node |

#### Returns

[`CommissioningServer`](export.CommissioningServer.md)

#### Overrides

[MatterNode](export.MatterNode.md).[constructor](export.MatterNode.md#constructor)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:164

## Properties

### certification

• `Private` `Readonly` **certification**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:145

___

### commandHandler

• `Private` `Readonly` **commandHandler**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:158

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:157

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:151

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:142

___

### endpointStructure

• `Private` **endpointStructure**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:153

___

### endpointStructureStorage

• `Private` `Optional` **endpointStructureStorage**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:147

___

### eventHandler

• `Private` `Optional` **eventHandler**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:152

___

### fillAndStoreEndpointIds

• `Private` **fillAndStoreEndpointIds**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:220

___

### flowType

• `Private` `Readonly` **flowType**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:143

___

### initializeEndpointIdsFromStorage

• `Private` **initializeEndpointIdsFromStorage**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:219

___

### interactionServer

• `Private` `Optional` **interactionServer**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:154

___

### ipv4Disabled

• `Private` `Optional` **ipv4Disabled**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:139

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:149

___

### mdnsInstanceBroadcaster

• `Private` `Optional` **mdnsInstanceBroadcaster**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:150

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:148

___

### nextEndpointId

• `Private` **nextEndpointId**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:156

___

### options

• `Private` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:138

___

### passcode

• `Private` `Readonly` **passcode**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:141

___

### port

• `Private` `Optional` **port**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:140

___

### productDescription

• `Private` `Readonly` **productDescription**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:144

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](exports_device.RootEndpoint.md)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:155

___

### storage

• `Private` `Optional` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:146

## Methods

### addCommandHandler

▸ **addCommandHandler**\<`K`\>(`command`, `handler`): `void`

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:269

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:251

___

### addEndpoint

▸ **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:193

___

### addRootClusterClient

▸ **addRootClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:176

___

### addRootClusterServer

▸ **addRootClusterServer**\<`A`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:208

___

### advertise

▸ **advertise**(`limitTo?`): `Promise`\<`void`\>

Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limitTo?` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\> | Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet and BLE if configured |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:215

___

### assignEndpointIds

▸ **assignEndpointIds**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:218

___

### close

▸ **close**(): `Promise`\<`void`\>

Close network connections of the device and stop responding to requests

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:261

___

### factoryReset

▸ **factoryReset**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:262

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(`fabricIndex?`): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

Get some basic details of all currently active sessions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) | Optional fabric index to filter for. If not set all sessions are returned. |

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:299

___

### getChildEndpoint

▸ **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:200

___

### getCommissionedFabricInformation

▸ **getCommissionedFabricInformation**(`fabricIndex?`): [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation)[]

Get some basic details of all Fabrics the server is commissioned to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) | Optional fabric index to filter for. If not set all fabrics are returned. |

#### Returns

[`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation)[]

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:293

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:217

___

### getPairingCode

▸ **getPairingCode**(`discoveryCapabilities?`): [`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

Return the pairing information for the device

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\> |

#### Returns

[`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:228

___

### getPort

▸ **getPort**(): `undefined` \| `number`

Return the port the device is listening on

#### Returns

`undefined` \| `number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:255

___

### getRootClusterClient

▸ **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:182

___

### getRootClusterServer

▸ **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:170

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](exports_device.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](exports_device.RootEndpoint.md)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:186

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:285

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:224

___

### removeCommandHandler

▸ **removeCommandHandler**\<`K`\>(`command`, `handler`): `void`

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:276

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:240

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:234

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:257

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:283

___

### setStorage

▸ **setStorage**(`storage`): `Promise`\<`void`\>

Set the StorageManager instance. Should be only used internally

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:245

___

### start

▸ **start**(): `Promise`\<`void`\>

Starts the Matter device and advertises it.

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:287

___

### updateStructure

▸ **updateStructure**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:216
