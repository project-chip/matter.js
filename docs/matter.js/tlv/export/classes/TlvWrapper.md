[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvWrapper

# Class: TlvWrapper\<O, T\>

## Extends

- [`TlvSchema`](TlvSchema.md)\<`O`\>

## Extended by

- [`TlvCaseAuthenticatedTagSchema`](../../../datatype/export/-internal-/classes/TlvCaseAuthenticatedTagSchema.md)
- [`FabricIndexTlvWrapper`](../../../datatype/export/-internal-/classes/FabricIndexTlvWrapper.md)

## Type parameters

| Type parameter |
| :------ |
| `O` |
| `T` |

## Constructors

### new TlvWrapper()

> **new TlvWrapper**\<`O`, `T`\>(`underlyingSchema`, `wrap`, `unwrap`): [`TlvWrapper`](TlvWrapper.md)\<`O`, `T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `underlyingSchema` | [`TlvSchema`](TlvSchema.md)\<`T`\> |
| `wrap` | (`object`) => `T` |
| `unwrap` | (`value`) => `O` |

#### Returns

[`TlvWrapper`](TlvWrapper.md)\<`O`, `T`\>

#### Overrides

`TlvSchema<O>.constructor`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L11)

## Properties

### underlyingSchema

> `protected` `readonly` **underlyingSchema**: [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L12)

***

### unwrap()

> `private` `readonly` **unwrap**: (`value`) => `O`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`O`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L14)

***

### wrap()

> `protected` `readonly` **wrap**: (`object`) => `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `object` | `O` |

#### Returns

`T`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L13)

## Methods

### decode()

> **decode**(`encoded`, `validate`): `O`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`O`

#### Inherited from

`TlvSchema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeInternal()

> **decodeInternal**(`encoded`): `O`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`O`

#### Inherited from

`TlvSchema.decodeInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

***

### decodeTlv()

> **decodeTlv**(`encoded`): `O`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

`O`

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

> **value**: `O`

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): `O`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

`O`

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L19)

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `O` |

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
| `value` | `O` |

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
| `value` | `O` | `undefined` |
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
| `value` | `O` |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L23)

***

### injectField()

> **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `O`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `O` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

`O`

#### Inherited from

`TlvSchema.injectField`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L43)

***

### removeField()

> **removeField**(`value`, `_fieldId`, `_removeChecker`): `O`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `O` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

`O`

#### Inherited from

`TlvSchema.removeField`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L47)

***

### validate()

> **validate**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `O` |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L27)
