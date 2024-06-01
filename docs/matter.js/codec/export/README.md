[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / codec/export

# codec/export

## Index

### Namespaces

- [Base64](namespaces/Base64/README.md)

### Enumerations

- [BtpHeaderBits](enumerations/BtpHeaderBits.md)
- [BtpOpcode](enumerations/BtpOpcode.md)
- [DerType](enumerations/DerType.md)
- [DnsMessageType](enumerations/DnsMessageType.md)
- [DnsRecordClass](enumerations/DnsRecordClass.md)
- [DnsRecordType](enumerations/DnsRecordType.md)
- [SessionType](enumerations/SessionType.md)

### Classes

- [BtpCodec](classes/BtpCodec.md)
- [DerCodec](classes/DerCodec.md)
- [DnsCodec](classes/DnsCodec.md)
- [MessageCodec](classes/MessageCodec.md)

### Interfaces

- [BtpHandshakeRequest](interfaces/BtpHandshakeRequest.md)
- [BtpHandshakeResponse](interfaces/BtpHandshakeResponse.md)
- [BtpHeader](interfaces/BtpHeader.md)
- [BtpPacket](interfaces/BtpPacket.md)
- [BtpPacketPayload](interfaces/BtpPacketPayload.md)
- [DecodedBtpPacket](interfaces/DecodedBtpPacket.md)
- [DecodedBtpPacketPayload](interfaces/DecodedBtpPacketPayload.md)
- [DecodedMessage](interfaces/DecodedMessage.md)
- [DecodedPacket](interfaces/DecodedPacket.md)
- [DecodedPacketHeader](interfaces/DecodedPacketHeader.md)
- [Message](interfaces/Message.md)
- [Packet](interfaces/Packet.md)
- [PacketHeader](interfaces/PacketHeader.md)
- [PayloadHeader](interfaces/PayloadHeader.md)

## Type Aliases

### DerNode

> **DerNode**: `object`

#### Type declaration

##### \_bytes

> **\_bytes**: [`ByteArray`](../../util/export/README.md#bytearray)

##### \_elements?

> `optional` **\_elements**: [`DerNode`](README.md#dernode)[]

##### \_padding?

> `optional` **\_padding**: `number`

##### \_tag

> **\_tag**: `number`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L71)

***

### DnsMessage

> **DnsMessage**: `object`

#### Type declaration

##### additionalRecords

> **additionalRecords**: [`DnsRecord`](README.md#dnsrecordt)\<`any`\>[]

##### answers

> **answers**: [`DnsRecord`](README.md#dnsrecordt)\<`any`\>[]

##### authorities

> **authorities**: [`DnsRecord`](README.md#dnsrecordt)\<`any`\>[]

##### messageType

> **messageType**: [`DnsMessageType`](enumerations/DnsMessageType.md)

##### queries

> **queries**: [`DnsQuery`](README.md#dnsquery)[]

##### transactionId

> **transactionId**: `number`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L88)

***

### DnsMessagePartiallyPreEncoded

> **DnsMessagePartiallyPreEncoded**: `Omit`\<[`DnsMessage`](README.md#dnsmessage), `"answers"` \| `"additionalRecords"`\> & `object`

#### Type declaration

##### additionalRecords

> **additionalRecords**: ([`DnsRecord`](README.md#dnsrecordt)\<`any`\> \| [`ByteArray`](../../util/export/README.md#bytearray))[]

##### answers

> **answers**: ([`DnsRecord`](README.md#dnsrecordt)\<`any`\> \| [`ByteArray`](../../util/export/README.md#bytearray))[]

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L97)

***

### DnsQuery

> **DnsQuery**: `object`

#### Type declaration

##### name

> **name**: `string`

##### recordClass

> **recordClass**: [`DnsRecordClass`](enumerations/DnsRecordClass.md)

##### recordType

> **recordType**: [`DnsRecordType`](enumerations/DnsRecordType.md)

##### uniCastResponse?

> `optional` **uniCastResponse**: `boolean`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L72)

***

### DnsRecord\<T\>

> **DnsRecord**\<`T`\>: `object`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Type declaration

##### flushCache?

> `optional` **flushCache**: `boolean`

##### name

> **name**: `string`

##### recordClass

> **recordClass**: [`DnsRecordClass`](enumerations/DnsRecordClass.md)

##### recordType

> **recordType**: [`DnsRecordType`](enumerations/DnsRecordType.md)

##### ttl

> **ttl**: `number`

##### value

> **value**: `T`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L79)

***

### SrvRecordValue

> **SrvRecordValue**: `object`

#### Type declaration

##### port

> **port**: `number`

##### priority

> **priority**: `number`

##### target

> **target**: `string`

##### weight

> **weight**: `number`

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L65)

## Variables

### BITS\_PADDING

> `const` **BITS\_PADDING**: `"_padding"` = `"_padding"`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L16)

***

### BYTES\_KEY

> `const` **BYTES\_KEY**: `"_bytes"` = `"_bytes"`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L14)

***

### ELEMENTS\_KEY

> `const` **ELEMENTS\_KEY**: `"_elements"` = `"_elements"`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L15)

***

### MAX\_MDNS\_MESSAGE\_SIZE

> `const` **MAX\_MDNS\_MESSAGE\_SIZE**: `1232` = `1232`

The maximum MDNS message size to usually fit into one UDP network MTU packet. Data are split into multiple messages
when needed.

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L17)

***

### MAX\_MESSAGE\_SIZE

> `const` **MAX\_MESSAGE\_SIZE**: `1280` = `1280`

#### See

MatterSpecification.v12.Core § 4.4.4

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L16)

***

### OBJECT\_ID\_KEY

> `const` **OBJECT\_ID\_KEY**: `"_objectId"` = `"_objectId"`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L12)

