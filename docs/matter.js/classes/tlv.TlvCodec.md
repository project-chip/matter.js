[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv](../modules/tlv.md) / TlvCodec

# Class: TlvCodec

[tlv](../modules/tlv.md).TlvCodec

## Table of contents

### Constructors

- [constructor](tlv.TlvCodec.md#constructor)

### Methods

- [getIntTlvLength](tlv.TlvCodec.md#getinttlvlength)
- [getUIntTlvLength](tlv.TlvCodec.md#getuinttlvlength)
- [parseTypeLength](tlv.TlvCodec.md#parsetypelength)
- [readPrimitive](tlv.TlvCodec.md#readprimitive)
- [readTag](tlv.TlvCodec.md#readtag)
- [readTagType](tlv.TlvCodec.md#readtagtype)
- [writePrimitive](tlv.TlvCodec.md#writeprimitive)
- [writeTag](tlv.TlvCodec.md#writetag)
- [writeUInt](tlv.TlvCodec.md#writeuint)

## Constructors

### constructor

• **new TlvCodec**()

## Methods

### getIntTlvLength

▸ `Static` **getIntTlvLength**(`value`): `TlvLength`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`TlvLength`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:121](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L121)

___

### getUIntTlvLength

▸ `Static` **getUIntTlvLength**(`value`): `TlvLength`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`TlvLength`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:109](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L109)

___

### parseTypeLength

▸ `Static` `Private` **parseTypeLength**(`typeLength`): [`TlvTypeLength`](../modules/tlv.md#tlvtypelength)

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `number` |

#### Returns

[`TlvTypeLength`](../modules/tlv.md#tlvtypelength)

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L171)

___

### readPrimitive

▸ `Static` **readPrimitive**<`T`, `V`\>(`reader`, `typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Little`](../enums/util.Endian.md#little)\> |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:193](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L193)

___

### readTag

▸ `Static` `Private` **readTag**(`reader`, `tagControl`): `undefined` \| [`TlvTag`](../modules/tlv.md#tlvtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Little`](../enums/util.Endian.md#little)\> |
| `tagControl` | [`TagControl`](../enums/index._internal_.TagControl.md) |

#### Returns

`undefined` \| [`TlvTag`](../modules/tlv.md#tlvtag)

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:151](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L151)

___

### readTagType

▸ `Static` **readTagType**(`reader`): `Object`

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Little`](../enums/util.Endian.md#little)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:146](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L146)

___

### writePrimitive

▸ `Static` **writePrimitive**<`T`\>(`writer`, `typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util.DataWriter.md)<[`Little`](../enums/util.Endian.md#little)\> |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:323](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L323)

___

### writeTag

▸ `Static` **writeTag**(`writer`, `typeLengthValue`, `tag?`): `void`

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § A.7 & A.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util.DataWriter.md)<[`Little`](../enums/util.Endian.md#little)\> |
| `typeLengthValue` | [`TlvTypeLength`](../modules/tlv.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/tlv.md#tlvtag) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:276](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L276)

___

### writeUInt

▸ `Static` `Private` **writeUInt**(`writer`, `length`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util.DataWriter.md)<[`Little`](../enums/util.Endian.md#little)\> |
| `length` | [`TlvLength`](../enums/tlv.TlvLength.md) |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/tlv/TlvCodec.ts:370](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvCodec.ts#L370)
