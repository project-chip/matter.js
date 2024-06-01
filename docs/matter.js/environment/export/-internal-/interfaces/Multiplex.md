[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [environment/export](../../README.md) / [\<internal\>](../README.md) / Multiplex

# Interface: Multiplex

A "multiplex" tracks an extensible set of promises.

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/util/Multiplex.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Multiplex.ts#L13)

***

### add()

> **add**(`worker`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `worker` | `Promise`\<`unknown`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/util/Multiplex.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Multiplex.ts#L11)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/util/Multiplex.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Multiplex.ts#L12)
