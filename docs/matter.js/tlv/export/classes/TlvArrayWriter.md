[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvArrayWriter

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

> `private` `readonly` **tlvArray**: [`TlvElement`](../README.md#tlvelementt)\<`any`\>[]

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L61)

## Methods

### toTlvArray()

> **toTlvArray**(): [`TlvElement`](../README.md#tlvelementt)\<`any`\>[]

#### Returns

[`TlvElement`](../README.md#tlvelementt)\<`any`\>[]

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L71)

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

[packages/matter.js/src/tlv/TlvSchema.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L67)

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

[packages/matter.js/src/tlv/TlvSchema.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L63)
