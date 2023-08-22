[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / QrPairingCodeSchema

# Class: QrPairingCodeSchema

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).QrPairingCodeSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<[`QrCodeData`](../modules/exports_schema.md#qrcodedata), `string`\>

  ↳ **`QrPairingCodeSchema`**

## Table of contents

### Constructors

- [constructor](export._internal_.QrPairingCodeSchema.md#constructor)

### Methods

- [decode](export._internal_.QrPairingCodeSchema.md#decode)
- [decodeInternal](export._internal_.QrPairingCodeSchema.md#decodeinternal)
- [encode](export._internal_.QrPairingCodeSchema.md#encode)
- [encodeInternal](export._internal_.QrPairingCodeSchema.md#encodeinternal)
- [validate](export._internal_.QrPairingCodeSchema.md#validate)

## Constructors

### constructor

• **new QrPairingCodeSchema**()

#### Inherited from

[Schema](exports_schema.Schema.md).[constructor](exports_schema.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield-1)  }\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `validate?` | `boolean` |

#### Returns

[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield-1)  }\>

#### Inherited from

[Schema](exports_schema.Schema.md).[decode](exports_schema.Schema.md#decode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ `Protected` **decodeInternal**(`encoded`): [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield-1)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield-1)  }\>

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:47

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield-1)  }\> |

#### Returns

`string`

#### Inherited from

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ `Protected` **encodeInternal**(`payloadData`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payloadData` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield-1)  }\> |

#### Returns

`string`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:46

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield-1) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield-1)  }\> |

#### Returns

`void`

#### Inherited from

[Schema](exports_schema.Schema.md).[validate](exports_schema.Schema.md#validate)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
