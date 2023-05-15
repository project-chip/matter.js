[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / AnySchema

# Class: AnySchema

[tlv](../modules/tlv.md).AnySchema

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\>

  ↳ **`AnySchema`**

## Table of contents

### Constructors

- [constructor](tlv.AnySchema.md#constructor)

### Methods

- [decode](tlv.AnySchema.md#decode)
- [decodeInternal](tlv.AnySchema.md#decodeinternal)
- [decodeTlv](tlv.AnySchema.md#decodetlv)
- [decodeTlvInternal](tlv.AnySchema.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.AnySchema.md#decodetlvinternalvalue)
- [decodeTlvValueRec](tlv.AnySchema.md#decodetlvvaluerec)
- [encode](tlv.AnySchema.md#encode)
- [encodeInternal](tlv.AnySchema.md#encodeinternal)
- [encodeTlv](tlv.AnySchema.md#encodetlv)
- [encodeTlvInternal](tlv.AnySchema.md#encodetlvinternal)
- [validate](tlv.AnySchema.md#validate)

## Constructors

### constructor

• **new AnySchema**()

#### Inherited from

TlvSchema<TlvStream\>.constructor

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TlvStream`](../modules/tlv.md#tlvstream)

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Inherited from

TlvSchema.decode

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`encoded`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Inherited from

TlvSchema.decodeInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

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
| `value` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvAny.ts#L39)

___

### decodeTlvValueRec

▸ **decodeTlvValueRec**(`reader`, `typeLength`, `tlvStream`, `tag?`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |
| `tlvStream` | [`TlvStream`](../modules/tlv.md#tlvstream) |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvAny.ts#L43)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TlvStream`](../modules/tlv.md#tlvstream) |

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
| `value` | [`TlvStream`](../modules/tlv.md#tlvstream) |

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
| `value` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

[`TlvStream`](../modules/tlv.md#tlvstream)

#### Inherited from

TlvSchema.encodeTlv

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L25)

___

### encodeTlvInternal

▸ **encodeTlvInternal**(`writer`, `tlvStream`, `tagAssigned?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/tlv.TlvWriter.md) |
| `tlvStream` | [`TlvStream`](../modules/tlv.md#tlvstream) |
| `tagAssigned?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvAny.ts#L11)

___

### validate

▸ **validate**(`tlvStream`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tlvStream` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

`void`

#### Overrides

TlvSchema.validate

#### Defined in

[packages/matter.js/src/tlv/TlvAny.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvAny.ts#L71)
