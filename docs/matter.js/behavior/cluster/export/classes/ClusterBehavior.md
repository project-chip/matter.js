[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/cluster/export](../README.md) / ClusterBehavior

# Class: ClusterBehavior

A [Behavior](../../../export/classes/Behavior.md) with specialization for a specific cluster.

To implement cluster functionality you should use a subclass provided by [ClusterBehavior.for](ClusterBehavior.md#for) with the
[ClusterType](../../../../cluster/export/README.md#clustertype) you are implementing.  Most commonly you would use one of the predefined implementations
matter.js includes.

Subclasses can be modified using the static builder methods or extended like a normal class.

Behaviors should store all mutable state in their [Behavior.state](../../../export/classes/Behavior.md#state) property.  Other fields will be transient
and may not be retained across invocations.

ClusterBehaviors may be instantiated with unsupported mandatory commands and attributes.  This is currently results
in a runtime error but it will not cause a type error during development.

## Extends

- [`Behavior`](../../../export/classes/Behavior.md)

## Constructors

### new ClusterBehavior()

> **new ClusterBehavior**(`agent`, `backing`): [`ClusterBehavior`](ClusterBehavior.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../-internal-/classes/BehaviorBacking.md) |

#### Returns

[`ClusterBehavior`](ClusterBehavior.md)

#### Overrides

[`Behavior`](../../../export/classes/Behavior.md).[`constructor`](../../../export/classes/Behavior.md#constructors)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L78)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`#agent`](../../../export/classes/Behavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../util/export/classes/EventEmitter.md)

Access the behavior's events.

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`events`](../../../export/classes/Behavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### state

> `readonly` **state**: `object`

Access the behavior's state.

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`state`](../../../export/classes/Behavior.md#state)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

***

### Events

> `static` **Events**: *typeof* [`EventEmitter`](../../../../util/export/namespaces/EventEmitter/README.md) = `EventEmitter`

Implementation of the events property.  Subclasses may override to extend.

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`Events`](../../../export/classes/Behavior.md#events-1)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L183)

***

### Interface

> `static` `readonly` **Interface**: `object` = `ClusterInterface.Empty`

Method definitions.

#### components

> **components**: `never`[] = `[]`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L66)

***

### Internal()

> `static` **Internal**: () => `object` = `EmptyState`

Implementation of internal state.  Subclasses may override to extend.

#### Returns

`object`

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`Internal`](../../../export/classes/Behavior.md#internal)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L178)

***

### State()

> `static` **State**: () => `object` = `EmptyState`

Implementation of endpoint-scoped state.  Subclasses may override to extend.

#### Returns

`object`

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`State`](../../../export/classes/Behavior.md#state-1)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L173)

***

### cluster

> `static` `readonly` **cluster**: [`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\> = `ClusterType.Unknown`

Every cluster behavior has an associated ClusterType defined statically.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object` = `{}`

##### commands

> `readonly` **commands**: `object` = `{}`

##### events

> `readonly` **events**: `object` = `{}`

##### id

> `readonly` **id**: `0` = `0`

##### name

> `readonly` **name**: `"Unknown"` = `"Unknown"`

##### revision

> `readonly` **revision**: `0` = `0`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L61)

***

### dependencies

> `static` `readonly` **dependencies**: *typeof* [`NetworkBehavior`](../-internal-/namespaces/NetworkBehavior/README.md)[]

Keep networking alive until I'm destroyed.

#### Overrides

[`Behavior`](../../../export/classes/Behavior.md).[`dependencies`](../../../export/classes/Behavior.md#dependencies)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L76)

***

### early

> `static` `readonly` **early**: `true` = `true`

All ClusterBehavior initialization currently runs as part of Endpoint initialization.

#### Overrides

[`Behavior`](../../../export/classes/Behavior.md).[`early`](../../../export/classes/Behavior.md#early)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L71)

***

### id

> `static` **id**: `Uncapitalize`\<`string`\>

The ID of ClusterBehavior implementations is the uncapitalized cluster name.

#### Overrides

[`Behavior`](../../../export/classes/Behavior.md).[`id`](../../../export/classes/Behavior.md#id)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L42)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../-internal-/README.md#schema)

A behavior's schema controls access to data, commands and events.

Schema is inferred from the methods and properties of the behavior but you can specify explicitly for additional
control.

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`schema`](../../../export/classes/Behavior.md#schema)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L69)

## Accessors

### \[reference\]

> `get` **\[reference\]**(): [`Datasource`](../-internal-/interfaces/Datasource.md)\<[`StateType`](../-internal-/interfaces/StateType.md)\>

#### Returns

[`Datasource`](../-internal-/interfaces/Datasource.md)\<[`StateType`](../-internal-/interfaces/StateType.md)\>

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

### cluster

> `get` **cluster**(): [`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>

The cluster implemented by this behavior.

#### Returns

[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object` = `{}`

##### commands

> `readonly` **commands**: `object` = `{}`

##### events

> `readonly` **events**: `object` = `{}`

##### id

> `readonly` **id**: `0` = `0`

##### name

> `readonly` **name**: `"Unknown"` = `"Unknown"`

##### revision

> `readonly` **revision**: `0` = `0`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> `get` **context**(): [`ActionContext`](../-internal-/interfaces/ActionContext.md)

The context in which the behavior operates.

#### Returns

[`ActionContext`](../-internal-/interfaces/ActionContext.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> `get` **endpoint**(): [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../-internal-/interfaces/Empty.md)\>

The endpoint that owns behavior's agent.

#### Returns

[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### features

> `get` **features**(): `object`

Supported features as a flag object.

#### Returns

`object`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> `get` **session**(): [`SecureSession`](../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\>

The session in which the behavior has been invoked.

#### Returns

[`SecureSession`](../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../-internal-/classes/MatterDevice.md)\>

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

> `get` `static` **supervisor**(): [`RootSupervisor`](../-internal-/classes/RootSupervisor.md)

The data supervisor for the behavior.  The supervisor controls validation and access to behavior data.

#### Returns

[`RootSupervisor`](../-internal-/classes/RootSupervisor.md)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L161)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`[asyncDispose]`](../../../export/classes/Behavior.md#%5Basyncdispose%5D)

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

[`Behavior`](../../../export/classes/Behavior.md).[`asAdmin`](../../../export/classes/Behavior.md#asadmin)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### assertAttributeEnabled()

> **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../export/README.md#reactortr).

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
| `reactor` | [`Reactor`](../../../export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`callback`](../../../export/classes/Behavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### initialize()

> **initialize**(`_options`?): [`MaybePromise`](../../../../util/export/README.md#maybepromiset)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_options`? | `object` |

#### Returns

[`MaybePromise`](../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`initialize`](../../../export/classes/Behavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L192)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`reactTo`](../../../export/classes/Behavior.md#reactto)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### requireAttributeEnabled()

> **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`toString`](../../../export/classes/Behavior.md#tostring)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### alter()

> `static` **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), `AlterationsT`\>, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

Create a new behavior with modified cluster elements.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../README.md#clusterinterfacef)\<`object`\>\> |
| `AlterationsT` *extends* [`Alterations`](../../../../cluster/export/namespaces/ElementModifier/README.md#alterationsoriginalt)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), `AlterationsT`\>, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L121)

***

### enable()

> `static` **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), [`ElementFlagAlterations`](../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

Create a new behavior with additional cluster features marked "mandatory".

This informs matter.js that an application supports these elements.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../README.md#clusterinterfacef)\<`object`\>\> |
| `FlagsT` *extends* [`ElementFlags`](../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagsclustert)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), [`ElementFlagAlterations`](../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L133)

***

### for()

> `static` **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema`?): [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

Create a new behavior for a specific [ClusterType](../../../../cluster/export/README.md#clustertype).

If you invoke directly on [ClusterBehavior](ClusterBehavior.md) you will receive a new implementation that reports all commands
as unimplemented.

If you invoke on an existing subclass, you will receive a new implementation with the cluster in the subclass
replaced.  You should generally only do this with a [ClusterType](../../../../cluster/export/README.md#clustertype) with the same ID.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../README.md#clusterinterfacef)\<`object`\>\> |
| `ClusterT` *extends* [`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema`? | [`Schema`](../-internal-/README.md#schema) |

#### Returns

[`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L96)

***

### set()

> `static` **set**\<`This`\>(`this`, `defaults`): `This`

Create a new behavior with different default state values.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Inherited from

[`Behavior`](../../../export/classes/Behavior.md).[`set`](../../../export/classes/Behavior.md#set)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L251)

***

### supports()

> `static` **supports**(`other`): `boolean`

Does this behavior support functionality of a specific implementation?

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Overrides

[`Behavior`](../../../export/classes/Behavior.md).[`supports`](../../../export/classes/Behavior.md#supports)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L150)

***

### with()

> `static` **with**\<`This`, `FeaturesT`\>(`this`, ...`features`): [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

Create a new behavior with different cluster features.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../README.md#clusterinterfacef)\<`object`\>\> |
| `FeaturesT` *extends* [`FeatureSelection`](../../../../cluster/export/namespaces/ClusterComposer/README.md#featureselectiont)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| ...`features` | `FeaturesT` |

#### Returns

[`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L107)

***

### withInterface()

> `static` **withInterface**\<`I`\>(): [`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../namespaces/ClusterBehavior/README.md), `I`\>

Create a ClusterBehavior like this one with different interface methods.

The Interface "property" is type-only.  We define a method however to keep the API consistent.  At runtime the
method is a no-op.

#### Type parameters

| Type parameter |
| :------ |
| `I` *extends* [`ClusterInterface`](../README.md#clusterinterfacef) |

#### Returns

[`Type`](../namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../namespaces/ClusterBehavior/README.md), `I`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L146)
