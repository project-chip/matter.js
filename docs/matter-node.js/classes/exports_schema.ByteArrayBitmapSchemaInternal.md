[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/schema](../modules/exports_schema.md) / ByteArrayBitmapSchemaInternal

# Class: ByteArrayBitmapSchemaInternal<T\>

[exports/schema](../modules/exports_schema.md).ByteArrayBitmapSchemaInternal

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Schema`](exports_schema.Schema.md)<[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>, [`ByteArray`](../modules/util_export.md#bytearray-1)\>

  ↳ **`ByteArrayBitmapSchemaInternal`**

## Table of contents

### Constructors

- [constructor](exports_schema.ByteArrayBitmapSchemaInternal.md#constructor)

### Properties

- [bitSchemas](exports_schema.ByteArrayBitmapSchemaInternal.md#bitschemas)
- [byteArrayLength](exports_schema.ByteArrayBitmapSchemaInternal.md#bytearraylength)
- [maskOffset](exports_schema.ByteArrayBitmapSchemaInternal.md#maskoffset)

### Methods

- [decode](exports_schema.ByteArrayBitmapSchemaInternal.md#decode)
- [decodeInternal](exports_schema.ByteArrayBitmapSchemaInternal.md#decodeinternal)
- [encode](exports_schema.ByteArrayBitmapSchemaInternal.md#encode)
- [encodeInternal](exports_schema.ByteArrayBitmapSchemaInternal.md#encodeinternal)
- [validate](exports_schema.ByteArrayBitmapSchemaInternal.md#validate)

## Constructors

### constructor

• **new ByteArrayBitmapSchemaInternal**<`T`\>(`bitSchemas`)

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

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:56

## Properties

### bitSchemas

• `Private` `Readonly` **bitSchemas**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:53

___

### byteArrayLength

• `Private` `Readonly` **byteArrayLength**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:54

___

### maskOffset

• `Private` `Readonly` **maskOffset**: `any`

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:55

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoded` | `Uint8Array` |
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
| `bitmap` | `Uint8Array` |

#### Returns

[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\>

#### Overrides

[Schema](exports_schema.Schema.md).[decodeInternal](exports_schema.Schema.md#decodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:58

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\> |

#### Returns

`Uint8Array`

#### Inherited from

[Schema](exports_schema.Schema.md).[encode](exports_schema.Schema.md#encode)

#### Defined in

packages/matter.js/dist/cjs/schema/Schema.d.ts:9

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`T`\> |

#### Returns

`Uint8Array`

#### Overrides

[Schema](exports_schema.Schema.md).[encodeInternal](exports_schema.Schema.md#encodeinternal)

#### Defined in

packages/matter.js/dist/cjs/schema/BitmapSchema.d.ts:57

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
