[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](../modules/exports_datatype.md) / [\<internal\>](../modules/exports_datatype._internal_.md) / TlvCaseAuthenticatedTagSchema

# Class: TlvCaseAuthenticatedTagSchema

[exports/datatype](../modules/exports_datatype.md).[\<internal\>](../modules/exports_datatype._internal_.md).TlvCaseAuthenticatedTagSchema

Tlv schema for an CASE Authenticated Tag.

## Hierarchy

- [`TlvWrapper`](exports_tlv.TlvWrapper.md)\<[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag), `number`\>

  ↳ **`TlvCaseAuthenticatedTagSchema`**

## Table of contents

### Constructors

- [constructor](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#constructor)

### Properties

- [underlyingSchema](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#underlyingschema)
- [wrap](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#wrap)

### Methods

- [decode](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#decode)
- [decodeInternal](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#decodeinternal)
- [decodeTlv](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlv)
- [decodeTlvInternal](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlvinternalvalue)
- [encode](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#encode)
- [encodeInternal](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#encodeinternal)
- [encodeTlv](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#encodetlv)
- [encodeTlvInternal](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#encodetlvinternal)
- [injectField](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#injectfield)
- [removeField](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#removefield)
- [validate](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md#validate)

## Constructors

### constructor

• **new TlvCaseAuthenticatedTagSchema**(): [`TlvCaseAuthenticatedTagSchema`](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Returns

[`TlvCaseAuthenticatedTagSchema`](exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Overrides

TlvWrapper\&lt;CaseAuthenticatedTag, number\&gt;.constructor

#### Defined in

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:23

## Properties

### underlyingSchema

• `Protected` `Readonly` **underlyingSchema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`number`\>

#### Inherited from

TlvWrapper.underlyingSchema

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:9

___

### wrap

• `Protected` `Readonly` **wrap**: (`object`: [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)) => `number`

#### Type declaration

▸ (`object`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |

##### Returns

`number`

#### Inherited from

TlvWrapper.wrap

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:10

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:22

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:25

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:26

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:23

___

### encodeTlv

▸ **encodeTlv**(`value`, `options?`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |
| `options?` | [`TlvEncodingOptions`](../modules/exports_tlv.md#tlvencodingoptions) |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvWrapper.encodeTlv

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:24

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `options?` | [`TlvEncodingOptions`](../modules/exports_tlv.md#tlvencodingoptions) |

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:32

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:33

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
