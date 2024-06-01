[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/export](../../../README.md) / [Reactor](../README.md) / Options

# Interface: Options

Configurable settings for [Behavior.reactTo](../../../classes/Behavior.md#reactto).

## Properties

### lock?

> `optional` **lock**: `true` \| [`Resource`](../../../-internal-/interfaces/Resource.md) \| [`Resource`](../../../-internal-/interfaces/Resource.md)[]

Designate resources for which this reaction requires exclusive write access.

You may specify lock as a resource (e.g. a [Behavior](../../../classes/Behavior.md)) or an array of resources.  Or specify "true" to
lock the reacting behavior.

If set:

  - The transaction of [Behavior.context](../../../classes/Behavior.md#context) for the reacting [Behavior](../../../classes/Behavior.md) will be exclusive during
    reaction

  - The transaction will own locks on the designated resources

  - The reaction will defer until the resource locks become available

#### Source

[packages/matter.js/src/behavior/Reactor.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Reactor.ts#L73)

***

### offline?

> `optional` **offline**: `boolean`

Controls the context in which reaction Matter.js invokes a reactor.

  - If false (the default), the reactor runs in the same context as the emitter, or a dedicated offline
    context if the emitter's context is unavailable.  Errors thrown by the reactor interrupt the emitter.

  - If true, the reactor runs in a dedicated, offline context.  Errors thrown by the reactor are logged and
    won't affect the emitter

#### Source

[packages/matter.js/src/behavior/Reactor.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Reactor.ts#L56)

***

### once?

> `optional` **once**: `boolean`

Only react the next time the event emits.

#### Source

[packages/matter.js/src/behavior/Reactor.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Reactor.ts#L78)
