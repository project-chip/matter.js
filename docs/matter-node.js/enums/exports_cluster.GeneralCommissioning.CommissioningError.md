[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md) / CommissioningError

# Enumeration: CommissioningError

[exports/cluster](../modules/exports_cluster.md).[GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md).CommissioningError

This enumeration is used by several response commands in this cluster to indicate particular errors.

**`See`**

MatterSpecification.v11.Core § 11.9.4.1

## Table of contents

### Enumeration Members

- [BusyWithOtherAdmin](exports_cluster.GeneralCommissioning.CommissioningError.md#busywithotheradmin)
- [InvalidAuthentication](exports_cluster.GeneralCommissioning.CommissioningError.md#invalidauthentication)
- [NoFailSafe](exports_cluster.GeneralCommissioning.CommissioningError.md#nofailsafe)
- [Ok](exports_cluster.GeneralCommissioning.CommissioningError.md#ok)
- [ValueOutsideRange](exports_cluster.GeneralCommissioning.CommissioningError.md#valueoutsiderange)

## Enumeration Members

### BusyWithOtherAdmin

• **BusyWithOtherAdmin** = ``4``

Attempting to arm fail- safe or execute CommissioningComplete from a fabric different than the one
associated with the current fail- safe context.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:109

___

### InvalidAuthentication

• **InvalidAuthentication** = ``2``

Executed CommissioningComplete outside CASE session.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:100

___

### NoFailSafe

• **NoFailSafe** = ``3``

Executed CommissioningComplete when there was no active Fail-Safe context.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:104

___

### Ok

• **Ok** = ``0``

No error

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:91

___

### ValueOutsideRange

• **ValueOutsideRange** = ``1``

Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not
have proper configuration.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:96
