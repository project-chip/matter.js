[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / LocalizationConfiguration

# Namespace: LocalizationConfiguration

[cluster/export](cluster_export.md).LocalizationConfiguration

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.LocalizationConfiguration.Cluster.md)

### Variables

- [Cluster](cluster_export.LocalizationConfiguration.md#cluster)
- [ClusterInstance](cluster_export.LocalizationConfiguration.md#clusterinstance)
- [Complete](cluster_export.LocalizationConfiguration.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.LocalizationConfiguration.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L67)

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L69)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `activeLocale`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\> ; `supportedLocales`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`[], `any`\>  } ; `id`: ``43`` = 0x2b; `name`: ``"LocalizationConfiguration"`` = "LocalizationConfiguration"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.LocalizationConfiguration.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L20)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.LocalizationConfiguration.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L71)
