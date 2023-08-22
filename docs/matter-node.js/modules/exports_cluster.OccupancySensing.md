[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / OccupancySensing

# Namespace: OccupancySensing

[exports/cluster](exports_cluster.md).OccupancySensing

## Table of contents

### Enumerations

- [OccupancySensorType](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md)

### Variables

- [Cluster](exports_cluster.OccupancySensing.md#cluster)
- [OccupancyBitmap](exports_cluster.OccupancySensing.md#occupancybitmap)
- [OccupancySensorTypeBitmap](exports_cluster.OccupancySensing.md#occupancysensortypebitmap)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

Occupancy Sensing

Attributes and commands for configuring occupancy sensing, and reporting occupancy status.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OccupancySensingCluster.d.ts:66

___

### OccupancyBitmap

• `Const` **OccupancyBitmap**: `Object`

All other bits are reserved.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.7.5.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `occupied` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied. |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OccupancySensingCluster.d.ts:15

___

### OccupancySensorTypeBitmap

• `Const` **OccupancySensorTypeBitmap**: `Object`

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.7.5.3

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `physicalContact` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicates a physical contact sensor. |
| `pir` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicates a passive infrared sensor. |
| `ultrasonic` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicates a ultrasonic sensor. |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OccupancySensingCluster.d.ts:45
