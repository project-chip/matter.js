[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / \<internal\>

# \<internal\>

## Type Aliases

### ArrayChunkData

> **ArrayChunkData**: `object`

#### Type declaration

##### element

> **element**: [`TlvStream`](../README.md#tlvstream)

##### listIndex

> **listIndex**: `number` \| `null` \| `undefined`

#### Source

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:13

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

packages/matter.js/dist/esm/tlv/TlvString.d.ts:8

***

### MandatoryFieldNames\<F\>

> **MandatoryFieldNames**\<`F`\>: `{ [K in keyof F]: F[K] extends OptionalFieldType<any> ? never : K }`\[keyof `F`\]

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:32

***

### OptionalFieldNames\<F\>

> **OptionalFieldNames**\<`F`\>: `{ [K in keyof F]: F[K] extends OptionalFieldType<any> ? K : never }`\[keyof `F`\]

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:35

***

### TypeForMandatoryFields\<F, MF\>

> **TypeForMandatoryFields**\<`F`, `MF`\>: `{ [K in MF]: TypeFromField<F[K]> }`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |
| `MF` *extends* keyof `F` |

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:39

***

### TypeForOptionalFields\<F, MF\>

> **TypeForOptionalFields**\<`F`, `MF`\>: `{ [K in MF]?: TypeFromField<F[K]> }`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |
| `MF` *extends* keyof `F` |

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:42

***

### TypeFromField\<F\>

> **TypeFromField**\<`F`\>: `F` *extends* [`FieldType`](../interfaces/FieldType.md)\<infer T\> ? `T` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`FieldType`](../interfaces/FieldType.md)\<`any`\> |

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:38
