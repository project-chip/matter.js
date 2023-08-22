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

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L29)

___

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `ballastFactorAdjustment`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `ballastStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `ballastNonOperational`: [`BitFlag`](schema_export.md#bitflag-1) ; `lampFailure`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `intrinsicBallastFactor`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampAlarmMode`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `lampBurnHours`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `lampBurnHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampBurnHoursTripPoint`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampManufacturer`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `lampQuantity`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `lampRatedHours`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `lampType`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `maxLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `minLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `physicalMaxLevel`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `physicalMinLevel`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Ballast Configuration

Attributes and commands for configuring a lighting ballast.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 3.3

#### Defined in

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L45)

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

[packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/BallastConfigurationCluster.ts#L36)
