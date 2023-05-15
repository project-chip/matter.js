[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvWrapper

# Class: TlvWrapper<O, T\>

[tlv](../modules/tlv.md).TlvWrapper

## Type parameters

| Name |
| :------ |
| `O` |
| `T` |

## Hierarchy

- [`TlvSchema`](tlv.TlvSchema.md)<`O`\>

  ↳ **`TlvWrapper`**

## Table of contents

### Constructors

- [constructor](tlv.TlvWrapper.md#constructor)

### Properties

- [underlyingSchema](tlv.TlvWrapper.md#underlyingschema)
- [unwrap](tlv.TlvWrapper.md#unwrap)
- [wrap](tlv.TlvWrapper.md#wrap)

### Methods

- [decode](tlv.TlvWrapper.md#decode)
- [decodeInternal](tlv.TlvWrapper.md#decodeinternal)
- [decodeTlv](tlv.TlvWrapper.md#decodetlv)
- [decodeTlvInternal](tlv.TlvWrapper.md#decodetlvinternal)
- [decodeTlvInternalValue](tlv.TlvWrapper.md#decodetlvinternalvalue)
- [encode](tlv.TlvWrapper.md#encode)
- [encodeInternal](tlv.TlvWrapper.md#encodeinternal)
- [encodeTlv](tlv.TlvWrapper.md#encodetlv)
- [encodeTlvInternal](tlv.TlvWrapper.md#encodetlvinternal)
- [validate](tlv.TlvWrapper.md#validate)

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
| `underlyingSchema` | [`TlvSchema`](tlv.TlvSchema.md)<`T`\> |
| `wrap` | (`object`: `O`) => `T` |
| `unwrap` | (`value`: `T`) => `O` |

#### Overrides

TlvSchema&lt;O\&gt;.constructor

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvWrapper.ts#L11)

## Properties

### underlyingSchema

• `Private` `Readonly` **underlyingSchema**: [`TlvSchema`](tlv.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvWrapper.ts#L12)

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

[packages/matter.js/src/tlv/TlvWrapper.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvWrapper.ts#L14)

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

[packages/matter.js/src/tlv/TlvWrapper.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvWrapper.ts#L13)

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

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

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

[packages/matter.js/src/tlv/TlvSchema.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L15)

___

### decodeTlv

▸ **decodeTlv**(`encoded`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../modules/tlv.md#tlvstream) |

#### Returns

`O`

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
| `value` | `O` |

#### Inherited from

TlvSchema.decodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L35)

___

### decodeTlvInternalValue

▸ **decodeTlvInternalValue**(`reader`, `typeLength`): `O`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/tlv.TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Returns

`O`

#### Overrides

TlvSchema.decodeTlvInternalValue

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvWrapper.ts#L19)

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

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

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

[packages/matter.js/src/tlv/TlvSchema.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvSchema.ts#L19)

___

### encodeTlv

▸ **encodeTlv**(`value`): [`TlvStream`](../modules/tlv.md#tlvstream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `O` |

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
| `value` | `O` |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Overrides

TlvSchema.encodeTlvInternal

#### Defined in

[packages/matter.js/src/tlv/TlvWrapper.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvWrapper.ts#L23)

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

[packages/matter.js/src/tlv/TlvWrapper.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvWrapper.ts#L27)
