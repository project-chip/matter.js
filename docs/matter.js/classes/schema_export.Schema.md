[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema/export](../modules/schema_export.md) / Schema

# Class: Schema<T, E\>

[schema/export](../modules/schema_export.md).Schema

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Hierarchy

- **`Schema`**

  ↳ [`SecureChannelStatusMessageSchema`](protocol_securechannel_export.SecureChannelStatusMessageSchema.md)

  ↳ [`BitmapSchemaInternal`](schema_export.BitmapSchemaInternal.md)

  ↳ [`ByteArrayBitmapSchemaInternal`](schema_export.ByteArrayBitmapSchemaInternal.md)

  ↳ [`QrCodeSchema`](schema_export.QrCodeSchema.md)

  ↳ [`TlvSchema`](tlv_export.TlvSchema.md)

  ↳ [`Base38Schema`](export._internal_.Base38Schema.md)

  ↳ [`QrPairingCodeSchema`](export._internal_.QrPairingCodeSchema.md)

  ↳ [`ManualPairingCodeSchema`](export._internal_.ManualPairingCodeSchema.md)

## Table of contents

### Constructors

- [constructor](schema_export.Schema.md#constructor)

### Methods

- [decode](schema_export.Schema.md#decode)
- [decodeInternal](schema_export.Schema.md#decodeinternal)
- [encode](schema_export.Schema.md#encode)
- [encodeInternal](schema_export.Schema.md#encodeinternal)
- [validate](schema_export.Schema.md#validate)

## Constructors

### constructor

• **new Schema**<`T`, `E`\>()

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `T`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `E` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ `Protected` `Abstract` **decodeInternal**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `E` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/schema/Schema.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L25)

___

### encode

▸ **encode**(`value`): `E`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`E`

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ `Protected` `Abstract` **encodeInternal**(`value`): `E`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`E`

#### Defined in

[packages/matter.js/src/schema/Schema.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L24)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L28)
