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

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:16

___

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `ballastFactorAdjustment`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `ballastStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `lampQuantity`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`number` \| ``null``, `any`\> ; `lampType`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>

Ballast Configuration

Attributes and commands for configuring a lighting ballast.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 3.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:35

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

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:25
