[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / QrPairingCodeSchema

# Class: QrPairingCodeSchema

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).QrPairingCodeSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](schema_export.Schema.md)<[`QrCodeData`](../modules/schema_export.md#qrcodedata), `string`\>

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

[Schema](schema_export.Schema.md).[constructor](schema_export.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `version`: [`BitField`](../modules/schema_export.md#bitfield-1)  }\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `version`: [`BitField`](../modules/schema_export.md#bitfield-1)  }\>

#### Inherited from

[Schema](schema_export.Schema.md).[decode](schema_export.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ `Protected` **decodeInternal**(`encoded`): [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `version`: [`BitField`](../modules/schema_export.md#bitfield-1)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `version`: [`BitField`](../modules/schema_export.md#bitfield-1)  }\>

#### Overrides

[Schema](schema_export.Schema.md).[decodeInternal](schema_export.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/PairingCodeSchema.ts#L65)

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `version`: [`BitField`](../modules/schema_export.md#bitfield-1)  }\> |

#### Returns

`string`

#### Inherited from

[Schema](schema_export.Schema.md).[encode](schema_export.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ `Protected` **encodeInternal**(`payloadData`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payloadData` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `version`: [`BitField`](../modules/schema_export.md#bitfield-1)  }\> |

#### Returns

`string`

#### Overrides

[Schema](schema_export.Schema.md).[encodeInternal](schema_export.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/PairingCodeSchema.ts#L61)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema_export.md#bitfield-1) ; `version`: [`BitField`](../modules/schema_export.md#bitfield-1)  }\> |

#### Returns

`void`

#### Inherited from

[Schema](schema_export.Schema.md).[validate](schema_export.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L28)
