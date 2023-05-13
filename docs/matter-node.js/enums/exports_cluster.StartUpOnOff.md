[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / StartUpOnOff

# Enumeration: StartUpOnOff

[exports/cluster](../modules/exports_cluster.md).StartUpOnOff

Defined how the devices should behave when it is powered on.
If the value is null, the OnOff attribute is set to its previous value when the device starts up.

**`See`**

MatterApplicationClusterSpecificationV1_0 § 1.5.5.1

## Table of contents

### Enumeration Members

- [Off](exports_cluster.StartUpOnOff.md#off)
- [On](exports_cluster.StartUpOnOff.md#on)
- [Toggle](exports_cluster.StartUpOnOff.md#toggle)

## Enumeration Members

### Off

• **Off** = ``0``

Set the OnOff attribute to FALSE when the device starts up.

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:16

___

### On

• **On** = ``1``

Set the OnOff attribute to TRUE when the device starts up.

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:18

___

### Toggle

• **Toggle** = ``2``

If the previous value of the OnOff attribute is equal to FALSE, set the OnOff
attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE,
set the OnOff attribute to FALSE (toggle).

#### Defined in

packages/matter.js/dist/cjs/cluster/OnOffCluster.d.ts:24
