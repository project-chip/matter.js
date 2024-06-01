[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / DerCodec

# Class: DerCodec

## Constructors

### new DerCodec()

> **new DerCodec**(): [`DerCodec`](DerCodec.md)

#### Returns

[`DerCodec`](DerCodec.md)

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

[packages/matter.js/src/codec/DerCodec.ts:259](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L259)

***

### decodeAsn1()

> `static` `private` **decodeAsn1**(`reader`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Big`](../../../util/export/enumerations/Endian.md#big)\> |

#### Returns

`object`

##### bytes

> **bytes**: `Uint8Array`

##### tag

> **tag**: `number`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:276](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L276)

***

### decodeRec()

> `static` `private` **decodeRec**(`reader`): [`DerNode`](../README.md#dernode)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Big`](../../../util/export/enumerations/Endian.md#big)\> |

#### Returns

[`DerNode`](../README.md#dernode)

#### Source

[packages/matter.js/src/codec/DerCodec.ts:263](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L263)

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

[packages/matter.js/src/codec/DerCodec.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L79)

***

### encodeArray()

> `static` `private` **encodeArray**(`array`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L172)

***

### encodeAsn1()

> `static` `private` **encodeAsn1**(`tag`, `data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tag` | `number` |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L255)

***

### encodeBitString()

> `static` `private` **encodeBitString**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L230)

***

### encodeBoolean()

> `static` `private` **encodeBoolean**(`bool`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L168)

***

### encodeDate()

> `static` `private` **encodeDate**(`date`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L144)

***

### encodeIA5String()

> `static` `private` **encodeIA5String**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L202)

***

### encodeInteger()

> `static` `private` **encodeInteger**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L210)

***

### encodeLengthBytes()

> `static` `private` **encodeLengthBytes**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L237)

***

### encodeObject()

> `static` `private` **encodeObject**(`object`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L183)

***

### encodeOctetString()

> `static` `private` **encodeOctetString**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L179)

***

### encodePrintableString()

> `static` `private` **encodePrintableString**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L195)

***

### encodeString()

> `static` `private` **encodeString**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:191](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L191)
