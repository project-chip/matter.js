[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / RepeatedFieldType

# Interface: RepeatedFieldType\<T\>

[tlv/export](../modules/tlv_export.md).RepeatedFieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FieldType`](tlv_export.FieldType.md)\<`T`\>

  ↳ **`RepeatedFieldType`**

## Table of contents

### Properties

- [fallback](tlv_export.RepeatedFieldType.md#fallback)
- [id](tlv_export.RepeatedFieldType.md#id)
- [maxLength](tlv_export.RepeatedFieldType.md#maxlength)
- [minLength](tlv_export.RepeatedFieldType.md#minlength)
- [optional](tlv_export.RepeatedFieldType.md#optional)
- [repeated](tlv_export.RepeatedFieldType.md#repeated)
- [schema](tlv_export.RepeatedFieldType.md#schema)

## Properties

### fallback

• `Optional` **fallback**: `T`

#### Inherited from

[FieldType](tlv_export.FieldType.md).[fallback](tlv_export.FieldType.md#fallback)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L22)

___

### id

• **id**: `number`

#### Inherited from

[FieldType](tlv_export.FieldType.md).[id](tlv_export.FieldType.md#id)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L18)

___

### maxLength

• `Optional` **maxLength**: `number`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L28)

___

### minLength

• `Optional` **minLength**: `number`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L27)

___

### optional

• `Optional` **optional**: `boolean`

#### Inherited from

[FieldType](tlv_export.FieldType.md).[optional](tlv_export.FieldType.md#optional)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L20)

___

### repeated

• **repeated**: ``true``

#### Overrides

[FieldType](tlv_export.FieldType.md).[repeated](tlv_export.FieldType.md#repeated)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L26)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[FieldType](tlv_export.FieldType.md).[schema](tlv_export.FieldType.md#schema)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L19)
