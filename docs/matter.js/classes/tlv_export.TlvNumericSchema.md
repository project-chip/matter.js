[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvNumericSchema

# Class: TlvNumericSchema<T\>

[tlv/export](../modules/tlv_export.md).TlvNumericSchema

Schema to encode an unsigned integer in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § A.11.1

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `bigint` \| `number` |

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

  ↳ **`TlvNumericSchema`**

  ↳↳ [`TlvNumberSchema`](tlv_export.TlvNumberSchema.md)

## Table of contents

### Constructors

- [constructor](tlv_export.TlvNumericSchema.md#constructor)

### Properties

- [lengthProvider](tlv_export.TlvNumericSchema.md#lengthprovider)
- [max](tlv_export.TlvNumericSchema.md#max)
- [min](tlv_export.TlvNumericSchema.md#min)
- [type](tlv_export.TlvNumericSchema.md#type)

### Methods

- [bound](tlv_export.TlvNumericSchema.md#bound)
- [decode](tlv_export.TlvNumericSchema.md#decode)
- [decodeInternal](tlv_export.TlvNumericSchema.md#decodeinternal)
- [decodeTlv](tlv_export.TlvNumericSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.TlvNumericSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.TlvNumericSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.TlvNumericSchema.md#encode)
- [encodeInternal](tlv_export.TlvNumericSchema.md#encodeinternal)
- [encodeTlv](tlv_export.TlvNumericSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.TlvNumericSchema.md#encodetlvinternal)
- [injectField](tlv_export.TlvNumericSchema.md#injectfield)
- [removeField](tlv_export.TlvNumericSchema.md#removefield)
- [validate](tlv_export.TlvNumericSchema.md#validate)
- [validateBoundaries](tlv_export.TlvNumericSchema.md#validateboundaries)

## Constructors

### constructor

• **new TlvNumericSchema**<`T`\>(`type`, `lengthProvider`, `min?`, `max?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enums/tlv_export.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv_export.TlvType.md#unsignedint) \| [`Float`](../enums/tlv_export.TlvType.md#float) |
| `lengthProvider` | (`value`: `T`) => [`TlvLength`](../enums/tlv_export.TlvLength.md) |
| `min?` | `T` |
| `max?` | `T` |

#### Overrides

TlvSchema&lt;T\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L38)

## Properties

### lengthProvider

• `Protected` `Readonly` **lengthProvider**: (`value`: `T`) => [`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Type declaration

▸ (`value`): [`TlvLength`](../enums/tlv_export.TlvLength.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

[`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L40)

___

### max

• `Protected` `Optional` `Readonly` **max**: `T`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L42)

___

### min

• `Protected` `Optional` `Readonly` **min**: `T`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L41)

___

### type

• `Protected` `Readonly` **type**: [`SignedInt`](../enums/tlv_export.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv_export.TlvType.md#unsignedint) \| [`Float`](../enums/tlv_export.TlvType.md#float)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L39)

## Methods

### bound

▸ **bound**(`«destructured»`): [`TlvNumericSchema`](tlv_export.TlvNumericSchema.md)<`T`\>

Restrict value range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`NumericConstraints`](../modules/tlv_export.md#numericconstraints)<`T`\> |

#### Returns

[`TlvNumericSchema`](tlv_export.TlvNumericSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L73)

___

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

#### Inherited from

TlvSchema.decode

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

#### Inherited from

TlvSchema.decodeInternal

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
| `value` | `T` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

`T`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L53)

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
| `value` | `T` |

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
| `value` | `T` |

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
| `value` | `T` |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L47)

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

#### Inherited from

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
| `value` | `T` |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L59)

___

### validateBoundaries

▸ **validateBoundaries**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L65)
