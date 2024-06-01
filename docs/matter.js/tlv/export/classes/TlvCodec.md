[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / TlvCodec

# Class: TlvCodec

## Constructors

### new TlvCodec()

> **new TlvCodec**(): [`TlvCodec`](TlvCodec.md)

#### Returns

[`TlvCodec`](TlvCodec.md)

## Methods

### getIntTlvLength()

> `static` **getIntTlvLength**(`value`): [`TlvLength`](../enumerations/TlvLength.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enumerations/TlvLength.md)

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L128)

***

### getPrimitiveByteLength()

> `static` **getPrimitiveByteLength**\<`T`\>(`typeLength`, `value`): `number`

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

`number`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:421](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L421)

***

### getTagByteLength()

> `static` **getTagByteLength**(`tag`?): `1` \| `2` \| `3` \| `5` \| `7` \| `9`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`1` \| `2` \| `3` \| `5` \| `7` \| `9`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:341](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L341)

***

### getUIntByteLength()

> `static` `private` **getUIntByteLength**(`length`): `1` \| `2` \| `4` \| `8`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `length` | [`TlvLength`](../enumerations/TlvLength.md) |

#### Returns

`1` \| `2` \| `4` \| `8`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:456](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L456)

***

### getUIntTlvLength()

> `static` **getUIntTlvLength**(`value`): [`TlvLength`](../enumerations/TlvLength.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`TlvLength`](../enumerations/TlvLength.md)

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L116)

***

### parseTypeLength()

> `static` `private` **parseTypeLength**(`typeLength`): [`TlvTypeLength`](../README.md#tlvtypelength)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `typeLength` | `number` |

#### Returns

[`TlvTypeLength`](../README.md#tlvtypelength)

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L178)

***

### readPrimitive()

> `static` **readPrimitive**\<`T`, `V`\>(`reader`, `typeLength`): `V`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`TlvTypeLength`](../README.md#tlvtypelength) | - |
| `V` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\[`"type"`\]\] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |
| `typeLength` | `T` |

#### Returns

`V`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:205](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L205)

***

### readTag()

> `static` `private` **readTag**(`reader`, `tagControl`): `undefined` \| [`TlvTag`](../README.md#tlvtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |
| `tagControl` | [`TagControl`](../-internal-/enumerations/TagControl.md) |

#### Returns

`undefined` \| [`TlvTag`](../README.md#tlvtag)

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L158)

***

### readTagType()

> `static` **readTagType**(`reader`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |

#### Returns

`object`

##### tag?

> `optional` **tag**: [`TlvTag`](../README.md#tlvtag)

##### typeLength

> **typeLength**: [`TlvTypeLength`](../README.md#tlvtypelength)

#### See

MatterSpecification.v10.Core § A.7

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L153)

***

### writePrimitive()

> `static` **writePrimitive**\<`T`\>(`writer`, `typeLength`, `value`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](../../../util/export/classes/DataWriter.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../README.md#tlvtoprimitive)\[`T`\[`"type"`\]\] |

#### Returns

`void`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:369](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L369)

***

### writeTag()

> `static` **writeTag**(`writer`, `typeLengthValue`, `tag`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](../../../util/export/classes/DataWriter.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |
| `typeLengthValue` | [`TlvTypeLength`](../README.md#tlvtypelength) |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |

#### Returns

`void`

#### See

MatterSpecification.v10.Core § A.7 & A.8

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:291](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L291)

***

### writeUInt()

> `static` `private` **writeUInt**(`writer`, `length`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](../../../util/export/classes/DataWriter.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |
| `length` | [`TlvLength`](../enumerations/TlvLength.md) |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Source

[packages/matter.js/src/tlv/TlvCodec.ts:443](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvCodec.ts#L443)
