[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / Cancellable

# Interface: Cancellable

[exports/common](../modules/exports_common.md).Cancellable

Standard interface for objects supporting a task that may be aborted or stopped prior to destruction.

## Table of contents

### Methods

- [cancel](exports_common.Cancellable.md#cancel)

## Methods

### cancel

▸ **cancel**(): `void`

Stop the object's primary activity.  This should result in termination as quickly as possible.

Cancellation have no effect if the object is cancelled or otherwise in a state where cancellation is irrelevant.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:56
