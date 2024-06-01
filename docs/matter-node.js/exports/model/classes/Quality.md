[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / Quality

# Class: Quality

An operational representation of "other quality" as defined by the Matter
specification.

"Other qualities" are defined behaviors of data fields and cluster elements
that do not involve access or conformance.

## Extends

- [`Aspect`](Aspect.md)\<[`Definition`](../namespaces/Quality/README.md#definition)\>

## Implements

- [`Ast`](../namespaces/Quality/README.md#ast)

## Constructors

### new Quality()

> **new Quality**(`definition`): [`Quality`](Quality.md)

Initialize from a Quality.All definition or a string conforming to the
"other quality" DSL defined in the Matter specification.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Quality/README.md#definition) |

#### Returns

[`Quality`](Quality.md)

#### Overrides

[`Aspect`](Aspect.md).[`constructor`](Aspect.md#constructors)

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:27

## Properties

### changesOmitted?

> `optional` **changesOmitted**: `boolean`

#### Implementation of

`Quality.Ast.changesOmitted`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:18

***

### definition

> **definition**: [`Definition`](../namespaces/Quality/README.md#definition)

#### Inherited from

[`Aspect`](Aspect.md).[`definition`](Aspect.md#definition)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:13

***

### disallowed?

> `optional` **disallowed**: [`AllProperties`](../namespaces/Quality/README.md#allproperties)

#### Implementation of

`Quality.Ast.disallowed`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:22

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Aspect`](Aspect.md).[`errors`](Aspect.md#errors)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:14

***

### fixed?

> `optional` **fixed**: `boolean`

#### Implementation of

`Quality.Ast.fixed`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:17

***

### nonvolatile?

> `optional` **nonvolatile**: `boolean`

#### Implementation of

`Quality.Ast.nonvolatile`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:16

***

### nullable?

> `optional` **nullable**: `boolean`

#### Implementation of

`Quality.Ast.nullable`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:15

***

### parse

> `private` **parse**: `any`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:28

***

### reportable?

> `optional` **reportable**: `boolean`

#### Implementation of

`Quality.Ast.reportable`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:20

***

### scene?

> `optional` **scene**: `boolean`

#### Implementation of

`Quality.Ast.scene`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:19

***

### singleton?

> `optional` **singleton**: `boolean`

#### Implementation of

`Quality.Ast.singleton`

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:21

## Accessors

### empty

> `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:17

***

### valid

> `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:15

## Methods

### equals()

> **equals**(`other`): `boolean`

Test for logical equivalence.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[`Aspect`](Aspect.md).[`equals`](Aspect.md#equals)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:21

***

### error()

> **error**(`code`, `message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[`Aspect`](Aspect.md).[`error`](Aspect.md#error)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:24

***

### extend()

> **extend**\<`This`\>(`this`, `other`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Aspect`](Aspect.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `other` | [`Definition`](../namespaces/Quality/README.md#definition) |

#### Returns

`This`

#### Inherited from

[`Aspect`](Aspect.md).[`extend`](Aspect.md#extend)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:25

***

### toString()

> **toString**(): `string`

Display quality using standard Matter syntax.

#### Returns

`string`

#### Overrides

[`Aspect`](Aspect.md).[`toString`](Aspect.md#tostring)

#### Source

packages/matter.js/dist/esm/model/aspects/Quality.d.ts:32

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`Aspect`](Aspect.md).[`valueOf`](Aspect.md#valueof)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:22
