[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/tlv](../modules/exports_tlv.md) / TlvWrapper

# Class: TlvWrapper<O, T\>

[exports/tlv](../modules/exports_tlv.md).TlvWrapper

## Type parameters

| Name |
| :------ |
| `O` |
| `T` |

## Hierarchy

- [`TlvSchema`](exports_tlv.TlvSchema.md)<`O`\>

  ↳ **`TlvWrapper`**

## Table of contents

### Constructors

- [constructor](exports_tlv.TlvWrapper.md#constructor)

### Properties

- [underlyingSchema](exports_tlv.TlvWrapper.md#underlyingschema)
- [unwrap](exports_tlv.TlvWrapper.md#unwrap)
- [wrap](exports_tlv.TlvWrapper.md#wrap)

### Methods

- [decode](exports_tlv.TlvWrapper.md#decode)
- [decodeInternal](exports_tlv.TlvWrapper.md#decodeinternal)
- [decodeTlv](exports_tlv.TlvWrapper.md#decodetlv)
- [decodeTlvInternal](exports_tlv.TlvWrapper.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_tlv.TlvWrapper.md#decodetlvinternalvalue)
- [encode](exports_tlv.TlvWrapper.md#encode)
- [encodeInternal](exports_tlv.TlvWrapper.md#encodeinternal)
- [encodeTlv](exports_tlv.TlvWrapper.md#encodetlv)
- [encodeTlvInternal](exports_tlv.TlvWrapper.md#encodetlvinternal)
- [injectField](exports_tlv.TlvWrapper.md#injectfield)
- [removeField](exports_tlv.TlvWrapper.md#removefield)
- [validate](exports_tlv.TlvWrapper.md#validate)

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
| `underlyingSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`T`\> |
| `wrap` | (`object`: `O`) => `T` |
| `unwrap` | (`value`: `T`) => `O` |

#### Overrides

TlvSchema&lt;O\&gt;.constructor

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvWrapper.d.ts:12

## Properties

### underlyingSchema

• `Private` `Readonly` **underlyingSchema**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvWrapper.d.ts:9

___

### unwrap

• `Private` `Readonly` **unwrap**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvWrapper.d.ts:11

___

### wrap

• `Private` `Readonly` **wrap**: `any`

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvWrapper.d.ts:10

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): `O`

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

`O`

#### Inherited from

TlvSchema.decode

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:10

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

`O`

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
| `value` | `O` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:14

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

`O`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvWrapper.d.ts:13

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

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:11

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `O` |

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
| `value` | `O` |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

packages/matter.js/dist/cjs/tlv/TlvWrapper.d.ts:14

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:20

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

packages/matter.js/dist/cjs/tlv/TlvSchema.d.ts:21

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

packages/matter.js/dist/cjs/tlv/TlvWrapper.d.ts:15
