[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Endpoint

# Class: Endpoint

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Implements

- [`EndpointInterface`](../interfaces/EndpointInterface.md)

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

matter.js/dist/esm/device/Endpoint.d.ts:36

## Properties

### childEndpoints

> `private` `readonly` **childEndpoints**: `any`

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:24

***

### clusterClients

> `private` `readonly` **clusterClients**: `any`

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:23

***

### clusterServers

> `private` `readonly` **clusterServers**: `any`

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:22

***

### descriptorCluster

> `private` **descriptorCluster**: `any`

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:29

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:21

***

### name

> **name**: `string`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`name`](../interfaces/EndpointInterface.md#name)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:27

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../README.md#endpointnumber)

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`number`](../interfaces/EndpointInterface.md#number)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:25

***

### structureChangedCallback

> `private` **structureChangedCallback**: `any`

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:28

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:26

## Accessors

### deviceType

> `get` **deviceType**(): [`DeviceTypeId`](../README.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../README.md#devicetypeid)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:37

## Methods

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

matter.js/dist/esm/device/Endpoint.d.ts:54

***

### addClusterClient()

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`addClusterClient`](../interfaces/EndpointInterface.md#addclusterclient)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:45

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`addClusterServer`](../interfaces/EndpointInterface.md#addclusterserver)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:44

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

matter.js/dist/esm/device/Endpoint.d.ts:42

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

matter.js/dist/esm/device/Endpoint.d.ts:43

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`close`](../interfaces/EndpointInterface.md#close)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:40

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`determineUniqueID`](../interfaces/EndpointInterface.md#determineuniqueid)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:58

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../README.md#clusterclientobjface)\<`any`, [`Attributes`](../interfaces/Attributes.md), [`Commands`](../interfaces/Commands.md), [`Events`](../interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../README.md#clusterclientobjface)\<`any`, [`Attributes`](../interfaces/Attributes.md), [`Commands`](../interfaces/Commands.md), [`Events`](../interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getAllClusterClients`](../interfaces/EndpointInterface.md#getallclusterclients)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:61

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../README.md#clusterserverobjae)\<[`Attributes`](../interfaces/Attributes.md), [`Events`](../interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../README.md#clusterserverobjae)\<[`Attributes`](../interfaces/Attributes.md), [`Events`](../interfaces/Events.md)\>[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getAllClusterServers`](../interfaces/EndpointInterface.md#getallclusterservers)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:60

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](Endpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../README.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getChildEndpoint`](../interfaces/EndpointInterface.md#getchildendpoint)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:55

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getChildEndpoints`](../interfaces/EndpointInterface.md#getchildendpoints)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:56

***

### getClusterClient()

> **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getClusterClient`](../interfaces/EndpointInterface.md#getclusterclient)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:47

***

### getClusterClientById()

> **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../README.md#clusterclientobjface)\<`any`, [`Attributes`](../interfaces/Attributes.md), [`Commands`](../interfaces/Commands.md), [`Events`](../interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../README.md#clusterclientobjface)\<`any`, [`Attributes`](../interfaces/Attributes.md), [`Commands`](../interfaces/Commands.md), [`Events`](../interfaces/Events.md)\>

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:49

***

### getClusterServer()

> **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../README.md#clusterserverobjae)\<`A`, `E`\>

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getClusterServer`](../interfaces/EndpointInterface.md#getclusterserver)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:46

***

### getClusterServerById()

> **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../README.md#clusterserverobjae)\<[`Attributes`](../interfaces/Attributes.md), [`Events`](../interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../README.md#clusterserverobjae)\<[`Attributes`](../interfaces/Attributes.md), [`Events`](../interfaces/Events.md)\>

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getClusterServerById`](../interfaces/EndpointInterface.md#getclusterserverbyid)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:48

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:52

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../README.md#endpointnumber)

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`getNumber`](../interfaces/EndpointInterface.md#getnumber)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:41

***

### hasClusterClient()

> **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:51

***

### hasClusterServer()

> **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`hasClusterServer`](../interfaces/EndpointInterface.md#hasclusterserver)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:50

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

matter.js/dist/esm/device/Endpoint.d.ts:57

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`removeFromStructure`](../interfaces/EndpointInterface.md#removefromstructure)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:39

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

matter.js/dist/esm/device/Endpoint.d.ts:53

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

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`setStructureChangedCallback`](../interfaces/EndpointInterface.md#setstructurechangedcallback)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:38

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../README.md#endpointnumber)[]

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`updatePartsList`](../interfaces/EndpointInterface.md#updatepartslist)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:62

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[`EndpointInterface`](../interfaces/EndpointInterface.md).[`verifyRequiredClusters`](../interfaces/EndpointInterface.md#verifyrequiredclusters)

#### Source

matter.js/dist/esm/device/Endpoint.d.ts:59
