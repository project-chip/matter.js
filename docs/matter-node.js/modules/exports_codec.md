[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/codec

# Module: exports/codec

## Table of contents

### Enumerations

- [MessageType](../enums/exports_codec.MessageType.md)
- [RecordClass](../enums/exports_codec.RecordClass.md)
- [RecordType](../enums/exports_codec.RecordType.md)
- [SessionType](../enums/exports_codec.SessionType.md)

### Classes

- [DerCodec](../classes/exports_codec.DerCodec.md)
- [DnsCodec](../classes/exports_codec.DnsCodec.md)
- [MessageCodec](../classes/exports_codec.MessageCodec.md)

### Interfaces

- [DnsMessage](../interfaces/exports_codec.DnsMessage.md)
- [Message](../interfaces/exports_codec.Message.md)
- [Packet](../interfaces/exports_codec.Packet.md)
- [PacketHeader](../interfaces/exports_codec.PacketHeader.md)
- [PayloadHeader](../interfaces/exports_codec.PayloadHeader.md)
- [Query](../interfaces/exports_codec.Query.md)
- [Record](../interfaces/exports_codec.Record.md)
- [SrvRecordValue](../interfaces/exports_codec.SrvRecordValue.md)

### Type Aliases

- [DerNode](exports_codec.md#dernode)

### Variables

- [BITS\_PADDING](exports_codec.md#bits_padding)
- [BYTES\_KEY](exports_codec.md#bytes_key)
- [ELEMENTS\_KEY](exports_codec.md#elements_key)
- [EcdsaWithSHA256\_X962](exports_codec.md#ecdsawithsha256_x962)
- [KeyUsage\_Signature\_ContentCommited\_X509](exports_codec.md#keyusage_signature_contentcommited_x509)
- [KeyUsage\_Signature\_X509](exports_codec.md#keyusage_signature_x509)
- [OBJECT\_ID\_KEY](exports_codec.md#object_id_key)
- [SHA256\_CMS](exports_codec.md#sha256_cms)
- [TAG\_ID\_KEY](exports_codec.md#tag_id_key)

### Functions

- [AAAARecord](exports_codec.md#aaaarecord)
- [ARecord](exports_codec.md#arecord)
- [AuthorityKeyIdentifier\_X509](exports_codec.md#authoritykeyidentifier_x509)
- [BasicConstraints\_X509](exports_codec.md#basicconstraints_x509)
- [BitByteArray](exports_codec.md#bitbytearray)
- [ContextTagged](exports_codec.md#contexttagged)
- [ContextTaggedBytes](exports_codec.md#contexttaggedbytes)
- [DerObject](exports_codec.md#derobject)
- [ExtendedKeyUsage\_X509](exports_codec.md#extendedkeyusage_x509)
- [ObjectId](exports_codec.md#objectid)
- [OrganisationName\_X520](exports_codec.md#organisationname_x520)
- [Pkcs7Data](exports_codec.md#pkcs7data)
- [Pkcs7SignedData](exports_codec.md#pkcs7signeddata)
- [PtrRecord](exports_codec.md#ptrrecord)
- [PublicKeyEcPrime256v1\_X962](exports_codec.md#publickeyecprime256v1_x962)
- [SrvRecord](exports_codec.md#srvrecord)
- [SubjectKeyIdentifier\_X509](exports_codec.md#subjectkeyidentifier_x509)
- [TxtRecord](exports_codec.md#txtrecord)

## Type Aliases

### DerNode

Ƭ **DerNode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_bytes` | [`ByteArray`](util.md#bytearray-1) |
| `_elements?` | [`DerNode`](exports_codec.md#dernode)[] |
| `_padding?` | `number` |
| `_tag` | `number` |

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:30

## Variables

### BITS\_PADDING

• `Const` **BITS\_PADDING**: ``"_padding"``

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:11

___

### BYTES\_KEY

• `Const` **BYTES\_KEY**: ``"_bytes"``

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:9

___

### ELEMENTS\_KEY

• `Const` **ELEMENTS\_KEY**: ``"_elements"``

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:10

___

### EcdsaWithSHA256\_X962

• `Const` **EcdsaWithSHA256\_X962**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:68

___

### KeyUsage\_Signature\_ContentCommited\_X509

• `Const` **KeyUsage\_Signature\_ContentCommited\_X509**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:79

___

### KeyUsage\_Signature\_X509

• `Const` **KeyUsage\_Signature\_X509**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:78

___

### OBJECT\_ID\_KEY

• `Const` **OBJECT\_ID\_KEY**: ``"_objectId"``

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:7

___

### SHA256\_CMS

• `Const` **SHA256\_CMS**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:69

___

### TAG\_ID\_KEY

• `Const` **TAG\_ID\_KEY**: ``"_tag"``

#### Defined in

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:8

## Functions

### AAAARecord

▸ **AAAARecord**(`name`, `ip`): [`Record`](../interfaces/exports_codec.Record.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |

#### Returns

[`Record`](../interfaces/exports_codec.Record.md)<`string`\>

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:9

___

### ARecord

▸ **ARecord**(`name`, `ip`): [`Record`](../interfaces/exports_codec.Record.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |

#### Returns

[`Record`](../interfaces/exports_codec.Record.md)<`string`\>

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:8

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:72

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:73

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:17

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:22

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:26

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:16

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:74

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:12

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:70

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:80

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:81

___

### PtrRecord

▸ **PtrRecord**(`name`, `ptr`): [`Record`](../interfaces/exports_codec.Record.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ptr` | `string` |

#### Returns

[`Record`](../interfaces/exports_codec.Record.md)<`string`\>

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:7

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
| `bytes` | { `_bytes`: `Uint8Array` ; `_padding`: `number` ; `_tag`: `number`  } |
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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:51

___

### SrvRecord

▸ **SrvRecord**(`name`, `srv`): [`Record`](../interfaces/exports_codec.Record.md)<[`SrvRecordValue`](../interfaces/exports_codec.SrvRecordValue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `srv` | [`SrvRecordValue`](../interfaces/exports_codec.SrvRecordValue.md) |

#### Returns

[`Record`](../interfaces/exports_codec.Record.md)<[`SrvRecordValue`](../interfaces/exports_codec.SrvRecordValue.md)\>

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:11

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

packages/matter.js/dist/cjs/codec/DerCodec.d.ts:71

___

### TxtRecord

▸ **TxtRecord**(`name`, `entries`): [`Record`](../interfaces/exports_codec.Record.md)<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `entries` | `string`[] |

#### Returns

[`Record`](../interfaces/exports_codec.Record.md)<`string`[]\>

#### Defined in

packages/matter.js/dist/cjs/codec/DnsCodec.d.ts:10
