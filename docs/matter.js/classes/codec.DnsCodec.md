[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec](../modules/codec.md) / DnsCodec

# Class: DnsCodec

[codec](../modules/codec.md).DnsCodec

## Table of contents

### Constructors

- [constructor](codec.DnsCodec.md#constructor)

### Methods

- [decode](codec.DnsCodec.md#decode)
- [decodeARecord](codec.DnsCodec.md#decodearecord)
- [decodeAaaaRecord](codec.DnsCodec.md#decodeaaaarecord)
- [decodeQName](codec.DnsCodec.md#decodeqname)
- [decodeQuery](codec.DnsCodec.md#decodequery)
- [decodeRecord](codec.DnsCodec.md#decoderecord)
- [decodeRecordValue](codec.DnsCodec.md#decoderecordvalue)
- [decodeSrvRecord](codec.DnsCodec.md#decodesrvrecord)
- [decodeTxtRecord](codec.DnsCodec.md#decodetxtrecord)
- [encode](codec.DnsCodec.md#encode)
- [encodeARecord](codec.DnsCodec.md#encodearecord)
- [encodeAaaaRecord](codec.DnsCodec.md#encodeaaaarecord)
- [encodeQName](codec.DnsCodec.md#encodeqname)
- [encodeRecordValue](codec.DnsCodec.md#encoderecordvalue)
- [encodeSrvRecord](codec.DnsCodec.md#encodesrvrecord)
- [encodeTxtRecord](codec.DnsCodec.md#encodetxtrecord)

## Constructors

### constructor

• **new DnsCodec**()

## Methods

### decode

▸ `Static` **decode**(`message`): `undefined` \| [`DnsMessage`](../interfaces/codec.DnsMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`undefined` \| [`DnsMessage`](../interfaces/codec.DnsMessage.md)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L67)

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

[packages/matter.js/src/codec/DnsCodec.ts:196](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L196)

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

[packages/matter.js/src/codec/DnsCodec.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L171)

___

### decodeQName

▸ `Static` `Private` **decodeQName**(`reader`, `message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Big`](../enums/util.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:116](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L116)

___

### decodeQuery

▸ `Static` `Private` **decodeQuery**(`reader`, `message`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Big`](../enums/util.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `recordClass` | `number` |
| `recordType` | `number` |

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L98)

___

### decodeRecord

▸ `Static` `Private` **decodeRecord**(`reader`, `message`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Big`](../enums/util.Endian.md#big)\> |
| `message` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `recordClass` | `number` |
| `recordType` | `number` |
| `ttl` | `number` |
| `value` | `string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md) |

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:105](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L105)

___

### decodeRecordValue

▸ `Static` `Private` **decodeRecordValue**(`valueBytes`, `recordType`, `message`): `string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `recordType` | [`RecordType`](../enums/codec.RecordType.md) |
| `message` | `Uint8Array` |

#### Returns

`string` \| `string`[] \| `Uint8Array` \| [`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:132](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L132)

___

### decodeSrvRecord

▸ `Static` `Private` **decodeSrvRecord**(`valueBytes`, `message`): [`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueBytes` | `Uint8Array` |
| `message` | `Uint8Array` |

#### Returns

[`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md)

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:150](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L150)

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

[packages/matter.js/src/codec/DnsCodec.ts:159](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L159)

___

### encode

▸ `Static` **encode**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`<[`DnsMessage`](../interfaces/codec.DnsMessage.md)\> |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:205](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L205)

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

[packages/matter.js/src/codec/DnsCodec.ts:247](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L247)

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

[packages/matter.js/src/codec/DnsCodec.ts:256](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L256)

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

[packages/matter.js/src/codec/DnsCodec.ts:290](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L290)

___

### encodeRecordValue

▸ `Static` `Private` **encodeRecordValue**(`value`, `recordType`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `recordType` | [`RecordType`](../enums/codec.RecordType.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:230](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L230)

___

### encodeSrvRecord

▸ `Static` `Private` **encodeSrvRecord**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:281](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L281)

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

[packages/matter.js/src/codec/DnsCodec.ts:272](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L272)
