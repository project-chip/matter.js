[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BallastConfiguration

# Namespace: BallastConfiguration

[exports/cluster](exports_cluster.md).BallastConfiguration

## Table of contents

### Variables

- [BallastStatus](exports_cluster.BallastConfiguration.md#ballaststatus)
- [Cluster](exports_cluster.BallastConfiguration.md#cluster)
- [LampAlarmMode](exports_cluster.BallastConfiguration.md#lampalarmmode)

## Variables

### BallastStatus

• `Const` **BallastStatus**: `Object`

The value of the BallastConfiguration ballastStatus attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.3.6.3

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ballastNonOperational` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `lampFailure` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BallastConfigurationCluster.d.ts:15

___

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

Ballast Configuration

Attributes and commands for configuring a lighting ballast.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BallastConfigurationCluster.d.ts:34

___

### LampAlarmMode

• `Const` **LampAlarmMode**: `Object`

The value of the BallastConfiguration lampAlarmMode attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.3.9.5

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lampBurnHours` | [`BitFlag`](exports_schema.md#bitflag-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/BallastConfigurationCluster.d.ts:24
