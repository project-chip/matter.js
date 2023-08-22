[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / StringSchema

# Class: StringSchema<T\>

[tlv/export](../modules/tlv_export.md).StringSchema

Schema to encode an byte string or an Utf8 string in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § A.11.2

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ByteString`](../enums/tlv_export.TlvType.md#bytestring) \| [`Utf8String`](../enums/tlv_export.TlvType.md#utf8string) |

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<[`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]\>

  ↳ **`StringSchema`**

## Table of contents

### Constructors

- [constructor](tlv_export.StringSchema.md#constructor)

### Properties

- [maxLength](tlv_export.StringSchema.md#maxlength)
- [minLength](tlv_export.StringSchema.md#minlength)
- [type](tlv_export.StringSchema.md#type)

### Methods

- [bound](tlv_export.StringSchema.md#bound)
- [decode](tlv_export.StringSchema.md#decode)
- [decodeInternal](tlv_export.StringSchema.md#decodeinternal)
- [decodeTlv](tlv_export.StringSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.StringSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.StringSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.StringSchema.md#encode)
- [encodeInternal](tlv_export.StringSchema.md#encodeinternal)
- [encodeTlv](tlv_export.StringSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.StringSchema.md#encodetlvinternal)
- [injectField](tlv_export.StringSchema.md#injectfield)
- [removeField](tlv_export.StringSchema.md#removefield)
- [validate](tlv_export.StringSchema.md#validate)

## Constructors

### constructor

• **new StringSchema**<`T`\>(`type`, `minLength?`, `maxLength?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Utf8String`](../enums/tlv_export.TlvType.md#utf8string) \| [`ByteString`](../enums/tlv_export.TlvType.md#bytestring) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `T` | `undefined` |
| `minLength` | `number` | `0` |
| `maxLength` | `number` | `1024` |

#### Overrides

TlvSchema&lt;TlvToPrimitive[T]\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L26)

## Properties

### maxLength

• `Private` `Readonly` **maxLength**: `number` = `1024`

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L29)

___

### minLength

• `Private` `Readonly` **minLength**: `number` = `0`

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L28)

___

### type

• `Private` **type**: `T`

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L27)

## Methods

### bound

▸ **bound**(`«destructured»`): [`StringSchema`](tlv_export.StringSchema.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`LengthConstraints`](../modules/export._internal_.md#lengthconstraints-1) |

#### Returns

[`StringSchema`](tlv_export.StringSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L58)

___

### decode

▸ **decode**(`encoded`, `validate?`): [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

[`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Inherited from

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
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

[`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L42)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L24)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L36)

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.injectField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L43)

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.removeField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L52)

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`] |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvString.ts#L47)
