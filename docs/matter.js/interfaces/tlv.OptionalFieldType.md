[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / OptionalFieldType

# Interface: OptionalFieldType<T\>

[tlv](../modules/tlv.md).OptionalFieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FieldType`](tlv.FieldType.md)<`T`\>

  ↳ **`OptionalFieldType`**

## Table of contents

### Properties

- [fallback](tlv.OptionalFieldType.md#fallback)
- [id](tlv.OptionalFieldType.md#id)
- [optional](tlv.OptionalFieldType.md#optional)
- [schema](tlv.OptionalFieldType.md#schema)

## Properties

### fallback

• `Optional` **fallback**: `T`

#### Inherited from

[FieldType](tlv.FieldType.md).[fallback](tlv.FieldType.md#fallback)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L17)

___

### id

• **id**: `number`

#### Inherited from

[FieldType](tlv.FieldType.md).[id](tlv.FieldType.md#id)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L14)

___

### optional

• **optional**: ``true``

#### Overrides

[FieldType](tlv.FieldType.md).[optional](tlv.FieldType.md#optional)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L21)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\>

#### Inherited from

[FieldType](tlv.FieldType.md).[schema](tlv.FieldType.md#schema)

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L15)
