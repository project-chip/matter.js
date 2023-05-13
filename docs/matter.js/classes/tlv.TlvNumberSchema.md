[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvNumberSchema

# Class: TlvNumberSchema

[tlv](../modules/tlv.md).TlvNumberSchema

## Hierarchy

- [`TlvNumericSchema`](tlv.TlvNumericSchema.md)<`number`\>

  ↳ **`TlvNumberSchema`**

## Table of contents

### Constructors

- [constructor](tlv.TlvNumberSchema.md#constructor)

### Properties

- [lengthProvider](tlv.TlvNumberSchema.md#lengthprovider)
- [max](tlv.TlvNumberSchema.md#max)
- [min](tlv.TlvNumberSchema.md#min)
- [type](tlv.TlvNumberSchema.md#type)

### Methods

- [bound](tlv.TlvNumberSchema.md#bound)
- [decode](tlv.TlvNumberSchema.md#decode)
- [decodeInternal](tlv.TlvNumberSchema.md#decodeinternal)
- [decodeTlv](tlv.TlvNumberSchema.md#decodetlv)
- [decodeTlvInternal](tlv.TlvNumberSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.TlvNumberSchema.md#decodetlvinternalvalue)
- [encode](tlv.TlvNumberSchema.md#encode)
- [encodeInternal](tlv.TlvNumberSchema.md#encodeinternal)
- [encodeTlv](tlv.TlvNumberSchema.md#encodetlv)
- [encodeTlvInternal](tlv.TlvNumberSchema.md#encodetlvinternal)
- [validate](tlv.TlvNumberSchema.md#validate)
- [validateBoundaries](tlv.TlvNumberSchema.md#validateboundaries)

## Constructors

### constructor

• **new TlvNumberSchema**(`type`, `lengthProvider`, `min?`, `max?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enums/tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv.TlvType.md#unsignedint) \| [`Float`](../enums/tlv.TlvType.md#float) |
| `lengthProvider` | (`value`: `number`) => [`TlvLength`](../enums/tlv.TlvLength.md) |
| `min?` | `number` |
| `max?` | `number` |

#### Overrides

TlvNumericSchema&lt;number\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L64)

## Properties

### lengthProvider

• `Protected` `Readonly` **lengthProvider**: (`value`: `number`) => [`TlvLength`](../enums/tlv.TlvLength.md)

#### Type declaration

▸ (`value`): [`TlvLength`](../enums/tlv.TlvLength.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

[`TlvLength`](../enums/tlv.TlvLength.md)

#### Inherited from

TlvNumericSchema.lengthProvider

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L24)

___

### max

• `Protected` `Optional` `Readonly` **max**: `number`

#### Inherited from

TlvNumericSchema.max

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L26)

___

### min

• `Protected` `Optional` `Readonly` **min**: `number`

#### Inherited from

TlvNumericSchema.min

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L25)

___

### type

• `Protected` `Readonly` **type**: [`SignedInt`](../enums/tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv.TlvType.md#unsignedint) \| [`Float`](../enums/tlv.TlvType.md#float)

#### Inherited from

TlvNumericSchema.type

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L23)

## Methods

### bound

▸ **bound**(`«destructured»`): [`TlvNumericSchema`](tlv.TlvNumericSchema.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`NumericConstraints`](../modules/tlv.md#numericconstraints)<`number`\> |

#### Returns

[`TlvNumericSchema`](tlv.TlvNumericSchema.md)<`number`\>

#### Overrides

TlvNumericSchema.bound

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L78)

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

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

`number`

#### Inherited from

TlvNumericSchema.decodeTlv

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
| `value` | `number` |

#### Inherited from

TlvNumericSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

`number`

#### Overrides

TlvNumericSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L73)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L19)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Inherited from

TlvNumericSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L25)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv.TlvWriter.md) |
| `value` | `number` |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Inherited from

TlvNumericSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L31)

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

[packages/matter.js/src/tlv/TlvNumber.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L87)

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

[packages/matter.js/src/tlv/TlvNumber.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L47)
