[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / Quality

# Class: Quality

[exports/model](../modules/exports_model.md).Quality

An operational representation of "other quality" as defined by the Matter
specification.

"Other qualities" are defined behaviors of data fields and cluster elements
that do not involve access or conformance.

## Hierarchy

- [`Aspect`](exports_model.Aspect.md)<[`Definition`](../modules/exports_model.Quality.md#definition)\>

  ↳ **`Quality`**

## Implements

- [`Ast`](../modules/exports_model.Quality.md#ast)

## Table of contents

### Constructors

- [constructor](exports_model.Quality-1.md#constructor)

### Properties

- [changesOmitted](exports_model.Quality-1.md#changesomitted)
- [definition](exports_model.Quality-1.md#definition)
- [disallowed](exports_model.Quality-1.md#disallowed)
- [errors](exports_model.Quality-1.md#errors)
- [fixed](exports_model.Quality-1.md#fixed)
- [nonvolatile](exports_model.Quality-1.md#nonvolatile)
- [nullable](exports_model.Quality-1.md#nullable)
- [parse](exports_model.Quality-1.md#parse)
- [reportable](exports_model.Quality-1.md#reportable)
- [scene](exports_model.Quality-1.md#scene)
- [singleton](exports_model.Quality-1.md#singleton)

### Accessors

- [empty](exports_model.Quality-1.md#empty)
- [valid](exports_model.Quality-1.md#valid)

### Methods

- [equals](exports_model.Quality-1.md#equals)
- [error](exports_model.Quality-1.md#error)
- [extend](exports_model.Quality-1.md#extend)
- [toString](exports_model.Quality-1.md#tostring)
- [valueOf](exports_model.Quality-1.md#valueof)

## Constructors

### constructor

• **new Quality**(`definition`)

Initialize from a Quality.All definition or a string conforming to the
"other quality" DSL defined in the Matter specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/exports_model.Quality.md#definition) |

#### Overrides

[Aspect](exports_model.Aspect.md).[constructor](exports_model.Aspect.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:27

## Properties

### changesOmitted

• `Optional` **changesOmitted**: `boolean`

#### Implementation of

Quality.Ast.changesOmitted

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:18

___

### definition

• **definition**: [`Definition`](../modules/exports_model.Quality.md#definition)

#### Inherited from

[Aspect](exports_model.Aspect.md).[definition](exports_model.Aspect.md#definition)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:13

___

### disallowed

• `Optional` **disallowed**: [`AllProperties`](../modules/exports_model.Quality.md#allproperties)

#### Implementation of

Quality.Ast.disallowed

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:22

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[Aspect](exports_model.Aspect.md).[errors](exports_model.Aspect.md#errors)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:14

___

### fixed

• `Optional` **fixed**: `boolean`

#### Implementation of

Quality.Ast.fixed

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:17

___

### nonvolatile

• `Optional` **nonvolatile**: `boolean`

#### Implementation of

Quality.Ast.nonvolatile

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:16

___

### nullable

• `Optional` **nullable**: `boolean`

#### Implementation of

Quality.Ast.nullable

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:15

___

### parse

• `Private` **parse**: `any`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:28

___

### reportable

• `Optional` **reportable**: `boolean`

#### Implementation of

Quality.Ast.reportable

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:20

___

### scene

• `Optional` **scene**: `boolean`

#### Implementation of

Quality.Ast.scene

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:19

___

### singleton

• `Optional` **singleton**: `boolean`

#### Implementation of

Quality.Ast.singleton

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:21

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.empty

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:17

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.valid

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:15

## Methods

### equals

▸ **equals**(`other`): `boolean`

Test for logical equivalence.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[Aspect](exports_model.Aspect.md).[equals](exports_model.Aspect.md#equals)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:21

___

### error

▸ **error**(`code`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[Aspect](exports_model.Aspect.md).[error](exports_model.Aspect.md#error)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:23

___

### extend

▸ **extend**(`other`): [`Aspect`](exports_model.Aspect.md)<[`Definition`](../modules/exports_model.Quality.md#definition)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Definition`](../modules/exports_model.Quality.md#definition) |

#### Returns

[`Aspect`](exports_model.Aspect.md)<[`Definition`](../modules/exports_model.Quality.md#definition)\>

#### Inherited from

[Aspect](exports_model.Aspect.md).[extend](exports_model.Aspect.md#extend)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:24

___

### toString

▸ **toString**(): `string`

Display quality using standard Matter syntax.

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Quality.d.ts:32

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[Aspect](exports_model.Aspect.md).[valueOf](exports_model.Aspect.md#valueof)

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Aspect.d.ts:22
