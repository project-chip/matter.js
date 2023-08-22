[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Schema

# Class: Schema<T, E\>

[<internal>](../modules/internal_.md).Schema

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Hierarchy

- **`Schema`**

  ↳ [`TlvSchema`](internal_.TlvSchema.md)

## Table of contents

### Constructors

- [constructor](internal_.Schema.md#constructor)

### Methods

- [decode](internal_.Schema.md#decode)
- [decodeInternal](internal_.Schema.md#decodeinternal)
- [encode](internal_.Schema.md#encode)
- [encodeInternal](internal_.Schema.md#encodeinternal)
- [validate](internal_.Schema.md#validate)

## Constructors

### constructor

• **new Schema**<`T`, `E`\>()

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `T`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `E` |
| `validate?` | `boolean` |

#### Returns

`T`

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ `Protected` `Abstract` **decodeInternal**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `E` |

#### Returns

`T`

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:13

___

### encode

▸ **encode**(`value`): `E`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`E`

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ `Protected` `Abstract` **encodeInternal**(`value`): `E`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`E`

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:12

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:15
