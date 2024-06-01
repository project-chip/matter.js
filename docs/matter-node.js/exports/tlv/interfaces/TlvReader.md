[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvReader

# Interface: TlvReader

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

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:49

***

### readTagType()

> **readTagType**(): `object`

#### Returns

`object`

##### tag?

> `optional` **tag**: [`TlvTag`](../README.md#tlvtag)

##### typeLength

> **typeLength**: [`TlvTypeLength`](../README.md#tlvtypelength)

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:45
