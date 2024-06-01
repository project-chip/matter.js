[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / ArraySchema

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

> **new ArraySchema**\<`T`\>(`elementSchema`, `minLength`?, `maxLength`?): [`ArraySchema`](ArraySchema.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `elementSchema` | [`TlvSchema`](TlvSchema.md)\<`T`\> |
| `minLength`? | `number` |
| `maxLength`? | `number` |

#### Returns

[`ArraySchema`](ArraySchema.md)\<`T`\>

#### Overrides

`TlvSchema<T[]>.constructor`

#### Source

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:27

## Properties

### elementSchema

> `readonly` **elementSchema**: [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:24

***

### maxLength

> `readonly` **maxLength**: `number`

#### Source

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:26

***

### minLength

> `readonly` **minLength**: `number`

#### Source

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:25

## Methods

### decode()

> **decode**(`encoded`, `validate`?): `T`[]

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

`T`[]

#### Inherited from

`TlvSchema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:33

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

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

> **value**: `T`[]

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:29

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

packages/matter.js/dist/esm/schema/Schema.d.ts:9

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:34

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T`[] |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:28

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:30

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:31

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

packages/matter.js/dist/esm/tlv/TlvArray.d.ts:32
