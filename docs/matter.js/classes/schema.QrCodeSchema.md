[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema](../modules/schema.md) / QrCodeSchema

# Class: QrCodeSchema

[schema](../modules/schema.md).QrCodeSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](schema.Schema.md)<`string`, `string`\>

  ↳ **`QrCodeSchema`**

## Table of contents

### Constructors

- [constructor](schema.QrCodeSchema.md#constructor)

### Methods

- [decode](schema.QrCodeSchema.md#decode)
- [decodeInternal](schema.QrCodeSchema.md#decodeinternal)
- [encode](schema.QrCodeSchema.md#encode)
- [encodeInternal](schema.QrCodeSchema.md#encodeinternal)
- [getCode](schema.QrCodeSchema.md#getcode)
- [validate](schema.QrCodeSchema.md#validate)

## Constructors

### constructor

• **new QrCodeSchema**()

#### Inherited from

[Schema](schema.Schema.md).[constructor](schema.Schema.md#constructor)

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

[Schema](schema.Schema.md).[decode](schema.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[Schema](schema.Schema.md).[decodeInternal](schema.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/QrCodeSchema.ts:207](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/QrCodeSchema.ts#L207)

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

[Schema](schema.Schema.md).[encode](schema.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[Schema](schema.Schema.md).[encodeInternal](schema.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/QrCodeSchema.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/QrCodeSchema.ts#L98)

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

[packages/matter.js/src/schema/QrCodeSchema.ts:201](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/QrCodeSchema.ts#L201)

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

[Schema](schema.Schema.md).[validate](schema.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
