[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / StringSchema

# Class: StringSchema<T\>

[tlv](../modules/tlv.md).StringSchema

Schema to encode an byte string or an Utf8 string in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.11.2

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ByteString`](../enums/tlv.TlvType.md#bytestring) \| [`Utf8String`](../enums/tlv.TlvType.md#utf8string) |

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<[`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]\>

  ↳ **`StringSchema`**

## Table of contents

### Constructors

- [constructor](tlv.StringSchema.md#constructor)

### Properties

- [maxLength](tlv.StringSchema.md#maxlength)
- [minLength](tlv.StringSchema.md#minlength)
- [type](tlv.StringSchema.md#type)

### Methods

- [bound](tlv.StringSchema.md#bound)
- [decode](tlv.StringSchema.md#decode)
- [decodeInternal](tlv.StringSchema.md#decodeinternal)
- [decodeTlv](tlv.StringSchema.md#decodetlv)
- [decodeTlvInternal](tlv.StringSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.StringSchema.md#decodetlvinternalvalue)
- [encode](tlv.StringSchema.md#encode)
- [encodeInternal](tlv.StringSchema.md#encodeinternal)
- [encodeTlv](tlv.StringSchema.md#encodetlv)
- [encodeTlvInternal](tlv.StringSchema.md#encodetlvinternal)
- [validate](tlv.StringSchema.md#validate)

## Constructors

### constructor

• **new StringSchema**<`T`\>(`type`, `minLength?`, `maxLength?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Utf8String`](../enums/tlv.TlvType.md#utf8string) \| [`ByteString`](../enums/tlv.TlvType.md#bytestring) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `T` | `undefined` |
| `minLength` | `number` | `0` |
| `maxLength` | `number` | `1024` |

#### Overrides

TlvSchema&lt;TlvToPrimitive[T]\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L25)

## Properties

### maxLength

• `Private` `Readonly` **maxLength**: `number` = `1024`

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L28)

___

### minLength

• `Private` `Readonly` **minLength**: `number` = `0`

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L27)

___

### type

• `Private` **type**: `T`

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L26)

## Methods

### bound

▸ **bound**(`«destructured»`): [`StringSchema`](tlv.StringSchema.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`LengthConstraints`](../modules/index._internal_.md#lengthconstraints-1) |

#### Returns

[`StringSchema`](tlv.StringSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L53)

___

### decode

▸ **decode**(`encoded`, `validate?`): [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

[`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

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
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`] |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

[`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`]

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L41)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`] |

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
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`] |

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
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`] |

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
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`] |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L35)

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`] |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L46)
