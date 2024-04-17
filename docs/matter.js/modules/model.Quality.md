[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / Quality

# Namespace: Quality

[model](model.md).Quality

## Table of contents

### Enumerations

- [Field](../enums/model.Quality.Field.md)
- [Flag](../enums/model.Quality.Flag.md)

### Type Aliases

- [AllProperties](model.Quality.md#allproperties)
- [Ast](model.Quality.md#ast)
- [Attribute](model.Quality.md#attribute)
- [AttributeData](model.Quality.md#attributedata)
- [DataField](model.Quality.md#datafield)
- [Definition](model.Quality.md#definition)
- [DeviceType](model.Quality.md#devicetype)
- [FlagName](model.Quality.md#flagname)

### Variables

- [FlagNames](model.Quality.md#flagnames)

## Type Aliases

### AllProperties

Ƭ **AllProperties**: [`Attribute`](model.Quality.md#attribute) & \{ `singleton?`: `boolean`  }

Quality properties that apply to device types.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L190)

___

### Ast

Ƭ **Ast**: [`DeviceType`](model.Quality.md#devicetype)

Values for all qualities designated as "other qualities" in the Matter
specification.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L211)

___

### Attribute

Ƭ **Attribute**: [`AttributeData`](model.Quality.md#attributedata) & \{ `reportable?`: `boolean` ; `scene?`: `boolean`  }

Quality values that apply to attributes.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L175)

___

### AttributeData

Ƭ **AttributeData**: [`DataField`](model.Quality.md#datafield) & \{ `changesOmitted?`: `boolean` ; `fixed?`: `boolean` ; `nonvolatile?`: `boolean`  }

Quality values that apply to attribute data.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L154)

___

### DataField

Ƭ **DataField**: `Object`

Quality values that apply to data fields.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nullable?` | `boolean` | Designates a data field as nullable? Scope: data field |

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L142)

___

### Definition

Ƭ **Definition**: [`Ast`](model.Quality.md#ast) \| \`$\{Flag}\`[] \| `string` \| `undefined`

Various ways to define quality.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L101)

___

### DeviceType

Ƭ **DeviceType**: [`AllProperties`](model.Quality.md#allproperties) & \{ `disallowed?`: [`AllProperties`](model.Quality.md#allproperties)  }

Quality values that apply to device types.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L200)

___

### FlagName

Ƭ **FlagName**: \`$\{Field}\`

Valid "other quality" flags.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L132)

## Variables

### FlagNames

• `Const` **FlagNames**: [`FlagName`](model.Quality.md#flagname)[]

Runtime version of QualityFlag.

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L137)
