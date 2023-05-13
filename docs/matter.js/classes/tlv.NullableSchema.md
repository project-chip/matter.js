[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / NullableSchema

# Class: NullableSchema<T\>

[tlv](../modules/tlv.md).NullableSchema

Schema to encode a nullable value in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.11.6

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<`T` \| ``null``\>

  ↳ **`NullableSchema`**

## Table of contents

### Constructors

- [constructor](tlv.NullableSchema.md#constructor)

### Properties

- [schema](tlv.NullableSchema.md#schema)

### Methods

- [decode](tlv.NullableSchema.md#decode)
- [decodeInternal](tlv.NullableSchema.md#decodeinternal)
- [decodeTlv](tlv.NullableSchema.md#decodetlv)
- [decodeTlvInternal](tlv.NullableSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.NullableSchema.md#decodetlvinternalvalue)
- [encode](tlv.NullableSchema.md#encode)
- [encodeInternal](tlv.NullableSchema.md#encodeinternal)
- [encodeTlv](tlv.NullableSchema.md#encodetlv)
- [encodeTlvInternal](tlv.NullableSchema.md#encodetlvinternal)
- [validate](tlv.NullableSchema.md#validate)

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
| `schema` | [`TlvSchema`](tlv.TlvSchema.md)<`T`\> |

#### Overrides

TlvSchema&lt;T \| null\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNullable.ts#L18)

## Properties

### schema

• `Private` `Readonly` **schema**: [`TlvSchema`](tlv.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNullable.ts#L19)

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

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

``null`` \| `T`

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
| `value` | ``null`` \| `T` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

``null`` \| `T`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:32](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNullable.ts#L32)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L19)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `T` |

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
| `value` | ``null`` \| `T` |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvNullable.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNullable.ts#L24)

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

[packages/matter.js/src/tlv/TlvNullable.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNullable.ts#L37)
