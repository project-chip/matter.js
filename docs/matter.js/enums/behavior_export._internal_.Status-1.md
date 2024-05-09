[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [\<internal\>](../modules/behavior_export._internal_.md) / Status

# Enumeration: Status

[behavior/export](../modules/behavior_export.md).[\<internal\>](../modules/behavior_export._internal_.md).Status

The lifecycle of a transaction adheres to the following discrete stages.

## Table of contents

### Enumeration Members

- [CommittingPhaseOne](behavior_export._internal_.Status-1.md#committingphaseone)
- [CommittingPhaseTwo](behavior_export._internal_.Status-1.md#committingphasetwo)
- [Destroyed](behavior_export._internal_.Status-1.md#destroyed)
- [Exclusive](behavior_export._internal_.Status-1.md#exclusive)
- [ReadOnly](behavior_export._internal_.Status-1.md#readonly)
- [RollingBack](behavior_export._internal_.Status-1.md#rollingback)
- [Shared](behavior_export._internal_.Status-1.md#shared)
- [Waiting](behavior_export._internal_.Status-1.md#waiting)

## Enumeration Members

### CommittingPhaseOne

• **CommittingPhaseOne** = ``"committing phase one"``

Transaction is in the process of committing, phase one.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L38)

___

### CommittingPhaseTwo

• **CommittingPhaseTwo** = ``"committing phase two"``

Transaction is in the process of committing, phase two.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L43)

___

### Destroyed

• **Destroyed** = ``"destroyed"``

Transaction is destroyed, no further operations permitted.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L53)

___

### Exclusive

• **Exclusive** = ``"exclusive"``

Transaction has exclusive access.  Reads will maintain consistency
and writes are allowed.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L33)

___

### ReadOnly

• **ReadOnly** = ``"read only"``

Transaction may be used only for read operations.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L17)

___

### RollingBack

• **RollingBack** = ``"rolling back"``

Transaction is in the process of rolling back.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L48)

___

### Shared

• **Shared** = ``"shared"``

Transaction is registered but there are no ACID guarantees.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L22)

___

### Waiting

• **Waiting** = ``"waiting"``

Transaction is waiting to obtain exclusive access to resources.

#### Defined in

[packages/matter.js/src/behavior/state/transaction/Status.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/transaction/Status.ts#L27)
