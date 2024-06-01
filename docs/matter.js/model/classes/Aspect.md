[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / Aspect

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

[packages/matter.js/src/model/aspects/Aspect.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L24)

## Properties

### definition

> **definition**: `D`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L17)

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L18)

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
| `other` | `Exclude`\<`D`, `"string"`\> |

#### Returns

`This`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L65)

***

### toString()

> `abstract` **toString**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L52)

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L47)
