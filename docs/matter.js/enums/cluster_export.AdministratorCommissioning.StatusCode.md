[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md) / StatusCode

# Enumeration: StatusCode

[cluster/export](../modules/cluster_export.md).[AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md).StatusCode

## Table of contents

### Enumeration Members

- [Busy](cluster_export.AdministratorCommissioning.StatusCode.md#busy)
- [PakeParameterError](cluster_export.AdministratorCommissioning.StatusCode.md#pakeparametererror)
- [WindowNotOpen](cluster_export.AdministratorCommissioning.StatusCode.md#windownotopen)

## Enumeration Members

### Busy

• **Busy** = ``2``

Could not be completed because another commissioning is in progress

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:116](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L116)

___

### PakeParameterError

• **PakeParameterError** = ``3``

Provided PAKE parameters were incorrectly formatted or otherwise invalid

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:123](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L123)

___

### WindowNotOpen

• **WindowNotOpen** = ``4``

No commissioning window was currently open

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:130](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L130)
