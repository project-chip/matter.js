[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / DerCodec

# Class: DerCodec

[codec/export](../modules/codec_export.md).DerCodec

## Table of contents

### Constructors

- [constructor](codec_export.DerCodec.md#constructor)

### Methods

- [decode](codec_export.DerCodec.md#decode)
- [decodeAsn1](codec_export.DerCodec.md#decodeasn1)
- [decodeRec](codec_export.DerCodec.md#decoderec)
- [encode](codec_export.DerCodec.md#encode)
- [encodeArray](codec_export.DerCodec.md#encodearray)
- [encodeAsn1](codec_export.DerCodec.md#encodeasn1)
- [encodeBitString](codec_export.DerCodec.md#encodebitstring)
- [encodeBoolean](codec_export.DerCodec.md#encodeboolean)
- [encodeDate](codec_export.DerCodec.md#encodedate)
- [encodeIA5String](codec_export.DerCodec.md#encodeia5string)
- [encodeInteger](codec_export.DerCodec.md#encodeinteger)
- [encodeLengthBytes](codec_export.DerCodec.md#encodelengthbytes)
- [encodeObject](codec_export.DerCodec.md#encodeobject)
- [encodeOctetString](codec_export.DerCodec.md#encodeoctetstring)
- [encodePrintableString](codec_export.DerCodec.md#encodeprintablestring)
- [encodeString](codec_export.DerCodec.md#encodestring)

## Constructors

### constructor

• **new DerCodec**(): [`DerCodec`](codec_export.DerCodec.md)

#### Returns

[`DerCodec`](codec_export.DerCodec.md)

## Methods

### decode

▸ **decode**(`data`): [`DerNode`](../modules/codec_export.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DerNode`](../modules/codec_export.md#dernode)

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:259](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L259)

___

### decodeAsn1

▸ **decodeAsn1**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Big`](../enums/util_export.Endian.md#big)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:276](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L276)

___

### decodeRec

▸ **decodeRec**(`reader`): [`DerNode`](../modules/codec_export.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Big`](../enums/util_export.Endian.md#big)\> |

#### Returns

[`DerNode`](../modules/codec_export.md#dernode)

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:263](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L263)

___

### encode

▸ **encode**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:79](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L79)

___

### encodeArray

▸ **encodeArray**(`array`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:172](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L172)

___

### encodeAsn1

▸ **encodeAsn1**(`tag`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:255](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L255)

___

### encodeBitString

▸ **encodeBitString**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:230](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L230)

___

### encodeBoolean

▸ **encodeBoolean**(`bool`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:168](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L168)

___

### encodeDate

▸ **encodeDate**(`date`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:144](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L144)

___

### encodeIA5String

▸ **encodeIA5String**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:202](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L202)

___

### encodeInteger

▸ **encodeInteger**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:210](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L210)

___

### encodeLengthBytes

▸ **encodeLengthBytes**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:237](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L237)

___

### encodeObject

▸ **encodeObject**(`object`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:183](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L183)

___

### encodeOctetString

▸ **encodeOctetString**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:179](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L179)

___

### encodePrintableString

▸ **encodePrintableString**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:195](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L195)

___

### encodeString

▸ **encodeString**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:191](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/codec/DerCodec.ts#L191)
