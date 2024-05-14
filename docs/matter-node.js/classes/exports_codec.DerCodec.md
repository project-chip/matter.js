[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / DerCodec

# Class: DerCodec

[exports/codec](../modules/exports_codec.md).DerCodec

## Table of contents

### Constructors

- [constructor](exports_codec.DerCodec.md#constructor)

### Properties

- [decodeAsn1](exports_codec.DerCodec.md#decodeasn1)
- [decodeRec](exports_codec.DerCodec.md#decoderec)
- [encodeArray](exports_codec.DerCodec.md#encodearray)
- [encodeAsn1](exports_codec.DerCodec.md#encodeasn1)
- [encodeBitString](exports_codec.DerCodec.md#encodebitstring)
- [encodeBoolean](exports_codec.DerCodec.md#encodeboolean)
- [encodeDate](exports_codec.DerCodec.md#encodedate)
- [encodeIA5String](exports_codec.DerCodec.md#encodeia5string)
- [encodeInteger](exports_codec.DerCodec.md#encodeinteger)
- [encodeLengthBytes](exports_codec.DerCodec.md#encodelengthbytes)
- [encodeObject](exports_codec.DerCodec.md#encodeobject)
- [encodeOctetString](exports_codec.DerCodec.md#encodeoctetstring)
- [encodePrintableString](exports_codec.DerCodec.md#encodeprintablestring)
- [encodeString](exports_codec.DerCodec.md#encodestring)

### Methods

- [decode](exports_codec.DerCodec.md#decode)
- [encode](exports_codec.DerCodec.md#encode)

## Constructors

### constructor

• **new DerCodec**(): [`DerCodec`](exports_codec.DerCodec.md)

#### Returns

[`DerCodec`](exports_codec.DerCodec.md)

## Properties

### decodeAsn1

▪ `Static` `Private` **decodeAsn1**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:72

___

### decodeRec

▪ `Static` `Private` **decodeRec**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:71

___

### encodeArray

▪ `Static` `Private` **encodeArray**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:60

___

### encodeAsn1

▪ `Static` `Private` **encodeAsn1**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:69

___

### encodeBitString

▪ `Static` `Private` **encodeBitString**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:67

___

### encodeBoolean

▪ `Static` `Private` **encodeBoolean**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:59

___

### encodeDate

▪ `Static` `Private` **encodeDate**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:58

___

### encodeIA5String

▪ `Static` `Private` **encodeIA5String**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:65

___

### encodeInteger

▪ `Static` `Private` **encodeInteger**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:66

___

### encodeLengthBytes

▪ `Static` `Private` **encodeLengthBytes**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:68

___

### encodeObject

▪ `Static` `Private` **encodeObject**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:62

___

### encodeOctetString

▪ `Static` `Private` **encodeOctetString**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:61

___

### encodePrintableString

▪ `Static` `Private` **encodePrintableString**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:64

___

### encodeString

▪ `Static` `Private` **encodeString**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:63

## Methods

### decode

▸ **decode**(`data`): [`DerNode`](../modules/exports_codec.md#dernode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DerNode`](../modules/exports_codec.md#dernode)

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:70

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

packages/matter.js/dist/esm/codec/DerCodec.d.ts:57
