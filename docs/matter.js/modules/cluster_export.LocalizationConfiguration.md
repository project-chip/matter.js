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

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:68](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L68)

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:70](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L70)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `activeLocale`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\> ; `supportedLocales`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`[], `any`\>  } ; `id`: ``43`` = 0x2b; `name`: ``"LocalizationConfiguration"`` = "LocalizationConfiguration"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.LocalizationConfiguration.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:21](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L21)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.LocalizationConfiguration.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:72](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L72)
