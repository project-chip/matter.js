[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BallastConfiguration

# Namespace: BallastConfiguration

[exports/cluster](exports_cluster.md).BallastConfiguration

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.BallastConfiguration.Cluster.md)

### Variables

- [BallastStatus](exports_cluster.BallastConfiguration.md#ballaststatus)
- [Cluster](exports_cluster.BallastConfiguration.md#cluster)
- [ClusterInstance](exports_cluster.BallastConfiguration.md#clusterinstance)
- [Complete](exports_cluster.BallastConfiguration.md#complete)
- [LampAlarmMode](exports_cluster.BallastConfiguration.md#lampalarmmode)

## Variables

### BallastStatus

• `Const` **BallastStatus**: `Object`

The value of the BallastConfiguration ballastStatus attribute

**`See`**

MatterSpecification.v11.Cluster § 3.3.6.3

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ballastNonOperational` | [`BitFlag`](exports_schema.md#bitflag) |
| `lampFailure` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:17

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.BallastConfiguration.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:190

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:192

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `ballastStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `lampType`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` ; `name`: ``"BallastConfiguration"`` ; `revision`: ``4``  }\>

**`See`**

[Cluster](exports_cluster.BallastConfiguration.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:32

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.BallastConfiguration.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:193

___

### LampAlarmMode

• `Const` **LampAlarmMode**: `Object`

The value of the BallastConfiguration lampAlarmMode attribute

**`See`**

MatterSpecification.v11.Cluster § 3.3.9.5

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lampBurnHours` | [`BitFlag`](exports_schema.md#bitflag) |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BallastConfigurationCluster.d.ts:26
