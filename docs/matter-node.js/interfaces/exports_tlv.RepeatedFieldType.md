[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / RepeatedFieldType

# Interface: RepeatedFieldType\<T\>

[exports/tlv](../modules/exports_tlv.md).RepeatedFieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FieldType`](exports_tlv.FieldType.md)\<`T`\>

  ↳ **`RepeatedFieldType`**

## Table of contents

### Properties

- [fallback](exports_tlv.RepeatedFieldType.md#fallback)
- [id](exports_tlv.RepeatedFieldType.md#id)
- [maxLength](exports_tlv.RepeatedFieldType.md#maxlength)
- [minLength](exports_tlv.RepeatedFieldType.md#minlength)
- [optional](exports_tlv.RepeatedFieldType.md#optional)
- [repeated](exports_tlv.RepeatedFieldType.md#repeated)
- [schema](exports_tlv.RepeatedFieldType.md#schema)

## Properties

### fallback

• `Optional` **fallback**: `T`

#### Inherited from

[FieldType](exports_tlv.FieldType.md).[fallback](exports_tlv.FieldType.md#fallback)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:15

___

### id

• **id**: `number`

#### Inherited from

[FieldType](exports_tlv.FieldType.md).[id](exports_tlv.FieldType.md#id)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:11

___

### maxLength

• `Optional` **maxLength**: `number`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:20

___

### minLength

• `Optional` **minLength**: `number`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:19

___

### optional

• `Optional` **optional**: `boolean`

#### Inherited from

[FieldType](exports_tlv.FieldType.md).[optional](exports_tlv.FieldType.md#optional)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:13

___

### repeated

• **repeated**: ``true``

#### Overrides

[FieldType](exports_tlv.FieldType.md).[repeated](exports_tlv.FieldType.md#repeated)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:18

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[FieldType](exports_tlv.FieldType.md).[schema](exports_tlv.FieldType.md#schema)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:12
