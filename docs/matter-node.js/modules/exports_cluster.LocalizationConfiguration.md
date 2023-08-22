[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / LocalizationConfiguration

# Namespace: LocalizationConfiguration

[exports/cluster](exports_cluster.md).LocalizationConfiguration

## Table of contents

### Variables

- [Cluster](exports_cluster.LocalizationConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

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

packages/matter.js/dist/cjs/cluster/definitions/LocalizationConfigurationCluster.d.ts:22
