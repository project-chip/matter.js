[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / Behavior

# Class: Behavior

[behavior/export](../modules/behavior_export.md).Behavior

Behavior implements functionality for an Endpoint.  Endpoint agents are implemented as a composition of behaviors.

Most behaviors associated 1:1 with a Matter cluster type as implemented by ClusterBehavior.  But you can also extend
Behavior directly to add other types of composable logic to an endpoint.

You probably want to build your behavior using one of the standard implementations offered by Matter.js.

## Hierarchy

- **`Behavior`**

  ↳ [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)

  ↳ [`NetworkBehavior`](behavior_cluster_export._internal_.NetworkBehavior-1.md)

  ↳ [`PartsBehavior`](node_export._internal_.PartsBehavior.md)

  ↳ [`IndexBehavior`](node_export._internal_.IndexBehavior-1.md)

  ↳ [`CommissioningBehavior`](node_export._internal_.CommissioningBehavior-1.md)

  ↳ [`ProductDescriptionServer`](node_export._internal_.ProductDescriptionServer-1.md)

  ↳ [`SessionsBehavior`](node_export._internal_.SessionsBehavior-1.md)

## Table of contents

### Constructors

- [constructor](behavior_export.Behavior-1.md#constructor)

### Properties

- [#agent](behavior_export.Behavior-1.md##agent)
- [events](behavior_export.Behavior-1.md#events)
- [state](behavior_export.Behavior-1.md#state)
- [Events](behavior_export.Behavior-1.md#events-1)
- [Internal](behavior_export.Behavior-1.md#internal)
- [State](behavior_export.Behavior-1.md#state-1)
- [dependencies](behavior_export.Behavior-1.md#dependencies)
- [early](behavior_export.Behavior-1.md#early)
- [id](behavior_export.Behavior-1.md#id)
- [schema](behavior_export.Behavior-1.md#schema)

### Accessors

- [[reference]](behavior_export.Behavior-1.md#[reference])
- [agent](behavior_export.Behavior-1.md#agent)
- [context](behavior_export.Behavior-1.md#context)
- [endpoint](behavior_export.Behavior-1.md#endpoint)
- [session](behavior_export.Behavior-1.md#session)
- [defaults](behavior_export.Behavior-1.md#defaults)
- [supervisor](behavior_export.Behavior-1.md#supervisor)

### Methods

- [[asyncDispose]](behavior_export.Behavior-1.md#[asyncdispose])
- [asAdmin](behavior_export.Behavior-1.md#asadmin)
- [callback](behavior_export.Behavior-1.md#callback)
- [initialize](behavior_export.Behavior-1.md#initialize)
- [reactTo](behavior_export.Behavior-1.md#reactto)
- [toString](behavior_export.Behavior-1.md#tostring)
- [set](behavior_export.Behavior-1.md#set)
- [supports](behavior_export.Behavior-1.md#supports)

## Constructors

### constructor

• **new Behavior**(`agent`, `backing`): [`Behavior`](behavior_export.Behavior-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`Behavior`](behavior_export.Behavior-1.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L147)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md)

Access the behavior's events.

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

___

### state

• `Readonly` **state**: `Object`

Access the behavior's state.

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

___

### Events

▪ `Static` **Events**: typeof [`EventEmitter`](../modules/util_export.EventEmitter.md) = `EventEmitter`

Implementation of the events property.  Subclasses may override to extend.

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L183)

___

### Internal

▪ `Static` **Internal**: () => {} = `EmptyState`

Implementation of internal state.  Subclasses may override to extend.

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

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

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L173)

___

### dependencies

▪ `Static` `Optional` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

Explicitly reference other [Behavior](behavior_export.Behavior-1.md)s as dependencies, ensuring this behavior is destroyed first.

This probably won't be commonly necessary.  If it is we can instrument Agent to collect dependencies
automatically.

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:272](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L272)

___

### early

▪ `Static` `Readonly` **early**: `boolean` = `false`

By default behaviors load lazily as they are accessed.  You can set this flag to true to force behaviors to load
immediately when the endpoint initializes.

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L75)

___

### id

▪ `Static` `Readonly` **id**: `string`

Each behavior implementation has an ID that uniquely identifies the type of behavior.  An Endpoint may only have
one behavior with the specified ID.

Endpoint instances store each behavior in a property with the same name as the behavior's ID.

EndpointBuilder also uses the ID when replacing behaviors using the with() builder method.

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L61)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

A behavior's schema controls access to data, commands and events.

Schema is inferred from the methods and properties of the behavior but you can specify explicitly for additional
control.

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L69)

## Accessors

### [reference]

• `get` **[reference]**(): [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Returns

[`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• `get` **agent**(): [`Agent`](endpoint_export.Agent-1.md)

The agent that owns the behavior.

#### Returns

[`Agent`](endpoint_export.Agent-1.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### context

• `get` **context**(): [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

The context in which the behavior operates.

#### Returns

[`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• `get` **endpoint**(): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

The endpoint that owns behavior's agent.

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### session

• `get` **session**(): [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

The session in which the behavior has been invoked.

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### defaults

• `get` **defaults**(): `Record`\<`string`, `any`\>

Default state values.

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L244)

___

### supervisor

• `get` **supervisor**(): [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

The data supervisor for the behavior.  The supervisor controls validation and access to behavior data.

#### Returns

[`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L161)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

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

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)

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

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L237)
