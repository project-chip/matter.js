[**@project-chip/matter-node-ble.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../../globals.md) / [\<internal\>](../../README.md) / Diagnostic

# Namespace: Diagnostic

## Index

### Enumerations

- [Presentation](enumerations/Presentation.md)

## References

### Elapsed

Re-exports [Elapsed](../../interfaces/Elapsed.md)

## Variables

### presentation

> `const` **presentation**: unique `symbol`

#### Source

matter.js/dist/esm/log/Diagnostic.d.ts:51

***

### value

> `const` **value**: unique `symbol`

#### Source

matter.js/dist/esm/log/Diagnostic.d.ts:52

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

matter.js/dist/esm/log/Diagnostic.d.ts:84

***

### elapsed()

> **elapsed**(): [`Elapsed`](../../interfaces/Elapsed.md)

Create a diagnostic that renders as elapsed time since creation.

#### Returns

[`Elapsed`](../../interfaces/Elapsed.md)

#### Source

matter.js/dist/esm/log/Diagnostic.d.ts:110

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

matter.js/dist/esm/log/Diagnostic.d.ts:88

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

matter.js/dist/esm/log/Diagnostic.d.ts:118

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

matter.js/dist/esm/log/Diagnostic.d.ts:106

***

### lifecycle()

> **lifecycle**(`status`, `value`): [`Diagnostic`](../../interfaces/Diagnostic.md)

Create a diagnostic with a specific Lifecycle.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`Status`](../../enumerations/Status.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)

#### Source

matter.js/dist/esm/log/Diagnostic.d.ts:93

***

### lifecycleList()

> **lifecycleList**(`map`): [`Diagnostic`](../../interfaces/Diagnostic.md)[]

Create a diagnostic for a [Lifecycle.Map](../../README.md#mapt).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `map` | [`Map`](../../README.md#mapt)\<`any`\> |

#### Returns

[`Diagnostic`](../../interfaces/Diagnostic.md)[]

#### Source

matter.js/dist/esm/log/Diagnostic.d.ts:97

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

matter.js/dist/esm/log/Diagnostic.d.ts:76

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

matter.js/dist/esm/log/Diagnostic.d.ts:69

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

matter.js/dist/esm/log/Diagnostic.d.ts:89

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

matter.js/dist/esm/log/Diagnostic.d.ts:80

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

matter.js/dist/esm/log/Diagnostic.d.ts:56

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

matter.js/dist/esm/log/Diagnostic.d.ts:114

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

matter.js/dist/esm/log/Diagnostic.d.ts:64

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

matter.js/dist/esm/log/Diagnostic.d.ts:60
