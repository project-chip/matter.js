[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvSchema

# Class: TlvSchema<T\>

[tlv/export](../modules/tlv_export.md).TlvSchema

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Schema`](schema_export.Schema.md)<`T`, [`ByteArray`](../modules/util_export.md#bytearray-1)\>

  ↳ **`TlvSchema`**

  ↳↳ [`AnySchema`](tlv_export.AnySchema.md)

  ↳↳ [`ArraySchema`](tlv_export.ArraySchema.md)

  ↳↳ [`BooleanSchema`](tlv_export.BooleanSchema.md)

  ↳↳ [`NullableSchema`](tlv_export.NullableSchema.md)

  ↳↳ [`TlvNumericSchema`](tlv_export.TlvNumericSchema.md)

  ↳↳ [`ObjectSchema`](tlv_export.ObjectSchema.md)

  ↳↳ [`StringSchema`](tlv_export.StringSchema.md)

  ↳↳ [`VoidSchema`](tlv_export.VoidSchema.md)

  ↳↳ [`TlvWrapper`](tlv_export.TlvWrapper.md)

## Implements

- [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

## Implemented by

- [`TlvSchema`](tlv_export.TlvSchema.md)

## Table of contents

### Constructors

- [constructor](tlv_export.TlvSchema.md#constructor)

### Methods

- [decode](tlv_export.TlvSchema.md#decode)
- [decodeInternal](tlv_export.TlvSchema.md#decodeinternal)
- [decodeTlv](tlv_export.TlvSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.TlvSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.TlvSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.TlvSchema.md#encode)
- [encodeInternal](tlv_export.TlvSchema.md#encodeinternal)
- [encodeTlv](tlv_export.TlvSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.TlvSchema.md#encodetlvinternal)
- [injectField](tlv_export.TlvSchema.md#injectfield)
- [removeField](tlv_export.TlvSchema.md#removefield)
- [validate](tlv_export.TlvSchema.md#validate)

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

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L30)

___

### decodeTlvInternal

▸ **decodeTlvInternal**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |
| `value` | `T` |

#### Implementation of

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ `Abstract` **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L39)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Implementation of

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L24)

___

### encodeTlvInternal

▸ `Abstract` **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `value` | `T` |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Implementation of

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L41)

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`

#### Implementation of

TlvSchema.injectField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L43)

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`

#### Implementation of

TlvSchema.removeField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L52)

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

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L28)
