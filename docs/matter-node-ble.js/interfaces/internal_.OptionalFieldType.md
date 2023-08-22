[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / OptionalFieldType

# Interface: OptionalFieldType<T\>

[<internal>](../modules/internal_.md).OptionalFieldType

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`FieldType`](internal_.FieldType.md)<`T`\>

  ↳ **`OptionalFieldType`**

## Table of contents

### Properties

- [fallback](internal_.OptionalFieldType.md#fallback)
- [id](internal_.OptionalFieldType.md#id)
- [optional](internal_.OptionalFieldType.md#optional)
- [schema](internal_.OptionalFieldType.md#schema)

## Properties

### fallback

• `Optional` **fallback**: `T`

#### Inherited from

[FieldType](internal_.FieldType.md).[fallback](internal_.FieldType.md#fallback)

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:13

___

### id

• **id**: `number`

#### Inherited from

[FieldType](internal_.FieldType.md).[id](internal_.FieldType.md#id)

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:10

___

### optional

• **optional**: ``true``

#### Overrides

[FieldType](internal_.FieldType.md).[optional](internal_.FieldType.md#optional)

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:16

___

### schema

• **schema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)<`T`\>

#### Inherited from

[FieldType](internal_.FieldType.md).[schema](internal_.FieldType.md#schema)

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:11
