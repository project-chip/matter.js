[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema/export](../modules/schema_export.md) / QrCodeSchema

# Class: QrCodeSchema

[schema/export](../modules/schema_export.md).QrCodeSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](schema_export.Schema.md)<`string`, `string`\>

  ↳ **`QrCodeSchema`**

## Table of contents

### Constructors

- [constructor](schema_export.QrCodeSchema.md#constructor)

### Methods

- [decode](schema_export.QrCodeSchema.md#decode)
- [decodeInternal](schema_export.QrCodeSchema.md#decodeinternal)
- [encode](schema_export.QrCodeSchema.md#encode)
- [encodeInternal](schema_export.QrCodeSchema.md#encodeinternal)
- [getCode](schema_export.QrCodeSchema.md#getcode)
- [validate](schema_export.QrCodeSchema.md#validate)

## Constructors

### constructor

• **new QrCodeSchema**()

#### Inherited from

[Schema](schema_export.Schema.md).[constructor](schema_export.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `string`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`string`

#### Inherited from

[Schema](schema_export.Schema.md).[decode](schema_export.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

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

[Schema](schema_export.Schema.md).[decodeInternal](schema_export.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/QrCodeSchema.ts:208](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/QrCodeSchema.ts#L208)

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

[Schema](schema_export.Schema.md).[encode](schema_export.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

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

[Schema](schema_export.Schema.md).[encodeInternal](schema_export.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/QrCodeSchema.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/QrCodeSchema.ts#L99)

___

### getCode

▸ `Private` **getCode**(`char`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `char` | `string` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/schema/QrCodeSchema.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/QrCodeSchema.ts#L202)

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

[Schema](schema_export.Schema.md).[validate](schema_export.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L28)
