[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/export](../modules/endpoint_export.md) / Endpoint

# Class: Endpoint\<T\>

[endpoint/export](../modules/endpoint_export.md).Endpoint

Endpoints consist of a hierarchy of parts.  This class manages the current state of a single endpoint.

You can interact with endpoints using an [Agent](endpoint_export.Agent-1.md) created with Endpoint.agentFor.  Agents are stateless and
designed for quick instantiation so you can create them as needed then discard.

Most often direct access to [Agent](endpoint_export.Agent-1.md) is transparent as Matter.js acquires an agent as necessary for
[Behavior](behavior_export.Behavior-1.md) interactions.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |

## Hierarchy

- **`Endpoint`**

  ↳ [`Node`](node_export.Node-1.md)

## Table of contents

### Constructors

- [constructor](endpoint_export.Endpoint-1.md#constructor)

### Properties

- [#activity](endpoint_export.Endpoint-1.md##activity)
- [#agentType](endpoint_export.Endpoint-1.md##agenttype)
- [#behaviors](endpoint_export.Endpoint-1.md##behaviors)
- [#construction](endpoint_export.Endpoint-1.md##construction)
- [#events](endpoint_export.Endpoint-1.md##events)
- [#id](endpoint_export.Endpoint-1.md##id)
- [#lifecycle](endpoint_export.Endpoint-1.md##lifecycle)
- [#number](endpoint_export.Endpoint-1.md##number)
- [#owner](endpoint_export.Endpoint-1.md##owner)
- [#parts](endpoint_export.Endpoint-1.md##parts)
- [#stateView](endpoint_export.Endpoint-1.md##stateview)
- [#type](endpoint_export.Endpoint-1.md##type)

### Accessors

- [#diagnosticProps](endpoint_export.Endpoint-1.md##diagnosticprops)
- [[value]](endpoint_export.Endpoint-1.md#[value])
- [agentType](endpoint_export.Endpoint-1.md#agenttype)
- [behaviors](endpoint_export.Endpoint-1.md#behaviors)
- [construction](endpoint_export.Endpoint-1.md#construction)
- [diagnosticDict](endpoint_export.Endpoint-1.md#diagnosticdict)
- [env](endpoint_export.Endpoint-1.md#env)
- [events](endpoint_export.Endpoint-1.md#events)
- [hasParts](endpoint_export.Endpoint-1.md#hasparts)
- [id](endpoint_export.Endpoint-1.md#id)
- [lifecycle](endpoint_export.Endpoint-1.md#lifecycle)
- [maybeId](endpoint_export.Endpoint-1.md#maybeid)
- [maybeNumber](endpoint_export.Endpoint-1.md#maybenumber)
- [number](endpoint_export.Endpoint-1.md#number)
- [owner](endpoint_export.Endpoint-1.md#owner)
- [parts](endpoint_export.Endpoint-1.md#parts)
- [path](endpoint_export.Endpoint-1.md#path)
- [state](endpoint_export.Endpoint-1.md#state)
- [type](endpoint_export.Endpoint-1.md#type)

### Methods

- [#initialize](endpoint_export.Endpoint-1.md##initialize)
- [#logReady](endpoint_export.Endpoint-1.md##logready)
- [[asyncDispose]](endpoint_export.Endpoint-1.md#[asyncdispose])
- [act](endpoint_export.Endpoint-1.md#act)
- [add](endpoint_export.Endpoint-1.md#add)
- [behaviorCrash](endpoint_export.Endpoint-1.md#behaviorcrash)
- [close](endpoint_export.Endpoint-1.md#close)
- [createLifecycle](endpoint_export.Endpoint-1.md#createlifecycle)
- [eventsOf](endpoint_export.Endpoint-1.md#eventsof)
- [initialize](endpoint_export.Endpoint-1.md#initialize)
- [ownerOfType](endpoint_export.Endpoint-1.md#owneroftype)
- [reset](endpoint_export.Endpoint-1.md#reset)
- [set](endpoint_export.Endpoint-1.md#set)
- [setStateOf](endpoint_export.Endpoint-1.md#setstateof)
- [stateOf](endpoint_export.Endpoint-1.md#stateof)
- [toString](endpoint_export.Endpoint-1.md#tostring)
- [visit](endpoint_export.Endpoint-1.md#visit)

## Constructors

### constructor

• **new Endpoint**\<`T`\>(`config`): [`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>

Create new endpoint.

The endpoint will not initialize fully until added to a [Node](node_export.Node-1.md).  You can use [Endpoint.add](endpoint_export.Endpoint-1.md#add) to construct
and initialize a [Endpoint](endpoint_export.Endpoint-1.md) in one step.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `T` \| [`Configuration`](../modules/endpoint_export.Endpoint.md#configuration)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\> |

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:270](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L270)

• **new Endpoint**\<`T`\>(`type`, `options?`): [`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>

Create new endpoint.

The endpoint will not initialize fully until added to a [Node](node_export.Node-1.md).  You can use [Endpoint.add](endpoint_export.Endpoint-1.md#add) to construct
and initialize a [Endpoint](endpoint_export.Endpoint-1.md) in one step.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `options?` | [`Options`](../modules/endpoint_export.Endpoint.md#options)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\> |

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:280](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L280)

## Properties

### #activity

• `Private` `Optional` **#activity**: [`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:56](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L56)

___

### #agentType

• `Private` `Optional` **#agentType**: [`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:49](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L49)

___

### #behaviors

• `Private` `Optional` **#behaviors**: [`Behaviors`](node_export._internal_.Behaviors.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:50](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L50)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L53)

___

### #events

• `Private` **#events**: [`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L55)

___

### #id

• `Private` `Optional` **#id**: `string`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:46](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L46)

___

### #lifecycle

• `Private` **#lifecycle**: [`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:51](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L51)

___

### #number

• `Private` `Optional` **#number**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:47](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L47)

___

### #owner

• `Private` `Optional` **#owner**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:48](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L48)

___

### #parts

• `Private` `Optional` **#parts**: [`Parts`](node_export._internal_.Parts.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:52](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L52)

___

### #stateView

• `Private` **#stateView**: [`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L54)

___

### #type

• `Private` **#type**: [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:45](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L45)

## Accessors

### #diagnosticProps

• `get` **#diagnosticProps**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `endpoint#` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `type` | `string` |

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:720](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L720)

___

### [value]

• `get` **[value]**(): `unknown`

Hierarchical diagnostics of endpoint and children.

#### Returns

`unknown`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:699](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L699)

___

### agentType

• `get` **agentType**(): [`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

Create an [Agent.Type](../interfaces/endpoint_export.Agent.Type.md) for the endpoint.

#### Returns

[`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:501](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L501)

___

### behaviors

• `get` **behaviors**(): [`Behaviors`](node_export._internal_.Behaviors.md)

Access the pool of behaviors supported by this endpoint.

#### Returns

[`Behaviors`](node_export._internal_.Behaviors.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:137](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L137)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:258](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L258)

___

### diagnosticDict

• `get` **diagnosticDict**(): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Diagnostic information regarding endpoint state.

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:713](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L713)

___

### env

• `get` **env**(): [`Environment`](environment_export.Environment.md)

The endpoint's environment.  Endpoint implementations use the environment to access platform components such as
storage and network components.

#### Returns

[`Environment`](environment_export.Environment.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:127](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L127)

___

### events

• `get` **events**(): [`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

Events for all behaviors keyed by behavior ID.

#### Returns

[`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:244](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L244)

___

### hasParts

• `get` **hasParts**(): `boolean`

Is this a parent Endpoint?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:483](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L483)

___

### id

• `get` **id**(): `string`

A string that uniquely identifies an endpoint.

This ID must be unique amongst all Parts with the same owner.

#### Returns

`string`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:63](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L63)

• `set` **id**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:339](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L339)

___

### lifecycle

• `get` **lifecycle**(): [`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

Endpoint information that varies as the endpoint initializes.

#### Returns

[`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:490](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L490)

___

### maybeId

• `get` **maybeId**(): `undefined` \| `string`

The endpoint ID or undefined if not yet assigned.

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:76](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L76)

___

### maybeNumber

• `get` **maybeNumber**(): `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

The endpoint number or undefined if not yet assigned.

#### Returns

`undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:97](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L97)

___

### number

• `get` **number**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

The Matter [EndpointNumber](../modules/datatype_export.md#endpointnumber-1) of the endpoint.  This uniquely identifies the [Endpoint](endpoint_export.Endpoint-1.md) in the scope of the
Matter node.

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:84](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L84)

• `set` **number**(`number`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:364](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L364)

___

### owner

• `get` **owner**(): `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

The owner of the endpoint.

Every endpoint but the root endpoint (the "node") is owned by another endpoint.

#### Returns

`undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:106](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L106)

• `set` **owner**(`owner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:405](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L405)

___

### parts

• `get` **parts**(): [`Parts`](node_export._internal_.Parts.md)

Access child parts.

#### Returns

[`Parts`](node_export._internal_.Parts.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:473](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L473)

___

### path

• `get` **path**(): [`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

Path identifying the endpoint in the Matter data model.

#### Returns

[`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:611](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L611)

___

### state

• `get` **state**(): [`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

Current state values for all behaviors, keyed by behavior ID.  This view is read-only.

#### Returns

[`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:150](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L150)

___

### type

• `get` **type**(): [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

The type of endpoint this endpoint implements.

#### Returns

[`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:466](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L466)

## Methods

### #initialize

▸ **#initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:660](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L660)

___

### #logReady

▸ **#logReady**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:692](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L692)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:600](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L600)

___

### act

▸ **act**\<`R`\>(`actor`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>

Execute a function against an [Agent](endpoint_export.Agent-1.md) for the endpoint.

Agents provide the highest-leve API for interacting with endpoints.  The agent is a composite object with
properties for each supported behavior.

State changes made by actor are atomic and made permanent only when the actor exits unless you commit the
transaction manually.

actor runs in an "offline" context where ACLs are ignored and all state is read/write.

The [Agent](endpoint_export.Agent-1.md) is destroyed after actor exits so you should not maintain references to the agent, its
behaviors or associated state.

actor may be async.  If so, the acting context will remain open until the returned Promise
resolves.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actor` | (`agent`: [`Instance`](../modules/endpoint_export.Agent.md#instance)\<`T`\>) => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`R`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:525](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L525)

___

### add

▸ **add**\<`T`\>(`endpoint`): `Promise`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

Add a child endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `T` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\> \| [`Configuration`](../modules/endpoint_export.Endpoint.md#configuration)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\> | the [Endpoint](endpoint_export.Endpoint-1.md) or [Endpoint.Configuration](../modules/endpoint_export.Endpoint.md#configuration) |

#### Returns

`Promise`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:431](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L431)

▸ **add**\<`T`\>(`type`, `options?`): `Promise`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

Add a child endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | the [EndpointType](../modules/behavior_cluster_export._internal_.md#endpointtype) of the child endpoint |
| `options?` | [`Options`](../modules/endpoint_export.Endpoint.md#options)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\> | settings for the new endpoint |

#### Returns

`Promise`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:439](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L439)

___

### behaviorCrash

▸ **behaviorCrash**(): `void`

Invoked if one or more behaviors crashed during initialization.

The default implementation crashes the endpoint.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:643](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L643)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:586](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L586)

___

### createLifecycle

▸ **createLifecycle**(): [`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Returns

[`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:494](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L494)

___

### eventsOf

▸ **eventsOf**\<`T`\>(`type`): `InstanceType`\<`T`[``"Events"``]\>

Events for a specific behavior.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`InstanceType`\<`T`[``"Events"``]\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:251](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L251)

___

### initialize

▸ **initialize**(`agent`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Asynchronous initialization.

Derivatives may override to perform async construction prior to full initialization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Instance`](../modules/endpoint_export.Agent.md#instance)\<`T`\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:633](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L633)

___

### ownerOfType

▸ **ownerOfType**\<`T`\>(`type`): `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>

Search for the owner of a specific type.

Returns undefined if this owner is not found on the way up to the root endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:115](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L115)

___

### reset

▸ **reset**(): `Promise`\<`void`\>

Perform "soft" reset of the endpoint, reverting all in-memory structures to uninitialized.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:540](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L540)

___

### set

▸ **set**(`values`): `Promise`\<`void`\>

Update state values.  This is a patch operation; it only modifies properties in values.

values is an object with a [Behavior.id](behavior_export.Behavior-1.md#id) as the key and state values as sub-objects.

Input values must adhere to the [Behavior.schema](behavior_export.Behavior-1.md#schema) of the target [Behavior](behavior_export.Behavior-1.md).  If not, set will throw
an error.

This is a transactional operation.  An error results in no change.  The endpoint will wait for exclusive access
before applying changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`StatePatchOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#statepatchof)\<`T`[``"behaviors"``]\> | the values to change |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:177](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L177)

___

### setStateOf

▸ **setStateOf**\<`T`\>(`type`, `values`): `Promise`\<`void`\>

Update state values for a single behavior.

The patch semantics used here are identical to [set](endpoint_export.Endpoint-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | the [Behavior](behavior_export.Behavior-1.md) to patch |
| `values` | [`PatchType`](../modules/cluster_export.ClusterType.md#patchtype)\<`InstanceType`\<`T`[``"State"``]\>\> | the values to change |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:220](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L220)

___

### stateOf

▸ **stateOf**\<`T`\>(`type`): [`Immutable`](../modules/util_export.md#immutable)\<`InstanceType`\<`T`[``"State"``]\>\>

Current state for a specific behavior.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`Immutable`](../modules/util_export.md#immutable)\<`InstanceType`\<`T`[``"State"``]\>\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:157](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L157)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:604](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L604)

___

### visit

▸ **visit**\<`T`\>(`visitor`): `T`

Apply a depth-first visitor function to myself and all descendents.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `void` \| `PromiseLike`\<`void`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `visitor` | (`endpoint`: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>) => `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:565](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L565)
