[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / TlvWriter

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

matter.js/dist/esm/tlv/TlvSchema.d.ts:53

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

matter.js/dist/esm/tlv/TlvSchema.d.ts:52
