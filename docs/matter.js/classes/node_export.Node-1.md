[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / Node

# Class: Node\<T\>

[node/export](../modules/node_export.md).Node

A Matter Node.

In Matter, a "node" is an individually addressable top-level network resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) = [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) |

## Hierarchy

- [`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>

  ↳ **`Node`**

  ↳↳ [`ServerNode`](node_export.ServerNode-1.md)

## Table of contents

### Constructors

- [constructor](node_export.Node-1.md#constructor)

### Properties

- [#activity](node_export.Node-1.md##activity)
- [#agentType](node_export.Node-1.md##agenttype)
- [#behaviors](node_export.Node-1.md##behaviors)
- [#construction](node_export.Node-1.md##construction)
- [#environment](node_export.Node-1.md##environment)
- [#eventsView](node_export.Node-1.md##eventsview)
- [#id](node_export.Node-1.md##id)
- [#lifecycle](node_export.Node-1.md##lifecycle)
- [#number](node_export.Node-1.md##number)
- [#owner](node_export.Node-1.md##owner)
- [#parts](node_export.Node-1.md##parts)
- [#stateView](node_export.Node-1.md##stateview)
- [#type](node_export.Node-1.md##type)

### Accessors

- [#diagnosticProps](node_export.Node-1.md##diagnosticprops)
- [[label]](node_export.Node-1.md#[label])
- [[value]](node_export.Node-1.md#[value])
- [agentType](node_export.Node-1.md#agenttype)
- [behaviors](node_export.Node-1.md#behaviors)
- [construction](node_export.Node-1.md#construction)
- [diagnosticDict](node_export.Node-1.md#diagnosticdict)
- [env](node_export.Node-1.md#env)
- [events](node_export.Node-1.md#events)
- [hasParts](node_export.Node-1.md#hasparts)
- [id](node_export.Node-1.md#id)
- [lifecycle](node_export.Node-1.md#lifecycle)
- [maybeId](node_export.Node-1.md#maybeid)
- [maybeNumber](node_export.Node-1.md#maybenumber)
- [number](node_export.Node-1.md#number)
- [owner](node_export.Node-1.md#owner)
- [parts](node_export.Node-1.md#parts)
- [path](node_export.Node-1.md#path)
- [state](node_export.Node-1.md#state)
- [type](node_export.Node-1.md#type)

### Methods

- [#initialize](node_export.Node-1.md##initialize)
- [#logReady](node_export.Node-1.md##logready)
- [[asyncDispose]](node_export.Node-1.md#[asyncdispose])
- [act](node_export.Node-1.md#act)
- [add](node_export.Node-1.md#add)
- [behaviorCrash](node_export.Node-1.md#behaviorcrash)
- [bringOnline](node_export.Node-1.md#bringonline)
- [close](node_export.Node-1.md#close)
- [createLifecycle](node_export.Node-1.md#createlifecycle)
- [endpointCrashed](node_export.Node-1.md#endpointcrashed)
- [eventsOf](node_export.Node-1.md#eventsof)
- [initialize](node_export.Node-1.md#initialize)
- [reset](node_export.Node-1.md#reset)
- [run](node_export.Node-1.md#run)
- [set](node_export.Node-1.md#set)
- [setStateOf](node_export.Node-1.md#setstateof)
- [stateOf](node_export.Node-1.md#stateof)
- [statusUpdate](node_export.Node-1.md#statusupdate)
- [toString](node_export.Node-1.md#tostring)
- [visit](node_export.Node-1.md#visit)

## Constructors

### constructor

• **new Node**\<`T`\>(`config`): [`Node`](node_export.Node-1.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) = [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Configuration`](../modules/node_export.Node.md#configuration)\<`T`\> |

#### Returns

[`Node`](node_export.Node-1.md)\<`T`\>

#### Overrides

[Endpoint](endpoint_export.Endpoint-1.md).[constructor](endpoint_export.Endpoint-1.md#constructor)

#### Defined in

[packages/matter.js/src/node/Node.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L29)

## Properties

### #activity

• `Private` `Optional` **#activity**: [`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#activity](endpoint_export.Endpoint-1.md##activity)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L56)

___

### #agentType

• `Private` `Optional` **#agentType**: [`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#agentType](endpoint_export.Endpoint-1.md##agenttype)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L49)

___

### #behaviors

• `Private` `Optional` **#behaviors**: [`Behaviors`](node_export._internal_.Behaviors.md)

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#behaviors](endpoint_export.Endpoint-1.md##behaviors)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L50)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#construction](endpoint_export.Endpoint-1.md##construction)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L53)

___

### #environment

• `Private` **#environment**: [`Environment`](environment_export.Environment.md)

#### Defined in

[packages/matter.js/src/node/Node.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L27)

___

### #eventsView

• `Private` **#eventsView**: [`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#eventsView](endpoint_export.Endpoint-1.md##eventsview)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L55)

___

### #id

• `Private` `Optional` **#id**: `string`

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#id](endpoint_export.Endpoint-1.md##id)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L46)

___

### #lifecycle

• `Private` **#lifecycle**: [`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#lifecycle](endpoint_export.Endpoint-1.md##lifecycle)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L51)

___

### #number

• `Private` `Optional` **#number**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#number](endpoint_export.Endpoint-1.md##number)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L47)

___

### #owner

• `Private` `Optional` **#owner**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#owner](endpoint_export.Endpoint-1.md##owner)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L48)

___

### #parts

• `Private` `Optional` **#parts**: [`Parts`](node_export._internal_.Parts.md)

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#parts](endpoint_export.Endpoint-1.md##parts)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L52)

___

### #stateView

• `Private` **#stateView**: [`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#stateView](endpoint_export.Endpoint-1.md##stateview)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L54)

___

### #type

• `Private` **#type**: [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#type](endpoint_export.Endpoint-1.md##type)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L45)

## Accessors

### #diagnosticProps

• `get` **#diagnosticProps**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `endpoint#` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `type` | `string` |

#### Inherited from

Endpoint.#diagnosticProps

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:702](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L702)

___

### [label]

• `get` **[label]**(): (`string` \| [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md))[]

#### Returns

(`string` \| [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md))[]

#### Defined in

[packages/matter.js/src/node/Node.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L106)

___

### [value]

• `get` **[value]**(): `unknown`

Hierarchical diagnostics of endpoint and children.

#### Returns

`unknown`

#### Overrides

Endpoint.[value]

#### Defined in

[packages/matter.js/src/node/Node.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L110)

___

### agentType

• `get` **agentType**(): [`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

Create an [Agent.Type](../interfaces/endpoint_export.Agent.Type.md) for the endpoint.

#### Returns

[`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

#### Inherited from

Endpoint.agentType

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:488](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L488)

___

### behaviors

• `get` **behaviors**(): [`Behaviors`](node_export._internal_.Behaviors.md)

Access the pool of behaviors supported by this endpoint.

#### Returns

[`Behaviors`](node_export._internal_.Behaviors.md)

#### Inherited from

Endpoint.behaviors

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L124)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Inherited from

