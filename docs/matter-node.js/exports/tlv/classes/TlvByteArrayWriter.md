[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvByteArrayWriter

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

> `private` `readonly` **writer**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:56

## Methods

### toByteArray()

> **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:59

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:58

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:57
