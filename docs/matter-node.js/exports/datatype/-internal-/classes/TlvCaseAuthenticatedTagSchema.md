[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/datatype](../../README.md) / [\<internal\>](../README.md) / TlvCaseAuthenticatedTagSchema

# Class: TlvCaseAuthenticatedTagSchema

Tlv schema for an CASE Authenticated Tag.

## Extends

- [`TlvWrapper`](../../../tlv/classes/TlvWrapper.md)\<[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag), `number`\>

## Constructors

### new TlvCaseAuthenticatedTagSchema()

> **new TlvCaseAuthenticatedTagSchema**(): [`TlvCaseAuthenticatedTagSchema`](TlvCaseAuthenticatedTagSchema.md)

#### Returns

[`TlvCaseAuthenticatedTagSchema`](TlvCaseAuthenticatedTagSchema.md)

#### Overrides

`TlvWrapper<CaseAuthenticatedTag, number>.constructor`

#### Source

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:23

## Properties

### underlyingSchema

> `protected` `readonly` **underlyingSchema**: [`TlvSchema`](../../../tlv/classes/TlvSchema.md)\<`number`\>

#### Inherited from

`TlvWrapper.underlyingSchema`

#### Source

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:9

***

### wrap()

> `protected` `readonly` **wrap**: (`object`) => `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `object` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |

#### Returns

`number`

#### Inherited from

`TlvWrapper.wrap`

#### Source

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:10

## Methods

### decode()

> **decode**(`encoded`, `validate`?): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

***

### decodeInternal()

> **decodeInternal**(`encoded`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

***

### decodeTlv()

> **decodeTlv**(`encoded`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../../../tlv/README.md#tlvstream) |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:13

***

### decodeTlvInternal()

> **decodeTlvInternal**(`reader`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../../../tlv/interfaces/TlvReader.md) |

#### Returns

`object`

##### tag?

> `optional` **tag**: [`TlvTag`](../../../tlv/README.md#tlvtag)

##### value

> **value**: [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../../../tlv/interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../../../tlv/README.md#tlvtypelength) |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decodeTlvInternalValue`

#### Source

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:13

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |

#### Returns

`Uint8Array`

#### Inherited from

`TlvWrapper.encode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:9

***

### encodeInternal()

> **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |

#### Returns

`Uint8Array`

#### Inherited from

`TlvWrapper.encodeInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../../../tlv/README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../../../tlv/README.md#tlvstream)

#### Inherited from

`TlvWrapper.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

***

### encodeTlvInternal()

> **encodeTlvInternal**(`writer`, `value`, `tag`?, `forWriteInteraction`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../../../tlv/interfaces/TlvWriter.md) |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |
| `tag`? | [`TlvTag`](../../../tlv/README.md#tlvtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Inherited from

`TlvWrapper.encodeTlvInternal`

#### Source

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:14

***

### injectField()

> **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.injectField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

***

### removeField()

> **removeField**(`value`, `_fieldId`, `_removeChecker`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.removeField`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

***

### validate()

> **validate**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |

#### Returns

`void`

#### Overrides

`TlvWrapper.validate`

#### Source

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:24
