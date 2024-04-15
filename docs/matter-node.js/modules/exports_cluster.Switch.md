[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Switch

# Namespace: Switch

[exports/cluster](exports_cluster.md).Switch

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Switch.Feature.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.Switch.Cluster.md)
- [Complete](../interfaces/exports_cluster.Switch.Complete.md)
- [InitialPressEvent](../interfaces/exports_cluster.Switch.InitialPressEvent.md)
- [LongPressEvent](../interfaces/exports_cluster.Switch.LongPressEvent.md)
- [LongReleaseEvent](../interfaces/exports_cluster.Switch.LongReleaseEvent.md)
- [MultiPressCompleteEvent](../interfaces/exports_cluster.Switch.MultiPressCompleteEvent.md)
- [MultiPressOngoingEvent](../interfaces/exports_cluster.Switch.MultiPressOngoingEvent.md)
- [ShortReleaseEvent](../interfaces/exports_cluster.Switch.ShortReleaseEvent.md)
- [SwitchLatchedEvent](../interfaces/exports_cluster.Switch.SwitchLatchedEvent.md)

### Variables

- [Base](exports_cluster.Switch.md#base)
- [Cluster](exports_cluster.Switch.md#cluster)
- [ClusterInstance](exports_cluster.Switch.md#clusterinstance)
- [Complete](exports_cluster.Switch.md#complete)
- [CompleteInstance](exports_cluster.Switch.md#completeinstance)
- [LatchingSwitchComponent](exports_cluster.Switch.md#latchingswitchcomponent)
- [MomentarySwitchComponent](exports_cluster.Switch.md#momentaryswitchcomponent)
- [MomentarySwitchLongPressComponent](exports_cluster.Switch.md#momentaryswitchlongpresscomponent)
- [MomentarySwitchMultiPressComponent](exports_cluster.Switch.md#momentaryswitchmultipresscomponent)
- [MomentarySwitchReleaseComponent](exports_cluster.Switch.md#momentaryswitchreleasecomponent)
- [TlvInitialPressEvent](exports_cluster.Switch.md#tlvinitialpressevent)
- [TlvLongPressEvent](exports_cluster.Switch.md#tlvlongpressevent)
- [TlvLongReleaseEvent](exports_cluster.Switch.md#tlvlongreleaseevent)
- [TlvMultiPressCompleteEvent](exports_cluster.Switch.md#tlvmultipresscompleteevent)
- [TlvMultiPressOngoingEvent](exports_cluster.Switch.md#tlvmultipressongoingevent)
- [TlvShortReleaseEvent](exports_cluster.Switch.md#tlvshortreleaseevent)
- [TlvSwitchLatchedEvent](exports_cluster.Switch.md#tlvswitchlatchedevent)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Switch clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentPosition`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } | - |
| `attributes.currentPosition` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> | This attribute shall indicate the position of the switch. The valid range is zero to NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch: for example the "open" state of a rocker switch, or the "idle" state of a push button switch. **`See`** MatterSpecification.v11.Cluster § 1.11.5.2 |
| `attributes.numberOfPositions` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> | This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case NumberOfPositions>2. **`See`** MatterSpecification.v11.Cluster § 1.11.5.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `latchingSwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `longRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  }  }] | This metadata controls which SwitchCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.latchingSwitch` | [`BitFlag`](exports_schema.md#bitflag) | LatchingSwitch |
| `features.momentarySwitch` | [`BitFlag`](exports_schema.md#bitflag) | MomentarySwitch |
| `features.momentarySwitchLongPress` | [`BitFlag`](exports_schema.md#bitflag) | MomentarySwitchLongPress |
| `features.momentarySwitchMultiPress` | [`BitFlag`](exports_schema.md#bitflag) | MomentarySwitchMultiPress |
| `features.momentarySwitchRelease` | [`BitFlag`](exports_schema.md#bitflag) | MomentarySwitchRelease |
| `id` | ``59`` | - |
| `name` | ``"Switch"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:311

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Switch.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:849

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:851

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `latchingSwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `longRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.Switch.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:571

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.Switch.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:988

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:990

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `multiPressMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfPositions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `longPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `longRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `multiPressComplete`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `multiPressOngoing`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `shortRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `switchLatched`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.Switch.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:855

___

### LatchingSwitchComponent

• `Const` **LatchingSwitchComponent**: `Object`

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `switchLatched`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.switchLatched` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:190

___

### MomentarySwitchComponent

• `Const` **MomentarySwitchComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `initialPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.initialPress` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:208

___

### MomentarySwitchLongPressComponent

• `Const` **MomentarySwitchLongPressComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `longPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `longRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.longPress` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `events.longRelease` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:225

___

### MomentarySwitchMultiPressComponent

• `Const` **MomentarySwitchMultiPressComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `multiPressMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.multiPressMax` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> |
| `events` | \{ `multiPressComplete`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.multiPressComplete` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |
| `events.multiPressOngoing` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:123

___

### MomentarySwitchReleaseComponent

• `Const` **MomentarySwitchReleaseComponent**: `Object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | \{ `shortRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `events.shortRelease` | [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:257

___

### TlvInitialPressEvent

• `Const` **TlvInitialPressEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch initialPress event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:65

___

### TlvLongPressEvent

• `Const` **TlvLongPressEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch longPress event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:80

___

### TlvLongReleaseEvent

• `Const` **TlvLongReleaseEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch longRelease event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:95

___

### TlvMultiPressCompleteEvent

• `Const` **TlvMultiPressCompleteEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch multiPressComplete event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:34

___

### TlvMultiPressOngoingEvent

• `Const` **TlvMultiPressOngoingEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch multiPressOngoing event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:18

___

### TlvShortReleaseEvent

• `Const` **TlvShortReleaseEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch shortRelease event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:110

___

### TlvSwitchLatchedEvent

• `Const` **TlvSwitchLatchedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch switchLatched event

**`See`**

MatterSpecification.v11.Cluster § 1.11.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:50
