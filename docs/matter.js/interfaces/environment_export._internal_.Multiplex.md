[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / Multiplex

# Interface: Multiplex

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).Multiplex

A "multiplex" tracks an extensible set of promises.

## Implemented by

- [`RuntimeService`](../classes/environment_export.RuntimeService-1.md)

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

[packages/matter.js/src/util/Multiplex.ts:13](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/util/Multiplex.ts#L13)

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

[packages/matter.js/src/util/Multiplex.ts:11](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/util/Multiplex.ts#L11)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/util/Multiplex.ts:12](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/util/Multiplex.ts#L12)
