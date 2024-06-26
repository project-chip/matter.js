[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / Startable

# Interface: Startable

[common/export](../modules/common_export.md).Startable

Standard interface for objects that have a primary task that may initiate after construction.

## Table of contents

### Methods

- [start](common_export.Startable.md#start)

## Methods

### start

▸ **start**(): `void`

Commence with the object's primary activity.

Start should have no effect if the object is already started.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:83](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/common/Lifecycle.ts#L83)
