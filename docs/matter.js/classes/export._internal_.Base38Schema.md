[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / Base38Schema

# Class: Base38Schema

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).Base38Schema

See [MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 5.1.3.1

## Hierarchy

- [`Schema`](schema_export.Schema.md)<[`ByteArray`](../modules/util_export.md#bytearray-1), `string`\>

  ↳ **`Base38Schema`**

## Table of contents

### Constructors

- [constructor](export._internal_.Base38Schema.md#constructor)

### Methods

- [decode](export._internal_.Base38Schema.md#decode)
- [decodeBase38](export._internal_.Base38Schema.md#decodebase38)
- [decodeInternal](export._internal_.Base38Schema.md#decodeinternal)
- [encode](export._internal_.Base38Schema.md#encode)
- [encodeBase38](export._internal_.Base38Schema.md#encodebase38)
- [encodeInternal](export._internal_.Base38Schema.md#encodeinternal)
- [validate](export._internal_.Base38Schema.md#validate)

## Constructors

### constructor

• **new Base38Schema**()

#### Inherited from

[Schema](schema_export.Schema.md).[constructor](schema_export.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `Uint8Array`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`Uint8Array`

#### Inherited from

[Schema](schema_export.Schema.md).[decode](schema_export.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeBase38

▸ `Private` **decodeBase38**(`encoded`, `offset`, `charCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `offset` | `number` |
| `charCount` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Base38Schema.ts#L84)

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

[Schema](schema_export.Schema.md).[decodeInternal](schema_export.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Base38Schema.ts#L45)

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

[Schema](schema_export.Schema.md).[encode](schema_export.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeBase38

▸ `Private` **encodeBase38**(`value`, `charCount`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `charCount` | `number` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Base38Schema.ts#L35)

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

[Schema](schema_export.Schema.md).[encodeInternal](schema_export.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Base38Schema.ts#L16)

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

[Schema](schema_export.Schema.md).[validate](schema_export.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L28)
