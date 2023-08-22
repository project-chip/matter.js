[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / DerCodec

# Class: DerCodec

[codec/export](../modules/codec_export.md).DerCodec

## Table of contents

### Constructors

- [constructor](codec_export.DerCodec.md#constructor)

### Methods

- [decode](codec_export.DerCodec.md#decode)
- [decodeAnsi1](codec_export.DerCodec.md#decodeansi1)
- [decodeRec](codec_export.DerCodec.md#decoderec)
- [encode](codec_export.DerCodec.md#encode)
- [encodeAnsi1](codec_export.DerCodec.md#encodeansi1)
- [encodeArray](codec_export.DerCodec.md#encodearray)
- [encodeBoolean](codec_export.DerCodec.md#encodeboolean)
- [encodeDate](codec_export.DerCodec.md#encodedate)
- [encodeLengthBytes](codec_export.DerCodec.md#encodelengthbytes)
- [encodeObject](codec_export.DerCodec.md#encodeobject)
- [encodeOctetString](codec_export.DerCodec.md#encodeoctetstring)
- [encodeString](codec_export.DerCodec.md#encodestring)
- [encodeUnsignedInt](codec_export.DerCodec.md#encodeunsignedint)

## Constructors

### constructor

• **new DerCodec**()

## Methods

### decode

▸ `Static` **decode**(`data`): [`DerNode`](../modules/codec_export.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DerNode`](../modules/codec_export.md#dernode)

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:167](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L167)

___

### decodeAnsi1

▸ `Static` `Private` **decodeAnsi1**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Big`](../enums/util_export.Endian.md#big)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:184](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L184)

___

### decodeRec

▸ `Static` `Private` **decodeRec**(`reader`): [`DerNode`](../modules/codec_export.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Big`](../enums/util_export.Endian.md#big)\> |

#### Returns

[`DerNode`](../modules/codec_export.md#dernode)

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:171](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L171)

___

### encode

▸ `Static` **encode**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L63)

___

### encodeAnsi1

▸ `Static` `Private` **encodeAnsi1**(`tag`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L163)

___

### encodeArray

▸ `Static` `Private` **encodeArray**(`array`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L108)

___

### encodeBoolean

▸ `Static` `Private` **encodeBoolean**(`bool`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L104)

___

### encodeDate

▸ `Static` `Private` **encodeDate**(`date`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:92](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L92)

___

### encodeLengthBytes

▸ `Static` `Private` **encodeLengthBytes**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:145](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L145)

___

### encodeObject

▸ `Static` `Private` **encodeObject**(`object`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L119)

___

### encodeOctetString

▸ `Static` `Private` **encodeOctetString**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:115](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L115)

___

### encodeString

▸ `Static` `Private` **encodeString**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:127](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L127)

___

### encodeUnsignedInt

▸ `Static` `Private` **encodeUnsignedInt**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:131](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L131)
