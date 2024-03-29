[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / Aspect

# Class: Aspect\<D\>

[exports/model](../modules/exports_model.md).Aspect

An "aspect" is metadata about a Matter element that affects implementation
behavior.  Aspects are mostly "qualities" in the Matter specification except
for "constraint" which is not formally described as a quality.

## Type parameters

| Name |
| :------ |
| `D` |

## Hierarchy

- **`Aspect`**

  ↳ [`Access`](exports_model.Access-1.md)

  ↳ [`Conformance`](exports_model.Conformance-1.md)

  ↳ [`Constraint`](exports_model.Constraint-1.md)

  ↳ [`Quality`](exports_model.Quality-1.md)

## Table of contents

### Constructors

- [constructor](exports_model.Aspect.md#constructor)

### Properties

- [definition](exports_model.Aspect.md#definition)
- [errors](exports_model.Aspect.md#errors)

### Accessors

- [empty](exports_model.Aspect.md#empty)
- [valid](exports_model.Aspect.md#valid)

### Methods

- [equals](exports_model.Aspect.md#equals)
- [error](exports_model.Aspect.md#error)
- [extend](exports_model.Aspect.md#extend)
- [toString](exports_model.Aspect.md#tostring)
- [valueOf](exports_model.Aspect.md#valueof)

## Constructors

### constructor

• **new Aspect**\<`D`\>(`definition`): [`Aspect`](exports_model.Aspect.md)\<`D`\>

#### Type parameters

| Name |
| :------ |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `D` |

#### Returns

[`Aspect`](exports_model.Aspect.md)\<`D`\>

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:16

## Properties

### definition

• **definition**: `D`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:13

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:14

## Accessors

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:17

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:15

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

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:21

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

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:24

___

### extend

▸ **extend**\<`This`\>(`this`, `other`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Aspect`](exports_model.Aspect.md)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `other` | `Exclude`\<`D`, ``"string"``\> |

#### Returns

`This`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:25

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:23

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:22
