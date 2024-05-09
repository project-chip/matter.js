[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](behavior_cluster_export.md) / [\<internal\>](behavior_cluster_export._internal_.md) / SupportedBehaviors

# Namespace: SupportedBehaviors

[behavior/cluster/export](behavior_cluster_export.md).[\<internal\>](behavior_cluster_export._internal_.md).SupportedBehaviors

Utility functions and definitions for modifying lists of clusters.

## Table of contents

### Type Aliases

- [EndpointProperties](behavior_cluster_export._internal_.SupportedBehaviors.md#endpointproperties)
- [EventsOf](behavior_cluster_export._internal_.SupportedBehaviors.md#eventsof)
- [InputStateOf](behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)
- [List](behavior_cluster_export._internal_.SupportedBehaviors.md#list)
- [MapOf](behavior_cluster_export._internal_.SupportedBehaviors.md#mapof)
- [StateOf](behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)
- [StatePatchOf](behavior_cluster_export._internal_.SupportedBehaviors.md#statepatchof)
- [With](behavior_cluster_export._internal_.SupportedBehaviors.md#with)

### Functions

- [extend](behavior_cluster_export._internal_.SupportedBehaviors.md#extend)

## Type Aliases

### EndpointProperties

Ƭ **EndpointProperties**\<`SB`\>: \{ readonly [K in keyof SB]: InstanceType\<SB[K]\> }

Properties of an endpoint contributed by listed behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SB` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L70)

___

### EventsOf

Ƭ **EventsOf**\<`SB`\>: \{ [K in keyof SB]: EventsOf\<SB[K]\> }

Compound events for all behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SB` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L84)

___

### InputStateOf

Ƭ **InputStateOf**\<`SB`\>: \{ [K in keyof SB]?: InputStateOf\<SB[K]\> }

Input version of [StateOf](behavior_cluster_export._internal_.SupportedBehaviors.md#stateof).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SB` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L91)

___

### List

Ƭ **List**: readonly [`Type`](../interfaces/behavior_export.Behavior.Type.md)[]

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L31)

___

### MapOf

Ƭ **MapOf**\<`T`\>: `T` extends readonly [infer F] ? \{ readonly [K in F["id"]]: F } : `T` extends readonly [infer F, ...(infer R extends List)] ? \{ readonly [K in F["id"]]: F } & [`MapOf`](behavior_cluster_export._internal_.SupportedBehaviors.md#mapof)\<`R`\> : {}

Convert a List to BehaviorTypes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`List`](behavior_cluster_export._internal_.SupportedBehaviors.md#list) |

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L61)

___

### StateOf

Ƭ **StateOf**\<`SB`\>: \{ [K in keyof SB]: StateOf\<SB[K]\> }

Compound state for all behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SB` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L77)

___

### StatePatchOf

Ƭ **StatePatchOf**\<`SB`\>: \{ [K in keyof SB]?: PatchStateOf\<SB[K]\> }

Patch input version of [StateOf](behavior_cluster_export._internal_.SupportedBehaviors.md#stateof).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SB` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L98)

___

### With

Ƭ **With**\<`CurrentT`, `NewT`\>: `Omit`\<`CurrentT`, `NewT`[`number`][``"id"``]\> & [`MapOf`](behavior_cluster_export._internal_.SupportedBehaviors.md#mapof)\<`NewT`\>

Add or replace behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CurrentT` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |
| `NewT` | extends [`List`](behavior_cluster_export._internal_.SupportedBehaviors.md#list) |

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L55)

## Functions

### extend

▸ **extend**\<`BehaviorsT`, `NewBehaviorsT`\>(`currentTypes`, `newTypes`): [`With`](behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<`BehaviorsT`, `NewBehaviorsT`\>

Create a new list with additional behaviors, replacing any previous
behavior for the same cluster.  Replacement updates the set of supported
cluster features.

Note: Functional equivalent of With<> but you can't have a method named
"with" in a namespace.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BehaviorsT` | extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) |
| `NewBehaviorsT` | extends [`List`](behavior_cluster_export._internal_.SupportedBehaviors.md#list) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentTypes` | `BehaviorsT` |
| `newTypes` | `NewBehaviorsT` |

#### Returns

[`With`](behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<`BehaviorsT`, `NewBehaviorsT`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L41)
