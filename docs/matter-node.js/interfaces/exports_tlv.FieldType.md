[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / FieldType

# Interface: FieldType\<T\>

[exports/tlv](../modules/exports_tlv.md).FieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`FieldType`**

  ↳ [`RepeatedFieldType`](exports_tlv.RepeatedFieldType.md)

  ↳ [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)

## Table of contents

### Properties

- [fallback](exports_tlv.FieldType.md#fallback)
- [id](exports_tlv.FieldType.md#id)
- [optional](exports_tlv.FieldType.md#optional)
- [repeated](exports_tlv.FieldType.md#repeated)
- [schema](exports_tlv.FieldType.md#schema)

## Properties

### fallback

• `Optional` **fallback**: `T`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:15

___

### id

• **id**: `number`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:11

___

### optional

• `Optional` **optional**: `boolean`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:13

___

### repeated

• `Optional` **repeated**: `boolean`

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:14

___

### schema

• **schema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:12
