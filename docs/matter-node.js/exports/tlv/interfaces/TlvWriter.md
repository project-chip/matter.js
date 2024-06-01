[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvWriter

# Interface: TlvWriter

## Methods

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

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:53

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

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:52
