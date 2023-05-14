[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema](../modules/schema.md) / Schema

# Class: Schema<T, E\>

[schema](../modules/schema.md).Schema

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Hierarchy

- **`Schema`**

  ↳ [`SecureChannelStatusMessageSchema`](protocol_securechannel.SecureChannelStatusMessageSchema.md)

  ↳ [`BitmapSchemaInternal`](schema.BitmapSchemaInternal.md)

  ↳ [`ByteArrayBitmapSchemaInternal`](schema.ByteArrayBitmapSchemaInternal.md)

  ↳ [`QrCodeSchema`](schema.QrCodeSchema.md)

  ↳ [`TlvSchema`](tlv.TlvSchema.md)

  ↳ [`Base38Schema`](index._internal_.Base38Schema.md)

  ↳ [`QrPairingCodeSchema`](index._internal_.QrPairingCodeSchema.md)

  ↳ [`ManualPairingCodeSchema`](index._internal_.ManualPairingCodeSchema.md)

## Table of contents

### Constructors

- [constructor](schema.Schema.md#constructor)

### Methods

- [decode](schema.Schema.md#decode)
- [decodeInternal](schema.Schema.md#decodeinternal)
- [encode](schema.Schema.md#encode)
- [encodeInternal](schema.Schema.md#encodeinternal)
- [validate](schema.Schema.md#validate)

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

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/schema/Schema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L25)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/schema/Schema.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L24)

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

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
