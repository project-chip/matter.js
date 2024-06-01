[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / tlv/export

# tlv/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Enumerations

- [TlvLength](enumerations/TlvLength.md)
- [TlvType](enumerations/TlvType.md)

### Classes

- [AnySchema](classes/AnySchema.md)
- [ArraySchema](classes/ArraySchema.md)
- [BooleanSchema](classes/BooleanSchema.md)
- [NoArgumentsSchema](classes/NoArgumentsSchema.md)
- [NullableSchema](classes/NullableSchema.md)
- [ObjectSchema](classes/ObjectSchema.md)
- [StringSchema](classes/StringSchema.md)
- [TlvArrayReader](classes/TlvArrayReader.md)
- [TlvArrayWriter](classes/TlvArrayWriter.md)
- [TlvByteArrayReader](classes/TlvByteArrayReader.md)
- [TlvByteArrayWriter](classes/TlvByteArrayWriter.md)
- [TlvCodec](classes/TlvCodec.md)
- [TlvNumberSchema](classes/TlvNumberSchema.md)
- [TlvNumericSchema](classes/TlvNumericSchema.md)
- [TlvSchema](classes/TlvSchema.md)
- [TlvWrapper](classes/TlvWrapper.md)
- [VoidSchema](classes/VoidSchema.md)

### Interfaces

- [FieldType](interfaces/FieldType.md)
- [OptionalFieldType](interfaces/OptionalFieldType.md)
- [OptionalRepeatedFieldType](interfaces/OptionalRepeatedFieldType.md)
- [RepeatedFieldType](interfaces/RepeatedFieldType.md)
- [TlvReader](interfaces/TlvReader.md)
- [TlvWriter](interfaces/TlvWriter.md)

## Type Aliases

### ArrayAsChunked

> **ArrayAsChunked**: [`ArrayChunkData`](-internal-/README.md#arraychunkdata)[]

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L25)

***

### LengthConstraints

> **LengthConstraints**: `object`

#### Type declaration

##### length?

> `optional` **length**: `number`

##### maxLength?

> `optional` **maxLength**: `number`

##### minLength?

> `optional` **minLength**: `number`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L15)

***

### NumericConstraints\<T\>

> **NumericConstraints**\<`T`\>: `object`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `number` \| `bigint` | `number` \| `bigint` |

#### Type declaration

##### max?

> `optional` **max**: `T`

##### min?

> `optional` **min**: `T`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L84)

***

### TlvElement\<T\>

> **TlvElement**\<`T`\>: `object`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`TlvTypeLength`](README.md#tlvtypelength) |

#### Type declaration

##### tag?

> `optional` **tag**: [`TlvTag`](README.md#tlvtag)

##### typeLength

> **typeLength**: `T`

##### value?

> `optional` **value**: [`TlvToPrimitive`](README.md#tlvtoprimitive)\[`T`\[`"type"`\]\]

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L54)

***

### TlvFields

> **TlvFields**: `object`

#### Index signature

 \[`field`: `string`\]: [`FieldType`](interfaces/FieldType.md)\<`any`\>

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L40)

***

### TlvStream

> **TlvStream**: [`TlvElement`](README.md#tlvelementt)\<`any`\>[]

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L52)

***

### TlvTag

> **TlvTag**: `object`

MatterSpecification.v10.Core § A.2

#### Type declaration

##### id?

> `optional` **id**: `number`

##### profile?

> `optional` **profile**: `number`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L110)

***

### TlvToPrimitive

> **TlvToPrimitive**: `object`

Converts [TlvType](enumerations/TlvType.md) to the js primitive type.

#### Type declaration

##### 0

> **0**: `bigint` \| `number`

##### 10

> **10**: `number`

##### 12

> **12**: `string`

##### 16

> **16**: [`ByteArray`](../../util/export/README.md#bytearray)

##### 20

> **20**: `null`

##### 21

> **21**: `never`

##### 22

> **22**: `never`

##### 23

> **23**: `never`

##### 24

> **24**: `never`

##### 4

> **4**: `bigint` \| `number`

##### 8

> **8**: `never`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L66)

***

### TlvTypeLength

> **TlvTypeLength**: `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object`

Type and length or value, when applicable.

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L52)

***

### TypeFromFields\<F\>

