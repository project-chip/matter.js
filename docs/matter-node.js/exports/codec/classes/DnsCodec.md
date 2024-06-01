[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/codec](../README.md) / DnsCodec

# Class: DnsCodec

## Constructors

### new DnsCodec()

> **new DnsCodec**(): [`DnsCodec`](DnsCodec.md)

#### Returns

[`DnsCodec`](DnsCodec.md)

## Properties

### decodeARecord

> `static` `private` **decodeARecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:77

***

### decodeAaaaRecord

> `static` `private` **decodeAaaaRecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:76

***

### decodeQName

> `static` `private` **decodeQName**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:72

***

### decodeQuery

> `static` `private` **decodeQuery**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:70

***

### decodeRecord

> `static` `private` **decodeRecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:71

***

### decodeRecordValue

> `static` `private` **decodeRecordValue**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:73

***

### decodeSrvRecord

> `static` `private` **decodeSrvRecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:74

***

### decodeTxtRecord

> `static` `private` **decodeTxtRecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:75

***

### encodeARecord

> `static` `private` **encodeARecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:81

***

### encodeAaaaRecord

> `static` `private` **encodeAaaaRecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:82

***

### encodeQName

> `static` `private` **encodeQName**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:85

***

### encodeRecordValue

> `static` `private` **encodeRecordValue**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:80

***

### encodeSrvRecord

> `static` `private` **encodeSrvRecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:84

***

### encodeTxtRecord

> `static` `private` **encodeTxtRecord**: `any`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:83

## Methods

### decode()

> `static` **decode**(`message`): `undefined` \| [`DnsMessage`](../README.md#dnsmessage)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`undefined` \| [`DnsMessage`](../README.md#dnsmessage)

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:69

***

### encode()

> `static` **encode**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `Partial`\<[`DnsMessagePartiallyPreEncoded`](../README.md#dnsmessagepartiallypreencoded)\> |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:78

***

### encodeRecord()

> `static` **encodeRecord**(`record`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../README.md#dnsrecordt)\<`any`\> |

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:79
