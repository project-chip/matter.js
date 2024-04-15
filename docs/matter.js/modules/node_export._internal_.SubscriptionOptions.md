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

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L49)
