[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / Quality

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

[packages/matter.js/src/model/aspects/Quality.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L30)

## Properties

### changesOmitted?

> `optional` **changesOmitted**: `boolean`

#### Implementation of

`Quality.Ast.changesOmitted`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L20)

***

### definition

> **definition**: [`Definition`](../namespaces/Quality/README.md#definition)

#### Inherited from

[`Aspect`](Aspect.md).[`definition`](Aspect.md#definition)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L17)

***

### disallowed?

> `optional` **disallowed**: [`AllProperties`](../namespaces/Quality/README.md#allproperties)

#### Implementation of

`Quality.Ast.disallowed`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L24)

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Aspect`](Aspect.md).[`errors`](Aspect.md#errors)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L18)

***

### fixed?

> `optional` **fixed**: `boolean`

#### Implementation of

`Quality.Ast.fixed`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L19)

***

### nonvolatile?

> `optional` **nonvolatile**: `boolean`

#### Implementation of

`Quality.Ast.nonvolatile`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L18)

***

### nullable?

> `optional` **nullable**: `boolean`

#### Implementation of

`Quality.Ast.nullable`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L17)

***

### reportable?

> `optional` **reportable**: `boolean`

#### Implementation of

`Quality.Ast.reportable`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L22)

***

### scene?

> `optional` **scene**: `boolean`

#### Implementation of

`Quality.Ast.scene`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L21)

***

### singleton?

> `optional` **singleton**: `boolean`

#### Implementation of

`Quality.Ast.singleton`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L23)

## Accessors

### empty

> `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L28)

***

### valid

> `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L20)

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

[packages/matter.js/src/model/aspects/Aspect.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L40)

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

[packages/matter.js/src/model/aspects/Aspect.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L54)

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

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L65)

***

### parse()

> `private` **parse**(`quality`, `definition`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `quality` | [`Quality`](Quality.md) |
| `definition` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L42)

***

### toString()

> **toString**(): `string`

Display quality using standard Matter syntax.

#### Returns

`string`

#### Overrides

[`Aspect`](Aspect.md).[`toString`](Aspect.md#tostring)

#### Source

[packages/matter.js/src/model/aspects/Quality.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Quality.ts#L83)

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`Aspect`](Aspect.md).[`valueOf`](Aspect.md#valueof)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L47)
