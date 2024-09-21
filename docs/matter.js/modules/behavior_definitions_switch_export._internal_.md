[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/switch/export](behavior_definitions_switch_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [StateType](behavior_definitions_switch_export._internal_.md#statetype)
- [SwitchBehaviorType](behavior_definitions_switch_export._internal_.md#switchbehaviortype)

### Variables

- [SwitchServerBase](behavior_definitions_switch_export._internal_.md#switchserverbase)

## Type Aliases

### StateType

Ƭ **StateType**: `InstanceType`\<typeof `SwitchBehavior.State`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts:22](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts#L22)

___

### SwitchBehaviorType

Ƭ **SwitchBehaviorType**: `InstanceType`\<typeof [`SwitchBehavior`](behavior_definitions_switch_export.md#switchbehavior)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts:20](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts#L20)

## Variables

### SwitchServerBase

• `Const` **SwitchServerBase**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](cluster_export.ClusterComposer.md#withfeatures)\<[`Complete`](../interfaces/cluster_export.Switch.Complete.md), readonly [[`LatchingSwitch`](../enums/cluster_export.Switch.Feature.md#latchingswitch), [`MomentarySwitch`](../enums/cluster_export.Switch.Feature.md#momentaryswitch), [`MomentarySwitchRelease`](../enums/cluster_export.Switch.Feature.md#momentaryswitchrelease), [`MomentarySwitchLongPress`](../enums/cluster_export.Switch.Feature.md#momentaryswitchlongpress), [`MomentarySwitchMultiPress`](../enums/cluster_export.Switch.Feature.md#momentaryswitchmultipress)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Complete`](../interfaces/cluster_export.Switch.Complete.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>, `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>, `any`\> ; `longRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<...\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>, \{ `components`: `never`[] = [] }\>, \{ `components`: `never`[] = [] }\>

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:16](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L16)
