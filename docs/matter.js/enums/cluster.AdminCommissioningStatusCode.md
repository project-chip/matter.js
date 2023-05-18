[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / AdminCommissioningStatusCode

# Enumeration: AdminCommissioningStatusCode

[cluster](../modules/cluster.md).AdminCommissioningStatusCode

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.18.9

## Table of contents

### Enumeration Members

- [Busy](cluster.AdminCommissioningStatusCode.md#busy)
- [PAKEParameterError](cluster.AdminCommissioningStatusCode.md#pakeparametererror)
- [WindowNotOpen](cluster.AdminCommissioningStatusCode.md#windownotopen)

## Enumeration Members

### Busy

• **Busy** = ``2``

Could not be completed because another commissioning is in progress.

#### Defined in

[packages/matter.js/src/cluster/AdminCommissioningCluster.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AdminCommissioningCluster.ts#L24)

___

### PAKEParameterError

• **PAKEParameterError** = ``3``

Provided PAKE parameters were incorrectly formatted or otherwise invalid.

#### Defined in

[packages/matter.js/src/cluster/AdminCommissioningCluster.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AdminCommissioningCluster.ts#L27)

___

### WindowNotOpen

• **WindowNotOpen** = ``4``

No commissioning window was currently open

#### Defined in

[packages/matter.js/src/cluster/AdminCommissioningCluster.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/AdminCommissioningCluster.ts#L30)
