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

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `switchActions`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`SwitchActions`](../enums/cluster_export.OnOffSwitchConfiguration.SwitchActions.md), `any`\> ; `switchType`: [`Attribute`](cluster_export.md#attribute)<[`SwitchType`](../enums/cluster_export.OnOffSwitchConfiguration.SwitchType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

On/off Switch Configuration

Attributes and commands for configuring On/Off switching devices.

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffSwitchConfigurationCluster.ts#L36)
