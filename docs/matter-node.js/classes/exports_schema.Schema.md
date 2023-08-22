[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / Schema

# Class: Schema<T, E\>

[exports/schema](../modules/exports_schema.md).Schema

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Hierarchy

- **`Schema`**

  ↳ [`SecureChannelStatusMessageSchema`](exports_securechannel.SecureChannelStatusMessageSchema.md)

  ↳ [`BitmapSchemaInternal`](exports_schema.BitmapSchemaInternal.md)

  ↳ [`ByteArrayBitmapSchemaInternal`](exports_schema.ByteArrayBitmapSchemaInternal.md)

  ↳ [`QrCodeSchema`](exports_schema.QrCodeSchema.md)

  ↳ [`TlvSchema`](exports_tlv.TlvSchema.md)

  ↳ [`Base38Schema`](export._internal_.Base38Schema.md)

  ↳ [`QrPairingCodeSchema`](export._internal_.QrPairingCodeSchema.md)

  ↳ [`ManualPairingCodeSchema`](export._internal_.ManualPairingCodeSchema.md)

## Table of contents

### Constructors

- [constructor](exports_schema.Schema.md#constructor)

### Methods

- [decode](exports_schema.Schema.md#decode)
- [decodeInternal](exports_schema.Schema.md#decodeinternal)
- [encode](exports_schema.Schema.md#encode)
- [encodeInternal](exports_schema.Schema.md#encodeinternal)
- [validate](exports_schema.Schema.md#validate)

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

| Name | Type |
| :------ | :------ |
| `encoded` | `E` |
| `validate?` | `boolean` |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:13

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:12

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
