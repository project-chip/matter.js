[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / ClusterBehavior

# Class: ClusterBehavior

[behavior/cluster/export](../modules/behavior_cluster_export.md).ClusterBehavior

A [Behavior](behavior_export.Behavior-1.md) with specialization for a specific cluster.

To implement cluster functionality you should use a subclass provided by [ClusterBehavior.for](behavior_cluster_export.ClusterBehavior-1.md#for) with the
[ClusterType](../modules/cluster_export.md#clustertype) you are implementing.  Most commonly you would use one of the predefined implementations
matter.js includes.

Subclasses can be modified using the static builder methods or extended like a normal class.

Behaviors should store all mutable state in their [Behavior.state](behavior_export.Behavior-1.md#state) property.  Other fields will be transient
and may not be retained across invocations.

ClusterBehaviors may be instantiated with unsupported mandatory commands and attributes.  This is currently results
in a runtime error but it will not cause a type error during development.

## Hierarchy

- [`Behavior`](behavior_export.Behavior-1.md)

  ↳ **`ClusterBehavior`**

## Table of contents

### Constructors

- [constructor](behavior_cluster_export.ClusterBehavior-1.md#constructor)

### Properties

- [#agent](behavior_cluster_export.ClusterBehavior-1.md##agent)
- [events](behavior_cluster_export.ClusterBehavior-1.md#events)
- [state](behavior_cluster_export.ClusterBehavior-1.md#state)
- [Events](behavior_cluster_export.ClusterBehavior-1.md#events-1)
- [Interface](behavior_cluster_export.ClusterBehavior-1.md#interface)
- [Internal](behavior_cluster_export.ClusterBehavior-1.md#internal)
- [State](behavior_cluster_export.ClusterBehavior-1.md#state-1)
- [cluster](behavior_cluster_export.ClusterBehavior-1.md#cluster)
- [dependencies](behavior_cluster_export.ClusterBehavior-1.md#dependencies)
- [early](behavior_cluster_export.ClusterBehavior-1.md#early)
- [id](behavior_cluster_export.ClusterBehavior-1.md#id)
- [schema](behavior_cluster_export.ClusterBehavior-1.md#schema)

### Accessors

- [[reference]](behavior_cluster_export.ClusterBehavior-1.md#[reference])
- [agent](behavior_cluster_export.ClusterBehavior-1.md#agent)
- [cluster](behavior_cluster_export.ClusterBehavior-1.md#cluster-1)
- [context](behavior_cluster_export.ClusterBehavior-1.md#context)
- [endpoint](behavior_cluster_export.ClusterBehavior-1.md#endpoint)
- [features](behavior_cluster_export.ClusterBehavior-1.md#features)
- [session](behavior_cluster_export.ClusterBehavior-1.md#session)
- [defaults](behavior_cluster_export.ClusterBehavior-1.md#defaults)
- [supervisor](behavior_cluster_export.ClusterBehavior-1.md#supervisor)

### Methods

- [[asyncDispose]](behavior_cluster_export.ClusterBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_cluster_export.ClusterBehavior-1.md#asadmin)
- [callback](behavior_cluster_export.ClusterBehavior-1.md#callback)
- [initialize](behavior_cluster_export.ClusterBehavior-1.md#initialize)
- [reactTo](behavior_cluster_export.ClusterBehavior-1.md#reactto)
- [toString](behavior_cluster_export.ClusterBehavior-1.md#tostring)
- [alter](behavior_cluster_export.ClusterBehavior-1.md#alter)
- [enable](behavior_cluster_export.ClusterBehavior-1.md#enable)
- [for](behavior_cluster_export.ClusterBehavior-1.md#for)
- [set](behavior_cluster_export.ClusterBehavior-1.md#set)
- [supports](behavior_cluster_export.ClusterBehavior-1.md#supports)
- [with](behavior_cluster_export.ClusterBehavior-1.md#with)
- [withInterface](behavior_cluster_export.ClusterBehavior-1.md#withinterface)

## Constructors

### constructor

• **new ClusterBehavior**(`agent`, `backing`): [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[constructor](behavior_export.Behavior-1.md#constructor)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L78)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[#agent](behavior_export.Behavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md)

Access the behavior's events.

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[events](behavior_export.Behavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

___

### state

• `Readonly` **state**: `Object`

Access the behavior's state.

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[state](behavior_export.Behavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

___

### Events

▪ `Static` **Events**: typeof [`EventEmitter`](../modules/util_export.EventEmitter.md) = `EventEmitter`

Implementation of the events property.  Subclasses may override to extend.

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[Events](behavior_export.Behavior-1.md#events-1)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L183)

___

### Interface

▪ `Static` `Readonly` **Interface**: `Object` = `ClusterInterface.Empty`

Method definitions.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | `never`[] |

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L66)

___

### Internal

▪ `Static` **Internal**: () => {} = `EmptyState`

Implementation of internal state.  Subclasses may override to extend.

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[Internal](behavior_export.Behavior-1.md#internal)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L178)

___

### State

▪ `Static` **State**: () => {} = `EmptyState`

Implementation of endpoint-scoped state.  Subclasses may override to extend.

#### Type declaration

• **new State**(): `Object`

##### Returns

`Object`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[State](behavior_export.Behavior-1.md#state-1)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L173)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\> = `ClusterType.Unknown`

Every cluster behavior has an associated ClusterType defined statically.

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L61)

___

### dependencies

▪ `Static` `Readonly` **dependencies**: typeof [`NetworkBehavior`](../modules/behavior_cluster_export._internal_.NetworkBehavior.md)[]

Keep networking alive until I'm destroyed.

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[dependencies](behavior_export.Behavior-1.md#dependencies)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L76)

___

### early

▪ `Static` `Readonly` **early**: ``true``

All ClusterBehavior initialization currently runs as part of Endpoint initialization.

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[early](behavior_export.Behavior-1.md#early)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L71)

___

### id

▪ `Static` **id**: `Uncapitalize`\<`string`\>

The ID of ClusterBehavior implementations is the uncapitalized cluster name.

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[id](behavior_export.Behavior-1.md#id)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L42)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

A behavior's schema controls access to data, commands and events.

Schema is inferred from the methods and properties of the behavior but you can specify explicitly for additional
control.

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[schema](behavior_export.Behavior-1.md#schema)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L69)

## Accessors

### [reference]

• `get` **[reference]**(): [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Returns

[`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

Behavior.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• `get` **agent**(): [`Agent`](endpoint_export.Agent-1.md)

The agent that owns the behavior.

#### Returns

[`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

Behavior.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• `get` **cluster**(): [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>

The cluster implemented by this behavior.

#### Returns

[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

___

### context

• `get` **context**(): [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

The context in which the behavior operates.

#### Returns

[`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

Behavior.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• `get` **endpoint**(): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

The endpoint that owns behavior's agent.

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

Behavior.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### features

• `get` **features**(): `Object`

Supported features as a flag object.

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

___

### session

• `get` **session**(): [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

The session in which the behavior has been invoked.

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

Behavior.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### defaults

• `get` **defaults**(): `Record`\<`string`, `any`\>

Default state values.

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

Behavior.defaults

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L244)

___

### supervisor

• `get` **supervisor**(): [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

The data supervisor for the behavior.  The supervisor controls validation and access to behavior data.

#### Returns

[`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

Behavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L161)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[[asyncDispose]](behavior_export.Behavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[asAdmin](behavior_export.Behavior-1.md#asadmin)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[callback](behavior_export.Behavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[initialize](behavior_export.Behavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

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

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[reactTo](behavior_export.Behavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[toString](behavior_export.Behavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

Create a new behavior with modified cluster elements.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L121)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

Create a new behavior with additional cluster features marked "mandatory".

This informs matter.js that an application supports these elements.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L133)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

Create a new behavior for a specific [ClusterType](../modules/cluster_export.md#clustertype).

If you invoke directly on [ClusterBehavior](behavior_cluster_export.ClusterBehavior-1.md) you will receive a new implementation that reports all commands
as unimplemented.

If you invoke on an existing subclass, you will receive a new implementation with the cluster in the subclass
replaced.  You should generally only do this with a [ClusterType](../modules/cluster_export.md#clustertype) with the same ID.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L96)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

Create a new behavior with different default state values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Inherited from

[Behavior](behavior_export.Behavior-1.md).[set](behavior_export.Behavior-1.md#set)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L251)

___

### supports

▸ **supports**(`other`): `boolean`

Does this behavior support functionality of a specific implementation?

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`boolean`

#### Overrides

[Behavior](behavior_export.Behavior-1.md).[supports](behavior_export.Behavior-1.md#supports)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L150)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

Create a new behavior with different cluster features.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L107)

___

### withInterface

▸ **withInterface**\<`I`\>(): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), `I`\>

Create a ClusterBehavior like this one with different interface methods.

The Interface "property" is type-only.  We define a method however to keep the API consistent.  At runtime the
method is a no-op.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), `I`\>

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L146)
