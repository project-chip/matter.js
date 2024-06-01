[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [endpoint/export](../README.md) / Agent

# Class: Agent

An Agent offers interaction with a single endpoint.  This is the operational interface to endpoints.  It is separate
from the [Endpoint](Endpoint.md) because the agent is context-aware and may be bound to a specific fabric.

An endpoint agent manages one or more [Behavior](../../../behavior/export/classes/Behavior.md) instances that implement a discrete subset of the agent's
functionality.

Each endpoint agent has an associated [Agent.Type](../namespaces/Agent/interfaces/Type.md) that defines each [Behavior.Type](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) the endpoint
supports.

[Agent.Type](../namespaces/Agent/interfaces/Type.md) is a permanent feature of an endpoint but agent instances themselves are transitory and there is
no guarantee they will exist beyond the lifecycle of a single transaction.

## Constructors

### new Agent()

> **new Agent**(`endpoint`, `context`): [`Agent`](Agent.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |
| `context` | [`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md) |

#### Returns

[`Agent`](Agent.md)

#### Source

[packages/matter.js/src/endpoint/Agent.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L35)

## Properties

### #behaviors

> `private` **#behaviors**: `Record`\<`string`, [`Behavior`](../../../behavior/export/classes/Behavior.md)\>

#### Source

[packages/matter.js/src/endpoint/Agent.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L33)

***

### #context

> `private` **#context**: [`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)

#### Source

[packages/matter.js/src/endpoint/Agent.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L32)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/Agent.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L31)

## Accessors

### context

> `get` **context**(): [`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)

Access the agent's [ActionContext](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md).

#### Returns

[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)

#### Source

[packages/matter.js/src/endpoint/Agent.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L60)

***

### endpoint

> `get` **endpoint**(): [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

Access the [Endpoint](Endpoint.md) this agent acts on behalf of.

#### Returns

[`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/Agent.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L43)

***

### owner

> `get` **owner**(): `undefined` \| [`Agent`](Agent.md)

Access an [Agent](Agent.md) for this agent's owner.

#### Returns

`undefined` \| [`Agent`](Agent.md)

#### Source

[packages/matter.js/src/endpoint/Agent.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L50)

## Methods

### `[INSTALL_BEHAVIOR]`()

> **\[INSTALL\_BEHAVIOR\]**(`behavior`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `behavior` | [`Behavior`](../../../behavior/export/classes/Behavior.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/Agent.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L150)

***

### activate()

> **activate**(`type`): `void`

Trigger initialization of a supported [Behavior.Type](../../../behavior/export/namespaces/Behavior/interfaces/Type.md).

Functionally identical to [load](Agent.md#load) but has no return value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/Agent.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L106)

***

### get()

> **get**\<`T`\>(`type`): `InstanceType`\<`T`\>

Obtain a [Behavior](../../../behavior/export/classes/Behavior.md) supported by this agent.  Throws an error if the [Behavior.Type](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) isn't supported
or is still initializing.

You may also access behaviors using normal property access, e.g. `agent.descriptor` is the same as
`agent.get(DescriptorBehavior)`.

Property access is available in TypeScript when the set of behaviors is defined statically.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`InstanceType`\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Agent.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L80)

***

### has()

> **has**\<`BehaviorT`\>(`type`): `this is InstanceType<BehaviorT>`

Test to see if a [Behavior.Type](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) is supported by this agent.

#### Type parameters

| Type parameter |
| :------ |
| `BehaviorT` *extends* [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `BehaviorT` |

#### Returns

`this is InstanceType<BehaviorT>`

#### Source

[packages/matter.js/src/endpoint/Agent.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L67)

***

### isLoaded()

> **isLoaded**(`type`): `boolean`

Determine whether a behavior is loaded (does not validate class, only by ID).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/Agent.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L120)

***

### load()

> **load**\<`T`\>(`type`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`InstanceType`\<`T`\>\>

Obtain a behavior supported by this agent.  Throws an error if the [Behavior.Type](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) isn't supported.  Waits
if the behavior is not yet initialized.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`InstanceType`\<`T`\>\>

#### Source

[packages/matter.js/src/endpoint/Agent.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L92)

***

### require()

> **require**\<`T`\>(`type`, `options`?): `void`

Add support for a [Behavior.Type](../../../behavior/export/namespaces/Behavior/interfaces/Type.md).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |
| `options`? | [`Options`](../../../behavior/export/namespaces/Behavior/README.md#optionst)\<`T`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/Agent.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L113)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/endpoint/Agent.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L124)

***

### for()

> `static` **for**\<`T`\>(`type`, `behaviors`): [`Type`](../namespaces/Agent/interfaces/Type.md)\<`T`\>

Create a new [Agent](Agent.md) that supports the specified behaviors.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) |
| `behaviors` | [`SupportedBehaviors`](../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors) |

#### Returns

[`Type`](../namespaces/Agent/interfaces/Type.md)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Agent.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L131)
