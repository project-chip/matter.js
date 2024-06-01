[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / BaseAttributeServer

# Class: `abstract` BaseAttributeServer\<T\>

Base class for all attribute servers.

## Extended by

- [`FixedAttributeServer`](FixedAttributeServer.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new BaseAttributeServer()

> **new BaseAttributeServer**\<`T`\>(`id`, `name`, `readAcl`, `writeAcl`, `schema`, `isWritable`, `isSubscribable`, `requiresTimedInteraction`, `initValue`, `defaultValue`): [`BaseAttributeServer`](BaseAttributeServer.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`AttributeId`](../../datatype/README.md#attributeid) |
| `name` | `string` |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |
| `schema` | [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |

#### Returns

[`BaseAttributeServer`](BaseAttributeServer.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:51

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:38

***

### defaultValue

> `readonly` **defaultValue**: `T`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:50

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../device/classes/Endpoint.md)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:49

***

### id

> `readonly` **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:39

***

### isSubscribable

> `readonly` **isSubscribable**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:43

***

### isWritable

> `readonly` **isWritable**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:42

***

### name

> `readonly` **name**: `string`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:40

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:44

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:41

***

### value

> `protected` **value**: `undefined` \| `T`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:48

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:60

***

### writeAcl

> `get` **writeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:59

## Methods

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../device/classes/Endpoint.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:53

***

### init()

> `abstract` **init**(`value`): `void`

Initialize the value of the attribute, used when a persisted value is set initially or when values needs to be
adjusted before the Device gets announced. Do not use this method to change values when the device is in use!

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:58

***

### validateWithSchema()

> **validateWithSchema**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:52
