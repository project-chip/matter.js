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

[packages/matter.js/src/codec/DerCodec.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L178)

___

### decodeAnsi1

▸ **decodeAnsi1**(`reader`): `Object`

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

[packages/matter.js/src/codec/DerCodec.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L195)

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

[packages/matter.js/src/codec/DerCodec.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L182)

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

[packages/matter.js/src/codec/DerCodec.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L64)

___

### encodeAnsi1

▸ **encodeAnsi1**(`tag`, `data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L174)

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

[packages/matter.js/src/codec/DerCodec.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L119)

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

[packages/matter.js/src/codec/DerCodec.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L115)

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

[packages/matter.js/src/codec/DerCodec.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L103)

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

[packages/matter.js/src/codec/DerCodec.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L156)

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

[packages/matter.js/src/codec/DerCodec.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L130)

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

[packages/matter.js/src/codec/DerCodec.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L126)

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

[packages/matter.js/src/codec/DerCodec.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L138)

___

### encodeUnsignedInt

▸ **encodeUnsignedInt**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L142)
