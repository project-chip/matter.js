[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / ActionTypeEnum

# Enumeration: ActionTypeEnum

[cluster](../modules/cluster.md).ActionTypeEnum

Types of actions.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 9.14.9.2

## Table of contents

### Enumeration Members

- [Alarm](cluster.ActionTypeEnum.md#alarm)
- [Automation](cluster.ActionTypeEnum.md#automation)
- [Exception](cluster.ActionTypeEnum.md#exception)
- [Notification](cluster.ActionTypeEnum.md#notification)
- [Other](cluster.ActionTypeEnum.md#other)
- [Scene](cluster.ActionTypeEnum.md#scene)
- [Sequence](cluster.ActionTypeEnum.md#sequence)

## Enumeration Members

### Alarm

• **Alarm** = ``6``

Higher priority notification

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:119](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L119)

___

### Automation

• **Automation** = ``3``

Control an automation (e.g. motion sensor controlling lights)

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:110](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L110)

___

### Exception

• **Exception** = ``4``

Sequence that will run when something doesn’t happen

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:113](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L113)

___

### Notification

• **Notification** = ``5``

Use the endpoints to send a message to user

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:116](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L116)

___

### Other

• **Other** = ``0``

Use this only when none of the other values applies

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:101](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L101)

___

### Scene

• **Scene** = ``1``

Bring the endpoints into a certain state

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:104](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L104)

___

### Sequence

• **Sequence** = ``2``

A sequence of states with a certain time pattern

#### Defined in

[packages/matter.js/src/cluster/ActionsCluster.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/ActionsCluster.ts#L107)
