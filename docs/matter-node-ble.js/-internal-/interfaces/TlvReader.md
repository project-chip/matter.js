[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / TlvReader

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

matter.js/dist/esm/tlv/TlvSchema.d.ts:49

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

matter.js/dist/esm/tlv/TlvSchema.d.ts:45
