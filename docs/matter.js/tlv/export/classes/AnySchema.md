[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / AnySchema

# Class: AnySchema

## Extends

- [`TlvSchema`](TlvSchema.md)\<[`TlvStream`](../README.md#tlvstream)\>

## Constructors

### new AnySchema()

> **new AnySchema**(): [`AnySchema`](AnySchema.md)

#### Returns

[`AnySchema`](AnySchema.md)

#### Inherited from

`TlvSchema<TlvStream>.constructor`

## Methods

### decode()

> **decode**(`encoded`, `validate`): [`TlvStream`](../README.md#tlvstream)

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeAnyTlvStream()

> **decodeAnyTlvStream**(`encoded`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`any`

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L113)

***

### decodeGenericArrayOrList()

> **decodeGenericArrayOrList**(`reader`): `any`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](TlvArrayReader.md) |

#### Returns

`any`[]

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L162)

***

### decodeGenericElement()

> **decodeGenericElement**(`reader`, `preReadElement`?, `allowTag`?): `any`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `reader` | [`TlvArrayReader`](TlvArrayReader.md) | `undefined` |
| `preReadElement`? | [`TlvElement`](../README.md#tlvelementt)\<`any`\> | `undefined` |
| `allowTag`? | `boolean` | `false` |

#### Returns

`any`

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L126)

***

### decodeGenericStructure()

> **decodeGenericStructure**(`reader`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](TlvArrayReader.md) |

#### Returns

`object`

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L181)

***

### decodeInternal()

> **decodeInternal**(`encoded`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.decodeInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

***

### decodeTlv()

> **decodeTlv**(`encoded`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

[`TlvStream`](../README.md#tlvstream)

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

> **value**: [`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L67)

***

### decodeTlvValueRec()

> **decodeTlvValueRec**(`reader`, `typeLength`, `tlvStream`, `tag`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |
| `tlvStream` | [`TlvStream`](../README.md#tlvstream) |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L71)

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../README.md#tlvstream) |

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
| `value` | [`TlvStream`](../README.md#tlvstream) |

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
| `value` | [`TlvStream`](../README.md#tlvstream) | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L24)

***

### encodeTlvInternal()

> **encodeTlvInternal**(`writer`, `tlvStream`, `tagAssigned`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `tlvStream` | [`TlvStream`](../README.md#tlvstream) |
| `tagAssigned`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L39)

***

### getEncodedByteLength()

> **getEncodedByteLength**(`tlvStream`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tlvStream` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`number`

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L14)

***

### injectField()

> **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../README.md#tlvstream) |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.injectField`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L43)

***

### removeField()

> **removeField**(`value`, `_fieldId`, `_removeChecker`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../README.md#tlvstream) |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.removeField`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L47)

***

### validate()

> **validate**(`tlvStream`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tlvStream` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

[packages/matter.js/src/tlv/TlvAny.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvAny.ts#L101)
