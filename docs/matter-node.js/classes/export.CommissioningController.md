[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningController

# Class: CommissioningController

[export](../modules/export.md).CommissioningController

Abstract base class that represents a node in the matter ecosystem.

## Hierarchy

- [`MatterNode`](export.MatterNode.md)

  ↳ **`CommissioningController`**

## Table of contents

### Constructors

- [constructor](export.CommissioningController.md#constructor)

### Properties

- [controllerInstance](export.CommissioningController.md#controllerinstance)
- [createDevice](export.CommissioningController.md#createdevice)
- [createInteractionClient](export.CommissioningController.md#createinteractionclient)
- [endpoints](export.CommissioningController.md#endpoints)
- [initializeEndpointStructure](export.CommissioningController.md#initializeendpointstructure)
- [interactionClient](export.CommissioningController.md#interactionclient)
- [listeningAddressIpv4](export.CommissioningController.md#listeningaddressipv4)
- [listeningAddressIpv6](export.CommissioningController.md#listeningaddressipv6)
- [mdnsScanner](export.CommissioningController.md#mdnsscanner)
- [nodeId](export.CommissioningController.md#nodeid)
- [options](export.CommissioningController.md#options)
- [rootEndpoint](export.CommissioningController.md#rootendpoint)
- [serverAddress](export.CommissioningController.md#serveraddress)
- [storage](export.CommissioningController.md#storage)
- [structureEndpoints](export.CommissioningController.md#structureendpoints)

### Methods

- [addEndpoint](export.CommissioningController.md#addendpoint)
- [addRootClusterClient](export.CommissioningController.md#addrootclusterclient)
- [addRootClusterServer](export.CommissioningController.md#addrootclusterserver)
- [close](export.CommissioningController.md#close)
- [connect](export.CommissioningController.md#connect)
- [getActiveSessionInformation](export.CommissioningController.md#getactivesessioninformation)
- [getChildEndpoint](export.CommissioningController.md#getchildendpoint)
- [getDevices](export.CommissioningController.md#getdevices)
- [getFabric](export.CommissioningController.md#getfabric)
- [getInteractionClient](export.CommissioningController.md#getinteractionclient)
- [getPort](export.CommissioningController.md#getport)
- [getRootClusterClient](export.CommissioningController.md#getrootclusterclient)
- [getRootClusterServer](export.CommissioningController.md#getrootclusterserver)
- [getRootEndpoint](export.CommissioningController.md#getrootendpoint)
- [initializeAfterConnect](export.CommissioningController.md#initializeafterconnect)
- [isCommissioned](export.CommissioningController.md#iscommissioned)
- [setMdnsBroadcaster](export.CommissioningController.md#setmdnsbroadcaster)
- [setMdnsScanner](export.CommissioningController.md#setmdnsscanner)
- [setStorage](export.CommissioningController.md#setstorage)
- [start](export.CommissioningController.md#start)

## Constructors

### constructor

• **new CommissioningController**(`options`)

Creates a new CommissioningController instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningControllerOptions`](../interfaces/export.CommissioningControllerOptions.md) | The options for the CommissioningController |

#### Overrides

[MatterNode](export.MatterNode.md).[constructor](export.MatterNode.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:43

## Properties

### controllerInstance

• `Private` `Optional` **controllerInstance**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:34

___

### createDevice

• `Private` **createDevice**: `any`

Create a device object from the data read from the device.

**`Param`**

Endpoint ID

**`Param`**

Data of all clusters read from the device

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:99

___

### createInteractionClient

• `Private` **createInteractionClient**: `any`

Creates and Return a new InteractionClient to communicate with the device.

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:78

___

### endpoints

• `Private` **endpoints**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:37

___

### initializeEndpointStructure

• `Private` **initializeEndpointStructure**: `any`

Read all data from the device and create a device object structure out of it.

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:84

___

### interactionClient

• `Private` `Optional` **interactionClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:35

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:30

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:31

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:33

___

### nodeId

• `Private` `Optional` **nodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:36

___

### options

• `Private` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:28

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](exports_device.RootEndpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[rootEndpoint](export.MatterNode.md#rootendpoint)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:19

___

### serverAddress

• `Optional` **serverAddress**: [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:29

___

### storage

• `Private` `Optional` **storage**: `any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:32

___

### structureEndpoints

• `Private` **structureEndpoints**: `any`

Bring the endpoints in a structure based on their partsList attribute.

**`Param`**

A Map  of the partsList attributes of all endpoints to structure

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:91

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

Add a cluster to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\> | ClusterServer object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](export.MatterNode.md).[addRootClusterServer](export.MatterNode.md#addrootclusterserver)

#### Defined in

packages/matter.js/dist/cjs/MatterNode.d.ts:25

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:107

___

### connect

▸ **connect**(): `Promise`<`void`\>

Connects to the device. This includes pairing with the device if not yet paired.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:48

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:110

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

### getDevices

▸ **getDevices**(): [`Endpoint`](exports_device.Endpoint.md)[]

Returns the devices known to the controller.

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:103

___

### getFabric

▸ **getFabric**(): [`Fabric`](exports_fabric.Fabric.md)

Returns the paired Fabric object of the node

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:70

___

### getInteractionClient

▸ **getInteractionClient**(): [`InteractionClient`](exports_interaction.InteractionClient.md)

#### Returns

[`InteractionClient`](exports_interaction.InteractionClient.md)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:111

___

### getPort

▸ **getPort**(): `undefined`

#### Returns

`undefined`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:108

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

### initializeAfterConnect

▸ **initializeAfterConnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:49

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if a device is successfully paired.

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:74

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

packages/matter.js/dist/cjs/CommissioningController.d.ts:61

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

packages/matter.js/dist/cjs/CommissioningController.d.ts:55

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

packages/matter.js/dist/cjs/CommissioningController.d.ts:66

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

packages/matter.js/dist/cjs/CommissioningController.d.ts:109
