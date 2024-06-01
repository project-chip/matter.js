[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/codec

# exports/codec

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

packages/matter.js/dist/esm/codec/DerCodec.d.ts:50

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

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:37

***

### DnsMessagePartiallyPreEncoded

> **DnsMessagePartiallyPreEncoded**: `Omit`\<[`DnsMessage`](README.md#dnsmessage), `"answers"` \| `"additionalRecords"`\> & `object`

#### Type declaration

##### additionalRecords

> **additionalRecords**: ([`DnsRecord`](README.md#dnsrecordt)\<`any`\> \| [`ByteArray`](../../util/export/README.md#bytearray))[]

##### answers

> **answers**: ([`DnsRecord`](README.md#dnsrecordt)\<`any`\> \| [`ByteArray`](../../util/export/README.md#bytearray))[]

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:45

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

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:23

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

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:29

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

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:17

## Variables

### BITS\_PADDING

> `const` **BITS\_PADDING**: `"_padding"` = `"_padding"`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:6

***

### BYTES\_KEY

> `const` **BYTES\_KEY**: `"_bytes"` = `"_bytes"`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:4

***

### ELEMENTS\_KEY

> `const` **ELEMENTS\_KEY**: `"_elements"` = `"_elements"`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:5

***

### MAX\_MDNS\_MESSAGE\_SIZE

> `const` **MAX\_MDNS\_MESSAGE\_SIZE**: `1232` = `1232`

The maximum MDNS message size to usually fit into one UDP network MTU packet. Data are split into multiple messages
when needed.

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:11

***

### MAX\_MESSAGE\_SIZE

> `const` **MAX\_MESSAGE\_SIZE**: `1280` = `1280`

#### See

MatterSpecification.v12.Core § 4.4.4

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:10

***

### OBJECT\_ID\_KEY

> `const` **OBJECT\_ID\_KEY**: `"_objectId"` = `"_objectId"`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:2

***

### RAW\_DATA\_KEY

> `const` **RAW\_DATA\_KEY**: `"_raw"` = `"_raw"`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:8

***

### TAG\_ID\_KEY

> `const` **TAG\_ID\_KEY**: `"_tag"` = `"_tag"`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:3

***

### TYPE\_OVERRIDE\_KEY

> `const` **TYPE\_OVERRIDE\_KEY**: `"_type"` = `"_type"`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:7

## Functions

### AAAARecord()

> **AAAARecord**(`name`, `ip`, `ttl`?, `flushCache`?): [`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |
| `ttl`? | `number` |
| `flushCache`? | `boolean` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:14

***

### ARecord()

> **ARecord**(`name`, `ip`, `ttl`?, `flushCache`?): [`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |
| `ttl`? | `number` |
| `flushCache`? | `boolean` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:13

***

### BitByteArray()

> **BitByteArray**(`data`, `padding`?): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `padding`? | `number` |

#### Returns

`object`

##### \_bytes

> **\_bytes**: `Uint8Array`

##### \_padding

> **\_padding**: `number`

##### \_tag

> **\_tag**: `number`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:30

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

packages/matter.js/dist/esm/codec/DerCodec.d.ts:35

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

> **\_bytes**: `Uint8Array`

##### \_tag

> **\_tag**: `number`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:39

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

> **\_raw**: `any`

##### \_type

> **\_type**: [`DerType`](enumerations/DerType.md)

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:43

***

### DerObject()

> **DerObject**(`objectId`, `content`?): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `objectId` | `string` |
| `content`? | `any` |

#### Returns

`any`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:29

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

packages/matter.js/dist/esm/codec/DerCodec.d.ts:25

***

### PtrRecord()

> **PtrRecord**(`name`, `ptr`, `ttl`?, `flushCache`?): [`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `ptr` | `string` |
| `ttl`? | `number` |
| `flushCache`? | `boolean` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`\>

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:12

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

> **\_bytes**: `Uint8Array`

#### Source

packages/matter.js/dist/esm/codec/DerCodec.d.ts:47

***

### SrvRecord()

> **SrvRecord**(`name`, `srv`, `ttl`?, `flushCache`?): [`DnsRecord`](README.md#dnsrecordt)\<[`SrvRecordValue`](README.md#srvrecordvalue)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `srv` | [`SrvRecordValue`](README.md#srvrecordvalue) |
| `ttl`? | `number` |
| `flushCache`? | `boolean` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<[`SrvRecordValue`](README.md#srvrecordvalue)\>

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:16

***

### TxtRecord()

> **TxtRecord**(`name`, `entries`, `ttl`?, `flushCache`?): [`DnsRecord`](README.md#dnsrecordt)\<`string`[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `entries` | `string`[] |
| `ttl`? | `number` |
| `flushCache`? | `boolean` |

#### Returns

[`DnsRecord`](README.md#dnsrecordt)\<`string`[]\>

#### Source

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:15
