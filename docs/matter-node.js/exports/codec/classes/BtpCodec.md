[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/codec](../README.md) / BtpCodec

# Class: BtpCodec

## Constructors

### new BtpCodec()

> **new BtpCodec**(): [`BtpCodec`](BtpCodec.md)

#### Returns

[`BtpCodec`](BtpCodec.md)

## Properties

### decodeBtpPacketHeader

> `static` `private` **decodeBtpPacketHeader**: `any`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:64

***

### decodeBtpPacketPayload

> `static` `private` **decodeBtpPacketPayload**: `any`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:60

***

### decodeHandshakeRequestPayload

> `static` `private` **decodeHandshakeRequestPayload**: `any`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:62

***

### encodeBtpPacketHeader

> `static` `private` **encodeBtpPacketHeader**: `any`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:65

***

### encodeBtpPacketPayload

> `static` `private` **encodeBtpPacketPayload**: `any`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:61

## Methods

### decodeBleAdvertisementData()

> `static` **decodeBleAdvertisementData**(`data`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`object`

##### discriminator

> **discriminator**: `number`

##### hasAdditionalAdvertisementData

> **hasAdditionalAdvertisementData**: `boolean`

##### productId

> **productId**: `number`

##### vendorId

> **vendorId**: `number`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:67

***

### decodeBleAdvertisementServiceData()

> `static` **decodeBleAdvertisementServiceData**(`data`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`object`

##### discriminator

> **discriminator**: `number`

##### hasAdditionalAdvertisementData

> **hasAdditionalAdvertisementData**: `boolean`

##### productId

> **productId**: `number`

##### vendorId

> **vendorId**: `number`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:73

***

### decodeBtpHandshakeRequest()

> `static` **decodeBtpHandshakeRequest**(`data`): [`BtpHandshakeRequest`](../interfaces/BtpHandshakeRequest.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`BtpHandshakeRequest`](../interfaces/BtpHandshakeRequest.md)

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:55

***

### decodeBtpHandshakeResponsePayload()

> `static` **decodeBtpHandshakeResponsePayload**(`data`): [`BtpHandshakeResponse`](../interfaces/BtpHandshakeResponse.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`BtpHandshakeResponse`](../interfaces/BtpHandshakeResponse.md)

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:63

***

### decodeBtpPacket()

> `static` **decodeBtpPacket**(`data`): [`DecodedBtpPacket`](../interfaces/DecodedBtpPacket.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DecodedBtpPacket`](../interfaces/DecodedBtpPacket.md)

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:56

***

### encodeBleAdvertisementData()

> `static` **encodeBleAdvertisementData**(`discriminator`, `vendorId`, `productId`, `hasAdditionalAdvertisementData`?): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `vendorId` | [`VendorId`](../../datatype/README.md#vendorid) |
| `productId` | `number` |
| `hasAdditionalAdvertisementData`? | `boolean` |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:66

***

### encodeBtpHandshakeRequest()

> `static` **encodeBtpHandshakeRequest**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`BtpHandshakeRequest`](../interfaces/BtpHandshakeRequest.md) |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:58

***

### encodeBtpHandshakeResponse()

> `static` **encodeBtpHandshakeResponse**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`BtpHandshakeResponse`](../interfaces/BtpHandshakeResponse.md) |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:59

***

### encodeBtpPacket()

> `static` **encodeBtpPacket**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`BtpPacket`](../interfaces/BtpPacket.md) |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/BtpCodec.d.ts:57
