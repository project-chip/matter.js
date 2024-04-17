[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/schema

# Module: exports/schema

## Table of contents

### Modules

- [\<internal\>](exports_schema._internal_.md)

### Enumerations

- [CommissioningFlowType](../enums/exports_schema.CommissioningFlowType.md)

### Classes

- [BitmapSchemaInternal](../classes/exports_schema.BitmapSchemaInternal.md)
- [ByteArrayBitmapSchemaInternal](../classes/exports_schema.ByteArrayBitmapSchemaInternal.md)
- [QrCodeSchema](../classes/exports_schema.QrCodeSchema.md)
- [Schema](../classes/exports_schema.Schema.md)

### Type Aliases

- [BitField](exports_schema.md#bitfield)
- [BitFieldEnum](exports_schema.md#bitfieldenum)
- [BitFlag](exports_schema.md#bitflag)
- [BitFlags](exports_schema.md#bitflags)
- [BitSchema](exports_schema.md#bitschema)
- [FlagsToBitmap](exports_schema.md#flagstobitmap)
- [ManualPairingData](exports_schema.md#manualpairingdata)
- [QrCodeData](exports_schema.md#qrcodedata)
- [TypeFromBitSchema](exports_schema.md#typefrombitschema)
- [TypeFromBitmapSchema](exports_schema.md#typefrombitmapschema)
- [TypeFromPartialBitSchema](exports_schema.md#typefrompartialbitschema)

### Variables

- [Base38](exports_schema.md#base38)
- [DiscoveryCapabilitiesBitmap](exports_schema.md#discoverycapabilitiesbitmap)
- [DiscoveryCapabilitiesSchema](exports_schema.md#discoverycapabilitiesschema)
- [ManualPairingCodeCodec](exports_schema.md#manualpairingcodecodec)
- [QrCode](exports_schema.md#qrcode)
- [QrPairingCodeCodec](exports_schema.md#qrpairingcodecodec)

### Functions

- [BitField](exports_schema.md#bitfield-1)
- [BitFieldEnum](exports_schema.md#bitfieldenum-1)
- [BitFlag](exports_schema.md#bitflag-1)
- [BitFlags](exports_schema.md#bitflags-1)
- [BitmapSchema](exports_schema.md#bitmapschema)
- [BitsFromPartial](exports_schema.md#bitsfrompartial)
- [ByteArrayBitmapSchema](exports_schema.md#bytearraybitmapschema)

## Type Aliases

### BitField

Ƭ **BitField**: [`BitRange`](exports_schema._internal_.md#bitrange)\<`number`, [`Number`](exports_schema._internal_.md#number)\>

Defines the bit position and bit length of a numeric value.

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:25

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:26

___

### BitFieldEnum

Ƭ **BitFieldEnum**\<`E`\>: [`BitRange`](exports_schema._internal_.md#bitrange)\<`E`, [`Enum`](exports_schema._internal_.md#enum)\>

Defines the bit position and bit length of an enum flag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `number` |

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:28

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:29

___

### BitFlag

Ƭ **BitFlag**: [`BitRange`](exports_schema._internal_.md#bitrange)\<`boolean`, [`Flag`](exports_schema._internal_.md#flag)\>

Defines the bit position of a boolean flag.

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:22

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:23

___

### BitFlags

Ƭ **BitFlags**\<`T`, `F`\>: [`Merge`](util_export.md#merge)\<\{ [key in keyof T]: false }, [`FlagsToBitmap`](exports_schema.md#flagstobitmap)\<`F`\>\>

Create a type with specified bit flags set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `F` | extends `Capitalize`\<`Extract`\<keyof `T`, `string`\>\>[] |

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:69

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:65

___

### BitSchema

Ƭ **BitSchema**: `Object`

#### Index signature

▪ [key: `string`]: [`BitFlag`](exports_schema.md#bitflag) \| [`BitField`](exports_schema.md#bitfield) \| [`BitFieldEnum`](exports_schema.md#bitfieldenum)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:30

___

### FlagsToBitmap

Ƭ **FlagsToBitmap**\<`T`\>: \{ [name in Uncapitalize\<T[number]\>]: true }

Create a partial bitmap from a flag sequence

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:61

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
| `vendorId?` | [`VendorId`](exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:51

___

### QrCodeData

Ƭ **QrCodeData**: [`TypeFromBitmapSchema`](exports_schema.md#typefrombitmapschema)\<typeof [`QrCodeDataSchema`](exports_schema._internal_.md#qrcodedataschema)\>

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:45

___

### TypeFromBitSchema

Ƭ **TypeFromBitSchema**\<`T`\>: \{ [K in keyof T]: T[K] extends BitFieldEnum\<infer E\> ? E : T[K] extends BitField ? number : boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:33

___

### TypeFromBitmapSchema

Ƭ **TypeFromBitmapSchema**\<`S`\>: `S` extends [`Schema`](../classes/exports_schema.Schema.md)\<infer T, `any`\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Schema`](../classes/exports_schema.Schema.md)\<`any`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:39

___

### TypeFromPartialBitSchema

Ƭ **TypeFromPartialBitSchema**\<`T`\>: \{ [K in keyof T]?: T[K] extends BitFieldEnum\<infer E\> ? E : T[K] extends BitField ? number : boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:36

## Variables

### Base38

• `Const` **Base38**: [`Base38Schema`](../classes/exports_schema._internal_.Base38Schema.md)

#### Defined in

packages/matter.js/dist/esm/schema/Base38Schema.d.ts:15

___

### DiscoveryCapabilitiesBitmap

• `Const` **DiscoveryCapabilitiesBitmap**: `Object`

See MatterSpecification.v10.Core § 5.1.3.1 Table 36

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ble` | [`BitFlag`](exports_schema.md#bitflag) | Device supports BLE for discovery when not commissioned. |
| `onIpNetwork` | [`BitFlag`](exports_schema.md#bitflag) | Device is already on the IP network. |
| `softAccessPoint` | [`BitFlag`](exports_schema.md#bitflag) | Device supports hosting a Soft-AP when not commissioned. |

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:19

___

### DiscoveryCapabilitiesSchema

• `Const` **DiscoveryCapabilitiesSchema**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md)

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:27

___

### ManualPairingCodeCodec

• `Const` **ManualPairingCodeCodec**: [`ManualPairingCodeSchema`](../classes/exports_schema._internal_.ManualPairingCodeSchema.md)

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:63

___

### QrCode

• `Const` **QrCode**: [`QrCodeSchema`](../classes/exports_schema.QrCodeSchema.md)

#### Defined in

packages/matter.js/dist/esm/schema/QrCodeSchema.d.ts:13

___

### QrPairingCodeCodec

• `Const` **QrPairingCodeCodec**: [`QrPairingCodeSchema`](../classes/exports_schema._internal_.QrPairingCodeSchema.md)

#### Defined in

packages/matter.js/dist/esm/schema/PairingCodeSchema.d.ts:50

## Functions

### BitField

▸ **BitField**(`offset`, `length`): [`BitField`](exports_schema.md#bitfield)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitField`](exports_schema.md#bitfield)

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:26

___

### BitFieldEnum

▸ **BitFieldEnum**\<`E`\>(`offset`, `length`): [`BitFieldEnum`](exports_schema.md#bitfieldenum)\<`E`\>

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

[`BitFieldEnum`](exports_schema.md#bitfieldenum)\<`E`\>

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:29

___

### BitFlag

▸ **BitFlag**(`offset`): [`BitFlag`](exports_schema.md#bitflag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`BitFlag`](exports_schema.md#bitflag)

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:23

___

### BitFlags

▸ **BitFlags**\<`T`, `F`\>(`bitSchemas`, `...flags`): [`BitFlags`](exports_schema.md#bitflags)\<`T`, `F`\>

Create a bitmap schema with a named subset of flags set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `F` | extends `Capitalize`\<`Extract`\<keyof `T`, `string`\>\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |
| `...flags` | [...F[]] |

#### Returns

[`BitFlags`](exports_schema.md#bitflags)\<`T`, `F`\>

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:69

___

### BitmapSchema

▸ **BitmapSchema**\<`T`\>(`bitSchemas`): [`BitmapSchemaInternal`](../classes/exports_schema.BitmapSchemaInternal.md)\<`T`\>

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

[`BitmapSchemaInternal`](../classes/exports_schema.BitmapSchemaInternal.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:73

___

### BitsFromPartial

▸ **BitsFromPartial**\<`S`, `P`\>(`schema`, `bits`): [`TypeFromBitSchema`](exports_schema.md#typefrombitschema)\<`S`\>

Create a full bitmap schema from a partial bitmap schema

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `P` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<`S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `S` |
| `bits` | `P` |

#### Returns

[`TypeFromBitSchema`](exports_schema.md#typefrombitschema)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:71

___

### ByteArrayBitmapSchema

▸ **ByteArrayBitmapSchema**\<`T`\>(`bitSchemas`): [`ByteArrayBitmapSchemaInternal`](../classes/exports_schema.ByteArrayBitmapSchemaInternal.md)\<`T`\>

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

[`ByteArrayBitmapSchemaInternal`](../classes/exports_schema.ByteArrayBitmapSchemaInternal.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/schema/BitmapSchema.d.ts:75
