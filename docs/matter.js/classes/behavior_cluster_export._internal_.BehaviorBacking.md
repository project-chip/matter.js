[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / BehaviorBacking

# Class: BehaviorBacking

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).BehaviorBacking

The "backing" for a behavior manages those portions of behavior that endure for the lifetime of an endpoint.

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.BehaviorBacking.md#constructor)

### Properties

- [#construction](behavior_cluster_export._internal_.BehaviorBacking.md##construction)
- [#datasource](behavior_cluster_export._internal_.BehaviorBacking.md##datasource)
- [#endpoint](behavior_cluster_export._internal_.BehaviorBacking.md##endpoint)
- [#events](behavior_cluster_export._internal_.BehaviorBacking.md##events)
- [#internal](behavior_cluster_export._internal_.BehaviorBacking.md##internal)
- [#options](behavior_cluster_export._internal_.BehaviorBacking.md##options)
- [#reactors](behavior_cluster_export._internal_.BehaviorBacking.md##reactors)
- [#type](behavior_cluster_export._internal_.BehaviorBacking.md##type)
- [store](behavior_cluster_export._internal_.BehaviorBacking.md#store)

### Accessors

- [construction](behavior_cluster_export._internal_.BehaviorBacking.md#construction)
- [datasource](behavior_cluster_export._internal_.BehaviorBacking.md#datasource)
- [datasourceOptions](behavior_cluster_export._internal_.BehaviorBacking.md#datasourceoptions)
- [endpoint](behavior_cluster_export._internal_.BehaviorBacking.md#endpoint)
- [events](behavior_cluster_export._internal_.BehaviorBacking.md#events)
- [path](behavior_cluster_export._internal_.BehaviorBacking.md#path)
- [stateView](behavior_cluster_export._internal_.BehaviorBacking.md#stateview)
- [status](behavior_cluster_export._internal_.BehaviorBacking.md#status)
- [type](behavior_cluster_export._internal_.BehaviorBacking.md#type)

### Methods

- [#invokeClose](behavior_cluster_export._internal_.BehaviorBacking.md##invokeclose)
- [#lifecycleInstance](behavior_cluster_export._internal_.BehaviorBacking.md##lifecycleinstance)
- [close](behavior_cluster_export._internal_.BehaviorBacking.md#close)
- [createBehavior](behavior_cluster_export._internal_.BehaviorBacking.md#createbehavior)
- [getInternal](behavior_cluster_export._internal_.BehaviorBacking.md#getinternal)
- [initialize](behavior_cluster_export._internal_.BehaviorBacking.md#initialize)
- [invokeInitializer](behavior_cluster_export._internal_.BehaviorBacking.md#invokeinitializer)
- [reactTo](behavior_cluster_export._internal_.BehaviorBacking.md#reactto)
- [toString](behavior_cluster_export._internal_.BehaviorBacking.md#tostring)

## Constructors

### constructor

• **new BehaviorBacking**(`endpoint`, `type`, `options?`): [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |
| `options?` | `Partial`\<{}\> |

#### Returns

[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L39)

## Properties

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L33)

___

### #datasource

• `Private` `Optional` **#datasource**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L31)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L26)

___

### #events

• `Private` `Optional` **#events**: [`EventEmitter`](util_export.EventEmitter-1.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L29)

___

### #internal

• `Private` `Optional` **#internal**: `object`

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L28)

___

### #options

• `Private` `Optional` **#options**: `Partial`\<{}\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L30)

___

### #reactors

• `Private` `Optional` **#reactors**: [`Reactors`](behavior_cluster_export._internal_.Reactors.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L32)

___

### #type

• `Private` **#type**: [`Type`](../interfaces/behavior_export.Behavior.Type.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L27)

___

### store

• `Protected` `Optional` `Readonly` `Abstract` **store**: [`Store`](../interfaces/behavior_cluster_export._internal_.Datasource.Store.md)

The data provider for [datasource](behavior_cluster_export._internal_.BehaviorBacking.md#datasource).

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L170)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L35)

___

### datasource

• `get` **datasource**(): [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

The source of raw data that backs managed state instances.

#### Returns

[`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L147)

___

### datasourceOptions

• `get` **datasourceOptions**(): [`Options`](../interfaces/behavior_cluster_export._internal_.Datasource.Options.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Returns

[`Options`](../interfaces/behavior_cluster_export._internal_.Datasource.Options.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L155)

___

### endpoint

• `get` **endpoint**(): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

The [Endpoint](endpoint_export.Endpoint-1.md) that owns the behavior.

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L117)

___

### events

• `get` **events**(): [`EventEmitter`](util_export.EventEmitter-1.md)

Access the event object.  Unlike state, the events object does not vary by instance.

#### Returns

[`EventEmitter`](util_export.EventEmitter-1.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L186)

___

### path

• `get` **path**(): [`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

#### Returns

[`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L51)

___

### stateView

• `get` **stateView**(): `Object`

A read-only offline view of behavior state.

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L203)

___

### status

• `get` **status**(): [`Status`](../enums/common_export.Lifecycle.Status.md)

The status of the behavior.

#### Returns

[`Status`](../enums/common_export.Lifecycle.Status.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L196)

___

### type

• `get` **type**(): [`Type`](../interfaces/behavior_export.Behavior.Type.md)

The [Behavior.Type](../interfaces/behavior_export.Behavior.Type.md) backed.

#### Returns

[`Type`](../interfaces/behavior_export.Behavior.Type.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L124)

## Methods

### #invokeClose

▸ **#invokeClose**(`agent`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Invoke Behavior.destroy to clean up application logic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:224](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L224)

___

### #lifecycleInstance

▸ **#lifecycleInstance**(`agent`): [`Behavior`](behavior_export.Behavior-1.md)

Obtain a behavior instance for lifecycle methods (initialize and close).

Under these circumstances we can't use [Agent.get](endpoint_export.Agent-1.md#get) because it will throw if the endpoint is initializing
or closing.

Instead we use a "friend" method of agent to retrieve any existing behavior or create a new one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

[`Behavior`](behavior_export.Behavior-1.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L243)

___

### close

▸ **close**(`agent`, `invokeClose?`): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\>

Destroy the backing.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) | `undefined` |
| `invokeClose` | `boolean` | `true` |

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md)\>

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L82)

___

### createBehavior

▸ **createBehavior**(`agent`, `type`): [`Behavior`](behavior_export.Behavior-1.md)

Create an instance of the backed [Behavior](behavior_export.Behavior-1.md).

Derivatives may override to perform additional setup beyond simple instantiation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

[`Behavior`](behavior_export.Behavior-1.md)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L133)

___

### getInternal

▸ **getInternal**(): `object`

Obtain internal state for a behavior instance.

#### Returns

`object`

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L175)

___

### initialize

▸ **initialize**(`agent`): `void`

Initialize state by applying values from options and invoking the behavior's initialize() function.

Called by Behaviors class once the backing is installed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L60)

___

### invokeInitializer

▸ **invokeInitializer**(`behavior`, `options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Set state from options and invoke Behavior.invokeInitializer.

This is an optional extension point for derivatives.  Errors thrown here are recorded and place the behavior into
crashed state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `behavior` | [`Behavior`](behavior_export.Behavior-1.md) |
| `options?` | `Partial`\<{}\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L110)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a reactor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L210)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/internal/BehaviorBacking.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/internal/BehaviorBacking.ts#L47)
