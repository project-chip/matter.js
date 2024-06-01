[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvWrapper

# Class: TlvWrapper\<O, T\>

## Extends

- [`TlvSchema`](TlvSchema.md)\<`O`\>

## Extended by

- [`TlvCaseAuthenticatedTagSchema`](../../datatype/-internal-/classes/TlvCaseAuthenticatedTagSchema.md)
- [`FabricIndexTlvWrapper`](../../datatype/-internal-/classes/FabricIndexTlvWrapper.md)

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

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:12

## Properties

### underlyingSchema

> `protected` `readonly` **underlyingSchema**: [`TlvSchema`](TlvSchema.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:9

***

### unwrap

> `private` `readonly` **unwrap**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:11

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

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:10

## Methods

### decode()

> **decode**(`encoded`, `validate`?): `O`

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

`O`

#### Inherited from

`TlvSchema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

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

> **value**: `O`

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

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

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:13

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

packages/matter.js/dist/esm/schema/Schema.d.ts:9

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `O` |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

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

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:14

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

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

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:15
