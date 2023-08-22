[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / NullableSchema

# Class: NullableSchema<T\>

[tlv/export](../modules/tlv_export.md).NullableSchema

Schema to encode a nullable value in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § A.11.6

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<`T` \| ``null``\>

  ↳ **`NullableSchema`**

## Table of contents

### Constructors

- [constructor](tlv_export.NullableSchema.md#constructor)

### Properties

- [schema](tlv_export.NullableSchema.md#schema)

### Methods

- [decode](tlv_export.NullableSchema.md#decode)
- [decodeInternal](tlv_export.NullableSchema.md#decodeinternal)
- [decodeTlv](tlv_export.NullableSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.NullableSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.NullableSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.NullableSchema.md#encode)
- [encodeInternal](tlv_export.NullableSchema.md#encodeinternal)
- [encodeTlv](tlv_export.NullableSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.NullableSchema.md#encodetlvinternal)
- [injectField](tlv_export.NullableSchema.md#injectfield)
- [removeField](tlv_export.NullableSchema.md#removefield)
- [validate](tlv_export.NullableSchema.md#validate)

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
| `schema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> |

#### Overrides

TlvSchema&lt;T \| null\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNullable.ts#L17)

## Properties

### schema

• `Private` `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNullable.ts#L17)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): ``null`` \| `T`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

``null`` \| `T`

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

``null`` \| `T`

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
| `value` | ``null`` \| `T` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

``null`` \| `T`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNullable.ts#L29)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `T` |

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
| `value` | ``null`` \| `T` |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNullable.ts#L21)

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

[packages/matter.js/src/tlv/TlvNullable.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNullable.ts#L38)

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

[packages/matter.js/src/tlv/TlvNullable.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNullable.ts#L50)

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

[packages/matter.js/src/tlv/TlvNullable.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvNullable.ts#L34)
