[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ThermostatUserInterfaceConfiguration

# Namespace: ThermostatUserInterfaceConfiguration

[exports/cluster](exports_cluster.md).ThermostatUserInterfaceConfiguration

## Table of contents

### Enumerations

- [KeypadLockout](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md)
- [ScheduleProgrammingVisibility](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md)
- [TemperatureDisplayMode](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md)

### Variables

- [Cluster](exports_cluster.ThermostatUserInterfaceConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`KeypadLockout`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<[`ScheduleProgrammingVisibility`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](exports_cluster.md#writableattribute)\<[`TemperatureDisplayMode`](../enums/exports_cluster.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` ; `name`: ``"ThermostatUserInterfaceConfiguration"`` ; `revision`: ``2``  }\>

Thermostat User Interface Configuration

This cluster provides an interface to allow configuration of the user interface for a thermostat, or a
thermostat controller device, that supports a keypad and LCD screen.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 4.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.d.ts:79
