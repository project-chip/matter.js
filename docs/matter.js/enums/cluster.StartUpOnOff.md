[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / StartUpOnOff

# Enumeration: StartUpOnOff

[cluster](../modules/cluster.md).StartUpOnOff

Defined how the devices should behave when it is powered on.
If the value is null, the OnOff attribute is set to its previous value when the device starts up.

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 1.5.5.1

## Table of contents

### Enumeration Members

- [Off](cluster.StartUpOnOff.md#off)
- [On](cluster.StartUpOnOff.md#on)
- [Toggle](cluster.StartUpOnOff.md#toggle)

## Enumeration Members

### Off

• **Off** = ``0``

Set the OnOff attribute to FALSE when the device starts up.

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L25)

___

### On

• **On** = ``1``

Set the OnOff attribute to TRUE when the device starts up.

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L28)

___

### Toggle

• **Toggle** = ``2``

If the previous value of the OnOff attribute is equal to FALSE, set the OnOff
attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE,
set the OnOff attribute to FALSE (toggle).

#### Defined in

[packages/matter.js/src/cluster/OnOffCluster.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OnOffCluster.ts#L35)
