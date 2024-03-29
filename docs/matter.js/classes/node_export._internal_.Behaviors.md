[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / Behaviors

# Class: Behaviors

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).Behaviors

This class manages [Behavior](behavior_export.Behavior-1.md) instances owned by a [Endpoint](endpoint_export.Endpoint-1.md).

## Table of contents

### Constructors

- [constructor](node_export._internal_.Behaviors.md#constructor)

### Properties

- [#backings](node_export._internal_.Behaviors.md##backings)
- [#endpoint](node_export._internal_.Behaviors.md##endpoint)
- [#initializing](node_export._internal_.Behaviors.md##initializing)
- [#options](node_export._internal_.Behaviors.md##options)
- [#supported](node_export._internal_.Behaviors.md##supported)

### Accessors

- [[value]](node_export._internal_.Behaviors.md#[value])
- [hasCrashed](node_export._internal_.Behaviors.md#hascrashed)
- [status](node_export._internal_.Behaviors.md#status)
- [supported](node_export._internal_.Behaviors.md#supported)

### Methods

- [#activateLate](node_export._internal_.Behaviors.md##activatelate)
- [#augmentPartShortcuts](node_export._internal_.Behaviors.md##augmentpartshortcuts)
- [#backingFor](node_export._internal_.Behaviors.md##backingfor)
- [#createBacking](node_export._internal_.Behaviors.md##createbacking)
- [#getBehaviorType](node_export._internal_.Behaviors.md##getbehaviortype)
- [#initializeBacking](node_export._internal_.Behaviors.md##initializebacking)
- [activate](node_export._internal_.Behaviors.md#activate)
- [close](node_export._internal_.Behaviors.md#close)
- [createAsync](node_export._internal_.Behaviors.md#createasync)
- [createMaybeAsync](node_export._internal_.Behaviors.md#createmaybeasync)
- [createSync](node_export._internal_.Behaviors.md#createsync)
- [defaultsFor](node_export._internal_.Behaviors.md#defaultsfor)
- [has](node_export._internal_.Behaviors.md#has)
- [initialize](node_export._internal_.Behaviors.md#initialize)
- [internalsOf](node_export._internal_.Behaviors.md#internalsof)
- [isActive](node_export._internal_.Behaviors.md#isactive)
- [require](node_export._internal_.Behaviors.md#require)
- [reset](node_export._internal_.Behaviors.md#reset)
- [validateRequirements](node_export._internal_.Behaviors.md#validaterequirements)

## Constructors

### constructor

• **new Behaviors**(`endpoint`, `supported`, `options`): [`Behaviors`](node_export._internal_.Behaviors.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |
| `supported` | [`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors) |
| `options` | `Record`\<`string`, `undefined` \| `object`\> |

#### Returns

[`Behaviors`](node_export._internal_.Behaviors.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:60](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L60)

## Properties

### #backings

• `Private` **#backings**: `Record`\<`string`, [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\> = `{}`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:37](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L37)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:35](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L35)

___

### #initializing

• `Private` `Optional` **#initializing**: [`BasicSet`](util_export.BasicSet.md)\<[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md), [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:39](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L39)

___

### #options

• `Private` **#options**: `Record`\<`string`, `undefined` \| `object`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:38](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L38)

___

### #supported

• `Private` **#supported**: [`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:36](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L36)

## Accessors

### [value]

• `get` **[value]**(): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:56](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L56)

___

### hasCrashed

• `get` **hasCrashed**(): `boolean`

True if any behaviors failed to initialized

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:170](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L170)

___

### status

• `get` **status**(): `Record`\<`string`, [`Status`](../enums/common_export.Lifecycle.Status.md)\>

#### Returns

`Record`\<`string`, [`Status`](../enums/common_export.Lifecycle.Status.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:48](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L48)

___

### supported

• `get` **supported**(): [`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors)

The [SupportedBehaviors](../modules/behavior_cluster_export._internal_.md#supportedbehaviors-1) of the [Endpoint](endpoint_export.Endpoint-1.md).

#### Returns

[`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:44](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L44)

## Methods

### #activateLate

▸ **#activateLate**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:398](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L398)

___

### #augmentPartShortcuts

▸ **#augmentPartShortcuts**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:492](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L492)

___

### #backingFor

▸ **#backingFor**(`container`, `type`): [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

Obtain a backing for an endpoint shortcut.

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `string` |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:420](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L420)

___

### #createBacking

▸ **#createBacking**(`type`, `agent`): [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:444](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L444)

___

### #getBehaviorType

▸ **#getBehaviorType**(`type`): [`Type`](../interfaces/behavior_export.Behavior.Type.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

[`Type`](../interfaces/behavior_export.Behavior.Type.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:478](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L478)

___

### #initializeBacking

▸ **#initializeBacking**(`backing`, `agent`): [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:460](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L460)

___

### activate

▸ **activate**(`type`, `agent`): `void`

Activate a behavior.

Semantically identical to createAsync() but does not return a Promise or throw an error.

Behaviors that fail initialization will be marked with crashed [status](node_export._internal_.Behaviors.md#status).

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L243)

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy all behaviors that are initialized (have backings present).

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:262](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L262)

___

### createAsync

▸ **createAsync**(`type`, `agent`): `Promise`\<`void`\>

Create a behavior asynchronously.  Waits for the behavior to complete initialization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:181](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L181)

___

### createMaybeAsync

▸ **createMaybeAsync**(`type`, `agent`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`Behavior`](behavior_export.Behavior-1.md)\>

Create a behavior, possibly asynchronously.

This method returns a Promise only if await is necessary so the behavior can be used immediately if
possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`Behavior`](behavior_export.Behavior-1.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:203](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L203)

___

### createSync

▸ **createSync**(`type`, `agent`): [`Behavior`](behavior_export.Behavior-1.md)

Create a behavior synchronously.  Fails if the behavior is not fully initialized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

[`Behavior`](behavior_export.Behavior-1.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:155](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L155)

___

### defaultsFor

▸ **defaultsFor**(`type`): `undefined` \| [`Struct`](../modules/behavior_cluster_export._internal_.md#struct)

Obtain default values for a behavior.  This is state values as present when the behavior is first initialized for
a new endpoint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`undefined` \| [`Struct`](../modules/behavior_cluster_export._internal_.md#struct)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:345](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L345)

___

### has

▸ **has**\<`T`\>(`type`): `boolean`

Does the [Endpoint](endpoint_export.Endpoint-1.md) support a specified behavior?

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:119](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L119)

___

### initialize

▸ **initialize**(`agent`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Activate any behaviors designated for immediate activation.  Returns a promise iff any behaviors have ongoing
initialization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:90](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L90)

___

### internalsOf

▸ **internalsOf**\<`T`\>(`type`): `InstanceType`\<`T`[``"Internal"``]\>

Access internal state for a [Behavior](behavior_export.Behavior-1.md).

Internal state is not stable API and not intended for consumption outside of the behavior.  However it is not
truly private and may be accessed by tightly coupled implementation.

As this API is intended for use by "friendly" code, it does not perform the same initialization assertions as
does access to [Behavior.State](behavior_export.Behavior-1.md#state-1) and [Behavior.Events](behavior_export.Behavior-1.md#events-1).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`InstanceType`\<`T`[``"Internal"``]\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:370](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L370)

___

### isActive

▸ **isActive**(`type`): `boolean`

Determine if a specified behavior is supported and active.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:254](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L254)

___

### require

▸ **require**\<`T`\>(`type`, `options?`): `void`

Add behavior support dynamically at runtime.  Typically called via [Agent.require](endpoint_export.Agent-1.md#require).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `options?` | [`Options`](../modules/behavior_export.Behavior.md#options)\<`T`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:127](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L127)

___

### reset

▸ **reset**(): `Promise`\<`void`\>

Destroy in-memory state, resetting behaviors to uninitialized state.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:385](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L385)

___

### validateRequirements

▸ **validateRequirements**(`requirements?`): `void`

Ensure a set of behavior requirements are met.  Throws an error detailing missing requirements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requirements?` | [`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:305](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/properties/Behaviors.ts#L305)
