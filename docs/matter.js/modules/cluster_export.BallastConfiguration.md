[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BallastConfiguration

# Namespace: BallastConfiguration

[cluster/export](cluster_export.md).BallastConfiguration

## Table of contents

### Variables

- [BallastStatus](cluster_export.BallastConfiguration.md#ballaststatus)
- [Cluster](cluster_export.BallastConfiguration.md#cluster)
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

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:29](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L29)

___

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `ballastNonOperational`: [`BitFlag`](schema_export.md#bitflag) ; `lampFailure`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `lampBurnHours`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `lampQuantity`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>  } ; `id`: ``769`` = 0x301; `name`: ``"BallastConfiguration"`` = "BallastConfiguration"; `revision`: ``4`` = 4 }\>

Ballast Configuration

Attributes and commands for configuring a lighting ballast.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.3

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:45](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L45)

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

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:36](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L36)
