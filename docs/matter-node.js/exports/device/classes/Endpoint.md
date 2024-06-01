[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / Endpoint

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

- [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md)

## Constructors

### new Endpoint()

> **new Endpoint**(`deviceTypes`, `options`?): [`Endpoint`](Endpoint.md)

Create a new Endpoint instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) | Options for the endpoint |

#### Returns

[`Endpoint`](Endpoint.md)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:36

## Properties

### childEndpoints

> `private` `readonly` **childEndpoints**: `any`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:24

***

### clusterClients

> `private` `readonly` **clusterClients**: `any`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:23

***

### clusterServers

> `private` `readonly` **clusterServers**: `any`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:22

***

### descriptorCluster

> `private` **descriptorCluster**: `any`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:29

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:21

***

### name

> **name**: `string`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`name`](../../cluster/-internal-/interfaces/EndpointInterface.md#name)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:27

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`number`](../../cluster/-internal-/interfaces/EndpointInterface.md#number)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

***

### structureChangedCallback

> `private` **structureChangedCallback**: `any`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:28

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

## Accessors

### deviceType

> `get` **deviceType**(): [`DeviceTypeId`](../../datatype/README.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../../datatype/README.md#devicetypeid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:37

## Methods

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`addChildEndpoint`](../../cluster/-internal-/interfaces/EndpointInterface.md#addchildendpoint)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:54

***

### addClusterClient()

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`addClusterClient`](../../cluster/-internal-/interfaces/EndpointInterface.md#addclusterclient)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:45

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`addClusterServer`](../../cluster/-internal-/interfaces/EndpointInterface.md#addclusterserver)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:44

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:42

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:43

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`close`](../../cluster/-internal-/interfaces/EndpointInterface.md#close)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`determineUniqueID`](../../cluster/-internal-/interfaces/EndpointInterface.md#determineuniqueid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getAllClusterClients`](../../cluster/-internal-/interfaces/EndpointInterface.md#getallclusterclients)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:61

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getAllClusterServers`](../../cluster/-internal-/interfaces/EndpointInterface.md#getallclusterservers)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](Endpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getChildEndpoint`](../../cluster/-internal-/interfaces/EndpointInterface.md#getchildendpoint)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getChildEndpoints`](../../cluster/-internal-/interfaces/EndpointInterface.md#getchildendpoints)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

***

### getClusterClient()

> **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getClusterClient`](../../cluster/-internal-/interfaces/EndpointInterface.md#getclusterclient)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:47

***

### getClusterClientById()

> **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:49

***

### getClusterServer()

> **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getClusterServer`](../../cluster/-internal-/interfaces/EndpointInterface.md#getclusterserver)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

***

### getClusterServerById()

> **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getClusterServerById`](../../cluster/-internal-/interfaces/EndpointInterface.md#getclusterserverbyid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`getNumber`](../../cluster/-internal-/interfaces/EndpointInterface.md#getnumber)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

***

### hasClusterClient()

> **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:51

***

### hasClusterServer()

> **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`hasClusterServer`](../../cluster/-internal-/interfaces/EndpointInterface.md#hasclusterserver)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:57

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`removeFromStructure`](../../cluster/-internal-/interfaces/EndpointInterface.md#removefromstructure)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

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

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`setStructureChangedCallback`](../../cluster/-internal-/interfaces/EndpointInterface.md#setstructurechangedcallback)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:38

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`updatePartsList`](../../cluster/-internal-/interfaces/EndpointInterface.md#updatepartslist)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:62

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md).[`verifyRequiredClusters`](../../cluster/-internal-/interfaces/EndpointInterface.md#verifyrequiredclusters)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:59
