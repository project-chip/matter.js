[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / OptionalFieldType

# Interface: OptionalFieldType\<T\>

[exports/tlv](../modules/exports_tlv.md).OptionalFieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FieldType`](exports_tlv.FieldType.md)\<`T`\>

  ↳ **`OptionalFieldType`**

  ↳↳ [`OptionalRepeatedFieldType`](exports_tlv.OptionalRepeatedFieldType.md)

## Table of contents

### Properties

- [fallback](exports_tlv.OptionalFieldType.md#fallback)
- [id](exports_tlv.OptionalFieldType.md#id)
- [optional](exports_tlv.OptionalFieldType.md#optional)
- [repeated](exports_tlv.OptionalFieldType.md#repeated)
- [schema](exports_tlv.OptionalFieldType.md#schema)

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

### optional

• **optional**: ``true``

#### Overrides

[FieldType](exports_tlv.FieldType.md).[optional](exports_tlv.FieldType.md#optional)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:23

___

### repeated

• `Optional` **repeated**: `boolean`

#### Inherited from

[FieldType](exports_tlv.FieldType.md).[repeated](exports_tlv.FieldType.md#repeated)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:14

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Inherited from

[FieldType](exports_tlv.FieldType.md).[schema](exports_tlv.FieldType.md#schema)

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:12
