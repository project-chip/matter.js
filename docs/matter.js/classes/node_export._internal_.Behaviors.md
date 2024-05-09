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
- [detailedDiagnostic](node_export._internal_.Behaviors.md#detaileddiagnostic)
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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L99)

## Properties

### #backings

• `Private` **#backings**: `Record`\<`string`, [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\> = `{}`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L39)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L37)

___

### #initializing

• `Private` `Optional` **#initializing**: [`BasicSet`](util_export.BasicSet.md)\<[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md), [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L41)

___

### #options

• `Private` **#options**: `Record`\<`string`, `undefined` \| `object`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L40)

___

### #supported

• `Private` **#supported**: [`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L38)

## Accessors

### [value]

• `get` **[value]**(): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L58)

___

### detailedDiagnostic

• `get` **detailedDiagnostic**(): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[][]

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[][]

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L62)

___

### hasCrashed

• `get` **hasCrashed**(): `boolean`

True if any behaviors failed to initialized

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L209)

___

### status

• `get` **status**(): `Record`\<`string`, [`Status`](../enums/common_export.Lifecycle.Status.md)\>

#### Returns

`Record`\<`string`, [`Status`](../enums/common_export.Lifecycle.Status.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L50)

___

### supported

• `get` **supported**(): [`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors)

The [SupportedBehaviors](../modules/behavior_cluster_export._internal_.md#supportedbehaviors-1) of the [Endpoint](endpoint_export.Endpoint-1.md).

#### Returns

[`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors)

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L46)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:437](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L437)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:531](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L531)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:459](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L459)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:483](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L483)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:517](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L517)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:499](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L499)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:282](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L282)

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy all behaviors that are initialized (have backings present).

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:301](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L301)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L220)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:242](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L242)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:194](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L194)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:384](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L384)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L158)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L129)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:409](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L409)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L293)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L166)

___

### reset

▸ **reset**(): `Promise`\<`void`\>

Destroy in-memory state, resetting behaviors to uninitialized state.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Behaviors.ts:424](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L424)

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

[packages/matter.js/src/endpoint/properties/Behaviors.ts:344](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Behaviors.ts#L344)
