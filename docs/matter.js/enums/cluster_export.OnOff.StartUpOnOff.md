[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OnOff](../modules/cluster_export.OnOff.md) / StartUpOnOff

# Enumeration: StartUpOnOff

[cluster/export](../modules/cluster_export.md).[OnOff](../modules/cluster_export.OnOff.md).StartUpOnOff

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.5.5.1

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

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L42)

___

### On

• **On** = ``1``

Set the OnOff attribute to TRUE

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L47)

___

### Toggle

• **Toggle** = ``2``

If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the
previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).

#### Defined in

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L53)
