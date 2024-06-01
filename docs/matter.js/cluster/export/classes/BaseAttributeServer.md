[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / BaseAttributeServer

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
| `id` | [`AttributeId`](../../../datatype/export/README.md#attributeid) |
| `name` | `string` |
| `readAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |
| `writeAcl` | `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md) |
| `schema` | [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\> |
| `isWritable` | `boolean` |
| `isSubscribable` | `boolean` |
| `requiresTimedInteraction` | `boolean` |
| `initValue` | `T` |
| `defaultValue` | `undefined` \| `T` |

#### Returns

[`BaseAttributeServer`](BaseAttributeServer.md)\<`T`\>

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L149)

## Properties

### #readAcl

> `private` **#readAcl**: `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L146)

***

### #writeAcl

> `private` **#writeAcl**: `undefined` \| [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L147)

***

### defaultValue

> `readonly` **defaultValue**: `T`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L145)

***

### endpoint?

> `protected` `optional` **endpoint**: [`Endpoint`](../../../device/export/classes/Endpoint.md)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L144)

***

### id

> `readonly` **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L150)

***

### isSubscribable

> `readonly` **isSubscribable**: `boolean`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L156)

***

### isWritable

> `readonly` **isWritable**: `boolean`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L155)

***

### name

> `readonly` **name**: `string`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L151)

***

### requiresTimedInteraction

> `readonly` **requiresTimedInteraction**: `boolean`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L157)

***

### schema

> `readonly` **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L154)

***

### value

> `protected` **value**: `undefined` \| `T` = `undefined`

The value is undefined when getter/setter are used. But we still handle the version number here.

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L143)

## Accessors

### readAcl

> `get` **readAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L206)

***

### writeAcl

> `get` **writeAcl**(): [`AccessLevel`](../enumerations/AccessLevel.md)

#### Returns

[`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L202)

## Methods

### assignToEndpoint()

> **assignToEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../device/export/classes/Endpoint.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L192)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L200)

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

[packages/matter.js/src/cluster/server/AttributeServer.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L181)
