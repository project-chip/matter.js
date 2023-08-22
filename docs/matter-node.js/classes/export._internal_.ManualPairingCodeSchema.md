[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / ManualPairingCodeSchema

# Class: ManualPairingCodeSchema

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).ManualPairingCodeSchema

See [MatterCoreSpecificationV1_0](../interfaces/exports_spec.MatterCoreSpecificationV1_0.md) § 5.1.4.1 Table 38/39/40

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<[`ManualPairingData`](../modules/exports_schema.md#manualpairingdata), `string`\>

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ `Protected` **decodeInternal**(`encoded`): [`ManualPairingData`](../modules/exports_schema.md#manualpairingdata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`ManualPairingData`](../modules/exports_schema.md#manualpairingdata)

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:60

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ `Protected` **encodeInternal**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ManualPairingData`](../modules/exports_schema.md#manualpairingdata) |

#### Returns

`string`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:59

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
