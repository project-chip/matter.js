[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / CommissioningError

# Enumeration: CommissioningError

[cluster](../modules/cluster.md).CommissioningError

This enumeration is used by several response commands in this cluster to indicate particular errors.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.9.5.1

## Table of contents

### Enumeration Members

- [BusyWithOtherAdmin](cluster.CommissioningError.md#busywithotheradmin)
- [InvalidAuthentication](cluster.CommissioningError.md#invalidauthentication)
- [NoFailSafe](cluster.CommissioningError.md#nofailsafe)
- [Ok](cluster.CommissioningError.md#ok)
- [ValueOutsideRange](cluster.CommissioningError.md#valueoutsiderange)

## Enumeration Members

### BusyWithOtherAdmin

• **BusyWithOtherAdmin** = ``4``

Attempting to arm fail-safe or execute CommissioningComplete from a fabric different than the one associated with the current fail-safe context.

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L51)

___

### InvalidAuthentication

• **InvalidAuthentication** = ``2``

Executed CommissioningComplete outside CASE session.

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L45)

___

### NoFailSafe

• **NoFailSafe** = ``3``

Executed CommissioningComplete when there was no active Fail-Safe context.

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L48)

___

### Ok

• **Ok** = ``0``

No error.

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L39)

___

### ValueOutsideRange

• **ValueOutsideRange** = ``1``

Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not have proper configuration.

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L42)
