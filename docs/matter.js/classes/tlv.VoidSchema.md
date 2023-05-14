[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / VoidSchema

# Class: VoidSchema

[tlv](../modules/tlv.md).VoidSchema

Schema to encode void.

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<`void`\>

  ↳ **`VoidSchema`**

  ↳↳ [`NoArgumentsSchema`](tlv.NoArgumentsSchema.md)

## Table of contents

### Constructors

- [constructor](tlv.VoidSchema.md#constructor)

### Methods

- [decode](tlv.VoidSchema.md#decode)
- [decodeInternal](tlv.VoidSchema.md#decodeinternal)
- [decodeTlv](tlv.VoidSchema.md#decodetlv)
- [decodeTlvInternal](tlv.VoidSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.VoidSchema.md#decodetlvinternalvalue)
- [encode](tlv.VoidSchema.md#encode)
- [encodeInternal](tlv.VoidSchema.md#encodeinternal)
- [encodeTlv](tlv.VoidSchema.md#encodetlv)
- [encodeTlvInternal](tlv.VoidSchema.md#encodetlvinternal)
- [validate](tlv.VoidSchema.md#validate)

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`_encoded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

`void`

#### Overrides

TlvSchema.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvVoid.ts#L19)

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
| `value` | `void` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`_reader`, `_typeLength`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `_typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

`void`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvVoid.ts#L23)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L19)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L25)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`_writer`, `_value`, `_tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_writer` | [`TlvWriter`](../interfaces/tlv.TlvWriter.md) |
| `_value` | `void` |
| `_tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvVoid.ts#L15)

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

[packages/matter.js/src/tlv/TlvVoid.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvVoid.ts#L27)
