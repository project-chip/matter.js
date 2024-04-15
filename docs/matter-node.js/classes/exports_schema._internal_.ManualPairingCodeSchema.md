[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / [\<internal\>](../modules/exports_schema._internal_.md) / ManualPairingCodeSchema

# Class: ManualPairingCodeSchema

[exports/schema](../modules/exports_schema.md).[\<internal\>](../modules/exports_schema._internal_.md).ManualPairingCodeSchema

See MatterSpecification.v10.Core § 5.1.4.1 Table 38/39/40

## Hierarchy

- [`Schema`](exports_schema.Schema.md)\<[`ManualPairingData`](../modules/exports_schema.md#manualpairingdata), `string`\>

  ↳ **`ManualPairingCodeSchema`**

## Table of contents

### Constructors

- [constructor](exports_schema._internal_.ManualPairingCodeSchema.md#constructor)

### Methods

- [decode](exports_schema._internal_.ManualPairingCodeSchema.md#decode)
- [decodeInternal](exports_schema._internal_.ManualPairingCodeSchema.md#decodeinternal)
- [encode](exports_schema._internal_.ManualPairingCodeSchema.md#encode)
- [encodeInternal](exports_schema._internal_.ManualPairingCodeSchema.md#encodeinternal)
- [validate](exports_schema._internal_.ManualPairingCodeSchema.md#validate)

## Constructors

### constructor

• **new ManualPairingCodeSchema**(): [`ManualPairingCodeSchema`](exports_schema._internal_.ManualPairingCodeSchema.md)

#### Returns

[`ManualPairingCodeSchema`](exports_schema._internal_.ManualPairingCodeSchema.md)

#### Inherited from

[Schema](exports_schema.Schema.md).[constructor](exports_schema.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`ManualPairingData`](../modules/exports_schema.md#manualpairingdata)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `validate?` | `boolean` |

#### Returns

[`ManualPairingData`](../modules/exports_schema.md#manualpairingdata)

#### Inherited from

[Schema](exports_schema.Schema.md).[decode](exports_schema.Schema.md#decode)

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`ManualPairingData`](../modules/exports_schema.md#manualpairingdata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`ManualPairingData`](../modules/exports_schema.md#manualpairingdata)

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:61

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ManualPairingData`](../modules/exports_schema.md#manualpairingdata) |

#### Returns

`string`

#### Inherited from

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ManualPairingData`](../modules/exports_schema.md#manualpairingdata) |

#### Returns

`string`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:60

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`ManualPairingData`](../modules/exports_schema.md#manualpairingdata) |

#### Returns

`void`

#### Inherited from

[Schema](exports_schema.Schema.md).[validate](exports_schema.Schema.md#validate)

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:15
