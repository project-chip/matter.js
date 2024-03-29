[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / ObservableSet

# Interface: ObservableSet\<T\>

[util/export](../modules/util_export.md).ObservableSet

Set change events.

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`BasicSet`](../classes/util_export.BasicSet.md)

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

packages/matter.js/dist/esm/util/Set.d.ts:27

___

### deleted

• `get` **deleted**(): [`Observable`](util_export.Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](util_export.Observable.md)\<[`T`], `void`\>

#### Defined in

packages/matter.js/dist/esm/util/Set.d.ts:28
