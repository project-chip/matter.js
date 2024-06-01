[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/tlv

# exports/tlv

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:17

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:8

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

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:23

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:24

***

### TlvFields

> **TlvFields**: `object`

#### Index signature

 \[`field`: `string`\]: [`FieldType`](interfaces/FieldType.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:29

***

### TlvStream

> **TlvStream**: [`TlvElement`](README.md#tlvelementt)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:23

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:79

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:65

***

### TlvTypeLength

> **TlvTypeLength**: `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object`

Type and length or value, when applicable.

#### Source

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:35

***

### TypeFromFields\<F\>

> **TypeFromFields**\<`F`\>: [`Merge`](../../util/export/README.md#mergeab)\<[`TypeForMandatoryFields`](-internal-/README.md#typeformandatoryfieldsfmf)\<`F`, [`MandatoryFieldNames`](-internal-/README.md#mandatoryfieldnamesf)\<`F`\>\>, [`TypeForOptionalFields`](-internal-/README.md#typeforoptionalfieldsfmf)\<`F`, [`OptionalFieldNames`](-internal-/README.md#optionalfieldnamesf)\<`F`\>\>\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](README.md#tlvfields) |

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:45

***

### TypeFromSchema\<S\>

> **TypeFromSchema**\<`S`\>: `S` *extends* [`TlvSchema`](classes/TlvSchema.md)\<infer T\> ? `T` : `never`

Type defined by the TLV schema.

#### Type parameters

| Type parameter |
| :------ |
| `S` *extends* [`TlvSchema`](classes/TlvSchema.md)\<`any`\> |

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:43

## Variables

### TlvAny

> `const` **TlvAny**: [`AnySchema`](classes/AnySchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:21

***

### TlvBoolean

> `const` **TlvBoolean**: [`BooleanSchema`](classes/BooleanSchema.md)

Boolean TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvBoolean.d.ts:19

***

### TlvByteString

> `const` **TlvByteString**: [`StringSchema`](classes/StringSchema.md)\<[`ByteString`](enumerations/TlvType.md#bytestring)\>

ByteString TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:29

***

### TlvDouble

> `const` **TlvDouble**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:38

***

### TlvEpochS

> `const` **TlvEpochS**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:53

***

### TlvEpochUs

> `const` **TlvEpochUs**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:52

***

### TlvFloat

> `const` **TlvFloat**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

Unsigned integer TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:37

***

### TlvHardwareAddress

> `const` **TlvHardwareAddress**: [`StringSchema`](classes/StringSchema.md)\<[`ByteString`](enumerations/TlvType.md#bytestring)\>

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:38

***

### TlvInt16

> `const` **TlvInt16**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:40

***

### TlvInt32

> `const` **TlvInt32**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:41

***

### TlvInt64

> `const` **TlvInt64**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:42

***

### TlvInt8

> `const` **TlvInt8**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:39

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

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:33

***

### TlvNoArguments

> `const` **TlvNoArguments**: [`NoArgumentsSchema`](classes/NoArgumentsSchema.md)

Void TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvNoArguments.d.ts:16

***

### TlvPercent

> `const` **TlvPercent**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:50

***

### TlvPercent100ths

> `const` **TlvPercent100ths**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:51

***

### TlvPosixMs

> `const` **TlvPosixMs**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:54

***

### TlvString

> `const` **TlvString**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:31

***

### TlvString256max

> `const` **TlvString256max**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:37

***

### TlvString32max

> `const` **TlvString32max**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:33

***

### TlvString64max

> `const` **TlvString64max**: [`StringSchema`](classes/StringSchema.md)\<[`Utf8String`](enumerations/TlvType.md#utf8string)\>

String TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:35

***

### TlvSysTimeMS

> `const` **TlvSysTimeMS**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:56

***

### TlvSysTimeUs

> `const` **TlvSysTimeUs**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:55

***

### TlvUInt16

> `const` **TlvUInt16**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:44

***

### TlvUInt24

> `const` **TlvUInt24**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:45

***

### TlvUInt32

> `const` **TlvUInt32**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:46

***

### TlvUInt64

> `const` **TlvUInt64**: [`TlvNumericSchema`](classes/TlvNumericSchema.md)\<`number` \| `bigint`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:47

***

### TlvUInt8

> `const` **TlvUInt8**: [`TlvNumberSchema`](classes/TlvNumberSchema.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:43

***

### TlvVoid

> `const` **TlvVoid**: [`VoidSchema`](classes/VoidSchema.md)

Void TLV schema.

#### Source

packages/matter.js/dist/esm/tlv/TlvVoid.d.ts:18

## Functions

### TlvArray()

> **TlvArray**\<`T`\>(`elementSchema`, `__namedParameters`?): [`ArraySchema`](classes/ArraySchema.md)\<`T`\>

Array TLV schema.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `elementSchema` | [`TlvSchema`](classes/TlvSchema.md)\<`T`\> |
| `__namedParameters`? | [`LengthConstraints`](README.md#lengthconstraints) |

#### Returns

[`ArraySchema`](classes/ArraySchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:37

***

### TlvBitmap()

> **TlvBitmap**\<`T`\>(`underlyingSchema`, `bitSchema`): [`TlvWrapper`](classes/TlvWrapper.md)\<[`TypeFromPartialBitSchema`](../schema/README.md#typefrompartialbitschemat)\<`T`\>, `number`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](../schema/README.md#bitschema) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `underlyingSchema` | [`TlvNumberSchema`](classes/TlvNumberSchema.md) |
| `bitSchema` | `T` |

#### Returns

[`TlvWrapper`](classes/TlvWrapper.md)\<[`TypeFromPartialBitSchema`](../schema/README.md#typefrompartialbitschemat)\<`T`\>, `number`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:49

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

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:48

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:81

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

packages/matter.js/dist/esm/tlv/TlvNullable.d.ts:23

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:65

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:83

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:93

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:88

***

### TlvTaggedList()

> **TlvTaggedList**\<`F`\>(`fields`, `allowProtocolSpecificTags`?): [`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

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

| Parameter | Type |
| :------ | :------ |
| `fields` | `F` |
| `allowProtocolSpecificTags`? | `boolean` |

#### Returns

[`ObjectSchema`](classes/ObjectSchema.md)\<`F`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:75