> **TypeFromFields**\<`F`\>: [`Merge`](../../util/export/README.md#mergeab)\<[`TypeForMandatoryFields`](-internal-/README.md#typeformandatoryfieldsfmf)\<`F`, [`MandatoryFieldNames`](-internal-/README.md#mandatoryfieldnamesf)\<`F`\>\>, [`TypeForOptionalFields`](-internal-/README.md#typeforoptionalfieldsfmf)\<`F`, [`OptionalFieldNames`](-internal-/README.md#optionalfieldnamesf)\<`F`\>\>\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](README.md#tlvfields) |

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L51)

***

### TypeFromSchema\<S\>

> **TypeFromSchema**\<`S`\>: `S` *extends* [`TlvSchema`](classes/TlvSchema.md)\<infer T\> ? `T` : `never`

Type defined by the TLV schema.

#### Type parameters

| Type parameter |
| :------ |
| `S` *extends* [`TlvSchema`](classes/TlvSchema.md)\<`any`\> |

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L92)

## Variables

### TlvAny

> `const` **TlvAny**: [`AnySchema`](classes/AnySchema.md)

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L201)

***

### TlvBoolean

> `const` **TlvBoolean**: [`BooleanSchema`](classes/BooleanSchema.md)

Boolean TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvBoolean.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvBoolean.ts#L33)

***

### TlvByteString

> `const` **TlvByteString**: [`StringSchema`](classes/StringSchema.md)\<[`ByteString`](enumerations/TlvType.md#bytestring)\>

ByteString TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvString.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L73)

***

### TlvDouble

> `const` **TlvDouble**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L118)

***

### TlvEpochS

> `const` **TlvEpochS**: [`TlvNumberSchema`](classes/TlvNumberSchema.md) = `TlvUInt32`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L199)

***

### TlvEpochUs

> `const` **TlvEpochUs**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L198)

***

### TlvFloat

> `const` **TlvFloat**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

Unsigned integer TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L117)

***

### TlvHardwareAddress

> `const` **TlvHardwareAddress**: [`StringSchema`](classes/StringSchema.md)\<[`ByteString`](enumerations/TlvType.md#bytestring)\>

#### Source

[packages/matter.js/src/tlv/TlvString.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L87)

***

### TlvInt16

> `const` **TlvInt16**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L125)

***

### TlvInt32

> `const` **TlvInt32**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L131)

***

### TlvInt64

> `const` **TlvInt64**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L137)

***

### TlvInt8

> `const` **TlvInt8**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L119)

***

### TlvLongNumberSchema()

