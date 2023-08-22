[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / AnySchema

# Class: AnySchema

[tlv/export](../modules/tlv_export.md).AnySchema

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<[`TlvStream`](../modules/tlv_export.md#tlvstream)\>

  ↳ **`AnySchema`**

## Table of contents

### Constructors

- [constructor](tlv_export.AnySchema.md#constructor)

### Methods

- [decode](tlv_export.AnySchema.md#decode)
- [decodeAnyTlvStream](tlv_export.AnySchema.md#decodeanytlvstream)
- [decodeGenericArrayOrList](tlv_export.AnySchema.md#decodegenericarrayorlist)
- [decodeGenericElement](tlv_export.AnySchema.md#decodegenericelement)
- [decodeGenericStructure](tlv_export.AnySchema.md#decodegenericstructure)
- [decodeInternal](tlv_export.AnySchema.md#decodeinternal)
- [decodeTlv](tlv_export.AnySchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.AnySchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.AnySchema.md#decodetlvinternalvalue)
- [decodeTlvValueRec](tlv_export.AnySchema.md#decodetlvvaluerec)
- [encode](tlv_export.AnySchema.md#encode)
- [encodeInternal](tlv_export.AnySchema.md#encodeinternal)
- [encodeTlv](tlv_export.AnySchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.AnySchema.md#encodetlvinternal)
- [injectField](tlv_export.AnySchema.md#injectfield)
- [removeField](tlv_export.AnySchema.md#removefield)
- [validate](tlv_export.AnySchema.md#validate)

## Constructors

### constructor

• **new AnySchema**()

#### Inherited from

TlvSchema<TlvStream\>.constructor

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeAnyTlvStream

▸ **decodeAnyTlvStream**(`encoded`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:87](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L87)

___

### decodeGenericArrayOrList

▸ **decodeGenericArrayOrList**(`reader`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](tlv_export.TlvArrayReader.md) |

#### Returns

`any`[]

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L136)

___

### decodeGenericElement

▸ **decodeGenericElement**(`reader`, `preReadElement?`, `allowTag?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reader` | [`TlvArrayReader`](tlv_export.TlvArrayReader.md) | `undefined` |
| `preReadElement?` | [`TlvElement`](../modules/tlv_export.md#tlvelement)<`any`\> | `undefined` |
| `allowTag` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:100](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L100)

___

### decodeGenericStructure

▸ **decodeGenericStructure**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](tlv_export.TlvArrayReader.md) |

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:155](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L155)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

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
| `value` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L41)

___

### decodeTlvValueRec

▸ **decodeTlvValueRec**(`reader`, `typeLength`, `tlvStream`, `tag?`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `tlvStream` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L45)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

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
| `value` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

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
| `value` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L24)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `tlvStream`, `tagAssigned?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `tlvStream` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |
| `tagAssigned?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L13)

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.injectField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L43)

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.removeField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L52)

___

### validate

▸ **validate**(`tlvStream`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tlvStream` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvAny.ts#L75)
