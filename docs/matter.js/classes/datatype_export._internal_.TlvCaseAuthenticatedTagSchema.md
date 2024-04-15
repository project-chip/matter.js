[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [datatype/export](../modules/datatype_export.md) / [\<internal\>](../modules/datatype_export._internal_.md) / TlvCaseAuthenticatedTagSchema

# Class: TlvCaseAuthenticatedTagSchema

[datatype/export](../modules/datatype_export.md).[\<internal\>](../modules/datatype_export._internal_.md).TlvCaseAuthenticatedTagSchema

Tlv schema for an CASE Authenticated Tag.

## Hierarchy

- [`TlvWrapper`](tlv_export.TlvWrapper.md)\<[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag), `number`\>

  ↳ **`TlvCaseAuthenticatedTagSchema`**

## Table of contents

### Constructors

- [constructor](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#constructor)

### Properties

- [underlyingSchema](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#underlyingschema)
- [wrap](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#wrap)

### Methods

- [decode](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#decode)
- [decodeInternal](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#decodeinternal)
- [decodeTlv](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlv)
- [decodeTlvInternal](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#decodetlvinternalvalue)
- [encode](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#encode)
- [encodeInternal](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#encodeinternal)
- [encodeTlv](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#encodetlv)
- [encodeTlvInternal](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#encodetlvinternal)
- [injectField](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#injectfield)
- [removeField](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#removefield)
- [validate](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md#validate)

## Constructors

### constructor

• **new TlvCaseAuthenticatedTagSchema**(): [`TlvCaseAuthenticatedTagSchema`](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Returns

[`TlvCaseAuthenticatedTagSchema`](datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Overrides

TlvWrapper\&lt;CaseAuthenticatedTag, number\&gt;.constructor

#### Defined in

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L53)

## Properties

### underlyingSchema

• `Protected` `Readonly` **underlyingSchema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`number`\>

#### Inherited from

TlvWrapper.underlyingSchema

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvWrapper.ts#L12)

___

### wrap

• `Protected` `Readonly` **wrap**: (`object`: [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)) => `number`

#### Type declaration

▸ (`object`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |

##### Returns

`number`

#### Inherited from

TlvWrapper.wrap

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvWrapper.ts#L13)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L30)

___

### decodeTlvInternal

▸ **decodeTlvInternal**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |

#### Inherited from

TlvWrapper.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvWrapper.ts#L19)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |

#### Returns

`Uint8Array`

#### Inherited from

TlvWrapper.encode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |

#### Returns

`Uint8Array`

#### Inherited from

TlvWrapper.encodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`, `forWriteInteraction?`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvWrapper.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L24)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`, `forWriteInteraction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |
| `forWriteInteraction?` | `boolean` |

#### Returns

`void`

#### Inherited from

TlvWrapper.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvWrapper.ts#L23)

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.injectField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L43)

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)

#### Inherited from

TlvWrapper.removeField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/tlv/TlvSchema.ts#L47)

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag) |

#### Returns

`void`

#### Overrides

TlvWrapper.validate

#### Defined in

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L61)
