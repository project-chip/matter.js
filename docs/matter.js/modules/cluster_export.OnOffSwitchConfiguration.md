[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OnOffSwitchConfiguration

# Namespace: OnOffSwitchConfiguration

[cluster/export](cluster_export.md).OnOffSwitchConfiguration

## Table of contents

### Enumerations

- [SwitchActions](../enums/cluster_export.OnOffSwitchConfiguration.SwitchActions.md)
- [SwitchType](../enums/cluster_export.OnOffSwitchConfiguration.SwitchType.md)

### Variables

- [Cluster](cluster_export.OnOffSwitchConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `switchActions`: [`WritableAttribute`](cluster_export.md#writableattribute)\<[`SwitchActions`](../enums/cluster_export.OnOffSwitchConfiguration.SwitchActions.md), `any`\> ; `switchType`: [`Attribute`](cluster_export.md#attribute)\<[`SwitchType`](../enums/cluster_export.OnOffSwitchConfiguration.SwitchType.md), `any`\>  } ; `id`: ``7`` = 0x7; `name`: ``"OnOffSwitchConfiguration"`` = "OnOffSwitchConfiguration"; `revision`: ``1`` = 1 }\>

On/off Switch Configuration

Attributes and commands for configuring On/Off switching devices.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:37](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L37)
