[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / QrPairingCodeSchema

# Class: QrPairingCodeSchema

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).QrPairingCodeSchema

Define a schema to encode / decode convert type T to type E.

## Hierarchy

- [`Schema`](schema.Schema.md)<[`QrCodeData`](../modules/schema.md#qrcodedata), `string`\>

  ↳ **`QrPairingCodeSchema`**

## Table of contents

### Constructors

- [constructor](index._internal_.QrPairingCodeSchema.md#constructor)

### Methods

- [decode](index._internal_.QrPairingCodeSchema.md#decode)
- [decodeInternal](index._internal_.QrPairingCodeSchema.md#decodeinternal)
- [encode](index._internal_.QrPairingCodeSchema.md#encode)
- [encodeInternal](index._internal_.QrPairingCodeSchema.md#encodeinternal)
- [validate](index._internal_.QrPairingCodeSchema.md#validate)

## Constructors

### constructor

• **new QrPairingCodeSchema**()

#### Inherited from

[Schema](schema.Schema.md).[constructor](schema.Schema.md#constructor)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema.md#bitfield-1) ; `version`: [`BitField`](../modules/schema.md#bitfield-1)  }\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema.md#bitfield-1) ; `version`: [`BitField`](../modules/schema.md#bitfield-1)  }\>

#### Inherited from

[Schema](schema.Schema.md).[decode](schema.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ `Protected` **decodeInternal**(`encoded`): [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema.md#bitfield-1) ; `version`: [`BitField`](../modules/schema.md#bitfield-1)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema.md#bitfield-1) ; `version`: [`BitField`](../modules/schema.md#bitfield-1)  }\>

#### Overrides

[Schema](schema.Schema.md).[decodeInternal](schema.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L58)

___

### encode

▸ **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema.md#bitfield-1) ; `version`: [`BitField`](../modules/schema.md#bitfield-1)  }\> |

#### Returns

`string`

#### Inherited from

[Schema](schema.Schema.md).[encode](schema.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ `Protected` **encodeInternal**(`payloadData`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payloadData` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema.md#bitfield-1) ; `version`: [`BitField`](../modules/schema.md#bitfield-1)  }\> |

#### Returns

`string`

#### Overrides

[Schema](schema.Schema.md).[encodeInternal](schema.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L54)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<{ `discoveryCapabilities`: [`BitField`](../modules/schema.md#bitfield-1) ; `discriminator`: [`BitField`](../modules/schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](../modules/schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](../modules/schema.md#bitfield-1) ; `productId`: [`BitField`](../modules/schema.md#bitfield-1) ; `vendorId`: [`BitField`](../modules/schema.md#bitfield-1) ; `version`: [`BitField`](../modules/schema.md#bitfield-1)  }\> |

#### Returns

`void`

#### Inherited from

[Schema](schema.Schema.md).[validate](schema.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
