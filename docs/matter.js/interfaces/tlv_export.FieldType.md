[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / FieldType

# Interface: FieldType\<T\>

[tlv/export](../modules/tlv_export.md).FieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`FieldType`**

  ↳ [`RepeatedFieldType`](tlv_export.RepeatedFieldType.md)

  ↳ [`OptionalFieldType`](tlv_export.OptionalFieldType.md)

## Table of contents

### Properties

- [fallback](tlv_export.FieldType.md#fallback)
- [id](tlv_export.FieldType.md#id)
- [optional](tlv_export.FieldType.md#optional)
- [repeated](tlv_export.FieldType.md#repeated)
- [schema](tlv_export.FieldType.md#schema)

## Properties

### fallback

• `Optional` **fallback**: `T`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:22](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvObject.ts#L22)

___

### id

• **id**: `number`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:18](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvObject.ts#L18)

___

### optional

• `Optional` **optional**: `boolean`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:20](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvObject.ts#L20)

___

### repeated

• `Optional` **repeated**: `boolean`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:21](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvObject.ts#L21)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:19](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/tlv/TlvObject.ts#L19)
