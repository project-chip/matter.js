[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / Quality

# Class: Quality

[model](../modules/model.md).Quality

An operational representation of "other quality" as defined by the Matter
specification.

"Other qualities" are defined behaviors of data fields and cluster elements
that do not involve access or conformance.

## Hierarchy

- [`Aspect`](model.Aspect.md)\<[`Definition`](../modules/model.Quality.md#definition)\>

  ↳ **`Quality`**

## Implements

- [`Ast`](../modules/model.Quality.md#ast)

## Table of contents

### Constructors

- [constructor](model.Quality-1.md#constructor)

### Properties

- [changesOmitted](model.Quality-1.md#changesomitted)
- [definition](model.Quality-1.md#definition)
- [disallowed](model.Quality-1.md#disallowed)
- [errors](model.Quality-1.md#errors)
- [fixed](model.Quality-1.md#fixed)
- [nonvolatile](model.Quality-1.md#nonvolatile)
- [nullable](model.Quality-1.md#nullable)
- [reportable](model.Quality-1.md#reportable)
- [scene](model.Quality-1.md#scene)
- [singleton](model.Quality-1.md#singleton)

### Accessors

- [empty](model.Quality-1.md#empty)
- [valid](model.Quality-1.md#valid)

### Methods

- [equals](model.Quality-1.md#equals)
- [error](model.Quality-1.md#error)
- [extend](model.Quality-1.md#extend)
- [parse](model.Quality-1.md#parse)
- [toString](model.Quality-1.md#tostring)
- [valueOf](model.Quality-1.md#valueof)

## Constructors

### constructor

• **new Quality**(`definition`): [`Quality`](model.Quality-1.md)

Initialize from a Quality.All definition or a string conforming to the
"other quality" DSL defined in the Matter specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/model.Quality.md#definition) |

#### Returns

[`Quality`](model.Quality-1.md)

#### Overrides

[Aspect](model.Aspect.md).[constructor](model.Aspect.md#constructor)

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L30)

## Properties

### changesOmitted

• `Optional` **changesOmitted**: `boolean`

#### Implementation of

Quality.Ast.changesOmitted

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L20)

___

### definition

• **definition**: [`Definition`](../modules/model.Quality.md#definition)

#### Inherited from

[Aspect](model.Aspect.md).[definition](model.Aspect.md#definition)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L17)

___

### disallowed

• `Optional` **disallowed**: [`AllProperties`](../modules/model.Quality.md#allproperties)

#### Implementation of

Quality.Ast.disallowed

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L24)

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Inherited from

[Aspect](model.Aspect.md).[errors](model.Aspect.md#errors)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L18)

___

### fixed

• `Optional` **fixed**: `boolean`

#### Implementation of

Quality.Ast.fixed

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L19)

___

### nonvolatile

• `Optional` **nonvolatile**: `boolean`

#### Implementation of

Quality.Ast.nonvolatile

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L18)

___

### nullable

• `Optional` **nullable**: `boolean`

#### Implementation of

Quality.Ast.nullable

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L17)

___

### reportable

• `Optional` **reportable**: `boolean`

#### Implementation of

Quality.Ast.reportable

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L22)

___

### scene

• `Optional` **scene**: `boolean`

#### Implementation of

Quality.Ast.scene

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L21)

___

### singleton

• `Optional` **singleton**: `boolean`

#### Implementation of

Quality.Ast.singleton

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L23)

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.empty

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L28)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.valid

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L20)

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

[Aspect](model.Aspect.md).[equals](model.Aspect.md#equals)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L40)

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

[Aspect](model.Aspect.md).[error](model.Aspect.md#error)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L54)

___

### extend

▸ **extend**\<`This`\>(`this`, `other`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Aspect`](model.Aspect.md)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `other` | [`Definition`](../modules/model.Quality.md#definition) |

#### Returns

`This`

#### Inherited from

[Aspect](model.Aspect.md).[extend](model.Aspect.md#extend)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L65)

___

### parse

▸ **parse**(`quality`, `definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quality` | [`Quality`](model.Quality-1.md) |
| `definition` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L42)

___

### toString

▸ **toString**(): `string`

Display quality using standard Matter syntax.

#### Returns

`string`

#### Overrides

[Aspect](model.Aspect.md).[toString](model.Aspect.md#tostring)

#### Defined in

[packages/matter.js/src/model/aspects/Quality.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Quality.ts#L83)

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[Aspect](model.Aspect.md).[valueOf](model.Aspect.md#valueof)

#### Defined in

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/aspects/Aspect.ts#L47)
