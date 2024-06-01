[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / ActionTracer

# Class: `abstract` ActionTracer

This is an instrumentation interface that allows for recording of attribute I/O, commands, events and state
mutation.

Implemented as abstract class to allow for lookup by type in Environment.

## Constructors

### new ActionTracer()

> **new ActionTracer**(): [`ActionTracer`](ActionTracer.md)

#### Returns

[`ActionTracer`](ActionTracer.md)

## Methods

### record()

> `abstract` **record**(`action`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | [`Action`](../../../../behavior/cluster/export/-internal-/interfaces/Action.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/context/ActionTracer.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/ActionTracer.ts#L18)
