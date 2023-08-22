[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / NoArgumentsSchema

# Class: NoArgumentsSchema

[exports/tlv](../modules/exports_tlv.md).NoArgumentsSchema

Schema to encode void.

## Hierarchy

- [`VoidSchema`](exports_tlv.VoidSchema.md)

  ↳ **`NoArgumentsSchema`**

## Table of contents

### Constructors

- [constructor](exports_tlv.NoArgumentsSchema.md#constructor)

### Methods

- [decode](exports_tlv.NoArgumentsSchema.md#decode)
- [decodeInternal](exports_tlv.NoArgumentsSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.NoArgumentsSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.NoArgumentsSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.NoArgumentsSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.NoArgumentsSchema.md#encode)
- [encodeInternal](exports_tlv.NoArgumentsSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.NoArgumentsSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.NoArgumentsSchema.md#encodetlvinternal)
- [injectField](exports_tlv.NoArgumentsSchema.md#injectfield)
- [removeField](exports_tlv.NoArgumentsSchema.md#removefield)
- [validate](exports_tlv.NoArgumentsSchema.md#validate)

## Constructors

### constructor

• **new NoArgumentsSchema**()

#### Inherited from

VoidSchema.constructor

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `void`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

`void`

#### Inherited from

VoidSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`void`

#### Inherited from

VoidSchema.decodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`_encoded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

`void`

#### Inherited from

VoidSchema.decodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvVoid.d.ts:13

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
| `value` | `void` |

#### Inherited from

VoidSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`_reader`, `_typeLength`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `_typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

`void`

#### Inherited from

VoidSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvVoid.d.ts:14

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` |

#### Returns

`Uint8Array`

#### Inherited from

VoidSchema.encode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` |

#### Returns

`Uint8Array`

#### Inherited from

VoidSchema.encodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

VoidSchema.encodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | `void` |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

VoidSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNoArguments.d.ts:13

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`void`

#### Inherited from

VoidSchema.injectField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:20

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`void`

#### Inherited from

VoidSchema.removeField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:21

___

### validate

▸ **validate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `void` |

#### Returns

`void`

#### Inherited from

VoidSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvVoid.d.ts:15
