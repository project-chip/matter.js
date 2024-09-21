[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/export](../modules/endpoint_export.md) / EndpointInterface

# Interface: EndpointInterface

[endpoint/export](../modules/endpoint_export.md).EndpointInterface

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Implemented by

- [`Endpoint`](../classes/device_export.Endpoint.md)
- [`EndpointServer`](../classes/endpoint_export.EndpointServer.md)

## Table of contents

### Properties

- [deviceType](endpoint_export.EndpointInterface.md#devicetype)
- [name](endpoint_export.EndpointInterface.md#name)
- [number](endpoint_export.EndpointInterface.md#number)

### Methods

- [addChildEndpoint](endpoint_export.EndpointInterface.md#addchildendpoint)
- [addClusterClient](endpoint_export.EndpointInterface.md#addclusterclient)
- [addClusterServer](endpoint_export.EndpointInterface.md#addclusterserver)
- [close](endpoint_export.EndpointInterface.md#close)
- [determineUniqueID](endpoint_export.EndpointInterface.md#determineuniqueid)
- [getAllClusterClients](endpoint_export.EndpointInterface.md#getallclusterclients)
- [getAllClusterServers](endpoint_export.EndpointInterface.md#getallclusterservers)
- [getChildEndpoint](endpoint_export.EndpointInterface.md#getchildendpoint)
- [getChildEndpoints](endpoint_export.EndpointInterface.md#getchildendpoints)
- [getClusterClient](endpoint_export.EndpointInterface.md#getclusterclient)
- [getClusterServer](endpoint_export.EndpointInterface.md#getclusterserver)
- [getClusterServerById](endpoint_export.EndpointInterface.md#getclusterserverbyid)
- [getNumber](endpoint_export.EndpointInterface.md#getnumber)
- [hasClusterServer](endpoint_export.EndpointInterface.md#hasclusterserver)
- [removeFromStructure](endpoint_export.EndpointInterface.md#removefromstructure)
- [setStructureChangedCallback](endpoint_export.EndpointInterface.md#setstructurechangedcallback)
- [updatePartsList](endpoint_export.EndpointInterface.md#updatepartslist)
- [verifyRequiredClusters](endpoint_export.EndpointInterface.md#verifyrequiredclusters)

## Properties

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:24](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L24)

___

### name

• **name**: `string`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:22](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L22)

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:23](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L23)

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](endpoint_export.EndpointInterface.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:62](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L62)

___

### addClusterClient

▸ **addClusterClient**\<`F`, `A`, `C`, `E`\>(`client`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `A` | extends [`Attributes`](cluster_export.Attributes.md) |
| `C` | extends [`Commands`](cluster_export.Commands.md) |
| `E` | extends [`Events`](cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:48](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L48)

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`server`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](cluster_export.Attributes.md) |
| `E` | extends [`Events`](cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:34](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L34)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:31](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L31)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:29](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L29)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](cluster_export.Attributes.md), [`Commands`](cluster_export.Commands.md), [`Events`](cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](cluster_export.Attributes.md), [`Commands`](cluster_export.Commands.md), [`Events`](cluster_export.Events.md)\>[]

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:60](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L60)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](cluster_export.Attributes.md), [`Events`](cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](cluster_export.Attributes.md), [`Events`](cluster_export.Events.md)\>[]

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:46](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L46)

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`EndpointInterface`](endpoint_export.EndpointInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](endpoint_export.EndpointInterface.md)

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:63](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L63)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`EndpointInterface`](endpoint_export.EndpointInterface.md)[]

#### Returns

[`EndpointInterface`](endpoint_export.EndpointInterface.md)[]

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:28](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L28)

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](cluster_export.Attributes.md) |
| `C` | extends [`Commands`](cluster_export.Commands.md) |
| `E` | extends [`Events`](cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:51](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L51)

___

### getClusterServer

▸ **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](cluster_export.Attributes.md) |
| `C` | extends [`Commands`](cluster_export.Commands.md) |
| `E` | extends [`Events`](cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:36](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L36)

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](cluster_export.Attributes.md), [`Events`](cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](cluster_export.Attributes.md), [`Events`](cluster_export.Events.md)\>

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:45](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L45)

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:25](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L25)

___

### hasClusterServer

▸ **hasClusterServer**(`cluster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](cluster_export.ClusterType-1.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:35](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L35)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:26](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L26)

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

[packages/matter.js/src/endpoint/EndpointInterface.ts:32](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L32)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:27](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L27)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/EndpointInterface.ts:30](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/endpoint/EndpointInterface.ts#L30)
