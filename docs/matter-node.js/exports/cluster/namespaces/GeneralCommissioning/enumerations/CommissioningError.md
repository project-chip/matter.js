[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralCommissioning](../README.md) / CommissioningError

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

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:109

***

### InvalidAuthentication

> **InvalidAuthentication**: `2`

Executed CommissioningComplete outside CASE session.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:100

***

### NoFailSafe

> **NoFailSafe**: `3`

Executed CommissioningComplete when there was no active Fail-Safe context.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:104

***

### Ok

> **Ok**: `0`

No error

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:91

***

### ValueOutsideRange

> **ValueOutsideRange**: `1`

Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not
have proper configuration.

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:96
