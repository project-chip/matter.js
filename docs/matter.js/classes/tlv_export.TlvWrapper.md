[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvWrapper

# Class: TlvWrapper<O, T\>

[tlv/export](../modules/tlv_export.md).TlvWrapper

## Type parameters

| Name |
| :------ |
| `O` |
| `T` |

## Hierarchy

- [`TlvSchema`](tlv_export.TlvSchema.md)<`O`\>

  ↳ **`TlvWrapper`**

## Table of contents

### Constructors

- [constructor](tlv_export.TlvWrapper.md#constructor)

### Properties

- [underlyingSchema](tlv_export.TlvWrapper.md#underlyingschema)
- [unwrap](tlv_export.TlvWrapper.md#unwrap)
- [wrap](tlv_export.TlvWrapper.md#wrap)

### Methods

- [decode](tlv_export.TlvWrapper.md#decode)
- [decodeInternal](tlv_export.TlvWrapper.md#decodeinternal)
- [decodeTlv](tlv_export.TlvWrapper.md#decodetlv)
- [decodeTlvInternal](tlv_export.TlvWrapper.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv_export.TlvWrapper.md#decodetlvinternalvalue)
- [encode](tlv_export.TlvWrapper.md#encode)
- [encodeInternal](tlv_export.TlvWrapper.md#encodeinternal)
- [encodeTlv](tlv_export.TlvWrapper.md#encodetlv)
- [encodeTlvInternal](tlv_export.TlvWrapper.md#encodetlvinternal)
- [injectField](tlv_export.TlvWrapper.md#injectfield)
- [removeField](tlv_export.TlvWrapper.md#removefield)
- [validate](tlv_export.TlvWrapper.md#validate)

## Constructors

### constructor

• **new TlvWrapper**<`O`, `T`\>(`underlyingSchema`, `wrap`, `unwrap`)

#### Type parameters

| Name |
| :------ |
| `O` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `underlyingSchema` | [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\> |
| `wrap` | (`object`: `O`) => `T` |
| `unwrap` | (`value`: `T`) => `O` |

#### Overrides

TlvSchema&lt;O\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvWrapper.ts#L11)

## Properties

### underlyingSchema

• `Private` `Readonly` **underlyingSchema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvWrapper.ts#L12)

___

### unwrap

• `Private` `Readonly` **unwrap**: (`value`: `T`) => `O`

#### Type declaration

▸ (`value`): `O`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`O`

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvWrapper.ts#L14)

___

### wrap

• `Private` `Readonly` **wrap**: (`object`: `O`) => `T`

#### Type declaration

▸ (`object`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `O` |

##### Returns

`T`

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvWrapper.ts#L13)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `O`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

`O`

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

`O`

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L14)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv_export.md#tlvstream) |

#### Returns

`O`

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
| `value` | `O` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L34)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv_export.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Returns

`O`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvWrapper.ts#L19)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `O` |

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
| `value` | `O` |

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
| `value` | `O` |

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
| `value` | `O` |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvWrapper.ts#L23)

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `O` |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`O`

#### Inherited from

TlvSchema.injectField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L43)

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `O` |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

`O`

#### Inherited from

TlvSchema.removeField

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvSchema.ts#L52)

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `O` |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/tlv/TlvWrapper.ts#L27)
