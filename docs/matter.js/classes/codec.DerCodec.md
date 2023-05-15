[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec](../modules/codec.md) / DerCodec

# Class: DerCodec

[codec](../modules/codec.md).DerCodec

## Table of contents

### Constructors

- [constructor](codec.DerCodec.md#constructor)

### Methods

- [decode](codec.DerCodec.md#decode)
- [decodeAnsi1](codec.DerCodec.md#decodeansi1)
- [decodeRec](codec.DerCodec.md#decoderec)
- [encode](codec.DerCodec.md#encode)
- [encodeAnsi1](codec.DerCodec.md#encodeansi1)
- [encodeArray](codec.DerCodec.md#encodearray)
- [encodeBoolean](codec.DerCodec.md#encodeboolean)
- [encodeDate](codec.DerCodec.md#encodedate)
- [encodeLengthBytes](codec.DerCodec.md#encodelengthbytes)
- [encodeObject](codec.DerCodec.md#encodeobject)
- [encodeOctetString](codec.DerCodec.md#encodeoctetstring)
- [encodeString](codec.DerCodec.md#encodestring)
- [encodeUnsignedInt](codec.DerCodec.md#encodeunsignedint)

## Constructors

### constructor

• **new DerCodec**()

## Methods

### decode

▸ `Static` **decode**(`data`): [`DerNode`](../modules/codec.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DerNode`](../modules/codec.md#dernode)

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:138](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L138)

___

### decodeAnsi1

▸ `Static` `Private` **decodeAnsi1**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Big`](../enums/util.Endian.md#big)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:154](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L154)

___

### decodeRec

▸ `Static` `Private` **decodeRec**(`reader`): [`DerNode`](../modules/codec.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Big`](../enums/util.Endian.md#big)\> |

#### Returns

[`DerNode`](../modules/codec.md#dernode)

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:142](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L142)

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

[packages/matter.js/src/codec/DerCodec.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L50)

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

[packages/matter.js/src/codec/DerCodec.ts:134](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L134)

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

[packages/matter.js/src/codec/DerCodec.ts:82](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L82)

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

[packages/matter.js/src/codec/DerCodec.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L78)

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

[packages/matter.js/src/codec/DerCodec.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L74)

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

[packages/matter.js/src/codec/DerCodec.ts:116](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L116)

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

[packages/matter.js/src/codec/DerCodec.ts:90](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L90)

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

[packages/matter.js/src/codec/DerCodec.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L86)

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

[packages/matter.js/src/codec/DerCodec.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L98)

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

[packages/matter.js/src/codec/DerCodec.ts:102](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L102)
