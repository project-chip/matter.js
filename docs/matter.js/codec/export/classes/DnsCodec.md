[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / DnsCodec

# Class: DnsCodec

## Constructors

### new DnsCodec()

> **new DnsCodec**(): [`DnsCodec`](DnsCodec.md)

#### Returns

[`DnsCodec`](DnsCodec.md)

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

[packages/matter.js/src/codec/DnsCodec.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L125)

***

### decodeARecord()

> `static` `private` **decodeARecord**(`valueBytes`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L261)

***

### decodeAaaaRecord()

> `static` `private` **decodeAaaaRecord**(`valueBytes`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L235)

***

### decodeQName()

> `static` `private` **decodeQName**(`reader`, `message`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Big`](../../../util/export/enumerations/Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`string`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L178)

***

### decodeQuery()

> `static` `private` **decodeQuery**(`reader`, `message`): [`DnsQuery`](../README.md#dnsquery)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Big`](../../../util/export/enumerations/Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

[`DnsQuery`](../README.md#dnsquery)

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L156)

***

### decodeRecord()

> `static` `private` **decodeRecord**(`reader`, `message`): [`DnsRecord`](../README.md#dnsrecordt)\<`any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Big`](../../../util/export/enumerations/Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

[`DnsRecord`](../README.md#dnsrecordt)\<`any`\>

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L165)

***

### decodeRecordValue()

> `static` `private` **decodeRecordValue**(`valueBytes`, `recordType`, `message`): `string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../README.md#srvrecordvalue)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `recordType` | [`DnsRecordType`](../enumerations/DnsRecordType.md) |
| `message` | `Uint8Array` |

#### Returns

`string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../README.md#srvrecordvalue)

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L196)

***

### decodeSrvRecord()

> `static` `private` **decodeSrvRecord**(`valueBytes`, `message`): [`SrvRecordValue`](../README.md#srvrecordvalue)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `message` | `Uint8Array` |

#### Returns

[`SrvRecordValue`](../README.md#srvrecordvalue)

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L214)

***

### decodeTxtRecord()

> `static` `private` **decodeTxtRecord**(`valueBytes`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`[]

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L223)

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

[packages/matter.js/src/codec/DnsCodec.ts:270](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L270)

***

### encodeARecord()

> `static` `private` **encodeARecord**(`ip`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:337](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L337)

***

### encodeAaaaRecord()

> `static` `private` **encodeAaaaRecord**(`ip`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:346](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L346)

***

### encodeQName()

> `static` `private` **encodeQName**(`qname`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `qname` | `string` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:381](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L381)

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

[packages/matter.js/src/codec/DnsCodec.ts:305](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L305)

***

### encodeRecordValue()

> `static` `private` **encodeRecordValue**(`value`, `recordType`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |
| `recordType` | [`DnsRecordType`](../enumerations/DnsRecordType.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:319](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L319)

***

### encodeSrvRecord()

> `static` `private` **encodeSrvRecord**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`SrvRecordValue`](../README.md#srvrecordvalue) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:372](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L372)

***

### encodeTxtRecord()

> `static` `private` **encodeTxtRecord**(`entries`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entries` | `string`[] |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:362](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L362)
