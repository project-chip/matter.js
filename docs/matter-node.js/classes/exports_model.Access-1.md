[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / Access

# Class: Access

[exports/model](../modules/exports_model.md).Access

An operational representation of "access" as defined by the Matter
specification.

"Access" controls the operations a remote party may perform on a data field
or cluster element.

## Hierarchy

- [`Aspect`](exports_model.Aspect.md)\<[`Definition`](../modules/exports_model.Access.md#definition)\>

  ↳ **`Access`**

## Implements

- [`Ast`](../modules/exports_model.Access.md#ast)

## Table of contents

### Constructors

- [constructor](exports_model.Access-1.md#constructor)

### Properties

- [definition](exports_model.Access-1.md#definition)
- [errors](exports_model.Access-1.md#errors)
- [fabric](exports_model.Access-1.md#fabric)
- [readPriv](exports_model.Access-1.md#readpriv)
- [rw](exports_model.Access-1.md#rw)
- [set](exports_model.Access-1.md#set)
- [timed](exports_model.Access-1.md#timed)
- [writePriv](exports_model.Access-1.md#writepriv)

### Accessors

- [complete](exports_model.Access-1.md#complete)
- [empty](exports_model.Access-1.md#empty)
- [readable](exports_model.Access-1.md#readable)
- [valid](exports_model.Access-1.md#valid)
- [writable](exports_model.Access-1.md#writable)

### Methods

- [equals](exports_model.Access-1.md#equals)
- [error](exports_model.Access-1.md#error)
- [extend](exports_model.Access-1.md#extend)
- [toString](exports_model.Access-1.md#tostring)
- [valueOf](exports_model.Access-1.md#valueof)
- [parse](exports_model.Access-1.md#parse)

## Constructors

### constructor

• **new Access**(`definition`): [`Access`](exports_model.Access-1.md)

Initialize from an Access.Definition or the access control DSL defined
by the Matter Specification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](../modules/exports_model.Access.md#definition) |

#### Returns

[`Access`](exports_model.Access-1.md)

#### Overrides

[Aspect](exports_model.Aspect.md).[constructor](exports_model.Aspect.md#constructor)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:33

## Properties

### definition

• **definition**: [`Definition`](../modules/exports_model.Access.md#definition)

#### Inherited from

[Aspect](exports_model.Aspect.md).[definition](exports_model.Aspect.md#definition)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:13

___

### errors

• `Optional` **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Inherited from

[Aspect](exports_model.Aspect.md).[errors](exports_model.Aspect.md#errors)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:14

___

### fabric

• `Optional` **fabric**: [`Fabric`](../enums/exports_model.Access.Fabric.md)

#### Implementation of

Access.Ast.fabric

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:18

___

### readPriv

• `Optional` **readPriv**: [`Privilege`](../enums/exports_model.Access.Privilege.md)

#### Implementation of

Access.Ast.readPriv

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:16

___

### rw

• `Optional` **rw**: [`Rw`](../enums/exports_model.Access.Rw.md)

#### Implementation of

Access.Ast.rw

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:15

___

### set

• `Private` **set**: `any`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:43

___

### timed

• `Optional` **timed**: `boolean`

#### Implementation of

Access.Ast.timed

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:19

___

### writePriv

• `Optional` **writePriv**: [`Privilege`](../enums/exports_model.Access.Privilege.md)

#### Implementation of

Access.Ast.writePriv

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:17

## Accessors

### complete

• `get` **complete**(): `boolean`

Determine whether this access is fully specified.  This means we know
whether reads and/or writes are allowed and if so the required access
levels.

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:28

___

### empty

• `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Overrides

Aspect.empty

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:22

___

### readable

• `get` **readable**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:20

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Aspect.valid

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:15

___

### writable

• `get` **writable**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:21

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

#### Inherited from

[Aspect](exports_model.Aspect.md).[error](exports_model.Aspect.md#error)

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
| `other` | [`Definition`](../modules/exports_model.Access.md#definition) |

#### Returns

`This`

#### Inherited from

[Aspect](exports_model.Aspect.md).[extend](exports_model.Aspect.md#extend)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:25

___

### toString

▸ **toString**(): `string`

Displays access using the standard Matter syntax.

#### Returns

`string`

#### Overrides

[Aspect](exports_model.Aspect.md).[toString](exports_model.Aspect.md#tostring)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:42

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[Aspect](exports_model.Aspect.md).[valueOf](exports_model.Aspect.md#valueof)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:22

___

### parse

▸ **parse**(`access`, `definition`): [`Flags`](../modules/exports_model.Access.md#flags)

Parses standard Matter access syntax into an AccessFlag set.  Extremely
lenient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `access` | [`Access`](exports_model.Access-1.md) |
| `definition` | `string` |

#### Returns

[`Flags`](../modules/exports_model.Access.md#flags)

#### Defined in

packages/matter.js/dist/esm/model/aspects/Access.d.ts:38
