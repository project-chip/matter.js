[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / ObjectSchema

# Class: ObjectSchema<F\>

[tlv/export](../modules/tlv_export.md).ObjectSchema

Schema to encode an object in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § A.5.1 and § A.11.4

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/tlv_export.md#tlvfields) |

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>\>

  ↳ **`ObjectSchema`**

## Table of contents

### Constructors

- [constructor](tlv_export.ObjectSchema.md#constructor)

### Properties

- [fieldById](tlv_export.ObjectSchema.md#fieldbyid)
- [fieldDefinitions](tlv_export.ObjectSchema.md#fielddefinitions)
- [type](tlv_export.ObjectSchema.md#type)

### Methods

- [decode](tlv_export.ObjectSchema.md#decode)
- [decodeInternal](tlv_export.ObjectSchema.md#decodeinternal)
- [decodeTlv](tlv_export.ObjectSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.ObjectSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.ObjectSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.ObjectSchema.md#encode)
- [encodeInternal](tlv_export.ObjectSchema.md#encodeinternal)
- [encodeTlv](tlv_export.ObjectSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.ObjectSchema.md#encodetlvinternal)
- [injectField](tlv_export.ObjectSchema.md#injectfield)
- [removeField](tlv_export.ObjectSchema.md#removefield)
- [validate](tlv_export.ObjectSchema.md#validate)

## Constructors

### constructor

• **new ObjectSchema**<`F`\>(`fieldDefinitions`, `type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/tlv_export.md#tlvfields) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fieldDefinitions` | `F` | `undefined` |
| `type` | [`Structure`](../enums/tlv_export.TlvType.md#structure) \| [`List`](../enums/tlv_export.TlvType.md#list) | `TlvType.Structure` |

#### Overrides

TlvSchema&lt;TypeFromFields&lt;F\&gt;\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L49)

## Properties

### fieldById

• `Private` `Readonly` **fieldById**: { `field`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`any`\> ; `name`: `string`  }[]

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L47)

___

### fieldDefinitions

• `Private` `Readonly` **fieldDefinitions**: `F`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L50)

___

### type

• `Private` `Readonly` **type**: [`Structure`](../enums/tlv_export.TlvType.md#structure) \| [`List`](../enums/tlv_export.TlvType.md#list) = `TlvType.Structure`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L51)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L30)

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
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:77](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L77)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L24)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L61)

___

### injectField

▸ **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.injectField

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L122)

___

### removeField

▸ **removeField**(`value`, `fieldId`, `removeChecker`): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.removeField

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:143](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L143)

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<`F`\> |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvObject.ts#L109)
