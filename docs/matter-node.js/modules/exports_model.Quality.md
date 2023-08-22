[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / Quality

# Namespace: Quality

[exports/model](exports_model.md).Quality

## Table of contents

### Enumerations

- [Field](../enums/exports_model.Quality.Field.md)
- [Flag](../enums/exports_model.Quality.Flag.md)

### Type Aliases

- [AllProperties](exports_model.Quality.md#allproperties)
- [Ast](exports_model.Quality.md#ast)
- [Attribute](exports_model.Quality.md#attribute)
- [AttributeData](exports_model.Quality.md#attributedata)
- [DataField](exports_model.Quality.md#datafield)
- [Definition](exports_model.Quality.md#definition)
- [DeviceType](exports_model.Quality.md#devicetype)
- [FlagName](exports_model.Quality.md#flagname)

### Variables

- [FlagNames](exports_model.Quality.md#flagnames)

## Type Aliases

### AllProperties

Ƭ **AllProperties**: [`Attribute`](exports_model.Quality.md#attribute) & { `singleton?`: `boolean`  }

Quality properties that apply to device types.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:116

___

### Ast

Ƭ **Ast**: [`DeviceType`](exports_model.Quality.md#devicetype)

Values for all qualities designated as "other qualities" in the Matter
specification.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:135

___

### Attribute

Ƭ **Attribute**: [`AttributeData`](exports_model.Quality.md#attributedata) & { `reportable?`: `boolean` ; `scene?`: `boolean`  }

Quality values that apply to attributes.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:103

___

### AttributeData

Ƭ **AttributeData**: [`DataField`](exports_model.Quality.md#datafield) & { `changesOmitted?`: `boolean` ; `fixed?`: `boolean` ; `nonvolatile?`: `boolean`  }

Quality values that apply to attribute data.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:85

___

### DataField

Ƭ **DataField**: `Object`

Quality values that apply to data fields.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nullable?` | `boolean` | Designates a data field as nullable? Scope: data field |

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:74

___

### Definition

Ƭ **Definition**: [`Ast`](exports_model.Quality.md#ast) \| \`${Flag}\`[] \| `string` \| `undefined`

Various ways to define quality.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:38

___

### DeviceType

Ƭ **DeviceType**: [`AllProperties`](exports_model.Quality.md#allproperties) & { `disallowed?`: [`AllProperties`](exports_model.Quality.md#allproperties)  }

Quality values that apply to device types.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:125

___

### FlagName

Ƭ **FlagName**: \`${Field}\`

Valid "other quality" flags.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:66

## Variables

### FlagNames

• `Const` **FlagNames**: [`FlagName`](exports_model.Quality.md#flagname)[]

Runtime version of QualityFlag.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:70
