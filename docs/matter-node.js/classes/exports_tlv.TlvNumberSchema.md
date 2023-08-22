[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvNumberSchema

# Class: TlvNumberSchema

[exports/tlv](../modules/exports_tlv.md).TlvNumberSchema

## Hierarchy

- [`TlvNumericSchema`](exports_tlv.TlvNumericSchema.md)<`number`\>

  ↳ **`TlvNumberSchema`**

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvNumberSchema.md#constructor)

### Properties

- [lengthProvider](exports_tlv.TlvNumberSchema.md#lengthprovider)
- [max](exports_tlv.TlvNumberSchema.md#max)
- [min](exports_tlv.TlvNumberSchema.md#min)
- [type](exports_tlv.TlvNumberSchema.md#type)

### Methods

- [bound](exports_tlv.TlvNumberSchema.md#bound)
- [decode](exports_tlv.TlvNumberSchema.md#decode)
- [decodeInternal](exports_tlv.TlvNumberSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.TlvNumberSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.TlvNumberSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.TlvNumberSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.TlvNumberSchema.md#encode)
- [encodeInternal](exports_tlv.TlvNumberSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.TlvNumberSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.TlvNumberSchema.md#encodetlvinternal)
- [injectField](exports_tlv.TlvNumberSchema.md#injectfield)
- [removeField](exports_tlv.TlvNumberSchema.md#removefield)
- [validate](exports_tlv.TlvNumberSchema.md#validate)
- [validateBoundaries](exports_tlv.TlvNumberSchema.md#validateboundaries)

## Constructors

### constructor

• **new TlvNumberSchema**(`type`, `lengthProvider`, `min?`, `max?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enums/exports_tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/exports_tlv.TlvType.md#unsignedint) \| [`Float`](../enums/exports_tlv.TlvType.md#float) |
| `lengthProvider` | (`value`: `number`) => [`TlvLength`](../enums/exports_tlv.TlvLength.md) |
| `min?` | `number` |
| `max?` | `number` |

#### Overrides

TlvNumericSchema&lt;number\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:28

## Properties

### lengthProvider

• `Protected` `Readonly` **lengthProvider**: (`value`: `number`) => [`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Type declaration

▸ (`value`): [`TlvLength`](../enums/exports_tlv.TlvLength.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

[`TlvLength`](../enums/exports_tlv.TlvLength.md)

#### Inherited from

TlvNumericSchema.lengthProvider

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:12

___

### max

• `Protected` `Optional` `Readonly` **max**: `number`

#### Inherited from

TlvNumericSchema.max

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:14

___

### min

• `Protected` `Optional` `Readonly` **min**: `number`

#### Inherited from

TlvNumericSchema.min

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:13

___

### type

• `Protected` `Readonly` **type**: [`SignedInt`](../enums/exports_tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/exports_tlv.TlvType.md#unsignedint) \| [`Float`](../enums/exports_tlv.TlvType.md#float)

#### Inherited from

TlvNumericSchema.type

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:11

## Methods

### bound

▸ **bound**(`«destructured»`): [`TlvNumericSchema`](exports_tlv.TlvNumericSchema.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`NumericConstraints`](../modules/exports_tlv.md#numericconstraints)<`number`\> |

#### Returns

[`TlvNumericSchema`](exports_tlv.TlvNumericSchema.md)<`number`\>

#### Overrides

TlvNumericSchema.bound

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:30

___

### decode

▸ **decode**(`encoded`, `validate?`): `number`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.decodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.decodeTlv

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
| `value` | `number` |

#### Inherited from

TlvNumericSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

`number`

#### Overrides

TlvNumericSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:29

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Inherited from

TlvNumericSchema.encode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Inherited from

TlvNumericSchema.encodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvNumericSchema.encodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | `number` |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Inherited from

TlvNumericSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:16

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.injectField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:20

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.removeField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:21

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

TlvNumericSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:31

___

### validateBoundaries

▸ **validateBoundaries**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

TlvNumericSchema.validateBoundaries

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:19
