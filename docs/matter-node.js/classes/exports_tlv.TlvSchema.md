[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvSchema

# Class: TlvSchema<T\>

[exports/tlv](../modules/exports_tlv.md).TlvSchema

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<`T`, [`ByteArray`](../modules/util_export.md#bytearray-1)\>

  ↳ **`TlvSchema`**

  ↳↳ [`AnySchema`](exports_tlv.AnySchema.md)

  ↳↳ [`ArraySchema`](exports_tlv.ArraySchema.md)

  ↳↳ [`BooleanSchema`](exports_tlv.BooleanSchema.md)

  ↳↳ [`NullableSchema`](exports_tlv.NullableSchema.md)

  ↳↳ [`TlvNumericSchema`](exports_tlv.TlvNumericSchema.md)

  ↳↳ [`ObjectSchema`](exports_tlv.ObjectSchema.md)

  ↳↳ [`StringSchema`](exports_tlv.StringSchema.md)

  ↳↳ [`VoidSchema`](exports_tlv.VoidSchema.md)

  ↳↳ [`TlvWrapper`](exports_tlv.TlvWrapper.md)

## Implements

- [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

## Implemented by

- [`TlvSchema`](exports_tlv.TlvSchema.md)

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvSchema.md#constructor)

### Methods

- [decode](exports_tlv.TlvSchema.md#decode)
- [decodeInternal](exports_tlv.TlvSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.TlvSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.TlvSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.TlvSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.TlvSchema.md#encode)
- [encodeInternal](exports_tlv.TlvSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.TlvSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.TlvSchema.md#encodetlvinternal)
- [injectField](exports_tlv.TlvSchema.md#injectfield)
- [removeField](exports_tlv.TlvSchema.md#removefield)
- [validate](exports_tlv.TlvSchema.md#validate)

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

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

`T`

#### Implementation of

TlvSchema.decode

#### Inherited from

Schema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:13

___

### decodeTlvInternal

▸ **decodeTlvInternal**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `value` | `T` |

#### Implementation of

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ `Abstract` **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:18

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Implementation of

TlvSchema.encodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ `Abstract` **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | `T` |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Implementation of

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:19

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:20

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:21

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
