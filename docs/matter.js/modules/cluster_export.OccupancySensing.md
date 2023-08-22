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

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `occupancy`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `occupied`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `occupancySensorType`: [`Attribute`](cluster_export.md#attribute)<[`OccupancySensorType`](../enums/cluster_export.OccupancySensing.OccupancySensorType.md), `any`\> ; `occupancySensorTypeBitmap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `physicalContact`: [`BitFlag`](schema_export.md#bitflag-1) ; `pir`: [`BitFlag`](schema_export.md#bitflag-1) ; `ultrasonic`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `physicalContactOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `physicalContactUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `pirOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `pirUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `pirUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `ultrasonicOccupiedToUnoccupiedDelay`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedDelay`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `ultrasonicUnoccupiedToOccupiedThreshold`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Occupancy Sensing

Attributes and commands for configuring occupancy sensing, and reporting occupancy status.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L80)

___

### OccupancyBitmap

• `Const` **OccupancyBitmap**: `Object`

All other bits are reserved.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.5.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `occupied` | [`BitFlag`](schema_export.md#bitflag-1) | Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied. |

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L21)

___

### OccupancySensorTypeBitmap

• `Const` **OccupancySensorTypeBitmap**: `Object`

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 2.7.5.3

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `physicalContact` | [`BitFlag`](schema_export.md#bitflag-1) | Indicates a physical contact sensor. |
| `pir` | [`BitFlag`](schema_export.md#bitflag-1) | Indicates a passive infrared sensor. |
| `ultrasonic` | [`BitFlag`](schema_export.md#bitflag-1) | Indicates a ultrasonic sensor. |

#### Defined in

[packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts:56](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OccupancySensingCluster.ts#L56)
