[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Switch

# Namespace: Switch

[exports/cluster](exports_cluster.md).Switch

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Switch.Feature.md)

### Type Aliases

- [Extension](exports_cluster.Switch.md#extension)

### Variables

- [Base](exports_cluster.Switch.md#base)
- [Cluster](exports_cluster.Switch.md#cluster)
- [Complete](exports_cluster.Switch.md#complete)
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

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.Switch.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `momentarySwitchMultiPress`: ``true``  } ? typeof [`MomentarySwitchMultiPressComponent`](exports_cluster.Switch.md#momentaryswitchmultipresscomponent) : {} & `SF` extends \{ `latchingSwitch`: ``true``  } ? typeof [`LatchingSwitchComponent`](exports_cluster.Switch.md#latchingswitchcomponent) : {} & `SF` extends \{ `momentarySwitch`: ``true``  } ? typeof [`MomentarySwitchComponent`](exports_cluster.Switch.md#momentaryswitchcomponent) : {} & `SF` extends \{ `momentarySwitchLongPress`: ``true``  } ? typeof [`MomentarySwitchLongPressComponent`](exports_cluster.Switch.md#momentaryswitchlongpresscomponent) : {} & `SF` extends \{ `momentarySwitchRelease`: ``true``  } ? typeof [`MomentarySwitchReleaseComponent`](exports_cluster.Switch.md#momentaryswitchreleasecomponent) : {} & `SF` extends \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  } ? `never` : {} & `SF` extends \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  } ? `never` : {} & `SF` extends \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  } ? `never` : {} & `SF` extends \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  } ? `never` : {} & `SF` extends \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:485

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>

These elements and properties are present in all Switch clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:99

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: {} ; `events`: {} ; `features`: \{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Switch"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Switch.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Switch

This cluster exposes interactions with a switch device, for the purpose of using those interactions by other
devices.

Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch (e.g. push
button), distinguished with their feature flags.

Interactions with the switch device are exposed as attributes (for the latching switch) and as events (for both
types of switches).

An interested client may subscribe to these attributes/events and thus be informed of the interactions, and can
perform actions based on this, for example by sending commands to perform an action such as controlling a light
or a window shade.

SwitchCluster supports optional features that you can enable with the SwitchCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:325

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentPosition`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<\{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `multiPressMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `numberOfPositions`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `longPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `longRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `multiPressComplete`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `multiPressOngoing`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `shortRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `switchLatched`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``59`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>

This cluster supports all Switch features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:525

___

### LatchingSwitchComponent

• `Const` **LatchingSwitchComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `switchLatched`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:214

___

### MomentarySwitchComponent

• `Const` **MomentarySwitchComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `initialPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:232

___

### MomentarySwitchLongPressComponent

• `Const` **MomentarySwitchLongPressComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `longPress`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `longRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:249

___

### MomentarySwitchMultiPressComponent

• `Const` **MomentarySwitchMultiPressComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `multiPressOngoing`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:147

___

### MomentarySwitchReleaseComponent

• `Const` **MomentarySwitchReleaseComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `shortRelease`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:281

___

### TlvInitialPressEvent

• `Const` **TlvInitialPressEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch initialPress event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:42

___

### TlvLongPressEvent

• `Const` **TlvLongPressEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch longPress event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:50

___

### TlvLongReleaseEvent

• `Const` **TlvLongReleaseEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch longRelease event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:58

___

### TlvMultiPressCompleteEvent

• `Const` **TlvMultiPressCompleteEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch multiPressComplete event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:25

___

### TlvMultiPressOngoingEvent

• `Const` **TlvMultiPressOngoingEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch multiPressOngoing event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:16

___

### TlvShortReleaseEvent

• `Const` **TlvShortReleaseEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch shortRelease event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:66

___

### TlvSwitchLatchedEvent

• `Const` **TlvSwitchLatchedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Switch switchLatched event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:34
