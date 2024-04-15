[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / Destructable

# Interface: Destructable

[common/export](../modules/common_export.md).Destructable

Standard interface for disposing of object resources.

## Table of contents

### Properties

- [[asyncDispose]](common_export.Destructable.md#[asyncdispose])
- [[dispose]](common_export.Destructable.md#[dispose])

### Methods

- [close](common_export.Destructable.md#close)

## Properties

### [asyncDispose]

• `Optional` **[asyncDispose]**: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Type declaration

▸ (): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

##### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L106)

___

### [dispose]

• `Optional` **[dispose]**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L104)

## Methods

### close

▸ **close**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L102)
