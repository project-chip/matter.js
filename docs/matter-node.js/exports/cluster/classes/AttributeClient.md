[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / AttributeClient

# Class: AttributeClient\<T\>

General class for AttributeClients

## Extended by

- [`SupportedAttributeClient`](SupportedAttributeClient.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new AttributeClient()

> **new AttributeClient**\<`T`\>(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`AttributeClient`](AttributeClient.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../interaction/classes/InteractionClient.md) |

#### Returns

[`AttributeClient`](AttributeClient.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

> `readonly` **attribute**: [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\>

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:20

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:23

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:22

***

### id

> `readonly` **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:29

***

### interactionClient

> `private` `readonly` **interactionClient**: `any`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:24

***

### isFabricScoped

> `private` `readonly` **isFabricScoped**: `any`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:26

***

### isWritable

> `private` `readonly` **isWritable**: `any`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:25

***

### listeners

> `private` `readonly` **listeners**: `any`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:28

***

### name

> `readonly` **name**: `string`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:21

***

### schema

> `protected` `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:27

## Methods

### addListener()

> **addListener**(`listener`): `void`

Add a listener to the attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`) => `void` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:53

***

### get()

> **get**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`undefined` \| `T`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:37

***

### getWithVersion()

> **getWithVersion**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`undefined` \| `object`\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:41

***

### removeListener()

> **removeListener**(`listener`): `void`

Remove a listener from the attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`) => `void` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:55

***

### set()

> **set**(`value`, `dataVersion`?): `Promise`\<`void`\>

Set the value of the attribute. When dataVersion parameter is provided the value is only set when the
cluster dataVersion of the server matches. If it does not match it is rejected with an Error.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `dataVersion`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:35

***

### subscribe()

> **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion`?, `isFabricFiltered`?): `Promise`\<`void`\>

Subscribe to the attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `knownDataVersion`? | `number` |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:46

***

### update()

> `private` **update**(`value`): `void`

Update the value of the attribute. Just internally used!

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:51
