[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/export](../modules/endpoint_export.md) / Agent

# Class: Agent

[endpoint/export](../modules/endpoint_export.md).Agent

An Agent offers interaction with a single endpoint.  This is the operational interface to endpoints.  It is separate
from the [Endpoint](endpoint_export.Endpoint-1.md) because the agent is context-aware and may be bound to a specific fabric.

An endpoint agent manages one or more [Behavior](behavior_export.Behavior-1.md) instances that implement a discrete subset of the agent's
functionality.

Each endpoint agent has an associated [Agent.Type](../interfaces/endpoint_export.Agent.Type.md) that defines each [Behavior.Type](../interfaces/behavior_export.Behavior.Type.md) the endpoint
supports.

[Agent.Type](../interfaces/endpoint_export.Agent.Type.md) is a permanent feature of an endpoint but agent instances themselves are transitory and there is
no guarantee they will exist beyond the lifecycle of a single transaction.

## Table of contents

### Constructors

- [constructor](endpoint_export.Agent-1.md#constructor)

### Properties

- [#behaviors](endpoint_export.Agent-1.md##behaviors)
- [#context](endpoint_export.Agent-1.md##context)
- [#endpoint](endpoint_export.Agent-1.md##endpoint)

### Accessors

- [context](endpoint_export.Agent-1.md#context)
- [endpoint](endpoint_export.Agent-1.md#endpoint)
- [owner](endpoint_export.Agent-1.md#owner)

### Methods

- [[INSTALL\_BEHAVIOR]](endpoint_export.Agent-1.md#[install_behavior])
- [activate](endpoint_export.Agent-1.md#activate)
- [get](endpoint_export.Agent-1.md#get)
- [has](endpoint_export.Agent-1.md#has)
- [isLoaded](endpoint_export.Agent-1.md#isloaded)
- [load](endpoint_export.Agent-1.md#load)
- [require](endpoint_export.Agent-1.md#require)
- [toString](endpoint_export.Agent-1.md#tostring)
- [for](endpoint_export.Agent-1.md#for)

## Constructors

### constructor

• **new Agent**(`endpoint`, `context`): [`Agent`](endpoint_export.Agent-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |
| `context` | [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md) |

#### Returns

[`Agent`](endpoint_export.Agent-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L35)

## Properties

### #behaviors

• `Private` **#behaviors**: `Record`\<`string`, [`Behavior`](behavior_export.Behavior-1.md)\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L33)

___

### #context

• `Private` **#context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L32)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L31)

## Accessors

### context

• `get` **context**(): [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

Access the agent's [ActionContext](../interfaces/behavior_cluster_export._internal_.ActionContext.md).

#### Returns

[`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L60)

___

### endpoint

• `get` **endpoint**(): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

Access the [Endpoint](endpoint_export.Endpoint-1.md) this agent acts on behalf of.

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L43)

___

### owner

• `get` **owner**(): `undefined` \| [`Agent`](endpoint_export.Agent-1.md)

Access an [Agent](endpoint_export.Agent-1.md) for this agent's owner.

#### Returns

`undefined` \| [`Agent`](endpoint_export.Agent-1.md)

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L50)

## Methods

### [INSTALL\_BEHAVIOR]

▸ **[INSTALL_BEHAVIOR]**(`behavior`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `behavior` | [`Behavior`](behavior_export.Behavior-1.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L150)

___

### activate

▸ **activate**(`type`): `void`

Trigger initialization of a supported [Behavior.Type](../interfaces/behavior_export.Behavior.Type.md).

Functionally identical to [load](endpoint_export.Agent-1.md#load) but has no return value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L106)

___

### get

▸ **get**\<`T`\>(`type`): `InstanceType`\<`T`\>

Obtain a [Behavior](behavior_export.Behavior-1.md) supported by this agent.  Throws an error if the [Behavior.Type](../interfaces/behavior_export.Behavior.Type.md) isn't supported
or is still initializing.

You may also access behaviors using normal property access, e.g. `agent.descriptor` is the same as
`agent.get(DescriptorBehavior)`.

Property access is available in TypeScript when the set of behaviors is defined statically.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`InstanceType`\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L80)

___

### has

▸ **has**\<`BehaviorT`\>(`type`): this is InstanceType\<BehaviorT\>

Test to see if a [Behavior.Type](../interfaces/behavior_export.Behavior.Type.md) is supported by this agent.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BehaviorT` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `BehaviorT` |

#### Returns

this is InstanceType\<BehaviorT\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L67)

___

### isLoaded

▸ **isLoaded**(`type`): `boolean`

Determine whether a behavior is loaded (does not validate class, only by ID).

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L120)

___

### load

▸ **load**\<`T`\>(`type`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`InstanceType`\<`T`\>\>

Obtain a behavior supported by this agent.  Throws an error if the [Behavior.Type](../interfaces/behavior_export.Behavior.Type.md) isn't supported.  Waits
if the behavior is not yet initialized.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`InstanceType`\<`T`\>\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L92)

___

### require

▸ **require**\<`T`\>(`type`, `options?`): `void`

Add support for a [Behavior.Type](../interfaces/behavior_export.Behavior.Type.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `options?` | [`Options`](../modules/behavior_export.Behavior.md#options)\<`T`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L113)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L124)

___

### for

▸ **for**\<`T`\>(`type`, `behaviors`): [`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

Create a new [Agent](endpoint_export.Agent-1.md) that supports the specified behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |
| `behaviors` | [`SupportedBehaviors`](../modules/behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Returns

[`Type`](../interfaces/endpoint_export.Agent.Type.md)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L131)
