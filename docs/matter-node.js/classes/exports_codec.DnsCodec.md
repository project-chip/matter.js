[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / DnsCodec

# Class: DnsCodec

[exports/codec](../modules/exports_codec.md).DnsCodec

## Table of contents

### Constructors

- [constructor](exports_codec.DnsCodec.md#constructor)

### Properties

- [decodeARecord](exports_codec.DnsCodec.md#decodearecord)
- [decodeAaaaRecord](exports_codec.DnsCodec.md#decodeaaaarecord)
- [decodeQName](exports_codec.DnsCodec.md#decodeqname)
- [decodeQuery](exports_codec.DnsCodec.md#decodequery)
- [decodeRecord](exports_codec.DnsCodec.md#decoderecord)
- [decodeRecordValue](exports_codec.DnsCodec.md#decoderecordvalue)
- [decodeSrvRecord](exports_codec.DnsCodec.md#decodesrvrecord)
- [decodeTxtRecord](exports_codec.DnsCodec.md#decodetxtrecord)
- [encodeARecord](exports_codec.DnsCodec.md#encodearecord)
- [encodeAaaaRecord](exports_codec.DnsCodec.md#encodeaaaarecord)
- [encodeQName](exports_codec.DnsCodec.md#encodeqname)
- [encodeRecordValue](exports_codec.DnsCodec.md#encoderecordvalue)
- [encodeSrvRecord](exports_codec.DnsCodec.md#encodesrvrecord)
- [encodeTxtRecord](exports_codec.DnsCodec.md#encodetxtrecord)

### Methods

- [decode](exports_codec.DnsCodec.md#decode)
- [encode](exports_codec.DnsCodec.md#encode)
- [encodeRecord](exports_codec.DnsCodec.md#encoderecord)

## Constructors

### constructor

• **new DnsCodec**()

## Properties

### decodeARecord

▪ `Static` `Private` **decodeARecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:66

___

### decodeAaaaRecord

▪ `Static` `Private` **decodeAaaaRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:65

___

### decodeQName

▪ `Static` `Private` **decodeQName**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:61

___

### decodeQuery

▪ `Static` `Private` **decodeQuery**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:59

___

### decodeRecord

▪ `Static` `Private` **decodeRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:60

___

### decodeRecordValue

▪ `Static` `Private` **decodeRecordValue**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:62

___

### decodeSrvRecord

▪ `Static` `Private` **decodeSrvRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:63

___

### decodeTxtRecord

▪ `Static` `Private` **decodeTxtRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:64

___

### encodeARecord

▪ `Static` `Private` **encodeARecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:70

___

### encodeAaaaRecord

▪ `Static` `Private` **encodeAaaaRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:71

___

### encodeQName

▪ `Static` `Private` **encodeQName**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:74

___

### encodeRecordValue

▪ `Static` `Private` **encodeRecordValue**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:69

___

### encodeSrvRecord

▪ `Static` `Private` **encodeSrvRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:73

___

### encodeTxtRecord

▪ `Static` `Private` **encodeTxtRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:72

## Methods

### decode

▸ `Static` **decode**(`message`): `undefined` \| [`DnsMessage`](../interfaces/exports_codec.DnsMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`undefined` \| [`DnsMessage`](../interfaces/exports_codec.DnsMessage.md)

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:58

___

### encode

▸ `Static` **encode**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`<[`DnsMessage`](../interfaces/exports_codec.DnsMessage.md)\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:67

___

### encodeRecord

▸ `Static` **encodeRecord**(`record`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../interfaces/exports_codec.DnsRecord.md)<`any`\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:68
