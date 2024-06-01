[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / Quality

# Namespace: Quality

## Index

### Enumerations

- [Field](enumerations/Field.md)
- [Flag](enumerations/Flag.md)

## Type Aliases

### AllProperties

> **AllProperties**: [`Attribute`](README.md#attribute) & `object`

Quality properties that apply to device types.

#### Type declaration

##### singleton?

> `optional` **singleton**: `boolean`

Designates a cluster as a singleton on the node for the device type.

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:116

***

### Ast

> **Ast**: [`DeviceType`](README.md#devicetype)

Values for all qualities designated as "other qualities" in the Matter
specification.

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:135

***

### Attribute

> **Attribute**: [`AttributeData`](README.md#attributedata) & `object`

Quality values that apply to attributes.

#### Type declaration

##### reportable?

> `optional` **reportable**: `boolean`

Designates best-effort reporting as available for an attribute.

##### scene?

> `optional` **scene**: `boolean`

Designates an attribute as part of a scene.

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:103

***

### AttributeData

> **AttributeData**: [`DataField`](README.md#datafield) & `object`

Quality values that apply to attribute data.

#### Type declaration

##### changesOmitted?

> `optional` **changesOmitted**: `boolean`

Designates a fast-changing value for which delta changes are
unavailable.

##### fixed?

> `optional` **fixed**: `boolean`

Designates a value as unchanging short of software replacement.

##### nonvolatile?

> `optional` **nonvolatile**: `boolean`

Designates attribute value persistant across restarts?

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:85

***

### DataField

> **DataField**: `object`

Quality values that apply to data fields.

#### Type declaration

##### nullable?

> `optional` **nullable**: `boolean`

Designates a data field as nullable?

Scope: data field

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:74

***

### Definition

> **Definition**: [`Ast`](README.md#ast) \| \`$\{Flag\}\`[] \| `string` \| `undefined`

Various ways to define quality.

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:38

***

### DeviceType

> **DeviceType**: [`AllProperties`](README.md#allproperties) & `object`

Quality values that apply to device types.

#### Type declaration

##### disallowed?

> `optional` **disallowed**: [`AllProperties`](README.md#allproperties)

Designates qualities that are disallowed for the device type.

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:125

***

### FlagName

> **FlagName**: \`$\{Field\}\`

Valid "other quality" flags.

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:66

## Variables

### FlagNames

> `const` **FlagNames**: [`FlagName`](README.md#flagname)[]

Runtime version of QualityFlag.

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:70
