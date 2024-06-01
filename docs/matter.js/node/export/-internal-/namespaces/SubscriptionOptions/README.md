[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [node/export](../../../README.md) / [\<internal\>](../../README.md) / SubscriptionOptions

# Namespace: SubscriptionOptions

## Index

### Interfaces

- [Configuration](interfaces/Configuration.md)

## Functions

### configurationFor()

> **configurationFor**(`options`?): `object`

Validate options and set defaults.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`SubscriptionOptions`](../../interfaces/SubscriptionOptions.md) |

#### Returns

`object`

the resulting options

##### maxIntervalSeconds

> **maxIntervalSeconds**: `number`

##### minIntervalSeconds

> **minIntervalSeconds**: `number`

##### randomizationWindowSeconds

> **randomizationWindowSeconds**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L49)
