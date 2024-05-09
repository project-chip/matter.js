[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OnOff](../modules/cluster_export.OnOff.md) / StartUpOnOff

# Enumeration: StartUpOnOff

[cluster/export](../modules/cluster_export.md).[OnOff](../modules/cluster_export.OnOff.md).StartUpOnOff

**`See`**

MatterSpecification.v11.Cluster § 1.5.5.1

## Table of contents

### Enumeration Members

- [Off](cluster_export.OnOff.StartUpOnOff.md#off)
- [On](cluster_export.OnOff.StartUpOnOff.md#on)
- [Toggle](cluster_export.OnOff.StartUpOnOff.md#toggle)

## Enumeration Members

### Off

• **Off** = ``0``

Set the OnOff attribute to FALSE

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L29)

___

### On

• **On** = ``1``

Set the OnOff attribute to TRUE

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L34)

___

### Toggle

• **Toggle** = ``2``

If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the
previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L40)
