[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / TlvCaseAuthenticatedTagSchema

# Class: TlvCaseAuthenticatedTagSchema

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).TlvCaseAuthenticatedTagSchema

Tlv schema for an CASE Authenticated Tag.

## Hierarchy

- [`TlvWrapper`](exports_tlv.TlvWrapper.md)\<[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag), `number`\>

  ↳ **`TlvCaseAuthenticatedTagSchema`**

## Table of contents

### Constructors

- [constructor](export._internal_.TlvCaseAuthenticatedTagSchema.md#constructor)

### Methods

- [decode](export._internal_.TlvCaseAuthenticatedTagSchema.md#decode)
- [decodeInternal](export._internal_.TlvCaseAuthenticatedTagSchema.md#decodeinternal)
- [decodeTlv](export._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlv)
- [decodeTlvInternal](export._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](export._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlvinternalvalue)
- [encode](export._internal_.TlvCaseAuthenticatedTagSchema.md#encode)
- [encodeInternal](export._internal_.TlvCaseAuthenticatedTagSchema.md#encodeinternal)
- [encodeTlv](export._internal_.TlvCaseAuthenticatedTagSchema.md#encodetlv)
- [encodeTlvInternal](export._internal_.TlvCaseAuthenticatedTagSchema.md#encodetlvinternal)
- [injectField](export._internal_.TlvCaseAuthenticatedTagSchema.md#injectfield)
- [removeField](export._internal_.TlvCaseAuthenticatedTagSchema.md#removefield)
- [validate](export._internal_.TlvCaseAuthenticatedTagSchema.md#validate)

## Constructors

### constructor

• **new TlvCaseAuthenticatedTagSchema**(): [`TlvCaseAuthenticatedTagSchema`](export._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Returns

[`TlvCaseAuthenticatedTagSchema`](export._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Overrides

TlvWrapper\&lt;CaseAuthenticatedTag, number\&gt;.constructor

#### Defined in

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:23

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decode

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decodeInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decodeTlv

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:13

___

### decodeTlvInternal

▸ **decodeTlvInternal**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |

#### Inherited from

TlvWrapper.decodeTlvInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:13

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |

#### Returns

`Uint8Array`

#### Inherited from

TlvWrapper.encode

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |

#### Returns

`Uint8Array`

#### Inherited from

TlvWrapper.encodeInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvWrapper.encodeTlv

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Inherited from

TlvWrapper.encodeTlvInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:14

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.injectField

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:20

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.removeField

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:21

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |

#### Returns

`void`

#### Overrides

TlvWrapper.validate

#### Defined in

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:24
