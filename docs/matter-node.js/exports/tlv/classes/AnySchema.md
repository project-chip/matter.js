[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / AnySchema

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

> **decode**(`encoded`, `validate`?): [`TlvStream`](../README.md#tlvstream)

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:14

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:16

***

### decodeGenericElement()

> **decodeGenericElement**(`reader`, `preReadElement`?, `allowTag`?): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](TlvArrayReader.md) |
| `preReadElement`? | [`TlvElement`](../README.md#tlvelementt)\<`any`\> |
| `allowTag`? | `boolean` |

#### Returns

`any`

#### Source

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:15

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:17

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

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

> **value**: [`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:11

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:12

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

packages/matter.js/dist/esm/schema/Schema.d.ts:9

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../README.md#tlvstream) |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:10

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:9

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

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

packages/matter.js/dist/esm/tlv/TlvAny.d.ts:13
