[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / BtpCodec

# Class: BtpCodec

## Constructors

### new BtpCodec()

> **new BtpCodec**(): [`BtpCodec`](BtpCodec.md)

#### Returns

[`BtpCodec`](BtpCodec.md)

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

[packages/matter.js/src/codec/BtpCodec.ts:305](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L305)

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

[packages/matter.js/src/codec/BtpCodec.ts:325](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L325)

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

[packages/matter.js/src/codec/BtpCodec.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L72)

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

[packages/matter.js/src/codec/BtpCodec.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L217)

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

[packages/matter.js/src/codec/BtpCodec.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L77)

***

### decodeBtpPacketHeader()

> `static` `private` **decodeBtpPacketHeader**(`reader`): [`BtpHeader`](../interfaces/BtpHeader.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |

#### Returns

[`BtpHeader`](../interfaces/BtpHeader.md)

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L235)

***

### decodeBtpPacketPayload()

> `static` `private` **decodeBtpPacketPayload**(`reader`, `header`): [`DecodedBtpPacketPayload`](../interfaces/DecodedBtpPacketPayload.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |
| `header` | [`BtpHeader`](../interfaces/BtpHeader.md) |

#### Returns

[`DecodedBtpPacketPayload`](../interfaces/DecodedBtpPacketPayload.md)

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L115)

***

### decodeHandshakeRequestPayload()

> `static` `private` **decodeHandshakeRequestPayload**(`reader`): [`BtpHandshakeRequest`](../interfaces/BtpHandshakeRequest.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |

#### Returns

[`BtpHandshakeRequest`](../interfaces/BtpHandshakeRequest.md)

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L178)

***

### encodeBleAdvertisementData()

> `static` **encodeBleAdvertisementData**(`discriminator`, `vendorId`, `productId`, `hasAdditionalAdvertisementData`): `Uint8Array`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `discriminator` | `number` | `undefined` |
| `vendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) | `undefined` |
| `productId` | `number` | `undefined` |
| `hasAdditionalAdvertisementData` | `boolean` | `false` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L284)

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

[packages/matter.js/src/codec/BtpCodec.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L92)

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

[packages/matter.js/src/codec/BtpCodec.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L105)

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

[packages/matter.js/src/codec/BtpCodec.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L88)

***

### encodeBtpPacketHeader()

> `static` `private` **encodeBtpPacketHeader**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`BtpHeader`](../interfaces/BtpHeader.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:258](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L258)

***

### encodeBtpPacketPayload()

> `static` `private` **encodeBtpPacketPayload**(`__namedParameters`, `__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`BtpHeader`](../interfaces/BtpHeader.md) |
| `__namedParameters` | [`BtpPacketPayload`](../interfaces/BtpPacketPayload.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L128)
