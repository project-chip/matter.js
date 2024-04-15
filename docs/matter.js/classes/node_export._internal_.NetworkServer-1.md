[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / NetworkServer

# Class: NetworkServer

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).NetworkServer

Server implementation of [NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).

This behavior mostly deals with configuration and events.  [NetworkServer](node_export._internal_.NetworkServer-1.md) provides the actual network
implementation.

## Hierarchy

- [`NetworkBehavior`](behavior_cluster_export._internal_.NetworkBehavior-1.md)

  ↳ **`NetworkServer`**

## Table of contents

### Constructors

- [constructor](node_export._internal_.NetworkServer-1.md#constructor)

### Properties

- [#agent](node_export._internal_.NetworkServer-1.md##agent)
- [events](node_export._internal_.NetworkServer-1.md#events)
- [internal](node_export._internal_.NetworkServer-1.md#internal)
- [state](node_export._internal_.NetworkServer-1.md#state)
- [Events](node_export._internal_.NetworkServer-1.md#events-1)
- [dependencies](node_export._internal_.NetworkServer-1.md#dependencies)
- [early](node_export._internal_.NetworkServer-1.md#early)
- [id](node_export._internal_.NetworkServer-1.md#id)
- [schema](node_export._internal_.NetworkServer-1.md#schema)

### Accessors

- [[reference]](node_export._internal_.NetworkServer-1.md#[reference])
- [agent](node_export._internal_.NetworkServer-1.md#agent)
- [context](node_export._internal_.NetworkServer-1.md#context)
- [endpoint](node_export._internal_.NetworkServer-1.md#endpoint)
- [session](node_export._internal_.NetworkServer-1.md#session)
- [defaults](node_export._internal_.NetworkServer-1.md#defaults)
- [supervisor](node_export._internal_.NetworkServer-1.md#supervisor)

### Methods

- [#endUncommissionedMode](node_export._internal_.NetworkServer-1.md##enduncommissionedmode)
- [[asyncDispose]](node_export._internal_.NetworkServer-1.md#[asyncdispose])
- [advertiseNow](node_export._internal_.NetworkServer-1.md#advertisenow)
- [asAdmin](node_export._internal_.NetworkServer-1.md#asadmin)
- [callback](node_export._internal_.NetworkServer-1.md#callback)
- [endCommissioning](node_export._internal_.NetworkServer-1.md#endcommissioning)
- [initialize](node_export._internal_.NetworkServer-1.md#initialize)
- [openAdvertisementWindow](node_export._internal_.NetworkServer-1.md#openadvertisementwindow)
- [reactTo](node_export._internal_.NetworkServer-1.md#reactto)
- [toString](node_export._internal_.NetworkServer-1.md#tostring)
- [set](node_export._internal_.NetworkServer-1.md#set)
- [supports](node_export._internal_.NetworkServer-1.md#supports)

## Constructors

### constructor

• **new NetworkServer**(`agent`, `backing`): [`NetworkServer`](node_export._internal_.NetworkServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`NetworkServer`](node_export._internal_.NetworkServer-1.md)

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[constructor](behavior_cluster_export._internal_.NetworkBehavior-1.md#constructor)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L147)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[#agent](behavior_cluster_export._internal_.NetworkBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md)

Access the behavior's events.

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[events](behavior_cluster_export._internal_.NetworkBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

___

### internal

• **internal**: [`Internal`](node_export._internal_.NetworkServer.Internal.md)

#### Overrides

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[internal](behavior_cluster_export._internal_.NetworkBehavior-1.md#internal)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L27)

___

### state

• **state**: [`State`](node_export._internal_.NetworkServer.State.md)

Access the behavior's state.

#### Overrides

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[state](behavior_cluster_export._internal_.NetworkBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L26)

___

### Events

▪ `Static` **Events**: typeof [`EventEmitter`](../modules/util_export.EventEmitter.md) = `EventEmitter`

Implementation of the events property.  Subclasses may override to extend.

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[Events](behavior_cluster_export._internal_.NetworkBehavior-1.md#events-1)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L183)

___

### dependencies

▪ `Static` `Optional` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

Explicitly reference other [Behavior](behavior_export.Behavior-1.md)s as dependencies, ensuring this behavior is destroyed first.

This probably won't be commonly necessary.  If it is we can instrument Agent to collect dependencies
automatically.

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[dependencies](behavior_cluster_export._internal_.NetworkBehavior-1.md#dependencies)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:272](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L272)

___

### early

▪ `Static` `Readonly` **early**: ``true``

By default behaviors load lazily as they are accessed.  You can set this flag to true to force behaviors to load
immediately when the endpoint initializes.

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[early](behavior_cluster_export._internal_.NetworkBehavior-1.md#early)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L18)

___

### id

▪ `Static` `Readonly` **id**: ``"network"``

Each behavior implementation has an ID that uniquely identifies the type of behavior.  An Endpoint may only have
one behavior with the specified ID.

Endpoint instances store each behavior in a property with the same name as the behavior's ID.

EndpointBuilder also uses the ID when replacing behaviors using the with() builder method.

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[id](behavior_cluster_export._internal_.NetworkBehavior-1.md#id)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L16)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

A behavior's schema controls access to data, commands and events.

Schema is inferred from the methods and properties of the behavior but you can specify explicitly for additional
control.

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[schema](behavior_cluster_export._internal_.NetworkBehavior-1.md#schema)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L69)

## Accessors

### [reference]

• `get` **[reference]**(): [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Returns

[`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

NetworkBehavior.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• `get` **agent**(): [`Agent`](endpoint_export.Agent-1.md)

The agent that owns the behavior.

#### Returns

[`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

NetworkBehavior.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### context

• `get` **context**(): [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

The context in which the behavior operates.

#### Returns

[`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

NetworkBehavior.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• `get` **endpoint**(): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

The endpoint that owns behavior's agent.

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

NetworkBehavior.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### session

• `get` **session**(): [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

The session in which the behavior has been invoked.

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

NetworkBehavior.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### defaults

• `get` **defaults**(): `Record`\<`string`, `any`\>

Default state values.

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

NetworkBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L244)

___

### supervisor

• `get` **supervisor**(): [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

The data supervisor for the behavior.  The supervisor controls validation and access to behavior data.

#### Returns

[`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

NetworkBehavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L161)

## Methods

### #endUncommissionedMode

▸ **#endUncommissionedMode**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L99)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `undefined` \| `Promise`\<`void`\>

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[[asyncDispose]](behavior_cluster_export._internal_.NetworkBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L23)

___

### advertiseNow

▸ **advertiseNow**(): `void`

Immediately broadcast presence to the network regardless of whether the advertisement window is open.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L86)

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

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[asAdmin](behavior_cluster_export._internal_.NetworkBehavior-1.md#asadmin)

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

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[callback](behavior_cluster_export._internal_.NetworkBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L93)

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Overrides

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[initialize](behavior_cluster_export._internal_.NetworkBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L29)

___

### openAdvertisementWindow

▸ **openAdvertisementWindow**(): `void`

Advertise and continue advertising at regular intervals until timeout per Matter specification.  If already
advertising, the advertisement timeout resets.

If the node is uncommissioned it announces as commissionable on all available transports. Commissioned devices
only advertise for operational discovery via DNS-SD.

Advertisement begins at startup.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L73)

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

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[reactTo](behavior_cluster_export._internal_.NetworkBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[toString](behavior_cluster_export._internal_.NetworkBehavior-1.md#tostring)

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

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[set](behavior_cluster_export._internal_.NetworkBehavior-1.md#set)

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

#### Inherited from

[NetworkBehavior](behavior_cluster_export._internal_.NetworkBehavior-1.md).[supports](behavior_cluster_export._internal_.NetworkBehavior-1.md#supports)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L237)