Endpoint.construction

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L245)

___

### diagnosticDict

• `get` **diagnosticDict**(): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Diagnostic information regarding endpoint state.

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Inherited from

Endpoint.diagnosticDict

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:695](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L695)

___

### env

• `get` **env**(): [`Environment`](environment_export.Environment.md)

The endpoint's environment.  Endpoint implementations use the environment to access platform components such as
storage and network components.

#### Returns

[`Environment`](environment_export.Environment.md)

#### Overrides

Endpoint.env

#### Defined in

[packages/matter.js/src/node/Node.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L70)

___

### events

• `get` **events**(): [`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

Events for all behaviors keyed by behavior ID.

#### Returns

[`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

#### Inherited from

Endpoint.events

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L231)

___

### hasParts

• `get` **hasParts**(): `boolean`

Is this a parent Endpoint?

#### Returns

`boolean`

#### Inherited from

Endpoint.hasParts

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:470](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L470)

___

### id

• `get` **id**(): `string`

A string that uniquely identifies an endpoint.

This ID must be unique amongst all Parts with the same owner.

#### Returns

`string`

#### Inherited from

Endpoint.id

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L63)

• `set` **id**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

Endpoint.id

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L326)

___

### lifecycle

• `get` **lifecycle**(): [`NodeLifecycle`](node_export.NodeLifecycle.md)

Endpoint information that varies as the endpoint initializes.

#### Returns

[`NodeLifecycle`](node_export.NodeLifecycle.md)

#### Overrides

Endpoint.lifecycle

#### Defined in

[packages/matter.js/src/node/Node.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L123)

___

### maybeId

• `get` **maybeId**(): `undefined` \| `string`

The endpoint ID or undefined if not yet assigned.

#### Returns

`undefined` \| `string`

#### Inherited from

Endpoint.maybeId

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L76)

___

### maybeNumber

• `get` **maybeNumber**(): `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

The endpoint number or undefined if not yet assigned.

#### Returns

`undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

Endpoint.maybeNumber

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L97)

___

### number

• `get` **number**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

The Matter [EndpointNumber](../modules/datatype_export.md#endpointnumber-1) of the endpoint.  This uniquely identifies the [Endpoint](endpoint_export.Endpoint-1.md) in the scope of the
Matter node.

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

Endpoint.number

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L84)

