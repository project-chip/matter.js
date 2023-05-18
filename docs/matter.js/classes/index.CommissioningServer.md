[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / CommissioningServer

# Class: CommissioningServer

[index](../modules/index.md).CommissioningServer

A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
host

## Hierarchy

- [`MatterNode`](index.MatterNode.md)

  ↳ **`CommissioningServer`**

## Table of contents

### Constructors

- [constructor](index.CommissioningServer.md#constructor)

### Properties

- [commandHandler](index.CommissioningServer.md#commandhandler)
- [delayedAnnouncement](index.CommissioningServer.md#delayedannouncement)
- [deviceInstance](index.CommissioningServer.md#deviceinstance)
- [deviceName](index.CommissioningServer.md#devicename)
- [deviceType](index.CommissioningServer.md#devicetype)
- [disableIpv4](index.CommissioningServer.md#disableipv4)
- [discriminator](index.CommissioningServer.md#discriminator)
- [flowType](index.CommissioningServer.md#flowtype)
- [interactionServer](index.CommissioningServer.md#interactionserver)
- [listeningAddressIpv4](index.CommissioningServer.md#listeningaddressipv4)
- [listeningAddressIpv6](index.CommissioningServer.md#listeningaddressipv6)
- [mdnsBroadcaster](index.CommissioningServer.md#mdnsbroadcaster)
- [mdnsScanner](index.CommissioningServer.md#mdnsscanner)
- [nextEndpointId](index.CommissioningServer.md#nextendpointid)
- [passcode](index.CommissioningServer.md#passcode)
- [port](index.CommissioningServer.md#port)
- [rootEndpoint](index.CommissioningServer.md#rootendpoint)
- [storageManager](index.CommissioningServer.md#storagemanager)

### Methods

- [addCommandHandler](index.CommissioningServer.md#addcommandhandler)
- [addDevice](index.CommissioningServer.md#adddevice)
- [addEndpoint](index.CommissioningServer.md#addendpoint)
- [addRootClusterClient](index.CommissioningServer.md#addrootclusterclient)
- [addRootClusterServer](index.CommissioningServer.md#addrootclusterserver)
- [advertise](index.CommissioningServer.md#advertise)
- [close](index.CommissioningServer.md#close)
- [getChildEndpoint](index.CommissioningServer.md#getchildendpoint)
- [getPairingCode](index.CommissioningServer.md#getpairingcode)
- [getPort](index.CommissioningServer.md#getport)
- [getRootClusterClient](index.CommissioningServer.md#getrootclusterclient)
- [getRootClusterServer](index.CommissioningServer.md#getrootclusterserver)
- [getRootEndpoint](index.CommissioningServer.md#getrootendpoint)
- [isCommissioned](index.CommissioningServer.md#iscommissioned)
- [removeCommandHandler](index.CommissioningServer.md#removecommandhandler)
- [setMdnsBroadcaster](index.CommissioningServer.md#setmdnsbroadcaster)
- [setMdnsScanner](index.CommissioningServer.md#setmdnsscanner)
- [setStorageManager](index.CommissioningServer.md#setstoragemanager)

## Constructors

### constructor

• **new CommissioningServer**(`options`)

Creates a new CommissioningServer node and add all needed Root clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningServerOptions`](../interfaces/index.CommissioningServerOptions.md) | The options for the CommissioningServer node |

#### Overrides

[MatterNode](index.MatterNode.md).[constructor](index.MatterNode.md#constructor)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:133](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L133)

## Properties

### commandHandler

• `Private` `Readonly` **commandHandler**: [`NamedHandler`](index._internal_.NamedHandler.md)<[`CommissioningServerCommands`](../modules/index._internal_.md#commissioningservercommands)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:126](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L126)

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:124](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L124)

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: [`MatterDevice`](index.MatterDevice.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:119](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L119)

___

### deviceName

• `Private` `Readonly` **deviceName**: `string`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:109](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L109)

___

### deviceType

• `Private` `Readonly` **deviceType**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:110](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L110)

___

### disableIpv4

• `Private` `Readonly` **disableIpv4**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:106](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L106)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:112](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L112)

___

### flowType

• `Private` `Readonly` **flowType**: [`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:113](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L113)

___

### interactionServer

• `Private` `Optional` **interactionServer**: [`InteractionServer`](protocol_interaction.InteractionServer.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:120](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L120)

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `string`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L107)

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `string`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:108](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L108)

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](mdns.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:117](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L117)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:116](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L116)

___

### nextEndpointId

• `Private` **nextEndpointId**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:122](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L122)

___

### passcode

• `Private` `Readonly` **passcode**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:111](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L111)

___

### port

• `Private` `Readonly` **port**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:105](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L105)

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device.RootEndpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[rootEndpoint](index.MatterNode.md#rootendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L19)

___

### storageManager

• `Private` `Optional` **storageManager**: [`StorageManager`](storage.StorageManager.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:115](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L115)

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
| `handler` | [`CommissioningServerCommands`](../modules/index._internal_.md#commissioningservercommands)[`K`] | Handler function to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:463](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L463)

___

### addDevice

▸ **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device.Device.md) \| [`ComposedDevice`](device.ComposedDevice.md) | Device or ComposedDevice instance to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:439](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L439)

___

### addEndpoint

▸ `Protected` **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Inherited from

[MatterNode](index.MatterNode.md).[addEndpoint](index.MatterNode.md#addendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L77)

___

### addRootClusterClient

▸ **addRootClusterClient**<`A`, `C`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\> | ClusterClient object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](index.MatterNode.md).[addRootClusterClient](index.MatterNode.md#addrootclusterclient)

#### Defined in

[packages/matter.js/src/MatterNode.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L46)

___

### addRootClusterServer

▸ **addRootClusterServer**<`A`, `C`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

`void`

#### Overrides

[MatterNode](index.MatterNode.md).[addRootClusterServer](index.MatterNode.md#addrootclusterserver)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:296](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L296)

___

### advertise

▸ **advertise**(): `Promise`<`void`\>

Advertise the node via mDNS and start the commissioning process

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:313](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L313)

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](index.MatterNode.md).[close](index.MatterNode.md#close)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:453](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L453)

___

### getChildEndpoint

▸ `Protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](device.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | `number` | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](device.Endpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[getChildEndpoint](index.MatterNode.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L87)

___

### getPairingCode

▸ **getPairingCode**(): [`DevicePairingInformation`](../interfaces/index.DevicePairingInformation.md)

Return the pairing information for the device

#### Returns

[`DevicePairingInformation`](../interfaces/index.DevicePairingInformation.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:375](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L375)

___

### getPort

▸ **getPort**(): `number`

Return the port the device is listening on

#### Returns

`number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:446](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L446)

___

### getRootClusterClient

▸ **getRootClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`, `interactionClient?`): `undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |
| `interactionClient?` | [`InteractionClient`](protocol_interaction.InteractionClient.md) | Optional InteractionClient to use for the cluster client. If not provided, the default InteractionClient of the root endpoint is used. |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootClusterClient](index.MatterNode.md#getrootclusterclient)

#### Defined in

[packages/matter.js/src/MatterNode.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L57)

___

### getRootClusterServer

▸ **getRootClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootClusterServer](index.MatterNode.md#getrootclusterserver)

#### Defined in

[packages/matter.js/src/MatterNode.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L35)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device.RootEndpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootEndpoint](index.MatterNode.md#getrootendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L67)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:368](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L368)

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
| `handler` | [`CommissioningServerCommands`](../modules/index._internal_.md#commissioningservercommands)[`K`] | Handler function to remove |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:473](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L473)

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](mdns.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:422](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L422)

___

### setMdnsScanner

▸ **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns.MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:413](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L413)

___

### setStorageManager

▸ **setStorageManager**(`storageManager`): `void`

Set the StorageManager instance. Should be only used internally

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:430](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L430)
