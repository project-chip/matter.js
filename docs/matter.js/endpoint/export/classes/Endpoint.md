[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [endpoint/export](../README.md) / Endpoint

# Class: Endpoint\<T\>

Endpoints consist of a hierarchy of parts.  This class manages the current state of a single endpoint.

You can interact with endpoints using an [Agent](Agent.md) created with Endpoint.agentFor.  Agents are stateless and
designed for quick instantiation so you can create them as needed then discard.

Most often direct access to [Agent](Agent.md) is transparent as Matter.js acquires an agent as necessary for
[Behavior](../../../behavior/export/classes/Behavior.md) interactions.

## Extended by

- [`Node`](../../../node/export/classes/Node.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) | [`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |

## Constructors

### new Endpoint()

> **new Endpoint**\<`T`\>(`config`): [`Endpoint`](Endpoint.md)\<`T`\>

Create new endpoint.

The endpoint will not initialize fully until added to a [Node](../../../node/export/classes/Node.md).  You can use [Endpoint.add](Endpoint.md#add) to construct
and initialize a [Endpoint](Endpoint.md) in one step.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | `T` \| [`Configuration`](../namespaces/Endpoint/README.md#configurationto)\<`T`, [`EndpointOptions`](../namespaces/Endpoint/interfaces/EndpointOptions.md)\> |  |

#### Returns

[`Endpoint`](Endpoint.md)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:270](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L270)

### new Endpoint()

> **new Endpoint**\<`T`\>(`type`, `options`?): [`Endpoint`](Endpoint.md)\<`T`\>

Create new endpoint.

The endpoint will not initialize fully until added to a [Node](../../../node/export/classes/Node.md).  You can use [Endpoint.add](Endpoint.md#add) to construct
and initialize a [Endpoint](Endpoint.md) in one step.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |
| `options`? | [`Options`](../namespaces/Endpoint/README.md#optionsto)\<`T`, [`EndpointOptions`](../namespaces/Endpoint/interfaces/EndpointOptions.md)\> |

#### Returns

[`Endpoint`](Endpoint.md)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:280](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L280)

## Properties

### #activity?

> `private` `optional` **#activity**: [`NodeActivity`](../../../behavior/cluster/export/-internal-/classes/NodeActivity.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L56)

***

### #agentType?

> `private` `optional` **#agentType**: [`Type`](../namespaces/Agent/interfaces/Type.md)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L49)

***

### #behaviors?

> `private` `optional` **#behaviors**: [`Behaviors`](../../../node/export/-internal-/classes/Behaviors.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L50)

***

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`Endpoint`](Endpoint.md)\<`T`\>\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L53)

***

### #events

> `private` **#events**: [`EventsOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#eventsofsb)\<`T`\[`"behaviors"`\]\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L55)

***

### #id?

> `private` `optional` **#id**: `string`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L46)

***

### #lifecycle

> `private` **#lifecycle**: [`EndpointLifecycle`](../../../node/export/-internal-/classes/EndpointLifecycle.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L51)

***

### #number?

> `private` `optional` **#number**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L47)

***

### #owner?

> `private` `optional` **#owner**: [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L48)

***

### #parts?

> `private` `optional` **#parts**: [`Parts`](../../../node/export/-internal-/classes/Parts.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L52)

***

### #stateView

> `private` **#stateView**: [`Immutable`](../../../util/export/README.md#immutablet)\<[`StateOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<`T`\[`"behaviors"`\]\>\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L54)

***

### #type

> `private` **#type**: [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L45)

## Accessors

### #diagnosticProps

> `get` `private` **#diagnosticProps**(): `object`

#### Returns

`object`

##### endpoint#

> **endpoint#**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

##### type

> **type**: `string`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:720](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L720)

***

### \[value\]

> `get` **\[value\]**(): `unknown`

Hierarchical diagnostics of endpoint and children.

#### Returns

`unknown`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:699](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L699)

***

### agentType

> `get` **agentType**(): [`Type`](../namespaces/Agent/interfaces/Type.md)\<`T`\>

Create an [Agent.Type](../namespaces/Agent/interfaces/Type.md) for the endpoint.

#### Returns

[`Type`](../namespaces/Agent/interfaces/Type.md)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:501](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L501)

***

### behaviors

> `get` **behaviors**(): [`Behaviors`](../../../node/export/-internal-/classes/Behaviors.md)

Access the pool of behaviors supported by this endpoint.

#### Returns

[`Behaviors`](../../../node/export/-internal-/classes/Behaviors.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L137)

***

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`Endpoint`](Endpoint.md)\<`T`\>\>

