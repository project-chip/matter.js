[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / EndpointInterface

# Interface: EndpointInterface

[\<internal\>](../modules/internal_.md).EndpointInterface

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Implemented by

- [`Endpoint`](../classes/internal_.Endpoint.md)

## Table of contents

### Properties

- [name](internal_.EndpointInterface.md#name)
- [number](internal_.EndpointInterface.md#number)

### Methods

- [addChildEndpoint](internal_.EndpointInterface.md#addchildendpoint)
- [addClusterClient](internal_.EndpointInterface.md#addclusterclient)
- [addClusterServer](internal_.EndpointInterface.md#addclusterserver)
- [close](internal_.EndpointInterface.md#close)
- [determineUniqueID](internal_.EndpointInterface.md#determineuniqueid)
- [getAllClusterClients](internal_.EndpointInterface.md#getallclusterclients)
- [getAllClusterServers](internal_.EndpointInterface.md#getallclusterservers)
- [getChildEndpoint](internal_.EndpointInterface.md#getchildendpoint)
- [getChildEndpoints](internal_.EndpointInterface.md#getchildendpoints)
- [getClusterClient](internal_.EndpointInterface.md#getclusterclient)
- [getClusterServer](internal_.EndpointInterface.md#getclusterserver)
- [getClusterServerById](internal_.EndpointInterface.md#getclusterserverbyid)
- [getNumber](internal_.EndpointInterface.md#getnumber)
- [hasClusterServer](internal_.EndpointInterface.md#hasclusterserver)
- [removeFromStructure](internal_.EndpointInterface.md#removefromstructure)
- [setStructureChangedCallback](internal_.EndpointInterface.md#setstructurechangedcallback)
- [updatePartsList](internal_.EndpointInterface.md#updatepartslist)
- [verifyRequiredClusters](internal_.EndpointInterface.md#verifyrequiredclusters)

## Properties

### name

• **name**: `string`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:19

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:20

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](internal_.EndpointInterface.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:37

___

### addClusterClient

▸ **addClusterClient**\<`F`, `A`, `C`, `E`\>(`client`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `A` | extends [`Attributes`](internal_.Attributes.md) |
| `C` | extends [`Commands`](internal_.Commands.md) |
| `E` | extends [`Events`](internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:34

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`server`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](internal_.Attributes.md) |
| `E` | extends [`Events`](internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:29

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:27

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:25

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`any`, [`Attributes`](internal_.Attributes.md), [`Commands`](internal_.Commands.md), [`Events`](internal_.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`any`, [`Attributes`](internal_.Attributes.md), [`Commands`](internal_.Commands.md), [`Events`](internal_.Events.md)\>[]

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:36

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](internal_.Attributes.md), [`Events`](internal_.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](internal_.Attributes.md), [`Events`](internal_.Events.md)\>[]

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:33

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`EndpointInterface`](internal_.EndpointInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](internal_.EndpointInterface.md)

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:38

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`EndpointInterface`](internal_.EndpointInterface.md)[]

#### Returns

[`EndpointInterface`](internal_.EndpointInterface.md)[]

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:24

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](internal_.Attributes.md) |
| `C` | extends [`Commands`](internal_.Commands.md) |
| `E` | extends [`Events`](internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](internal_.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:35

___

### getClusterServer

▸ **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](internal_.Attributes.md) |
| `C` | extends [`Commands`](internal_.Commands.md) |
| `E` | extends [`Events`](internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](internal_.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:31

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](internal_.Attributes.md), [`Events`](internal_.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](internal_.Attributes.md), [`Events`](internal_.Events.md)\>

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:32

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:21

___

### hasClusterServer

▸ **hasClusterServer**(`cluster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](internal_.ClusterType-1.md) |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:30

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:22

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

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:28

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/internal_.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/internal_.md#endpointnumber)[]

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:23

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/endpoint/EndpointInterface.d.ts:26
