[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/export](../../README.md) / [\<internal\>](../README.md) / Status

# Enumeration: Status

The lifecycle of a transaction adheres to the following discrete stages.

## Enumeration Members

### CommittingPhaseOne

> **CommittingPhaseOne**: `"committing phase one"`

Transaction is in the process of committing, phase one.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L38)

***

### CommittingPhaseTwo

> **CommittingPhaseTwo**: `"committing phase two"`

Transaction is in the process of committing, phase two.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L43)

***

### Destroyed

> **Destroyed**: `"destroyed"`

Transaction is destroyed, no further operations permitted.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L53)

***

### Exclusive

> **Exclusive**: `"exclusive"`

Transaction has exclusive access.  Reads will maintain consistency
and writes are allowed.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L33)

***

### ReadOnly

> **ReadOnly**: `"read only"`

Transaction may be used only for read operations.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L17)

***

### RollingBack

> **RollingBack**: `"rolling back"`

Transaction is in the process of rolling back.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L48)

***

### Shared

> **Shared**: `"shared"`

Transaction is registered but there are no ACID guarantees.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L22)

***

### Waiting

> **Waiting**: `"waiting"`

Transaction is waiting to obtain exclusive access to resources.

#### Source

[packages/matter.js/src/behavior/state/transaction/Status.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/transaction/Status.ts#L27)
