[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / CommissioningServer

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:86

## Properties

### commandHandler

• `Private` `Readonly` **commandHandler**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:80

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:79

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:76

___

### deviceName

• `Private` `Readonly` **deviceName**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:68

___

### deviceType

• `Private` `Readonly` **deviceType**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:69

___

### disableIpv4

• `Private` `Readonly` **disableIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:65

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:71

___

### flowType

• `Private` `Readonly` **flowType**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:72

___

### interactionServer

• `Private` `Optional` **interactionServer**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:77

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:66

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:67

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:75

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:74

___

### nextEndpointId

• `Private` **nextEndpointId**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:78

___

### passcode

• `Private` `Readonly` **passcode**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:70

___

### port

• `Private` `Readonly` **port**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:64

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](exports_device.RootEndpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[rootEndpoint](index.MatterNode.md#rootendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:17

___

### storageManager

• `Private` `Optional` **storageManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:73

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:144

___

### addDevice

▸ **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](exports_device.Device.md) \| [`ComposedDevice`](exports_device.ComposedDevice.md) | Device or ComposedDevice instance to add |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:129

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

[MatterNode](index.MatterNode.md).[addEndpoint](index.MatterNode.md#addendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:54

___

### addRootClusterClient

▸ **addRootClusterClient**<`A`, `C`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\> | ClusterClient object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](index.MatterNode.md).[addRootClusterClient](index.MatterNode.md#addrootclusterclient)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:35

___

### addRootClusterServer

▸ **addRootClusterServer**<`A`, `C`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

`void`

#### Overrides

[MatterNode](index.MatterNode.md).[addRootClusterServer](index.MatterNode.md#addrootclusterserver)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:94

___

### advertise

▸ **advertise**(): `Promise`<`void`\>

Advertise the node via mDNS and start the commissioning process

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:98

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](index.MatterNode.md).[close](index.MatterNode.md#close)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:137

___

### getChildEndpoint

▸ `Protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | `number` | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[getChildEndpoint](index.MatterNode.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:61

___

### getPairingCode

▸ **getPairingCode**(): [`DevicePairingInformation`](../interfaces/index.DevicePairingInformation.md)

Return the pairing information for the device

#### Returns

[`DevicePairingInformation`](../interfaces/index.DevicePairingInformation.md)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:106

___

### getPort

▸ **getPort**(): `number`

Return the port the device is listening on

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:133

___

### getRootClusterClient

▸ **getRootClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`, `interactionClient?`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |
| `interactionClient?` | [`InteractionClient`](exports_interaction.InteractionClient.md) | Optional InteractionClient to use for the cluster client. If not provided, the default InteractionClient of the root endpoint is used. |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootClusterClient](index.MatterNode.md#getrootclusterclient)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:43

___

### getRootClusterServer

▸ **getRootClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\>

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootClusterServer](index.MatterNode.md#getrootclusterserver)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:29

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](exports_device.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](exports_device.RootEndpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootEndpoint](index.MatterNode.md#getrootendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:47

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:102

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:151

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

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:118

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

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:112

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

packages/matter.js/dist/cjs/CommissioningServer.d.ts:123
