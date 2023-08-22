[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / StringSchema

# Class: StringSchema<T\>

[exports/tlv](../modules/exports_tlv.md).StringSchema

Schema to encode an byte string or an Utf8 string in TLV.

**`See`**

MatterCoreSpecificationV1_0 § A.11.2

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ByteString`](../enums/exports_tlv.TlvType.md#bytestring) \| [`Utf8String`](../enums/exports_tlv.TlvType.md#utf8string) |

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<[`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]\>

  ↳ **`StringSchema`**

## Table of contents

### Constructors

- [constructor](exports_tlv.StringSchema.md#constructor)

### Properties

- [maxLength](exports_tlv.StringSchema.md#maxlength)
- [minLength](exports_tlv.StringSchema.md#minlength)
- [type](exports_tlv.StringSchema.md#type)

### Methods

- [bound](exports_tlv.StringSchema.md#bound)
- [decode](exports_tlv.StringSchema.md#decode)
- [decodeInternal](exports_tlv.StringSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.StringSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.StringSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.StringSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.StringSchema.md#encode)
- [encodeInternal](exports_tlv.StringSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.StringSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.StringSchema.md#encodetlvinternal)
- [injectField](exports_tlv.StringSchema.md#injectfield)
- [removeField](exports_tlv.StringSchema.md#removefield)
- [validate](exports_tlv.StringSchema.md#validate)

## Constructors

### constructor

• **new StringSchema**<`T`\>(`type`, `minLength?`, `maxLength?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Utf8String`](../enums/exports_tlv.TlvType.md#utf8string) \| [`ByteString`](../enums/exports_tlv.TlvType.md#bytestring) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `minLength?` | `number` |
| `maxLength?` | `number` |

#### Overrides

TlvSchema&lt;TlvToPrimitive[T]\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:22

## Properties

### maxLength

• `Private` `Readonly` **maxLength**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:21

___

### minLength

• `Private` `Readonly` **minLength**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:20

___

### type

• `Private` **type**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:19

## Methods

### bound

▸ **bound**(`«destructured»`): [`StringSchema`](exports_tlv.StringSchema.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`LengthConstraints`](../modules/export._internal_.md#lengthconstraints-1) |

#### Returns

[`StringSchema`](exports_tlv.StringSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:26

___

### decode

▸ **decode**(`encoded`, `validate?`): [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

[`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

[`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Inherited from

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
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

[`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:24

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:23

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.injectField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:20

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.removeField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:21

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/exports_tlv.md#tlvtoprimitive)[`T`] |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:25
