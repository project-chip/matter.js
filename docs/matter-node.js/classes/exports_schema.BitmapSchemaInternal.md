[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / BitmapSchemaInternal

# Class: BitmapSchemaInternal<T\>

[exports/schema](../modules/exports_schema.md).BitmapSchemaInternal

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>, `number`\>

  ↳ **`BitmapSchemaInternal`**

## Table of contents

### Constructors

- [constructor](exports_schema.BitmapSchemaInternal.md#constructor)

### Properties

- [bitSchemas](exports_schema.BitmapSchemaInternal.md#bitschemas)
- [masks](exports_schema.BitmapSchemaInternal.md#masks)

### Methods

- [decode](exports_schema.BitmapSchemaInternal.md#decode)
- [decodeInternal](exports_schema.BitmapSchemaInternal.md#decodeinternal)
- [encode](exports_schema.BitmapSchemaInternal.md#encode)
- [encodeInternal](exports_schema.BitmapSchemaInternal.md#encodeinternal)
- [validate](exports_schema.BitmapSchemaInternal.md#validate)

## Constructors

### constructor

• **new BitmapSchemaInternal**<`T`\>(`bitSchemas`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Overrides

[Schema](exports_schema.Schema.md).[constructor](exports_schema.Schema.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:43

## Properties

### bitSchemas

• `Private` `Readonly` **bitSchemas**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:41

___

### masks

• `Private` `Readonly` **masks**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:42

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `number` |
| `validate?` | `boolean` |

#### Returns

[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>

#### Inherited from

[Schema](exports_schema.Schema.md).[decode](exports_schema.Schema.md#decode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:11

___

### decodeInternal

▸ **decodeInternal**(`bitmap`): [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap` | `number` |

#### Returns

[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:50

___

### encode

▸ **encode**(`value`): `number`

Allow to use a fully defined Bitmap schema as input, but also allow one where only the entries of bits set are
provided, rest is unset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\> \| [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`T`\> |

#### Returns

`number`

#### Overrides

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:48

___

### encodeInternal

▸ **encodeInternal**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\> |

#### Returns

`number`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:49

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\> |

#### Returns

`void`

#### Inherited from

[Schema](exports_schema.Schema.md).[validate](exports_schema.Schema.md#validate)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:15
