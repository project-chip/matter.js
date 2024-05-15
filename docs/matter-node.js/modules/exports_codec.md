[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/codec

# Module: exports/codec

## Table of contents

### Namespaces

- [Base64](exports_codec.Base64.md)

### Enumerations

- [BtpHeaderBits](../enums/exports_codec.BtpHeaderBits.md)
- [BtpOpcode](../enums/exports_codec.BtpOpcode.md)
- [DerType](../enums/exports_codec.DerType.md)
- [DnsMessageType](../enums/exports_codec.DnsMessageType.md)
- [DnsRecordClass](../enums/exports_codec.DnsRecordClass.md)
- [DnsRecordType](../enums/exports_codec.DnsRecordType.md)
- [SessionType](../enums/exports_codec.SessionType.md)

### Classes

- [BtpCodec](../classes/exports_codec.BtpCodec.md)
- [DerCodec](../classes/exports_codec.DerCodec.md)
- [DnsCodec](../classes/exports_codec.DnsCodec.md)
- [MessageCodec](../classes/exports_codec.MessageCodec.md)

### Interfaces

- [BtpHandshakeRequest](../interfaces/exports_codec.BtpHandshakeRequest.md)
- [BtpHandshakeResponse](../interfaces/exports_codec.BtpHandshakeResponse.md)
- [BtpHeader](../interfaces/exports_codec.BtpHeader.md)
- [BtpPacket](../interfaces/exports_codec.BtpPacket.md)
- [BtpPacketPayload](../interfaces/exports_codec.BtpPacketPayload.md)
- [DecodedBtpPacket](../interfaces/exports_codec.DecodedBtpPacket.md)
- [DecodedBtpPacketPayload](../interfaces/exports_codec.DecodedBtpPacketPayload.md)
- [DecodedMessage](../interfaces/exports_codec.DecodedMessage.md)
- [DecodedPacket](../interfaces/exports_codec.DecodedPacket.md)
- [DecodedPacketHeader](../interfaces/exports_codec.DecodedPacketHeader.md)
- [Message](../interfaces/exports_codec.Message.md)
- [Packet](../interfaces/exports_codec.Packet.md)
- [PacketHeader](../interfaces/exports_codec.PacketHeader.md)
- [PayloadHeader](../interfaces/exports_codec.PayloadHeader.md)

### Type Aliases

- [DerNode](exports_codec.md#dernode)
- [DnsMessage](exports_codec.md#dnsmessage)
- [DnsMessagePartiallyPreEncoded](exports_codec.md#dnsmessagepartiallypreencoded)
- [DnsQuery](exports_codec.md#dnsquery)
- [DnsRecord](exports_codec.md#dnsrecord)
- [SrvRecordValue](exports_codec.md#srvrecordvalue)

### Variables

- [BITS\_PADDING](exports_codec.md#bits_padding)
- [BYTES\_KEY](exports_codec.md#bytes_key)
- [ELEMENTS\_KEY](exports_codec.md#elements_key)
- [MAX\_MDNS\_MESSAGE\_SIZE](exports_codec.md#max_mdns_message_size)
- [MAX\_MESSAGE\_SIZE](exports_codec.md#max_message_size)
- [OBJECT\_ID\_KEY](exports_codec.md#object_id_key)
- [RAW\_DATA\_KEY](exports_codec.md#raw_data_key)
- [TAG\_ID\_KEY](exports_codec.md#tag_id_key)
- [TYPE\_OVERRIDE\_KEY](exports_codec.md#type_override_key)

### Functions

- [AAAARecord](exports_codec.md#aaaarecord)
- [ARecord](exports_codec.md#arecord)
- [BitByteArray](exports_codec.md#bitbytearray)
- [ContextTagged](exports_codec.md#contexttagged)
- [ContextTaggedBytes](exports_codec.md#contexttaggedbytes)
- [DatatypeOverride](exports_codec.md#datatypeoverride)
- [DerObject](exports_codec.md#derobject)
- [ObjectId](exports_codec.md#objectid)
- [PtrRecord](exports_codec.md#ptrrecord)
- [RawBytes](exports_codec.md#rawbytes)
- [SrvRecord](exports_codec.md#srvrecord)
- [TxtRecord](exports_codec.md#txtrecord)

## Type Aliases

### DerNode

Ƭ **DerNode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_bytes` | [`ByteArray`](util_export.md#bytearray) |
| `_elements?` | [`DerNode`](exports_codec.md#dernode)[] |
| `_padding?` | `number` |
| `_tag` | `number` |

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:50

___

### DnsMessage

Ƭ **DnsMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `additionalRecords` | [`DnsRecord`](exports_codec.md#dnsrecord)\<`any`\>[] |
| `answers` | [`DnsRecord`](exports_codec.md#dnsrecord)\<`any`\>[] |
| `authorities` | [`DnsRecord`](exports_codec.md#dnsrecord)\<`any`\>[] |
| `messageType` | [`DnsMessageType`](../enums/exports_codec.DnsMessageType.md) |
| `queries` | [`DnsQuery`](exports_codec.md#dnsquery)[] |
| `transactionId` | `number` |

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:37

___

### DnsMessagePartiallyPreEncoded

Ƭ **DnsMessagePartiallyPreEncoded**: `Omit`\<[`DnsMessage`](exports_codec.md#dnsmessage), ``"answers"`` \| ``"additionalRecords"``\> & \{ `additionalRecords`: ([`DnsRecord`](exports_codec.md#dnsrecord)\<`any`\> \| [`ByteArray`](util_export.md#bytearray))[] ; `answers`: ([`DnsRecord`](exports_codec.md#dnsrecord)\<`any`\> \| [`ByteArray`](util_export.md#bytearray))[]  }

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:45

___

### DnsQuery

Ƭ **DnsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `recordClass` | [`DnsRecordClass`](../enums/exports_codec.DnsRecordClass.md) |
| `recordType` | [`DnsRecordType`](../enums/exports_codec.DnsRecordType.md) |
| `uniCastResponse?` | `boolean` |

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:23

___

### DnsRecord

Ƭ **DnsRecord**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `flushCache?` | `boolean` |
| `name` | `string` |
| `recordClass` | [`DnsRecordClass`](../enums/exports_codec.DnsRecordClass.md) |
| `recordType` | [`DnsRecordType`](../enums/exports_codec.DnsRecordType.md) |
| `ttl` | `number` |
| `value` | `T` |

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:29

___

### SrvRecordValue

Ƭ **SrvRecordValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `priority` | `number` |
| `target` | `string` |
| `weight` | `number` |

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:17

## Variables

### BITS\_PADDING

• `Const` **BITS\_PADDING**: ``"_padding"``

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:6

___

### BYTES\_KEY

• `Const` **BYTES\_KEY**: ``"_bytes"``

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:4

___

### ELEMENTS\_KEY

• `Const` **ELEMENTS\_KEY**: ``"_elements"``

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:5

___

### MAX\_MDNS\_MESSAGE\_SIZE

• `Const` **MAX\_MDNS\_MESSAGE\_SIZE**: ``1232``

The maximum MDNS message size to usually fit into one UDP network MTU packet. Data are split into multiple messages
when needed.

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:11

___

### MAX\_MESSAGE\_SIZE

• `Const` **MAX\_MESSAGE\_SIZE**: ``1280``

**`See`**

MatterSpecification.v12.Core § 4.4.4

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:10

___

### OBJECT\_ID\_KEY

• `Const` **OBJECT\_ID\_KEY**: ``"_objectId"``

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:2

___

### RAW\_DATA\_KEY

• `Const` **RAW\_DATA\_KEY**: ``"_raw"``

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:8

___

### TAG\_ID\_KEY

• `Const` **TAG\_ID\_KEY**: ``"_tag"``

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:3

___

### TYPE\_OVERRIDE\_KEY

• `Const` **TYPE\_OVERRIDE\_KEY**: ``"_type"``

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:7

## Functions

### AAAARecord

▸ **AAAARecord**(`name`, `ip`, `ttl?`, `flushCache?`): [`DnsRecord`](exports_codec.md#dnsrecord)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |
| `ttl?` | `number` |
| `flushCache?` | `boolean` |

#### Returns

[`DnsRecord`](exports_codec.md#dnsrecord)\<`string`\>

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:14

___

### ARecord

▸ **ARecord**(`name`, `ip`, `ttl?`, `flushCache?`): [`DnsRecord`](exports_codec.md#dnsrecord)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |
| `ttl?` | `number` |
| `flushCache?` | `boolean` |

#### Returns

[`DnsRecord`](exports_codec.md#dnsrecord)\<`string`\>

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:13

___

### BitByteArray

▸ **BitByteArray**(`data`, `padding?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `padding?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_bytes` | `Uint8Array` |
| `_padding` | `number` |
| `_tag` | `number` |

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:30

___

### ContextTagged

▸ **ContextTagged**(`tagId`, `value?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |
| `value?` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_bytes` | `Uint8Array` |
| `_tag` | `number` |

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:35

___

### ContextTaggedBytes

▸ **ContextTaggedBytes**(`tagId`, `value`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagId` | `number` |
| `value` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_bytes` | `Uint8Array` |
| `_tag` | `number` |

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:39

___

### DatatypeOverride

▸ **DatatypeOverride**(`type`, `value`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`DerType`](../enums/exports_codec.DerType.md) |
| `value` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_raw` | `any` |
| `_type` | [`DerType`](../enums/exports_codec.DerType.md) |

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:43

___

### DerObject

▸ **DerObject**(`objectId`, `content?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |
| `content?` | `any` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:29

___

### ObjectId

▸ **ObjectId**(`objectId`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_bytes` | `Uint8Array` |
| `_tag` | `number` |

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:25

___

### PtrRecord

▸ **PtrRecord**(`name`, `ptr`, `ttl?`, `flushCache?`): [`DnsRecord`](exports_codec.md#dnsrecord)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ptr` | `string` |
| `ttl?` | `number` |
| `flushCache?` | `boolean` |

#### Returns

[`DnsRecord`](exports_codec.md#dnsrecord)\<`string`\>

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:12

___

### RawBytes

▸ **RawBytes**(`bytes`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_bytes` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/esm/codec/DerCodec.d.ts:47

___

### SrvRecord

▸ **SrvRecord**(`name`, `srv`, `ttl?`, `flushCache?`): [`DnsRecord`](exports_codec.md#dnsrecord)\<[`SrvRecordValue`](exports_codec.md#srvrecordvalue)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `srv` | [`SrvRecordValue`](exports_codec.md#srvrecordvalue) |
| `ttl?` | `number` |
| `flushCache?` | `boolean` |

#### Returns

[`DnsRecord`](exports_codec.md#dnsrecord)\<[`SrvRecordValue`](exports_codec.md#srvrecordvalue)\>

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:16

___

### TxtRecord

▸ **TxtRecord**(`name`, `entries`, `ttl?`, `flushCache?`): [`DnsRecord`](exports_codec.md#dnsrecord)\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `entries` | `string`[] |
| `ttl?` | `number` |
| `flushCache?` | `boolean` |

#### Returns

[`DnsRecord`](exports_codec.md#dnsrecord)\<`string`[]\>

#### Defined in

packages/matter.js/dist/esm/codec/DnsCodec.d.ts:15
