[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / SupportedAttributeClient

# Class: SupportedAttributeClient\<T\>

Special AttributeClient class to allow identifying attributes that are supported because reported by the Devices.

## Extends

- [`AttributeClient`](AttributeClient.md)\<`T`\>

## Extended by

- [`UnknownSupportedAttributeClient`](UnknownSupportedAttributeClient.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new SupportedAttributeClient()

> **new SupportedAttributeClient**\<`T`\>(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`SupportedAttributeClient`](SupportedAttributeClient.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../interaction/classes/InteractionClient.md) |

#### Returns

[`SupportedAttributeClient`](SupportedAttributeClient.md)\<`T`\>

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`constructor`](AttributeClient.md#constructors)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

> `readonly` **attribute**: [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\>

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`attribute`](AttributeClient.md#attribute)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:20

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`clusterId`](AttributeClient.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:23

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`endpointId`](AttributeClient.md#endpointid)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:22

***

### id

> `readonly` **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`id`](AttributeClient.md#id)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:29

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`name`](AttributeClient.md#name)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:21

***

### schema

> `protected` `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`any`\>

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`schema`](AttributeClient.md#schema)

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

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`addListener`](AttributeClient.md#addlistener)

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

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`get`](AttributeClient.md#get)

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

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`getWithVersion`](AttributeClient.md#getwithversion)

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

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`removeListener`](AttributeClient.md#removelistener)

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

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`set`](AttributeClient.md#set)

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

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`subscribe`](AttributeClient.md#subscribe)

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

#### Inherited from

[`AttributeClient`](AttributeClient.md).[`update`](AttributeClient.md#update)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:51
