[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / schema

# Module: schema

## Table of contents

### Enumerations

- [CommissionningFlowType](../enums/schema.CommissionningFlowType.md)

### Classes

- [BitmapSchemaInternal](../classes/schema.BitmapSchemaInternal.md)
- [ByteArrayBitmapSchemaInternal](../classes/schema.ByteArrayBitmapSchemaInternal.md)
- [QrCodeSchema](../classes/schema.QrCodeSchema.md)
- [Schema](../classes/schema.Schema.md)

### Type Aliases

- [BitField](schema.md#bitfield)
- [BitFieldEnum](schema.md#bitfieldenum)
- [BitFlag](schema.md#bitflag)
- [BitSchema](schema.md#bitschema)
- [ManualPairingData](schema.md#manualpairingdata)
- [QrCodeData](schema.md#qrcodedata)
- [TypeFromBitSchema](schema.md#typefrombitschema)
- [TypeFromBitmapSchema](schema.md#typefrombitmapschema)

### Variables

- [Base38](schema.md#base38)
- [DiscoveryCapabilitiesSchema](schema.md#discoverycapabilitiesschema)
- [ManualPairingCodeCodec](schema.md#manualpairingcodecodec)
- [QrCode](schema.md#qrcode)
- [QrPairingCodeCodec](schema.md#qrpairingcodecodec)

### Functions

- [BitField](schema.md#bitfield-1)
- [BitFieldEnum](schema.md#bitfieldenum-1)
- [BitFlag](schema.md#bitflag-1)
- [BitmapSchema](schema.md#bitmapschema)
- [ByteArrayBitmapSchema](schema.md#bytearraybitmapschema)

## Type Aliases

### BitField

Ƭ **BitField**: [`BitRange`](index._internal_.md#bitrange-1)<`number`, [`Number`](index._internal_.md#number)\>

Defines the bit position and bit length of a numeric value.

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L24)

[packages/matter.js/src/schema/BitmapSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L25)

___

### BitFieldEnum

Ƭ **BitFieldEnum**<`E`\>: [`BitRange`](index._internal_.md#bitrange-1)<`E`, [`Enum`](index._internal_.md#enum)\>

Defines the bit position and bit length of an enum flag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `number` |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L28)

[packages/matter.js/src/schema/BitmapSchema.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L29)

___

### BitFlag

Ƭ **BitFlag**: [`BitRange`](index._internal_.md#bitrange-1)<`boolean`, [`Flag`](index._internal_.md#flag)\>

Defines the bit position of a boolean flag.

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L20)

[packages/matter.js/src/schema/BitmapSchema.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L21)

___

### BitSchema

Ƭ **BitSchema**: `Object`

#### Index signature

▪ [key: `string`]: [`BitFlag`](schema.md#bitflag-1) \| [`BitField`](schema.md#bitfield-1) \| [`BitFieldEnum`](schema.md#bitfieldenum-1)<`any`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L31)

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

[packages/matter.js/src/schema/PairingCodeSchema.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L66)

___

### QrCodeData

Ƭ **QrCodeData**: [`TypeFromBitmapSchema`](schema.md#typefrombitmapschema)<typeof [`QrCodeDataSchema`](index._internal_.md#qrcodedataschema)\>

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L49)

___

### TypeFromBitSchema

Ƭ **TypeFromBitSchema**<`T`\>: { [K in keyof T]: T[K] extends BitFieldEnum<infer E\> ? E : T[K] extends BitField ? number : boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema.md#bitschema) |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L32)

___

### TypeFromBitmapSchema

Ƭ **TypeFromBitmapSchema**<`S`\>: `S` extends [`Schema`](../classes/schema.Schema.md)<infer T, `any`\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Schema`](../classes/schema.Schema.md)<`any`, `any`\> |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L33)

## Variables

### Base38

• `Const` **Base38**: [`Base38Schema`](../classes/index._internal_.Base38Schema.md)

#### Defined in

[packages/matter.js/src/schema/Base38Schema.ts:96](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Base38Schema.ts#L96)

___

### DiscoveryCapabilitiesSchema

• `Const` **DiscoveryCapabilitiesSchema**: [`BitmapSchemaInternal`](../classes/schema.BitmapSchemaInternal.md)<{ `ble`: [`BitFlag`](schema.md#bitflag-1) ; `onIpNetwork`: [`BitFlag`](schema.md#bitflag-1) ; `softAccessPoint`: [`BitFlag`](schema.md#bitflag-1)  }\>

See [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 5.1.3.1 Table 36

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L28)

___

### ManualPairingCodeCodec

• `Const` **ManualPairingCodeCodec**: [`ManualPairingCodeSchema`](../classes/index._internal_.ManualPairingCodeSchema.md)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:112](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L112)

___

### QrCode

• `Const` **QrCode**: [`QrCodeSchema`](../classes/schema.QrCodeSchema.md)

#### Defined in

[packages/matter.js/src/schema/QrCodeSchema.ts:212](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/QrCodeSchema.ts#L212)

___

### QrPairingCodeCodec

• `Const` **QrPairingCodeCodec**: [`QrPairingCodeSchema`](../classes/index._internal_.QrPairingCodeSchema.md)

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L64)

## Functions

### BitField

▸ **BitField**(`offset`, `length`): [`BitField`](schema.md#bitfield-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitField`](schema.md#bitfield-1)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L25)

___

### BitFieldEnum

▸ **BitFieldEnum**<`E`\>(`offset`, `length`): [`BitFieldEnum`](schema.md#bitfieldenum-1)<`E`\>

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

[`BitFieldEnum`](schema.md#bitfieldenum-1)<`E`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L29)

___

### BitFlag

▸ **BitFlag**(`offset`): [`BitFlag`](schema.md#bitflag-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`BitFlag`](schema.md#bitflag-1)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L21)

___

### BitmapSchema

▸ **BitmapSchema**<`T`\>(`bitSchemas`): [`BitmapSchemaInternal`](../classes/schema.BitmapSchemaInternal.md)<`T`\>

Declares a bitmap schema by indicating the bit position and their names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`BitmapSchemaInternal`](../classes/schema.BitmapSchemaInternal.md)<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:166](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L166)

___

### ByteArrayBitmapSchema

▸ **ByteArrayBitmapSchema**<`T`\>(`bitSchemas`): [`ByteArrayBitmapSchemaInternal`](../classes/schema.ByteArrayBitmapSchemaInternal.md)<`T`\>

Declares a bitmap schema backed by a ByteArray by indicating the bit position and their names.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`ByteArrayBitmapSchemaInternal`](../classes/schema.ByteArrayBitmapSchemaInternal.md)<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:169](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L169)
