[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / OccupancySensing

# Namespace: OccupancySensing

[cluster/export](cluster_export.md).OccupancySensing

## Table of contents

### Enumerations

- [OccupancySensorType](../enums/cluster_export.OccupancySensing.OccupancySensorType.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.OccupancySensing.Cluster.md)

### Variables

- [Cluster](cluster_export.OccupancySensing.md#cluster)
- [ClusterInstance](cluster_export.OccupancySensing.md#clusterinstance)
- [Complete](cluster_export.OccupancySensing.md#complete)
- [OccupancyBitmap](cluster_export.OccupancySensing.md#occupancybitmap)
- [OccupancySensorTypeBitmap](cluster_export.OccupancySensing.md#occupancysensortypebitmap)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:240](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L240)

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:242](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L242)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `occupancy`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `occupied`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`OccupancySensorType`](../enums/cluster_export.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `physicalContact`: [`BitFlag`](schema_export.md#bitflag) ; `pir`: [`BitFlag`](schema_export.md#bitflag) ; `ultrasonic`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\>  } ; `id`: ``1030`` = 0x406; `name`: ``"OccupancySensing"`` = "OccupancySensing"; `revision`: ``3`` = 3 }\>

**`See`**

[Cluster](cluster_export.OccupancySensing.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L79)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.OccupancySensing.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:243](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L243)

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

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:24](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L24)

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

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:59](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L59)
