[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / SessionsBehavior

# Class: SessionsBehavior

Active [ServerNode](../../classes/ServerNode.md) client sessions.

## Extends

- [`Behavior`](../../../../behavior/export/classes/Behavior.md)

## Constructors

### new SessionsBehavior()

> **new SessionsBehavior**(`agent`, `backing`): [`SessionsBehavior`](SessionsBehavior.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../behavior/cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`SessionsBehavior`](SessionsBehavior.md)

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`constructor`](../../../../behavior/export/classes/Behavior.md#constructors)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L147)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`#agent`](../../../../behavior/export/classes/Behavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### events

> **events**: [`Events`](../namespaces/SessionsBehavior/classes/Events.md)

Access the behavior's events.

#### Overrides

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`events`](../../../../behavior/export/classes/Behavior.md#events)

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L22)

***

### state

> **state**: [`State`](../namespaces/SessionsBehavior/classes/State.md)

Access the behavior's state.

#### Overrides

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`state`](../../../../behavior/export/classes/Behavior.md#state)

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L21)

***

### Internal()

> `static` **Internal**: () => `object` = `EmptyState`

Implementation of internal state.  Subclasses may override to extend.

#### Returns

`object`

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`Internal`](../../../../behavior/export/classes/Behavior.md#internal)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L178)

***

### dependencies?

> `static` `optional` **dependencies**: `Iterable`\<[`Type`](../../../../behavior/export/namespaces/Behavior/interfaces/Type.md)\>

Explicitly reference other [Behavior](../../../../behavior/export/classes/Behavior.md)s as dependencies, ensuring this behavior is destroyed first.

This probably won't be commonly necessary.  If it is we can instrument Agent to collect dependencies
automatically.

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`dependencies`](../../../../behavior/export/classes/Behavior.md#dependencies)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:272](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L272)

***

### early

> `static` `readonly` **early**: `boolean` = `false`

By default behaviors load lazily as they are accessed.  You can set this flag to true to force behaviors to load
immediately when the endpoint initializes.

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`early`](../../../../behavior/export/classes/Behavior.md#early)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L75)

***

### id

> `static` `readonly` **id**: `"sessions"` = `"sessions"`

Each behavior implementation has an ID that uniquely identifies the type of behavior.  An Endpoint may only have
one behavior with the specified ID.

Endpoint instances store each behavior in a property with the same name as the behavior's ID.

EndpointBuilder also uses the ID when replacing behaviors using the with() builder method.

#### Overrides

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`id`](../../../../behavior/export/classes/Behavior.md#id)

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L19)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../behavior/cluster/export/-internal-/README.md#schema)

A behavior's schema controls access to data, commands and events.

Schema is inferred from the methods and properties of the behavior but you can specify explicitly for additional
control.

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`schema`](../../../../behavior/export/classes/Behavior.md#schema)

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

### #convertToExposedSession()

> `private` **#convertToExposedSession**(`session`): [`Session`](../namespaces/SessionsBehavior/interfaces/Session.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

[`Session`](../namespaces/SessionsBehavior/interfaces/Session.md)

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L35)

***

### #enterOfflineMode()

> `private` **#enterOfflineMode**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L84)

***

### #enterOnlineMode()

> `private` **#enterOnlineMode**(`sessions`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessions` | [`SessionManager`](../../../../session/export/classes/SessionManager.md)\<`any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L48)

***

### #sessionClosed()

> `private` **#sessionClosed**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L65)

***

### #sessionOpened()

> `private` **#sessionOpened**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L56)

***

### #subscriptionsChanged()

> `private` **#subscriptionsChanged**(`session`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L70)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`[asyncDispose]`](../../../../behavior/export/classes/Behavior.md#%5Basyncdispose%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

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

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`asAdmin`](../../../../behavior/export/classes/Behavior.md#asadmin)

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

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`callback`](../../../../behavior/export/classes/Behavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### initialize()

> **initialize**(): `void`

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`void`

#### Overrides

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`initialize`](../../../../behavior/export/classes/Behavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/sessions/SessionsBehavior.ts#L24)

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

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`reactTo`](../../../../behavior/export/classes/Behavior.md#reactto)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`toString`](../../../../behavior/export/classes/Behavior.md#tostring)

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

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`set`](../../../../behavior/export/classes/Behavior.md#set)

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

[`Behavior`](../../../../behavior/export/classes/Behavior.md).[`supports`](../../../../behavior/export/classes/Behavior.md#supports)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L237)
