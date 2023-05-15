[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/schema

# Module: exports/schema

## Table of contents

### Enumerations

- [CommissionningFlowType](../enums/exports_schema.CommissionningFlowType.md)

### Classes

- [BitmapSchemaInternal](../classes/exports_schema.BitmapSchemaInternal.md)
- [ByteArrayBitmapSchemaInternal](../classes/exports_schema.ByteArrayBitmapSchemaInternal.md)
- [QrCodeSchema](../classes/exports_schema.QrCodeSchema.md)
- [Schema](../classes/exports_schema.Schema.md)

### Type Aliases

- [BitField](exports_schema.md#bitfield)
- [BitFieldEnum](exports_schema.md#bitfieldenum)
- [BitFlag](exports_schema.md#bitflag)
- [BitSchema](exports_schema.md#bitschema)
- [ManualPairingData](exports_schema.md#manualpairingdata)
- [QrCodeData](exports_schema.md#qrcodedata)
- [TypeFromBitSchema](exports_schema.md#typefrombitschema)
- [TypeFromBitmapSchema](exports_schema.md#typefrombitmapschema)

### Variables

- [Base38](exports_schema.md#base38)
- [DiscoveryCapabilitiesSchema](exports_schema.md#discoverycapabilitiesschema)
- [ManualPairingCodeCodec](exports_schema.md#manualpairingcodecodec)
- [QrCode](exports_schema.md#qrcode)
- [QrPairingCodeCodec](exports_schema.md#qrpairingcodecodec)

### Functions

- [BitField](exports_schema.md#bitfield-1)
- [BitFieldEnum](exports_schema.md#bitfieldenum-1)
- [BitFlag](exports_schema.md#bitflag-1)
- [BitmapSchema](exports_schema.md#bitmapschema)
- [ByteArrayBitmapSchema](exports_schema.md#bytearraybitmapschema)

## Type Aliases

### BitField

Ƭ **BitField**: [`BitRange`](index._internal_.md#bitrange-1)<`number`, [`Number`](index._internal_.md#number)\>

Defines the bit position and bit length of a numeric value.

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:24

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:25

___

### BitFieldEnum

Ƭ **BitFieldEnum**<`E`\>: [`BitRange`](index._internal_.md#bitrange-1)<`E`, [`Enum`](index._internal_.md#enum)\>

Defines the bit position and bit length of an enum flag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `number` |

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:27

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:28

___

### BitFlag

Ƭ **BitFlag**: [`BitRange`](index._internal_.md#bitrange-1)<`boolean`, [`Flag`](index._internal_.md#flag)\>

Defines the bit position of a boolean flag.

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:21

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:22

___

### BitSchema

Ƭ **BitSchema**: `Object`

#### Index signature

▪ [key: `string`]: [`BitFlag`](exports_schema.md#bitflag-1) \| [`BitField`](exports_schema.md#bitfield-1) \| [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<`any`\>

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:29

___

### ManualPairingData

Ƭ **ManualPairingData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `discriminator?` | `number` |
| `passcode` | `number` |
| `productId?` | `number` |
| `shortDiscriminator?` | `number` |
| `vendorId?` | `number` |

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:42

___

### QrCodeData

Ƭ **QrCodeData**: [`TypeFromBitmapSchema`](exports_schema.md#typefrombitmapschema)<typeof [`QrCodeDataSchema`](index._internal_.md#qrcodedataschema)\>

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:36

___

### TypeFromBitSchema

Ƭ **TypeFromBitSchema**<`T`\>: { [K in keyof T]: T[K] extends BitFieldEnum<infer E\> ? E : T[K] extends BitField ? number : boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:32

___

### TypeFromBitmapSchema

Ƭ **TypeFromBitmapSchema**<`S`\>: `S` extends [`Schema`](../classes/exports_schema.Schema.md)<infer T, `any`\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Schema`](../classes/exports_schema.Schema.md)<`any`, `any`\> |

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:35

## Variables

### Base38

• `Const` **Base38**: [`Base38Schema`](../classes/index._internal_.Base38Schema.md)

#### Defined in

packages/matter.js/dist/cjs/schema/Base38Schema.d.ts:15

___

### DiscoveryCapabilitiesSchema

• `Const` **DiscoveryCapabilitiesSchema**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md)

See MatterCoreSpecificationV1_0 § 5.1.3.1 Table 36

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:18

___

### ManualPairingCodeCodec

• `Const` **ManualPairingCodeCodec**: [`ManualPairingCodeSchema`](../classes/index._internal_.ManualPairingCodeSchema.md)

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:54

___

### QrCode

• `Const` **QrCode**: [`QrCodeSchema`](../classes/exports_schema.QrCodeSchema.md)

#### Defined in

packages/matter.js/dist/cjs/schema/QrCodeSchema.d.ts:12

___

### QrPairingCodeCodec

• `Const` **QrPairingCodeCodec**: [`QrPairingCodeSchema`](../classes/index._internal_.QrPairingCodeSchema.md)

#### Defined in

packages/matter.js/dist/cjs/schema/PairingCodeSchema.d.ts:41

## Functions

### BitField

▸ **BitField**(`offset`, `length`): [`BitField`](exports_schema.md#bitfield-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitField`](exports_schema.md#bitfield-1)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:25

___

### BitFieldEnum

▸ **BitFieldEnum**<`E`\>(`offset`, `length`): [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<`E`\>

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:28

___

### BitFlag

▸ **BitFlag**(`offset`): [`BitFlag`](exports_schema.md#bitflag-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`BitFlag`](exports_schema.md#bitflag-1)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:22

___

### BitmapSchema

▸ **BitmapSchema**<`T`\>(`bitSchemas`): [`BitmapSchemaInternal`](../classes/exports_schema.BitmapSchemaInternal.md)<`T`\>

Declares a bitmap schema by indicating the bit position and their names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`BitmapSchemaInternal`](../classes/exports_schema.BitmapSchemaInternal.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:52

___

### ByteArrayBitmapSchema

▸ **ByteArrayBitmapSchema**<`T`\>(`bitSchemas`): [`ByteArrayBitmapSchemaInternal`](../classes/exports_schema.ByteArrayBitmapSchemaInternal.md)<`T`\>

Declares a bitmap schema backed by a ByteArray by indicating the bit position and their names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`ByteArrayBitmapSchemaInternal`](../classes/exports_schema.ByteArrayBitmapSchemaInternal.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:54
