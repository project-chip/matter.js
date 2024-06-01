[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / Destructable

# Interface: Destructable

Standard interface for disposing of object resources.

## Properties

### \[asyncDispose\]()?

> `optional` **\[asyncDispose\]**: () => [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/common/Lifecycle.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L106)

***

### \[dispose\]()?

> `optional` **\[dispose\]**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/common/Lifecycle.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L104)

## Methods

### close()

> **close**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Source

[packages/matter.js/src/common/Lifecycle.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L102)
