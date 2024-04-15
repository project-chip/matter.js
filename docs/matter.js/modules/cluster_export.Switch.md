[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Switch

# Namespace: Switch

[cluster/export](cluster_export.md).Switch

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Switch.Feature.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.Switch.Cluster.md)
- [Complete](../interfaces/cluster_export.Switch.Complete.md)
- [InitialPressEvent](../interfaces/cluster_export.Switch.InitialPressEvent.md)
- [LongPressEvent](../interfaces/cluster_export.Switch.LongPressEvent.md)
- [LongReleaseEvent](../interfaces/cluster_export.Switch.LongReleaseEvent.md)
- [MultiPressCompleteEvent](../interfaces/cluster_export.Switch.MultiPressCompleteEvent.md)
- [MultiPressOngoingEvent](../interfaces/cluster_export.Switch.MultiPressOngoingEvent.md)
- [ShortReleaseEvent](../interfaces/cluster_export.Switch.ShortReleaseEvent.md)
- [SwitchLatchedEvent](../interfaces/cluster_export.Switch.SwitchLatchedEvent.md)

### Variables

- [Base](cluster_export.Switch.md#base)
- [Cluster](cluster_export.Switch.md#cluster)
- [ClusterInstance](cluster_export.Switch.md#clusterinstance)
- [Complete](cluster_export.Switch.md#complete)
- [CompleteInstance](cluster_export.Switch.md#completeinstance)
- [LatchingSwitchComponent](cluster_export.Switch.md#latchingswitchcomponent)
- [MomentarySwitchComponent](cluster_export.Switch.md#momentaryswitchcomponent)
- [MomentarySwitchLongPressComponent](cluster_export.Switch.md#momentaryswitchlongpresscomponent)
- [MomentarySwitchMultiPressComponent](cluster_export.Switch.md#momentaryswitchmultipresscomponent)
- [MomentarySwitchReleaseComponent](cluster_export.Switch.md#momentaryswitchreleasecomponent)
- [TlvInitialPressEvent](cluster_export.Switch.md#tlvinitialpressevent)
- [TlvLongPressEvent](cluster_export.Switch.md#tlvlongpressevent)
- [TlvLongReleaseEvent](cluster_export.Switch.md#tlvlongreleaseevent)
- [TlvMultiPressCompleteEvent](cluster_export.Switch.md#tlvmultipresscompleteevent)
- [TlvMultiPressOngoingEvent](cluster_export.Switch.md#tlvmultipressongoingevent)
- [TlvShortReleaseEvent](cluster_export.Switch.md#tlvshortreleaseevent)
- [TlvSwitchLatchedEvent](cluster_export.Switch.md#tlvswitchlatchedevent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Switch clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentPosition`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } | - |
| `attributes.currentPosition` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> | This attribute shall indicate the position of the switch. The valid range is zero to NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch: for example the "open" state of a rocker switch, or the "idle" state of a push button switch. **`See`** MatterSpecification.v11.Cluster § 1.11.5.2 |
| `attributes.numberOfPositions` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> | This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case NumberOfPositions>2. **`See`** MatterSpecification.v11.Cluster § 1.11.5.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `longRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] | This metadata controls which SwitchCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.latchingSwitch` | [`BitFlag`](schema_export.md#bitflag) | LatchingSwitch |
| `features.momentarySwitch` | [`BitFlag`](schema_export.md#bitflag) | MomentarySwitch |
| `features.momentarySwitchLongPress` | [`BitFlag`](schema_export.md#bitflag) | MomentarySwitchLongPress |
| `features.momentarySwitchMultiPress` | [`BitFlag`](schema_export.md#bitflag) | MomentarySwitchMultiPress |
| `features.momentarySwitchRelease` | [`BitFlag`](schema_export.md#bitflag) | MomentarySwitchRelease |
| `id` | ``59`` | - |
| `name` | ``"Switch"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L311)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Switch.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:408](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L408)

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:410](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L410)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `longRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.Switch.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:385](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L385)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.Switch.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:472](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L472)

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:474](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L474)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `longPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `longRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `shortRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `switchLatched`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag)  } = Base.features; `id`: ``59`` = Base.id; `name`: ``"Switch"`` = Base.name; `revision`: ``1`` = Base.revision }\>

**`See`**

[Complete](cluster_export.Switch.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:420](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L420)

___

### LatchingSwitchComponent

• `Const` **LatchingSwitchComponent**: `Object`

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `switchLatched`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } |
| `events.switchLatched` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:190](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L190)

___

### MomentarySwitchComponent

• `Const` **MomentarySwitchComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `initialPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } |
| `events.initialPress` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L207)

___

### MomentarySwitchLongPressComponent

• `Const` **MomentarySwitchLongPressComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `longPress`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `longRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } |
| `events.longPress` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |
| `events.longRelease` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L223)

___

### MomentarySwitchMultiPressComponent

• `Const` **MomentarySwitchMultiPressComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `multiPressMax`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.multiPressMax` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> |
| `events` | \{ `multiPressComplete`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } |
| `events.multiPressComplete` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |
| `events.multiPressOngoing` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L126)

___

### MomentarySwitchReleaseComponent

• `Const` **MomentarySwitchReleaseComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `shortRelease`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  } |
| `events.shortRelease` | [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:253](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L253)

___

### TlvInitialPressEvent

• `Const` **TlvInitialPressEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch initialPress event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L72)

___

### TlvLongPressEvent

• `Const` **TlvLongPressEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch longPress event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L86)

___

### TlvLongReleaseEvent

• `Const` **TlvLongReleaseEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch longRelease event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.5

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L100)

___

### TlvMultiPressCompleteEvent

• `Const` **TlvMultiPressCompleteEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch multiPressComplete event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.7

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L41)

___

### TlvMultiPressOngoingEvent

• `Const` **TlvMultiPressOngoingEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch multiPressOngoing event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L24)

___

### TlvShortReleaseEvent

• `Const` **TlvShortReleaseEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch shortRelease event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L114)

___

### TlvSwitchLatchedEvent

• `Const` **TlvSwitchLatchedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch switchLatched event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L58)
