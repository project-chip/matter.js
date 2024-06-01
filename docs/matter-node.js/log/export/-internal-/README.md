[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [log/export](../README.md) / \<internal\>

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

packages/matter.js/dist/esm/log/Logger.d.ts:20

## Functions

### plainLogFormatter()

> **plainLogFormatter**(`now`, `level`, `facility`, `prefix`, `values`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `now` | `Date` |
| `level` | [`Level`](../enumerations/Level.md) |
| `facility` | `string` |
| `prefix` | `string` |
| `values` | `any`[] |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/log/Format.d.ts:27
