[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / LowPower

# Namespace: LowPower

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/LowPowerCluster.d.ts:34

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.sleep

> `readonly` **sleep**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command shall put the device into low power mode.

###### See

MatterSpecification.v11.Cluster § 1.9.3.1

##### id

> `readonly` **id**: `1288`

##### name

> `readonly` **name**: `"LowPower"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/LowPowerCluster.d.ts:14

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/LowPowerCluster.d.ts:37
