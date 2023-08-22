[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / AnySchema

# Class: AnySchema

[exports/tlv](../modules/exports_tlv.md).AnySchema

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\>

  ↳ **`AnySchema`**

## Table of contents

### Constructors

- [constructor](exports_tlv.AnySchema.md#constructor)

### Methods

- [decode](exports_tlv.AnySchema.md#decode)
- [decodeAnyTlvStream](exports_tlv.AnySchema.md#decodeanytlvstream)
- [decodeGenericArrayOrList](exports_tlv.AnySchema.md#decodegenericarrayorlist)
- [decodeGenericElement](exports_tlv.AnySchema.md#decodegenericelement)
- [decodeGenericStructure](exports_tlv.AnySchema.md#decodegenericstructure)
- [decodeInternal](exports_tlv.AnySchema.md#decodeinternal)
- [decodeTlv](exports_tlv.AnySchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.AnySchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.AnySchema.md#decodetlvinternalvalue)
- [decodeTlvValueRec](exports_tlv.AnySchema.md#decodetlvvaluerec)
- [encode](exports_tlv.AnySchema.md#encode)
- [encodeInternal](exports_tlv.AnySchema.md#encodeinternal)
- [encodeTlv](exports_tlv.AnySchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.AnySchema.md#encodetlvinternal)
- [injectField](exports_tlv.AnySchema.md#injectfield)
- [removeField](exports_tlv.AnySchema.md#removefield)
- [validate](exports_tlv.AnySchema.md#validate)

## Constructors

### constructor

• **new AnySchema**()

#### Inherited from

TlvSchema<TlvStream\>.constructor

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeAnyTlvStream

▸ **decodeAnyTlvStream**(`encoded`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:13

___

### decodeGenericArrayOrList

▸ **decodeGenericArrayOrList**(`reader`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](exports_tlv.TlvArrayReader.md) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:15

___

### decodeGenericElement

▸ **decodeGenericElement**(`reader`, `preReadElement?`, `allowTag?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](exports_tlv.TlvArrayReader.md) |
| `preReadElement?` | [`TlvElement`](../modules/exports_tlv.md#tlvelement)<`any`\> |
| `allowTag?` | `boolean` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:14

___

### decodeGenericStructure

▸ **decodeGenericStructure**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvArrayReader`](exports_tlv.TlvArrayReader.md) |

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:16

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

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
| `value` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:10

___

### decodeTlvValueRec

▸ **decodeTlvValueRec**(`reader`, `typeLength`, `tlvStream`, `tag?`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |
| `tlvStream` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:11

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

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
| `value` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

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
| `value` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `tlvStream`, `tagAssigned?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `tlvStream` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |
| `tagAssigned?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:9

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvSchema.injectField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:20

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvSchema.removeField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:21

___

### validate

▸ **validate**(`tlvStream`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tlvStream` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvAny.d.ts:12
