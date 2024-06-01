[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvSchema

# Class: `abstract` TlvSchema\<T\>

## Extends

- [`Schema`](../../schema/classes/Schema.md)\<`T`, [`ByteArray`](../../../util/export/README.md#bytearray)\>

## Extended by

- [`AnySchema`](AnySchema.md)
- [`ArraySchema`](ArraySchema.md)
- [`BooleanSchema`](BooleanSchema.md)
- [`NullableSchema`](NullableSchema.md)
- [`TlvNumericSchema`](TlvNumericSchema.md)
- [`ObjectSchema`](ObjectSchema.md)
- [`StringSchema`](StringSchema.md)
- [`VoidSchema`](VoidSchema.md)
- [`TlvWrapper`](TlvWrapper.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Implements

- [`TlvSchema`](TlvSchema.md)\<`T`\>

## Constructors

### new TlvSchema()

> **new TlvSchema**\<`T`\>(): [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Returns

[`TlvSchema`](TlvSchema.md)\<`T`\>

#### Inherited from

`Schema<T, ByteArray>.constructor`

## Methods

### decode()

> **decode**(`encoded`, `validate`?): `T`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

`T`

#### Implementation of

`TlvSchema.decode`

#### Inherited from

`Schema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

***

### decodeInternal()

> **decodeInternal**(`encoded`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`T`

#### Implementation of

`TlvSchema.decodeInternal`

#### Overrides

`Schema.decodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

***

### decodeTlv()

> **decodeTlv**(`encoded`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`T`

#### Implementation of

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

> **value**: `T`

#### Implementation of

`TlvSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

***

### decodeTlvInternalValue()

> `abstract` **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

`T`

#### Implementation of

`TlvSchema.decodeTlvInternalValue`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:18

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Uint8Array`

#### Implementation of

`TlvSchema.encode`

#### Inherited from

`Schema.encode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:9

***

### encodeInternal()

> **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Uint8Array`

#### Implementation of

`TlvSchema.encodeInternal`

#### Overrides

`Schema.encodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Implementation of

`TlvSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

***

### encodeTlvInternal()

> `abstract` **encodeTlvInternal**(`writer`, `value`, `tag`?, `forWriteInteraction`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `value` | `T` |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Implementation of

`TlvSchema.encodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:19

***

### injectField()

> **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

`T`

#### Implementation of

`TlvSchema.injectField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

***

### removeField()

> **removeField**(`value`, `_fieldId`, `_removeChecker`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

`T`

#### Implementation of

`TlvSchema.removeField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Implementation of

`TlvSchema.validate`

#### Inherited from

`Schema.validate`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:15
