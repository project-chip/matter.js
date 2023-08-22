[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema/export](../modules/schema_export.md) / ByteArrayBitmapSchemaInternal

# Class: ByteArrayBitmapSchemaInternal<T\>

[schema/export](../modules/schema_export.md).ByteArrayBitmapSchemaInternal

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Schema`](schema_export.Schema.md)<[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>, [`ByteArray`](../modules/util_export.md#bytearray-1)\>

  ↳ **`ByteArrayBitmapSchemaInternal`**

## Table of contents

### Constructors

- [constructor](schema_export.ByteArrayBitmapSchemaInternal.md#constructor)

### Properties

- [bitSchemas](schema_export.ByteArrayBitmapSchemaInternal.md#bitschemas)
- [byteArrayLength](schema_export.ByteArrayBitmapSchemaInternal.md#bytearraylength)
- [maskOffset](schema_export.ByteArrayBitmapSchemaInternal.md#maskoffset)

### Methods

- [decode](schema_export.ByteArrayBitmapSchemaInternal.md#decode)
- [decodeInternal](schema_export.ByteArrayBitmapSchemaInternal.md#decodeinternal)
- [encode](schema_export.ByteArrayBitmapSchemaInternal.md#encode)
- [encodeInternal](schema_export.ByteArrayBitmapSchemaInternal.md#encodeinternal)
- [validate](schema_export.ByteArrayBitmapSchemaInternal.md#validate)

## Constructors

### constructor

• **new ByteArrayBitmapSchemaInternal**<`T`\>(`bitSchemas`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Overrides

[Schema](schema_export.Schema.md).[constructor](schema_export.Schema.md#constructor)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L116)

## Properties

### bitSchemas

• `Private` `Readonly` **bitSchemas**: `T`

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L116)

___

### byteArrayLength

• `Private` `Readonly` **byteArrayLength**: `number`

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L113)

___

### maskOffset

• `Private` `Readonly` **maskOffset**: [`MaskOffsetFromBitSchema`](../modules/export._internal_.md#maskoffsetfrombitschema)<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L114)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>

#### Inherited from

[Schema](schema_export.Schema.md).[decode](schema_export.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`bitmap`): [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap` | `Uint8Array` |

#### Returns

[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>

#### Overrides

[Schema](schema_export.Schema.md).[decodeInternal](schema_export.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:164](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L164)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\> |

#### Returns

`Uint8Array`

#### Inherited from

[Schema](schema_export.Schema.md).[encode](schema_export.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\> |

#### Returns

`Uint8Array`

#### Overrides

[Schema](schema_export.Schema.md).[encodeInternal](schema_export.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:139](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L139)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\> |

#### Returns

`void`

#### Inherited from

[Schema](schema_export.Schema.md).[validate](schema_export.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/Schema.ts#L28)
