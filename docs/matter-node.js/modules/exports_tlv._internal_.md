[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](exports_tlv.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [ArrayChunkData](exports_tlv._internal_.md#arraychunkdata)
- [LengthConstraints](exports_tlv._internal_.md#lengthconstraints)
- [MandatoryFieldNames](exports_tlv._internal_.md#mandatoryfieldnames)
- [OptionalFieldNames](exports_tlv._internal_.md#optionalfieldnames)
- [TypeForMandatoryFields](exports_tlv._internal_.md#typeformandatoryfields)
- [TypeForOptionalFields](exports_tlv._internal_.md#typeforoptionalfields)
- [TypeFromField](exports_tlv._internal_.md#typefromfield)

## Type Aliases

### ArrayChunkData

Ƭ **ArrayChunkData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `element` | [`TlvStream`](exports_tlv.md#tlvstream) |
| `listIndex` | `number` \| ``null`` \| `undefined` |

#### Defined in

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:13

___

### LengthConstraints

Ƭ **LengthConstraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length?` | `number` |
| `maxLength?` | `number` |
| `minLength?` | `number` |

#### Defined in

packages/matter.js/dist/esm/tlv/TlvString.d.ts:8

___

### MandatoryFieldNames

Ƭ **MandatoryFieldNames**\<`F`\>: \{ [K in keyof F]: F[K] extends OptionalFieldType\<any\> ? never : K }[keyof `F`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](exports_tlv.md#tlvfields) |

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:32

___

### OptionalFieldNames

Ƭ **OptionalFieldNames**\<`F`\>: \{ [K in keyof F]: F[K] extends OptionalFieldType\<any\> ? K : never }[keyof `F`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](exports_tlv.md#tlvfields) |

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:35

___

### TypeForMandatoryFields

Ƭ **TypeForMandatoryFields**\<`F`, `MF`\>: \{ [K in MF]: TypeFromField\<F[K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](exports_tlv.md#tlvfields) |
| `MF` | extends keyof `F` |

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:39

___

### TypeForOptionalFields

Ƭ **TypeForOptionalFields**\<`F`, `MF`\>: \{ [K in MF]?: TypeFromField\<F[K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](exports_tlv.md#tlvfields) |
| `MF` | extends keyof `F` |

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:42

___

### TypeFromField

Ƭ **TypeFromField**\<`F`\>: `F` extends [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<infer T\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`any`\> |

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:38
