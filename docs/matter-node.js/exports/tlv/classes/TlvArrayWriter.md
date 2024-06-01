[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvArrayWriter

# Class: TlvArrayWriter

## Implements

- [`TlvWriter`](../interfaces/TlvWriter.md)

## Constructors

### new TlvArrayWriter()

> **new TlvArrayWriter**(): [`TlvArrayWriter`](TlvArrayWriter.md)

#### Returns

[`TlvArrayWriter`](TlvArrayWriter.md)

## Properties

### tlvArray

> `private` `readonly` **tlvArray**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:30

## Methods

### toTlvArray()

> **toTlvArray**(): [`TlvElement`](../README.md#tlvelementt)\<`any`\>[]

#### Returns

[`TlvElement`](../README.md#tlvelementt)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:33

***

### writePrimitive()

> **writePrimitive**\<`T`\>(`_typeLength`, `value`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\[`"type"`\]\] |

#### Returns

`void`

#### Implementation of

[`TlvWriter`](../interfaces/TlvWriter.md).[`writePrimitive`](../interfaces/TlvWriter.md#writeprimitive)

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:32

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:31
