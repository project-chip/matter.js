[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / Destructable

# Interface: Destructable

[exports/common](../modules/exports_common.md).Destructable

Standard interface for disposing of object resources.

## Table of contents

### Properties

- [[asyncDispose]](exports_common.Destructable.md#[asyncdispose])
- [[dispose]](exports_common.Destructable.md#[dispose])

### Methods

- [close](exports_common.Destructable.md#close)

## Properties

### [asyncDispose]

• `Optional` **[asyncDispose]**: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Type declaration

▸ (): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

##### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:64

___

### [dispose]

• `Optional` **[dispose]**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:63

## Methods

### close

▸ **close**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:62
