[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / BtpCodec

# Class: BtpCodec

[exports/codec](../modules/exports_codec.md).BtpCodec

## Table of contents

### Constructors

- [constructor](exports_codec.BtpCodec.md#constructor)

### Properties

- [decodeBtpPacketHeader](exports_codec.BtpCodec.md#decodebtppacketheader)
- [decodeBtpPacketPayload](exports_codec.BtpCodec.md#decodebtppacketpayload)
- [decodeHandshakeRequestPayload](exports_codec.BtpCodec.md#decodehandshakerequestpayload)
- [encodeBtpPacketHeader](exports_codec.BtpCodec.md#encodebtppacketheader)
- [encodeBtpPacketPayload](exports_codec.BtpCodec.md#encodebtppacketpayload)

### Methods

- [decodeBleAdvertisementData](exports_codec.BtpCodec.md#decodebleadvertisementdata)
- [decodeBleAdvertisementServiceData](exports_codec.BtpCodec.md#decodebleadvertisementservicedata)
- [decodeBtpHandshakeRequest](exports_codec.BtpCodec.md#decodebtphandshakerequest)
- [decodeBtpHandshakeResponsePayload](exports_codec.BtpCodec.md#decodebtphandshakeresponsepayload)
- [decodeBtpPacket](exports_codec.BtpCodec.md#decodebtppacket)
- [encodeBleAdvertisementData](exports_codec.BtpCodec.md#encodebleadvertisementdata)
- [encodeBtpHandshakeRequest](exports_codec.BtpCodec.md#encodebtphandshakerequest)
- [encodeBtpHandshakeResponse](exports_codec.BtpCodec.md#encodebtphandshakeresponse)
- [encodeBtpPacket](exports_codec.BtpCodec.md#encodebtppacket)

## Constructors

### constructor

• **new BtpCodec**()

## Properties

### decodeBtpPacketHeader

▪ `Static` `Private` **decodeBtpPacketHeader**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:64

___

### decodeBtpPacketPayload

▪ `Static` `Private` **decodeBtpPacketPayload**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:60

___

### decodeHandshakeRequestPayload

▪ `Static` `Private` **decodeHandshakeRequestPayload**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:62

___

### encodeBtpPacketHeader

▪ `Static` `Private` **encodeBtpPacketHeader**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:65

___

### encodeBtpPacketPayload

▪ `Static` `Private` **encodeBtpPacketPayload**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:61

## Methods

### decodeBleAdvertisementData

▸ `Static` **decodeBleAdvertisementData**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `hasAdditionalAdvertisementData` | `boolean` |
| `productId` | `number` |
| `vendorId` | `number` |

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:67

___

### decodeBleAdvertisementServiceData

▸ `Static` **decodeBleAdvertisementServiceData**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `hasAdditionalAdvertisementData` | `boolean` |
| `productId` | `number` |
| `vendorId` | `number` |

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:73

___

### decodeBtpHandshakeRequest

▸ `Static` **decodeBtpHandshakeRequest**(`data`): [`BtpHandshakeRequest`](../interfaces/exports_codec.BtpHandshakeRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`BtpHandshakeRequest`](../interfaces/exports_codec.BtpHandshakeRequest.md)

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:55

___

### decodeBtpHandshakeResponsePayload

▸ `Static` **decodeBtpHandshakeResponsePayload**(`data`): [`BtpHandshakeResponse`](../interfaces/exports_codec.BtpHandshakeResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`BtpHandshakeResponse`](../interfaces/exports_codec.BtpHandshakeResponse.md)

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:63

___

### decodeBtpPacket

▸ `Static` **decodeBtpPacket**(`data`): [`DecodedBtpPacket`](../interfaces/exports_codec.DecodedBtpPacket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DecodedBtpPacket`](../interfaces/exports_codec.DecodedBtpPacket.md)

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:56

___

### encodeBleAdvertisementData

▸ `Static` **encodeBleAdvertisementData**(`discriminator`, `vendorId`, `productId`, `hasAdditionalAdvertisementData?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `productId` | `number` |
| `hasAdditionalAdvertisementData?` | `boolean` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:66

___

### encodeBtpHandshakeRequest

▸ `Static` **encodeBtpHandshakeRequest**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpHandshakeRequest`](../interfaces/exports_codec.BtpHandshakeRequest.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:58

___

### encodeBtpHandshakeResponse

▸ `Static` **encodeBtpHandshakeResponse**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpHandshakeResponse`](../interfaces/exports_codec.BtpHandshakeResponse.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:59

___

### encodeBtpPacket

▸ `Static` **encodeBtpPacket**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpPacket`](../interfaces/exports_codec.BtpPacket.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/BtpCodec.d.ts:57
