[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / NoArgumentsSchema

# Class: NoArgumentsSchema

[tlv](../modules/tlv.md).NoArgumentsSchema

Schema to encode void.

## Hierarchy

- [`VoidSchema`](tlv.VoidSchema.md)

  ↳ **`NoArgumentsSchema`**

## Table of contents

### Constructors

- [constructor](tlv.NoArgumentsSchema.md#constructor)

### Methods

- [decode](tlv.NoArgumentsSchema.md#decode)
- [decodeInternal](tlv.NoArgumentsSchema.md#decodeinternal)
- [decodeTlv](tlv.NoArgumentsSchema.md#decodetlv)
- [decodeTlvInternal](tlv.NoArgumentsSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.NoArgumentsSchema.md#decodetlvinternalvalue)
- [encode](tlv.NoArgumentsSchema.md#encode)
- [encodeInternal](tlv.NoArgumentsSchema.md#encodeinternal)
- [encodeTlv](tlv.NoArgumentsSchema.md#encodetlv)
- [encodeTlvInternal](tlv.NoArgumentsSchema.md#encodetlvinternal)
- [validate](tlv.NoArgumentsSchema.md#validate)

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

VoidSchema.decode

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

VoidSchema.decodeInternal

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

#### Inherited from

VoidSchema.decodeTlv

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

VoidSchema.decodeTlvInternal

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

#### Inherited from

VoidSchema.decodeTlvInternalValue

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

VoidSchema.encode

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

VoidSchema.encodeInternal

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

VoidSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L25)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv.TlvWriter.md) |
| `value` | `void` |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

VoidSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvNoArguments.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvNoArguments.ts#L19)

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

[packages/matter.js/src/tlv/TlvVoid.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvVoid.ts#L27)
