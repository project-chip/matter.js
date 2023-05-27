[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / ManualPairingCodeSchema

# Class: ManualPairingCodeSchema

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).ManualPairingCodeSchema

See [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 5.1.4.1 Table 38/39/40

## Hierarchy

- [`Schema`](schema.Schema.md)<[`ManualPairingData`](../modules/schema.md#manualpairingdata), `string`\>

  ↳ **`ManualPairingCodeSchema`**

## Table of contents

### Constructors

- [constructor](index._internal_.ManualPairingCodeSchema.md#constructor)

### Methods

- [decode](index._internal_.ManualPairingCodeSchema.md#decode)
- [decodeInternal](index._internal_.ManualPairingCodeSchema.md#decodeinternal)
- [encode](index._internal_.ManualPairingCodeSchema.md#encode)
- [encodeInternal](index._internal_.ManualPairingCodeSchema.md#encodeinternal)
- [validate](index._internal_.ManualPairingCodeSchema.md#validate)

## Constructors

### constructor

• **new ManualPairingCodeSchema**()

#### Inherited from

[Schema](schema.Schema.md).[constructor](schema.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`ManualPairingData`](../modules/schema.md#manualpairingdata)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`ManualPairingData`](../modules/schema.md#manualpairingdata)

#### Inherited from

[Schema](schema.Schema.md).[decode](schema.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ `Protected` **decodeInternal**(`encoded`): [`ManualPairingData`](../modules/schema.md#manualpairingdata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`ManualPairingData`](../modules/schema.md#manualpairingdata)

#### Overrides

[Schema](schema.Schema.md).[decodeInternal](schema.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:92](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L92)

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ManualPairingData`](../modules/schema.md#manualpairingdata) |

#### Returns

`string`

#### Inherited from

[Schema](schema.Schema.md).[encode](schema.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ `Protected` **encodeInternal**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ManualPairingData`](../modules/schema.md#manualpairingdata) |

#### Returns

`string`

#### Overrides

[Schema](schema.Schema.md).[encodeInternal](schema.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L76)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`ManualPairingData`](../modules/schema.md#manualpairingdata) |

#### Returns

`void`

#### Inherited from

[Schema](schema.Schema.md).[validate](schema.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
