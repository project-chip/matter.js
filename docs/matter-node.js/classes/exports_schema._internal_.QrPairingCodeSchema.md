[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / [\<internal\>](../modules/exports_schema._internal_.md) / QrPairingCodeSchema

# Class: QrPairingCodeSchema

[exports/schema](../modules/exports_schema.md).[\<internal\>](../modules/exports_schema._internal_.md).QrPairingCodeSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](exports_schema.Schema.md)\<[`QrCodeData`](../modules/exports_schema.md#qrcodedata), `string`\>

  ↳ **`QrPairingCodeSchema`**

## Table of contents

### Constructors

- [constructor](exports_schema._internal_.QrPairingCodeSchema.md#constructor)

### Methods

- [decode](exports_schema._internal_.QrPairingCodeSchema.md#decode)
- [decodeInternal](exports_schema._internal_.QrPairingCodeSchema.md#decodeinternal)
- [encode](exports_schema._internal_.QrPairingCodeSchema.md#encode)
- [encodeInternal](exports_schema._internal_.QrPairingCodeSchema.md#encodeinternal)
- [validate](exports_schema._internal_.QrPairingCodeSchema.md#validate)

## Constructors

### constructor

• **new QrPairingCodeSchema**(): [`QrPairingCodeSchema`](exports_schema._internal_.QrPairingCodeSchema.md)

#### Returns

[`QrPairingCodeSchema`](exports_schema._internal_.QrPairingCodeSchema.md)

#### Inherited from

[Schema](exports_schema.Schema.md).[constructor](exports_schema.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield)  }\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |
| `validate?` | `boolean` |

#### Returns

[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield)  }\>

#### Inherited from

[Schema](exports_schema.Schema.md).[decode](exports_schema.Schema.md#decode)

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield)  }\>

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:48

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield)  }\> |

#### Returns

`string`

#### Inherited from

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`payloadData`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payloadData` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield)  }\> |

#### Returns

`string`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:47

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)\<\{ `discoveryCapabilities`: [`BitField`](../modules/exports_schema.md#bitfield) ; `discriminator`: [`BitField`](../modules/exports_schema.md#bitfield) ; `flowType`: [`BitFieldEnum`](../modules/exports_schema.md#bitfieldenum)\<[`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)\> ; `passcode`: [`BitField`](../modules/exports_schema.md#bitfield) ; `productId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `vendorId`: [`BitField`](../modules/exports_schema.md#bitfield) ; `version`: [`BitField`](../modules/exports_schema.md#bitfield)  }\> |

#### Returns

`void`

#### Inherited from

[Schema](exports_schema.Schema.md).[validate](exports_schema.Schema.md#validate)

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:15
