[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / Access

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

[packages/matter.js/src/model/aspects/Access.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L64)

## Properties

### definition

> **definition**: [`Definition`](../namespaces/Access/README.md#definition)

#### Inherited from

[`Aspect`](Aspect.md).[`definition`](Aspect.md#definition)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L17)

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`Aspect`](Aspect.md).[`errors`](Aspect.md#errors)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L18)

***

### fabric?

> `optional` **fabric**: [`Fabric`](../namespaces/Access/enumerations/Fabric.md)

#### Implementation of

`Access.Ast.fabric`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L22)

***

### readPriv?

> `optional` **readPriv**: [`Privilege`](../namespaces/Access/enumerations/Privilege.md)

#### Implementation of

`Access.Ast.readPriv`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L20)

***

### rw?

> `optional` **rw**: [`Rw`](../namespaces/Access/enumerations/Rw.md)

#### Implementation of

`Access.Ast.rw`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L19)

***

### timed?

> `optional` **timed**: `boolean`

#### Implementation of

`Access.Ast.timed`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L23)

***

### writePriv?

> `optional` **writePriv**: [`Privilege`](../namespaces/Access/enumerations/Privilege.md)

#### Implementation of

`Access.Ast.writePriv`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L21)

## Accessors

### complete

> `get` **complete**(): `boolean`

Determine whether this access is fully specified.  This means we know
whether reads and/or writes are allowed and if so the required access
levels.

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L52)

***

### empty

> `get` **empty**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L41)

***

### fabricScoped

> `get` **fabricScoped**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L33)

***

### fabricSensitive

> `get` **fabricSensitive**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L37)

***

### readable

> `get` **readable**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L25)

***

### valid

> `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L20)

***

### writable

> `get` **writable**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L29)

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
| `other` | [`Definition`](../namespaces/Access/README.md#definition) |

#### Returns

`This`

#### Inherited from

[`Aspect`](Aspect.md).[`extend`](Aspect.md#extend)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L65)

***

### set()

> `private` **set**(`flags`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | [`Flags`](../namespaces/Access/README.md#flags) |

#### Returns

`void`

#### Source

[packages/matter.js/src/model/aspects/Access.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L190)

***

### toString()

> **toString**(): `string`

Displays access using the standard Matter syntax.

#### Returns

`string`

#### Overrides

[`Aspect`](Aspect.md).[`toString`](Aspect.md#tostring)

#### Source

[packages/matter.js/src/model/aspects/Access.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L158)

***

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`Aspect`](Aspect.md).[`valueOf`](Aspect.md#valueof)

#### Source

[packages/matter.js/src/model/aspects/Aspect.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Aspect.ts#L47)

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

[packages/matter.js/src/model/aspects/Access.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/aspects/Access.ts#L80)
