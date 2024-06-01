[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [PumpConfigurationAndControl](../README.md) / OperationMode

# Enumeration: OperationMode

## See

MatterSpecification.v11.Cluster § 4.2.6.2

## Enumeration Members

### Local

> **Local**: `3`

This value sets the pump to run with the local settings of the pump, regardless of what these are.

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L136)

***

### Maximum

> **Maximum**: `2`

This value sets the pump to run at its maximum possible speed.

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L131)

***

### Minimum

> **Minimum**: `1`

This value sets the pump to run at the minimum possible speed it can without being stopped.

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L126)

***

### Normal

> **Normal**: `0`

The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode
attribute.

If the pump is running in this operation mode the setpoint is an internal variable which may be controlled
between 0% and 100%, e.g., by means of the Level Control cluster

#### See

MatterSpecification.v11.Cluster § 4.2.6.2.1

#### Source

[packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PumpConfigurationAndControlCluster.ts#L121)
