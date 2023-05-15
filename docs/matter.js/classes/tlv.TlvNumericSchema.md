[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvNumericSchema

# Class: TlvNumericSchema<T\>

[tlv](../modules/tlv.md).TlvNumericSchema

Schema to encode an unsigned integer in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.11.1

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `bigint` \| `number` |

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<`T`\>

  ↳ **`TlvNumericSchema`**

  ↳↳ [`TlvNumberSchema`](tlv.TlvNumberSchema.md)

## Table of contents

### Constructors

- [constructor](tlv.TlvNumericSchema.md#constructor)

### Properties

- [lengthProvider](tlv.TlvNumericSchema.md#lengthprovider)
- [max](tlv.TlvNumericSchema.md#max)
- [min](tlv.TlvNumericSchema.md#min)
- [type](tlv.TlvNumericSchema.md#type)

### Methods

- [bound](tlv.TlvNumericSchema.md#bound)
- [decode](tlv.TlvNumericSchema.md#decode)
- [decodeInternal](tlv.TlvNumericSchema.md#decodeinternal)
- [decodeTlv](tlv.TlvNumericSchema.md#decodetlv)
- [decodeTlvInternal](tlv.TlvNumericSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.TlvNumericSchema.md#decodetlvinternalvalue)
- [encode](tlv.TlvNumericSchema.md#encode)
- [encodeInternal](tlv.TlvNumericSchema.md#encodeinternal)
- [encodeTlv](tlv.TlvNumericSchema.md#encodetlv)
- [encodeTlvInternal](tlv.TlvNumericSchema.md#encodetlvinternal)
- [validate](tlv.TlvNumericSchema.md#validate)
- [validateBoundaries](tlv.TlvNumericSchema.md#validateboundaries)

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
| `type` | [`SignedInt`](../enums/tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv.TlvType.md#unsignedint) \| [`Float`](../enums/tlv.TlvType.md#float) |
| `lengthProvider` | (`value`: `T`) => [`TlvLength`](../enums/tlv.TlvLength.md) |
| `min?` | `T` |
| `max?` | `T` |

#### Overrides

TlvSchema&lt;T\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L22)

## Properties

### lengthProvider

• `Protected` `Readonly` **lengthProvider**: (`value`: `T`) => [`TlvLength`](../enums/tlv.TlvLength.md)

#### Type declaration

▸ (`value`): [`TlvLength`](../enums/tlv.TlvLength.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

[`TlvLength`](../enums/tlv.TlvLength.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L24)

___

### max

• `Protected` `Optional` `Readonly` **max**: `T`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L26)

___

### min

• `Protected` `Optional` `Readonly` **min**: `T`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L25)

___

### type

• `Protected` `Readonly` **type**: [`SignedInt`](../enums/tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv.TlvType.md#unsignedint) \| [`Float`](../enums/tlv.TlvType.md#float)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L23)

## Methods

### bound

▸ **bound**(`«destructured»`): [`TlvNumericSchema`](tlv.TlvNumericSchema.md)<`T`\>

Restrict value range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`NumericConstraints`](../modules/tlv.md#numericconstraints)<`T`\> |

#### Returns

[`TlvNumericSchema`](tlv.TlvNumericSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L53)

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

#### Inherited from

TlvSchema.decodeInternal

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

#### Inherited from

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

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

`T`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L37)

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

#### Inherited from

TlvSchema.encodeInternal

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

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L25)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv.TlvWriter.md) |
| `value` | `T` |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L31)

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

[packages/matter.js/src/tlv/TlvNumber.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L42)

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

[packages/matter.js/src/tlv/TlvNumber.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L47)
