[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ["/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"](../modules/internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md) / ObjectSchema

# Class: ObjectSchema<F\>

[<internal>](../modules/internal_.md).["/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"](../modules/internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md).ObjectSchema

Schema to encode an object in TLV.

**`See`**

MatterCoreSpecificationV1_0 § A.5.1 and § A.11.4

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/internal_.md#tlvfields) |

## Hierarchy

- [`TlvSchema`](internal_.TlvSchema.md)<[`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>\>

  ↳ **`ObjectSchema`**

## Table of contents

### Constructors

- [constructor](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#constructor)

### Properties

- [fieldById](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#fieldbyid)
- [fieldDefinitions](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#fielddefinitions)
- [type](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#type)

### Methods

- [decode](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#decode)
- [decodeInternal](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#decodeinternal)
- [decodeTlv](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#decodetlv)
- [decodeTlvInternal](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#decodetlvinternalvalue)
- [encode](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#encode)
- [encodeInternal](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#encodeinternal)
- [encodeTlv](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#encodetlv)
- [encodeTlvInternal](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#encodetlvinternal)
- [injectField](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#injectfield)
- [removeField](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#removefield)
- [validate](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md#validate)

## Constructors

### constructor

• **new ObjectSchema**<`F`\>(`fieldDefinitions`, `type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/internal_.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldDefinitions` | `F` |
| `type?` | [`Structure`](../modules/internal_.md#structure) \| [`List`](../modules/internal_.md#list) |

#### Overrides

TlvSchema&lt;TypeFromFields&lt;F\&gt;\&gt;.constructor

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:44

## Properties

### fieldById

• `Private` `Readonly` **fieldById**: `any`

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:43

___

### fieldDefinitions

• `Private` `Readonly` **fieldDefinitions**: `any`

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:41

___

### type

• `Private` `Readonly` **type**: `any`

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:42

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

[`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decode

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/internal_.md#tlvstream) |

#### Returns

[`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeTlv

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:13

___

### decodeTlvInternal

▸ **decodeTlvInternal**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/internal_.TlvReader.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/internal_.md#tlvtag) |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/internal_.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/internal_.md#tlvtypelength) |

#### Returns

[`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:46

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encodeInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/internal_.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |

#### Returns

[`TlvStream`](../modules/internal_.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/internal_.TlvWriter.md) |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |
| `tag?` | [`TlvTag`](../modules/internal_.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:45

___

### injectField

▸ **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.injectField

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:48

___

### removeField

▸ **removeField**(`value`, `fieldId`, `removeChecker`): [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.removeField

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:49

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<`F`\> |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

matter.js/dist/cjs/tlv/TlvObject.d.ts:47
