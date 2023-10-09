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
| `ballastNonOperational` | [`BitFlag`](schema_export.md#bitflag-1) |
| `lampFailure` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:29

___

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `ballastFactorAdjustment`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `ballastNonOperational`: [`BitFlag`](schema_export.md#bitflag-1) ; `lampFailure`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `lampBurnHours`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `lampQuantity`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `id`: ``769`` = 0x301; `name`: ``"BallastConfiguration"`` = "BallastConfiguration"; `revision`: ``4`` = 4 }\>

Ballast Configuration

Attributes and commands for configuring a lighting ballast.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.3

#### Defined in

packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:45

___

### LampAlarmMode

• `Const` **LampAlarmMode**: `Object`

The value of the BallastConfiguration lampAlarmMode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.3.9.5

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lampBurnHours` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:36
