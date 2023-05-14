[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / ObjectSchema

# Class: ObjectSchema<F\>

[tlv](../modules/tlv.md).ObjectSchema

Schema to encode an object in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.5.1 and § A.11.4

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/tlv.md#tlvfields) |

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>\>

  ↳ **`ObjectSchema`**

## Table of contents

### Constructors

- [constructor](tlv.ObjectSchema.md#constructor)

### Properties

- [fieldById](tlv.ObjectSchema.md#fieldbyid)
- [fieldDefinitions](tlv.ObjectSchema.md#fielddefinitions)
- [type](tlv.ObjectSchema.md#type)

### Methods

- [decode](tlv.ObjectSchema.md#decode)
- [decodeInternal](tlv.ObjectSchema.md#decodeinternal)
- [decodeTlv](tlv.ObjectSchema.md#decodetlv)
- [decodeTlvInternal](tlv.ObjectSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.ObjectSchema.md#decodetlvinternalvalue)
- [encode](tlv.ObjectSchema.md#encode)
- [encodeInternal](tlv.ObjectSchema.md#encodeinternal)
- [encodeTlv](tlv.ObjectSchema.md#encodetlv)
- [encodeTlvInternal](tlv.ObjectSchema.md#encodetlvinternal)
- [validate](tlv.ObjectSchema.md#validate)

## Constructors

### constructor

• **new ObjectSchema**<`F`\>(`fieldDefinitions`, `type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](../modules/tlv.md#tlvfields) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fieldDefinitions` | `F` | `undefined` |
| `type` | [`Structure`](../enums/tlv.TlvType.md#structure) \| [`List`](../enums/tlv.TlvType.md#list) | `TlvType.Structure` |

#### Overrides

TlvSchema&lt;TypeFromFields&lt;F\&gt;\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L41)

## Properties

### fieldById

• `Private` `Readonly` **fieldById**: { `field`: [`FieldType`](../interfaces/tlv.FieldType.md)<`any`\> ; `name`: `string`  }[]

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L39)

___

### fieldDefinitions

• `Private` `Readonly` **fieldDefinitions**: `F`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L42)

___

### type

• `Private` `Readonly` **type**: [`Structure`](../enums/tlv.TlvType.md#structure) \| [`List`](../enums/tlv.TlvType.md#list) = `TlvType.Structure`

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L43)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

[`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

#### Inherited from

TlvSchema.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L31)

___

### decodeTlvInternal

▸ **decodeTlvInternal**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |
| `value` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\> |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

[`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\>

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L67)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L19)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\> |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L25)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv.TlvWriter.md) |
| `value` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\> |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L53)

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<`F`\> |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:96](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L96)
