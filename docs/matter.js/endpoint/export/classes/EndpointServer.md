[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [endpoint/export](../README.md) / EndpointServer

# Class: EndpointServer

EndpointServer makes a [Endpoint](Endpoint.md) available for remote access as an Endpoint on a Matter network.

## Implements

- [`EndpointInterface`](../interfaces/EndpointInterface.md)

## Constructors

### new EndpointServer()

> **new EndpointServer**(`endpoint`): [`EndpointServer`](EndpointServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

[`EndpointServer`](EndpointServer.md)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L43)

## Properties

### #clusterServers

> `private` `readonly` **#clusterServers**: `Map`\<[`ClusterId`](../../../datatype/export/README.md#clusterid), [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>\>

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L33)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L31)

***

### #name

> `private` **#name**: `string` = `""`

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L32)

## Accessors

### deviceType

> `get` **deviceType**(): [`DeviceTypeId`](../../../datatype/export/README.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../../../datatype/export/README.md#devicetypeid)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L39)

***

### endpoint

> `get` **endpoint**(): [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Returns

[`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L35)

***

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L72)

***

### number

> `get` **number**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L68)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L112)

***

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`addChildEndpoint`](../interfaces/EndpointInterface.md#addchildendpoint)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L166)

***

### addClusterClient()

> **addClusterClient**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`addClusterClient`](../interfaces/EndpointInterface.md#addclusterclient)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L158)

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`server`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `server` | [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`addClusterServer`](../interfaces/EndpointInterface.md#addclusterserver)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L128)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`close`](../interfaces/EndpointInterface.md#close)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L108)

***

### createBacking()

> **createBacking**(`type`): [`BehaviorBacking`](../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

[`BehaviorBacking`](../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L49)

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`determineUniqueID`](../interfaces/EndpointInterface.md#determineuniqueid)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L100)

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getAllClusterClients`](../interfaces/EndpointInterface.md#getallclusterclients)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L153)

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getAllClusterServers`](../interfaces/EndpointInterface.md#getallclusterservers)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L149)

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`EndpointInterface`](../interfaces/EndpointInterface.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](../interfaces/EndpointInterface.md)

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getChildEndpoint`](../interfaces/EndpointInterface.md#getchildendpoint)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L174)

***

### getChildEndpoints()

> **getChildEndpoints**(): [`EndpointInterface`](../interfaces/EndpointInterface.md)[]

#### Returns

[`EndpointInterface`](../interfaces/EndpointInterface.md)[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getChildEndpoints`](../interfaces/EndpointInterface.md#getchildendpoints)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L92)

***

### getClusterClient()

> **getClusterClient**(): `any`

#### Returns

`any`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getClusterClient`](../interfaces/EndpointInterface.md#getclusterclient)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L162)

***

### getClusterServer()

> **getClusterServer**\<`T`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`T`\[`"attributes"`\], `T`\[`"events"`\]\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | `T` |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`T`\[`"attributes"`\], `T`\[`"events"`\]\>

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getClusterServer`](../interfaces/EndpointInterface.md#getclusterserver)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L136)

***

### getClusterServerById()

> **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getClusterServerById`](../interfaces/EndpointInterface.md#getclusterserverbyid)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L145)

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getNumber`](../interfaces/EndpointInterface.md#getnumber)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L76)

***

### hasClusterServer()

> **hasClusterServer**(`cluster`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](../../../cluster/export/interfaces/ClusterType.md) |

#### Returns

`boolean`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`hasClusterServer`](../interfaces/EndpointInterface.md#hasclusterserver)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L132)

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`removeFromStructure`](../interfaces/EndpointInterface.md#removefromstructure)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L83)

***

### setStructureChangedCallback()

> **setStructureChangedCallback**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`setStructureChangedCallback`](../interfaces/EndpointInterface.md#setstructurechangedcallback)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L124)

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`updatePartsList`](../interfaces/EndpointInterface.md#updatepartslist)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L87)

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`verifyRequiredClusters`](../interfaces/EndpointInterface.md#verifyrequiredclusters)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L104)

***

### forEndpoint()

> `static` **forEndpoint**(`endpoint`): [`EndpointServer`](EndpointServer.md)

Retrieve the server for an endpoint.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

[`EndpointServer`](EndpointServer.md)

#### Source

[packages/matter.js/src/endpoint/EndpointServer.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/EndpointServer.ts#L188)
