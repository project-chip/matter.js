[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / ActionTracer

# Class: ActionTracer

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).ActionTracer

This is an instrumentation interface that allows for recording of attribute I/O, commands, events and state
mutation.

Implemented as abstract class to allow for lookup by type in Environment.

## Table of contents

### Constructors

- [constructor](node_export._internal_.ActionTracer-1.md#constructor)

### Methods

- [record](node_export._internal_.ActionTracer-1.md#record)

## Constructors

### constructor

• **new ActionTracer**(): [`ActionTracer`](node_export._internal_.ActionTracer-1.md)

#### Returns

[`ActionTracer`](node_export._internal_.ActionTracer-1.md)

## Methods

### record

▸ **record**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../interfaces/behavior_cluster_export._internal_.Action.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/context/ActionTracer.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/ActionTracer.ts#L18)
