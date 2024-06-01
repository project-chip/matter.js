[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / NullableSchema

# Class: NullableSchema\<T\>

Schema to encode a nullable value in TLV.

## See

MatterSpecification.v10.Core § A.11.6

## Extends

- [`TlvSchema`](TlvSchema.md)\<`T` \| `null`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new NullableSchema()

> **new NullableSchema**\<`T`\>(`schema`): [`NullableSchema`](NullableSchema.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](TlvSchema.md)\<`T`\> |

#### Returns

[`NullableSchema`](NullableSchema.md)\<`T`\>

#### Overrides

TlvSchema\<T \| null\>.constructor

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L18)

## Properties

### schema

> `private` `readonly` **schema**: [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L18)

## Methods

### decode()

> **decode**(`encoded`, `validate`): `null` \| `T`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`null` \| `T`

#### Inherited from

`TlvSchema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeInternal()

> **decodeInternal**(`encoded`): `null` \| `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`null` \| `T`

#### Inherited from

`TlvSchema.decodeInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

***

### decodeTlv()

> **decodeTlv**(`encoded`): `null` \| `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`null` \| `T`

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

> **value**: `null` \| `T`

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): `null` \| `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

`null` \| `T`

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L30)

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| `T` |

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
| `value` | `null` \| `T` |

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
| `value` | `null` \| `T` | `undefined` |
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
| `value` | `null` \| `T` |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L22)

***

### injectField()

> **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

`T`

#### Overrides

`TlvSchema.injectField`

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L50)

***

### removeField()

> **removeField**(`value`, `fieldId`, `removeChecker`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

`T`

#### Overrides

`TlvSchema.removeField`

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L57)

***

### validate()

> **validate**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| `T` |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

[packages/matter.js/src/tlv/TlvNullable.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNullable.ts#L46)
