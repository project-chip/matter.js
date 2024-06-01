[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvNumberSchema

# Class: TlvNumberSchema

## Extends

- [`TlvNumericSchema`](TlvNumericSchema.md)\<`number`\>

## Constructors

### new TlvNumberSchema()

> **new TlvNumberSchema**(`type`, `lengthProvider`, `min`?, `max`?): [`TlvNumberSchema`](TlvNumberSchema.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`SignedInt`](../enumerations/TlvType.md#signedint) \| [`UnsignedInt`](../enumerations/TlvType.md#unsignedint) \| [`Float`](../enumerations/TlvType.md#float) |
| `lengthProvider` | (`value`) => [`TlvLength`](../enumerations/TlvLength.md) |
| `min`? | `number` |
| `max`? | `number` |

#### Returns

[`TlvNumberSchema`](TlvNumberSchema.md)

#### Overrides

`TlvNumericSchema<number>.constructor`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:28

## Properties

### lengthProvider()

> `protected` `readonly` **lengthProvider**: (`value`) => [`TlvLength`](../enumerations/TlvLength.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`TlvLength`](../enumerations/TlvLength.md)

#### Inherited from

`TlvNumericSchema.lengthProvider`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:12

***

### max?

> `protected` `optional` `readonly` **max**: `number`

#### Inherited from

`TlvNumericSchema.max`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:14

***

### min?

> `protected` `optional` `readonly` **min**: `number`

#### Inherited from

`TlvNumericSchema.min`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:13

***

### type

> `protected` `readonly` **type**: [`SignedInt`](../enumerations/TlvType.md#signedint) \| [`UnsignedInt`](../enumerations/TlvType.md#unsignedint) \| [`Float`](../enumerations/TlvType.md#float)

#### Inherited from

`TlvNumericSchema.type`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:11

## Methods

### bound()

> **bound**(`__namedParameters`): [`TlvNumericSchema`](TlvNumericSchema.md)\<`number`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`NumericConstraints`](../README.md#numericconstraintst)\<`number`\> |

#### Returns

[`TlvNumericSchema`](TlvNumericSchema.md)\<`number`\>

#### Overrides

`TlvNumericSchema.bound`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:30

***

### decode()

> **decode**(`encoded`, `validate`?): `number`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

`number`

#### Inherited from

`TlvNumericSchema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

***

### decodeInternal()

> **decodeInternal**(`encoded`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`number`

#### Inherited from

`TlvNumericSchema.decodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

***

### decodeTlv()

> **decodeTlv**(`encoded`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`number`

#### Inherited from

`TlvNumericSchema.decodeTlv`

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

> **value**: `number`

#### Inherited from

`TlvNumericSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

`number`

#### Overrides

`TlvNumericSchema.decodeTlvInternalValue`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:29

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Inherited from

`TlvNumericSchema.encode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:9

***

### encodeInternal()

> **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Uint8Array`

#### Inherited from

`TlvNumericSchema.encodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvNumericSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

***

### encodeTlvInternal()

> **encodeTlvInternal**(`writer`, `value`, `tag`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `value` | `number` |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`void`

#### Inherited from

`TlvNumericSchema.encodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:16

***

### injectField()

> **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

`number`

#### Inherited from

`TlvNumericSchema.injectField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

***

### removeField()

> **removeField**(`value`, `_fieldId`, `_removeChecker`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

`number`

#### Inherited from

`TlvNumericSchema.removeField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

***

### validate()

> **validate**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

`TlvNumericSchema.validate`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:31

***

### validateBoundaries()

> **validateBoundaries**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

`TlvNumericSchema.validateBoundaries`

#### Source

packages/matter.js/dist/esm/tlv/TlvNumber.d.ts:19
