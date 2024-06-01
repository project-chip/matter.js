[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / VoidSchema

# Class: VoidSchema

Schema to encode void.

## Extends

- [`TlvSchema`](TlvSchema.md)\<`void`\>

## Extended by

- [`NoArgumentsSchema`](NoArgumentsSchema.md)

## Constructors

### new VoidSchema()

> **new VoidSchema**(): [`VoidSchema`](VoidSchema.md)

#### Returns

[`VoidSchema`](VoidSchema.md)

#### Inherited from

`TlvSchema<void>.constructor`

## Methods

### decode()

> **decode**(`encoded`, `validate`?): `void`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

`void`

#### Inherited from

`TlvSchema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

***

### decodeInternal()

> **decodeInternal**(`encoded`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`void`

#### Inherited from

`TlvSchema.decodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

***

### decodeTlv()

> **decodeTlv**(`_encoded`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`void`

#### Overrides

`TlvSchema.decodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvVoid.d.ts:13

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

> **value**: `void`

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`_reader`, `_typeLength`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `_typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

`void`

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

packages/matter.js/dist/esm/tlv/TlvVoid.d.ts:14

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `void` |

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
| `value` | `void` |

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
| `value` | `void` |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

***

### encodeTlvInternal()

> **encodeTlvInternal**(`_writer`, `_value`, `_tag`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `_value` | `void` |
| `_tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvVoid.d.ts:12

***

### injectField()

> **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `void` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

`void`

#### Inherited from

`TlvSchema.injectField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

***

### removeField()

> **removeField**(`value`, `_fieldId`, `_removeChecker`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `void` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

`void`

#### Inherited from

`TlvSchema.removeField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

***

### validate()

> **validate**(`data`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `void` |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

packages/matter.js/dist/esm/tlv/TlvVoid.d.ts:15
