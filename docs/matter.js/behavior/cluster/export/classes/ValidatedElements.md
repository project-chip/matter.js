[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/cluster/export](../README.md) / ValidatedElements

# Class: ValidatedElements

Analyzes a ClusterBehavior implementation to ensure it conforms to the Matter specification.

As this API is accessible via vanilla JavaScript, validation includes tests for errors that TypeScript otherwise
prevents.

Records elements supported and a list of errors if validation fails.

## Constructors

### new ValidatedElements()

> **new ValidatedElements**(`type`, `instance`?): [`ValidatedElements`](ValidatedElements.md)

Obtain validation information.

Validation may run against the type alone or with a specific instance of the behavior.  The latter option allows
for per-instance specialization.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../README.md#clusterinterfacef)\<`object`\>\> | the behavior type to analyze |
| `instance`? | [`Behavior`](../../../export/classes/Behavior.md) | optional concrete instance of the behavior |

#### Returns

[`ValidatedElements`](ValidatedElements.md)

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L62)

## Properties

### #cluster

> `private` **#cluster**: [`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md)

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L51)

***

### #instance?

> `private` `optional` **#instance**: [`Behavior`](../../../export/classes/Behavior.md)

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L50)

***

### #name

> `private` **#name**: `string`

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L48)

***

### #type

> `private` **#type**: [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md)

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L49)

***

### attributes

> **attributes**: `Set`\<`string`\>

Supported attributes.

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L31)

***

### commands

> **commands**: `Set`\<`string`\>

Supported commands.

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L36)

***

### errors?

> `optional` **errors**: `object`[]

A list of implementation errors, if any.

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L46)

***

### events

> **events**: `Set`\<`string`\>

Supported events.

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L41)

## Methods

### #validateAttributes()

> `private` **#validateAttributes**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L118)

***

### #validateCommands()

> `private` **#validateCommands**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L170)

***

### #validateEvents()

> `private` **#validateEvents**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:229](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L229)

***

### error()

> `private` **error**(`element`, `message`, `fatal`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `element` | `undefined` \| `string` |
| `message` | `string` |
| `fatal` | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L273)

***

### report()

> **report**(): `void`

If there are errors, log and throw an exception.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L91)
