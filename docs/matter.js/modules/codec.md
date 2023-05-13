[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / codec

# Module: codec

## Table of contents

### Enumerations

- [MessageType](../enums/codec.MessageType.md)
- [RecordClass](../enums/codec.RecordClass.md)
- [RecordType](../enums/codec.RecordType.md)
- [SessionType](../enums/codec.SessionType.md)

### Classes

- [DerCodec](../classes/codec.DerCodec.md)
- [DnsCodec](../classes/codec.DnsCodec.md)
- [MessageCodec](../classes/codec.MessageCodec.md)

### Interfaces

- [DnsMessage](../interfaces/codec.DnsMessage.md)
- [Message](../interfaces/codec.Message.md)
- [Packet](../interfaces/codec.Packet.md)
- [PacketHeader](../interfaces/codec.PacketHeader.md)
- [PayloadHeader](../interfaces/codec.PayloadHeader.md)
- [Query](../interfaces/codec.Query.md)
- [Record](../interfaces/codec.Record.md)
- [SrvRecordValue](../interfaces/codec.SrvRecordValue.md)

### Type Aliases

- [DerNode](codec.md#dernode)

### Variables

- [BITS\_PADDING](codec.md#bits_padding)
- [BYTES\_KEY](codec.md#bytes_key)
- [ELEMENTS\_KEY](codec.md#elements_key)
- [EcdsaWithSHA256\_X962](codec.md#ecdsawithsha256_x962)
- [KeyUsage\_Signature\_ContentCommited\_X509](codec.md#keyusage_signature_contentcommited_x509)
- [KeyUsage\_Signature\_X509](codec.md#keyusage_signature_x509)
- [OBJECT\_ID\_KEY](codec.md#object_id_key)
- [SHA256\_CMS](codec.md#sha256_cms)
- [TAG\_ID\_KEY](codec.md#tag_id_key)

### Functions

- [AAAARecord](codec.md#aaaarecord)
- [ARecord](codec.md#arecord)
- [AuthorityKeyIdentifier\_X509](codec.md#authoritykeyidentifier_x509)
- [BasicConstraints\_X509](codec.md#basicconstraints_x509)
- [BitByteArray](codec.md#bitbytearray)
- [ContextTagged](codec.md#contexttagged)
- [ContextTaggedBytes](codec.md#contexttaggedbytes)
- [DerObject](codec.md#derobject)
- [ExtendedKeyUsage\_X509](codec.md#extendedkeyusage_x509)
- [ObjectId](codec.md#objectid)
- [OrganisationName\_X520](codec.md#organisationname_x520)
- [Pkcs7Data](codec.md#pkcs7data)
- [Pkcs7SignedData](codec.md#pkcs7signeddata)
- [PtrRecord](codec.md#ptrrecord)
- [PublicKeyEcPrime256v1\_X962](codec.md#publickeyecprime256v1_x962)
- [SrvRecord](codec.md#srvrecord)
- [SubjectKeyIdentifier\_X509](codec.md#subjectkeyidentifier_x509)
- [TxtRecord](codec.md#txtrecord)

## Type Aliases

### DerNode

Ƭ **DerNode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_bytes` | [`ByteArray`](util.md#bytearray-1) |
| `_elements?` | [`DerNode`](codec.md#dernode)[] |
| `_padding?` | `number` |
| `_tag` | `number` |

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L42)

## Variables

### BITS\_PADDING

• `Const` **BITS\_PADDING**: ``"_padding"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L13)

___

### BYTES\_KEY

• `Const` **BYTES\_KEY**: ``"_bytes"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L11)

___

### ELEMENTS\_KEY

• `Const` **ELEMENTS\_KEY**: ``"_elements"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L12)

___

### EcdsaWithSHA256\_X962

• `Const` **EcdsaWithSHA256\_X962**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L171)

___

### KeyUsage\_Signature\_ContentCommited\_X509

• `Const` **KeyUsage\_Signature\_ContentCommited\_X509**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:184](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L184)

___

### KeyUsage\_Signature\_X509

• `Const` **KeyUsage\_Signature\_X509**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:183](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L183)

___

### OBJECT\_ID\_KEY

• `Const` **OBJECT\_ID\_KEY**: ``"_objectId"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L9)

___

### SHA256\_CMS

• `Const` **SHA256\_CMS**: `any`

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:172](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L172)

___

### TAG\_ID\_KEY

• `Const` **TAG\_ID\_KEY**: ``"_tag"``

#### Defined in

[packages/matter.js/src/codec/DerCodec.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L10)

## Functions

### AAAARecord

▸ **AAAARecord**(`name`, `ip`): [`Record`](../interfaces/codec.Record.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |

#### Returns

[`Record`](../interfaces/codec.Record.md)<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L14)

___

### ARecord

▸ **ARecord**(`name`, `ip`): [`Record`](../interfaces/codec.Record.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ip` | `string` |

#### Returns

[`Record`](../interfaces/codec.Record.md)<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L13)

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

[packages/matter.js/src/codec/DerCodec.ts:175](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L175)

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

[packages/matter.js/src/codec/DerCodec.ts:176](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L176)

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

[packages/matter.js/src/codec/DerCodec.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L37)

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

[packages/matter.js/src/codec/DerCodec.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L38)

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

[packages/matter.js/src/codec/DerCodec.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L39)

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

[packages/matter.js/src/codec/DerCodec.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L36)

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

[packages/matter.js/src/codec/DerCodec.ts:177](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L177)

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

[packages/matter.js/src/codec/DerCodec.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L35)

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

[packages/matter.js/src/codec/DerCodec.ts:173](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L173)

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

[packages/matter.js/src/codec/DerCodec.ts:185](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L185)

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

[packages/matter.js/src/codec/DerCodec.ts:186](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L186)

___

### PtrRecord

▸ **PtrRecord**(`name`, `ptr`): [`Record`](../interfaces/codec.Record.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ptr` | `string` |

#### Returns

[`Record`](../interfaces/codec.Record.md)<`string`\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L12)

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

[packages/matter.js/src/codec/DerCodec.ts:170](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L170)

___

### SrvRecord

▸ **SrvRecord**(`name`, `srv`): [`Record`](../interfaces/codec.Record.md)<[`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `srv` | [`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md) |

#### Returns

[`Record`](../interfaces/codec.Record.md)<[`SrvRecordValue`](../interfaces/codec.SrvRecordValue.md)\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L16)

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

[packages/matter.js/src/codec/DerCodec.ts:174](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DerCodec.ts#L174)

___

### TxtRecord

▸ **TxtRecord**(`name`, `entries`): [`Record`](../interfaces/codec.Record.md)<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `entries` | `string`[] |

#### Returns

[`Record`](../interfaces/codec.Record.md)<`string`[]\>

#### Defined in

[packages/matter.js/src/codec/DnsCodec.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/DnsCodec.ts#L15)
