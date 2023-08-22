[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/securechannel](../modules/exports_securechannel.md) / SecureChannelStatusMessageSchema

# Class: SecureChannelStatusMessageSchema

[exports/securechannel](../modules/exports_securechannel.md).SecureChannelStatusMessageSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<[`StatusMessage`](../modules/exports_securechannel.md#statusmessage), [`ByteArray`](../modules/util_export.md#bytearray-1)\>

  ↳ **`SecureChannelStatusMessageSchema`**

## Table of contents

### Constructors

- [constructor](exports_securechannel.SecureChannelStatusMessageSchema.md#constructor)

### Methods

- [decode](exports_securechannel.SecureChannelStatusMessageSchema.md#decode)
- [decodeInternal](exports_securechannel.SecureChannelStatusMessageSchema.md#decodeinternal)
- [encode](exports_securechannel.SecureChannelStatusMessageSchema.md#encode)
- [encodeInternal](exports_securechannel.SecureChannelStatusMessageSchema.md#encodeinternal)
- [validate](exports_securechannel.SecureChannelStatusMessageSchema.md#validate)

## Constructors

### constructor

• **new SecureChannelStatusMessageSchema**()

#### Inherited from

[Schema](exports_schema.Schema.md).[constructor](exports_schema.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`StatusMessage`](../modules/exports_securechannel.md#statusmessage)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

[`StatusMessage`](../modules/exports_securechannel.md#statusmessage)

#### Inherited from

[Schema](exports_schema.Schema.md).[decode](exports_schema.Schema.md#decode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`bytes`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `generalStatus` | `number` |
| `protocolId` | `number` |
| `protocolStatus` | `number` |

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:16

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`StatusMessage`](../modules/exports_securechannel.md#statusmessage) |

#### Returns

`Uint8Array`

#### Inherited from

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`StatusMessage`](../modules/exports_securechannel.md#statusmessage) |

#### Returns

`Uint8Array`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:15

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`StatusMessage`](../modules/exports_securechannel.md#statusmessage) |

#### Returns

`void`

#### Inherited from

[Schema](exports_schema.Schema.md).[validate](exports_schema.Schema.md#validate)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