#### Returns

[`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`Endpoint`](Endpoint.md)\<`T`\>\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:258](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L258)

***

### diagnosticDict

> `get` **diagnosticDict**(): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

Diagnostic information regarding endpoint state.

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:713](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L713)

***

### env

> `get` **env**(): [`Environment`](../../../environment/export/classes/Environment.md)

The endpoint's environment.  Endpoint implementations use the environment to access platform components such as
storage and network components.

#### Returns

[`Environment`](../../../environment/export/classes/Environment.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L127)

***

### events

> `get` **events**(): [`EventsOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#eventsofsb)\<`T`\[`"behaviors"`\]\>

Events for all behaviors keyed by behavior ID.

#### Returns

[`EventsOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#eventsofsb)\<`T`\[`"behaviors"`\]\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L244)

***

### hasParts

> `get` **hasParts**(): `boolean`

Is this a parent Endpoint?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:483](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L483)

***

### id

> `get` **id**(): `string`

A string that uniquely identifies an endpoint.

This ID must be unique amongst all Parts with the same owner.

> `set` **id**(`id`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L63)

***

### lifecycle

> `get` **lifecycle**(): [`EndpointLifecycle`](../../../node/export/-internal-/classes/EndpointLifecycle.md)

Endpoint information that varies as the endpoint initializes.

#### Returns

[`EndpointLifecycle`](../../../node/export/-internal-/classes/EndpointLifecycle.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:490](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L490)

***

### maybeId

> `get` **maybeId**(): `undefined` \| `string`

The endpoint ID or undefined if not yet assigned.

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L76)

***

### maybeNumber

> `get` **maybeNumber**(): `undefined` \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

The endpoint number or undefined if not yet assigned.

#### Returns

`undefined` \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L97)

***

### number

> `get` **number**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

The Matter [EndpointNumber](../../../datatype/export/README.md#endpointnumber-1) of the endpoint.  This uniquely identifies the [Endpoint](Endpoint.md) in the scope of the
Matter node.

> `set` **number**(`number`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L84)

***

### owner

> `get` **owner**(): `undefined` \| [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

The owner of the endpoint.

Every endpoint but the root endpoint (the "node") is owned by another endpoint.

> `set` **owner**(`owner`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | `undefined` \| [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L106)

***

### parts

> `get` **parts**(): [`Parts`](../../../node/export/-internal-/classes/Parts.md)

Access child parts.

#### Returns

[`Parts`](../../../node/export/-internal-/classes/Parts.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:473](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L473)

***

### path

> `get` **path**(): [`DataModelPath`](../../../behavior/cluster/export/-internal-/interfaces/DataModelPath.md)

Path identifying the endpoint in the Matter data model.

#### Returns

[`DataModelPath`](../../../behavior/cluster/export/-internal-/interfaces/DataModelPath.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:611](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L611)

***

### state

> `get` **state**(): [`Immutable`](../../../util/export/README.md#immutablet)\<[`StateOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<`T`\[`"behaviors"`\]\>\>

Current state values for all behaviors, keyed by behavior ID.  This view is read-only.

#### Returns

[`Immutable`](../../../util/export/README.md#immutablet)\<[`StateOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<`T`\[`"behaviors"`\]\>\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L150)

***

### type

> `get` **type**(): [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md)

The type of endpoint this endpoint implements.

#### Returns

[`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:466](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L466)

## Methods

### #initialize()

> `private` **#initialize**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:660](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L660)

***

### #logReady()

> `private` **#logReady**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:692](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L692)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:600](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L600)

***

### act()

> **act**\<`R`\>(`actor`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`R`\>

Execute a function against an [Agent](Agent.md) for the endpoint.

Agents provide the highest-leve API for interacting with endpoints.  The agent is a composite object with
properties for each supported behavior.

State changes made by actor are atomic and made permanent only when the actor exits unless you commit the
transaction manually.

actor runs in an "offline" context where ACLs are ignored and all state is read/write.

The [Agent](Agent.md) is destroyed after actor exits so you should not maintain references to the agent, its
behaviors or associated state.

actor may be async.  If so, the acting context will remain open until the returned Promise
resolves.

#### Type parameters

| Type parameter |
| :------ |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `actor` | (`agent`) => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`R`\> |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`R`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L525)

***

### add()

#### add(endpoint)

> **add**\<`T`\>(`endpoint`): `Promise`\<[`Endpoint`](Endpoint.md)\<`T`\>\>

Add a child endpoint.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `T` \| [`Endpoint`](Endpoint.md)\<`T`\> \| [`Configuration`](../namespaces/Endpoint/README.md#configurationto)\<`T`, [`EndpointOptions`](../namespaces/Endpoint/interfaces/EndpointOptions.md)\> | the [Endpoint](Endpoint.md) or [Endpoint.Configuration](../namespaces/Endpoint/README.md#configurationto) |

##### Returns

`Promise`\<[`Endpoint`](Endpoint.md)\<`T`\>\>

##### Source

[packages/matter.js/src/endpoint/Endpoint.ts:431](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L431)

#### add(type, options)

> **add**\<`T`\>(`type`, `options`?): `Promise`\<[`Endpoint`](Endpoint.md)\<`T`\>\>

Add a child endpoint.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | the [EndpointType](../../../behavior/cluster/export/-internal-/README.md#endpointtype) of the child endpoint |
| `options`? | [`Options`](../namespaces/Endpoint/README.md#optionsto)\<`T`, [`EndpointOptions`](../namespaces/Endpoint/interfaces/EndpointOptions.md)\> | settings for the new endpoint |

##### Returns

`Promise`\<[`Endpoint`](Endpoint.md)\<`T`\>\>

##### Source

[packages/matter.js/src/endpoint/Endpoint.ts:439](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L439)

***

### behaviorCrash()

> `protected` **behaviorCrash**(): `void`

Invoked if one or more behaviors crashed during initialization.

The default implementation crashes the endpoint.

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:643](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L643)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:586](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L586)

***

### createLifecycle()

> `protected` **createLifecycle**(): [`EndpointLifecycle`](../../../node/export/-internal-/classes/EndpointLifecycle.md)

#### Returns

[`EndpointLifecycle`](../../../node/export/-internal-/classes/EndpointLifecycle.md)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:494](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L494)

***

### eventsOf()

> **eventsOf**\<`T`\>(`type`): `InstanceType`\<`T`\[`"Events"`\]\>

Events for a specific behavior.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`InstanceType`\<`T`\[`"Events"`\]\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L251)

***

### initialize()

> `protected` **initialize**(`agent`): [`MaybePromise`](../../../util/export/README.md#maybepromiset)

Asynchronous initialization.

Derivatives may override to perform async construction prior to full initialization.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Instance`](../namespaces/Agent/README.md#instancet)\<`T`\> |

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:633](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L633)

***

### ownerOfType()

> **ownerOfType**\<`T`\>(`type`): `undefined` \| [`Endpoint`](Endpoint.md)\<`T`\>

Search for the owner of a specific type.

Returns undefined if this owner is not found on the way up to the root endpoint.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L115)

***

### reset()

> **reset**(): `Promise`\<`void`\>

Perform "soft" reset of the endpoint, reverting all in-memory structures to uninitialized.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:540](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L540)

***

### set()

> **set**(`values`): `Promise`\<`void`\>

Update state values.  This is a patch operation; it only modifies properties in values.

values is an object with a [Behavior.id](../../../behavior/export/classes/Behavior.md#id) as the key and state values as sub-objects.

Input values must adhere to the [Behavior.schema](../../../behavior/export/classes/Behavior.md#schema) of the target [Behavior](../../../behavior/export/classes/Behavior.md).  If not, set will throw
an error.

This is a transactional operation.  An error results in no change.  The endpoint will wait for exclusive access
before applying changes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `values` | [`StatePatchOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#statepatchofsb)\<`T`\[`"behaviors"`\]\> | the values to change |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L177)

***

### setStateOf()

> **setStateOf**\<`T`\>(`type`, `values`): `Promise`\<`void`\>

Update state values for a single behavior.

The patch semantics used here are identical to [set](Endpoint.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | the [Behavior](../../../behavior/export/classes/Behavior.md) to patch |
| `values` | [`PatchType`](../../../cluster/export/namespaces/ClusterType/README.md#patchtypev)\<`InstanceType`\<`T`\[`"State"`\]\>\> | the values to change |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L220)

***

### stateOf()

> **stateOf**\<`T`\>(`type`): [`Immutable`](../../../util/export/README.md#immutablet)\<`InstanceType`\<`T`\[`"State"`\]\>\>

Current state for a specific behavior.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Type`](../../../behavior/export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`Immutable`](../../../util/export/README.md#immutablet)\<`InstanceType`\<`T`\[`"State"`\]\>\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L157)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:604](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L604)

***

### visit()

> **visit**\<`T`\>(`visitor`): `T`

Apply a depth-first visitor function to myself and all descendents.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `void` \| `PromiseLike`\<`void`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `visitor` | (`endpoint`) => `T` |

#### Returns

`T`

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:565](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L565)
