[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / ManualPairingCodeSchema

# Class: ManualPairingCodeSchema

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).ManualPairingCodeSchema

See [MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 5.1.4.1 Table 38/39/40

## Hierarchy

- [`Schema`](schema_export.Schema.md)<[`ManualPairingData`](../modules/schema_export.md#manualpairingdata), `string`\>

  ↳ **`ManualPairingCodeSchema`**

## Table of contents

### Constructors

- [constructor](export._internal_.ManualPairingCodeSchema.md#constructor)

### Methods

- [decode](export._internal_.ManualPairingCodeSchema.md#decode)
- [decodeInternal](export._internal_.ManualPairingCodeSchema.md#decodeinternal)
- [encode](export._internal_.ManualPairingCodeSchema.md#encode)
- [encodeInternal](export._internal_.ManualPairingCodeSchema.md#encodeinternal)
- [validate](export._internal_.ManualPairingCodeSchema.md#validate)

## Constructors

### constructor

• **new ManualPairingCodeSchema**()

#### Inherited from

[Schema](schema_export.Schema.md).[constructor](schema_export.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`ManualPairingData`](../modules/schema_export.md#manualpairingdata)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`ManualPairingData`](../modules/schema_export.md#manualpairingdata)

#### Inherited from

[Schema](schema_export.Schema.md).[decode](schema_export.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ `Protected` **decodeInternal**(`encoded`): [`ManualPairingData`](../modules/schema_export.md#manualpairingdata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`ManualPairingData`](../modules/schema_export.md#manualpairingdata)

#### Overrides

[Schema](schema_export.Schema.md).[decodeInternal](schema_export.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/PairingCodeSchema.ts#L99)

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ManualPairingData`](../modules/schema_export.md#manualpairingdata) |

#### Returns

`string`

#### Inherited from

[Schema](schema_export.Schema.md).[encode](schema_export.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ `Protected` **encodeInternal**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ManualPairingData`](../modules/schema_export.md#manualpairingdata) |

#### Returns

`string`

#### Overrides

[Schema](schema_export.Schema.md).[encodeInternal](schema_export.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:83](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/PairingCodeSchema.ts#L83)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`ManualPairingData`](../modules/schema_export.md#manualpairingdata) |

#### Returns

`void`

#### Inherited from

[Schema](schema_export.Schema.md).[validate](schema_export.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L28)
