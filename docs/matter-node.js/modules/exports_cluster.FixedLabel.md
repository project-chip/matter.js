[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / FixedLabel

# Namespace: FixedLabel

[exports/cluster](exports_cluster.md).FixedLabel

## Table of contents

### Variables

- [Cluster](exports_cluster.FixedLabel.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

Fixed Label

This cluster provides a feature for the device to tag an endpoint with zero or more read only labels. Examples:

  • A bridge can use this to indicate grouping of bridged devices. For example: All bridged devices whose
    endpoints have an entry in their LabelList "room":"bedroom 2" are in the same (bed)room.

  • A manufacturer can use this to identify a characteristic of an endpoint. For example to identify the
    endpoints of a luminaire, one pointing up, the other pointing down, one of the endpoints would have a
    LabelList entry "orientation":"up" while the other would have "orientation":"down". Using such indication,
    the user interface of a Node controlling this luminaire knows which of the endpoints is which of the lights.

**`See`**

MatterCoreSpecificationV1_1 § 9.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FixedLabelCluster.d.ts:24
