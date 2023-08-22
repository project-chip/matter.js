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

▸ `Static` **decode**(`message`): `undefined` \| [`DnsMessage`](../interfaces/codec_export.DnsMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`undefined` \| [`DnsMessage`](../interfaces/codec_export.DnsMessage.md)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:102](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L102)

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

[packages/matter.js/src/codec/DnsCodec.ts:232](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L232)

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

[packages/matter.js/src/codec/DnsCodec.ts:206](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L206)

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

[packages/matter.js/src/codec/DnsCodec.ts:151](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L151)

___

### decodeQuery

▸ `Static` `Private` **decodeQuery**(`reader`, `message`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `recordClass` | `number` |
| `recordType` | `number` |

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L133)

___

### decodeRecord

▸ `Static` `Private` **decodeRecord**(`reader`, `message`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Big`](../enums/util_export.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `recordClass` | `number` |
| `recordType` | `number` |
| `ttl` | `number` |
| `value` | `string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md) |

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:140](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L140)

___

### decodeRecordValue

▸ `Static` `Private` **decodeRecordValue**(`valueBytes`, `recordType`, `message`): `string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `message` | `Uint8Array` |

#### Returns

`string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:167](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L167)

___

### decodeSrvRecord

▸ `Static` `Private` **decodeSrvRecord**(`valueBytes`, `message`): [`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `message` | `Uint8Array` |

#### Returns

[`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:185](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L185)

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

[packages/matter.js/src/codec/DnsCodec.ts:194](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L194)

___

### encode

▸ `Static` **encode**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`<[`DnsMessage`](../interfaces/codec_export.DnsMessage.md)\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:241](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L241)

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

[packages/matter.js/src/codec/DnsCodec.ts:304](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L304)

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

[packages/matter.js/src/codec/DnsCodec.ts:313](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L313)

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

[packages/matter.js/src/codec/DnsCodec.ts:348](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L348)

___

### encodeRecord

▸ `Static` **encodeRecord**(`record`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:272](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L272)

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

[packages/matter.js/src/codec/DnsCodec.ts:286](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L286)

___

### encodeSrvRecord

▸ `Static` `Private` **encodeSrvRecord**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:339](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L339)

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

[packages/matter.js/src/codec/DnsCodec.ts:329](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L329)
