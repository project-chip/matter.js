[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](../modules/exports_datatype.md) / [\<internal\>](../modules/exports_datatype._internal_.md) / FabricIndexTlvWrapper

# Class: FabricIndexTlvWrapper

[exports/datatype](../modules/exports_datatype.md).[\<internal\>](../modules/exports_datatype._internal_.md).FabricIndexTlvWrapper

## Hierarchy

- [`TlvWrapper`](exports_tlv.TlvWrapper.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex), `number` \| `undefined`\>

  ↳ **`FabricIndexTlvWrapper`**

## Table of contents

### Constructors

- [constructor](exports_datatype._internal_.FabricIndexTlvWrapper.md#constructor)

### Properties

- [underlyingSchema](exports_datatype._internal_.FabricIndexTlvWrapper.md#underlyingschema)
- [wrap](exports_datatype._internal_.FabricIndexTlvWrapper.md#wrap)

### Methods

- [decode](exports_datatype._internal_.FabricIndexTlvWrapper.md#decode)
- [decodeInternal](exports_datatype._internal_.FabricIndexTlvWrapper.md#decodeinternal)
- [decodeTlv](exports_datatype._internal_.FabricIndexTlvWrapper.md#decodetlv)
- [decodeTlvInternal](exports_datatype._internal_.FabricIndexTlvWrapper.md#decodetlvinternal)
- [decodeTlvInternalValue](exports_datatype._internal_.FabricIndexTlvWrapper.md#decodetlvinternalvalue)
- [encode](exports_datatype._internal_.FabricIndexTlvWrapper.md#encode)
- [encodeInternal](exports_datatype._internal_.FabricIndexTlvWrapper.md#encodeinternal)
- [encodeTlv](exports_datatype._internal_.FabricIndexTlvWrapper.md#encodetlv)
- [encodeTlvInternal](exports_datatype._internal_.FabricIndexTlvWrapper.md#encodetlvinternal)
- [injectField](exports_datatype._internal_.FabricIndexTlvWrapper.md#injectfield)
- [removeField](exports_datatype._internal_.FabricIndexTlvWrapper.md#removefield)
- [validate](exports_datatype._internal_.FabricIndexTlvWrapper.md#validate)

## Constructors

### constructor

• **new FabricIndexTlvWrapper**(): [`FabricIndexTlvWrapper`](exports_datatype._internal_.FabricIndexTlvWrapper.md)

#### Returns

[`FabricIndexTlvWrapper`](exports_datatype._internal_.FabricIndexTlvWrapper.md)

#### Overrides

TlvWrapper\&lt;FabricIndex, number \| undefined\&gt;.constructor

#### Defined in

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:25

## Properties

### underlyingSchema

• `Protected` `Readonly` **underlyingSchema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`undefined` \| `number`\>

#### Inherited from

TlvWrapper.underlyingSchema

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:9

___

### wrap

• `Protected` `Readonly` **wrap**: (`object`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `undefined` \| `number`

#### Type declaration

▸ (`object`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

##### Returns

`undefined` \| `number`

#### Inherited from

TlvWrapper.wrap

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:10

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate?` | `boolean` |

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TlvWrapper.decode

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TlvWrapper.decodeInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:22

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/exports_tlv.md#tlvstream) |

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TlvWrapper.decodeTlv

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:25

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
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Inherited from

TlvWrapper.decodeTlvInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:26

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/exports_tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/exports_tlv.md#tlvtypelength) |

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TlvWrapper.decodeTlvInternalValue

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:13

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`Uint8Array`

#### Inherited from

TlvWrapper.encode

#### Defined in

packages/matter.js/dist/esm/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`Uint8Array`

#### Inherited from

TlvWrapper.encodeInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:23

___

### encodeTlv

▸ **encodeTlv**(`value`, `options?`): [`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `options?` | [`TlvEncodingOptions`](../modules/exports_tlv.md#tlvencodingoptions) |

#### Returns

[`TlvStream`](../modules/exports_tlv.md#tlvstream)

#### Inherited from

TlvWrapper.encodeTlv

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:24

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `value`, `tag?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/exports_tlv.TlvWriter.md) |
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `tag?` | [`TlvTag`](../modules/exports_tlv.md#tlvtag) |
| `options?` | [`TlvEncodingOptions`](../modules/exports_tlv.md#tlvencodingoptions) |

#### Returns

`void`

#### Inherited from

TlvWrapper.encodeTlvInternal

#### Defined in

packages/matter.js/dist/esm/tlv/TlvWrapper.d.ts:14

___

### injectField

▸ **injectField**(`value`, `_fieldId`, `_fieldValue`, `_injectChecker`): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `_fieldId` | `number` |
| `_fieldValue` | `any` |
| `_injectChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TlvWrapper.injectField

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:32

___

### removeField

▸ **removeField**(`value`, `_fieldId`, `_removeChecker`): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `_fieldId` | `number` |
| `_removeChecker` | (`fieldValue`: `any`) => `boolean` |

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TlvWrapper.removeField

#### Defined in

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:33

___

### validate

▸ **validate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`void`

#### Overrides

TlvWrapper.validate

#### Defined in

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:26
