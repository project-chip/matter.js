[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [PowerSource](../modules/exports_cluster.PowerSource.md) / PowerSourceStatus

# Enumeration: PowerSourceStatus

[exports/cluster](../modules/exports_cluster.md).[PowerSource](../modules/exports_cluster.PowerSource.md).PowerSourceStatus

**`See`**

MatterCoreSpecificationV1_1 § 11.7.5.4

## Table of contents

### Enumeration Members

- [Active](exports_cluster.PowerSource.PowerSourceStatus.md#active)
- [Standby](exports_cluster.PowerSource.PowerSourceStatus.md#standby)
- [Unavailable](exports_cluster.PowerSource.PowerSourceStatus.md#unavailable)
- [Unspecified](exports_cluster.PowerSource.PowerSourceStatus.md#unspecified)

## Enumeration Members

### Active

• **Active** = ``1``

Indicate the source is available and currently supplying power

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:21

___

### Standby

• **Standby** = ``2``

Indicate the source is available, but is not currently supplying power

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:25

___

### Unavailable

• **Unavailable** = ``3``

Indicate the source is not currently available to supply power

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:29

___

### Unspecified

• **Unspecified** = ``0``

Indicate the source status is not specified

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/PowerSourceCluster.d.ts:17
