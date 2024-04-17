[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / BtpCodec

# Class: BtpCodec

[codec/export](../modules/codec_export.md).BtpCodec

## Table of contents

### Constructors

- [constructor](codec_export.BtpCodec.md#constructor)

### Methods

- [decodeBleAdvertisementData](codec_export.BtpCodec.md#decodebleadvertisementdata)
- [decodeBleAdvertisementServiceData](codec_export.BtpCodec.md#decodebleadvertisementservicedata)
- [decodeBtpHandshakeRequest](codec_export.BtpCodec.md#decodebtphandshakerequest)
- [decodeBtpHandshakeResponsePayload](codec_export.BtpCodec.md#decodebtphandshakeresponsepayload)
- [decodeBtpPacket](codec_export.BtpCodec.md#decodebtppacket)
- [decodeBtpPacketHeader](codec_export.BtpCodec.md#decodebtppacketheader)
- [decodeBtpPacketPayload](codec_export.BtpCodec.md#decodebtppacketpayload)
- [decodeHandshakeRequestPayload](codec_export.BtpCodec.md#decodehandshakerequestpayload)
- [encodeBleAdvertisementData](codec_export.BtpCodec.md#encodebleadvertisementdata)
- [encodeBtpHandshakeRequest](codec_export.BtpCodec.md#encodebtphandshakerequest)
- [encodeBtpHandshakeResponse](codec_export.BtpCodec.md#encodebtphandshakeresponse)
- [encodeBtpPacket](codec_export.BtpCodec.md#encodebtppacket)
- [encodeBtpPacketHeader](codec_export.BtpCodec.md#encodebtppacketheader)
- [encodeBtpPacketPayload](codec_export.BtpCodec.md#encodebtppacketpayload)

## Constructors

### constructor

• **new BtpCodec**(): [`BtpCodec`](codec_export.BtpCodec.md)

#### Returns

[`BtpCodec`](codec_export.BtpCodec.md)

## Methods

### decodeBleAdvertisementData

▸ **decodeBleAdvertisementData**(`data`): `Object`

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

[packages/matter.js/src/codec/BtpCodec.ts:305](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L305)

___

### decodeBleAdvertisementServiceData

▸ **decodeBleAdvertisementServiceData**(`data`): `Object`

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

[packages/matter.js/src/codec/BtpCodec.ts:325](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L325)

___

### decodeBtpHandshakeRequest

▸ **decodeBtpHandshakeRequest**(`data`): [`BtpHandshakeRequest`](../interfaces/codec_export.BtpHandshakeRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`BtpHandshakeRequest`](../interfaces/codec_export.BtpHandshakeRequest.md)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L72)

___

### decodeBtpHandshakeResponsePayload

▸ **decodeBtpHandshakeResponsePayload**(`data`): [`BtpHandshakeResponse`](../interfaces/codec_export.BtpHandshakeResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`BtpHandshakeResponse`](../interfaces/codec_export.BtpHandshakeResponse.md)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L217)

___

### decodeBtpPacket

▸ **decodeBtpPacket**(`data`): [`DecodedBtpPacket`](../interfaces/codec_export.DecodedBtpPacket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DecodedBtpPacket`](../interfaces/codec_export.DecodedBtpPacket.md)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L77)

___

### decodeBtpPacketHeader

▸ **decodeBtpPacketHeader**(`reader`): [`BtpHeader`](../interfaces/codec_export.BtpHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

[`BtpHeader`](../interfaces/codec_export.BtpHeader.md)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:235](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L235)

___

### decodeBtpPacketPayload

▸ **decodeBtpPacketPayload**(`reader`, `header`): [`DecodedBtpPacketPayload`](../interfaces/codec_export.DecodedBtpPacketPayload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |
| `header` | [`BtpHeader`](../interfaces/codec_export.BtpHeader.md) |

#### Returns

[`DecodedBtpPacketPayload`](../interfaces/codec_export.DecodedBtpPacketPayload.md)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L115)

___

### decodeHandshakeRequestPayload

▸ **decodeHandshakeRequestPayload**(`reader`): [`BtpHandshakeRequest`](../interfaces/codec_export.BtpHandshakeRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

[`BtpHandshakeRequest`](../interfaces/codec_export.BtpHandshakeRequest.md)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L178)

___

### encodeBleAdvertisementData

▸ **encodeBleAdvertisementData**(`discriminator`, `vendorId`, `productId`, `hasAdditionalAdvertisementData?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `discriminator` | `number` | `undefined` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) | `undefined` |
| `productId` | `number` | `undefined` |
| `hasAdditionalAdvertisementData` | `boolean` | `false` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:284](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L284)

___

### encodeBtpHandshakeRequest

▸ **encodeBtpHandshakeRequest**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpHandshakeRequest`](../interfaces/codec_export.BtpHandshakeRequest.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L92)

___

### encodeBtpHandshakeResponse

▸ **encodeBtpHandshakeResponse**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpHandshakeResponse`](../interfaces/codec_export.BtpHandshakeResponse.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L105)

___

### encodeBtpPacket

▸ **encodeBtpPacket**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpPacket`](../interfaces/codec_export.BtpPacket.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L88)

___

### encodeBtpPacketHeader

▸ **encodeBtpPacketHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpHeader`](../interfaces/codec_export.BtpHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:258](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L258)

___

### encodeBtpPacketPayload

▸ **encodeBtpPacketPayload**(`«destructured»`, `«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BtpHeader`](../interfaces/codec_export.BtpHeader.md) |
| `«destructured»` | [`BtpPacketPayload`](../interfaces/codec_export.BtpPacketPayload.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/BtpCodec.ts#L128)
