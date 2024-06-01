[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / EndpointInterface

# Interface: EndpointInterface

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).EndpointInterface

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Implemented by

- [`Endpoint`](../classes/exports_device.Endpoint.md)

## Table of contents

### Properties

- [deviceType](exports_cluster._internal_.EndpointInterface.md#devicetype)
- [name](exports_cluster._internal_.EndpointInterface.md#name)
- [number](exports_cluster._internal_.EndpointInterface.md#number)

### Methods

- [addChildEndpoint](exports_cluster._internal_.EndpointInterface.md#addchildendpoint)
- [addClusterClient](exports_cluster._internal_.EndpointInterface.md#addclusterclient)
- [addClusterServer](exports_cluster._internal_.EndpointInterface.md#addclusterserver)
- [close](exports_cluster._internal_.EndpointInterface.md#close)
- [determineUniqueID](exports_cluster._internal_.EndpointInterface.md#determineuniqueid)
- [getAllClusterClients](exports_cluster._internal_.EndpointInterface.md#getallclusterclients)
- [getAllClusterServers](exports_cluster._internal_.EndpointInterface.md#getallclusterservers)
- [getChildEndpoint](exports_cluster._internal_.EndpointInterface.md#getchildendpoint)
- [getChildEndpoints](exports_cluster._internal_.EndpointInterface.md#getchildendpoints)
- [getClusterClient](exports_cluster._internal_.EndpointInterface.md#getclusterclient)
- [getClusterServer](exports_cluster._internal_.EndpointInterface.md#getclusterserver)
- [getClusterServerById](exports_cluster._internal_.EndpointInterface.md#getclusterserverbyid)
- [getNumber](exports_cluster._internal_.EndpointInterface.md#getnumber)
- [hasClusterServer](exports_cluster._internal_.EndpointInterface.md#hasclusterserver)
- [removeFromStructure](exports_cluster._internal_.EndpointInterface.md#removefromstructure)
- [setStructureChangedCallback](exports_cluster._internal_.EndpointInterface.md#setstructurechangedcallback)
- [updatePartsList](exports_cluster._internal_.EndpointInterface.md#updatepartslist)
- [verifyRequiredClusters](exports_cluster._internal_.EndpointInterface.md#verifyrequiredclusters)

## Properties

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid)

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:22

___

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:20

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:21

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](exports_cluster._internal_.EndpointInterface.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:39

___

### addClusterClient

▸ **addClusterClient**\<`F`, `A`, `C`, `E`\>(`client`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `A` | extends [`Attributes`](exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](exports_cluster.Commands.md) |
| `E` | extends [`Events`](exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:36

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`server`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](exports_cluster.Attributes.md) |
| `E` | extends [`Events`](exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:31

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:29

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:27

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](exports_cluster.Attributes.md), [`Commands`](exports_cluster.Commands.md), [`Events`](exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](exports_cluster.Attributes.md), [`Commands`](exports_cluster.Commands.md), [`Events`](exports_cluster.Events.md)\>[]

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:38

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](exports_cluster.Attributes.md), [`Events`](exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](exports_cluster.Attributes.md), [`Events`](exports_cluster.Events.md)\>[]

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:35

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`EndpointInterface`](exports_cluster._internal_.EndpointInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](exports_cluster._internal_.EndpointInterface.md)

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:40

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`EndpointInterface`](exports_cluster._internal_.EndpointInterface.md)[]

#### Returns

[`EndpointInterface`](exports_cluster._internal_.EndpointInterface.md)[]

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:26

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](exports_cluster.Commands.md) |
| `E` | extends [`Events`](exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:37

___

### getClusterServer

▸ **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](exports_cluster.Commands.md) |
| `E` | extends [`Events`](exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:33

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](exports_cluster.Attributes.md), [`Events`](exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](exports_cluster.Attributes.md), [`Events`](exports_cluster.Events.md)\>

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:34

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:23

___

### hasClusterServer

▸ **hasClusterServer**(`cluster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](exports_cluster.ClusterType-1.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:32

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:24

___

### setStructureChangedCallback

▸ **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:30

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:25

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:28
