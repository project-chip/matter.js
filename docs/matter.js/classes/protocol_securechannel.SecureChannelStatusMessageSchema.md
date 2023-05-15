[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel](../modules/protocol_securechannel.md) / SecureChannelStatusMessageSchema

# Class: SecureChannelStatusMessageSchema

[protocol/securechannel](../modules/protocol_securechannel.md).SecureChannelStatusMessageSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](schema.Schema.md)<[`StatusMessage`](../modules/protocol_securechannel.md#statusmessage), [`ByteArray`](../modules/util.md#bytearray-1)\>

  ↳ **`SecureChannelStatusMessageSchema`**

## Table of contents

### Constructors

- [constructor](protocol_securechannel.SecureChannelStatusMessageSchema.md#constructor)

### Methods

- [decode](protocol_securechannel.SecureChannelStatusMessageSchema.md#decode)
- [decodeInternal](protocol_securechannel.SecureChannelStatusMessageSchema.md#decodeinternal)
- [encode](protocol_securechannel.SecureChannelStatusMessageSchema.md#encode)
- [encodeInternal](protocol_securechannel.SecureChannelStatusMessageSchema.md#encodeinternal)
- [validate](protocol_securechannel.SecureChannelStatusMessageSchema.md#validate)

## Constructors

### constructor

• **new SecureChannelStatusMessageSchema**()

#### Inherited from

[Schema](schema.Schema.md).[constructor](schema.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`StatusMessage`](../modules/protocol_securechannel.md#statusmessage)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`StatusMessage`](../modules/protocol_securechannel.md#statusmessage)

#### Inherited from

[Schema](schema.Schema.md).[decode](schema.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[Schema](schema.Schema.md).[decodeInternal](schema.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L28)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`StatusMessage`](../modules/protocol_securechannel.md#statusmessage) |

#### Returns

`Uint8Array`

#### Inherited from

[Schema](schema.Schema.md).[encode](schema.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`StatusMessage`](../modules/protocol_securechannel.md#statusmessage) |

#### Returns

`Uint8Array`

#### Overrides

[Schema](schema.Schema.md).[encodeInternal](schema.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L20)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`StatusMessage`](../modules/protocol_securechannel.md#statusmessage) |

#### Returns

`void`

#### Inherited from

[Schema](schema.Schema.md).[validate](schema.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
