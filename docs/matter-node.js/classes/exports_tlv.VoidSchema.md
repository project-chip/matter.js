[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / VoidSchema

# Class: VoidSchema

[exports/tlv](../modules/exports_tlv.md).VoidSchema

Schema to encode void.

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<`void`\>

  ↳ **`VoidSchema`**

  ↳↳ [`NoArgumentsSchema`](exports_tlv.NoArgumentsSchema.md)

## Table of contents

### Constructors

- [constructor](exports_tlv.VoidSchema.md#constructor)

### Methods

- [decode](exports_tlv.VoidSchema.md#decode)
- [decodeInternal](exports_tlv.VoidSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.VoidSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.VoidSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.VoidSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.VoidSchema.md#encode)
- [encodeInternal](exports_tlv.VoidSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.VoidSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.VoidSchema.md#encodetlvinternal)
- [injectField](exports_tlv.VoidSchema.md#injectfield)
- [removeField](exports_tlv.VoidSchema.md#removefield)
- [validate](exports_tlv.VoidSchema.md#validate)

## Constructors

### constructor

• **new VoidSchema**()

#### Inherited from

TlvSchema<void\>.constructor

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

TlvSchema.decode

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

TlvSchema.decodeInternal

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

#### Overrides

TlvSchema.decodeTlv

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

TlvSchema.decodeTlvInternal

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

#### Overrides

TlvSchema.decodeTlvInternalValue

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

TlvSchema.encode

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

TlvSchema.encodeInternal

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

TlvSchema.encodeTlv

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`_writer`, `_value`, `_tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `_value` | `void` |
| `_tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvVoid.d.ts:12

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

TlvSchema.injectField

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

TlvSchema.removeField

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

#### Overrides

TlvSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvVoid.d.ts:15
