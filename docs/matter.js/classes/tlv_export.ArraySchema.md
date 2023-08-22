[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / ArraySchema

# Class: ArraySchema<T\>

[tlv/export](../modules/tlv_export.md).ArraySchema

Schema to encode an array or string in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § A.11.2 and A.11.4

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<`T`[]\>

  ↳ **`ArraySchema`**

## Table of contents

### Constructors

- [constructor](tlv_export.ArraySchema.md#constructor)

### Properties

- [elementSchema](tlv_export.ArraySchema.md#elementschema)
- [maxLength](tlv_export.ArraySchema.md#maxlength)
- [minLength](tlv_export.ArraySchema.md#minlength)

### Methods

- [decode](tlv_export.ArraySchema.md#decode)
- [decodeFromChunkedArray](tlv_export.ArraySchema.md#decodefromchunkedarray)
- [decodeInternal](tlv_export.ArraySchema.md#decodeinternal)
- [decodeTlv](tlv_export.ArraySchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.ArraySchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.ArraySchema.md#decodetlvinternalvalue)
- [encode](tlv_export.ArraySchema.md#encode)
- [encodeAsChunkedArray](tlv_export.ArraySchema.md#encodeaschunkedarray)
- [encodeInternal](tlv_export.ArraySchema.md#encodeinternal)
- [encodeTlv](tlv_export.ArraySchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.ArraySchema.md#encodetlvinternal)
- [injectField](tlv_export.ArraySchema.md#injectfield)
- [removeField](tlv_export.ArraySchema.md#removefield)
- [validate](tlv_export.ArraySchema.md#validate)

## Constructors

### constructor

• **new ArraySchema**<`T`\>(`elementSchema`, `minLength?`, `maxLength?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `elementSchema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> | `undefined` |
| `minLength` | `number` | `0` |
| `maxLength` | `number` | `65535` |

#### Overrides

TlvSchema&lt;T[]\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L30)

## Properties

### elementSchema

• `Readonly` **elementSchema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L31)

___

### maxLength

• `Private` `Readonly` **maxLength**: `number` = `65535`

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L33)

___

### minLength

• `Private` `Readonly` **minLength**: `number` = `0`

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L32)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `T`[]

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`T`[]

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeFromChunkedArray

▸ **decodeFromChunkedArray**(`chunks`, `currentValue?`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | [`ArrayAsChunked`](../modules/tlv_export.md#arrayaschunked) |
| `currentValue?` | `T`[] |

#### Returns

`T`[]

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L90)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`T`[]

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
| `value` | `T`[] |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

`T`[]

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L44)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeAsChunkedArray

▸ **encodeAsChunkedArray**(`value`): [`ArrayAsChunked`](../modules/tlv_export.md#arrayaschunked)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

[`ArrayAsChunked`](../modules/tlv_export.md#arrayaschunked)

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L116)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

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
| `value` | `T`[] |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L38)

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

[packages/matter.js/src/tlv/TlvArray.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L57)

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

[packages/matter.js/src/tlv/TlvArray.ts:72](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L72)

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

[packages/matter.js/src/tlv/TlvArray.ts:81](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvArray.ts#L81)
