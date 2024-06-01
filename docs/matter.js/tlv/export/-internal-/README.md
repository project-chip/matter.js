[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Enumerations

- [TagControl](enumerations/TagControl.md)

## Type Aliases

### ArrayChunkData

> **ArrayChunkData**: `object`

#### Type declaration

##### element

> **element**: [`TlvStream`](../README.md#tlvstream)

##### listIndex

> **listIndex**: `number` \| `null` \| `undefined`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L21)

***

### LengthConstraints

> **LengthConstraints**: `object`

#### Type declaration

##### length?

> `optional` **length**: `number`

##### maxLength?

> `optional` **maxLength**: `number`

##### minLength?

> `optional` **minLength**: `number`

#### Source

[packages/matter.js/src/tlv/TlvString.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L15)

***

### MandatoryFieldNames\<F\>

> **MandatoryFieldNames**\<`F`\>: `{ [K in keyof F]: F[K] extends OptionalFieldType<any> ? never : K }`\[keyof `F`\]

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L42)

***

### OptionalFieldNames\<F\>

> **OptionalFieldNames**\<`F`\>: `{ [K in keyof F]: F[K] extends OptionalFieldType<any> ? K : never }`\[keyof `F`\]

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L45)

***

### TypeForMandatoryFields\<F, MF\>

> **TypeForMandatoryFields**\<`F`, `MF`\>: `{ [K in MF]: TypeFromField<F[K]> }`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |
| `MF` *extends* keyof `F` |

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L49)

***

### TypeForOptionalFields\<F, MF\>

> **TypeForOptionalFields**\<`F`, `MF`\>: `{ [K in MF]?: TypeFromField<F[K]> }`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |
| `MF` *extends* keyof `F` |

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L50)

***

### TypeFromField\<F\>

> **TypeFromField**\<`F`\>: `F` *extends* [`FieldType`](../interfaces/FieldType.md)\<infer T\> ? `T` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`FieldType`](../interfaces/FieldType.md)\<`any`\> |

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L48)
