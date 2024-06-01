[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / Quality

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

[packages/matter.js/src/model/aspects/Quality.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L190)

***

### Ast

> **Ast**: [`DeviceType`](README.md#devicetype)

Values for all qualities designated as "other qualities" in the Matter
specification.

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L211)

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

[packages/matter.js/src/model/aspects/Quality.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L175)

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

[packages/matter.js/src/model/aspects/Quality.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L154)

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

[packages/matter.js/src/model/aspects/Quality.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L142)

***

### Definition

> **Definition**: [`Ast`](README.md#ast) \| \`$\{Flag\}\`[] \| `string` \| `undefined`

Various ways to define quality.

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L101)

***

### DeviceType

> **DeviceType**: [`AllProperties`](README.md#allproperties) & `object`

Quality values that apply to device types.

#### Type declaration

##### disallowed?

> `optional` **disallowed**: [`AllProperties`](README.md#allproperties)

Designates qualities that are disallowed for the device type.

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L200)

***

### FlagName

> **FlagName**: \`$\{Field\}\`

Valid "other quality" flags.

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L132)

## Variables

### FlagNames

> `const` **FlagNames**: [`FlagName`](README.md#flagname)[]

Runtime version of QualityFlag.

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L137)
