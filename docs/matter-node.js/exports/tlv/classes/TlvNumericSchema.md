[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvNumericSchema

# Class: TlvNumericSchema\<T\>

Schema to encode an unsigned integer in TLV.

## See

MatterSpecification.v10.Core § A.11.1

## Extends

- [`TlvSchema`](TlvSchema.md)\<`T`\>

## Extended by

- [`TlvNumberSchema`](TlvNumberSchema.md)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* `bigint` \| `number` |

## Constructors

### new TlvNumericSchema()

> **new TlvNumericSchema**\<`T`\>(`type`, `lengthProvider`, `min`?, `max`?): [`TlvNumericSchema`](TlvNumericSchema.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enumerations/TlvType.md#signedint) \| [`UnsignedInt`](../enumerations/TlvType.md#unsignedint) \| [`Float`](../enumerations/TlvType.md#float) |
| `lengthProvider` | (`value`) => [`TlvLength`](../enumerations/TlvLength.md) |
| `min`? | `T` |
| `max`? | `T` |

#### Returns

[`TlvNumericSchema`](TlvNumericSchema.md)\<`T`\>

#### Overrides

`TlvSchema<T>.constructor`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:15

## Properties

### lengthProvider()

> `protected` `readonly` **lengthProvider**: (`value`) => [`TlvLength`](../enumerations/TlvLength.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`TlvLength`](../enumerations/TlvLength.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:12

***

### max?

> `protected` `optional` `readonly` **max**: `T`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:14

***

### min?

> `protected` `optional` `readonly` **min**: `T`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:13

***

### type

> `protected` `readonly` **type**: [`SignedInt`](../enumerations/TlvType.md#signedint) \| [`UnsignedInt`](../enumerations/TlvType.md#unsignedint) \| [`Float`](../enumerations/TlvType.md#float)

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:11

## Methods

### bound()

> **bound**(`__namedParameters`): [`TlvNumericSchema`](TlvNumericSchema.md)\<`T`\>

Restrict value range.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`NumericConstraints`](../README.md#numericconstraintst)\<`T`\> |

#### Returns

[`TlvNumericSchema`](TlvNumericSchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:21

***

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

#### Inherited from

`TlvSchema.decode`

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

#### Inherited from

`TlvSchema.decodeInternal`

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

> **value**: `T`

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

`T`

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:17

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
| `value` | `T` |

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
| `value` | `T` |
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
| `value` | `T` |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:16

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

#### Inherited from

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
| `value` | `T` |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:18

***

### validateBoundaries()

> **validateBoundaries**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:19
