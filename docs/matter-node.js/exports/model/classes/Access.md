[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/model](../README.md) / Access

# Class: Access

An operational representation of "access" as defined by the Matter
specification.

"Access" controls the operations a remote party may perform on a data field
or cluster element.

## Extends

- [`Aspect`](Aspect.md)\<[`Definition`](../namespaces/Access/README.md#definition)\>

## Implements

- [`Ast`](../namespaces/Access/README.md#ast)

## Constructors

### new Access()

> **new Access**(`definition`): [`Access`](Access.md)

Initialize from an Access.Definition or the access control DSL defined
by the Matter Specification.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Access/README.md#definition) |

#### Returns

[`Access`](Access.md)

#### Overrides

[`Aspect`](Aspect.md).[`constructor`](Aspect.md#constructors)

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:36

## Properties

### definition

> **definition**: [`Definition`](../namespaces/Access/README.md#definition)

#### Inherited from

[`Aspect`](Aspect.md).[`definition`](Aspect.md#definition)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:13

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Aspect`](Aspect.md).[`errors`](Aspect.md#errors)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:14

***

### fabric?

> `optional` **fabric**: [`Fabric`](../namespaces/Access/enumerations/Fabric.md)

#### Implementation of

`Access.Ast.fabric`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:19

***

### readPriv?

> `optional` **readPriv**: [`Privilege`](../namespaces/Access/enumerations/Privilege.md)

#### Implementation of

`Access.Ast.readPriv`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:17

***

### rw?

> `optional` **rw**: [`Rw`](../namespaces/Access/enumerations/Rw.md)

#### Implementation of

`Access.Ast.rw`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:16

***

### set

> `private` **set**: `any`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:46

***

### timed?

> `optional` **timed**: `boolean`

#### Implementation of

`Access.Ast.timed`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:20

***

### writePriv?

> `optional` **writePriv**: [`Privilege`](../namespaces/Access/enumerations/Privilege.md)

#### Implementation of

`Access.Ast.writePriv`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:18

## Accessors

### complete

> `get` **complete**(): `boolean`

Determine whether this access is fully specified.  This means we know
whether reads and/or writes are allowed and if so the required access
levels.

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:31

***

### empty

> `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:25

***

### fabricScoped

> `get` **fabricScoped**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:23

***

### fabricSensitive

> `get` **fabricSensitive**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:24

***

### readable

> `get` **readable**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:21

***

### valid

> `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:15

***

### writable

> `get` **writable**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:22

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
| `other` | [`Definition`](../namespaces/Access/README.md#definition) |

#### Returns

`This`

#### Inherited from

[`Aspect`](Aspect.md).[`extend`](Aspect.md#extend)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:25

***

### toString()

> **toString**(): `string`

Displays access using the standard Matter syntax.

#### Returns

`string`

#### Overrides

[`Aspect`](Aspect.md).[`toString`](Aspect.md#tostring)

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:45

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`Aspect`](Aspect.md).[`valueOf`](Aspect.md#valueof)

#### Source

packages/matter.js/dist/esm/model/aspects/Aspect.d.ts:22

***

### parse()

> `static` **parse**(`access`, `definition`): [`Flags`](../namespaces/Access/README.md#flags)

Parses standard Matter access syntax into an AccessFlag set.  Extremely
lenient.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `access` | [`Access`](Access.md) |
| `definition` | `string` |

#### Returns

[`Flags`](../namespaces/Access/README.md#flags)

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:41
