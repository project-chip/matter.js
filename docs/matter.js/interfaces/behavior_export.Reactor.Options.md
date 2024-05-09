[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [Reactor](../modules/behavior_export.Reactor.md) / Options

# Interface: Options

[behavior/export](../modules/behavior_export.md).[Reactor](../modules/behavior_export.Reactor.md).Options

Configurable settings for [Behavior.reactTo](../classes/behavior_export.Behavior-1.md#reactto).

## Table of contents

### Properties

- [lock](behavior_export.Reactor.Options.md#lock)
- [offline](behavior_export.Reactor.Options.md#offline)
- [once](behavior_export.Reactor.Options.md#once)

## Properties

### lock

• `Optional` **lock**: ``true`` \| [`Resource`](behavior_export._internal_.Resource-1.md) \| [`Resource`](behavior_export._internal_.Resource-1.md)[]

Designate resources for which this reaction requires exclusive write access.

You may specify lock as a resource (e.g. a [Behavior](../classes/behavior_export.Behavior-1.md)) or an array of resources.  Or specify "true" to
lock the reacting behavior.

If set:

  - The transaction of [Behavior.context](../classes/behavior_export.Behavior-1.md#context) for the reacting [Behavior](../classes/behavior_export.Behavior-1.md) will be exclusive during
    reaction

  - The transaction will own locks on the designated resources

  - The reaction will defer until the resource locks become available

#### Defined in

[packages/matter.js/src/behavior/Reactor.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Reactor.ts#L73)

___

### offline

• `Optional` **offline**: `boolean`

Controls the context in which reaction Matter.js invokes a reactor.

  - If false (the default), the reactor runs in the same context as the emitter, or a dedicated offline
    context if the emitter's context is unavailable.  Errors thrown by the reactor interrupt the emitter.

  - If true, the reactor runs in a dedicated, offline context.  Errors thrown by the reactor are logged and
    won't affect the emitter

#### Defined in

[packages/matter.js/src/behavior/Reactor.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Reactor.ts#L56)

___

### once

• `Optional` **once**: `boolean`

Only react the next time the event emits.

#### Defined in

[packages/matter.js/src/behavior/Reactor.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Reactor.ts#L78)
