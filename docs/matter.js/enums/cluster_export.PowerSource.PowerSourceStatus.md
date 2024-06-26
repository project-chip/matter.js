[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / PowerSourceStatus

# Enumeration: PowerSourceStatus

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).PowerSourceStatus

**`See`**

MatterSpecification.v11.Core § 11.7.5.4

## Table of contents

### Enumeration Members

- [Active](cluster_export.PowerSource.PowerSourceStatus.md#active)
- [Standby](cluster_export.PowerSource.PowerSourceStatus.md#standby)
- [Unavailable](cluster_export.PowerSource.PowerSourceStatus.md#unavailable)
- [Unspecified](cluster_export.PowerSource.PowerSourceStatus.md#unspecified)

## Enumeration Members

### Active

• **Active** = ``1``

Indicate the source is available and currently supplying power

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:897](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L897)

___

### Standby

• **Standby** = ``2``

Indicate the source is available, but is not currently supplying power

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:902](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L902)

___

### Unavailable

• **Unavailable** = ``3``

Indicate the source is not currently available to supply power

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:907](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L907)

___

### Unspecified

• **Unspecified** = ``0``

Indicate the source status is not specified

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:892](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L892)
