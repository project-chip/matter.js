[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / tlv

# Module: tlv

## Table of contents

### Enumerations

- [TlvLength](../enums/tlv.TlvLength.md)
- [TlvType](../enums/tlv.TlvType.md)

### Classes

- [AnySchema](../classes/tlv.AnySchema.md)
- [ArraySchema](../classes/tlv.ArraySchema.md)
- [BooleanSchema](../classes/tlv.BooleanSchema.md)
- [NoArgumentsSchema](../classes/tlv.NoArgumentsSchema.md)
- [NullableSchema](../classes/tlv.NullableSchema.md)
- [ObjectSchema](../classes/tlv.ObjectSchema.md)
- [StringSchema](../classes/tlv.StringSchema.md)
- [TlvArrayReader](../classes/tlv.TlvArrayReader.md)
- [TlvArrayWriter](../classes/tlv.TlvArrayWriter.md)
- [TlvByteArrayReader](../classes/tlv.TlvByteArrayReader.md)
- [TlvByteArrayWriter](../classes/tlv.TlvByteArrayWriter.md)
- [TlvCodec](../classes/tlv.TlvCodec.md)
- [TlvNumberSchema](../classes/tlv.TlvNumberSchema.md)
- [TlvNumericSchema](../classes/tlv.TlvNumericSchema.md)
- [TlvSchema](../classes/tlv.TlvSchema.md)
- [TlvWrapper](../classes/tlv.TlvWrapper.md)
- [VoidSchema](../classes/tlv.VoidSchema.md)

### Interfaces

- [FieldType](../interfaces/tlv.FieldType.md)
- [OptionalFieldType](../interfaces/tlv.OptionalFieldType.md)
- [TlvReader](../interfaces/tlv.TlvReader.md)
- [TlvWriter](../interfaces/tlv.TlvWriter.md)

### Type Aliases

- [NumericConstraints](tlv.md#numericconstraints)
- [TlvElement](tlv.md#tlvelement)
- [TlvFields](tlv.md#tlvfields)
- [TlvStream](tlv.md#tlvstream)
- [TlvTag](tlv.md#tlvtag)
- [TlvToPrimitive](tlv.md#tlvtoprimitive)
- [TlvTypeLength](tlv.md#tlvtypelength)
- [TypeFromFields](tlv.md#typefromfields)
- [TypeFromSchema](tlv.md#typefromschema)

### Variables

- [TlvAny](tlv.md#tlvany)
- [TlvBoolean](tlv.md#tlvboolean)
- [TlvByteString](tlv.md#tlvbytestring)
- [TlvDouble](tlv.md#tlvdouble)
- [TlvFloat](tlv.md#tlvfloat)
- [TlvInt16](tlv.md#tlvint16)
- [TlvInt32](tlv.md#tlvint32)
- [TlvInt64](tlv.md#tlvint64)
- [TlvInt8](tlv.md#tlvint8)
- [TlvLongNumberSchema](tlv.md#tlvlongnumberschema)
- [TlvNoArguments](tlv.md#tlvnoarguments)
- [TlvString](tlv.md#tlvstring)
- [TlvString256max](tlv.md#tlvstring256max)
- [TlvString32max](tlv.md#tlvstring32max)
- [TlvString64max](tlv.md#tlvstring64max)
- [TlvUInt16](tlv.md#tlvuint16)
- [TlvUInt32](tlv.md#tlvuint32)
- [TlvUInt64](tlv.md#tlvuint64)
- [TlvUInt8](tlv.md#tlvuint8)
- [TlvVoid](tlv.md#tlvvoid)

### Functions

- [TlvArray](tlv.md#tlvarray)
- [TlvBitmap](tlv.md#tlvbitmap)
- [TlvEnum](tlv.md#tlvenum)
- [TlvField](tlv.md#tlvfield)
- [TlvList](tlv.md#tlvlist)
- [TlvNullable](tlv.md#tlvnullable)
- [TlvObject](tlv.md#tlvobject)
- [TlvOptionalField](tlv.md#tlvoptionalfield)

## Type Aliases

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

[packages/matter.js/src/tlv/TlvNumber.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L58)

___

### TlvElement

Ƭ **TlvElement**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](tlv.md#tlvtypelength) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](tlv.md#tlvtag) |
| `typeLength` | `T` |
| `value?` | [`TlvToPrimitive`](tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L47)

___

### TlvFields

Ƭ **TlvFields**: `Object`

#### Index signature

▪ [field: `string`]: [`FieldType`](../interfaces/tlv.FieldType.md)<`any`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L24)

___

### TlvStream

Ƭ **TlvStream**: [`TlvElement`](tlv.md#tlvelement)<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L45)

___

### TlvTag

Ƭ **TlvTag**: `Object`

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.2

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `number` |
| `profile?` | `number` |

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:102](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L102)

___

### TlvToPrimitive

Ƭ **TlvToPrimitive**: `Object`

Converts [TlvType](../enums/tlv.TlvType.md) to the js primitive type.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | `bigint` \| `number` |
| `10` | `number` |
| `12` | `string` |
| `16` | [`ByteArray`](util.md#bytearray-1) |
| `20` | ``null`` |
| `21` | `never` |
| `22` | `never` |
| `23` | `never` |
| `24` | `never` |
| `4` | `bigint` \| `number` |
| `8` | `never` |

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L58)

___

### TlvTypeLength

Ƭ **TlvTypeLength**: { `length`: [`TlvLength`](../enums/tlv.TlvLength.md) ; `type`: [`SignedInt`](../enums/tlv.TlvType.md#signedint)  } \| { `length`: [`TlvLength`](../enums/tlv.TlvLength.md) ; `type`: [`UnsignedInt`](../enums/tlv.TlvType.md#unsignedint)  } \| { `type`: [`Boolean`](../enums/tlv.TlvType.md#boolean) ; `value`: `boolean`  } \| { `length`: [`FourBytes`](../enums/tlv.TlvLength.md#fourbytes) \| [`EightBytes`](../enums/tlv.TlvLength.md#eightbytes) ; `type`: [`Float`](../enums/tlv.TlvType.md#float)  } \| { `length`: [`TlvLength`](../enums/tlv.TlvLength.md) ; `type`: [`Utf8String`](../enums/tlv.TlvType.md#utf8string)  } \| { `length`: [`TlvLength`](../enums/tlv.TlvLength.md) ; `type`: [`ByteString`](../enums/tlv.TlvType.md#bytestring)  } \| { `type`: [`Null`](../enums/tlv.TlvType.md#null)  } \| { `type`: [`Structure`](../enums/tlv.TlvType.md#structure)  } \| { `type`: [`Array`](../enums/tlv.TlvType.md#array)  } \| { `type`: [`List`](../enums/tlv.TlvType.md#list)  } \| { `type`: [`EndOfContainer`](../enums/tlv.TlvType.md#endofcontainer)  }

Type and length or value, when applicable.

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L44)

___

### TypeFromFields

Ƭ **TypeFromFields**<`F`\>: [`Merge`](util.md#merge)<[`TypeForMandatoryFields`](index._internal_.md#typeformandatoryfields)<`F`, [`MandatoryFieldNames`](index._internal_.md#mandatoryfieldnames)<`F`\>\>, [`TypeForOptionalFields`](index._internal_.md#typeforoptionalfields)<`F`, [`OptionalFieldNames`](index._internal_.md#optionalfieldnames)<`F`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv.md#tlvfields) |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L31)

___

### TypeFromSchema

Ƭ **TypeFromSchema**<`S`\>: `S` extends [`TlvSchema`](../classes/tlv.TlvSchema.md)<infer T\> ? `T` : `never`

Type defined by the TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`TlvSchema`](../classes/tlv.TlvSchema.md)<`any`\> |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L87)

## Variables

### TlvAny

• `Const` **TlvAny**: [`AnySchema`](../classes/tlv.AnySchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:80](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvAny.ts#L80)

___

### TlvBoolean

• `Const` **TlvBoolean**: [`BooleanSchema`](../classes/tlv.BooleanSchema.md)

Boolean TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvBoolean.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvBoolean.ts#L32)

___

### TlvByteString

• `Const` **TlvByteString**: [`StringSchema`](../classes/tlv.StringSchema.md)<[`ByteString`](../enums/tlv.TlvType.md#bytestring)\>

ByteString TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:59](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L59)

___

### TlvDouble

• `Const` **TlvDouble**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L98)

___

### TlvFloat

• `Const` **TlvFloat**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

Unsigned integer TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:97](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L97)

___

### TlvInt16

• `Const` **TlvInt16**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:100](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L100)

___

### TlvInt32

• `Const` **TlvInt32**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:101](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L101)

___

### TlvInt64

• `Const` **TlvInt64**: [`TlvNumericSchema`](../classes/tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:102](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L102)

___

### TlvInt8

• `Const` **TlvInt8**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:99](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L99)

___

### TlvLongNumberSchema

• `Const` **TlvLongNumberSchema**: `Object`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:93](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L93)

___

### TlvNoArguments

• `Const` **TlvNoArguments**: [`NoArgumentsSchema`](../classes/tlv.NoArgumentsSchema.md)

Void TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvNoArguments.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNoArguments.ts#L26)

___

### TlvString

• `Const` **TlvString**: [`StringSchema`](../classes/tlv.StringSchema.md)<[`Utf8String`](../enums/tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L62)

___

### TlvString256max

• `Const` **TlvString256max**: [`StringSchema`](../classes/tlv.StringSchema.md)<[`Utf8String`](../enums/tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L71)

___

### TlvString32max

• `Const` **TlvString32max**: [`StringSchema`](../classes/tlv.StringSchema.md)<[`Utf8String`](../enums/tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L65)

___

### TlvString64max

• `Const` **TlvString64max**: [`StringSchema`](../classes/tlv.StringSchema.md)<[`Utf8String`](../enums/tlv.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:68](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L68)

___

### TlvUInt16

• `Const` **TlvUInt16**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:104](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L104)

___

### TlvUInt32

• `Const` **TlvUInt32**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:105](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L105)

___

### TlvUInt64

• `Const` **TlvUInt64**: [`TlvNumericSchema`](../classes/tlv.TlvNumericSchema.md)<`number` \| `bigint`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:106](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L106)

___

### TlvUInt8

• `Const` **TlvUInt8**: [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:103](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L103)

___

### TlvVoid

• `Const` **TlvVoid**: [`VoidSchema`](../classes/tlv.VoidSchema.md)

Void TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvVoid.ts#L33)

## Functions

### TlvArray

▸ **TlvArray**<`T`\>(`elementSchema`, `«destructured»?`): [`ArraySchema`](../classes/tlv.ArraySchema.md)<`T`\>

Array TLV schema.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementSchema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |
| `«destructured»` | [`LengthConstraints`](index._internal_.md#lengthconstraints) |

#### Returns

[`ArraySchema`](../classes/tlv.ArraySchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L58)

___

### TlvBitmap

▸ **TlvBitmap**<`T`\>(`underlyingSchema`, `bitSchema`): [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<`T`\>, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `underlyingSchema` | [`TlvNumberSchema`](../classes/tlv.TlvNumberSchema.md) |
| `bitSchema` | `T` |

#### Returns

[`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`TypeFromBitSchema`](schema.md#typefrombitschema)<`T`\>, `number`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:108](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L108)

___

### TlvEnum

▸ **TlvEnum**<`T`\>(): [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNumber.ts#L107)

___

### TlvField

▸ **TlvField**<`T`\>(`id`, `schema`, `fallback?`): [`FieldType`](../interfaces/tlv.FieldType.md)<`T`\>

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
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |
| `fallback?` | `T` |

#### Returns

[`FieldType`](../interfaces/tlv.FieldType.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:117](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L117)

___

### TlvList

▸ **TlvList**<`F`\>(`fields`): [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<`F`\>

List TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/tlv.ObjectSchema.md)<`F`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:110](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L110)

___

### TlvNullable

▸ **TlvNullable**<`T`\>(`schema`): [`NullableSchema`](../classes/tlv.NullableSchema.md)<`T`\>

Nullable TLV schema.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |

#### Returns

[`NullableSchema`](../classes/tlv.NullableSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNullable.ts#L43)

___

### TlvObject

▸ **TlvObject**<`F`\>(`fields`): [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<`F`\>

Object TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/tlv.ObjectSchema.md)<`F`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L107)

___

### TlvOptionalField

▸ **TlvOptionalField**<`T`\>(`id`, `schema`): [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`T`\>

Object TLV optional field.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv.TlvSchema.md)<`T`\> |

#### Returns

[`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:120](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L120)
