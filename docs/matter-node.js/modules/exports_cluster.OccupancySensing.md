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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `occupancySensorType`: [`Attribute`](exports_cluster.md#attribute)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number` \| ``null``, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number` \| ``null``, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](exports_cluster.md#optionalwritableattribute)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>

Occupancy Sensing

Attributes and commands for configuring occupancy sensing, and reporting occupancy status.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 2.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:67

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

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:16

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

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:46
