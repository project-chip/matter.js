[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](exports_interaction.md) / [\<internal\>](exports_interaction._internal_.md) / SubscriptionOptions

# Namespace: SubscriptionOptions

[exports/interaction](exports_interaction.md).[\<internal\>](exports_interaction._internal_.md).SubscriptionOptions

## Table of contents

### Interfaces

- [Configuration](../interfaces/exports_interaction._internal_.SubscriptionOptions.Configuration.md)

### Functions

- [configurationFor](exports_interaction._internal_.SubscriptionOptions.md#configurationfor)

## Functions

### configurationFor

▸ **configurationFor**(`options?`): `Object`

Validate options and set defaults.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SubscriptionOptions`](../interfaces/exports_interaction._internal_.SubscriptionOptions-1.md) |

#### Returns

`Object`

the resulting options

| Name | Type |
| :------ | :------ |
| `maxIntervalSeconds` | `number` |
| `minIntervalSeconds` | `number` |
| `randomizationWindowSeconds` | `number` |

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/SubscriptionOptions.d.ts:34
