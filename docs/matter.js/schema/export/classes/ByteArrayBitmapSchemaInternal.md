[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [schema/export](../README.md) / ByteArrayBitmapSchemaInternal

# Class: ByteArrayBitmapSchemaInternal\<T\>

Define a schema to encode / decode convert type T to type E.

## Extends

- [`Schema`](Schema.md)\<[`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>, [`ByteArray`](../../../util/export/README.md#bytearray)\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](../README.md#bitschema) |

## Constructors

### new ByteArrayBitmapSchemaInternal()

> **new ByteArrayBitmapSchemaInternal**\<`T`\>(`bitSchemas`): [`ByteArrayBitmapSchemaInternal`](ByteArrayBitmapSchemaInternal.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`ByteArrayBitmapSchemaInternal`](ByteArrayBitmapSchemaInternal.md)\<`T`\>

#### Overrides

[`Schema`](Schema.md).[`constructor`](Schema.md#constructors)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L116)

## Properties

### bitSchemas

> `private` `readonly` **bitSchemas**: `T`

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L116)

***

### byteArrayLength

> `private` `readonly` **byteArrayLength**: `number`

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L113)

***

### maskOffset

> `private` `readonly` **maskOffset**: [`MaskOffsetFromBitSchema`](../-internal-/README.md#maskoffsetfrombitschemat)\<`T`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L114)

## Methods

### decode()

> **decode**(`encoded`, `validate`): [`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>

#### Inherited from

[`Schema`](Schema.md).[`decode`](Schema.md#decode)

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeInternal()

> **decodeInternal**(`bitmap`): [`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitmap` | `Uint8Array` |

#### Returns

[`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>

#### Overrides

[`Schema`](Schema.md).[`decodeInternal`](Schema.md#decodeinternal)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L164)

***

### encode()

> **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\> |

#### Returns

`Uint8Array`

#### Inherited from

[`Schema`](Schema.md).[`encode`](Schema.md#encode)

#### Source

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

***

### encodeInternal()

> **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\> |

#### Returns

`Uint8Array`

#### Overrides

[`Schema`](Schema.md).[`encodeInternal`](Schema.md#encodeinternal)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L139)

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\> |

#### Returns

`void`

#### Inherited from

[`Schema`](Schema.md).[`validate`](Schema.md#validate)

#### Source

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
