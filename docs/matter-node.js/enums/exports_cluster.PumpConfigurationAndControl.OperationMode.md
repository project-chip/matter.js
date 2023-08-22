[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PumpConfigurationAndControl](../modules/exports_cluster.PumpConfigurationAndControl.md) / OperationMode

# Enumeration: OperationMode

[exports/cluster](../modules/exports_cluster.md).[PumpConfigurationAndControl](../modules/exports_cluster.PumpConfigurationAndControl.md).OperationMode

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.2.6.2

## Table of contents

### Enumeration Members

- [Local](exports_cluster.PumpConfigurationAndControl.OperationMode.md#local)
- [Maximum](exports_cluster.PumpConfigurationAndControl.OperationMode.md#maximum)
- [Minimum](exports_cluster.PumpConfigurationAndControl.OperationMode.md#minimum)
- [Normal](exports_cluster.PumpConfigurationAndControl.OperationMode.md#normal)

## Enumeration Members

### Local

• **Local** = ``3``

This value sets the pump to run with the local settings of the pump, regardless of what these are.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:105

___

### Maximum

• **Maximum** = ``2``

This value sets the pump to run at its maximum possible speed.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:101

___

### Minimum

• **Minimum** = ``1``

This value sets the pump to run at the minimum possible speed it can without being stopped.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:97

___

### Normal

• **Normal** = ``0``

The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode
attribute.

If the pump is running in this operation mode the setpoint is an internal variable which may be controlled
between 0% and 100%, e.g., by means of the Level Control cluster

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.2.6.2.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PumpConfigurationAndControlCluster.d.ts:93