• `set` **number**(`number`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`void`

#### Inherited from

Endpoint.number

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L351)

___

### owner

• `get` **owner**(): `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

The owner of the endpoint.

Every endpoint but the root endpoint (the "node") is owned by another endpoint.

#### Returns

`undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

Endpoint.owner

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L106)

• `set` **owner**(`owner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`void`

#### Inherited from

Endpoint.owner

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:392](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L392)

___

### parts

• `get` **parts**(): [`Parts`](node_export._internal_.Parts.md)

Access child parts.

#### Returns

[`Parts`](node_export._internal_.Parts.md)

#### Inherited from

Endpoint.parts

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:460](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L460)

___

### path

• `get` **path**(): [`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

Path identifying the endpoint in the Matter data model.

#### Returns

[`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

#### Inherited from

Endpoint.path

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:593](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L593)

___

### state

• `get` **state**(): [`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

Current state values for all behaviors, keyed by behavior ID.  This view is read-only.

#### Returns

[`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

#### Inherited from

Endpoint.state

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L137)

___

### type

• `get` **type**(): [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

The type of endpoint this endpoint implements.

#### Returns

[`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

#### Inherited from

Endpoint.type

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:453](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L453)

## Methods

### #initialize

▸ **#initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#initialize](endpoint_export.Endpoint-1.md##initialize)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:642](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L642)

___

### #logReady

▸ **#logReady**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[#logReady](endpoint_export.Endpoint-1.md##logready)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:674](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L674)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[[asyncDispose]](endpoint_export.Endpoint-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:582](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L582)

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[act](endpoint_export.Endpoint-1.md#act)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:512](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L512)

___

### add

▸ **add**\<`T`\>(`endpoint`): `Promise`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

Add a child endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `T` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\> \| [`Configuration`](../modules/endpoint_export.Endpoint.md#configuration)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\> |

#### Returns

`Promise`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[add](endpoint_export.Endpoint-1.md#add)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:418](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L418)

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[add](endpoint_export.Endpoint-1.md#add)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:426](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L426)

___

### behaviorCrash

▸ **behaviorCrash**(): `void`

Invoked if one or more behaviors crashed during initialization.

The default implementation crashes the endpoint.

#### Returns

`void`

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[behaviorCrash](endpoint_export.Endpoint-1.md#behaviorcrash)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:625](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L625)

___

### bringOnline

▸ **bringOnline**(): `Promise`\<`void`\>

Starts the node and resolve when the node enters his online state. Use `cancel()` to stop the node.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/node/Node.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L84)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[close](endpoint_export.Endpoint-1.md#close)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:573](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L573)

___

### createLifecycle

▸ **createLifecycle**(): [`NodeLifecycle`](node_export.NodeLifecycle.md)

Lifecycle information.

#### Returns

[`NodeLifecycle`](node_export.NodeLifecycle.md)

#### Overrides

[Endpoint](endpoint_export.Endpoint-1.md).[createLifecycle](endpoint_export.Endpoint-1.md#createlifecycle)

#### Defined in

[packages/matter.js/src/node/Node.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L77)

___

### endpointCrashed

▸ **endpointCrashed**(`endpoint`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/node/Node.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L132)

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[eventsOf](endpoint_export.Endpoint-1.md#eventsof)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:238](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L238)

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[initialize](endpoint_export.Endpoint-1.md#initialize)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:615](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L615)

___

### reset

▸ **reset**(): `Promise`\<`void`\>

Perform "soft" reset of the endpoint, reverting all in-memory structures to uninitialized.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[reset](endpoint_export.Endpoint-1.md#reset)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:527](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L527)

___

### run

▸ **run**(): `Promise`\<`void`\>

Run the node in standalone mode and resolve when the node goes offline again.

If you are implementing a single node and all logic is handled by registered change handlers and cluster
implementations this is the most convenient way to bring it online.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/node/Node.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L98)

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[set](endpoint_export.Endpoint-1.md#set)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L164)

___

### setStateOf

▸ **setStateOf**\<`T`\>(`type`, `values`): `Promise`\<`void`\>

Update state values for a single behavior.

The patch semantics used here are identical to [set](node_export.Node-1.md#set).

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[setStateOf](endpoint_export.Endpoint-1.md#setstateof)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L207)

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[stateOf](endpoint_export.Endpoint-1.md#stateof)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L144)

___

### statusUpdate

▸ **statusUpdate**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/node/Node.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L128)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[toString](endpoint_export.Endpoint-1.md#tostring)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:586](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L586)

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

#### Inherited from

[Endpoint](endpoint_export.Endpoint-1.md).[visit](endpoint_export.Endpoint-1.md#visit)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:552](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L552)
