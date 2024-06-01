[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvByteArrayWriter

# Class: TlvByteArrayWriter

## Implements

- [`TlvWriter`](../interfaces/TlvWriter.md)

## Constructors

### new TlvByteArrayWriter()

> **new TlvByteArrayWriter**(): [`TlvByteArrayWriter`](TlvByteArrayWriter.md)

#### Returns

[`TlvByteArrayWriter`](TlvByteArrayWriter.md)

## Properties

### writer

> `private` `readonly` **writer**: [`DataWriter`](../../../util/export/classes/DataWriter.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\>

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L107)

## Methods

### toByteArray()

> **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L117)

***

### writePrimitive()

> **writePrimitive**\<`T`\>(`typeLength`, `value`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\[`"type"`\]\] |

#### Returns

`void`

#### Implementation of

[`TlvWriter`](../interfaces/TlvWriter.md).[`writePrimitive`](../interfaces/TlvWriter.md#writeprimitive)

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L113)

***

### writeTag()

> **writeTag**(`typeLength`, `tag`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`void`

#### Implementation of

[`TlvWriter`](../interfaces/TlvWriter.md).[`writeTag`](../interfaces/TlvWriter.md#writetag)

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L109)
