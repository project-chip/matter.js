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

MatterSpecification.v11.Core § 11.18.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L139)

___

### PakeParameterError

• **PakeParameterError** = ``3``

Provided PAKE parameters were incorrectly formatted or otherwise invalid

**`See`**

MatterSpecification.v11.Core § 11.18.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L146)

___

### WindowNotOpen

• **WindowNotOpen** = ``4``

No commissioning window was currently open

**`See`**

MatterSpecification.v11.Core § 11.18.6

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L153)
