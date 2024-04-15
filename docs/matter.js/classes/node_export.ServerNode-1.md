[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / ServerNode

# Class: ServerNode\<T\>

[node/export](../modules/node_export.md).ServerNode

A server-side Matter [Node](node_export.Node-1.md).

The Matter specification often refers to server-side nodes as "devices".

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) = [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) |

## Hierarchy

- [`Node`](node_export.Node-1.md)\<`T`\>

  ↳ **`ServerNode`**

## Table of contents

### Constructors

- [constructor](node_export.ServerNode-1.md#constructor)

### Properties

- [#activity](node_export.ServerNode-1.md##activity)
- [#agentType](node_export.ServerNode-1.md##agenttype)
- [#behaviors](node_export.ServerNode-1.md##behaviors)
- [#construction](node_export.ServerNode-1.md##construction)
- [#crashed](node_export.ServerNode-1.md##crashed)
- [#environment](node_export.ServerNode-1.md##environment)
- [#eventsView](node_export.ServerNode-1.md##eventsview)
- [#id](node_export.ServerNode-1.md##id)
- [#lifecycle](node_export.ServerNode-1.md##lifecycle)
- [#mutex](node_export.ServerNode-1.md##mutex)
- [#number](node_export.ServerNode-1.md##number)
- [#owner](node_export.ServerNode-1.md##owner)
- [#parts](node_export.ServerNode-1.md##parts)
- [#stateView](node_export.ServerNode-1.md##stateview)
- [#type](node_export.ServerNode-1.md##type)

### Accessors

- [#diagnosticProps](node_export.ServerNode-1.md##diagnosticprops)
- [[label]](node_export.ServerNode-1.md#[label])
- [[value]](node_export.ServerNode-1.md#[value])
- [agentType](node_export.ServerNode-1.md#agenttype)
- [behaviors](node_export.ServerNode-1.md#behaviors)
- [construction](node_export.ServerNode-1.md#construction)
- [diagnosticDict](node_export.ServerNode-1.md#diagnosticdict)
- [env](node_export.ServerNode-1.md#env)
- [events](node_export.ServerNode-1.md#events)
- [hasParts](node_export.ServerNode-1.md#hasparts)
- [id](node_export.ServerNode-1.md#id)
- [lifecycle](node_export.ServerNode-1.md#lifecycle)
- [maybeId](node_export.ServerNode-1.md#maybeid)
- [maybeNumber](node_export.ServerNode-1.md#maybenumber)
- [number](node_export.ServerNode-1.md#number)
- [owner](node_export.ServerNode-1.md#owner)
- [parts](node_export.ServerNode-1.md#parts)
- [path](node_export.ServerNode-1.md#path)
- [state](node_export.ServerNode-1.md#state)
- [type](node_export.ServerNode-1.md#type)

### Methods

- [#initialize](node_export.ServerNode-1.md##initialize)
- [#logReady](node_export.ServerNode-1.md##logready)
- [#reportCrashTermination](node_export.ServerNode-1.md##reportcrashtermination)
- [[asyncDispose]](node_export.ServerNode-1.md#[asyncdispose])
- [act](node_export.ServerNode-1.md#act)
- [add](node_export.ServerNode-1.md#add)
- [advertiseNow](node_export.ServerNode-1.md#advertisenow)
- [behaviorCrash](node_export.ServerNode-1.md#behaviorcrash)
- [bringOnline](node_export.ServerNode-1.md#bringonline)
- [cancel](node_export.ServerNode-1.md#cancel)
- [close](node_export.ServerNode-1.md#close)
- [createLifecycle](node_export.ServerNode-1.md#createlifecycle)
- [endpointCrashed](node_export.ServerNode-1.md#endpointcrashed)
- [eventsOf](node_export.ServerNode-1.md#eventsof)
- [factoryReset](node_export.ServerNode-1.md#factoryreset)
- [initialize](node_export.ServerNode-1.md#initialize)
- [reset](node_export.ServerNode-1.md#reset)
- [resetStorage](node_export.ServerNode-1.md#resetstorage)
- [run](node_export.ServerNode-1.md#run)
- [set](node_export.ServerNode-1.md#set)
- [setStateOf](node_export.ServerNode-1.md#setstateof)
- [start](node_export.ServerNode-1.md#start)
- [stateOf](node_export.ServerNode-1.md#stateof)
- [statusUpdate](node_export.ServerNode-1.md#statusupdate)
- [toString](node_export.ServerNode-1.md#tostring)
- [visit](node_export.ServerNode-1.md#visit)
- [create](node_export.ServerNode-1.md#create)

## Constructors

### constructor

• **new ServerNode**\<`T`\>(`type?`, `options?`): [`ServerNode`](node_export.ServerNode-1.md)\<`T`\>

Construct a new ServerNode.

You can use [create](node_export.ServerNode-1.md#create) to construct the node and wait for it to initialize fully.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) = [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `T` | the variation of [RootEndpoint](../modules/node_export.ServerNode.md#rootendpoint) that defines the root endpoint's behavior |
| `options?` | [`Options`](../modules/node_export.Node.md#options)\<`T`\> | root endpoint options and the node's environment |

#### Returns

[`ServerNode`](node_export.ServerNode-1.md)\<`T`\>

#### Overrides

[Node](node_export.Node-1.md).[constructor](node_export.Node-1.md#constructor)

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L48)

• **new ServerNode**\<`T`\>(`config`): [`ServerNode`](node_export.ServerNode-1.md)\<`T`\>

Construct a new ServerNode.

You can use [create](node_export.ServerNode-1.md#create) to construct the node and wait for it to initialize fully.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) = [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Partial`\<[`Configuration`](../modules/node_export.Node.md#configuration)\<`T`\>\> | a [Endpoint.Configuration](../modules/endpoint_export.Endpoint.md#configuration) for the root endpoint |

#### Returns

[`ServerNode`](node_export.ServerNode-1.md)\<`T`\>

#### Overrides

Node\&lt;T\&gt;.constructor

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L57)

## Properties

### #activity

• `Private` `Optional` **#activity**: [`NodeActivity`](behavior_cluster_export._internal_.NodeActivity-1.md)

#### Inherited from

[Node](node_export.Node-1.md).[#activity](node_export.Node-1.md##activity)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L56)

___

### #agentType

• `Private` `Optional` **#agentType**: [`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

#### Inherited from

[Node](node_export.Node-1.md).[#agentType](node_export.Node-1.md##agenttype)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L49)

___

### #behaviors

• `Private` `Optional` **#behaviors**: [`Behaviors`](node_export._internal_.Behaviors.md)

#### Inherited from

[Node](node_export.Node-1.md).[#behaviors](node_export.Node-1.md##behaviors)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L50)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Inherited from

[Node](node_export.Node-1.md).[#construction](node_export.Node-1.md##construction)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L53)

___

### #crashed

• `Private` **#crashed**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L38)

___

### #environment

• `Private` **#environment**: [`Environment`](environment_export.Environment.md)

#### Inherited from

[Node](node_export.Node-1.md).[#environment](node_export.Node-1.md##environment)

#### Defined in

[packages/matter.js/src/node/Node.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L27)

___

### #eventsView

• `Private` **#eventsView**: [`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

#### Inherited from

[Node](node_export.Node-1.md).[#eventsView](node_export.Node-1.md##eventsview)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L55)

___

### #id

• `Private` `Optional` **#id**: `string`

#### Inherited from

[Node](node_export.Node-1.md).[#id](node_export.Node-1.md##id)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L46)

___

### #lifecycle

• `Private` **#lifecycle**: [`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Inherited from

[Node](node_export.Node-1.md).[#lifecycle](node_export.Node-1.md##lifecycle)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L51)

___

### #mutex

• `Private` **#mutex**: [`Mutex`](behavior_cluster_export._internal_.Mutex.md)

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L37)

___

### #number

• `Private` `Optional` **#number**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Node](node_export.Node-1.md).[#number](node_export.Node-1.md##number)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L47)

___

### #owner

• `Private` `Optional` **#owner**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[Node](node_export.Node-1.md).[#owner](node_export.Node-1.md##owner)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L48)

___

### #parts

• `Private` `Optional` **#parts**: [`Parts`](node_export._internal_.Parts.md)

#### Inherited from

[Node](node_export.Node-1.md).[#parts](node_export.Node-1.md##parts)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L52)

___

### #stateView

• `Private` **#stateView**: [`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

#### Inherited from

[Node](node_export.Node-1.md).[#stateView](node_export.Node-1.md##stateview)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L54)

___

### #type

• `Private` **#type**: [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

#### Inherited from

[Node](node_export.Node-1.md).[#type](node_export.Node-1.md##type)

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

Node.#diagnosticProps

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:702](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L702)

___

### [label]

• `get` **[label]**(): (`string` \| [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md))[]

#### Returns

(`string` \| [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md))[]

#### Inherited from

Node.[label]

#### Defined in

[packages/matter.js/src/node/Node.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L106)

___

### [value]

• `get` **[value]**(): `unknown`

Hierarchical diagnostics of endpoint and children.

#### Returns

`unknown`

#### Inherited from

Node.[value]

#### Defined in

[packages/matter.js/src/node/Node.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L110)

___

### agentType

• `get` **agentType**(): [`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

Create an [Agent.Type](../interfaces/endpoint_export.Agent.Type.md) for the endpoint.

#### Returns

[`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

#### Inherited from

Node.agentType

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:488](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L488)

___

### behaviors

• `get` **behaviors**(): [`Behaviors`](node_export._internal_.Behaviors.md)

Access the pool of behaviors supported by this endpoint.

#### Returns

[`Behaviors`](node_export._internal_.Behaviors.md)

#### Inherited from

Node.behaviors

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L124)

___

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<`T`\>\>

#### Inherited from

Node.construction

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L245)

___

### diagnosticDict

• `get` **diagnosticDict**(): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Diagnostic information regarding endpoint state.

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Inherited from

Node.diagnosticDict

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:695](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L695)

___

### env

• `get` **env**(): [`Environment`](environment_export.Environment.md)

The endpoint's environment.  Endpoint implementations use the environment to access platform components such as
storage and network components.

#### Returns

[`Environment`](environment_export.Environment.md)

#### Inherited from

Node.env

#### Defined in

[packages/matter.js/src/node/Node.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L70)

___

### events

• `get` **events**(): [`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

Events for all behaviors keyed by behavior ID.

#### Returns

[`EventsOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)\<`T`[``"behaviors"``]\>

#### Inherited from

Node.events

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L231)

___

### hasParts

• `get` **hasParts**(): `boolean`

Is this a parent Endpoint?

#### Returns

`boolean`

#### Inherited from

Node.hasParts

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

Node.id

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

Node.id

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L326)

___

### lifecycle

• `get` **lifecycle**(): [`NodeLifecycle`](node_export.NodeLifecycle.md)

Endpoint information that varies as the endpoint initializes.

#### Returns

[`NodeLifecycle`](node_export.NodeLifecycle.md)

#### Inherited from

Node.lifecycle

#### Defined in

[packages/matter.js/src/node/Node.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L123)

___

### maybeId

• `get` **maybeId**(): `undefined` \| `string`

The endpoint ID or undefined if not yet assigned.

#### Returns

`undefined` \| `string`

#### Inherited from

Node.maybeId

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L76)

___

### maybeNumber

• `get` **maybeNumber**(): `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

The endpoint number or undefined if not yet assigned.

#### Returns

`undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

Node.maybeNumber

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

Node.number

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

Node.number

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

Node.owner

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

Node.owner

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:392](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L392)

___

### parts

• `get` **parts**(): [`Parts`](node_export._internal_.Parts.md)

Access child parts.

#### Returns

[`Parts`](node_export._internal_.Parts.md)

#### Inherited from

Node.parts

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:460](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L460)

___

### path

• `get` **path**(): [`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

Path identifying the endpoint in the Matter data model.

#### Returns

[`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)

#### Inherited from

Node.path

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:593](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L593)

___

### state

• `get` **state**(): [`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

Current state values for all behaviors, keyed by behavior ID.  This view is read-only.

#### Returns

[`Immutable`](../modules/util_export.md#immutable)\<[`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<`T`[``"behaviors"``]\>\>

#### Inherited from

Node.state

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L137)

___

### type

• `get` **type**(): [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

The type of endpoint this endpoint implements.

#### Returns

[`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md)

#### Inherited from

Node.type

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:453](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L453)

## Methods

### #initialize

▸ **#initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Inherited from

[Node](node_export.Node-1.md).[#initialize](node_export.Node-1.md##initialize)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:642](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L642)

___

### #logReady

▸ **#logReady**(): `void`

#### Returns

`void`

#### Inherited from

[Node](node_export.Node-1.md).[#logReady](node_export.Node-1.md##logready)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:674](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L674)

___

### #reportCrashTermination

▸ **#reportCrashTermination**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L237)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](node_export.Node-1.md).[[asyncDispose]](node_export.Node-1.md#[asyncdispose])

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

[Node](node_export.Node-1.md).[act](node_export.Node-1.md#act)

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

[Node](node_export.Node-1.md).[add](node_export.Node-1.md#add)

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

[Node](node_export.Node-1.md).[add](node_export.Node-1.md#add)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:426](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L426)

___

### advertiseNow

▸ **advertiseNow**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L195)

___

### behaviorCrash

▸ **behaviorCrash**(): `void`

Invoked if one or more behaviors crashed during initialization.

The default implementation crashes the endpoint.

#### Returns

`void`

#### Inherited from

[Node](node_export.Node-1.md).[behaviorCrash](node_export.Node-1.md#behaviorcrash)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:625](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L625)

___

### bringOnline

▸ **bringOnline**(): `Promise`\<`void`\>

Starts the node and resolve when the node enters his online state. Use `cancel()` to stop the node.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](node_export.Node-1.md).[bringOnline](node_export.Node-1.md#bringonline)

#### Defined in

[packages/matter.js/src/node/Node.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L84)

___

### cancel

▸ **cancel**(): `void`

Take the server offline but leave state and structure intact.

This happens automatically on close.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L130)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Node](node_export.Node-1.md).[close](node_export.Node-1.md#close)

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L142)

___

### createLifecycle

▸ **createLifecycle**(): [`NodeLifecycle`](node_export.NodeLifecycle.md)

Lifecycle information.

#### Returns

[`NodeLifecycle`](node_export.NodeLifecycle.md)

#### Inherited from

[Node](node_export.Node-1.md).[createLifecycle](node_export.Node-1.md#createlifecycle)

#### Defined in

[packages/matter.js/src/node/Node.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L77)

___

### endpointCrashed

▸ **endpointCrashed**(`endpoint`): `undefined` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`undefined` \| ``false``

#### Overrides

[Node](node_export.Node-1.md).[endpointCrashed](node_export.Node-1.md#endpointcrashed)

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L212)

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

[Node](node_export.Node-1.md).[eventsOf](node_export.Node-1.md#eventsof)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:238](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L238)

___

### factoryReset

▸ **factoryReset**(): `Promise`\<`void`\>

Perform a factory reset of the node.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L163)

___

### initialize

▸ **initialize**(`agent`): `Promise`\<`void`\>

Asynchronous initialization.

Derivatives may override to perform async construction prior to full initialization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Instance`](../modules/endpoint_export.Agent.md#instance)\<`T`\> |

#### Returns

`Promise`\<`void`\>

#### Overrides

[Node](node_export.Node-1.md).[initialize](node_export.Node-1.md#initialize)

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L199)

___

### reset

▸ **reset**(): `Promise`\<`void`\>

Perform "soft" reset of the endpoint, reverting all in-memory structures to uninitialized.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](node_export.Node-1.md).[reset](node_export.Node-1.md#reset)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:527](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L527)

___

### resetStorage

▸ **resetStorage**(): `Promise`\<`void`\>

By default on factory reset we erase all stored data.

If this is inappropriate for your application you may override to alter the behavior.   Matter requires that all
"security- and privacy-related data and key material" is removed on factory reset.

#### Returns

`Promise`\<`void`\>

**`See`**

MatterSpecification.v12.Core § 13.4

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L233)

___

### run

▸ **run**(): `Promise`\<`void`\>

Run the node in standalone mode and resolve when the node goes offline again.

If you are implementing a single node and all logic is handled by registered change handlers and cluster
implementations this is the most convenient way to bring it online.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[Node](node_export.Node-1.md).[run](node_export.Node-1.md#run)

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

[Node](node_export.Node-1.md).[set](node_export.Node-1.md#set)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L164)

___

### setStateOf

▸ **setStateOf**\<`T`\>(`type`, `values`): `Promise`\<`void`\>

Update state values for a single behavior.

The patch semantics used here are identical to [set](node_export.ServerNode-1.md#set).

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

[Node](node_export.Node-1.md).[setStateOf](node_export.Node-1.md#setstateof)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L207)

___

### start

▸ **start**(): `void`

Bring the server online.

If you add the server as a worker to Environment.runtime this happens automatically.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L109)

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

[Node](node_export.Node-1.md).[stateOf](node_export.Node-1.md#stateof)

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

#### Inherited from

[Node](node_export.Node-1.md).[statusUpdate](node_export.Node-1.md#statusupdate)

#### Defined in

[packages/matter.js/src/node/Node.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/Node.ts#L128)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Node](node_export.Node-1.md).[toString](node_export.Node-1.md#tostring)

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

[Node](node_export.Node-1.md).[visit](node_export.Node-1.md#visit)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:552](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L552)

___

### create

▸ **create**\<`This`, `T`\>(`this`, `type?`, `options?`): `Promise`\<[`ServerNode`](node_export.ServerNode-1.md)\<`T`\>\>

Create a new ServerNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends typeof [`ServerNode`](../modules/node_export.ServerNode.md) |
| `T` | extends [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) = [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `This` | - |
| `type?` | `T` | the variation of [RootEndpoint](../modules/node_export.ServerNode.md#rootendpoint) that defines the root endpoint's behavior |
| `options?` | [`Options`](../modules/node_export.Node.md#options)\<`T`\> | root endpoint configuration and, optionally, the node's environment |

#### Returns

`Promise`\<[`ServerNode`](node_export.ServerNode-1.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L71)

▸ **create**\<`This`, `T`\>(`this`, `config`): `Promise`\<[`ServerNode`](node_export.ServerNode-1.md)\<`T`\>\>

Create a new ServerNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends typeof [`ServerNode`](../modules/node_export.ServerNode.md) |
| `T` | extends [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) = [`RootEndpoint`](../interfaces/node_export.ServerNode.RootEndpoint.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `This` | - |
| `config` | `Partial`\<[`Configuration`](../modules/node_export.Node.md#configuration)\<`T`\>\> | root endpoint configuration and, optionally, the node's Environment |

#### Returns

`Promise`\<[`ServerNode`](node_export.ServerNode-1.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/node/ServerNode.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/ServerNode.ts#L81)
