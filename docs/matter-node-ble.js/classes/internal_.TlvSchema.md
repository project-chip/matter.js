[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TlvSchema

# Class: TlvSchema<T\>

[<internal>](../modules/internal_.md).TlvSchema

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Schema`](internal_.Schema.md)<`T`, [`ByteArray`](../modules/internal_.md#bytearray-1)\>

  ↳ **`TlvSchema`**

  ↳↳ [`ObjectSchema`](internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.ObjectSchema.md)

## Implements

- [`TlvSchema`](internal_.TlvSchema.md)<`T`\>

## Implemented by

- [`TlvSchema`](internal_.TlvSchema.md)

## Table of contents

### Constructors

- [constructor](internal_.TlvSchema.md#constructor)

### Methods

- [decode](internal_.TlvSchema.md#decode)
- [decodeInternal](internal_.TlvSchema.md#decodeinternal)
- [decodeTlv](internal_.TlvSchema.md#decodetlv)
- [decodeTlvInternal](internal_.TlvSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](internal_.TlvSchema.md#decodetlvinternalvalue)
- [encode](internal_.TlvSchema.md#encode)
- [encodeInternal](internal_.TlvSchema.md#encodeinternal)
- [encodeTlv](internal_.TlvSchema.md#encodetlv)
- [encodeTlvInternal](internal_.TlvSchema.md#encodetlvinternal)
- [injectField](internal_.TlvSchema.md#injectfield)
- [removeField](internal_.TlvSchema.md#removefield)
- [validate](internal_.TlvSchema.md#validate)

## Constructors

### constructor

• **new TlvSchema**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

Schema<T, ByteArray\>.constructor

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `T`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

`T`

#### Implementation of

TlvSchema.decode

#### Inherited from

Schema.decode

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeInternal

#### Overrides

Schema.decodeInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/internal_.md#tlvstream) |

#### Returns

`T`

#### Implementation of

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
| `value` | `T` |

#### Implementation of

TlvSchema.decodeTlvInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ `Abstract` **decodeTlvInternalValue**(`reader`, `typeLength`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/internal_.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/internal_.md#tlvtypelength) |

#### Returns

`T`

#### Implementation of

TlvSchema.decodeTlvInternalValue

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:18

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Uint8Array`

#### Implementation of

TlvSchema.encode

#### Inherited from

Schema.encode

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Uint8Array`

#### Implementation of

TlvSchema.encodeInternal

#### Overrides

Schema.encodeInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/internal_.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`TlvStream`](../modules/internal_.md#tlvstream)

#### Implementation of

TlvSchema.encodeTlv

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:12

___

### encodeTlvInternal

▸ `Abstract` **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/internal_.TlvWriter.md) |
| `value` | `T` |
| `tag?` | [`TlvTag`](../modules/internal_.md#tlvtag) |

#### Returns

`void`

#### Implementation of

TlvSchema.encodeTlvInternal

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:19

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`

#### Implementation of

TlvSchema.injectField

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:20

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`

#### Implementation of

TlvSchema.removeField

#### Defined in

matter.js/dist/cjs/tlv/TlvSchema.d.ts:21

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `T` |

#### Returns

`void`

#### Implementation of

TlvSchema.validate

#### Inherited from

Schema.validate

#### Defined in

matter.js/dist/cjs/schema/Schema.d.ts:15
