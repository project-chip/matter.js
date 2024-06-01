[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvArrayReader

# Class: TlvArrayReader

## Implements

- [`TlvReader`](../interfaces/TlvReader.md)

## Constructors

### new TlvArrayReader()

> **new TlvArrayReader**(`tlvElements`): [`TlvArrayReader`](TlvArrayReader.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tlvElements` | [`TlvElement`](../README.md#tlvelementt)\<`any`\>[] |

#### Returns

[`TlvArrayReader`](TlvArrayReader.md)

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L79)

## Properties

### index

> `private` **index**: `number` = `-1`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L77)

***

### tlvElements

> `private` `readonly` **tlvElements**: [`TlvElement`](../README.md#tlvelementt)\<`any`\>[]

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L79)

## Methods

### readPrimitive()

> **readPrimitive**\<`T`, `V`\>(`_typeLength`): `V`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`TlvTypeLength`](../README.md#tlvtypelength) | - |
| `V` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\[`"type"`\]\] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_typeLength` | `T` |

#### Returns

`V`

#### Implementation of

[`TlvReader`](../interfaces/TlvReader.md).[`readPrimitive`](../interfaces/TlvReader.md#readprimitive)

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L86)

***

### readTagType()

> **readTagType**(): [`TlvElement`](../README.md#tlvelementt)\<`any`\>

#### Returns

[`TlvElement`](../README.md#tlvelementt)\<`any`\>

#### Implementation of

[`TlvReader`](../interfaces/TlvReader.md).[`readTagType`](../interfaces/TlvReader.md#readtagtype)

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L81)
