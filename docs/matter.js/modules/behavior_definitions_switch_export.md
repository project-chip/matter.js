[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/switch/export

# Module: behavior/definitions/switch/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_switch_export._internal_.md)

### Namespaces

- [SwitchBehavior](behavior_definitions_switch_export.SwitchBehavior.md)

### Classes

- [SwitchServer](../classes/behavior_definitions_switch_export.SwitchServer.md)

### Interfaces

- [SwitchBehavior](../interfaces/behavior_definitions_switch_export.SwitchBehavior-1.md)

### Variables

- [SwitchBehavior](behavior_definitions_switch_export.md#switchbehavior)

## Variables

### SwitchBehavior

• `Const` **SwitchBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\> ; `longRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>

SwitchBehavior is the base class for objects that support interaction with [Switch.Cluster](cluster_export.Switch.md#cluster).

Switch.Cluster requires you to enable one or more optional features. You can do so using SwitchBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts#L18)

[packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/switch/SwitchBehavior.ts#L23)
