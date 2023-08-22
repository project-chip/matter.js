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
- [DnsMessage](../interfaces/codec_export.DnsMessage.md)
- [DnsQuery](../interfaces/codec_export.DnsQuery.md)
- [DnsRecord](../interfaces/codec_export.DnsRecord.md)
- [Message](../interfaces/codec_export.Message.md)
- [Packet](../interfaces/codec_export.Packet.md)
- [PacketHeader](../interfaces/codec_export.PacketHeader.md)
- [PayloadHeader](../interfaces/codec_export.PayloadHeader.md)
- [SrvRecordValue](../interfaces/codec_export.SrvRecordValue.md)

### Type Aliases

- [DerNode](codec_export.md#dernode)

### Variables

- [BITS\_PADDING](codec_export.md#bits_padding)
- [BYTES\_KEY](codec_export.md#bytes_key)
- [ELEMENTS\_KEY](codec_export.md#elements_key)
- [EcdsaWithSHA256\_X962](codec_export.md#ecdsawithsha256_x962)
- [KeyUsage\_Signature\_ContentCommited\_X509](codec_export.md#keyusage_signature_contentcommited_x509)
- [KeyUsage\_Signature\_X509](codec_export.md#keyusage_signature_x509)
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
| `_bytes` | [`ByteArray`](util_export.md#bytearray-1) |
| `_elements?` | [`DerNode`](codec_export.md#dernode)[] |
| `_padding?` | `number` |
| `_tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L55)

## Variables

### BITS\_PADDING

• `Const` **BITS\_PADDING**: ``"_padding"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L14)

___

### BYTES\_KEY

• `Const` **BYTES\_KEY**: ``"_bytes"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L12)

___

### ELEMENTS\_KEY

• `Const` **ELEMENTS\_KEY**: ``"_elements"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L13)

___

### EcdsaWithSHA256\_X962

• `Const` **EcdsaWithSHA256\_X962**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:207](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L207)

___

### KeyUsage\_Signature\_ContentCommited\_X509

• `Const` **KeyUsage\_Signature\_ContentCommited\_X509**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:228](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L228)

___

### KeyUsage\_Signature\_X509

• `Const` **KeyUsage\_Signature\_X509**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:224](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L224)

___

### OBJECT\_ID\_KEY

• `Const` **OBJECT\_ID\_KEY**: ``"_objectId"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L10)

___

### SHA256\_CMS

• `Const` **SHA256\_CMS**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:208](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L208)

___

### TAG\_ID\_KEY

• `Const` **TAG\_ID\_KEY**: ``"_tag"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L11)

## Functions

### AAAARecord

▸ **AAAARecord**(`name`, `ip`): [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |

#### Returns

[`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L27)

___

### ARecord

▸ **ARecord**(`name`, `ip`): [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |

#### Returns

[`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L20)

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

[packages/matter.js/src/codec/DerCodec.ts:212](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L212)

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

[packages/matter.js/src/codec/DerCodec.ts:214](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L214)

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

[packages/matter.js/src/codec/DerCodec.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L41)

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

[packages/matter.js/src/codec/DerCodec.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L46)

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

[packages/matter.js/src/codec/DerCodec.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L50)

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

[packages/matter.js/src/codec/DerCodec.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L40)

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

[packages/matter.js/src/codec/DerCodec.ts:216](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L216)

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

[packages/matter.js/src/codec/DerCodec.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L36)

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

[packages/matter.js/src/codec/DerCodec.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L209)

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

[packages/matter.js/src/codec/DerCodec.ts:232](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L232)

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

[packages/matter.js/src/codec/DerCodec.ts:233](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L233)

___

### PtrRecord

▸ **PtrRecord**(`name`, `ptr`): [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ptr` | `string` |

#### Returns

[`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L13)

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
| `bytes` | { `_bytes`: `Uint8Array` = data; `_padding`: `number` = padding; `_tag`: `number`  } |
| `bytes._bytes` | `Uint8Array` |
| `bytes._padding` | `number` |
| `bytes._tag` | `number` |
| `type` | { `algorithm`: { `_bytes`: `Uint8Array` ; `_tag`: `number`  } ; `curve`: { `_bytes`: `Uint8Array` ; `_tag`: `number`  }  } |
| `type.algorithm` | { `_bytes`: `Uint8Array` ; `_tag`: `number`  } |
| `type.algorithm._bytes` | `Uint8Array` |
| `type.algorithm._tag` | `number` |
| `type.curve` | { `_bytes`: `Uint8Array` ; `_tag`: `number`  } |
| `type.curve._bytes` | `Uint8Array` |
| `type.curve._tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:200](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L200)

___

### SrvRecord

▸ **SrvRecord**(`name`, `srv`): [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<[`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `srv` | [`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md) |

#### Returns

[`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<[`SrvRecordValue`](../interfaces/codec_export.SrvRecordValue.md)\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L41)

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

[packages/matter.js/src/codec/DerCodec.ts:210](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DerCodec.ts#L210)

___

### TxtRecord

▸ **TxtRecord**(`name`, `entries`): [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `entries` | `string`[] |

#### Returns

[`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`string`[]\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/DnsCodec.ts#L34)
