[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / Behaviors

# Class: Behaviors

This class manages [Behavior](../../../../behavior/export/classes/Behavior.md) instances owned by a [Endpoint](../../../../endpoint/export/classes/Endpoint.md).

## Constructors

### new Behaviors()

> **new Behaviors**(`endpoint`, `supported`, `options`): [`Behaviors`](Behaviors.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |
| `supported` | [`SupportedBehaviors`](../../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors) |
| `options` | `Record`\<`string`, `undefined` \| `object`\> |

#### Returns

[`Behaviors`](Behaviors.md)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L100)

## Properties

### #backings

> `private` **#backings**: `Record`\<`string`, [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)\> = `{}`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L40)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L38)

***

### #initializing?

> `private` `optional` **#initializing**: [`BasicSet`](../../../../util/export/classes/BasicSet.md)\<[`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md), [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L42)

***

### #options

> `private` **#options**: `Record`\<`string`, `undefined` \| `object`\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L41)

***

### #supported

> `private` **#supported**: [`SupportedBehaviors`](../../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L39)

## Accessors

### \[value\]

> `get` **\[value\]**(): [`Diagnostic`](../../../../log/export/interfaces/Diagnostic.md)[]

#### Returns

[`Diagnostic`](../../../../log/export/interfaces/Diagnostic.md)[]

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L59)

***

### detailedDiagnostic

> `get` **detailedDiagnostic**(): [`Diagnostic`](../../../../log/export/interfaces/Diagnostic.md)[][]

#### Returns

[`Diagnostic`](../../../../log/export/interfaces/Diagnostic.md)[][]

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L63)

***

### hasCrashed

> `get` **hasCrashed**(): `boolean`

True if any behaviors failed to initialized

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L210)

***

### status

> `get` **status**(): `Record`\<`string`, [`Status`](../../../../common/export/namespaces/Lifecycle/enumerations/Status.md)\>

#### Returns

`Record`\<`string`, [`Status`](../../../../common/export/namespaces/Lifecycle/enumerations/Status.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L51)

***

### supported

> `get` **supported**(): [`SupportedBehaviors`](../../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors)

The [SupportedBehaviors](../../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors-1) of the [Endpoint](../../../../endpoint/export/classes/Endpoint.md).

#### Returns

[`SupportedBehaviors`](../../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L47)

## Methods

### #activateLate()

> `private` **#activateLate**(`type`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:438](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L438)

***

### #augmentEndpoint()

> `private` **#augmentEndpoint**(`type`): `void`

Updates endpoint "state" and "events" properties to include properties for our implementations.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:535](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L535)

***

### #backingFor()

> `private` **#backingFor**(`container`, `type`): [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

Obtain a backing for an endpoint shortcut.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `container` | `string` |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

[`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:460](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L460)

***

### #createBacking()

> `private` **#createBacking**(`type`, `agent`): [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |

#### Returns

[`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:484](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L484)

***

### #getBehaviorType()

> `private` **#getBehaviorType**(`type`): [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

[`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:518](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L518)

***

### #initializeBacking()

> `private` **#initializeBacking**(`backing`, `agent`): [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `backing` | [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md) |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |

#### Returns

[`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:500](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L500)

***

### activate()

> **activate**(`type`, `agent`): `void`

Activate a behavior.

Semantically identical to createAsync() but does not return a Promise or throw an error.

Behaviors that fail initialization will be marked with crashed [status](Behaviors.md#status).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:283](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L283)

***

### close()

> **close**(): `Promise`\<`void`\>

Destroy all behaviors that are initialized (have backings present).

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:302](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L302)

***

### createAsync()

> **createAsync**(`type`, `agent`): `Promise`\<`void`\>

Create a behavior asynchronously.  Waits for the behavior to complete initialization.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L221)

***

### createMaybeAsync()

> **createMaybeAsync**(`type`, `agent`): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<[`Behavior`](../../../../behavior/export/classes/Behavior.md)\>

Create a behavior, possibly asynchronously.

This method returns a Promise only if await is necessary so the behavior can be used immediately if
possible.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)\<[`Behavior`](../../../../behavior/export/classes/Behavior.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:243](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L243)

***

### createSync()

> **createSync**(`type`, `agent`): [`Behavior`](../../../../behavior/export/classes/Behavior.md)

Create a behavior synchronously.  Fails if the behavior is not fully initialized.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |

#### Returns

[`Behavior`](../../../../behavior/export/classes/Behavior.md)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L195)

***

### defaultsFor()

> **defaultsFor**(`type`): `undefined` \| [`Struct`](../../../../behavior/cluster/export/-internal-/README.md#struct)

Obtain default values for a behavior.  This is state values as present when the behavior is first initialized for
a new endpoint.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`undefined` \| [`Struct`](../../../../behavior/cluster/export/-internal-/README.md#struct)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:385](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L385)

***

### has()

> **has**\<`T`\>(`type`): `boolean`

Does the [Endpoint](../../../../endpoint/export/classes/Endpoint.md) support a specified behavior?

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L159)

***

### initialize()

> **initialize**(`agent`): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Activate any behaviors designated for immediate activation.  Returns a promise iff any behaviors have ongoing
initialization.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L130)

***

### internalsOf()

> **internalsOf**\<`T`\>(`type`): `InstanceType`\<`T`\[`"Internal"`\]\>

Access internal state for a [Behavior](../../../../behavior/export/classes/Behavior.md).

Internal state is not stable API and not intended for consumption outside of the behavior.  However it is not
truly private and may be accessed by tightly coupled implementation.

As this API is intended for use by "friendly" code, it does not perform the same initialization assertions as
does access to [Behavior.State](../../../../behavior/export/classes/Behavior.md#state-1) and [Behavior.Events](../../../../behavior/export/classes/Behavior.md#events-1).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`InstanceType`\<`T`\[`"Internal"`\]\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:410](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L410)

***

### isActive()

> **isActive**(`type`): `boolean`

Determine if a specified behavior is supported and active.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:294](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L294)

***

### require()

> **require**\<`T`\>(`type`, `options`?): `void`

Add behavior support dynamically at runtime.  Typically called via [Agent.require](../../../../endpoint/export/classes/Agent.md#require).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |
| `options`? | [`Options`](../../../../behavior/export/namespaces/Behavior/README.md#optionst)\<`T`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L167)

***

### reset()

> **reset**(): `Promise`\<`void`\>

Destroy in-memory state, resetting behaviors to uninitialized state.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:425](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L425)

***

### validateRequirements()

> **validateRequirements**(`requirements`?): `void`

Ensure a set of behavior requirements are met.  Throws an error detailing missing requirements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `requirements`? | [`SupportedBehaviors`](../../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors) |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Behaviors.ts:345](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Behaviors.ts#L345)
