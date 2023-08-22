[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [KeypadInput](../modules/cluster_export.KeypadInput.md) / Feature

# Enumeration: Feature

[cluster/export](../modules/cluster_export.md).[KeypadInput](../modules/cluster_export.KeypadInput.md).Feature

These are optional features supported by KeypadInputCluster.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.2

## Table of contents

### Enumeration Members

- [LocationKeys](cluster_export.KeypadInput.Feature.md#locationkeys)
- [NavigationKeyCodes](cluster_export.KeypadInput.Feature.md#navigationkeycodes)
- [NumberKeys](cluster_export.KeypadInput.Feature.md#numberkeys)

## Enumeration Members

### LocationKeys

• **LocationKeys** = ``"LocationKeys"``

LocationKeys

Supports CEC keys 0x0A (Settings) and 0x09 (Home)

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:177](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L177)

___

### NavigationKeyCodes

• **NavigationKeyCodes** = ``"NavigationKeyCodes"``

NavigationKeyCodes

Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:170](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L170)

___

### NumberKeys

• **NumberKeys** = ``"NumberKeys"``

NumberKeys

Supports numeric input 0..9

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:184](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L184)
