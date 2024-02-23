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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `occupancySensorType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`OccupancySensorType`](../enums/exports_cluster.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` ; `name`: ``"OccupancySensing"`` ; `revision`: ``3``  }\>

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
| `occupied` | [`BitFlag`](exports_schema.md#bitflag) | Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied. |

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
| `physicalContact` | [`BitFlag`](exports_schema.md#bitflag) | Indicates a physical contact sensor. |
| `pir` | [`BitFlag`](exports_schema.md#bitflag) | Indicates a passive infrared sensor. |
| `ultrasonic` | [`BitFlag`](exports_schema.md#bitflag) | Indicates a ultrasonic sensor. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OccupancySensingCluster.d.ts:46
