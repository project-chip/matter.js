[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](internal_.md) / Diagnostic

# Namespace: Diagnostic

[\<internal\>](internal_.md).Diagnostic

## Table of contents

### References

- [Elapsed](internal_.Diagnostic.md#elapsed)

### Enumerations

- [Presentation](../enums/internal_.Diagnostic.Presentation.md)

### Variables

- [presentation](internal_.Diagnostic.md#presentation)
- [value](internal_.Diagnostic.md#value)

### Functions

- [dict](internal_.Diagnostic.md#dict)
- [elapsed](internal_.Diagnostic.md#elapsed-1)
- [error](internal_.Diagnostic.md#error)
- [interval](internal_.Diagnostic.md#interval)
- [lifecycle](internal_.Diagnostic.md#lifecycle)
- [lifecycleList](internal_.Diagnostic.md#lifecyclelist)
- [list](internal_.Diagnostic.md#list)
- [node](internal_.Diagnostic.md#node)
- [prefixError](internal_.Diagnostic.md#prefixerror)
- [squash](internal_.Diagnostic.md#squash)
- [strong](internal_.Diagnostic.md#strong)
- [upgrade](internal_.Diagnostic.md#upgrade)
- [via](internal_.Diagnostic.md#via)
- [weak](internal_.Diagnostic.md#weak)

## References

### Elapsed

Re-exports [Elapsed](../interfaces/internal_.Elapsed.md)

## Variables

### presentation

• `Const` **presentation**: unique `symbol`

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:51

___

### value

• `Const` **value**: unique `symbol`

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:52

## Functions

### dict

▸ **dict**(`entries`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

Create a K/V map that presents with formatted keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `object` |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:84

___

### elapsed

▸ **elapsed**(): [`Elapsed`](../interfaces/internal_.Elapsed.md)

Create a diagnostic that renders as elapsed time since creation.

#### Returns

[`Elapsed`](../interfaces/internal_.Elapsed.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:110

___

### error

▸ **error**(`error`): `string` \| [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

Create a Diagnostic for an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`string` \| [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:88

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

matter.js/dist/esm/log/Diagnostic.d.ts:106

___

### lifecycle

▸ **lifecycle**(`status`, `value`): [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

Create a diagnostic with a specific Lifecycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`Status`](../enums/internal_.Status.md) |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:93

___

### lifecycleList

▸ **lifecycleList**(`map`): [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)[]

Create a diagnostic for a [Lifecycle.Map](internal_.md#map).

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Map`](internal_.md#map)\<`any`\> |

#### Returns

[`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)[]

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:97

___

### list

▸ **list**(`value`): [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

Create a value presenting as a list of separate lines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Iterable`\<`unknown`\> |

#### Returns

[`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:76

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

matter.js/dist/esm/log/Diagnostic.d.ts:69

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

matter.js/dist/esm/log/Diagnostic.d.ts:89

___

### squash

▸ **squash**(`...values`): [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

Create a value presenting as segments of the same string without intervening spaces.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `unknown`[] |

#### Returns

[`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:80

___

### strong

▸ **strong**(`value`): [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

Create a value presented emphatically.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:56

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

matter.js/dist/esm/log/Diagnostic.d.ts:114

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

matter.js/dist/esm/log/Diagnostic.d.ts:64

___

### weak

▸ **weak**(`value`): [`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

Create a value presented less emphatically than the default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`Diagnostic`](../interfaces/internal_.Diagnostic-1.md)

#### Defined in

matter.js/dist/esm/log/Diagnostic.d.ts:60
