[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / OptionalFieldType

# Interface: OptionalFieldType\<T\>

[tlv/export](../modules/tlv_export.md).OptionalFieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FieldType`](tlv_export.FieldType.md)\<`T`\>

  ↳ **`OptionalFieldType`**

  ↳↳ [`OptionalRepeatedFieldType`](tlv_export.OptionalRepeatedFieldType.md)

## Table of contents

### Properties

- [fallback](tlv_export.OptionalFieldType.md#fallback)
- [id](tlv_export.OptionalFieldType.md#id)
- [optional](tlv_export.OptionalFieldType.md#optional)
- [repeated](tlv_export.OptionalFieldType.md#repeated)
- [schema](tlv_export.OptionalFieldType.md#schema)

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

### optional

• **optional**: ``true``

#### Overrides

[FieldType](tlv_export.FieldType.md).[optional](tlv_export.FieldType.md#optional)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L32)

___

### repeated

• `Optional` **repeated**: `boolean`

#### Inherited from

[FieldType](tlv_export.FieldType.md).[repeated](tlv_export.FieldType.md#repeated)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L21)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[FieldType](tlv_export.FieldType.md).[schema](tlv_export.FieldType.md#schema)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L19)
