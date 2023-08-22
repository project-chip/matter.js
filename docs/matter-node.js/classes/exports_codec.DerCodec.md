[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / DerCodec

# Class: DerCodec

[exports/codec](../modules/exports_codec.md).DerCodec

## Table of contents

### Constructors

- [constructor](exports_codec.DerCodec.md#constructor)

### Properties

- [decodeAnsi1](exports_codec.DerCodec.md#decodeansi1)
- [decodeRec](exports_codec.DerCodec.md#decoderec)
- [encodeAnsi1](exports_codec.DerCodec.md#encodeansi1)
- [encodeArray](exports_codec.DerCodec.md#encodearray)
- [encodeBoolean](exports_codec.DerCodec.md#encodeboolean)
- [encodeDate](exports_codec.DerCodec.md#encodedate)
- [encodeLengthBytes](exports_codec.DerCodec.md#encodelengthbytes)
- [encodeObject](exports_codec.DerCodec.md#encodeobject)
- [encodeOctetString](exports_codec.DerCodec.md#encodeoctetstring)
- [encodeString](exports_codec.DerCodec.md#encodestring)
- [encodeUnsignedInt](exports_codec.DerCodec.md#encodeunsignedint)

### Methods

- [decode](exports_codec.DerCodec.md#decode)
- [encode](exports_codec.DerCodec.md#encode)

## Constructors

### constructor

• **new DerCodec**()

## Properties

### decodeAnsi1

▪ `Static` `Private` **decodeAnsi1**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:55

___

### decodeRec

▪ `Static` `Private` **decodeRec**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:54

___

### encodeAnsi1

▪ `Static` `Private` **encodeAnsi1**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:52

___

### encodeArray

▪ `Static` `Private` **encodeArray**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:46

___

### encodeBoolean

▪ `Static` `Private` **encodeBoolean**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:45

___

### encodeDate

▪ `Static` `Private` **encodeDate**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:44

___

### encodeLengthBytes

▪ `Static` `Private` **encodeLengthBytes**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:51

___

### encodeObject

▪ `Static` `Private` **encodeObject**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:48

___

### encodeOctetString

▪ `Static` `Private` **encodeOctetString**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:47

___

### encodeString

▪ `Static` `Private` **encodeString**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:49

___

### encodeUnsignedInt

▪ `Static` `Private` **encodeUnsignedInt**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:50

## Methods

### decode

▸ `Static` **decode**(`data`): [`DerNode`](../modules/exports_codec.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DerNode`](../modules/exports_codec.md#dernode)

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:53

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:43
