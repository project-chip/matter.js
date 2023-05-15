[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / QrCodeSchema

# Class: QrCodeSchema

[exports/schema](../modules/exports_schema.md).QrCodeSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<`string`, `string`\>

  ↳ **`QrCodeSchema`**

## Table of contents

### Constructors

- [constructor](exports_schema.QrCodeSchema.md#constructor)

### Properties

- [getCode](exports_schema.QrCodeSchema.md#getcode)

### Methods

- [decode](exports_schema.QrCodeSchema.md#decode)
- [decodeInternal](exports_schema.QrCodeSchema.md#decodeinternal)
- [encode](exports_schema.QrCodeSchema.md#encode)
- [encodeInternal](exports_schema.QrCodeSchema.md#encodeinternal)
- [validate](exports_schema.QrCodeSchema.md#validate)

## Constructors

### constructor

• **new QrCodeSchema**()

#### Inherited from

[Schema](exports_schema.Schema.md).[constructor](exports_schema.Schema.md#constructor)

## Properties

### getCode

• `Private` **getCode**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/QrCodeSchema.d.ts:9

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `string`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `validate?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Schema](exports_schema.Schema.md).[decode](exports_schema.Schema.md#decode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ `Protected` **decodeInternal**(`_encoded`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_encoded` | `string` |

#### Returns

`string`

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/QrCodeSchema.d.ts:10

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Inherited from

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ `Protected` **encodeInternal**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/QrCodeSchema.d.ts:8

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Inherited from

[Schema](exports_schema.Schema.md).[validate](exports_schema.Schema.md#validate)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
