[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/color-control/export](behavior_definitions_color_control_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [ColorControlBehaviorType](behavior_definitions_color_control_export._internal_.md#colorcontrolbehaviortype)
- [HueTransitionData](behavior_definitions_color_control_export._internal_.md#huetransitiondata)
- [ManagedTransitionType](behavior_definitions_color_control_export._internal_.md#managedtransitiontype)
- [StateType](behavior_definitions_color_control_export._internal_.md#statetype)
- [TransitionData](behavior_definitions_color_control_export._internal_.md#transitiondata)

### Variables

- [ColorControlServerBase](behavior_definitions_color_control_export._internal_.md#colorcontrolserverbase)

## Type Aliases

### ColorControlBehaviorType

Ƭ **ColorControlBehaviorType**: `InstanceType`\<typeof [`ColorControlBehavior`](behavior_definitions_color_control_export.md#colorcontrolbehavior)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:23](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L23)

___

### HueTransitionData

Ƭ **HueTransitionData**: [`TransitionData`](behavior_definitions_color_control_export._internal_.md#transitiondata) & \{ `distanceLeft?`: `number` ; `isEnhancedHue`: `boolean`  }

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2097](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2097)

___

### ManagedTransitionType

Ƭ **ManagedTransitionType**: ``"hue"`` \| ``"enhancedHue"`` \| ``"saturation"`` \| ``"colorTemperature"`` \| ``"x"`` \| ``"y"``

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:61](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L61)

___

### StateType

Ƭ **StateType**: `InstanceType`\<typeof `ColorControlBehavior.State`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:25](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L25)

___

### TransitionData

Ƭ **TransitionData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `changeRate` | `number` |
| `maxValue` | `number` |
| `minValue` | `number` |
| `remainingTime?` | `number` |
| `targetValue?` | `number` |

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2089](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2089)

## Variables

### ColorControlServerBase

• `Const` **ColorControlServerBase**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), readonly [[`HueSaturation`](../enums/cluster_export.ColorControl.Feature.md#huesaturation), [`EnhancedHue`](../enums/cluster_export.ColorControl.Feature.md#enhancedhue), [`ColorLoop`](../enums/cluster_export.ColorControl.Feature.md#colorloop), [`Xy`](../enums/cluster_export.ColorControl.Feature.md#xy), [`ColorTemperature`](../enums/cluster_export.ColorControl.Feature.md#colortemperature)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ColorControl.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>, [`ColorControlInterface`](behavior_definitions_color_control_export.md#colorcontrolinterface)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:53](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L53)
