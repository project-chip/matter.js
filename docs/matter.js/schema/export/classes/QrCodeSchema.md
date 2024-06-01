[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [schema/export](../README.md) / QrCodeSchema

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

## Methods

### decode()

> **decode**(`encoded`, `validate`): `string`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`string`

#### Inherited from

[`Schema`](Schema.md).[`decode`](Schema.md#decode)

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/schema/QrCodeSchema.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/QrCodeSchema.ts#L208)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/schema/QrCodeSchema.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/QrCodeSchema.ts#L99)

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

[packages/matter.js/src/schema/QrCodeSchema.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/QrCodeSchema.ts#L212)

***

### getCode()

> `private` **getCode**(`char`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `char` | `string` |

#### Returns

`number`

#### Source

[packages/matter.js/src/schema/QrCodeSchema.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/QrCodeSchema.ts#L202)

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

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
