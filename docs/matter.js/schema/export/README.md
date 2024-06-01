[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / schema/export

# schema/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Enumerations

- [CommissioningFlowType](enumerations/CommissioningFlowType.md)

### Classes

- [BitmapSchemaInternal](classes/BitmapSchemaInternal.md)
- [ByteArrayBitmapSchemaInternal](classes/ByteArrayBitmapSchemaInternal.md)
- [QrCodeSchema](classes/QrCodeSchema.md)
- [Schema](classes/Schema.md)

## Type Aliases

### BitField

> **BitField**: [`BitRange`](-internal-/README.md#bitrangetttype)\<`number`, [`Number`](-internal-/README.md#number)\>

Defines the bit position and bit length of a numeric value.

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L36)

***

### BitFieldEnum\<E\>

> **BitFieldEnum**\<`E`\>: [`BitRange`](-internal-/README.md#bitrangetttype)\<`E`, [`Enum`](-internal-/README.md#enum)\>

Defines the bit position and bit length of an enum flag.

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* `number` |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L40)

***

### BitFlag

> **BitFlag**: [`BitRange`](-internal-/README.md#bitrangetttype)\<`boolean`, [`Flag`](-internal-/README.md#flag)\>

Defines the bit position of a boolean flag.

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L32)

***

### BitFlags\<T, F\>

> **BitFlags**\<`T`, `F`\>: [`Merge`](../../util/export/README.md#mergeab)\<`{ [key in keyof T]: false }`, [`FlagsToBitmap`](README.md#flagstobitmapt)\<`F`\>\>

Create a type with specified bit flags set

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](README.md#bitschema) |
| `F` *extends* `Capitalize`\<`Extract`\<keyof `T`, `string`\>\>[] |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L202)

***

### BitSchema

> **BitSchema**: `object`

#### Index signature

 \[`key`: `string`\]: [`BitFlag`](README.md#bitflag) \| [`BitField`](README.md#bitfield) \| [`BitFieldEnum`](README.md#bitfieldenume)\<`any`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L44)

***

### FlagsToBitmap\<T\>

> **FlagsToBitmap**\<`T`\>: `{ [name in Uncapitalize<T[number]>]: true }`

Create a partial bitmap from a flag sequence

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string`[] |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:191](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L191)

***

### ManualPairingData

> **ManualPairingData**: `object`

#### Type declaration

##### discriminator?

> `optional` **discriminator**: `number`

##### passcode

> **passcode**: `number`

##### productId?

> `optional` **productId**: `number`

##### shortDiscriminator?

> `optional` **shortDiscriminator**: `number`

##### vendorId?

> `optional` **vendorId**: [`VendorId`](../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L73)

***

### QrCodeData

> **QrCodeData**: [`TypeFromBitmapSchema`](README.md#typefrombitmapschemas)\<*typeof* [`QrCodeDataSchema`](-internal-/README.md#qrcodedataschema)\>

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L56)

***

### TypeFromBitSchema\<T\>

> **TypeFromBitSchema**\<`T`\>: `{ [K in keyof T]: T[K] extends BitFieldEnum<infer E> ? E : T[K] extends BitField ? number : boolean }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](README.md#bitschema) |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L45)

***

### TypeFromBitmapSchema\<S\>

> **TypeFromBitmapSchema**\<`S`\>: `S` *extends* [`Schema`](classes/Schema.md)\<infer T, `any`\> ? `T` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `S` *extends* [`Schema`](classes/Schema.md)\<`any`, `any`\> |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L51)

***

### TypeFromPartialBitSchema\<T\>

> **TypeFromPartialBitSchema**\<`T`\>: `{ [K in keyof T]?: T[K] extends BitFieldEnum<infer E> ? E : T[K] extends BitField ? number : boolean }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](README.md#bitschema) |

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L48)

## Variables

### Base38

> `const` **Base38**: [`Base38Schema`](-internal-/classes/Base38Schema.md)

#### Source

[packages/matter.js/src/schema/Base38Schema.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Base38Schema.ts#L96)

***

### DiscoveryCapabilitiesBitmap

> `const` **DiscoveryCapabilitiesBitmap**: `object`

See MatterSpecification.v10.Core § 5.1.3.1 Table 36

#### Type declaration

##### ble

> **ble**: [`BitFlag`](README.md#bitflag)

Device supports BLE for discovery when not commissioned.

##### onIpNetwork

> **onIpNetwork**: [`BitFlag`](README.md#bitflag)

Device is already on the IP network.

##### softAccessPoint

> **softAccessPoint**: [`BitFlag`](README.md#bitflag)

Device supports hosting a Soft-AP when not commissioned.

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L34)

***

### DiscoveryCapabilitiesSchema

> `const` **DiscoveryCapabilitiesSchema**: [`BitmapSchemaInternal`](classes/BitmapSchemaInternal.md)\<`object`\>

#### Type declaration

##### ble

> **ble**: [`BitFlag`](README.md#bitflag)

Device supports BLE for discovery when not commissioned.

##### onIpNetwork

> **onIpNetwork**: [`BitFlag`](README.md#bitflag)

Device is already on the IP network.

##### softAccessPoint

> **softAccessPoint**: [`BitFlag`](README.md#bitflag)

Device supports hosting a Soft-AP when not commissioned.

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L44)

***

### ManualPairingCodeCodec

> `const` **ManualPairingCodeCodec**: [`ManualPairingCodeSchema`](-internal-/classes/ManualPairingCodeSchema.md)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L119)

***

### QrCode

> `const` **QrCode**: [`QrCodeSchema`](classes/QrCodeSchema.md)

#### Source

[packages/matter.js/src/schema/QrCodeSchema.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/QrCodeSchema.ts#L217)

***

### QrPairingCodeCodec

> `const` **QrPairingCodeCodec**: [`QrPairingCodeSchema`](-internal-/classes/QrPairingCodeSchema.md)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L71)

## Functions

### BitField()

> **BitField**(`offset`, `length`): [`BitField`](README.md#bitfield)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitField`](README.md#bitfield)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L37)

***

### BitFieldEnum()

> **BitFieldEnum**\<`E`\>(`offset`, `length`): [`BitFieldEnum`](README.md#bitfieldenume)\<`E`\>

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitFieldEnum`](README.md#bitfieldenume)\<`E`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L41)

***

### BitFlag()

> **BitFlag**(`offset`): [`BitFlag`](README.md#bitflag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`BitFlag`](README.md#bitflag)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L33)

***

### BitFlags()

> **BitFlags**\<`T`, `F`\>(`bitSchemas`, ...`flags`): [`BitFlags`](README.md#bitflagstf)\<`T`, `F`\>

Create a bitmap schema with a named subset of flags set

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](README.md#bitschema) |
| `F` *extends* `Capitalize`\<`Extract`\<keyof `T`, `string`\>\>[] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitSchemas` | `T` |
| ...`flags` | [`...F[]`] |

#### Returns

[`BitFlags`](README.md#bitflagstf)\<`T`, `F`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L202)

***

### BitmapSchema()

> **BitmapSchema**\<`T`\>(`bitSchemas`): [`BitmapSchemaInternal`](classes/BitmapSchemaInternal.md)\<`T`\>

Declares a bitmap schema by indicating the bit position and their names.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](README.md#bitschema) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`BitmapSchemaInternal`](classes/BitmapSchemaInternal.md)\<`T`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L231)

***

### BitsFromPartial()

> **BitsFromPartial**\<`S`, `P`\>(`schema`, `bits`): [`TypeFromBitSchema`](README.md#typefrombitschemat)\<`S`\>

Create a full bitmap schema from a partial bitmap schema

#### Type parameters

| Type parameter |
| :------ |
| `S` *extends* [`BitSchema`](README.md#bitschema) |
| `P` *extends* [`TypeFromPartialBitSchema`](README.md#typefrompartialbitschemat)\<`S`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | `S` |
| `bits` | `P` |

#### Returns

[`TypeFromBitSchema`](README.md#typefrombitschemat)\<`S`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L215)

***

### ByteArrayBitmapSchema()

> **ByteArrayBitmapSchema**\<`T`\>(`bitSchemas`): [`ByteArrayBitmapSchemaInternal`](classes/ByteArrayBitmapSchemaInternal.md)\<`T`\>

Declares a bitmap schema backed by a ByteArray by indicating the bit position and their names.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](README.md#bitschema) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`ByteArrayBitmapSchemaInternal`](classes/ByteArrayBitmapSchemaInternal.md)\<`T`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L234)
