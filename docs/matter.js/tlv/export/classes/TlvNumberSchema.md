[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvNumberSchema

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

[packages/matter.js/src/tlv/TlvNumber.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L90)

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

[packages/matter.js/src/tlv/TlvNumber.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L41)

***

### max?

> `protected` `optional` `readonly` **max**: `number`

#### Inherited from

`TlvNumericSchema.max`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L43)

***

### min?

> `protected` `optional` `readonly` **min**: `number`

#### Inherited from

`TlvNumericSchema.min`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L42)

***

### type

> `protected` `readonly` **type**: [`SignedInt`](../enumerations/TlvType.md#signedint) \| [`UnsignedInt`](../enumerations/TlvType.md#unsignedint) \| [`Float`](../enumerations/TlvType.md#float)

#### Inherited from

`TlvNumericSchema.type`

#### Source

[packages/matter.js/src/tlv/TlvNumber.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L40)

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

[packages/matter.js/src/tlv/TlvNumber.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L104)

***

### decode()

> **decode**(`encoded`, `validate`): `number`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`number`

#### Inherited from

`TlvNumericSchema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

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

> **value**: `number`

#### Inherited from

`TlvNumericSchema.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

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

[packages/matter.js/src/tlv/TlvNumber.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L99)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L18)

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvNumericSchema.encodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L24)

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

[packages/matter.js/src/tlv/TlvNumber.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L48)

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

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L43)

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

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L47)

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

[packages/matter.js/src/tlv/TlvNumber.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L108)

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

[packages/matter.js/src/tlv/TlvNumber.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvNumber.ts#L66)
