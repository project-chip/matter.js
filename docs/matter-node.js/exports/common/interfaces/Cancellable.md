[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / Cancellable

# Interface: Cancellable

Standard interface for objects supporting a task that may be aborted or stopped prior to destruction.

## Methods

### cancel()

> **cancel**(): `void`

Stop the object's primary activity.  This should result in termination as quickly as possible.

Cancellation have no effect if the object is cancelled or otherwise in a state where cancellation is irrelevant.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/common/Lifecycle.d.ts:56
