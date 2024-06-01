[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvByteArrayReader

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

[packages/matter.js/src/tlv/TlvSchema.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L125)

## Properties

### reader

> `private` `readonly` **reader**: [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\>

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L123)

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

[packages/matter.js/src/tlv/TlvSchema.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L133)

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

[packages/matter.js/src/tlv/TlvSchema.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L129)
