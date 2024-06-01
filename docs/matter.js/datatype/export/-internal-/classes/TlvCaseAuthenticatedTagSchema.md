[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [datatype/export](../../README.md) / [\<internal\>](../README.md) / TlvCaseAuthenticatedTagSchema

# Class: TlvCaseAuthenticatedTagSchema

Tlv schema for an CASE Authenticated Tag.

## Extends

- [`TlvWrapper`](../../../../tlv/export/classes/TlvWrapper.md)\<[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag), `number`\>

## Constructors

### new TlvCaseAuthenticatedTagSchema()

> **new TlvCaseAuthenticatedTagSchema**(): [`TlvCaseAuthenticatedTagSchema`](TlvCaseAuthenticatedTagSchema.md)

#### Returns

[`TlvCaseAuthenticatedTagSchema`](TlvCaseAuthenticatedTagSchema.md)

#### Overrides

`TlvWrapper<CaseAuthenticatedTag, number>.constructor`

#### Source

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L53)

## Properties

### underlyingSchema

> `protected` `readonly` **underlyingSchema**: [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`number`\>

#### Inherited from

`TlvWrapper.underlyingSchema`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L12)

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

[packages/matter.js/src/tlv/TlvWrapper.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L13)

## Methods

### decode()

> **decode**(`encoded`, `validate`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

***

### decodeTlv()

> **decodeTlv**(`encoded`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../../../../tlv/export/README.md#tlvstream) |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L30)

***

### decodeTlvInternal()

> **decodeTlvInternal**(`reader`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../../../../tlv/export/interfaces/TlvReader.md) |

#### Returns

`object`

##### tag?

> `optional` **tag**: [`TlvTag`](../../../../tlv/export/README.md#tlvtag)

##### value

> **value**: [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../../../../tlv/export/interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../../../../tlv/export/README.md#tlvtypelength) |

#### Returns

[`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag)

#### Inherited from

`TlvWrapper.decodeTlvInternalValue`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L19)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L18)

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`): [`TlvStream`](../../../../tlv/export/README.md#tlvstream)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../../../../tlv/export/README.md#tlvstream)

#### Inherited from

`TlvWrapper.encodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L24)

***

### encodeTlvInternal()

> **encodeTlvInternal**(`writer`, `value`, `tag`?, `forWriteInteraction`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../../../../tlv/export/interfaces/TlvWriter.md) |
| `value` | [`CaseAuthenticatedTag`](../../README.md#caseauthenticatedtag) |
| `tag`? | [`TlvTag`](../../../../tlv/export/README.md#tlvtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Inherited from

`TlvWrapper.encodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvWrapper.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvWrapper.ts#L23)

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

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L43)

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

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L47)

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

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L61)
