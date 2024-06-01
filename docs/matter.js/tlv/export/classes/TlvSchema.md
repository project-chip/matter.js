[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvSchema

# Class: `abstract` TlvSchema\<T\>

## Extends

- [`Schema`](../../../schema/export/classes/Schema.md)\<`T`, [`ByteArray`](../../../util/export/README.md#bytearray)\>

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

> **decode**(`encoded`, `validate`): `T`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`T`

#### Implementation of

`TlvSchema.decode`

#### Inherited from

`Schema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

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

> **value**: `T`

#### Implementation of

`TlvSchema.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

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

[packages/matter.js/src/tlv/TlvSchema.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L39)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L18)

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `value` | `T` | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Implementation of

`TlvSchema.encodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L24)

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

[packages/matter.js/src/tlv/TlvSchema.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L41)

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

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L43)

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

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L47)

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

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
