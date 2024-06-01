[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralCommissioning](../README.md) / CommissioningError

# Enumeration: CommissioningError

This enumeration is used by several response commands in this cluster to indicate particular errors.

## See

MatterSpecification.v11.Core § 11.9.4.1

## Enumeration Members

### BusyWithOtherAdmin

> **BusyWithOtherAdmin**: `4`

Attempting to arm fail- safe or execute CommissioningComplete from a fabric different than the one
associated with the current fail- safe context.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L128)

***

### InvalidAuthentication

> **InvalidAuthentication**: `2`

Executed CommissioningComplete outside CASE session.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L117)

***

### NoFailSafe

> **NoFailSafe**: `3`

Executed CommissioningComplete when there was no active Fail-Safe context.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L122)

***

### Ok

> **Ok**: `0`

No error

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L106)

***

### ValueOutsideRange

> **ValueOutsideRange**: `1`

Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not
have proper configuration.

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L112)
