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

[packages/matter.js/src/common/Lifecycle.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L83)
