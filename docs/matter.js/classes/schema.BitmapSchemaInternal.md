[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [schema](../modules/schema.md) / BitmapSchemaInternal

# Class: BitmapSchemaInternal<T\>

[schema](../modules/schema.md).BitmapSchemaInternal

Define a schema to encode / decode convert type T to type E.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](../modules/schema.md#bitschema) |

## Hierarchy

- [`Schema`](schema.Schema.md)<[`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>, `number`\>

  ↳ **`BitmapSchemaInternal`**

## Table of contents

### Constructors

- [constructor](schema.BitmapSchemaInternal.md#constructor)

### Properties

- [bitSchemas](schema.BitmapSchemaInternal.md#bitschemas)
- [masks](schema.BitmapSchemaInternal.md#masks)

### Methods

- [decode](schema.BitmapSchemaInternal.md#decode)
- [decodeInternal](schema.BitmapSchemaInternal.md#decodeinternal)
- [encode](schema.BitmapSchemaInternal.md#encode)
- [encodeInternal](schema.BitmapSchemaInternal.md#encodeinternal)
- [validate](schema.BitmapSchemaInternal.md#validate)

## Constructors

### constructor

• **new BitmapSchemaInternal**<`T`\>(`bitSchemas`)

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

[packages/matter.js/src/schema/BitmapSchema.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L41)

## Properties

### bitSchemas

• `Private` `Readonly` **bitSchemas**: `T`

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L42)

___

### masks

• `Private` `Readonly` **masks**: [`MaskFromBitSchema`](../modules/index._internal_.md#maskfrombitschema)<`T`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L39)

## Methods

### decode

▸ **decode**(`encoded`, `validate?`): [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>

Decodes the encoded data using the schema.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `number` | `undefined` |
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
| `bitmap` | `number` |

#### Returns

[`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\>

#### Overrides

[Schema](schema.Schema.md).[decodeInternal](schema.Schema.md#decodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L71)

___

### encode

▸ **encode**(`value`): `number`

Encodes the value using the schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\> |

#### Returns

`number`

#### Inherited from

[Schema](schema.Schema.md).[encode](schema.Schema.md#encode)

#### Defined in

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/Schema.ts#L10)

___

### encodeInternal

▸ **encodeInternal**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`T`\> |

#### Returns

`number`

#### Overrides

[Schema](schema.Schema.md).[encodeInternal](schema.Schema.md#encodeinternal)

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L55)

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
