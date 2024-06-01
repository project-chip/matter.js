[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / Aspect

# Class: `abstract` Aspect\<D\>

An "aspect" is metadata about a Matter element that affects implementation
behavior.  Aspects are mostly "qualities" in the Matter specification except
for "constraint" which is not formally described as a quality.

## Extended by

- [`Access`](Access.md)
- [`Conformance`](Conformance.md)
- [`Constraint`](Constraint.md)
- [`Quality`](Quality.md)

## Type parameters

| Type parameter |
| :------ |
| `D` |

## Constructors

### new Aspect()

> **new Aspect**\<`D`\>(`definition`): [`Aspect`](Aspect.md)\<`D`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | `D` |

#### Returns

[`Aspect`](Aspect.md)\<`D`\>

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:16

## Properties

### definition

> **definition**: `D`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:13

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:14

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
| `other` | `Exclude`\<`D`, `"string"`\> |

#### Returns

`This`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:25

***

### toString()

> `abstract` **toString**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:23

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:22
