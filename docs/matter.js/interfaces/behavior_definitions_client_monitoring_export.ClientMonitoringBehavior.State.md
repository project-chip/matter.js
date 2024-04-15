[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/client-monitoring/export](../modules/behavior_definitions_client_monitoring_export.md) / [ClientMonitoringBehavior](../modules/behavior_definitions_client_monitoring_export.ClientMonitoringBehavior.md) / State

# Interface: State

[behavior/definitions/client-monitoring/export](../modules/behavior_definitions_client_monitoring_export.md).[ClientMonitoringBehavior](../modules/behavior_definitions_client_monitoring_export.ClientMonitoringBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_client_monitoring_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [activeModeInterval](behavior_definitions_client_monitoring_export.ClientMonitoringBehavior.State.md#activemodeinterval)
- [activeModeThreshold](behavior_definitions_client_monitoring_export.ClientMonitoringBehavior.State.md#activemodethreshold)
- [expectedClients](behavior_definitions_client_monitoring_export.ClientMonitoringBehavior.State.md#expectedclients)
- [idleModeInterval](behavior_definitions_client_monitoring_export.ClientMonitoringBehavior.State.md#idlemodeinterval)

## Properties

### activeModeInterval

• **activeModeInterval**: `number`

#### Inherited from

StateType.activeModeInterval

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L63)

___

### activeModeThreshold

• **activeModeThreshold**: `number`

#### Inherited from

StateType.activeModeThreshold

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L64)

___

### expectedClients

• **expectedClients**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[]

#### Inherited from

StateType.expectedClients

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L65)

___

### idleModeInterval

• **idleModeInterval**: `number`

#### Inherited from

StateType.idleModeInterval

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L62)
