[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/codec](../README.md) / DerCodec

# Class: DerCodec

## Constructors

### new DerCodec()

> **new DerCodec**(): [`DerCodec`](DerCodec.md)

#### Returns

[`DerCodec`](DerCodec.md)

## Properties

### decodeAsn1

> `static` `private` **decodeAsn1**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:72

***

### decodeRec

> `static` `private` **decodeRec**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:71

***

### encodeArray

> `static` `private` **encodeArray**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:60

***

### encodeAsn1

> `static` `private` **encodeAsn1**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:69

***

### encodeBitString

> `static` `private` **encodeBitString**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:67

***

### encodeBoolean

> `static` `private` **encodeBoolean**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:59

***

### encodeDate

> `static` `private` **encodeDate**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:58

***

### encodeIA5String

> `static` `private` **encodeIA5String**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:65

***

### encodeInteger

> `static` `private` **encodeInteger**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:66

***

### encodeLengthBytes

> `static` `private` **encodeLengthBytes**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:68

***

### encodeObject

> `static` `private` **encodeObject**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:62

***

### encodeOctetString

> `static` `private` **encodeOctetString**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:61

***

### encodePrintableString

> `static` `private` **encodePrintableString**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:64

***

### encodeString

> `static` `private` **encodeString**: `any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:63

## Methods

### decode()

> `static` **decode**(`data`): [`DerNode`](../README.md#dernode)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DerNode`](../README.md#dernode)

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:70

***

### encode()

> `static` **encode**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:57
