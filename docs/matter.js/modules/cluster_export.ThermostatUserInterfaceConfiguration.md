[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ThermostatUserInterfaceConfiguration

# Namespace: ThermostatUserInterfaceConfiguration

[cluster/export](cluster_export.md).ThermostatUserInterfaceConfiguration

## Table of contents

### Enumerations

- [KeypadLockout](../enums/cluster_export.ThermostatUserInterfaceConfiguration.KeypadLockout.md)
- [ScheduleProgrammingVisibility](../enums/cluster_export.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md)
- [TemperatureDisplayMode](../enums/cluster_export.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.ThermostatUserInterfaceConfiguration.Cluster.md)

### Variables

- [Cluster](cluster_export.ThermostatUserInterfaceConfiguration.md#cluster)
- [ClusterInstance](cluster_export.ThermostatUserInterfaceConfiguration.md#clusterinstance)
- [Complete](cluster_export.ThermostatUserInterfaceConfiguration.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ThermostatUserInterfaceConfiguration.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L156)

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L158)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `keypadLockout`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`KeypadLockout`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.KeypadLockout.md), `any`\> ; `scheduleProgrammingVisibility`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`ScheduleProgrammingVisibility`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.md), `any`\> ; `temperatureDisplayMode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TemperatureDisplayMode`](../enums/cluster_export.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.md), `any`\>  } ; `id`: ``516`` = 0x204; `name`: ``"ThermostatUserInterfaceConfiguration"`` = "ThermostatUserInterfaceConfiguration"; `revision`: ``2`` = 2 }\>

**`See`**

[Cluster](cluster_export.ThermostatUserInterfaceConfiguration.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L90)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.ThermostatUserInterfaceConfiguration.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThermostatUserInterfaceConfigurationCluster.ts#L159)
