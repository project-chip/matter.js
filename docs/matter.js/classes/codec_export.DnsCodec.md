[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / DnsCodec

# Class: DnsCodec

[codec/export](../modules/codec_export.md).DnsCodec

## Table of contents

### Constructors

- [constructor](codec_export.DnsCodec.md#constructor)

### Methods

- [decode](codec_export.DnsCodec.md#decode)
- [decodeARecord](codec_export.DnsCodec.md#decodearecord)
- [decodeAaaaRecord](codec_export.DnsCodec.md#decodeaaaarecord)
- [decodeQName](codec_export.DnsCodec.md#decodeqname)
- [decodeQuery](codec_export.DnsCodec.md#decodequery)
- [decodeRecord](codec_export.DnsCodec.md#decoderecord)
- [decodeRecordValue](codec_export.DnsCodec.md#decoderecordvalue)
- [decodeSrvRecord](codec_export.DnsCodec.md#decodesrvrecord)
- [decodeTxtRecord](codec_export.DnsCodec.md#decodetxtrecord)
- [encode](codec_export.DnsCodec.md#encode)
- [encodeARecord](codec_export.DnsCodec.md#encodearecord)
- [encodeAaaaRecord](codec_export.DnsCodec.md#encodeaaaarecord)
- [encodeQName](codec_export.DnsCodec.md#encodeqname)
- [encodeRecord](codec_export.DnsCodec.md#encoderecord)
- [encodeRecordValue](codec_export.DnsCodec.md#encoderecordvalue)
- [encodeSrvRecord](codec_export.DnsCodec.md#encodesrvrecord)
- [encodeTxtRecord](codec_export.DnsCodec.md#encodetxtrecord)

## Constructors

### constructor

• **new DnsCodec**()

## Methods

### decode

▸ `Static` **decode**(`message`): `undefined` \| [`DnsMessage`](../modules/codec_export.md#dnsmessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`undefined` \| [`DnsMessage`](../modules/codec_export.md#dnsmessage)

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:125

___

### decodeARecord

▸ `Static` `Private` **decodeARecord**(`valueBytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:261

___

### decodeAaaaRecord

▸ `Static` `Private` **decodeAaaaRecord**(`valueBytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:235

___

### decodeQName

▸ `Static` `Private` **decodeQName**(`reader`, `message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:178

___

### decodeQuery

▸ `Static` `Private` **decodeQuery**(`reader`, `message`): [`DnsQuery`](../modules/codec_export.md#dnsquery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

[`DnsQuery`](../modules/codec_export.md#dnsquery)

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:156

___

### decodeRecord

▸ `Static` `Private` **decodeRecord**(`reader`, `message`): [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

[`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\>

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:165

___

### decodeRecordValue

▸ `Static` `Private` **decodeRecordValue**(`valueBytes`, `recordType`, `message`): `string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `message` | `Uint8Array` |

#### Returns

`string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:196

___

### decodeSrvRecord

▸ `Static` `Private` **decodeSrvRecord**(`valueBytes`, `message`): [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `message` | `Uint8Array` |

#### Returns

[`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:214

___

### decodeTxtRecord

▸ `Static` `Private` **decodeTxtRecord**(`valueBytes`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`[]

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:223

___

### encode

▸ `Static` **encode**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`<[`DnsMessagePartiallyPreEncoded`](../modules/codec_export.md#dnsmessagepartiallypreencoded)\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:270

___

### encodeARecord

▸ `Static` `Private` **encodeARecord**(`ip`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:337

___

### encodeAaaaRecord

▸ `Static` `Private` **encodeAaaaRecord**(`ip`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:346

___

### encodeQName

▸ `Static` `Private` **encodeQName**(`qname`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `qname` | `string` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:381

___

### encodeRecord

▸ `Static` **encodeRecord**(`record`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)<`any`\> |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:305

___

### encodeRecordValue

▸ `Static` `Private` **encodeRecordValue**(`value`, `recordType`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:319

___

### encodeSrvRecord

▸ `Static` `Private` **encodeSrvRecord**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:372

___

### encodeTxtRecord

▸ `Static` `Private` **encodeTxtRecord**(`entries`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `string`[] |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/codec/DnsCodec.ts:362
