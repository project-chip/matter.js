[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PumpConfigurationAndControl](../modules/cluster_export.PumpConfigurationAndControl.md) / OperationMode

# Enumeration: OperationMode

[cluster/export](../modules/cluster_export.md).[PumpConfigurationAndControl](../modules/cluster_export.PumpConfigurationAndControl.md).OperationMode

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.2

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

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:145](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L145)

___

### Maximum

• **Maximum** = ``2``

This value sets the pump to run at its maximum possible speed.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:140](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L140)

___

### Minimum

• **Minimum** = ``1``

This value sets the pump to run at the minimum possible speed it can without being stopped.

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:135](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L135)

___

### Normal

• **Normal** = ``0``

The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode
attribute.

If the pump is running in this operation mode the setpoint is an internal variable which may be controlled
between 0% and 100%, e.g., by means of the Level Control cluster

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.2.6.2.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L130)
