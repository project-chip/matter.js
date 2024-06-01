[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/cluster/export](../../../README.md) / [\<internal\>](../../README.md) / SupportedBehaviors

# Namespace: SupportedBehaviors

Utility functions and definitions for modifying lists of clusters.

## Type Aliases

### EndpointProperties\<SB\>

> **EndpointProperties**\<`SB`\>: `{ readonly [K in keyof SB]: InstanceType<SB[K]> }`

Properties of an endpoint contributed by listed behaviors.

#### Type parameters

| Type parameter |
| :------ |
| `SB` *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) |

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L70)

***

### EventsOf\<SB\>

> **EventsOf**\<`SB`\>: `{ [K in keyof SB]: EventsOf<SB[K]> }`

Compound events for all behaviors.

#### Type parameters

| Type parameter |
| :------ |
| `SB` *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) |

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L84)

***

### InputStateOf\<SB\>

> **InputStateOf**\<`SB`\>: `{ [K in keyof SB]?: InputStateOf<SB[K]> }`

Input version of [StateOf](README.md#stateofsb).

#### Type parameters

| Type parameter |
| :------ |
| `SB` *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) |

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L91)

***

### List

> **List**: readonly [`Type`](../../../../../export/namespaces/Behavior/interfaces/Type.md)[]

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L31)

***

### MapOf\<T\>

> **MapOf**\<`T`\>: `T` *extends* readonly [infer F] ? `{ readonly [K in F["id"]]: F }` : `T` *extends* readonly [infer F, `...(infer R extends List)`] ? `{ readonly [K in F["id"]]: F }` & [`MapOf`](README.md#mapoft)\<`R`\> : `object`

Convert a List to BehaviorTypes.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`List`](README.md#list) |

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L61)

***

### StateOf\<SB\>

> **StateOf**\<`SB`\>: `{ [K in keyof SB]: StateOf<SB[K]> }`

Compound state for all behaviors.

#### Type parameters

| Type parameter |
| :------ |
| `SB` *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) |

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L77)

***

### StatePatchOf\<SB\>

> **StatePatchOf**\<`SB`\>: `{ [K in keyof SB]?: PatchStateOf<SB[K]> }`

Patch input version of [StateOf](README.md#stateofsb).

#### Type parameters

| Type parameter |
| :------ |
| `SB` *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) |

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L98)

***

### With\<CurrentT, NewT\>

> **With**\<`CurrentT`, `NewT`\>: `Omit`\<`CurrentT`, `NewT`\[`number`\]\[`"id"`\]\> & [`MapOf`](README.md#mapoft)\<`NewT`\>

Add or replace behaviors.

#### Type parameters

| Type parameter |
| :------ |
| `CurrentT` *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) |
| `NewT` *extends* [`List`](README.md#list) |

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L55)

## Functions

### extend()

> **extend**\<`BehaviorsT`, `NewBehaviorsT`\>(`currentTypes`, `newTypes`): [`With`](README.md#withcurrenttnewt)\<`BehaviorsT`, `NewBehaviorsT`\>

Create a new list with additional behaviors, replacing any previous
behavior for the same cluster.  Replacement updates the set of supported
cluster features.

Note: Functional equivalent of With<> but you can't have a method named
"with" in a namespace.

#### Type parameters

| Type parameter |
| :------ |
| `BehaviorsT` *extends* [`SupportedBehaviors`](../../README.md#supportedbehaviors) |
| `NewBehaviorsT` *extends* [`List`](README.md#list) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `currentTypes` | `BehaviorsT` |
| `newTypes` | `NewBehaviorsT` |

#### Returns

[`With`](README.md#withcurrenttnewt)\<`BehaviorsT`, `NewBehaviorsT`\>

#### Source

[packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/SupportedBehaviors.ts#L41)
