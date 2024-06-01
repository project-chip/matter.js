[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / StringSchema

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

> **new StringSchema**\<`T`\>(`type`, `minLength`, `maxLength`): [`StringSchema`](StringSchema.md)\<`T`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `type` | `T` | `undefined` |
| `minLength` | `number` | `0` |
| `maxLength` | `number` | `1024` |

#### Returns

[`StringSchema`](StringSchema.md)\<`T`\>

#### Overrides

`TlvSchema<TlvToPrimitive[T]>.constructor`

#### Source

[packages/matter.js/src/tlv/TlvString.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L27)

## Properties

### maxLength

> `readonly` **maxLength**: `number` = `1024`

#### Source

[packages/matter.js/src/tlv/TlvString.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L30)

***

### minLength

> `readonly` **minLength**: `number` = `0`

#### Source

[packages/matter.js/src/tlv/TlvString.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L29)

***

### type

> `private` **type**: `T`

#### Source

[packages/matter.js/src/tlv/TlvString.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L28)

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

[packages/matter.js/src/tlv/TlvString.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L63)

***

### decode()

> **decode**(`encoded`, `validate`): [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\]

#### Inherited from

`TlvSchema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

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

[packages/matter.js/src/tlv/TlvSchema.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L30)

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

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

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

[packages/matter.js/src/tlv/TlvString.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L43)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L18)

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\] | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L24)

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

[packages/matter.js/src/tlv/TlvString.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L37)

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

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L43)

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

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L47)

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

[packages/matter.js/src/tlv/TlvString.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvString.ts#L48)
