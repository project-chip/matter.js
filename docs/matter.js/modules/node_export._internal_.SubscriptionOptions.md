[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](node_export.md) / [\<internal\>](node_export._internal_.md) / SubscriptionOptions

# Namespace: SubscriptionOptions

[node/export](node_export.md).[\<internal\>](node_export._internal_.md).SubscriptionOptions

## Table of contents

### Interfaces

- [Configuration](../interfaces/node_export._internal_.SubscriptionOptions.Configuration.md)

### Functions

- [configurationFor](node_export._internal_.SubscriptionOptions.md#configurationfor)

## Functions

### configurationFor

▸ **configurationFor**(`options?`): `Object`

Validate options and set defaults.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SubscriptionOptions`](../interfaces/node_export._internal_.SubscriptionOptions-1.md) |

#### Returns

`Object`

the resulting options

| Name | Type |
| :------ | :------ |
| `maxIntervalSeconds` | `number` |
| `minIntervalSeconds` | `number` |
| `randomizationWindowSeconds` | `number` |

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:49](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L49)
