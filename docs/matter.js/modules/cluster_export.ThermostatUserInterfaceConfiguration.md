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

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `keypadLockout`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`KeypadLockout`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`ScheduleProgrammingVisibility`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TemperatureDisplayMode`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Thermostat User Interface Configuration

This cluster provides an interface to allow configuration of the user interface for a thermostat, or a
thermostat controller device, that supports a keypad and LCD screen.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.5

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:98](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L98)
