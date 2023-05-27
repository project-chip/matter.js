[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / CommissioningController

# Class: CommissioningController

[index](../modules/index.md).CommissioningController

Abstract base class that represents a node in the matter ecosystem.

## Hierarchy

- [`MatterNode`](index.MatterNode.md)

  ↳ **`CommissioningController`**

## Table of contents

### Constructors

- [constructor](index.CommissioningController.md#constructor)

### Properties

- [controllerInstance](index.CommissioningController.md#controllerinstance)
- [createDevice](index.CommissioningController.md#createdevice)
- [delayedPairing](index.CommissioningController.md#delayedpairing)
- [disableIpv4](index.CommissioningController.md#disableipv4)
- [discriminator](index.CommissioningController.md#discriminator)
- [endpoints](index.CommissioningController.md#endpoints)
- [initializeEndpointStructure](index.CommissioningController.md#initializeendpointstructure)
- [ip](index.CommissioningController.md#ip)
- [listeningAddressIpv4](index.CommissioningController.md#listeningaddressipv4)
- [listeningAddressIpv6](index.CommissioningController.md#listeningaddressipv6)
- [mdnsScanner](index.CommissioningController.md#mdnsscanner)
- [nodeId](index.CommissioningController.md#nodeid)
- [passcode](index.CommissioningController.md#passcode)
- [port](index.CommissioningController.md#port)
- [rootEndpoint](index.CommissioningController.md#rootendpoint)
- [storageManager](index.CommissioningController.md#storagemanager)
- [structureEndpoints](index.CommissioningController.md#structureendpoints)

### Methods

- [addEndpoint](index.CommissioningController.md#addendpoint)
- [addRootClusterClient](index.CommissioningController.md#addrootclusterclient)
- [addRootClusterServer](index.CommissioningController.md#addrootclusterserver)
- [close](index.CommissioningController.md#close)
- [connect](index.CommissioningController.md#connect)
- [createInteractionClient](index.CommissioningController.md#createinteractionclient)
- [getChildEndpoint](index.CommissioningController.md#getchildendpoint)
- [getDevices](index.CommissioningController.md#getdevices)
- [getFabric](index.CommissioningController.md#getfabric)
- [getRootClusterClient](index.CommissioningController.md#getrootclusterclient)
- [getRootClusterClientWithNewInteractionClient](index.CommissioningController.md#getrootclusterclientwithnewinteractionclient)
- [getRootClusterServer](index.CommissioningController.md#getrootclusterserver)
- [getRootEndpoint](index.CommissioningController.md#getrootendpoint)
- [isCommissioned](index.CommissioningController.md#iscommissioned)
- [setMdnsScanner](index.CommissioningController.md#setmdnsscanner)
- [setStorageManager](index.CommissioningController.md#setstoragemanager)

## Constructors

### constructor

• **new CommissioningController**(`options`)

Creates a new CommissioningController instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningControllerOptions`](../interfaces/index.CommissioningControllerOptions.md) | The options for the CommissioningController |

#### Overrides

[MatterNode](index.MatterNode.md).[constructor](index.MatterNode.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:46

## Properties

### controllerInstance

• `Private` `Optional` **controllerInstance**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:38

___

### createDevice

• `Private` **createDevice**: `any`

Create a device object from the data read from the device.

**`Param`**

Endpoint ID

**`Param`**

Data of all clusters read from the device

**`Param`**

InteractionClient to communicate with the device

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:103

___

### delayedPairing

• `Readonly` **delayedPairing**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:35

___

### disableIpv4

• `Private` `Readonly` **disableIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:30

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:34

___

### endpoints

• `Private` **endpoints**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:40

___

### initializeEndpointStructure

• `Private` **initializeEndpointStructure**: `any`

Read all data from the device and create a device object structure out of it.

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:87

___

### ip

• `Private` `Readonly` **ip**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:28

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:31

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:32

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:37

___

### nodeId

• `Private` `Optional` **nodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:39

___

### passcode

• `Private` `Readonly` **passcode**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:33

___

### port

• `Private` `Readonly` **port**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:29

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

packages/matter.js/dist/cjs/CommissioningController.d.ts:36

___

### structureEndpoints

• `Private` **structureEndpoints**: `any`

Bring the endpoints in a structure based on their partsList attribute.

**`Param`**

A Map  of the partsList attributes of all endpoints to structure

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:94

## Methods

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

Add a cluster to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\> | ClusterServer object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](index.MatterNode.md).[addRootClusterServer](index.MatterNode.md#addrootclusterserver)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:23

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](index.MatterNode.md).[close](index.MatterNode.md#close)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:111

___

### connect

▸ **connect**(): `Promise`<`void`\>

Connects to the device. This includes pairing with the device if not yet paired.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:51

___

### createInteractionClient

▸ **createInteractionClient**(): `Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

Creates and Return a new InteractionClient to communicate with the device. This is only needed if you want to
separate requests on a separate client.

#### Returns

`Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:75

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

### getDevices

▸ **getDevices**(): [`Endpoint`](exports_device.Endpoint.md)[]

Returns the devices known to the controller.

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:107

___

### getFabric

▸ **getFabric**(): [`Fabric`](exports_fabric.Fabric.md)

Returns the paired Fabric object of the node

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:66

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

### getRootClusterClientWithNewInteractionClient

▸ **getRootClusterClientWithNewInteractionClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `Promise`<`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>\>

Returns a cluster client of a root endpoint cluster bound to a new InteractionClient.

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
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | The cluster to get the client for |

#### Returns

`Promise`<`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:81

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

▸ **isCommissioned**(): ``false``

Return info if a device is successfully paired.

#### Returns

``false``

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:70

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

packages/matter.js/dist/cjs/CommissioningController.d.ts:57

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

packages/matter.js/dist/cjs/CommissioningController.d.ts:62
