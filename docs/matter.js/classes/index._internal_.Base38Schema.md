[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / Base38Schema

# Class: Base38Schema

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).Base38Schema

See [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 5.1.3.1

## Hierarchy

- [`Schema`](schema.Schema.md)<[`ByteArray`](../modules/util.md#bytearray-1), `string`\>

  ↳ **`Base38Schema`**

## Table of contents

### Constructors

- [constructor](index._internal_.Base38Schema.md#constructor)

### Methods

- [decode](index._internal_.Base38Schema.md#decode)
- [decodeBase38](index._internal_.Base38Schema.md#decodebase38)
- [decodeInternal](index._internal_.Base38Schema.md#decodeinternal)
- [encode](index._internal_.Base38Schema.md#encode)
- [encodeBase38](index._internal_.Base38Schema.md#encodebase38)
- [encodeInternal](index._internal_.Base38Schema.md#encodeinternal)
- [validate](index._internal_.Base38Schema.md#validate)

## Constructors

### constructor

• **new Base38Schema**()

#### Inherited from

[Schema](schema.Schema.md).[constructor](schema.Schema.md#constructor)

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

[Schema](schema.Schema.md).[decode](schema.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/schema/Base38Schema.ts:83](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Base38Schema.ts#L83)

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

[Schema](schema.Schema.md).[decodeInternal](schema.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Base38Schema.ts#L44)

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

[Schema](schema.Schema.md).[encode](schema.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/schema/Base38Schema.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Base38Schema.ts#L34)

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

[Schema](schema.Schema.md).[encodeInternal](schema.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Base38Schema.ts#L15)

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

[Schema](schema.Schema.md).[validate](schema.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
