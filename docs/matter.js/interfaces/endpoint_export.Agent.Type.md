[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/export](../modules/endpoint_export.md) / [Agent](../modules/endpoint_export.Agent.md) / Type

# Interface: Type\<T\>

[endpoint/export](../modules/endpoint_export.md).[Agent](../modules/endpoint_export.Agent.md).Type

Static type for [Agent](../classes/endpoint_export.Agent-1.md) with a property for each statically defined behavior.

Behaviors available at construction time are available as instance properties.  You must use [Agent.get](../classes/endpoint_export.Agent-1.md#get) or
[Agent.require](../classes/endpoint_export.Agent-1.md#require) to acquire behaviors added via [Agent.require](../classes/endpoint_export.Agent-1.md#require).

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](behavior_cluster_export._internal_.Empty.md) |

## Table of contents

### Constructors

- [constructor](endpoint_export.Agent.Type.md#constructor)

## Constructors

### constructor

• **new Type**(`endpoint`, `context`): [`Instance`](../modules/endpoint_export.Agent.md#instance)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\> |
| `context` | [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md) |

#### Returns

[`Instance`](../modules/endpoint_export.Agent.md#instance)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Agent.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Agent.ts#L163)
