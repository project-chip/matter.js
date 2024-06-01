[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [schema/export](../README.md) / Schema

# Class: `abstract` Schema\<T, E\>

Define a schema to encode / decode convert type T to type E.

## Extended by

- [`SecureChannelStatusMessageSchema`](../../../protocol/securechannel/export/classes/SecureChannelStatusMessageSchema.md)
- [`BitmapSchemaInternal`](BitmapSchemaInternal.md)
- [`ByteArrayBitmapSchemaInternal`](ByteArrayBitmapSchemaInternal.md)
- [`QrCodeSchema`](QrCodeSchema.md)
- [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)
- [`Base38Schema`](../-internal-/classes/Base38Schema.md)
- [`QrPairingCodeSchema`](../-internal-/classes/QrPairingCodeSchema.md)
- [`ManualPairingCodeSchema`](../-internal-/classes/ManualPairingCodeSchema.md)

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

> **decode**(`encoded`, `validate`): `T`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `E` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`T`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/schema/Schema.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L25)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/schema/Schema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L24)

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

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
