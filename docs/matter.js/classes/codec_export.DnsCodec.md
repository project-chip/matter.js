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

• **new DnsCodec**(): [`DnsCodec`](codec_export.DnsCodec.md)

#### Returns

[`DnsCodec`](codec_export.DnsCodec.md)

## Methods

### decode

▸ **decode**(`message`): `undefined` \| [`DnsMessage`](../modules/codec_export.md#dnsmessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`undefined` \| [`DnsMessage`](../modules/codec_export.md#dnsmessage)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L125)

___

### decodeARecord

▸ **decodeARecord**(`valueBytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L261)

___

### decodeAaaaRecord

▸ **decodeAaaaRecord**(`valueBytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:235](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L235)

___

### decodeQName

▸ **decodeQName**(`reader`, `message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L178)

___

### decodeQuery

▸ **decodeQuery**(`reader`, `message`): [`DnsQuery`](../modules/codec_export.md#dnsquery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

[`DnsQuery`](../modules/codec_export.md#dnsquery)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L156)

___

### decodeRecord

▸ **decodeRecord**(`reader`, `message`): [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

[`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L165)

___

### decodeRecordValue

▸ **decodeRecordValue**(`valueBytes`, `recordType`, `message`): `string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `message` | `Uint8Array` |

#### Returns

`string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L196)

___

### decodeSrvRecord

▸ **decodeSrvRecord**(`valueBytes`, `message`): [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `message` | `Uint8Array` |

#### Returns

[`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:214](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L214)

___

### decodeTxtRecord

▸ **decodeTxtRecord**(`valueBytes`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L223)

___

### encode

▸ **encode**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`\<[`DnsMessagePartiallyPreEncoded`](../modules/codec_export.md#dnsmessagepartiallypreencoded)\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:270](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L270)

___

### encodeARecord

▸ **encodeARecord**(`ip`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:337](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L337)

___

### encodeAaaaRecord

▸ **encodeAaaaRecord**(`ip`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:346](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L346)

___

### encodeQName

▸ **encodeQName**(`qname`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `qname` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:381](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L381)

___

### encodeRecord

▸ **encodeRecord**(`record`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:305](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L305)

___

### encodeRecordValue

▸ **encodeRecordValue**(`value`, `recordType`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:319](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L319)

___

### encodeSrvRecord

▸ **encodeSrvRecord**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SrvRecordValue`](../modules/codec_export.md#srvrecordvalue) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:372](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L372)

___

### encodeTxtRecord

▸ **encodeTxtRecord**(`entries`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `string`[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:362](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L362)
