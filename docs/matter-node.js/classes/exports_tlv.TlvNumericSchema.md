[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvNumericSchema

# Class: TlvNumericSchema<T\>

[exports/tlv](../modules/exports_tlv.md).TlvNumericSchema

Schema to encode an unsigned integer in TLV.

**`See`**

MatterCoreSpecificationV1_0 § A.11.1

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `bigint` \| `number` |

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

  ↳ **`TlvNumericSchema`**

  ↳↳ [`TlvNumberSchema`](exports_tlv.TlvNumberSchema.md)

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvNumericSchema.md#constructor)

### Properties

- [lengthProvider](exports_tlv.TlvNumericSchema.md#lengthprovider)
- [max](exports_tlv.TlvNumericSchema.md#max)
- [min](exports_tlv.TlvNumericSchema.md#min)
- [type](exports_tlv.TlvNumericSchema.md#type)

### Methods

- [bound](exports_tlv.TlvNumericSchema.md#bound)
- [decode](exports_tlv.TlvNumericSchema.md#decode)
- [decodeInternal](exports_tlv.TlvNumericSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.TlvNumericSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.TlvNumericSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.TlvNumericSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.TlvNumericSchema.md#encode)
- [encodeInternal](exports_tlv.TlvNumericSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.TlvNumericSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.TlvNumericSchema.md#encodetlvinternal)
- [injectField](exports_tlv.TlvNumericSchema.md#injectfield)
- [removeField](exports_tlv.TlvNumericSchema.md#removefield)
- [validate](exports_tlv.TlvNumericSchema.md#validate)
- [validateBoundaries](exports_tlv.TlvNumericSchema.md#validateboundaries)

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
| `type` | [`SignedInt`](../enums/exports_tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/exports_tlv.TlvType.md#unsignedint) \| [`Float`](../enums/exports_tlv.TlvType.md#float) |
| `lengthProvider` | (`value`: `T`) => [`TlvLength`](../enums/exports_tlv.TlvLength.md) |
| `min?` | `T` |
| `max?` | `T` |

#### Overrides

TlvSchema&lt;T\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:15

## Properties

### lengthProvider

• `Protected` `Readonly` **lengthProvider**: (`value`: `T`) => [`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Type declaration

▸ (`value`): [`TlvLength`](../enums/exports_tlv.TlvLength.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

[`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:12

___

### max

• `Protected` `Optional` `Readonly` **max**: `T`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:14

___

### min

• `Protected` `Optional` `Readonly` **min**: `T`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:13

___

### type

• `Protected` `Readonly` **type**: [`SignedInt`](../enums/exports_tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/exports_tlv.TlvType.md#unsignedint) \| [`Float`](../enums/exports_tlv.TlvType.md#float)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:11

## Methods

### bound

▸ **bound**(`«destructured»`): [`TlvNumericSchema`](exports_tlv.TlvNumericSchema.md)<`T`\>

Restrict value range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`NumericConstraints`](../modules/exports_tlv.md#numericconstraints)<`T`\> |

#### Returns

[`TlvNumericSchema`](exports_tlv.TlvNumericSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:21

___

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

#### Inherited from

TlvSchema.decode

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

#### Inherited from

TlvSchema.decodeInternal

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
| `value` | `T` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

`T`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:17

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
| `value` | `T` |

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
| `value` | `T` |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:16

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
| `value` | `T` |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:18

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

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:19
