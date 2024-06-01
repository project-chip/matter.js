[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [tlv/export](../README.md) / ObjectSchema

# Class: ObjectSchema\<F\>

Schema to encode an object in TLV.

## See

MatterSpecification.v10.Core § A.5.1 and § A.11.4

## Extends

- [`TlvSchema`](TlvSchema.md)\<[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>\>

## Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`TlvFields`](../README.md#tlvfields) |

## Constructors

### new ObjectSchema()

> **new ObjectSchema**\<`F`\>(`fieldDefinitions`, `type`, `allowProtocolSpecificTags`): [`ObjectSchema`](ObjectSchema.md)\<`F`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `fieldDefinitions` | `F` | `undefined` |
| `type` | [`Structure`](../enumerations/TlvType.md#structure) \| [`List`](../enumerations/TlvType.md#list) | `TlvType.Structure` |
| `allowProtocolSpecificTags` | `boolean` | `false` |

#### Returns

[`ObjectSchema`](ObjectSchema.md)\<`F`\>

#### Overrides

`TlvSchema<TypeFromFields<F>>.constructor`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L64)

## Properties

### allowProtocolSpecificTags

> `private` `readonly` **allowProtocolSpecificTags**: `boolean` = `false`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L67)

***

### fieldById

> `private` `readonly` **fieldById**: `object`[]

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L62)

***

### fieldDefinitions

> `private` `readonly` **fieldDefinitions**: `F`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L65)

***

### type

> `private` `readonly` **type**: [`Structure`](../enumerations/TlvType.md#structure) \| [`List`](../enumerations/TlvType.md#list) = `TlvType.Structure`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L66)

## Methods

### #encodeEntryToTlv()

> `private` **#encodeEntryToTlv**(`writer`, `name`, `value`, `forWriteInteraction`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `name` | `string` |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L82)

***

### #encodeList()

> `private` **#encodeList**(`writer`, `value`, `forWriteInteraction`?): `void`

Encode the object as List, by the order of the fields in the object.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L119)

***

### #encodeStructure()

> `private` **#encodeStructure**(`writer`, `value`, `forWriteInteraction`?): `void`

Encode the object as Structure, by the order of field definitions.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L110)

***

### decode()

> **decode**(`encoded`, `validate`): [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Inherited from

`TlvSchema.decode`

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeInternal()

> **decodeInternal**(`encoded`): [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Inherited from

`TlvSchema.decodeInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L14)

***

### decodeTlv()

> **decodeTlv**(`encoded`): [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | [`TlvStream`](../README.md#tlvstream) |

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Inherited from

`TlvSchema.decodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L30)

***

### decodeTlvInternal()

> **decodeTlvInternal**(`reader`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |

#### Returns

`object`

##### tag?

> `optional` **tag**: [`TlvTag`](../README.md#tlvtag)

##### value

> **value**: [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Inherited from

`TlvSchema.decodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L34)

***

### decodeTlvInternalValue()

> **decodeTlvInternalValue**(`reader`, `typeLength`): [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`TlvReader`](../interfaces/TlvReader.md) |
| `typeLength` | [`TlvTypeLength`](../README.md#tlvtypelength) |

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Overrides

`TlvSchema.decodeTlvInternalValue`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L151)

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

`TlvSchema.encode`

#### Source

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

***

### encodeInternal()

> **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |

#### Returns

`Uint8Array`

#### Inherited from

`TlvSchema.encodeInternal`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L18)

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> | `undefined` |
| `forWriteInteraction` | `boolean` | `false` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

[packages/matter.js/src/tlv/TlvSchema.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvSchema.ts#L24)

***

### encodeTlvInternal()

> **encodeTlvInternal**(`writer`, `value`, `tag`?, `forWriteInteraction`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writer` | [`TlvWriter`](../interfaces/TlvWriter.md) |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |
| `tag`? | [`TlvTag`](../README.md#tlvtag) |
| `forWriteInteraction`? | `boolean` |

#### Returns

`void`

#### Overrides

`TlvSchema.encodeTlvInternal`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L133)

***

### injectField()

> **injectField**(`value`, `fieldId`, `fieldValue`, `injectChecker`): [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |
| `fieldId` | `number` |
| `fieldValue` | `any` |
| `injectChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Overrides

`TlvSchema.injectField`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L244)

***

### removeField()

> **removeField**(`value`, `fieldId`, `removeChecker`): [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |
| `fieldId` | `number` |
| `removeChecker` | (`fieldValue`) => `boolean` |

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Overrides

`TlvSchema.removeField`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L265)

***

### validate()

> **validate**(`value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |

#### Returns

`void`

#### Overrides

`TlvSchema.validate`

#### Source

[packages/matter.js/src/tlv/TlvObject.ts:196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/tlv/TlvObject.ts#L196)
