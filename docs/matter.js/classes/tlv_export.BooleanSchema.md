[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / BooleanSchema

# Class: BooleanSchema

[tlv/export](../modules/tlv_export.md).BooleanSchema

Schema to encode a boolean in TLV.

**`See`**

MatterSpecification.v10.Core § A.11.3

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)\<`boolean`\>

  ↳ **`BooleanSchema`**

## Table of contents

### Constructors

- [constructor](tlv_export.BooleanSchema.md#constructor)

### Methods

- [decode](tlv_export.BooleanSchema.md#decode)
- [decodeInternal](tlv_export.BooleanSchema.md#decodeinternal)
- [decodeTlv](tlv_export.BooleanSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.BooleanSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.BooleanSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.BooleanSchema.md#encode)
- [encodeInternal](tlv_export.BooleanSchema.md#encodeinternal)
- [encodeTlv](tlv_export.BooleanSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.BooleanSchema.md#encodetlvinternal)
- [injectField](tlv_export.BooleanSchema.md#injectfield)
- [removeField](tlv_export.BooleanSchema.md#removefield)
- [validate](tlv_export.BooleanSchema.md#validate)

## Constructors

### constructor

• **new BooleanSchema**(): [`BooleanSchema`](tlv_export.BooleanSchema.md)

#### Returns

[`BooleanSchema`](tlv_export.BooleanSchema.md)

#### Inherited from

TlvSchema\<boolean\>.constructor

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `boolean`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`boolean`

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`boolean`

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:28](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L28)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`boolean`

#### Inherited from

TlvSchema.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:44](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L44)

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
| `value` | `boolean` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:48](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L48)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`_reader`, `typeLength`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

`boolean`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvBoolean.ts:22](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvBoolean.ts#L22)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:32](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L32)

___

### encodeTlv

▸ **encodeTlv**(`value`, `options?`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |
| `options?` | [`TlvEncodingOptions`](../modules/tlv_export.md#tlvencodingoptions) |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:38](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L38)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `value` | `boolean` |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvBoolean.ts:18](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvBoolean.ts#L18)

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`boolean`

#### Inherited from

TlvSchema.injectField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:57](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L57)

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`boolean`

#### Inherited from

TlvSchema.removeField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:61](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvSchema.ts#L61)

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvBoolean.ts:27](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvBoolean.ts#L27)
