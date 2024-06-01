[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [schema/export](../README.md) / BitmapSchemaInternal

# Class: BitmapSchemaInternal\<T\>

Define a schema to encode / decode convert type T to type E.

## Extends

- [`Schema`](Schema.md)\<[`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>, `number`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`BitSchema`](../README.md#bitschema) |

## Constructors

### new BitmapSchemaInternal()

> **new BitmapSchemaInternal**\<`T`\>(`bitSchemas`): [`BitmapSchemaInternal`](BitmapSchemaInternal.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Returns

[`BitmapSchemaInternal`](BitmapSchemaInternal.md)\<`T`\>

#### Overrides

[`Schema`](Schema.md).[`constructor`](Schema.md#constructors)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L61)

## Properties

### bitSchemas

> `private` `readonly` **bitSchemas**: `T`

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L61)

***

### masks

> `private` `readonly` **masks**: [`MaskFromBitSchema`](../-internal-/README.md#maskfrombitschemat)\<`T`\>

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L59)

## Methods

### decode()

> **decode**(`encoded`, `validate`): [`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `number` | `undefined` |
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
| `bitmap` | `number` |

#### Returns

[`TypeFromBitSchema`](../README.md#typefrombitschemat)\<`T`\>

#### Overrides

[`Schema`](Schema.md).[`decodeInternal`](Schema.md#decodeinternal)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L97)

***

### encode()

> **encode**(`value`): `number`

Allow to use a fully defined Bitmap schema as input, but also allow one where only the entries of bits set are
provided, rest is unset.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`T`\> |

#### Returns

`number`

#### Overrides

[`Schema`](Schema.md).[`encode`](Schema.md#encode)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L77)

***

### encodeInternal()

> **encodeInternal**(`value`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`T`\> |

#### Returns

`number`

#### Overrides

[`Schema`](Schema.md).[`encodeInternal`](Schema.md#encodeinternal)

#### Source

[packages/matter.js/src/schema/BitmapSchema.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/BitmapSchema.ts#L81)

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
