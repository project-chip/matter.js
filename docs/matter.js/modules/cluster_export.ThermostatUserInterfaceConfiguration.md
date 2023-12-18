[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ThermostatUserInterfaceConfiguration

# Namespace: ThermostatUserInterfaceConfiguration

[cluster/export](cluster_export.md).ThermostatUserInterfaceConfiguration

## Table of contents

### Enumerations

- [KeypadLockout](../enums/cluster_export.ThermostatUserInterfaceConfiguration.KeypadLockout.md)
- [ScheduleProgrammingVisibility](../enums/cluster_export.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md)
- [TemperatureDisplayMode](../enums/cluster_export.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md)

### Variables

- [Cluster](cluster_export.ThermostatUserInterfaceConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`KeypadLockout`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)\<[`ScheduleProgrammingVisibility`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`TemperatureDisplayMode`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` = 0x204; `name`: ``"ThermostatUserInterfaceConfiguration"`` = "ThermostatUserInterfaceConfiguration"; `revision`: ``2`` = 2 }\>

Thermostat User Interface Configuration

This cluster provides an interface to allow configuration of the user interface for a thermostat, or a
thermostat controller device, that supports a keypad and LCD screen.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:94](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L94)
