[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / ArraySchema

# Class: ArraySchema\<T\>

Schema to encode an array or string in TLV.

## See

MatterSpecification.v10.Core § A.11.2 and A.11.4

## Extends

- [`TlvSchema`](TlvSchema.md)\<`T`[]\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new ArraySchema()

> **new ArraySchema**\<`T`\>(`elementSchema`, `minLength`, `maxLength`): [`ArraySchema`](ArraySchema.md)\<`T`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `elementSchema` | [`TlvSchema`](TlvSchema.md)\<`T`\> | `undefined` |
| `minLength` | `number` | `0` |
| `maxLength` | `number` | `65535` |

#### Returns

[`ArraySchema`](ArraySchema.md)\<`T`\>

#### Overrides

`TlvSchema<T[]>.constructor`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L33)

## Properties

### elementSchema

> `readonly` **elementSchema**: [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L34)

***

### maxLength

> `readonly` **maxLength**: `number` = `65535`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L36)

***

### minLength

> `readonly` **minLength**: `number` = `0`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L35)

## Methods

### decode()

> **decode**(`encoded`, `validate`): `T`[]

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`T`[]

#### Inherited from

`TlvSchema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeFromChunkedArray()

> **decodeFromChunkedArray**(`chunks`, `currentValue`?): `T`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chunks` | [`ArrayAsChunked`](../README.md#arrayaschunked) |
| `currentValue`? | `T`[] |

#### Returns

`T`[]

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L102)

***

### decodeInternal()

> **decodeInternal**(`encoded`): `T`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`T`[]

#### Inherited from

`TlvSchema.decodeInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

***

### decodeTlv()

> **decodeTlv**(`encoded`): `T`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`T`[]

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

> **value**: `T`[]

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): `T`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

`T`[]

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L47)

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

`Uint8Array`

#### Inherited from

`TlvSchema.encode`

#### Source

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

***

### encodeAsChunkedArray()

> **encodeAsChunkedArray**(`value`): [`ArrayAsChunked`](../README.md#arrayaschunked)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

[`ArrayAsChunked`](../README.md#arrayaschunked)

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L128)

***

### encodeInternal()

> **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T`[] |

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
| `value` | `T`[] | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L24)

***

### encodeTlvInternal()

> **encodeTlvInternal**(`writer`, `value`, `tag`?, `forWriteInteraction`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `value` | `T`[] |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L41)

***

### injectField()

> **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): `T`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T`[] |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

`T`[]

#### Overrides

`TlvSchema.injectField`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L60)

***

### removeField()

> **removeField**(`value`, `fieldId`, `removeChecker`): `T`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T`[] |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

`T`[]

#### Overrides

`TlvSchema.removeField`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L75)

***

### validate()

> **validate**(`data`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T`[] |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

[packages/matter.js/src/tlv/TlvArray.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvArray.ts#L84)
