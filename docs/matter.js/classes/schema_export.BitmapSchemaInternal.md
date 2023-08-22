[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema/export](../modules/schema_export.md) / BitmapSchemaInternal

# Class: BitmapSchemaInternal<T\>

[schema/export](../modules/schema_export.md).BitmapSchemaInternal

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Schema`](schema_export.Schema.md)<[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>, `number`\>

  ↳ **`BitmapSchemaInternal`**

## Table of contents

### Constructors

- [constructor](schema_export.BitmapSchemaInternal.md#constructor)

### Properties

- [bitSchemas](schema_export.BitmapSchemaInternal.md#bitschemas)
- [masks](schema_export.BitmapSchemaInternal.md#masks)

### Methods

- [decode](schema_export.BitmapSchemaInternal.md#decode)
- [decodeInternal](schema_export.BitmapSchemaInternal.md#decodeinternal)
- [encode](schema_export.BitmapSchemaInternal.md#encode)
- [encodeInternal](schema_export.BitmapSchemaInternal.md#encodeinternal)
- [validate](schema_export.BitmapSchemaInternal.md#validate)

## Constructors

### constructor

• **new BitmapSchemaInternal**<`T`\>(`bitSchemas`)

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

[packages/matter.js/src/schema/BitmapSchema.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L61)

## Properties

### bitSchemas

• `Private` `Readonly` **bitSchemas**: `T`

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L61)

___

### masks

• `Private` `Readonly` **masks**: [`MaskFromBitSchema`](../modules/export._internal_.md#maskfrombitschema)<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L59)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `number` | `undefined` |
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
| `bitmap` | `number` |

#### Returns

[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\>

#### Overrides

[Schema](schema_export.Schema.md).[decodeInternal](schema_export.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:97](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L97)

___

### encode

▸ **encode**(`value`): `number`

Allow to use a fully defined Bitmap schema as input, but also allow one where only the entries of bits set are
provided, rest is unset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\> \| [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`T`\> |

#### Returns

`number`

#### Overrides

[Schema](schema_export.Schema.md).[encode](schema_export.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:77](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L77)

___

### encodeInternal

▸ **encodeInternal**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)<`T`\> |

#### Returns

`number`

#### Overrides

[Schema](schema_export.Schema.md).[encodeInternal](schema_export.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:81](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/schema/BitmapSchema.ts#L81)

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
