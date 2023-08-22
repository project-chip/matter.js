[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / NullableSchema

# Class: NullableSchema<T\>

[exports/tlv](../modules/exports_tlv.md).NullableSchema

Schema to encode a nullable value in TLV.

**`See`**

MatterCoreSpecificationV1_0 § A.11.6

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<`T` \| ``null``\>

  ↳ **`NullableSchema`**

## Table of contents

### Constructors

- [constructor](exports_tlv.NullableSchema.md#constructor)

### Properties

- [schema](exports_tlv.NullableSchema.md#schema)

### Methods

- [decode](exports_tlv.NullableSchema.md#decode)
- [decodeInternal](exports_tlv.NullableSchema.md#decodeinternal)
- [decodeTlv](exports_tlv.NullableSchema.md#decodetlv)
- [decodeTlvInternal](exports_tlv.NullableSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.NullableSchema.md#decodetlvinternalvalue)
- [encode](exports_tlv.NullableSchema.md#encode)
- [encodeInternal](exports_tlv.NullableSchema.md#encodeinternal)
- [encodeTlv](exports_tlv.NullableSchema.md#encodetlv)
- [encodeTlvInternal](exports_tlv.NullableSchema.md#encodetlvinternal)
- [injectField](exports_tlv.NullableSchema.md#injectfield)
- [removeField](exports_tlv.NullableSchema.md#removefield)
- [validate](exports_tlv.NullableSchema.md#validate)

## Constructors

### constructor

• **new NullableSchema**<`T`\>(`schema`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |

#### Overrides

TlvSchema&lt;T \| null\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:15

## Properties

### schema

• `Private` `Readonly` **schema**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:14

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): ``null`` \| `T`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

``null`` \| `T`

#### Inherited from

TlvSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

``null`` \| `T`

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

``null`` \| `T`

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
| `value` | ``null`` \| `T` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

``null`` \| `T`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:17

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `T` |

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
| `value` | ``null`` \| `T` |

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
| `value` | ``null`` \| `T` |

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
| `value` | ``null`` \| `T` |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:16

___

### injectField

▸ **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`

#### Overrides

TlvSchema.injectField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:19

___

### removeField

▸ **removeField**(`value`, `fieldId`, `removeChecker`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`T`

#### Overrides

TlvSchema.removeField

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:20

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `T` |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvNullable.d.ts:18
