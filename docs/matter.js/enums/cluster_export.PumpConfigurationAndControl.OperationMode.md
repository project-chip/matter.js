[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PumpConfigurationAndControl](../modules/cluster_export.PumpConfigurationAndControl.md) / OperationMode

# Enumeration: OperationMode

[cluster/export](../modules/cluster_export.md).[PumpConfigurationAndControl](../modules/cluster_export.PumpConfigurationAndControl.md).OperationMode

**`See`**

MatterSpecification.v11.Cluster § 4.2.6.2

## Table of contents

### Enumeration Members

- [Local](cluster_export.PumpConfigurationAndControl.OperationMode.md#local)
- [Maximum](cluster_export.PumpConfigurationAndControl.OperationMode.md#maximum)
- [Minimum](cluster_export.PumpConfigurationAndControl.OperationMode.md#minimum)
- [Normal](cluster_export.PumpConfigurationAndControl.OperationMode.md#normal)

## Enumeration Members

### Local

• **Local** = ``3``

This value sets the pump to run with the local settings of the pump, regardless of what these are.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L136)

___

### Maximum

• **Maximum** = ``2``

This value sets the pump to run at its maximum possible speed.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L131)

___

### Minimum

• **Minimum** = ``1``

This value sets the pump to run at the minimum possible speed it can without being stopped.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L126)

___

### Normal

• **Normal** = ``0``

The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode
attribute.

If the pump is running in this operation mode the setpoint is an internal variable which may be controlled
between 0% and 100%, e.g., by means of the Level Control cluster

**`See`**

MatterSpecification.v11.Cluster § 4.2.6.2.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L121)
