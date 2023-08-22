[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / Base38Schema

# Class: Base38Schema

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).Base38Schema

See [MatterCoreSpecificationV1_0](../interfaces/exports_spec.MatterCoreSpecificationV1_0.md) § 5.1.3.1

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<[`ByteArray`](../modules/util_export.md#bytearray-1), `string`\>

  ↳ **`Base38Schema`**

## Table of contents

### Constructors

- [constructor](export._internal_.Base38Schema.md#constructor)

### Properties

- [decodeBase38](export._internal_.Base38Schema.md#decodebase38)
- [encodeBase38](export._internal_.Base38Schema.md#encodebase38)

### Methods

- [decode](export._internal_.Base38Schema.md#decode)
- [decodeInternal](export._internal_.Base38Schema.md#decodeinternal)
- [encode](export._internal_.Base38Schema.md#encode)
- [encodeInternal](export._internal_.Base38Schema.md#encodeinternal)
- [validate](export._internal_.Base38Schema.md#validate)

## Constructors

### constructor

• **new Base38Schema**()

#### Inherited from

[Schema](exports_schema.Schema.md).[constructor](exports_schema.Schema.md#constructor)

## Properties

### decodeBase38

• `Private` **decodeBase38**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/Base38Schema.d.ts:13

___

### encodeBase38

• `Private` **encodeBase38**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/Base38Schema.d.ts:11

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `Uint8Array`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `validate?` | `boolean` |

#### Returns

`Uint8Array`

#### Inherited from

[Schema](exports_schema.Schema.md).[decode](exports_schema.Schema.md#decode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ `Protected` **decodeInternal**(`encoded`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

`Uint8Array`

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/Base38Schema.d.ts:12

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`string`

#### Inherited from

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ `Protected` **encodeInternal**(`bytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/Base38Schema.d.ts:10

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `Uint8Array` |

#### Returns

`void`

#### Inherited from

[Schema](exports_schema.Schema.md).[validate](exports_schema.Schema.md#validate)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
