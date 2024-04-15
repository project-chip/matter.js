[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / codec/export

# Module: codec/export

## Table of contents

### Namespaces

- [Base64](codec_export.Base64.md)

### Enumerations

- [BtpHeaderBits](../enums/codec_export.BtpHeaderBits.md)
- [BtpOpcode](../enums/codec_export.BtpOpcode.md)
- [DerType](../enums/codec_export.DerType.md)
- [DnsMessageType](../enums/codec_export.DnsMessageType.md)
- [DnsRecordClass](../enums/codec_export.DnsRecordClass.md)
- [DnsRecordType](../enums/codec_export.DnsRecordType.md)
- [SessionType](../enums/codec_export.SessionType.md)

### Classes

- [BtpCodec](../classes/codec_export.BtpCodec.md)
- [DerCodec](../classes/codec_export.DerCodec.md)
- [DnsCodec](../classes/codec_export.DnsCodec.md)
- [MessageCodec](../classes/codec_export.MessageCodec.md)

### Interfaces

- [BtpHandshakeRequest](../interfaces/codec_export.BtpHandshakeRequest.md)
- [BtpHandshakeResponse](../interfaces/codec_export.BtpHandshakeResponse.md)
- [BtpHeader](../interfaces/codec_export.BtpHeader.md)
- [BtpPacket](../interfaces/codec_export.BtpPacket.md)
- [BtpPacketPayload](../interfaces/codec_export.BtpPacketPayload.md)
- [DecodedBtpPacket](../interfaces/codec_export.DecodedBtpPacket.md)
- [DecodedBtpPacketPayload](../interfaces/codec_export.DecodedBtpPacketPayload.md)
- [DecodedMessage](../interfaces/codec_export.DecodedMessage.md)
- [DecodedPacket](../interfaces/codec_export.DecodedPacket.md)
- [DecodedPacketHeader](../interfaces/codec_export.DecodedPacketHeader.md)
- [Message](../interfaces/codec_export.Message.md)
- [Packet](../interfaces/codec_export.Packet.md)
- [PacketHeader](../interfaces/codec_export.PacketHeader.md)
- [PayloadHeader](../interfaces/codec_export.PayloadHeader.md)

### Type Aliases

- [DerNode](codec_export.md#dernode)
- [DnsMessage](codec_export.md#dnsmessage)
- [DnsMessagePartiallyPreEncoded](codec_export.md#dnsmessagepartiallypreencoded)
- [DnsQuery](codec_export.md#dnsquery)
- [DnsRecord](codec_export.md#dnsrecord)
- [SrvRecordValue](codec_export.md#srvrecordvalue)

### Variables

- [BITS\_PADDING](codec_export.md#bits_padding)
- [BYTES\_KEY](codec_export.md#bytes_key)
- [ELEMENTS\_KEY](codec_export.md#elements_key)
- [EcdsaWithSHA256\_X962](codec_export.md#ecdsawithsha256_x962)
- [KeyUsage\_Signature\_ContentCommited\_X509](codec_export.md#keyusage_signature_contentcommited_x509)
- [KeyUsage\_Signature\_X509](codec_export.md#keyusage_signature_x509)
- [MAX\_MDNS\_MESSAGE\_SIZE](codec_export.md#max_mdns_message_size)
- [MAX\_MESSAGE\_SIZE](codec_export.md#max_message_size)
- [OBJECT\_ID\_KEY](codec_export.md#object_id_key)
- [SHA256\_CMS](codec_export.md#sha256_cms)
- [TAG\_ID\_KEY](codec_export.md#tag_id_key)

### Functions

- [AAAARecord](codec_export.md#aaaarecord)
- [ARecord](codec_export.md#arecord)
- [AuthorityKeyIdentifier\_X509](codec_export.md#authoritykeyidentifier_x509)
- [BasicConstraints\_X509](codec_export.md#basicconstraints_x509)
- [BitByteArray](codec_export.md#bitbytearray)
- [ContextTagged](codec_export.md#contexttagged)
- [ContextTaggedBytes](codec_export.md#contexttaggedbytes)
- [DerObject](codec_export.md#derobject)
- [ExtendedKeyUsage\_X509](codec_export.md#extendedkeyusage_x509)
- [ObjectId](codec_export.md#objectid)
- [OrganisationName\_X520](codec_export.md#organisationname_x520)
- [Pkcs7Data](codec_export.md#pkcs7data)
- [Pkcs7SignedData](codec_export.md#pkcs7signeddata)
- [PtrRecord](codec_export.md#ptrrecord)
- [PublicKeyEcPrime256v1\_X962](codec_export.md#publickeyecprime256v1_x962)
- [SrvRecord](codec_export.md#srvrecord)
- [SubjectKeyIdentifier\_X509](codec_export.md#subjectkeyidentifier_x509)
- [TxtRecord](codec_export.md#txtrecord)

## Type Aliases

### DerNode

Ƭ **DerNode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_bytes` | [`ByteArray`](util_export.md#bytearray) |
| `_elements?` | [`DerNode`](codec_export.md#dernode)[] |
| `_padding?` | `number` |
| `_tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L56)

___

### DnsMessage

Ƭ **DnsMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `additionalRecords` | [`DnsRecord`](codec_export.md#dnsrecord)\<`any`\>[] |
| `answers` | [`DnsRecord`](codec_export.md#dnsrecord)\<`any`\>[] |
| `authorities` | [`DnsRecord`](codec_export.md#dnsrecord)\<`any`\>[] |
| `messageType` | [`DnsMessageType`](../enums/codec_export.DnsMessageType.md) |
| `queries` | [`DnsQuery`](codec_export.md#dnsquery)[] |
| `transactionId` | `number` |

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L88)

___

### DnsMessagePartiallyPreEncoded

Ƭ **DnsMessagePartiallyPreEncoded**: `Omit`\<[`DnsMessage`](codec_export.md#dnsmessage), ``"answers"`` \| ``"additionalRecords"``\> & \{ `additionalRecords`: ([`DnsRecord`](codec_export.md#dnsrecord)\<`any`\> \| [`ByteArray`](util_export.md#bytearray))[] ; `answers`: ([`DnsRecord`](codec_export.md#dnsrecord)\<`any`\> \| [`ByteArray`](util_export.md#bytearray))[]  }

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L97)

___

### DnsQuery

Ƭ **DnsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `recordClass` | [`DnsRecordClass`](../enums/codec_export.DnsRecordClass.md) |
| `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `uniCastResponse?` | `boolean` |

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L72)

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
| `recordClass` | [`DnsRecordClass`](../enums/codec_export.DnsRecordClass.md) |
| `recordType` | [`DnsRecordType`](../enums/codec_export.DnsRecordType.md) |
| `ttl` | `number` |
| `value` | `T` |

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L79)

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

[packages/matter.js/src/codec/DnsCodec.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L65)

## Variables

### BITS\_PADDING

• `Const` **BITS\_PADDING**: ``"_padding"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L15)

___

### BYTES\_KEY

• `Const` **BYTES\_KEY**: ``"_bytes"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L13)

___

### ELEMENTS\_KEY

• `Const` **ELEMENTS\_KEY**: ``"_elements"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L14)

___

### EcdsaWithSHA256\_X962

• `Const` **EcdsaWithSHA256\_X962**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:218](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L218)

___

### KeyUsage\_Signature\_ContentCommited\_X509

• `Const` **KeyUsage\_Signature\_ContentCommited\_X509**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:239](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L239)

___

### KeyUsage\_Signature\_X509

• `Const` **KeyUsage\_Signature\_X509**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:235](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L235)

___

### MAX\_MDNS\_MESSAGE\_SIZE

• `Const` **MAX\_MDNS\_MESSAGE\_SIZE**: ``1232``

The maximum MDNS message size to usually fit into one UDP network MTU packet. Data are split into multiple messages
when needed.

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L17)

___

### MAX\_MESSAGE\_SIZE

• `Const` **MAX\_MESSAGE\_SIZE**: ``1280``

**`See`**

MatterSpecification.v12.Core § 4.4.4

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L16)

___

### OBJECT\_ID\_KEY

• `Const` **OBJECT\_ID\_KEY**: ``"_objectId"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L11)

___

### SHA256\_CMS

• `Const` **SHA256\_CMS**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L219)

___

### TAG\_ID\_KEY

• `Const` **TAG\_ID\_KEY**: ``"_tag"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L12)

## Functions

### AAAARecord

▸ **AAAARecord**(`name`, `ip`, `ttl?`, `flushCache?`): [`DnsRecord`](codec_export.md#dnsrecord)\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `ip` | `string` | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](codec_export.md#dnsrecord)\<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L35)

___

### ARecord

▸ **ARecord**(`name`, `ip`, `ttl?`, `flushCache?`): [`DnsRecord`](codec_export.md#dnsrecord)\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `ip` | `string` | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](codec_export.md#dnsrecord)\<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L27)

___

### AuthorityKeyIdentifier\_X509

▸ **AuthorityKeyIdentifier_X509**(`identifier`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `Uint8Array` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L223)

___

### BasicConstraints\_X509

▸ **BasicConstraints_X509**(`constraints`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `any` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L225)

___

### BitByteArray

▸ **BitByteArray**(`data`, `padding?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | `undefined` |
| `padding` | `number` | `0` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_bytes` | `Uint8Array` |
| `_padding` | `number` |
| `_tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L42)

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

[packages/matter.js/src/codec/DerCodec.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L47)

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

[packages/matter.js/src/codec/DerCodec.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L51)

___

### DerObject

▸ **DerObject**(`objectId`, `content?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |
| `content` | `any` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L41)

___

### ExtendedKeyUsage\_X509

▸ **ExtendedKeyUsage_X509**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `clientAuth` | `boolean` |
| › `serverAuth` | `boolean` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L227)

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

[packages/matter.js/src/codec/DerCodec.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L37)

___

### OrganisationName\_X520

▸ **OrganisationName_X520**(`name`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L220)

___

### Pkcs7Data

▸ **Pkcs7Data**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L243)

___

### Pkcs7SignedData

▸ **Pkcs7SignedData**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L244)

___

### PtrRecord

▸ **PtrRecord**(`name`, `ptr`, `ttl?`, `flushCache?`): [`DnsRecord`](codec_export.md#dnsrecord)\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `ptr` | `string` | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](codec_export.md#dnsrecord)\<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L19)

___

### PublicKeyEcPrime256v1\_X962

▸ **PublicKeyEcPrime256v1_X962**(`key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint8Array` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bytes` | \{ `_bytes`: `Uint8Array` = data; `_padding`: `number` = padding; `_tag`: `number`  } |
| `bytes._bytes` | `Uint8Array` |
| `bytes._padding` | `number` |
| `bytes._tag` | `number` |
| `type` | \{ `algorithm`: \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  } ; `curve`: \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  }  } |
| `type.algorithm` | \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  } |
| `type.algorithm._bytes` | `Uint8Array` |
| `type.algorithm._tag` | `number` |
| `type.curve` | \{ `_bytes`: `Uint8Array` ; `_tag`: `number`  } |
| `type.curve._bytes` | `Uint8Array` |
| `type.curve._tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L211)

___

### SrvRecord

▸ **SrvRecord**(`name`, `srv`, `ttl?`, `flushCache?`): [`DnsRecord`](codec_export.md#dnsrecord)\<[`SrvRecordValue`](codec_export.md#srvrecordvalue)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `srv` | [`SrvRecordValue`](codec_export.md#srvrecordvalue) | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](codec_export.md#dnsrecord)\<[`SrvRecordValue`](codec_export.md#srvrecordvalue)\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L51)

___

### SubjectKeyIdentifier\_X509

▸ **SubjectKeyIdentifier_X509**(`identifier`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `Uint8Array` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DerCodec.ts#L221)

___

### TxtRecord

▸ **TxtRecord**(`name`, `entries`, `ttl?`, `flushCache?`): [`DnsRecord`](codec_export.md#dnsrecord)\<`string`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `entries` | `string`[] | `undefined` |
| `ttl` | `number` | `120` |
| `flushCache` | `boolean` | `false` |

#### Returns

[`DnsRecord`](codec_export.md#dnsrecord)\<`string`[]\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/DnsCodec.ts#L43)
