[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / ArraySchema

# Class: ArraySchema<T\>

[exports/tlv](../modules/exports_tlv.md).ArraySchema

Schema to encode an array or string in TLV.

**`See`**

MatterCoreSpecificationV1_0 § A.11.2 and A.11.4

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`[]\>

  ↳ **`ArraySchema`**

## Table of contents

### Constructors

- [constructor](exports_tlv.ArraySchema.md#constructor)

### Properties

- [elementSchema](exports_tlv.ArraySchema.md#elementschema)
- [maxLength](exports_tlv.ArraySchema.md#maxlength)
- [minLength](exports_tlv.ArraySchema.md#minlength)

### Methods

- [decode](exports_tlv.ArraySchema.md#decode)
- [decodeFromChunkedArray](exports_tlv.ArraySchema.md#decodefromchunkedarray)
- [decodeInternal](exports_tlv.ArraySchema.md#decodeinternal)
- [decodeTlv](exports_tlv.ArraySchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.ArraySchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.ArraySchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.ArraySchema.md#encode)
- [encodeAsChunkedArray](exports_tlv.ArraySchema.md#encodeaschunkedarray)
- [encodeInternal](exports_tlv.ArraySchema.md#encodeinternal)
- [encodeTlv](exports_tlv.ArraySchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.ArraySchema.md#encodetlvinternal)
- [injectField](exports_tlv.ArraySchema.md#injectfield)
- [removeField](exports_tlv.ArraySchema.md#removefield)
- [validate](exports_tlv.ArraySchema.md#validate)

## Constructors

### constructor

• **new ArraySchema**<`T`\>(`elementSchema`, `minLength?`, `maxLength?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |
| `minLength?` | `number` |
| `maxLength?` | `number` |

#### Overrides

TlvSchema&lt;T[]\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:27

## Properties

### elementSchema

• `Readonly` **elementSchema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:24

___

### maxLength

• `Private` `Readonly` **maxLength**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:26

___

### minLength

• `Private` `Readonly` **minLength**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:25

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `T`[]

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

`T`[]

#### Inherited from

TlvSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeFromChunkedArray

▸ **decodeFromChunkedArray**(`chunks`, `currentValue?`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | [`ArrayAsChunked`](../modules/exports_tlv.md#arrayaschunked) |
| `currentValue?` | `T`[] |

#### Returns

`T`[]

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:33

___

### decodeInternal

▸ **decodeInternal**(`encoded`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`T`[]

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

`T`[]

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
| `value` | `T`[] |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

`T`[]

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:29

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

`Uint8Array`

#### Inherited from

TlvSchema.encode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeAsChunkedArray

▸ **encodeAsChunkedArray**(`value`): [`ArrayAsChunked`](../modules/exports_tlv.md#arrayaschunked)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

[`ArrayAsChunked`](../modules/exports_tlv.md#arrayaschunked)

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:34

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

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
| `value` | `T`[] |

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
| `value` | `T`[] |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:28

___

### injectField

▸ **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`[]

#### Overrides

TlvSchema.injectField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:30

___

### removeField

▸ **removeField**(`value`, `fieldId`, `removeChecker`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`[]

#### Overrides

TlvSchema.removeField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:31

___

### validate

▸ **validate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[] |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvArray.d.ts:32
