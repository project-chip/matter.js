[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / NetworkServer

# Class: NetworkServer

Server implementation of [NetworkBehavior](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).

This behavior mostly deals with configuration and events.  [NetworkServer](NetworkServer.md) provides the actual network
implementation.

## Extends

- [`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md)

## Constructors

### new NetworkServer()

> **new NetworkServer**(`agent`, `backing`): [`NetworkServer`](NetworkServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`NetworkServer`](NetworkServer.md)

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`constructor`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#constructors)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L147)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`#agent`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../util/export/classes/EventEmitter.md)

Access the behavior's events.

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`events`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### internal

> **internal**: [`Internal`](../namespaces/NetworkServer/classes/Internal.md)

#### Overrides

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`internal`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#internal)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L27)

***

### state

> **state**: [`State`](../namespaces/NetworkServer/classes/State.md)

Access the behavior's state.

#### Overrides

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`state`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#state)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L26)

***

### Events

> `static` **Events**: *typeof* [`EventEmitter`](../../../../util/export/namespaces/EventEmitter/README.md) = `EventEmitter`

Implementation of the events property.  Subclasses may override to extend.

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`Events`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#events-1)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L183)

***

### dependencies?

> `static` `optional` **dependencies**: `Iterable`\<[`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md)\>

Explicitly reference other [Behavior](../../../../behavior/export/classes/Behavior.md)s as dependencies, ensuring this behavior is destroyed first.

This probably won't be commonly necessary.  If it is we can instrument Agent to collect dependencies
automatically.

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`dependencies`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#dependencies)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:272](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L272)

***

### early

> `static` `readonly` **early**: `true` = `true`

By default behaviors load lazily as they are accessed.  You can set this flag to true to force behaviors to load
immediately when the endpoint initializes.

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`early`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#early)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L18)

***

### id

> `static` `readonly` **id**: `"network"` = `"network"`

Each behavior implementation has an ID that uniquely identifies the type of behavior.  An Endpoint may only have
one behavior with the specified ID.

Endpoint instances store each behavior in a property with the same name as the behavior's ID.

EndpointBuilder also uses the ID when replacing behaviors using the with() builder method.

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`id`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#id)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L16)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../behavior/cluster/export/-internal-/README.md#schema)

A behavior's schema controls access to data, commands and events.

Schema is inferred from the methods and properties of the behavior but you can specify explicitly for additional
control.

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`schema`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#schema)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L69)

## Accessors

### \[reference\]

> `get` **\[reference\]**(): [`Datasource`](../../../../behavior/cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../behavior/cluster/export/-internal-/interfaces/StateType.md)\>

#### Returns

[`Datasource`](../../../../behavior/cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../behavior/cluster/export/-internal-/interfaces/StateType.md)\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> `get` **agent**(): [`Agent`](../../../../endpoint/export/classes/Agent.md)

The agent that owns the behavior.

#### Returns

[`Agent`](../../../../endpoint/export/classes/Agent.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### context

> `get` **context**(): [`ActionContext`](../../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)

The context in which the behavior operates.

#### Returns

[`ActionContext`](../../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> `get` **endpoint**(): [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

The endpoint that owns behavior's agent.

#### Returns

[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### session

> `get` **session**(): [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

The session in which the behavior has been invoked.

#### Returns

[`SecureSession`](../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### defaults

> `get` `static` **defaults**(): `Record`\<`string`, `any`\>

Default state values.

#### Returns

`Record`\<`string`, `any`\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L244)

***

### supervisor

> `get` `static` **supervisor**(): [`RootSupervisor`](../../../../behavior/cluster/export/-internal-/classes/RootSupervisor.md)

The data supervisor for the behavior.  The supervisor controls validation and access to behavior data.

#### Returns

[`RootSupervisor`](../../../../behavior/cluster/export/-internal-/classes/RootSupervisor.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L161)

## Methods

### #endUncommissionedMode()

> `private` **#endUncommissionedMode**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L98)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `undefined` \| `Promise`\<`void`\>

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

`undefined` \| `Promise`\<`void`\>

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`[asyncDispose]`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#%5Basyncdispose%5D)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L23)

***

### advertiseNow()

> **advertiseNow**(): `void`

Immediately broadcast presence to the network regardless of whether the advertisement window is open.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L85)

***

### asAdmin()

> **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`asAdmin`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#asadmin)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../../behavior/export/README.md#reactortr).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `any`[] |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../../../../behavior/export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../../behavior/export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`callback`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### endCommissioning()

> **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L92)

***

### initialize()

> **initialize**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Overrides

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`initialize`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L29)

***

### openAdvertisementWindow()

> **openAdvertisementWindow**(): `void`

Advertise and continue advertising at regular intervals until timeout per Matter specification.  If already
advertising, the advertisement timeout resets.

If the node is uncommissioned it announces as commissionable on all available transports. Commissioned devices
only advertise for operational discovery via DNS-SD.

Advertisement begins at startup.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L72)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../../behavior/export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../behavior/export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../behavior/export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`reactTo`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#reactto)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`toString`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#tostring)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### set()

> `static` **set**\<`This`\>(`this`, `defaults`): `This`

Create a new behavior with different default state values.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`set`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#set)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L251)

***

### supports()

> `static` **supports**(`other`): `boolean`

Does this behavior support functionality of a specific implementation?

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Inherited from

[`NetworkBehavior`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md).[`supports`](../../../../behavior/cluster/export/-internal-/classes/NetworkBehavior.md#supports)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L237)
