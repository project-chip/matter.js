[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / Multiplex

# Interface: Multiplex

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).Multiplex

A "multiplex" tracks an extensible set of promises.

## Implemented by

- [`RuntimeService`](../classes/environment_export._internal_.RuntimeService-1.md)

## Table of contents

### Methods

- [[asyncDispose]](environment_export._internal_.Multiplex.md#[asyncdispose])
- [add](environment_export._internal_.Multiplex.md#add)
- [close](environment_export._internal_.Multiplex.md#close)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/util/Multiplex.d.ts:12

___

### add

▸ **add**(`worker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | `Promise`\<`unknown`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/util/Multiplex.d.ts:10

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/util/Multiplex.d.ts:11
