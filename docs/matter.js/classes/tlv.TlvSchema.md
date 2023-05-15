[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvSchema

# Class: TlvSchema<T\>

[tlv](../modules/tlv.md).TlvSchema

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Schema`](schema.Schema.md)<`T`, [`ByteArray`](../modules/util.md#bytearray-1)\>

  ↳ **`TlvSchema`**

  ↳↳ [`AnySchema`](tlv.AnySchema.md)

  ↳↳ [`ArraySchema`](tlv.ArraySchema.md)

  ↳↳ [`BooleanSchema`](tlv.BooleanSchema.md)

  ↳↳ [`NullableSchema`](tlv.NullableSchema.md)

  ↳↳ [`TlvNumericSchema`](tlv.TlvNumericSchema.md)

  ↳↳ [`ObjectSchema`](tlv.ObjectSchema.md)

  ↳↳ [`StringSchema`](tlv.StringSchema.md)

  ↳↳ [`VoidSchema`](tlv.VoidSchema.md)

  ↳↳ [`TlvWrapper`](tlv.TlvWrapper.md)

## Implements

- [`TlvSchema`](tlv.TlvSchema.md)<`T`\>

## Implemented by

- [`TlvSchema`](tlv.TlvSchema.md)

## Table of contents

### Constructors

- [constructor](tlv.TlvSchema.md#constructor)

### Methods

- [decode](tlv.TlvSchema.md#decode)
- [decodeInternal](tlv.TlvSchema.md#decodeinternal)
- [decodeTlv](tlv.TlvSchema.md#decodetlv)
- [decodeTlvInternal](tlv.TlvSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.TlvSchema.md#decodetlvinternalvalue)
- [encode](tlv.TlvSchema.md#encode)
- [encodeInternal](tlv.TlvSchema.md#encodeinternal)
- [encodeTlv](tlv.TlvSchema.md#encodetlv)
- [encodeTlvInternal](tlv.TlvSchema.md#encodetlvinternal)
- [validate](tlv.TlvSchema.md#validate)

## Constructors

### constructor

• **new TlvSchema**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

Schema<T, ByteArray\>.constructor

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `T`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`T`

#### Implementation of

TlvSchema.decode

#### Inherited from

Schema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeInternal

#### Overrides

Schema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L31)

___

### decodeTlvInternal

▸ **decodeTlvInternal**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |
| `value` | `T` |

#### Implementation of

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ `Abstract` **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L40)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Uint8Array`

#### Implementation of

TlvSchema.encode

#### Inherited from

Schema.encode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Uint8Array`

#### Implementation of

TlvSchema.encodeInternal

#### Overrides

Schema.encodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L19)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Implementation of

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L25)

___

### encodeTlvInternal

▸ `Abstract` **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv.TlvWriter.md) |
| `value` | `T` |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Implementation of

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L42)

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

#### Implementation of

TlvSchema.validate

#### Inherited from

Schema.validate

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
