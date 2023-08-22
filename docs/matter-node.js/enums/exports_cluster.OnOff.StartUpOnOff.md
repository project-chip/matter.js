[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OnOff](../modules/exports_cluster.OnOff.md) / StartUpOnOff

# Enumeration: StartUpOnOff

[exports/cluster](../modules/exports_cluster.md).[OnOff](../modules/exports_cluster.OnOff.md).StartUpOnOff

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.5.5.1

## Table of contents

### Enumeration Members

- [Off](exports_cluster.OnOff.StartUpOnOff.md#off)
- [On](exports_cluster.OnOff.StartUpOnOff.md#on)
- [Toggle](exports_cluster.OnOff.StartUpOnOff.md#toggle)

## Enumeration Members

### Off

• **Off** = ``0``

Set the OnOff attribute to FALSE

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:17

___

### On

• **On** = ``1``

Set the OnOff attribute to TRUE

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:21

___

### Toggle

• **Toggle** = ``2``

If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the
previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OnOffCluster.d.ts:26
