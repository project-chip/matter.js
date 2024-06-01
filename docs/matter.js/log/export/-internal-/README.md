[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [log/export](../README.md) / \<internal\>

# \<internal\>

## Type Aliases

### LoggerDefinition

> **LoggerDefinition**: `object`

Definition of one registered Logger.

#### Type declaration

##### defaultLogLevel

> **defaultLogLevel**: [`Level`](../enumerations/Level.md)

##### log()

> **log**: (`level`, `formattedLog`) => `void`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | [`Level`](../enumerations/Level.md) |
| `formattedLog` | `string` |

###### Returns

`void`

##### logFormatter()

> **logFormatter**: (`now`, `level`, `facility`, ...`values`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enumerations/Level.md) |
| `facility` | `string` |
| ...`values` | `any`[] |

###### Returns

`string`

##### logIdentifier

> **logIdentifier**: `string`

##### logLevels

> **logLevels**: `object`

###### Index signature

 \[`facility`: `string`\]: [`Level`](../enumerations/Level.md)

#### Source

[packages/matter.js/src/log/Logger.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Logger.ts#L68)
