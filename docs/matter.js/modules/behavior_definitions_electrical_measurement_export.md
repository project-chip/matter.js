[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/electrical-measurement/export

# Module: behavior/definitions/electrical-measurement/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_electrical_measurement_export._internal_.md)

### Namespaces

- [ElectricalMeasurementBehavior](behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior.md)
- [ElectricalMeasurementInterface](behavior_definitions_electrical_measurement_export.ElectricalMeasurementInterface.md)

### Classes

- [ElectricalMeasurementServer](../classes/behavior_definitions_electrical_measurement_export.ElectricalMeasurementServer.md)

### Interfaces

- [ElectricalMeasurementBehavior](../interfaces/behavior_definitions_electrical_measurement_export.ElectricalMeasurementBehavior-1.md)

### Type Aliases

- [ElectricalMeasurementInterface](behavior_definitions_electrical_measurement_export.md#electricalmeasurementinterface)
- [GetMeasurementProfileCommandRequest](behavior_definitions_electrical_measurement_export.md#getmeasurementprofilecommandrequest)

### Variables

- [ElectricalMeasurementBehavior](behavior_definitions_electrical_measurement_export.md#electricalmeasurementbehavior)

## Type Aliases

### ElectricalMeasurementInterface

Ƭ **ElectricalMeasurementInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_electrical_measurement_export.ElectricalMeasurementInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L15)

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L22)

___

### GetMeasurementProfileCommandRequest

Ƭ **GetMeasurementProfileCommandRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetMeasurementProfileCommandRequest`](cluster_export.ElectricalMeasurement.md#tlvgetmeasurementprofilecommandrequest)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementInterface.ts#L13)

## Variables

### ElectricalMeasurementBehavior

• `Const` **ElectricalMeasurementBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ElectricalMeasurement.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ElectricalMeasurementInterface`](behavior_definitions_electrical_measurement_export.md#electricalmeasurementinterface)\>, [`ElectricalMeasurementInterface`](behavior_definitions_electrical_measurement_export.md#electricalmeasurementinterface)\>

ElectricalMeasurementBehavior is the base class for objects that support interaction with ElectricalMeasurement.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/electrical-measurement/ElectricalMeasurementBehavior.ts#L24)
