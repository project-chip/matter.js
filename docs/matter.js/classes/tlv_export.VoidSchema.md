[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / VoidSchema

# Class: VoidSchema

[tlv/export](../modules/tlv_export.md).VoidSchema

Schema to encode void.

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<`void`\>

  ↳ **`VoidSchema`**

  ↳↳ [`NoArgumentsSchema`](tlv_export.NoArgumentsSchema.md)

## Table of contents

### Constructors

- [constructor](tlv_export.VoidSchema.md#constructor)

### Methods

- [decode](tlv_export.VoidSchema.md#decode)
- [decodeInternal](tlv_export.VoidSchema.md#decodeinternal)
- [decodeTlv](tlv_export.VoidSchema.md#decodetlv)
- [decodeTlvInternal](tlv_export.VoidSchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.VoidSchema.md#decodetlvinternalvalue)
- [encode](tlv_export.VoidSchema.md#encode)
- [encodeInternal](tlv_export.VoidSchema.md#encodeinternal)
- [encodeTlv](tlv_export.VoidSchema.md#encodetlv)
- [encodeTlvInternal](tlv_export.VoidSchema.md#encodetlvinternal)
- [injectField](tlv_export.VoidSchema.md#injectfield)
- [removeField](tlv_export.VoidSchema.md#removefield)
- [validate](tlv_export.VoidSchema.md#validate)

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

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`_encoded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`void`

#### Overrides

TlvSchema.decodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvVoid.ts#L19)

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
| `value` | `void` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`_reader`, `_typeLength`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `_typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

`void`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvVoid.ts#L23)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L18)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` |

#### Returns

[`TlvStream`](../modules/tlv_export.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L24)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`_writer`, `_value`, `_tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_writer` | [`TlvWriter`](../interfaces/tlv_export.TlvWriter.md) |
| `_value` | `void` |
| `_tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvVoid.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvVoid.ts#L15)

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

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L43)

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

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L52)

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

[packages/matter.js/src/tlv/TlvVoid.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvVoid.ts#L27)
