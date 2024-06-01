[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/schema](../../README.md) / [\<internal\>](../README.md) / Base38Schema

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

## Properties

### decodeBase38

> `private` **decodeBase38**: `any`

#### Source

packages/matter.js/dist/esm/schema/Base38Schema.d.ts:13

***

### encodeBase38

> `private` **encodeBase38**: `any`

#### Source

packages/matter.js/dist/esm/schema/Base38Schema.d.ts:11

## Methods

### decode()

> **decode**(`encoded`, `validate`?): `Uint8Array`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `string` |
| `validate`? | `boolean` |

#### Returns

`Uint8Array`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`decode`](../../classes/Schema.md#decode)

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

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

packages/matter.js/dist/esm/schema/Base38Schema.d.ts:12

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

packages/matter.js/dist/esm/schema/Schema.d.ts:9

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

packages/matter.js/dist/esm/schema/Base38Schema.d.ts:10

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

packages/matter.js/dist/esm/schema/Schema.d.ts:15
