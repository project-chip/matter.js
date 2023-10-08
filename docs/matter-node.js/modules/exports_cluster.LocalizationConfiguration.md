[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / LocalizationConfiguration

# Namespace: LocalizationConfiguration

[exports/cluster](exports_cluster.md).LocalizationConfiguration

## Table of contents

### Variables

- [Cluster](exports_cluster.LocalizationConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `activeLocale`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`string`, `any`\> ; `supportedLocales`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`string`[], `any`\>  } ; `id`: ``43`` ; `name`: ``"LocalizationConfiguration"`` ; `revision`: ``1``  }\>

Localization Configuration

Nodes should be expected to be deployed to any and all regions of the world. These global regions may have
differing common languages, units of measurements, and numerical formatting standards. As such, Nodes that
visually or audibly convey information need a mechanism by which they can be configured to use a user’s
preferred language, units, etc.

This cluster supports an interface to a Node. It provides attributes for determining and configuring
localization information that a Node shall utilize when conveying values to a user.

**`See`**

MatterCoreSpecificationV1_1 § 11.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/LocalizationConfigurationCluster.d.ts:23
