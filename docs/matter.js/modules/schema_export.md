[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / schema/export

# Module: schema/export

## Table of contents

### Modules

- [\<internal\>](schema_export._internal_.md)

### Enumerations

- [CommissioningFlowType](../enums/schema_export.CommissioningFlowType.md)

### Classes

- [BitmapSchemaInternal](../classes/schema_export.BitmapSchemaInternal.md)
- [ByteArrayBitmapSchemaInternal](../classes/schema_export.ByteArrayBitmapSchemaInternal.md)
- [QrCodeSchema](../classes/schema_export.QrCodeSchema.md)
- [Schema](../classes/schema_export.Schema.md)

### Type Aliases

- [BitField](schema_export.md#bitfield)
- [BitFieldEnum](schema_export.md#bitfieldenum)
- [BitFlag](schema_export.md#bitflag)
- [BitFlags](schema_export.md#bitflags)
- [BitSchema](schema_export.md#bitschema)
- [FlagsToBitmap](schema_export.md#flagstobitmap)
- [ManualPairingData](schema_export.md#manualpairingdata)
- [QrCodeData](schema_export.md#qrcodedata)
- [TypeFromBitSchema](schema_export.md#typefrombitschema)
- [TypeFromBitmapSchema](schema_export.md#typefrombitmapschema)
- [TypeFromPartialBitSchema](schema_export.md#typefrompartialbitschema)

### Variables

- [Base38](schema_export.md#base38)
- [DiscoveryCapabilitiesBitmap](schema_export.md#discoverycapabilitiesbitmap)
- [DiscoveryCapabilitiesSchema](schema_export.md#discoverycapabilitiesschema)
- [ManualPairingCodeCodec](schema_export.md#manualpairingcodecodec)
- [QrCode](schema_export.md#qrcode)
- [QrPairingCodeCodec](schema_export.md#qrpairingcodecodec)

### Functions

- [BitField](schema_export.md#bitfield-1)
- [BitFieldEnum](schema_export.md#bitfieldenum-1)
- [BitFlag](schema_export.md#bitflag-1)
- [BitFlags](schema_export.md#bitflags-1)
- [BitmapSchema](schema_export.md#bitmapschema)
- [BitsFromPartial](schema_export.md#bitsfrompartial)
- [ByteArrayBitmapSchema](schema_export.md#bytearraybitmapschema)

## Type Aliases

### BitField

Ƭ **BitField**: [`BitRange`](schema_export._internal_.md#bitrange)\<`number`, [`Number`](schema_export._internal_.md#number)\>

Defines the bit position and bit length of a numeric value.

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L36)

[packages/matter.js/src/schema/BitmapSchema.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L37)

___

### BitFieldEnum

Ƭ **BitFieldEnum**\<`E`\>: [`BitRange`](schema_export._internal_.md#bitrange)\<`E`, [`Enum`](schema_export._internal_.md#enum)\>

Defines the bit position and bit length of an enum flag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `number` |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L40)

[packages/matter.js/src/schema/BitmapSchema.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L41)

___

### BitFlag

Ƭ **BitFlag**: [`BitRange`](schema_export._internal_.md#bitrange)\<`boolean`, [`Flag`](schema_export._internal_.md#flag)\>

Defines the bit position of a boolean flag.

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L32)

[packages/matter.js/src/schema/BitmapSchema.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L33)

___

### BitFlags

Ƭ **BitFlags**\<`T`, `F`\>: [`Merge`](util_export.md#merge)\<\{ [key in keyof T]: false }, [`FlagsToBitmap`](schema_export.md#flagstobitmap)\<`F`\>\>

Create a type with specified bit flags set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |
| `F` | extends `Capitalize`\<`Extract`\<keyof `T`, `string`\>\>[] |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L202)

[packages/matter.js/src/schema/BitmapSchema.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L196)

___

### BitSchema

Ƭ **BitSchema**: `Object`

#### Index signature

▪ [key: `string`]: [`BitFlag`](schema_export.md#bitflag) \| [`BitField`](schema_export.md#bitfield) \| [`BitFieldEnum`](schema_export.md#bitfieldenum)\<`any`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L44)

___

### FlagsToBitmap

Ƭ **FlagsToBitmap**\<`T`\>: \{ [name in Uncapitalize\<T[number]\>]: true }

Create a partial bitmap from a flag sequence

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string`[] |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:191](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L191)

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
| `vendorId?` | [`VendorId`](datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L73)

___

### QrCodeData

Ƭ **QrCodeData**: [`TypeFromBitmapSchema`](schema_export.md#typefrombitmapschema)\<typeof [`QrCodeDataSchema`](schema_export._internal_.md#qrcodedataschema)\>

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L56)

___

### TypeFromBitSchema

Ƭ **TypeFromBitSchema**\<`T`\>: \{ [K in keyof T]: T[K] extends BitFieldEnum\<infer E\> ? E : T[K] extends BitField ? number : boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L45)

___

### TypeFromBitmapSchema

Ƭ **TypeFromBitmapSchema**\<`S`\>: `S` extends [`Schema`](../classes/schema_export.Schema.md)\<infer T, `any`\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Schema`](../classes/schema_export.Schema.md)\<`any`, `any`\> |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L51)

___

### TypeFromPartialBitSchema

Ƭ **TypeFromPartialBitSchema**\<`T`\>: \{ [K in keyof T]?: T[K] extends BitFieldEnum\<infer E\> ? E : T[K] extends BitField ? number : boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L48)

## Variables

### Base38

• `Const` **Base38**: [`Base38Schema`](../classes/schema_export._internal_.Base38Schema.md)

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/Base38Schema.ts#L96)

___

### DiscoveryCapabilitiesBitmap

• `Const` **DiscoveryCapabilitiesBitmap**: `Object`

See MatterSpecification.v10.Core § 5.1.3.1 Table 36

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ble` | [`BitFlag`](schema_export.md#bitflag) | Device supports BLE for discovery when not commissioned. |
| `onIpNetwork` | [`BitFlag`](schema_export.md#bitflag) | Device is already on the IP network. |
| `softAccessPoint` | [`BitFlag`](schema_export.md#bitflag) | Device supports hosting a Soft-AP when not commissioned. |

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L34)

___

### DiscoveryCapabilitiesSchema

• `Const` **DiscoveryCapabilitiesSchema**: [`BitmapSchemaInternal`](../classes/schema_export.BitmapSchemaInternal.md)\<\{ `ble`: [`BitFlag`](schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](schema_export.md#bitflag)  }\>

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L44)

___

### ManualPairingCodeCodec

• `Const` **ManualPairingCodeCodec**: [`ManualPairingCodeSchema`](../classes/schema_export._internal_.ManualPairingCodeSchema.md)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L119)

___

### QrCode

• `Const` **QrCode**: [`QrCodeSchema`](../classes/schema_export.QrCodeSchema.md)

#### Defined in

[packages/matter.js/src/schema/QrCodeSchema.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/QrCodeSchema.ts#L217)

___

### QrPairingCodeCodec

• `Const` **QrPairingCodeCodec**: [`QrPairingCodeSchema`](../classes/schema_export._internal_.QrPairingCodeSchema.md)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/PairingCodeSchema.ts#L71)

## Functions

### BitField

▸ **BitField**(`offset`, `length`): [`BitField`](schema_export.md#bitfield)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitField`](schema_export.md#bitfield)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L37)

___

### BitFieldEnum

▸ **BitFieldEnum**\<`E`\>(`offset`, `length`): [`BitFieldEnum`](schema_export.md#bitfieldenum)\<`E`\>

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

[`BitFieldEnum`](schema_export.md#bitfieldenum)\<`E`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L41)

___

### BitFlag

▸ **BitFlag**(`offset`): [`BitFlag`](schema_export.md#bitflag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`BitFlag`](schema_export.md#bitflag)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L33)

___

### BitFlags

▸ **BitFlags**\<`T`, `F`\>(`bitSchemas`, `...flags`): [`BitFlags`](schema_export.md#bitflags)\<`T`, `F`\>

Create a bitmap schema with a named subset of flags set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |
| `F` | extends `Capitalize`\<`Extract`\<keyof `T`, `string`\>\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |
| `...flags` | [...F[]] |

#### Returns

[`BitFlags`](schema_export.md#bitflags)\<`T`, `F`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L202)

___

### BitmapSchema

▸ **BitmapSchema**\<`T`\>(`bitSchemas`): [`BitmapSchemaInternal`](../classes/schema_export.BitmapSchemaInternal.md)\<`T`\>

Declares a bitmap schema by indicating the bit position and their names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`BitmapSchemaInternal`](../classes/schema_export.BitmapSchemaInternal.md)\<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L231)

___

### BitsFromPartial

▸ **BitsFromPartial**\<`S`, `P`\>(`schema`, `bits`): [`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<`S`\>

Create a full bitmap schema from a partial bitmap schema

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BitSchema`](schema_export.md#bitschema) |
| `P` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<`S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `S` |
| `bits` | `P` |

#### Returns

[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<`S`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L215)

___

### ByteArrayBitmapSchema

▸ **ByteArrayBitmapSchema**\<`T`\>(`bitSchemas`): [`ByteArrayBitmapSchemaInternal`](../classes/schema_export.ByteArrayBitmapSchemaInternal.md)\<`T`\>

Declares a bitmap schema backed by a ByteArray by indicating the bit position and their names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`ByteArrayBitmapSchemaInternal`](../classes/schema_export.ByteArrayBitmapSchemaInternal.md)\<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/BitmapSchema.ts#L234)
