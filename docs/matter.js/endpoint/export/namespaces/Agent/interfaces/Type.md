[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [endpoint/export](../../../README.md) / [Agent](../README.md) / Type

# Interface: Type\<T\>

Static type for [Agent](../../../classes/Agent.md) with a property for each statically defined behavior.

Behaviors available at construction time are available as instance properties.  You must use [Agent.get](../../../classes/Agent.md#get) or
[Agent.require](../../../classes/Agent.md#require) to acquire behaviors added via [Agent.require](../../../classes/Agent.md#require).

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EndpointType`](../../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) | [`Empty`](../../../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |

## Constructors

### new Type()

> **new Type**(`endpoint`, `context`): [`Instance`](../README.md#instancet)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../classes/Endpoint.md)\<[`Empty`](../../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |
| `context` | [`ActionContext`](../../../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md) |

#### Returns

[`Instance`](../README.md#instancet)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Agent.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Agent.ts#L163)
