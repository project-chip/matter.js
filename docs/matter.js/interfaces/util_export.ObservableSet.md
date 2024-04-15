[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / ObservableSet

# Interface: ObservableSet\<T\>

[util/export](../modules/util_export.md).ObservableSet

Set change events.

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`BasicSet`](../classes/util_export.BasicSet.md)
- [`Parts`](../classes/node_export._internal_.Parts.md)

## Table of contents

### Accessors

- [added](util_export.ObservableSet.md#added)
- [deleted](util_export.ObservableSet.md#deleted)

## Accessors

### added

• `get` **added**(): [`Observable`](util_export.Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](util_export.Observable.md)\<[`T`], `void`\>

#### Defined in

[packages/matter.js/src/util/Set.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L31)

___

### deleted

• `get` **deleted**(): [`Observable`](util_export.Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](util_export.Observable.md)\<[`T`], `void`\>

#### Defined in

[packages/matter.js/src/util/Set.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L32)
