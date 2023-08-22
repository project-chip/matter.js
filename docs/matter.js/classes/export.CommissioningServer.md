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
- [initializeEndpointIdsFromStorage](export.CommissioningServer.md#initializeendpointidsfromstorage)
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

[packages/matter.js/src/CommissioningServer.ts:216](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L216)

## Properties

### commandHandler

• `Private` `Readonly` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<[`CommissioningServerCommands`](../modules/export._internal_.md#commissioningservercommands)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L209)

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:207](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L207)

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: [`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L202)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:194](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L194)

___

### endpointStructureStorage

• `Private` `Optional` **endpointStructureStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:198](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L198)

___

### flowType

• `Private` `Readonly` **flowType**: [`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:195](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L195)

___

### interactionServer

• `Private` `Optional` **interactionServer**: [`InteractionServer`](protocol_interaction_export.InteractionServer.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:203](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L203)

___

### mdnsInstanceBroadcaster

• `Private` `Optional` **mdnsInstanceBroadcaster**: [`MdnsInstanceBroadcaster`](export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:200](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L200)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:199](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L199)

___

### nextEndpointId

• `Private` **nextEndpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:205](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L205)

___

### options

• `Private` `Readonly` **options**: [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md)

The options for the CommissioningServer node

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:216](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L216)

___

### passcode

• `Private` `Readonly` **passcode**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:193](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L193)

___

### port

• `Private` `Readonly` **port**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:192](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L192)

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device_export.RootEndpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[rootEndpoint](export.MatterNode.md#rootendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L21)

___

### storage

• `Private` `Optional` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L197)

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

[packages/matter.js/src/CommissioningServer.ts:745](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L745)

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

[packages/matter.js/src/CommissioningServer.ts:719](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L719)

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

#### Inherited from

[MatterNode](export.MatterNode.md).[addEndpoint](export.MatterNode.md#addendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L86)

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

#### Inherited from

[MatterNode](export.MatterNode.md).[addRootClusterClient](export.MatterNode.md#addrootclusterclient)

#### Defined in

[packages/matter.js/src/MatterNode.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L52)

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

#### Overrides

[MatterNode](export.MatterNode.md).[addRootClusterServer](export.MatterNode.md#addrootclusterserver)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:408](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L408)

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

[packages/matter.js/src/CommissioningServer.ts:428](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L428)

___

### assignEndpointIds

▸ **assignEndpointIds**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:562](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L562)

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:733](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L733)

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

[packages/matter.js/src/CommissioningServer.ts:604](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L604)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

Get some basic details of all currently active sessions.

#### Returns

`any`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:778](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L778)

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

#### Inherited from

[MatterNode](export.MatterNode.md).[getChildEndpoint](export.MatterNode.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:96](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L96)

___

### getCommissionedFabricInformation

▸ **getCommissionedFabricInformation**(): `any`

Get some basic details of all Fabrics the server is commissioned to.

#### Returns

`any`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:772](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L772)

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

[packages/matter.js/src/CommissioningServer.ts:555](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L555)

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

[packages/matter.js/src/CommissioningServer.ts:640](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L640)

___

### getPort

▸ **getPort**(): `number`

Return the port the device is listening on

#### Returns

`number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:726](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L726)

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

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootClusterClient](export.MatterNode.md#getrootclusterclient)

#### Defined in

[packages/matter.js/src/MatterNode.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L63)

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

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootClusterServer](export.MatterNode.md#getrootclusterserver)

#### Defined in

[packages/matter.js/src/MatterNode.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L37)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device_export.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device_export.RootEndpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootEndpoint](export.MatterNode.md#getrootendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:76](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L76)

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

[packages/matter.js/src/CommissioningServer.ts:569](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L569)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:633](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L633)

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

[packages/matter.js/src/CommissioningServer.ts:758](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L758)

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

[packages/matter.js/src/CommissioningServer.ts:701](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L701)

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

[packages/matter.js/src/CommissioningServer.ts:692](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L692)

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

[packages/matter.js/src/CommissioningServer.ts:709](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L709)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:765](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L765)

___

### updateStructure

▸ **updateStructure**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:548](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/CommissioningServer.ts#L548)
