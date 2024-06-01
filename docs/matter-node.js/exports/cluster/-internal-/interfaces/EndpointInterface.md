[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / EndpointInterface

# Interface: EndpointInterface

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Properties

### deviceType

> **deviceType**: [`DeviceTypeId`](../../../datatype/README.md#devicetypeid)

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:22

***

### name

> **name**: `string`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:20

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../../datatype/README.md#endpointnumber)

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:21

## Methods

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](EndpointInterface.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:39

***

### addClusterClient()

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`client`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../interfaces/Commands.md) |
| `E` *extends* [`Events`](../../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`ClusterClientObj`](../../README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:36

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`server`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `server` | [`ClusterServerObj`](../../README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:31

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:29

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:27

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../README.md#clusterclientobjface)\<`any`, [`Attributes`](../../interfaces/Attributes.md), [`Commands`](../../interfaces/Commands.md), [`Events`](../../interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../README.md#clusterclientobjface)\<`any`, [`Attributes`](../../interfaces/Attributes.md), [`Commands`](../../interfaces/Commands.md), [`Events`](../../interfaces/Events.md)\>[]

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:38

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../README.md#clusterserverobjae)\<[`Attributes`](../../interfaces/Attributes.md), [`Events`](../../interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../README.md#clusterserverobjae)\<[`Attributes`](../../interfaces/Attributes.md), [`Events`](../../interfaces/Events.md)\>[]

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:35

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`EndpointInterface`](EndpointInterface.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../../../datatype/README.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](EndpointInterface.md)

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:40

***

### getChildEndpoints()

> **getChildEndpoints**(): [`EndpointInterface`](EndpointInterface.md)[]

#### Returns

[`EndpointInterface`](EndpointInterface.md)[]

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:26

***

### getClusterClient()

> **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../interfaces/Commands.md) |
| `E` *extends* [`Events`](../../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../../README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:37

***

### getClusterServer()

> **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../interfaces/Commands.md) |
| `E` *extends* [`Events`](../../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../../README.md#clusterserverobjae)\<`A`, `E`\>

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:33

***

### getClusterServerById()

> **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../../README.md#clusterserverobjae)\<[`Attributes`](../../interfaces/Attributes.md), [`Events`](../../interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../README.md#clusterserverobjae)\<[`Attributes`](../../interfaces/Attributes.md), [`Events`](../../interfaces/Events.md)\>

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:34

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../../datatype/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/README.md#endpointnumber)

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:23

***

### hasClusterServer()

> **hasClusterServer**(`cluster`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterType`](../../interfaces/ClusterType.md) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:32

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:24

***

### setStructureChangedCallback()

> **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:30

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../../datatype/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../../datatype/README.md#endpointnumber)[]

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:25

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/endpoint/EndpointInterface.d.ts:28
