[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [log/export](../../README.md) / Diagnostic

# Namespace: Diagnostic

## Index

### Enumerations

- [Presentation](enumerations/Presentation.md)

### Interfaces

- [Elapsed](interfaces/Elapsed.md)

## Variables

### presentation

> `const` **presentation**: *typeof* [`presentation`](README.md#presentation)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L66)

***

### value

> `const` **value**: *typeof* [`value`](README.md#value)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L67)

## Functions

### dict()

> **dict**(`entries`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a K/V map that presents with formatted keys.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entries` | `object` |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L127)

***

### elapsed()

> **elapsed**(): [`Elapsed`](interfaces/Elapsed.md)

Create a diagnostic that renders as elapsed time since creation.

#### Returns

[`Elapsed`](interfaces/Elapsed.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L278)

***

### error()

> **error**(`error`): `string` \| [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a Diagnostic for an error.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`string` \| [`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L137)

***

### hex()

> **hex**(`value`): `string`

Convert a number or bigint to a hex string which is prefixed by "0x" for logging purposes

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`string`

#### Source

[packages/matter.js/src/log/Diagnostic.ts:322](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L322)

***

### interval()

> **interval**(`ms`): `string`

Convert an interval to text.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`string`

#### Source

[packages/matter.js/src/log/Diagnostic.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L246)

***

### lifecycle()

> **lifecycle**(`status`, `value`): [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a diagnostic with a specific [Lifecycle](../../../../common/export/namespaces/Lifecycle/README.md).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`Status`](../../../../common/export/namespaces/Lifecycle/enumerations/Status.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L226)

***

### lifecycleList()

> **lifecycleList**(`map`): [`Diagnostic`](../../interfaces/Diagnostic.md)[]

Create a diagnostic for a [Lifecycle.Map](../../../../common/export/namespaces/Lifecycle/README.md#mapt).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `map` | [`Map`](../../../../common/export/namespaces/Lifecycle/README.md#mapt)\<`any`\> |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)[]

#### Source

[packages/matter.js/src/log/Diagnostic.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L233)

***

### list()

> **list**(`value`): [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a value presenting as a list of separate lines.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `Iterable`\<`unknown`\> |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L113)

***

### node()

> **node**(`icon`, `label`, `detail`): `unknown`[]

A node in a diagnostic tree.  Top-level diagnostic sources registered with DiagnosticSource should present as
nodes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `icon` | `string` |
| `label` | `unknown` |
| `detail` | `object` |
| `detail.children`? | `unknown`[] |
| `detail.self`? | `unknown` |

#### Returns

`unknown`[]

#### Source

[packages/matter.js/src/log/Diagnostic.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L99)

***

### prefixError()

> **prefixError**(`prefix`, `cause`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `prefix` | `string` |
| `cause` | `any` |

#### Returns

`void`

#### Source

[packages/matter.js/src/log/Diagnostic.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L217)

***

### squash()

> **squash**(...`values`): [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a value presenting as segments of the same string without intervening spaces.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`values` | `unknown`[] |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L120)

***

### strong()

> **strong**(`value`): [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a value presented emphatically.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L72)

***

### upgrade()

> **upgrade**\<`T`\>(`value`, `diagnostic`): `T`

Upgrade a value to support specialized diagnostic rendering.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `boolean` \| `object` |
| `diagnostic` | `unknown` |

#### Returns

`T`

#### Source

[packages/matter.js/src/log/Diagnostic.ts:295](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L295)

***

### via()

> **via**(`value`): `string`

Create a value identifying the source of a diagnostic event.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[packages/matter.js/src/log/Diagnostic.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L86)

***

### weak()

> **weak**(`value`): [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a value presented less emphatically than the default.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/log/Diagnostic.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/log/Diagnostic.ts#L79)
