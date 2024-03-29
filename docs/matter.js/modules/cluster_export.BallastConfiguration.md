[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BallastConfiguration

# Namespace: BallastConfiguration

[cluster/export](cluster_export.md).BallastConfiguration

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.BallastConfiguration.Cluster.md)

### Variables

- [BallastStatus](cluster_export.BallastConfiguration.md#ballaststatus)
- [Cluster](cluster_export.BallastConfiguration.md#cluster)
- [ClusterInstance](cluster_export.BallastConfiguration.md#clusterinstance)
- [Complete](cluster_export.BallastConfiguration.md#complete)
- [LampAlarmMode](cluster_export.BallastConfiguration.md#lampalarmmode)

## Variables

### BallastStatus

• `Const` **BallastStatus**: `Object`

The value of the BallastConfiguration ballastStatus attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.3.6.3

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ballastNonOperational` | [`BitFlag`](schema_export.md#bitflag) |
| `lampFailure` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:31](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L31)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.BallastConfiguration.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L243)

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:245](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L245)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `ballastNonOperational`: [`BitFlag`](schema_export.md#bitflag) ; `lampFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `lampBurnHours`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` = 0x301; `name`: ``"BallastConfiguration"`` = "BallastConfiguration"; `revision`: ``4`` = 4 }\>

**`See`**

[Cluster](cluster_export.BallastConfiguration.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:43](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L43)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.BallastConfiguration.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:246](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L246)

___

### LampAlarmMode

• `Const` **LampAlarmMode**: `Object`

The value of the BallastConfiguration lampAlarmMode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.3.9.5

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lampBurnHours` | [`BitFlag`](schema_export.md#bitflag) |

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:38](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L38)
