[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema](../modules/schema.md) / ByteArrayBitmapSchemaInternal

# Class: ByteArrayBitmapSchemaInternal<T\>

[schema](../modules/schema.md).ByteArrayBitmapSchemaInternal

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/schema.md#bitschema) |

## Hierarchy

- [`Schema`](schema.Schema.md)<[`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>, [`ByteArray`](../modules/util.md#bytearray-1)\>

  ↳ **`ByteArrayBitmapSchemaInternal`**

## Table of contents

### Constructors

- [constructor](schema.ByteArrayBitmapSchemaInternal.md#constructor)

### Properties

- [bitSchemas](schema.ByteArrayBitmapSchemaInternal.md#bitschemas)
- [byteArrayLength](schema.ByteArrayBitmapSchemaInternal.md#bytearraylength)
- [maskOffset](schema.ByteArrayBitmapSchemaInternal.md#maskoffset)

### Methods

- [decode](schema.ByteArrayBitmapSchemaInternal.md#decode)
- [decodeInternal](schema.ByteArrayBitmapSchemaInternal.md#decodeinternal)
- [encode](schema.ByteArrayBitmapSchemaInternal.md#encode)
- [encodeInternal](schema.ByteArrayBitmapSchemaInternal.md#encodeinternal)
- [validate](schema.ByteArrayBitmapSchemaInternal.md#validate)

## Constructors

### constructor

• **new ByteArrayBitmapSchemaInternal**<`T`\>(`bitSchemas`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/schema.md#bitschema) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitSchemas` | `T` |

#### Overrides

[Schema](schema.Schema.md).[constructor](schema.Schema.md#constructor)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:90](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L90)

## Properties

### bitSchemas

• `Private` `Readonly` **bitSchemas**: `T`

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:91](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L91)

___

### byteArrayLength

• `Private` `Readonly` **byteArrayLength**: `number`

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L87)

___

### maskOffset

• `Private` `Readonly` **maskOffset**: [`MaskOffsetFromBitSchema`](../modules/index._internal_.md#maskoffsetfrombitschema)<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:88](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L88)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `Uint8Array` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>

#### Inherited from

[Schema](schema.Schema.md).[decode](schema.Schema.md#decode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L16)

___

### decodeInternal

▸ **decodeInternal**(`bitmap`): [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap` | `Uint8Array` |

#### Returns

[`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>

#### Overrides

[Schema](schema.Schema.md).[decodeInternal](schema.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:140](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L140)

___

### encode

▸ **encode**(`value`): `Uint8Array`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\> |

#### Returns

`Uint8Array`

#### Inherited from

[Schema](schema.Schema.md).[encode](schema.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\> |

#### Returns

`Uint8Array`

#### Overrides

[Schema](schema.Schema.md).[encodeInternal](schema.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:115](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L115)

___

### validate

▸ **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\> |

#### Returns

`void`

#### Inherited from

[Schema](schema.Schema.md).[validate](schema.Schema.md#validate)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L28)
