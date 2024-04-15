[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / tlv/export

# Module: tlv/export

## Table of contents

### Modules

- [\<internal\>](tlv_export._internal_.md)

### Enumerations

- [TlvLength](../enums/tlv_export.TlvLength.md)
- [TlvType](../enums/tlv_export.TlvType.md)

### Classes

- [AnySchema](../classes/tlv_export.AnySchema.md)
- [ArraySchema](../classes/tlv_export.ArraySchema.md)
- [BooleanSchema](../classes/tlv_export.BooleanSchema.md)
- [NoArgumentsSchema](../classes/tlv_export.NoArgumentsSchema.md)
- [NullableSchema](../classes/tlv_export.NullableSchema.md)
- [ObjectSchema](../classes/tlv_export.ObjectSchema.md)
- [StringSchema](../classes/tlv_export.StringSchema.md)
- [TlvArrayReader](../classes/tlv_export.TlvArrayReader.md)
- [TlvArrayWriter](../classes/tlv_export.TlvArrayWriter.md)
- [TlvByteArrayReader](../classes/tlv_export.TlvByteArrayReader.md)
- [TlvByteArrayWriter](../classes/tlv_export.TlvByteArrayWriter.md)
- [TlvCodec](../classes/tlv_export.TlvCodec.md)
- [TlvNumberSchema](../classes/tlv_export.TlvNumberSchema.md)
- [TlvNumericSchema](../classes/tlv_export.TlvNumericSchema.md)
- [TlvSchema](../classes/tlv_export.TlvSchema.md)
- [TlvWrapper](../classes/tlv_export.TlvWrapper.md)
- [VoidSchema](../classes/tlv_export.VoidSchema.md)

### Interfaces

- [FieldType](../interfaces/tlv_export.FieldType.md)
- [OptionalFieldType](../interfaces/tlv_export.OptionalFieldType.md)
- [OptionalRepeatedFieldType](../interfaces/tlv_export.OptionalRepeatedFieldType.md)
- [RepeatedFieldType](../interfaces/tlv_export.RepeatedFieldType.md)
- [TlvReader](../interfaces/tlv_export.TlvReader.md)
- [TlvWriter](../interfaces/tlv_export.TlvWriter.md)

### Type Aliases

- [ArrayAsChunked](tlv_export.md#arrayaschunked)
- [LengthConstraints](tlv_export.md#lengthconstraints)
- [NumericConstraints](tlv_export.md#numericconstraints)
- [TlvElement](tlv_export.md#tlvelement)
- [TlvFields](tlv_export.md#tlvfields)
- [TlvStream](tlv_export.md#tlvstream)
- [TlvTag](tlv_export.md#tlvtag)
- [TlvToPrimitive](tlv_export.md#tlvtoprimitive)
- [TlvTypeLength](tlv_export.md#tlvtypelength)
- [TypeFromFields](tlv_export.md#typefromfields)
- [TypeFromSchema](tlv_export.md#typefromschema)

### Variables

- [TlvAny](tlv_export.md#tlvany)
- [TlvBoolean](tlv_export.md#tlvboolean)
- [TlvByteString](tlv_export.md#tlvbytestring)
- [TlvDouble](tlv_export.md#tlvdouble)
- [TlvEpochS](tlv_export.md#tlvepochs)
- [TlvEpochUs](tlv_export.md#tlvepochus)
- [TlvFloat](tlv_export.md#tlvfloat)
- [TlvHardwareAddress](tlv_export.md#tlvhardwareaddress)
- [TlvInt16](tlv_export.md#tlvint16)
- [TlvInt32](tlv_export.md#tlvint32)
- [TlvInt64](tlv_export.md#tlvint64)
- [TlvInt8](tlv_export.md#tlvint8)
- [TlvLongNumberSchema](tlv_export.md#tlvlongnumberschema)
- [TlvNoArguments](tlv_export.md#tlvnoarguments)
- [TlvPercent](tlv_export.md#tlvpercent)
- [TlvPercent100ths](tlv_export.md#tlvpercent100ths)
- [TlvPosixMs](tlv_export.md#tlvposixms)
- [TlvString](tlv_export.md#tlvstring)
- [TlvString256max](tlv_export.md#tlvstring256max)
- [TlvString32max](tlv_export.md#tlvstring32max)
- [TlvString64max](tlv_export.md#tlvstring64max)
- [TlvSysTimeMS](tlv_export.md#tlvsystimems)
- [TlvSysTimeUs](tlv_export.md#tlvsystimeus)
- [TlvUInt16](tlv_export.md#tlvuint16)
- [TlvUInt24](tlv_export.md#tlvuint24)
- [TlvUInt32](tlv_export.md#tlvuint32)
- [TlvUInt64](tlv_export.md#tlvuint64)
- [TlvUInt8](tlv_export.md#tlvuint8)
- [TlvVoid](tlv_export.md#tlvvoid)

### Functions

- [TlvArray](tlv_export.md#tlvarray)
- [TlvBitmap](tlv_export.md#tlvbitmap)
- [TlvEnum](tlv_export.md#tlvenum)
- [TlvField](tlv_export.md#tlvfield)
- [TlvNullable](tlv_export.md#tlvnullable)
- [TlvObject](tlv_export.md#tlvobject)
- [TlvOptionalField](tlv_export.md#tlvoptionalfield)
- [TlvOptionalRepeatedField](tlv_export.md#tlvoptionalrepeatedfield)
- [TlvRepeatedField](tlv_export.md#tlvrepeatedfield)
- [TlvTaggedList](tlv_export.md#tlvtaggedlist)

## Type Aliases

### ArrayAsChunked

Ƭ **ArrayAsChunked**: [`ArrayChunkData`](tlv_export._internal_.md#arraychunkdata)[]

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvArray.ts#L23)

___

### LengthConstraints

Ƭ **LengthConstraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length?` | `number` |
| `maxLength?` | `number` |
| `minLength?` | `number` |

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvArray.ts#L13)

___

### NumericConstraints

Ƭ **NumericConstraints**\<`T`\>: `Object`

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

[packages/matter.js/src/tlv/TlvNumber.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L84)

___

### TlvElement

Ƭ **TlvElement**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](tlv_export.md#tlvtypelength) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](tlv_export.md#tlvtag) |
| `typeLength` | `T` |
| `value?` | [`TlvToPrimitive`](tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L54)

___

### TlvFields

Ƭ **TlvFields**: `Object`

#### Index signature

▪ [field: `string`]: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`any`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L40)

___

### TlvStream

Ƭ **TlvStream**: [`TlvElement`](tlv_export.md#tlvelement)\<`any`\>[]

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L52)

___

### TlvTag

Ƭ **TlvTag**: `Object`

MatterSpecification.v10.Core § A.2

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `number` |
| `profile?` | `number` |

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L110)

___

### TlvToPrimitive

Ƭ **TlvToPrimitive**: `Object`

Converts [TlvType](../enums/tlv_export.TlvType.md) to the js primitive type.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | `bigint` \| `number` |
| `10` | `number` |
| `12` | `string` |
| `16` | [`ByteArray`](util_export.md#bytearray) |
| `20` | ``null`` |
| `21` | `never` |
| `22` | `never` |
| `23` | `never` |
| `24` | `never` |
| `4` | `bigint` \| `number` |
| `8` | `never` |

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L66)

___

### TlvTypeLength

Ƭ **TlvTypeLength**: \{ `length`: [`TlvLength`](../enums/tlv_export.TlvLength.md) ; `type`: [`SignedInt`](../enums/tlv_export.TlvType.md#signedint)  } \| \{ `length`: [`TlvLength`](../enums/tlv_export.TlvLength.md) ; `type`: [`UnsignedInt`](../enums/tlv_export.TlvType.md#unsignedint)  } \| \{ `type`: [`Boolean`](../enums/tlv_export.TlvType.md#boolean) ; `value`: `boolean`  } \| \{ `length`: [`FourBytes`](../enums/tlv_export.TlvLength.md#fourbytes) \| [`EightBytes`](../enums/tlv_export.TlvLength.md#eightbytes) ; `type`: [`Float`](../enums/tlv_export.TlvType.md#float)  } \| \{ `length`: [`TlvLength`](../enums/tlv_export.TlvLength.md) ; `type`: [`Utf8String`](../enums/tlv_export.TlvType.md#utf8string)  } \| \{ `length`: [`TlvLength`](../enums/tlv_export.TlvLength.md) ; `type`: [`ByteString`](../enums/tlv_export.TlvType.md#bytestring)  } \| \{ `type`: [`Null`](../enums/tlv_export.TlvType.md#null)  } \| \{ `type`: [`Structure`](../enums/tlv_export.TlvType.md#structure)  } \| \{ `type`: [`Array`](../enums/tlv_export.TlvType.md#array)  } \| \{ `type`: [`List`](../enums/tlv_export.TlvType.md#list)  } \| \{ `type`: [`EndOfContainer`](../enums/tlv_export.TlvType.md#endofcontainer)  }

Type and length or value, when applicable.

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvCodec.ts#L52)

___

### TypeFromFields

Ƭ **TypeFromFields**\<`F`\>: [`Merge`](util_export.md#merge)\<[`TypeForMandatoryFields`](tlv_export._internal_.md#typeformandatoryfields)\<`F`, [`MandatoryFieldNames`](tlv_export._internal_.md#mandatoryfieldnames)\<`F`\>\>, [`TypeForOptionalFields`](tlv_export._internal_.md#typeforoptionalfields)\<`F`, [`OptionalFieldNames`](tlv_export._internal_.md#optionalfieldnames)\<`F`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv_export.md#tlvfields) |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L51)

___

### TypeFromSchema

Ƭ **TypeFromSchema**\<`S`\>: `S` extends [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<infer T\> ? `T` : `never`

Type defined by the TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`any`\> |

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L92)

## Variables

### TlvAny

• `Const` **TlvAny**: [`AnySchema`](../classes/tlv_export.AnySchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvAny.ts#L201)

___

### TlvBoolean

• `Const` **TlvBoolean**: [`BooleanSchema`](../classes/tlv_export.BooleanSchema.md)

Boolean TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvBoolean.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvBoolean.ts#L33)

___

### TlvByteString

• `Const` **TlvByteString**: [`StringSchema`](../classes/tlv_export.StringSchema.md)\<[`ByteString`](../enums/tlv_export.TlvType.md#bytestring)\>

ByteString TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvString.ts#L68)

___

### TlvDouble

• `Const` **TlvDouble**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L118)

___

### TlvEpochS

• `Const` **TlvEpochS**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md) = `TlvUInt32`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L199)

___

### TlvEpochUs

• `Const` **TlvEpochUs**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L198)

___

### TlvFloat

• `Const` **TlvFloat**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

Unsigned integer TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L117)

___

### TlvHardwareAddress

• `Const` **TlvHardwareAddress**: [`StringSchema`](../classes/tlv_export.StringSchema.md)\<[`ByteString`](../enums/tlv_export.TlvType.md#bytestring)\>

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvString.ts#L82)

___

### TlvInt16

• `Const` **TlvInt16**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L125)

___

### TlvInt32

• `Const` **TlvInt32**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L131)

___

### TlvInt64

• `Const` **TlvInt64**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L137)

___

### TlvInt8

• `Const` **TlvInt8**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L119)

___

### TlvLongNumberSchema

• `Const` **TlvLongNumberSchema**: `Object`

#### Call signature

• **new TlvLongNumberSchema**(`type`, `lengthProvider`, `min?`, `max?`): [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enums/tlv_export.TlvType.md#signedint) \| [`UnsignedInt`](../enums/tlv_export.TlvType.md#unsignedint) \| [`Float`](../enums/tlv_export.TlvType.md#float) |
| `lengthProvider` | (`value`: `number` \| `bigint`) => [`TlvLength`](../enums/tlv_export.TlvLength.md) |
| `min?` | `number` \| `bigint` |
| `max?` | `number` \| `bigint` |

##### Returns

[`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`any`\> |

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L114)

___

### TlvNoArguments

• `Const` **TlvNoArguments**: [`NoArgumentsSchema`](../classes/tlv_export.NoArgumentsSchema.md)

Void TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvNoArguments.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNoArguments.ts#L26)

___

### TlvPercent

• `Const` **TlvPercent**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:194](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L194)

___

### TlvPercent100ths

• `Const` **TlvPercent100ths**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L195)

___

### TlvPosixMs

• `Const` **TlvPosixMs**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L200)

___

### TlvString

• `Const` **TlvString**: [`StringSchema`](../classes/tlv_export.StringSchema.md)\<[`Utf8String`](../enums/tlv_export.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvString.ts#L71)

___

### TlvString256max

• `Const` **TlvString256max**: [`StringSchema`](../classes/tlv_export.StringSchema.md)\<[`Utf8String`](../enums/tlv_export.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvString.ts#L80)

___

### TlvString32max

• `Const` **TlvString32max**: [`StringSchema`](../classes/tlv_export.StringSchema.md)\<[`Utf8String`](../enums/tlv_export.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvString.ts#L74)

___

### TlvString64max

• `Const` **TlvString64max**: [`StringSchema`](../classes/tlv_export.StringSchema.md)\<[`Utf8String`](../enums/tlv_export.TlvType.md#utf8string)\>

String TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvString.ts#L77)

___

### TlvSysTimeMS

• `Const` **TlvSysTimeMS**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L202)

___

### TlvSysTimeUs

• `Const` **TlvSysTimeUs**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L201)

___

### TlvUInt16

• `Const` **TlvUInt16**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:149](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L149)

___

### TlvUInt24

• `Const` **TlvUInt24**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L155)

___

### TlvUInt32

• `Const` **TlvUInt32**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L161)

___

### TlvUInt64

• `Const` **TlvUInt64**: [`TlvNumericSchema`](../classes/tlv_export.TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L167)

___

### TlvUInt8

• `Const` **TlvUInt8**: [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md)

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:143](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L143)

___

### TlvVoid

• `Const` **TlvVoid**: [`VoidSchema`](../classes/tlv_export.VoidSchema.md)

Void TLV schema.

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvVoid.ts#L34)

## Functions

### TlvArray

▸ **TlvArray**\<`T`\>(`elementSchema`, `«destructured»?`): [`ArraySchema`](../classes/tlv_export.ArraySchema.md)\<`T`\>

Array TLV schema.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementSchema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\> |
| `«destructured»` | [`LengthConstraints`](tlv_export.md#lengthconstraints) |

#### Returns

[`ArraySchema`](../classes/tlv_export.ArraySchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvArray.ts#L138)

___

### TlvBitmap

▸ **TlvBitmap**\<`T`\>(`underlyingSchema`, `bitSchema`): [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<`T`\>, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `underlyingSchema` | [`TlvNumberSchema`](../classes/tlv_export.TlvNumberSchema.md) |
| `bitSchema` | `T` |

#### Returns

[`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<`T`\>, `number`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L175)

___

### TlvEnum

▸ **TlvEnum**\<`T`\>(): [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNumber.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNumber.ts#L174)

___

### TlvField

▸ **TlvField**\<`T`\>(`id`, `schema`, `fallback?`): [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`T`\>

Object TLV mandatory field. Optionally provide a fallback value to initialize the field value when devices omit
providing a value against the specifications or in special use cases. Make sure to use a value that is an equivalent
to the value being empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\> |
| `fallback?` | `T` |

#### Returns

[`FieldType`](../interfaces/tlv_export.FieldType.md)\<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:269](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L269)

___

### TlvNullable

▸ **TlvNullable**\<`T`\>(`schema`): [`NullableSchema`](../classes/tlv_export.NullableSchema.md)\<`T`\>

Nullable TLV schema.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\> |

#### Returns

[`NullableSchema`](../classes/tlv_export.NullableSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvNullable.ts#L67)

___

### TlvObject

▸ **TlvObject**\<`F`\>(`fields`): [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<`F`\>

Object TLV schema.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv_export.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<`F`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:248](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L248)

___

### TlvOptionalField

▸ **TlvOptionalField**\<`T`\>(`id`, `schema`): [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`T`\>

Object TLV optional field.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\> |

#### Returns

[`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:273](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L273)

___

### TlvOptionalRepeatedField

▸ **TlvOptionalRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions?`): [`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<`T`[]\>

Object TLV optional field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\> |
| `lengthOptions?` | `Object` |
| `lengthOptions.maxLength` | `number` |

#### Returns

[`OptionalRepeatedFieldType`](../interfaces/tlv_export.OptionalRepeatedFieldType.md)\<`T`[]\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:296](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L296)

___

### TlvRepeatedField

▸ **TlvRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions?`): [`RepeatedFieldType`](../interfaces/tlv_export.RepeatedFieldType.md)\<`T`[]\>

Object TLV mandatory field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\> |
| `lengthOptions?` | [`LengthConstraints`](tlv_export.md#lengthconstraints) |

#### Returns

[`RepeatedFieldType`](../interfaces/tlv_export.RepeatedFieldType.md)\<`T`[]\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L280)

___

### TlvTaggedList

▸ **TlvTaggedList**\<`F`\>(`fields`): [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<`F`\>

List TLV schema with all tagged entries.
List entries that can appear multiple times can be defined using TlvRepeatedField/TlvOptionalRepeatedField and are
represented as Arrays.
TODO: We represent Tlv Lists right now as named object properties. This formally does not match the spec, which
     defines a list as a sequence of TLV elements with optional tag where the order matters. That's ok for now
     (also with the help of "Repeated Fields") because it not makes any real difference for now for the current
     existing data structures. We need to change once this changes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv_export.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<`F`\>

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:259](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvObject.ts#L259)
