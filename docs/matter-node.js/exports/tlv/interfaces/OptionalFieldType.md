[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / OptionalFieldType

# Interface: OptionalFieldType\<T\>

## Extends

- [`FieldType`](FieldType.md)\<`T`\>

## Extended by

- [`OptionalRepeatedFieldType`](OptionalRepeatedFieldType.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

### fallback?

> `optional` **fallback**: `T`

#### Inherited from

[`FieldType`](FieldType.md).[`fallback`](FieldType.md#fallback)

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:15

***

### id

> **id**: `number`

#### Inherited from

[`FieldType`](FieldType.md).[`id`](FieldType.md#id)

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:11

***

### optional

> **optional**: `true`

#### Overrides

[`FieldType`](FieldType.md).[`optional`](FieldType.md#optional)

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:23

***

### repeated?

> `optional` **repeated**: `boolean`

#### Inherited from

[`FieldType`](FieldType.md).[`repeated`](FieldType.md#repeated)

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:14

***

### schema

> **schema**: [`TlvSchema`](../classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`FieldType`](FieldType.md).[`schema`](FieldType.md#schema)

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:12
