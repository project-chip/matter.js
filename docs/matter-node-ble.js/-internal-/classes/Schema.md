[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Schema

# Class: `abstract` Schema\<T, E\>

Define a schema to encode / decode convert type T to type E.

## Extended by

- [`TlvSchema`](TlvSchema.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `E` |

## Constructors

### new Schema()

> **new Schema**\<`T`, `E`\>(): [`Schema`](Schema.md)\<`T`, `E`\>

#### Returns

[`Schema`](Schema.md)\<`T`, `E`\>

## Methods

### decode()

> **decode**(`encoded`, `validate`?): `T`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `E` |
| `validate`? | `boolean` |

#### Returns

`T`

#### Source

matter.js/dist/esm/schema/Schema.d.ts:11

***

### decodeInternal()

> `protected` `abstract` **decodeInternal**(`encoded`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `E` |

#### Returns

`T`

#### Source

matter.js/dist/esm/schema/Schema.d.ts:13

***

### encode()

> **encode**(`value`): `E`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`E`

#### Source

matter.js/dist/esm/schema/Schema.d.ts:9

***

### encodeInternal()

> `protected` `abstract` **encodeInternal**(`value`): `E`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`E`

#### Source

matter.js/dist/esm/schema/Schema.d.ts:12

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Source

matter.js/dist/esm/schema/Schema.d.ts:15
