[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md) / CommissioningError

# Enumeration: CommissioningError

[cluster/export](../modules/cluster_export.md).[GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md).CommissioningError

This enumeration is used by several response commands in this cluster to indicate particular errors.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.4.1

## Table of contents

### Enumeration Members

- [BusyWithOtherAdmin](cluster_export.GeneralCommissioning.CommissioningError.md#busywithotheradmin)
- [InvalidAuthentication](cluster_export.GeneralCommissioning.CommissioningError.md#invalidauthentication)
- [NoFailSafe](cluster_export.GeneralCommissioning.CommissioningError.md#nofailsafe)
- [Ok](cluster_export.GeneralCommissioning.CommissioningError.md#ok)
- [ValueOutsideRange](cluster_export.GeneralCommissioning.CommissioningError.md#valueoutsiderange)

## Enumeration Members

### BusyWithOtherAdmin

• **BusyWithOtherAdmin** = ``4``

Attempting to arm fail- safe or execute CommissioningComplete from a fabric different than the one
associated with the current fail- safe context.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L118)

___

### InvalidAuthentication

• **InvalidAuthentication** = ``2``

Executed CommissioningComplete outside CASE session.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L107)

___

### NoFailSafe

• **NoFailSafe** = ``3``

Executed CommissioningComplete when there was no active Fail-Safe context.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L112)

___

### Ok

• **Ok** = ``0``

No error

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:96](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L96)

___

### ValueOutsideRange

• **ValueOutsideRange** = ``1``

Attempting to set regulatory configuration to a region or indoor/outdoor mode for which the server does not
have proper configuration.

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:102](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L102)