> `const` **TlvLongNumberSchema**: (`type`, `lengthProvider`, `min`?, `max`?) => [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`SignedInt`](enumerations/TlvType.md#signedint) \| [`UnsignedInt`](enumerations/TlvType.md#unsignedint) \| [`Float`](enumerations/TlvType.md#float) |
| `lengthProvider` | (`value`) => [`TlvLength`](enumerations/TlvLength.md) |
| `min`? | `number` \| `bigint` |
| `max`? | `number` \| `bigint` |

#### Returns

[`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Type declaration

##### prototype

> **prototype**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`any`\>

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L114)

***

### TlvNoArguments

> `const` **TlvNoArguments**: [`NoArgumentsSchema`](classes/NoArgumentsSchema.md)

Void TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvNoArguments.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNoArguments.ts#L26)

***

### TlvPercent

> `const` **TlvPercent**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number`\>

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:194](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L194)

***

### TlvPercent100ths

> `const` **TlvPercent100ths**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number`\>

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L195)

***

### TlvPosixMs

> `const` **TlvPosixMs**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L200)

***

### TlvString

> `const` **TlvString**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvString.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L76)

***

### TlvString256max

> `const` **TlvString256max**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvString.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L85)

***

### TlvString32max

> `const` **TlvString32max**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvString.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L79)

***

### TlvString64max

> `const` **TlvString64max**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvString.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L82)

***

### TlvSysTimeMS

> `const` **TlvSysTimeMS**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L202)

***

### TlvSysTimeUs

> `const` **TlvSysTimeUs**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\> = `TlvUInt64`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L201)

***

### TlvUInt16

> `const` **TlvUInt16**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L149)

***

### TlvUInt24

> `const` **TlvUInt24**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L155)

***

### TlvUInt32

> `const` **TlvUInt32**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L161)

***

### TlvUInt64

> `const` **TlvUInt64**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L167)

***

### TlvUInt8

> `const` **TlvUInt8**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L143)

***

### TlvVoid

> `const` **TlvVoid**: [`VoidSchema`](classes/VoidSchema.md)

Void TLV schema.

#### Source

[packages/matter.js/src/tlv/TlvVoid.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvVoid.ts#L34)

## Functions

### TlvArray()

> **TlvArray**\<`T`\>(`elementSchema`, `__namedParameters`): [`ArraySchema`](classes/ArraySchema.md)\<`T`\>

Array TLV schema.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `elementSchema` | [`TlvSchema`](classes/TlvSchema.md)\<`T`\> |
| `__namedParameters` | [`LengthConstraints`](README.md#lengthconstraints) |

#### Returns

[`ArraySchema`](classes/ArraySchema.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L140)

***

### TlvBitmap()

> **TlvBitmap**\<`T`\>(`underlyingSchema`, `bitSchema`): [`TlvWrapper`](classes/TlvWrapper.md)\<[`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`T`\>, `number`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](../../schema/export/README.md#bitschema) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `underlyingSchema` | [`TlvNumberSchema`](classes/TlvNumberSchema.md) |
| `bitSchema` | `T` |

#### Returns

[`TlvWrapper`](classes/TlvWrapper.md)\<[`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`T`\>, `number`\>

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L175)

***

### TlvEnum()

> **TlvEnum**\<`T`\>(): [`TlvSchema`](classes/TlvSchema.md)\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Returns

[`TlvSchema`](classes/TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L174)

***

### TlvField()

> **TlvField**\<`T`\>(`id`, `schema`, `fallback`?): [`FieldType`](interfaces/FieldType.md)\<`T`\>

Object TLV mandatory field. Optionally provide a fallback value to initialize the field value when devices omit
providing a value against the specifications or in special use cases. Make sure to use a value that is an equivalent
to the value being empty.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](classes/TlvSchema.md)\<`T`\> |
| `fallback`? | `T` |

#### Returns

[`FieldType`](interfaces/FieldType.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:308](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L308)

***

### TlvNullable()

> **TlvNullable**\<`T`\>(`schema`): [`NullableSchema`](classes/NullableSchema.md)\<`T`\>

Nullable TLV schema.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](classes/TlvSchema.md)\<`T`\> |

#### Returns

[`NullableSchema`](classes/NullableSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L66)

***

### TlvObject()

> **TlvObject**\<`F`\>(`fields`): [`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

Object TLV schema.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](README.md#tlvfields) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fields` | `F` |

#### Returns

[`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L286)

***

### TlvOptionalField()

> **TlvOptionalField**\<`T`\>(`id`, `schema`): [`OptionalFieldType`](interfaces/OptionalFieldType.md)\<`T`\>

Object TLV optional field.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](classes/TlvSchema.md)\<`T`\> |

#### Returns

[`OptionalFieldType`](interfaces/OptionalFieldType.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L312)

***

### TlvOptionalRepeatedField()

> **TlvOptionalRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions`?): [`OptionalRepeatedFieldType`](interfaces/OptionalRepeatedFieldType.md)\<`T`[]\>

Object TLV optional field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](classes/TlvSchema.md)\<`T`\> |
| `lengthOptions`? | `object` |
| `lengthOptions.maxLength`? | `number` |

#### Returns

[`OptionalRepeatedFieldType`](interfaces/OptionalRepeatedFieldType.md)\<`T`[]\>

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:335](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L335)

***

### TlvRepeatedField()

> **TlvRepeatedField**\<`T`\>(`id`, `schema`, `lengthOptions`?): [`RepeatedFieldType`](interfaces/RepeatedFieldType.md)\<`T`[]\>

Object TLV mandatory field that can exist repeated in a TLV List structure. The order is preserved on encoding and
decoding.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |
| `schema` | [`TlvSchema`](classes/TlvSchema.md)\<`T`\> |
| `lengthOptions`? | [`LengthConstraints`](README.md#lengthconstraints) |

#### Returns

[`RepeatedFieldType`](interfaces/RepeatedFieldType.md)\<`T`[]\>

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:319](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L319)

***

### TlvTaggedList()

> **TlvTaggedList**\<`F`\>(`fields`, `allowProtocolSpecificTags`): [`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

List TLV schema with all tagged entries.
List entries that can appear multiple times can be defined using TlvRepeatedField/TlvOptionalRepeatedField and are
represented as Arrays.
TODO: We represent Tlv Lists right now as named object properties. This formally does not match the spec, which
     defines a list as a sequence of TLV elements with optional tag where the order matters. That's ok for now
     (also with the help of "Repeated Fields") because it not makes any real difference for now for the current
     existing data structures. We need to change once this changes.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](README.md#tlvfields) |

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `fields` | `F` | `undefined` |
| `allowProtocolSpecificTags` | `boolean` | `false` |

#### Returns

[`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:297](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L297)
