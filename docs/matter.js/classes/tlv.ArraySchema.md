[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / ArraySchema

# Class: ArraySchema<T\>

[tlv](../modules/tlv.md).ArraySchema

Schema to encode an array or string in TLV.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.11.2 and A.11.4

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<`T`[]\>

  ↳ **`ArraySchema`**

## Table of contents

### Constructors

- [constructor](tlv.ArraySchema.md#constructor)

### Properties

- [elementSchema](tlv.ArraySchema.md#elementschema)
- [maxLength](tlv.ArraySchema.md#maxlength)
- [minLength](tlv.ArraySchema.md#minlength)

### Methods

- [decode](tlv.ArraySchema.md#decode)
- [decodeInternal](tlv.ArraySchema.md#decodeinternal)
- [decodeTlv](tlv.ArraySchema.md#decodetlv)
- [decodeTlvInternal](tlv.ArraySchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.ArraySchema.md#decodetlvinternalvalue)
- [encode](tlv.ArraySchema.md#encode)
- [encodeInternal](tlv.ArraySchema.md#encodeinternal)
- [encodeTlv](tlv.ArraySchema.md#encodetlv)
- [encodeTlvInternal](tlv.ArraySchema.md#encodetlvinternal)
- [validate](tlv.ArraySchema.md#validate)

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
| `elementSchema` | [`TlvSchema`](tlv.TlvSchema.md)<`T`\> | `undefined` |
| `minLength` | `number` | `0` |
| `maxLength` | `number` | `65535` |

#### Overrides

TlvSchema&lt;T[]\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L23)

## Properties

### elementSchema

• `Readonly` **elementSchema**: [`TlvSchema`](tlv.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L24)

___

### maxLength

• `Private` `Readonly` **maxLength**: `number` = `65535`

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L26)

___

### minLength

• `Private` `Readonly` **minLength**: `number` = `0`

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L25)

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

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

`T`[]

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
| `value` | `T`[] |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

`T`[]

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L37)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L19)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

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
| `value` | `T`[] |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L31)

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

[packages/matter.js/src/tlv/TlvArray.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L49)