***

### RAW\_DATA\_KEY

> `const` **RAW\_DATA\_KEY**: `"_raw"` = `"_raw"`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L18)

***

### TAG\_ID\_KEY

> `const` **TAG\_ID\_KEY**: `"_tag"` = `"_tag"`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L13)

***

### TYPE\_OVERRIDE\_KEY

> `const` **TYPE\_OVERRIDE\_KEY**: `"_type"` = `"_type"`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L17)

## Functions

### AAAARecord()

> **AAAARecord**(`name`, `ip`, `ttl`, `flushCache`): [`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `ip` | `string` | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L35)

***

### ARecord()

> **ARecord**(`name`, `ip`, `ttl`, `flushCache`): [`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `ip` | `string` | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L27)

***

### BitByteArray()

> **BitByteArray**(`data`, `padding`): `object`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | `undefined` |
| `padding` | `number` | `0` |

#### Returns

`object`

##### \_bytes

> **\_bytes**: `Uint8Array` = `data`

##### \_padding

> **\_padding**: `number` = `padding`

##### \_tag

> **\_tag**: `number`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L50)

***

### ContextTagged()

> **ContextTagged**(`tagId`, `value`?): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tagId` | `number` |
| `value`? | `any` |

#### Returns

`object`

##### \_bytes

> **\_bytes**: `Uint8Array`

##### \_tag

> **\_tag**: `number`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L55)

***

### ContextTaggedBytes()

> **ContextTaggedBytes**(`tagId`, `value`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tagId` | `number` |
| `value` | `Uint8Array` |

#### Returns

`object`

##### \_bytes

> **\_bytes**: `Uint8Array` = `value`

##### \_tag

> **\_tag**: `number`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L59)

***

### DatatypeOverride()

> **DatatypeOverride**(`type`, `value`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`DerType`](enumerations/DerType.md) |
| `value` | `any` |

#### Returns

`object`

##### \_raw

> **\_raw**: `any` = `value`

##### \_type

> **\_type**: [`DerType`](enumerations/DerType.md) = `type`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L63)

***

### DerObject()

> **DerObject**(`objectId`, `content`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `objectId` | `string` |
| `content` | `any` |

#### Returns

`any`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L49)

***

### ObjectId()

> **ObjectId**(`objectId`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

`object`

##### \_bytes

> **\_bytes**: `Uint8Array`

##### \_tag

> **\_tag**: `number`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L45)

***

### PtrRecord()

> **PtrRecord**(`name`, `ptr`, `ttl`, `flushCache`): [`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `ptr` | `string` | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L19)

***

### RawBytes()

> **RawBytes**(`bytes`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`object`

##### \_bytes

> **\_bytes**: `Uint8Array` = `bytes`

#### Source

[packages/matter.js/src/codec/DerCodec.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DerCodec.ts#L67)

***

### SrvRecord()

> **SrvRecord**(`name`, `srv`, `ttl`, `flushCache`): [`DnsRecord`](README.md#dnsrecordt)\<[`SrvRecordValue`](README.md#srvrecordvalue)\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `srv` | [`SrvRecordValue`](README.md#srvrecordvalue) | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<[`SrvRecordValue`](README.md#srvrecordvalue)\>

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L51)

***

### TxtRecord()

> **TxtRecord**(`name`, `entries`, `ttl`, `flushCache`): [`DnsRecord`](README.md#dnsrecordt)\<`string`[]\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `entries` | `string`[] | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`[]\>

#### Source

[packages/matter.js/src/codec/DnsCodec.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/DnsCodec.ts#L43)
