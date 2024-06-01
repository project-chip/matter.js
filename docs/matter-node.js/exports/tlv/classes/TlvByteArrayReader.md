[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvByteArrayReader

# Class: TlvByteArrayReader

## Implements

- [`TlvReader`](../interfaces/TlvReader.md)

## Constructors

### new TlvByteArrayReader()

> **new TlvByteArrayReader**(`byteArray`): [`TlvByteArrayReader`](TlvByteArrayReader.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `byteArray` | `Uint8Array` |

#### Returns

[`TlvByteArrayReader`](TlvByteArrayReader.md)

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:63

## Properties

### reader

> `private` `readonly` **reader**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:62

## Methods

### readPrimitive()

> **readPrimitive**\<`T`, `V`\>(`typeLength`): `V`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`TlvTypeLength`](../README.md#tlvtypelength) | - |
| `V` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\[`"type"`\]\] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `typeLength` | `T` |

#### Returns

`V`

#### Implementation of

[`TlvReader`](../interfaces/TlvReader.md).[`readPrimitive`](../interfaces/TlvReader.md#readprimitive)

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:68

***

### readTagType()

> **readTagType**(): `object`

#### Returns

`object`

##### tag?

> `optional` **tag**: [`TlvTag`](../README.md#tlvtag)

##### typeLength

> **typeLength**: [`TlvTypeLength`](../README.md#tlvtypelength)

#### Implementation of

[`TlvReader`](../interfaces/TlvReader.md).[`readTagType`](../interfaces/TlvReader.md#readtagtype)

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:64
