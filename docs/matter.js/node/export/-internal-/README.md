[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [node/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- [ActionTracer](namespaces/ActionTracer/README.md)
- [CommissioningBehavior](namespaces/CommissioningBehavior/README.md)
- [CommissioningOptions](namespaces/CommissioningOptions/README.md)
- [EndpointLifecycle](namespaces/EndpointLifecycle/README.md)
- [IndexBehavior](namespaces/IndexBehavior/README.md)
- [NetworkServer](namespaces/NetworkServer/README.md)
- [ProductDescriptionServer](namespaces/ProductDescriptionServer/README.md)
- [SessionsBehavior](namespaces/SessionsBehavior/README.md)
- [SubscriptionOptions](namespaces/SubscriptionOptions/README.md)

### Enumerations

- [Change](enumerations/Change.md)

### Classes

- [ActionTracer](classes/ActionTracer.md)
- [Behaviors](classes/Behaviors.md)
- [CommissioningBehavior](classes/CommissioningBehavior.md)
- [EndpointLifecycle](classes/EndpointLifecycle.md)
- [IndexBehavior](classes/IndexBehavior.md)
- [MdnsInstanceBroadcaster](classes/MdnsInstanceBroadcaster.md)
- [NetworkServer](classes/NetworkServer.md)
- [Parts](classes/Parts.md)
- [PartsBehavior](classes/PartsBehavior.md)
- [ProductDescriptionServer](classes/ProductDescriptionServer.md)
- [ServerNetworkRuntime](classes/ServerNetworkRuntime.md)
- [SessionsBehavior](classes/SessionsBehavior.md)
- [TransactionalInteractionServer](classes/TransactionalInteractionServer.md)

### Interfaces

- [CommissioningOptions](interfaces/CommissioningOptions.md)
- [SubscriptionOptions](interfaces/SubscriptionOptions.md)

## Type Aliases

### With\<B, SB\>

> **With**\<`B`, `SB`\>: `Omit`\<`B`, `"behaviors"` \| `"defaults"` \| `"set"` \| `"with"`\> & `object`

#### Type declaration

##### behaviors

> **behaviors**: `B`\[`"behaviors"`\] & `SB`

##### defaults

> **defaults**: [`StateOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<`SB`\>

Access default state values.

##### set()

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#inputstateofsb)\<`SB`\> |

###### Returns

[`With`](README.md#withbsb)\<`B`, `SB`\>

##### with()

Define an endpoint like this one with additional and/or replacement server behaviors.

###### Type parameters

| Type parameter |
| :------ |
| `BL` *extends* [`List`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#list) |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`behaviors` | `BL` |

###### Returns

[`With`](README.md#withbsb)\<`B`, [`With`](../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`SB`, `BL`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`EndpointType`](../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) |
| `SB` *extends* [`SupportedBehaviors`](../../../behavior/cluster/export/-internal-/README.md#supportedbehaviors) |

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L80)
