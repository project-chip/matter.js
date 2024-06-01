[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [schema/export](../../README.md) / [\<internal\>](../README.md) / Base38Schema

# Class: Base38Schema

See MatterSpecification.v10.Core § 5.1.3.1

## Extends

- [`Schema`](../../classes/Schema.md)\<[`ByteArray`](../../../../util/export/README.md#bytearray), `string`\>

## Constructors

### new Base38Schema()

> **new Base38Schema**(): [`Base38Schema`](Base38Schema.md)

#### Returns

[`Base38Schema`](Base38Schema.md)

#### Inherited from

[`Schema`](../../classes/Schema.md).[`constructor`](../../classes/Schema.md#constructors)

## Methods

### decode()

> **decode**(`encoded`, `validate`): `Uint8Array`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`Uint8Array`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`decode`](../../classes/Schema.md#decode)

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeBase38()

> `private` **decodeBase38**(`encoded`, `offset`, `charCount`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `string` |
| `offset` | `number` |
| `charCount` | `number` |

#### Returns

`number`

#### Source

[packages/matter.js/src/schema/Base38Schema.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Base38Schema.ts#L83)

***

### decodeInternal()

> `protected` **decodeInternal**(`encoded`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

`Uint8Array`

#### Overrides

[`Schema`](../../classes/Schema.md).[`decodeInternal`](../../classes/Schema.md#decodeinternal)

#### Source

[packages/matter.js/src/schema/Base38Schema.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Base38Schema.ts#L44)

***

### encode()

> **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`string`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`encode`](../../classes/Schema.md#encode)

#### Source

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

***

### encodeBase38()

> `private` **encodeBase38**(`value`, `charCount`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |
| `charCount` | `number` |

#### Returns

`string`

#### Source

[packages/matter.js/src/schema/Base38Schema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Base38Schema.ts#L34)

***

### encodeInternal()

> `protected` **encodeInternal**(`bytes`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Overrides

[`Schema`](../../classes/Schema.md).[`encodeInternal`](../../classes/Schema.md#encodeinternal)

#### Source

[packages/matter.js/src/schema/Base38Schema.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Base38Schema.ts#L15)

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | `Uint8Array` |

#### Returns

`void`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`validate`](../../classes/Schema.md#validate)

#### Source

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
