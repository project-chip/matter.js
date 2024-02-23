[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OccupancySensing

# Namespace: OccupancySensing

[cluster/export](cluster_export.md).OccupancySensing

## Table of contents

### Enumerations

- [OccupancySensorType](../enums/cluster_export.OccupancySensing.OccupancySensorType.md)

### Variables

- [Cluster](cluster_export.OccupancySensing.md#cluster)
- [OccupancyBitmap](cluster_export.OccupancySensing.md#occupancybitmap)
- [OccupancySensorTypeBitmap](cluster_export.OccupancySensing.md#occupancysensortypebitmap)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OccupancySensorType`](../enums/cluster_export.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)\<\{ `physicalContact`: [`BitFlag`](schema_export.md#bitflag) ; `pir`: [`BitFlag`](schema_export.md#bitflag) ; `ultrasonic`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` = 0x406; `name`: ``"OccupancySensing"`` = "OccupancySensing"; `revision`: ``3`` = 3 }\>

Occupancy Sensing

Attributes and commands for configuring occupancy sensing, and reporting occupancy status.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:81](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L81)

___

### OccupancyBitmap

• `Const` **OccupancyBitmap**: `Object`

All other bits are reserved.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.5.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `occupied` | [`BitFlag`](schema_export.md#bitflag) | Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied. |

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:22](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L22)

___

### OccupancySensorTypeBitmap

• `Const` **OccupancySensorTypeBitmap**: `Object`

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.5.3

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `physicalContact` | [`BitFlag`](schema_export.md#bitflag) | Indicates a physical contact sensor. |
| `pir` | [`BitFlag`](schema_export.md#bitflag) | Indicates a passive infrared sensor. |
| `ultrasonic` | [`BitFlag`](schema_export.md#bitflag) | Indicates a ultrasonic sensor. |

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:57](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L57)
