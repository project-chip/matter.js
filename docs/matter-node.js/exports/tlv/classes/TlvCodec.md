[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / TlvCodec

# Class: TlvCodec

## Constructors

### new TlvCodec()

> **new TlvCodec**(): [`TlvCodec`](TlvCodec.md)

#### Returns

[`TlvCodec`](TlvCodec.md)

## Properties

### getUIntByteLength

> `static` `private` **getUIntByteLength**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:100

***

### parseTypeLength

> `static` `private` **parseTypeLength**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:92

***

### readTag

> `static` `private` **readTag**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:91

***

### writeUInt

> `static` `private` **writeUInt**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:99

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:85

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:98

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:96

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:84

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:93

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:87

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:97

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

packages/matter.js/dist/esm/tlv/TlvCodec.d.ts:95
