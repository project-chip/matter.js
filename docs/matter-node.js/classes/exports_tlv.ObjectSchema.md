[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / ObjectSchema

# Class: ObjectSchema<F\>

[exports/tlv](../modules/exports_tlv.md).ObjectSchema

Schema to encode an object in TLV.

**`See`**

MatterCoreSpecificationV1_0 § A.5.1 and § A.11.4

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/exports_tlv.md#tlvfields) |

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>\>

  ↳ **`ObjectSchema`**

## Table of contents

### Constructors

- [constructor](exports_tlv.ObjectSchema.md#constructor)

### Properties

- [fieldById](exports_tlv.ObjectSchema.md#fieldbyid)
- [fieldDefinitions](exports_tlv.ObjectSchema.md#fielddefinitions)
- [type](exports_tlv.ObjectSchema.md#type)

### Methods

- [decode](exports_tlv.ObjectSchema.md#decode)
- [decodeInternal](exports_tlv.ObjectSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.ObjectSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.ObjectSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.ObjectSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.ObjectSchema.md#encode)
- [encodeInternal](exports_tlv.ObjectSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.ObjectSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.ObjectSchema.md#encodetlvinternal)
- [injectField](exports_tlv.ObjectSchema.md#injectfield)
- [removeField](exports_tlv.ObjectSchema.md#removefield)
- [validate](exports_tlv.ObjectSchema.md#validate)

## Constructors

### constructor

• **new ObjectSchema**<`F`\>(`fieldDefinitions`, `type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/exports_tlv.md#tlvfields) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldDefinitions` | `F` |
| `type?` | [`Structure`](../enums/exports_tlv.TlvType.md#structure) \| [`List`](../enums/exports_tlv.TlvType.md#list) |

#### Overrides

TlvSchema&lt;TypeFromFields&lt;F\&gt;\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:44

## Properties

### fieldById

• `Private` `Readonly` **fieldById**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:43

___

### fieldDefinitions

• `Private` `Readonly` **fieldDefinitions**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:41

___

### type

• `Private` `Readonly` **type**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:42

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:13

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
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:46

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:45

___

### injectField

▸ **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.injectField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:48

___

### removeField

▸ **removeField**(`value`, `fieldId`, `removeChecker`): [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.removeField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:49

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<`F`\> |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvObject.d.ts:47
