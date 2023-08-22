[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvNumberSchema

# Class: TlvNumberSchema

[tlv/export](../modules/tlv_export.md).TlvNumberSchema

## Hierarchy

- [`TlvNumericSchema`](tlv_export.TlvNumericSchema.md)<`number`\>

  ↳ **`TlvNumberSchema`**

## Table of contents

### Constructors

- [constructor](tlv_export.TlvNumberSchema.md#constructor)

### Properties

- [lengthProvider](tlv_export.TlvNumberSchema.md#lengthprovider)
- [max](tlv_export.TlvNumberSchema.md#max)
- [min](tlv_export.TlvNumberSchema.md#min)
- [type](tlv_export.TlvNumberSchema.md#type)

### Methods

- [bound](tlv_export.TlvNumberSchema.md#bound)
- [decode](tlv_export.TlvNumberSchema.md#decode)
- [decodeInternal](tlv_export.TlvNumberSchema.md#decodeinternal)
- [decodeTlv](tlv_export.TlvNumberSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.TlvNumberSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.TlvNumberSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.TlvNumberSchema.md#encode)
- [encodeInternal](tlv_export.TlvNumberSchema.md#encodeinternal)
- [encodeTlv](tlv_export.TlvNumberSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.TlvNumberSchema.md#encodetlvinternal)
- [injectField](tlv_export.TlvNumberSchema.md#injectfield)
- [removeField](tlv_export.TlvNumberSchema.md#removefield)
- [validate](tlv_export.TlvNumberSchema.md#validate)
- [validateBoundaries](tlv_export.TlvNumberSchema.md#validateboundaries)

## Constructors

### constructor

• **new TlvNumberSchema**(`type`, `lengthProvider`, `min?`, `max?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enums/tlv_export.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv_export.TlvType.md#unsignedint) \| [`Float`](../enums/tlv_export.TlvType.md#float) |
| `lengthProvider` | (`value`: `number`) => [`TlvLength`](../enums/tlv_export.TlvLength.md) |
| `min?` | `number` |
| `max?` | `number` |

#### Overrides

TlvNumericSchema&lt;number\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L89)

## Properties

### lengthProvider

• `Protected` `Readonly` **lengthProvider**: (`value`: `number`) => [`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Type declaration

▸ (`value`): [`TlvLength`](../enums/tlv_export.TlvLength.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

[`TlvLength`](../enums/tlv_export.TlvLength.md)

#### Inherited from

TlvNumericSchema.lengthProvider

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L40)

___

### max

• `Protected` `Optional` `Readonly` **max**: `number`

#### Inherited from

TlvNumericSchema.max

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L42)

___

### min

• `Protected` `Optional` `Readonly` **min**: `number`

#### Inherited from

TlvNumericSchema.min

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L41)

___

### type

• `Protected` `Readonly` **type**: [`SignedInt`](../enums/tlv_export.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv_export.TlvType.md#unsignedint) \| [`Float`](../enums/tlv_export.TlvType.md#float)

#### Inherited from

TlvNumericSchema.type

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L39)

## Methods

### bound

▸ **bound**(`«destructured»`): [`TlvNumericSchema`](tlv_export.TlvNumericSchema.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`NumericConstraints`](../modules/tlv_export.md#numericconstraints)<`number`\> |

#### Returns

[`TlvNumericSchema`](tlv_export.TlvNumericSchema.md)<`number`\>

#### Overrides

TlvNumericSchema.bound

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:103](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L103)

___

### decode

▸ **decode**(`encoded`, `validate?`): `number`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.decodeTlv

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
| `value` | `number` |

#### Inherited from

TlvNumericSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

`number`

#### Overrides

TlvNumericSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:98](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L98)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvNumericSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L24)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `value` | `number` |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Inherited from

TlvNumericSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L47)

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

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L43)

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

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L52)

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

[packages/matter.js/src/tlv/TlvNumber.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L107)

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

[packages/matter.js/src/tlv/TlvNumber.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNumber.ts#L65)
