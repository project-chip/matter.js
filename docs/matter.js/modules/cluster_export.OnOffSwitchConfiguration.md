[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OnOffSwitchConfiguration

# Namespace: OnOffSwitchConfiguration

[cluster/export](cluster_export.md).OnOffSwitchConfiguration

## Table of contents

### Enumerations

- [SwitchActions](../enums/cluster_export.OnOffSwitchConfiguration.SwitchActions.md)
- [SwitchType](../enums/cluster_export.OnOffSwitchConfiguration.SwitchType.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.OnOffSwitchConfiguration.Cluster.md)

### Variables

- [Cluster](cluster_export.OnOffSwitchConfiguration.md#cluster)
- [ClusterInstance](cluster_export.OnOffSwitchConfiguration.md#clusterinstance)
- [Complete](cluster_export.OnOffSwitchConfiguration.md#complete)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.OnOffSwitchConfiguration.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L52)

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L54)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `switchActions`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SwitchActions`](../enums/cluster_export.OnOffSwitchConfiguration.SwitchActions.md), `any`\> ; `switchType`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`SwitchType`](../enums/cluster_export.OnOffSwitchConfiguration.SwitchType.md), `any`\>  } ; `id`: ``7`` = 0x7; `name`: ``"OnOffSwitchConfiguration"`` = "OnOffSwitchConfiguration"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.OnOffSwitchConfiguration.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L37)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.OnOffSwitchConfiguration.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L55)
