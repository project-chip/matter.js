[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / Endpoint

# Class: Endpoint

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Extended by

- [`Aggregator`](Aggregator.md)
- [`ComposedDevice`](ComposedDevice.md)
- [`PairedDevice`](PairedDevice.md)
- [`RootEndpoint`](RootEndpoint.md)
- [`Device`](Device.md)

## Implements

- [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md)

## Constructors

### new Endpoint()

> **new Endpoint**(`deviceTypes`, `options`): [`Endpoint`](Endpoint.md)

Create a new Endpoint instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options` | [`EndpointOptions`](../interfaces/EndpointOptions.md) | Options for the endpoint |

#### Returns

[`Endpoint`](Endpoint.md)

#### Source

[packages/matter.js/src/device/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L54)

## Properties

### childEndpoints

> `private` `readonly` **childEndpoints**: [`Endpoint`](Endpoint.md)[] = `[]`

#### Source

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L38)

***

### clusterClients

> `private` `readonly` **clusterClients**: `Map`\<[`ClusterId`](../../../datatype/export/README.md#clusterid), [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>\>

#### Source

[packages/matter.js/src/device/Endpoint.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L37)

***

### clusterServers

> `private` `readonly` **clusterServers**: `Map`\<[`ClusterId`](../../../datatype/export/README.md#clusterid), [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>\>

#### Source

[packages/matter.js/src/device/Endpoint.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L36)

***

### descriptorCluster

> `private` **descriptorCluster**: [`ClusterServerObjForCluster`](../../../cluster/export/README.md#clusterserverobjforclusterc)\<[`Cluster`](../../../cluster/export/namespaces/Descriptor/interfaces/Cluster.md)\>

#### Source

[packages/matter.js/src/device/Endpoint.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L46)

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

One or multiple DeviceTypeDefinitions of the endpoint

#### Source

[packages/matter.js/src/device/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L55)

***

### name

> **name**: `string` = `""`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`name`](../../../endpoint/export/interfaces/EndpointInterface.md#name)

#### Source

[packages/matter.js/src/device/Endpoint.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L41)

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`number`](../../../endpoint/export/interfaces/EndpointInterface.md#number)

#### Source

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L39)

***

### structureChangedCallback()

> `private` **structureChangedCallback**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/device/Endpoint.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L42)

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Source

[packages/matter.js/src/device/Endpoint.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L40)

## Accessors

### deviceType

> `get` **deviceType**(): [`DeviceTypeId`](../../../datatype/export/README.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../../../datatype/export/README.md#devicetypeid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L82)

## Methods

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`addChildEndpoint`](../../../endpoint/export/interfaces/EndpointInterface.md#addchildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L262)

***

### addClusterClient()

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`addClusterClient`](../../../endpoint/export/interfaces/EndpointInterface.md#addclusterclient)

#### Source

[packages/matter.js/src/device/Endpoint.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L179)

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`addClusterServer`](../../../endpoint/export/interfaces/EndpointInterface.md#addclusterserver)

#### Source

[packages/matter.js/src/device/Endpoint.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L152)

***

### addFixedLabel()

> **addFixedLabel**(`label`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/Endpoint.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L112)

***

### addUserLabel()

> **addUserLabel**(`label`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/Endpoint.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L132)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`close`](../../../endpoint/export/interfaces/EndpointInterface.md#close)

#### Source

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L99)

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`determineUniqueID`](../../../endpoint/export/interfaces/EndpointInterface.md#determineuniqueid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L296)

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getAllClusterClients`](../../../endpoint/export/interfaces/EndpointInterface.md#getallclusterclients)

#### Source

[packages/matter.js/src/device/Endpoint.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L356)

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getAllClusterServers`](../../../endpoint/export/interfaces/EndpointInterface.md#getallclusterservers)

#### Source

[packages/matter.js/src/device/Endpoint.ts:352](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L352)

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](Endpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getChildEndpoint`](../../../endpoint/export/interfaces/EndpointInterface.md#getchildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L278)

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getChildEndpoints`](../../../endpoint/export/interfaces/EndpointInterface.md#getchildendpoints)

#### Source

[packages/matter.js/src/device/Endpoint.ts:282](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L282)

***

### getClusterClient()

> **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getClusterClient`](../../../endpoint/export/interfaces/EndpointInterface.md#getclusterclient)

#### Source

[packages/matter.js/src/device/Endpoint.ts:204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L204)

***

### getClusterClientById()

> **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Source

[packages/matter.js/src/device/Endpoint.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L218)

***

### getClusterServer()

> **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getClusterServer`](../../../endpoint/export/interfaces/EndpointInterface.md#getclusterserver)

#### Source

[packages/matter.js/src/device/Endpoint.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L189)

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

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getClusterServerById`](../../../endpoint/export/interfaces/EndpointInterface.md#getclusterserverbyid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L214)

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Source

[packages/matter.js/src/device/Endpoint.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L242)

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`getNumber`](../../../endpoint/export/interfaces/EndpointInterface.md#getnumber)

#### Source

[packages/matter.js/src/device/Endpoint.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L105)

***

### hasClusterClient()

> **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/device/Endpoint.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L232)

***

### hasClusterServer()

> **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`hasClusterServer`](../../../endpoint/export/interfaces/EndpointInterface.md#hasclusterserver)

#### Source

[packages/matter.js/src/device/Endpoint.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L222)

***

### removeChildEndpoint()

> `protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](Endpoint.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/Endpoint.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L286)

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`removeFromStructure`](../../../endpoint/export/interfaces/EndpointInterface.md#removefromstructure)

#### Source

[packages/matter.js/src/device/Endpoint.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L91)

***

### setDeviceTypes()

> **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`] |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/Endpoint.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L246)

***

### setStructureChangedCallback()

> **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`setStructureChangedCallback`](../../../endpoint/export/interfaces/EndpointInterface.md#setstructurechangedcallback)

#### Source

[packages/matter.js/src/device/Endpoint.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L86)

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`updatePartsList`](../../../endpoint/export/interfaces/EndpointInterface.md#updatepartslist)

#### Source

[packages/matter.js/src/device/Endpoint.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L360)

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md).[`verifyRequiredClusters`](../../../endpoint/export/interfaces/EndpointInterface.md#verifyrequiredclusters)

#### Source

[packages/matter.js/src/device/Endpoint.ts:318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L318)
