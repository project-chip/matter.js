[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/tlv](../README.md) / ObjectSchema

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

> **new ObjectSchema**\<`F`\>(`fieldDefinitions`, `type`?, `allowProtocolSpecificTags`?): [`ObjectSchema`](ObjectSchema.md)\<`F`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fieldDefinitions` | `F` |
| `type`? | [`Structure`](../enumerations/TlvType.md#structure) \| [`List`](../enumerations/TlvType.md#list) |
| `allowProtocolSpecificTags`? | `boolean` |

#### Returns

[`ObjectSchema`](ObjectSchema.md)\<`F`\>

#### Overrides

`TlvSchema<TypeFromFields<F>>.constructor`

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:57

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:52

***

### allowProtocolSpecificTags

> `private` `readonly` **allowProtocolSpecificTags**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:55

***

### fieldById

> `private` `readonly` **fieldById**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:56

***

### fieldDefinitions

> `private` `readonly` **fieldDefinitions**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:53

***

### type

> `private` `readonly` **type**: `any`

#### Source

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:54

## Methods

### decode()

> **decode**(`encoded`, `validate`?): [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
| `validate`? | `boolean` |

#### Returns

[`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\>

#### Inherited from

`TlvSchema.decode`

#### Source

packages/matter.js/dist/esm/schema/Schema.d.ts:11

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:10

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:13

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:14

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:59

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

packages/matter.js/dist/esm/schema/Schema.d.ts:9

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

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:11

***

### encodeTlv()

> **encodeTlv**(`value`, `forWriteInteraction`?): [`TlvStream`](../README.md#tlvstream)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`F`\> |
| `forWriteInteraction`? | `boolean` |

#### Returns

[`TlvStream`](../README.md#tlvstream)

#### Inherited from

`TlvSchema.encodeTlv`

#### Source

packages/matter.js/dist/esm/tlv/TlvSchema.d.ts:12

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:58

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:61

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:62

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

packages/matter.js/dist/esm/tlv/TlvObject.d.ts:60
