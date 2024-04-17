[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [log/export](log_export.md) / Diagnostic

# Namespace: Diagnostic

[log/export](log_export.md).Diagnostic

## Table of contents

### Enumerations

- [Presentation](../enums/log_export.Diagnostic.Presentation.md)

### Interfaces

- [Elapsed](../interfaces/log_export.Diagnostic.Elapsed.md)

### Variables

- [presentation](log_export.Diagnostic.md#presentation)
- [value](log_export.Diagnostic.md#value)

### Functions

- [dict](log_export.Diagnostic.md#dict)
- [elapsed](log_export.Diagnostic.md#elapsed)
- [error](log_export.Diagnostic.md#error)
- [interval](log_export.Diagnostic.md#interval)
- [lifecycle](log_export.Diagnostic.md#lifecycle)
- [lifecycleList](log_export.Diagnostic.md#lifecyclelist)
- [list](log_export.Diagnostic.md#list)
- [node](log_export.Diagnostic.md#node)
- [prefixError](log_export.Diagnostic.md#prefixerror)
- [squash](log_export.Diagnostic.md#squash)
- [strong](log_export.Diagnostic.md#strong)
- [upgrade](log_export.Diagnostic.md#upgrade)
- [via](log_export.Diagnostic.md#via)
- [weak](log_export.Diagnostic.md#weak)

## Variables

### presentation

• `Const` **presentation**: unique `symbol`

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:51

___

### value

• `Const` **value**: unique `symbol`

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:52

## Functions

### dict

▸ **dict**(`entries`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a K/V map that presents with formatted keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `object` |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:84

___

### elapsed

▸ **elapsed**(): [`Elapsed`](../interfaces/log_export.Diagnostic.Elapsed.md)

Create a diagnostic that renders as elapsed time since creation.

#### Returns

[`Elapsed`](../interfaces/log_export.Diagnostic.Elapsed.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:110

___

### error

▸ **error**(`error`): `string` \| [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a Diagnostic for an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`string` \| [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:88

___

### interval

▸ **interval**(`ms`): `string`

Convert an interval to text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:106

___

### lifecycle

▸ **lifecycle**(`status`, `value`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a diagnostic with a specific [Lifecycle](exports_common.Lifecycle.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`Status`](../enums/exports_common.Lifecycle.Status.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:93

___

### lifecycleList

▸ **lifecycleList**(`map`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

Create a diagnostic for a [Lifecycle.Map](exports_common.Lifecycle.md#map).

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Map`](exports_common.Lifecycle.md#map)\<`any`\> |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:97

___

### list

▸ **list**(`value`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a value presenting as a list of separate lines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Iterable`\<`unknown`\> |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:76

___

### node

▸ **node**(`icon`, `label`, `detail`): `unknown`[]

A node in a diagnostic tree.  Top-level diagnostic sources registered with DiagnosticSource should present as
nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |
| `label` | `unknown` |
| `detail` | `Object` |
| `detail.children?` | `unknown`[] |
| `detail.self?` | `unknown` |

#### Returns

`unknown`[]

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:69

___

### prefixError

▸ **prefixError**(`prefix`, `cause`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `cause` | `any` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:89

___

### squash

▸ **squash**(`...values`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a value presenting as segments of the same string without intervening spaces.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `unknown`[] |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:80

___

### strong

▸ **strong**(`value`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a value presented emphatically.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:56

___

### upgrade

▸ **upgrade**\<`T`\>(`value`, `diagnostic`): `T`

Upgrade a value to support specialized diagnostic rendering.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` \| `boolean` \| `object` |
| `diagnostic` | `unknown` |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:114

___

### via

▸ **via**(`value`): `string`

Create a value identifying the source of a diagnostic event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:64

___

### weak

▸ **weak**(`value`): [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

Create a value presented less emphatically than the default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/log/Diagnostic.d.ts:60
