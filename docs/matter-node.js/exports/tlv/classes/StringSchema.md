[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / StringSchema

# Class: StringSchema\<T\>

Schema to encode an byte string or an Utf8 string in TLV.

## See

MatterSpecification.v10.Core § A.11.2

## Extends

- [`TlvSchema`](TlvSchema.md)\<[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ByteString`](../enumerations/TlvType.md#bytestring) \| [`Utf8String`](../enumerations/TlvType.md#utf8string) |

## Constructors

### new StringSchema()

> **new StringSchema**\<`T`\>(`type`, `minLength`?, `maxLength`?): [`StringSchema`](StringSchema.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |
| `minLength`? | `number` |
| `maxLength`? | `number` |

#### Returns

[`StringSchema`](StringSchema.md)\<`T`\>

#### Overrides

`TlvSchema<TlvToPrimitive[T]>.constructor`

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:22

## Properties

### maxLength

> `readonly` **maxLength**: `number`

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:21

***

### minLength

> `readonly` **minLength**: `number`

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:20

***

### type

> `private` **type**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:19

## Methods

### bound()

> **bound**(`__namedParameters`): [`StringSchema`](StringSchema.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`LengthConstraints`](../-internal-/README.md#lengthconstraints) |

#### Returns

[`StringSchema`](StringSchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:26

***

### decode()

> **decode**(`encoded`, `validate`?): [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Inherited from

`TlvSchema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

***

### decodeInternal()

> **decodeInternal**(`encoded`): [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Inherited from

`TlvSchema.decodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

***

### decodeTlv()

> **decodeTlv**(`encoded`): [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Inherited from

`TlvSchema.decodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:13

***

### decodeTlvInternal()

> **decodeTlvInternal**(`reader`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |

#### Returns

`object`

##### tag?

> `optional` **tag**: [`TlvTag`](../README.md#tlvtag)

##### value

> **value**: [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:24

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] |

#### Returns

`Uint8Array`

#### Inherited from

`TlvSchema.encode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:9

***

### encodeInternal()

> **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] |

#### Returns

`Uint8Array`

#### Inherited from

`TlvSchema.encodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

***

### encodeTlvInternal()

> **encodeTlvInternal**(`writer`, `value`, `tag`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:23

***

### injectField()

> **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Inherited from

`TlvSchema.injectField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

***

### removeField()

> **removeField**(`value`, `_fieldId`, `_removeChecker`): [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Inherited from

`TlvSchema.removeField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

***

### validate()

> **validate**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

packages/matter.js/dist/esm/tlv/TlvString.d.ts:25
