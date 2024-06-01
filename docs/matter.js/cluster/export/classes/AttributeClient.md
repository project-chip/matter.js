[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / AttributeClient

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
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md) |

#### Returns

[`AttributeClient`](AttributeClient.md)\<`T`\>

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L48)

## Properties

### attribute

> `readonly` **attribute**: [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\>

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L49)

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../../datatype/export/README.md#clusterid)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L52)

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L51)

***

### id

> `readonly` **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L46)

***

### interactionClient

> `private` `readonly` **interactionClient**: [`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L53)

***

### isFabricScoped

> `private` `readonly` **isFabricScoped**: `boolean`

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L43)

***

### isWritable

> `private` `readonly` **isWritable**: `boolean`

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L42)

***

### listeners

> `private` `readonly` **listeners**: (`newValue`) => `void`[]

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L45)

***

### name

> `readonly` **name**: `string`

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L50)

***

### schema

> `protected` `readonly` **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`any`\>

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L44)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L173)

***

### get()

> **get**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`undefined` \| `T`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` | `undefined` |
| `isFabricFiltered`? | `boolean` | `true` |

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L112)

***

### getWithVersion()

> **getWithVersion**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`undefined` \| `object`\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` | `undefined` |
| `isFabricFiltered`? | `boolean` | `true` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L130)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L178)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L66)

***

### subscribe()

> **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion`?, `isFabricFiltered`?): `Promise`\<`void`\>

Subscribe to the attribute.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `minIntervalFloorSeconds` | `number` | `undefined` |
| `maxIntervalCeilingSeconds` | `number` | `undefined` |
| `knownDataVersion`? | `number` | `undefined` |
| `isFabricFiltered`? | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L146)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L168)
