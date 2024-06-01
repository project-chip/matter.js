[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvArrayReader

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:38

## Properties

### index

> `private` **index**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:37

***

### tlvElements

> `private` `readonly` **tlvElements**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:36

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:40

***

### readTagType()

> **readTagType**(): [`TlvElement`](../README.md#tlvelementt)\<`any`\>

#### Returns

[`TlvElement`](../README.md#tlvelementt)\<`any`\>

#### Implementation of

[`TlvReader`](../interfaces/TlvReader.md).[`readTagType`](../interfaces/TlvReader.md#readtagtype)

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:39
