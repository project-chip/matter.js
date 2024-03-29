[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](tlv_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Enumerations

- [TagControl](../enums/tlv_export._internal_.TagControl.md)

### Type Aliases

- [ArrayChunkData](tlv_export._internal_.md#arraychunkdata)
- [LengthConstraints](tlv_export._internal_.md#lengthconstraints)
- [MandatoryFieldNames](tlv_export._internal_.md#mandatoryfieldnames)
- [OptionalFieldNames](tlv_export._internal_.md#optionalfieldnames)
- [TypeForMandatoryFields](tlv_export._internal_.md#typeformandatoryfields)
- [TypeForOptionalFields](tlv_export._internal_.md#typeforoptionalfields)
- [TypeFromField](tlv_export._internal_.md#typefromfield)

## Type Aliases

### ArrayChunkData

Ƭ **ArrayChunkData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `element` | [`TlvStream`](tlv_export.md#tlvstream) |
| `listIndex` | `number` \| ``null`` \| `undefined` |

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:20](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/tlv/TlvArray.ts#L20)

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

[packages/matter.js/src/tlv/TlvString.ts:15](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/tlv/TlvString.ts#L15)

___

### MandatoryFieldNames

Ƭ **MandatoryFieldNames**\<`F`\>: \{ [K in keyof F]: F[K] extends OptionalFieldType\<any\> ? never : K }[keyof `F`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv_export.md#tlvfields) |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:43](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/tlv/TlvObject.ts#L43)

___

### OptionalFieldNames

Ƭ **OptionalFieldNames**\<`F`\>: \{ [K in keyof F]: F[K] extends OptionalFieldType\<any\> ? K : never }[keyof `F`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv_export.md#tlvfields) |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:46](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/tlv/TlvObject.ts#L46)

___

### TypeForMandatoryFields

Ƭ **TypeForMandatoryFields**\<`F`, `MF`\>: \{ [K in MF]: TypeFromField\<F[K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv_export.md#tlvfields) |
| `MF` | extends keyof `F` |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/tlv/TlvObject.ts#L50)

___

### TypeForOptionalFields

Ƭ **TypeForOptionalFields**\<`F`, `MF`\>: \{ [K in MF]?: TypeFromField\<F[K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv_export.md#tlvfields) |
| `MF` | extends keyof `F` |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:51](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/tlv/TlvObject.ts#L51)

___

### TypeFromField

Ƭ **TypeFromField**\<`F`\>: `F` extends [`FieldType`](../interfaces/tlv_export.FieldType.md)\<infer T\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`any`\> |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/tlv/TlvObject.ts#L49)
