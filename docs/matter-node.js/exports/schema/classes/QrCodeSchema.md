[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/schema](../README.md) / QrCodeSchema

# Class: QrCodeSchema

Define a schema to encode / decode convert type T to type E.

## Extends

- [`Schema`](Schema.md)\<`string`, `string`\>

## Constructors

### new QrCodeSchema()

> **new QrCodeSchema**(): [`QrCodeSchema`](QrCodeSchema.md)

#### Returns

[`QrCodeSchema`](QrCodeSchema.md)

#### Inherited from

[`Schema`](Schema.md).[`constructor`](Schema.md#constructors)

## Properties

### getCode

> `private` **getCode**: `any`

#### Source

packages/matter.js/dist/esm/schema/QrCodeSchema.d.ts:9

## Methods

### decode()

> **decode**(`encoded`, `validate`?): `string`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `string` |
| `validate`? | `boolean` |

#### Returns

`string`

#### Inherited from

[`Schema`](Schema.md).[`decode`](Schema.md#decode)

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

***

### decodeInternal()

> `protected` **decodeInternal**(`_encoded`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_encoded` | `string` |

#### Returns

`string`

#### Overrides

[`Schema`](Schema.md).[`decodeInternal`](Schema.md#decodeinternal)

#### Source

packages/matter.js/dist/esm/schema/QrCodeSchema.d.ts:10

***

### encode()

> **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Inherited from

[`Schema`](Schema.md).[`encode`](Schema.md#encode)

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:9

***

### encodeInternal()

> `protected` **encodeInternal**(`data`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Overrides

[`Schema`](Schema.md).[`encodeInternal`](Schema.md#encodeinternal)

#### Source

packages/matter.js/dist/esm/schema/QrCodeSchema.d.ts:8

***

### get()

> **get**(`code`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/schema/QrCodeSchema.d.ts:11

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Inherited from

[`Schema`](Schema.md).[`validate`](Schema.md#validate)

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:15
