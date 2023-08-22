[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/tlv

# Module: exports/tlv

## Table of contents

### Enumerations

- [TlvLength](../enums/exports_tlv.TlvLength.md)
- [TlvType](../enums/exports_tlv.TlvType.md)

### Classes

- [AnySchema](../classes/exports_tlv.AnySchema.md)
- [ArraySchema](../classes/exports_tlv.ArraySchema.md)
- [BooleanSchema](../classes/exports_tlv.BooleanSchema.md)
- [NoArgumentsSchema](../classes/exports_tlv.NoArgumentsSchema.md)
- [NullableSchema](../classes/exports_tlv.NullableSchema.md)
- [ObjectSchema](../classes/exports_tlv.ObjectSchema.md)
- [StringSchema](../classes/exports_tlv.StringSchema.md)
- [TlvArrayReader](../classes/exports_tlv.TlvArrayReader.md)
- [TlvArrayWriter](../classes/exports_tlv.TlvArrayWriter.md)
- [TlvByteArrayReader](../classes/exports_tlv.TlvByteArrayReader.md)
- [TlvByteArrayWriter](../classes/exports_tlv.TlvByteArrayWriter.md)
- [TlvCodec](../classes/exports_tlv.TlvCodec.md)
- [TlvNumberSchema](../classes/exports_tlv.TlvNumberSchema.md)
- [TlvNumericSchema](../classes/exports_tlv.TlvNumericSchema.md)
- [TlvSchema](../classes/exports_tlv.TlvSchema.md)
- [TlvWrapper](../classes/exports_tlv.TlvWrapper.md)
- [VoidSchema](../classes/exports_tlv.VoidSchema.md)

### Interfaces

- [FieldType](../interfaces/exports_tlv.FieldType.md)
- [OptionalFieldType](../interfaces/exports_tlv.OptionalFieldType.md)
- [TlvReader](../interfaces/exports_tlv.TlvReader.md)
- [TlvWriter](../interfaces/exports_tlv.TlvWriter.md)

### Type Aliases

- [ArrayAsChunked](exports_tlv.md#arrayaschunked)
- [NumericConstraints](exports_tlv.md#numericconstraints)
- [TlvElement](exports_tlv.md#tlvelement)
- [TlvFields](exports_tlv.md#tlvfields)
- [TlvStream](exports_tlv.md#tlvstream)
- [TlvTag](exports_tlv.md#tlvtag)
- [TlvToPrimitive](exports_tlv.md#tlvtoprimitive)
- [TlvTypeLength](exports_tlv.md#tlvtypelength)
- [TypeFromFields](exports_tlv.md#typefromfields)
- [TypeFromSchema](exports_tlv.md#typefromschema)

### Variables

- [TlvAny](exports_tlv.md#tlvany)
- [TlvBoolean](exports_tlv.md#tlvboolean)
- [TlvByteString](exports_tlv.md#tlvbytestring)
- [TlvDouble](exports_tlv.md#tlvdouble)
- [TlvEpochS](exports_tlv.md#tlvepochs)
- [TlvEpochUs](exports_tlv.md#tlvepochus)
- [TlvFloat](exports_tlv.md#tlvfloat)
- [TlvHardwareAddress](exports_tlv.md#tlvhardwareaddress)
- [TlvInt16](exports_tlv.md#tlvint16)
- [TlvInt32](exports_tlv.md#tlvint32)
- [TlvInt64](exports_tlv.md#tlvint64)
- [TlvInt8](exports_tlv.md#tlvint8)
- [TlvLongNumberSchema](exports_tlv.md#tlvlongnumberschema)
- [TlvNoArguments](exports_tlv.md#tlvnoarguments)
- [TlvPercent](exports_tlv.md#tlvpercent)
- [TlvPercent100ths](exports_tlv.md#tlvpercent100ths)
- [TlvPosixMs](exports_tlv.md#tlvposixms)
- [TlvString](exports_tlv.md#tlvstring)
- [TlvString256max](exports_tlv.md#tlvstring256max)
- [TlvString32max](exports_tlv.md#tlvstring32max)
- [TlvString64max](exports_tlv.md#tlvstring64max)
- [TlvSysTimeMS](exports_tlv.md#tlvsystimems)
- [TlvSysTimeUs](exports_tlv.md#tlvsystimeus)
- [TlvUInt16](exports_tlv.md#tlvuint16)
- [TlvUInt24](exports_tlv.md#tlvuint24)
- [TlvUInt32](exports_tlv.md#tlvuint32)
- [TlvUInt64](exports_tlv.md#tlvuint64)
- [TlvUInt8](exports_tlv.md#tlvuint8)
- [TlvVoid](exports_tlv.md#tlvvoid)

### Functions

- [TlvArray](exports_tlv.md#tlvarray)
- [TlvBitmap](exports_tlv.md#tlvbitmap)
- [TlvEnum](exports_tlv.md#tlvenum)
- [TlvField](exports_tlv.md#tlvfield)
- [TlvList](exports_tlv.md#tlvlist)
- [TlvNullable](exports_tlv.md#tlvnullable)
- [TlvObject](exports_tlv.md#tlvobject)
- [TlvOptionalField](exports_tlv.md#tlvoptionalfield)

## Type Aliases

### ArrayAsChunked

Ƭ **ArrayAsChunked**: [`ArrayChunkData`](export._internal_.md#arraychunkdata)[]

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:17

___

### NumericConstraints

Ƭ **NumericConstraints**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `bigint` = `number` \| `bigint` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max?` | `T` |
| `min?` | `T` |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:23

___

### TlvElement

Ƭ **TlvElement**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](exports_tlv.md#tlvtypelength) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](exports_tlv.md#tlvtag) |
| `typeLength` | `T` |
| `value?` | [`TlvToPrimitive`](exports_tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:24

___

### TlvFields

Ƭ **TlvFields**: `Object`

#### Index signature

▪ [field: `string`]: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`any`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:18

___

### TlvStream

Ƭ **TlvStream**: [`TlvElement`](exports_tlv.md#tlvelement)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:23

___

### TlvTag

Ƭ **TlvTag**: `Object`

MatterCoreSpecificationV1_0 § A.2

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `number` |
| `profile?` | `number` |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:79

___

### TlvToPrimitive

Ƭ **TlvToPrimitive**: `Object`

Converts [TlvType](../enums/exports_tlv.TlvType.md) to the js primitive type.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | `bigint` \| `number` |
| `10` | `number` |
| `12` | `string` |
| `16` | [`ByteArray`](util_export.md#bytearray-1) |
| `20` | ``null`` |
| `21` | `never` |
| `22` | `never` |
| `23` | `never` |
| `24` | `never` |
| `4` | `bigint` \| `number` |
| `8` | `never` |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:65

___

### TlvTypeLength

Ƭ **TlvTypeLength**: { `length`: [`TlvLength`](../enums/exports_tlv.TlvLength.md) ; `type`: [`SignedInt`](../enums/exports_tlv.TlvType.md#signedint)  } \| { `length`: [`TlvLength`](../enums/exports_tlv.TlvLength.md) ; `type`: [`UnsignedInt`](../enums/exports_tlv.TlvType.md#unsignedint)  } \| { `type`: [`Boolean`](../enums/exports_tlv.TlvType.md#boolean) ; `value`: `boolean`  } \| { `length`: [`FourBytes`](../enums/exports_tlv.TlvLength.md#fourbytes) \| [`EightBytes`](../enums/exports_tlv.TlvLength.md#eightbytes) ; `type`: [`Float`](../enums/exports_tlv.TlvType.md#float)  } \| { `length`: [`TlvLength`](../enums/exports_tlv.TlvLength.md) ; `type`: [`Utf8String`](../enums/exports_tlv.TlvType.md#utf8string)  } \| { `length`: [`TlvLength`](../enums/exports_tlv.TlvLength.md) ; `type`: [`ByteString`](../enums/exports_tlv.TlvType.md#bytestring)  } \| { `type`: [`Null`](../enums/exports_tlv.TlvType.md#null)  } \| { `type`: [`Structure`](../enums/exports_tlv.TlvType.md#structure)  } \| { `type`: [`Array`](../enums/exports_tlv.TlvType.md#array)  } \| { `type`: [`List`](../enums/exports_tlv.TlvType.md#list)  } \| { `type`: [`EndOfContainer`](../enums/exports_tlv.TlvType.md#endofcontainer)  }

Type and length or value, when applicable.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvCodec.d.ts:35

___

### TypeFromFields

Ƭ **TypeFromFields**<`F`\>: [`Merge`](util_export.md#merge)<[`TypeForMandatoryFields`](export._internal_.md#typeformandatoryfields)<`F`, [`MandatoryFieldNames`](export._internal_.md#mandatoryfieldnames)<`F`\>\>, [`TypeForOptionalFields`](export._internal_.md#typeforoptionalfields)<`F`, [`OptionalFieldNames`](export._internal_.md#optionalfieldnames)<`F`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](exports_tlv.md#tlvfields) |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:34

___

### TypeFromSchema

Ƭ **TypeFromSchema**<`S`\>: `S` extends [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<infer T\> ? `T` : `never`

Type defined by the TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`any`\> |

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:43

## Variables

### TlvAny

• `Const` **TlvAny**: [`AnySchema`](../classes/exports_tlv.AnySchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:20

___

### TlvBoolean

• `Const` **TlvBoolean**: [`BooleanSchema`](../classes/exports_tlv.BooleanSchema.md)

Boolean TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvBoolean.d.ts:19

___

### TlvByteString

• `Const` **TlvByteString**: [`StringSchema`](../classes/exports_tlv.StringSchema.md)<[`ByteString`](../enums/exports_tlv.TlvType.md#bytestring)\>

ByteString TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:29

___

### TlvDouble

• `Const` **TlvDouble**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:38

___

### TlvEpochS

• `Const` **TlvEpochS**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:53

___

### TlvEpochUs

• `Const` **TlvEpochUs**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:52

___

### TlvFloat

• `Const` **TlvFloat**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

Unsigned integer TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:37

___

### TlvHardwareAddress

• `Const` **TlvHardwareAddress**: [`StringSchema`](../classes/exports_tlv.StringSchema.md)<[`ByteString`](../enums/exports_tlv.TlvType.md#bytestring)\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:38

___

### TlvInt16

• `Const` **TlvInt16**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:40

___

### TlvInt32

• `Const` **TlvInt32**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:41

___

### TlvInt64

• `Const` **TlvInt64**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:42

___

### TlvInt8

• `Const` **TlvInt8**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:39

___

### TlvLongNumberSchema

• `Const` **TlvLongNumberSchema**: (`type`: [`SignedInt`](../enums/exports_tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/exports_tlv.TlvType.md#unsignedint) \| [`Float`](../enums/exports_tlv.TlvType.md#float), `lengthProvider`: (`value`: `number` \| `bigint`) => [`TlvLength`](../enums/exports_tlv.TlvLength.md), `min?`: `number` \| `bigint`, `max?`: `number` \| `bigint`) => [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Type declaration

• **new TlvLongNumberSchema**(`type`, `lengthProvider`, `min?`, `max?`): [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enums/exports_tlv.TlvType.md#signedint) \| [`UnsignedInt`](../enums/exports_tlv.TlvType.md#unsignedint) \| [`Float`](../enums/exports_tlv.TlvType.md#float) |
| `lengthProvider` | (`value`: `number` \| `bigint`) => [`TlvLength`](../enums/exports_tlv.TlvLength.md) |
| `min?` | `number` \| `bigint` |
| `max?` | `number` \| `bigint` |

##### Returns

[`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:33

___

### TlvNoArguments

• `Const` **TlvNoArguments**: [`NoArgumentsSchema`](../classes/exports_tlv.NoArgumentsSchema.md)

Void TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNoArguments.d.ts:16

___

### TlvPercent

• `Const` **TlvPercent**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:50

___

### TlvPercent100ths

• `Const` **TlvPercent100ths**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:51

___

### TlvPosixMs

• `Const` **TlvPosixMs**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:54

___

### TlvString

• `Const` **TlvString**: [`StringSchema`](../classes/exports_tlv.StringSchema.md)<[`Utf8String`](../enums/exports_tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:31

___

### TlvString256max

• `Const` **TlvString256max**: [`StringSchema`](../classes/exports_tlv.StringSchema.md)<[`Utf8String`](../enums/exports_tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:37

___

### TlvString32max

• `Const` **TlvString32max**: [`StringSchema`](../classes/exports_tlv.StringSchema.md)<[`Utf8String`](../enums/exports_tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:33

___

### TlvString64max

• `Const` **TlvString64max**: [`StringSchema`](../classes/exports_tlv.StringSchema.md)<[`Utf8String`](../enums/exports_tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvString.d.ts:35

___

### TlvSysTimeMS

• `Const` **TlvSysTimeMS**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:56

___

### TlvSysTimeUs

• `Const` **TlvSysTimeUs**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:55

___

### TlvUInt16

• `Const` **TlvUInt16**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:44

___

### TlvUInt24

• `Const` **TlvUInt24**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:45

___

### TlvUInt32

• `Const` **TlvUInt32**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:46

___

### TlvUInt64

• `Const` **TlvUInt64**: [`TlvNumericSchema`](../classes/exports_tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:47

___

### TlvUInt8

• `Const` **TlvUInt8**: [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:43

___

### TlvVoid

• `Const` **TlvVoid**: [`VoidSchema`](../classes/exports_tlv.VoidSchema.md)

Void TLV schema.

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvVoid.d.ts:18

## Functions

### TlvArray

▸ **TlvArray**<`T`\>(`elementSchema`, `«destructured»?`): [`ArraySchema`](../classes/exports_tlv.ArraySchema.md)<`T`\>

Array TLV schema.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementSchema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`LengthConstraints`](export._internal_.md#lengthconstraints) |

#### Returns

[`ArraySchema`](../classes/exports_tlv.ArraySchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:37

___

### TlvBitmap

▸ **TlvBitmap**<`T`\>(`underlyingSchema`, `bitSchema`): [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<`T`\>, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](exports_schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `underlyingSchema` | [`TlvNumberSchema`](../classes/exports_tlv.TlvNumberSchema.md) |
| `bitSchema` | `T` |

#### Returns

[`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<`T`\>, `number`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:49

___

### TlvEnum

▸ **TlvEnum**<`T`\>(): [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNumber.d.ts:48

___

### TlvField

▸ **TlvField**<`T`\>(`id`, `schema`, `fallback?`): [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`T`\>

Object TLV mandatory field. Optionally provide a fallback value to initialize the field value when devices omit
providing a value against the specifications or in special usecases. Make sure to use a value that is an equivalent
to the value being empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |
| `fallback?` | `T` |

#### Returns

[`FieldType`](../interfaces/exports_tlv.FieldType.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:60

___

### TlvList

▸ **TlvList**<`F`\>(`fields`): [`ObjectSchema`](../classes/exports_tlv.ObjectSchema.md)<`F`\>

List TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](exports_tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/exports_tlv.ObjectSchema.md)<`F`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:54

___

### TlvNullable

▸ **TlvNullable**<`T`\>(`schema`): [`NullableSchema`](../classes/exports_tlv.NullableSchema.md)<`T`\>

Nullable TLV schema.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |

#### Returns

[`NullableSchema`](../classes/exports_tlv.NullableSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:23

___

### TlvObject

▸ **TlvObject**<`F`\>(`fields`): [`ObjectSchema`](../classes/exports_tlv.ObjectSchema.md)<`F`\>

Object TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](exports_tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/exports_tlv.ObjectSchema.md)<`F`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:52

___

### TlvOptionalField

▸ **TlvOptionalField**<`T`\>(`id`, `schema`): [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`T`\>

Object TLV optional field.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`T`\> |

#### Returns

[`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:62
