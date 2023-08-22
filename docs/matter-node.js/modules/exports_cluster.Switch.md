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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.Switch.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `momentarySwitchMultiPress`: ``true``  } ? typeof [`MomentarySwitchMultiPressComponent`](exports_cluster.Switch.md#momentaryswitchmultipresscomponent) : {} & `SF` extends { `latchingSwitch`: ``true``  } ? typeof [`LatchingSwitchComponent`](exports_cluster.Switch.md#latchingswitchcomponent) : {} & `SF` extends { `momentarySwitch`: ``true``  } ? typeof [`MomentarySwitchComponent`](exports_cluster.Switch.md#momentaryswitchcomponent) : {} & `SF` extends { `momentarySwitchLongPress`: ``true``  } ? typeof [`MomentarySwitchLongPressComponent`](exports_cluster.Switch.md#momentaryswitchlongpresscomponent) : {} & `SF` extends { `momentarySwitchRelease`: ``true``  } ? typeof [`MomentarySwitchReleaseComponent`](exports_cluster.Switch.md#momentaryswitchreleasecomponent) : {} & `SF` extends { `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  } ? `never` : {} & `SF` extends { `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  } ? `never` : {} & `SF` extends { `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends { `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  } ? `never` : {} & `SF` extends { `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends { `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  } ? `never` : {} & `SF` extends { `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:409

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentPosition`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all Switch clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:98

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Switch.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

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

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:307

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `latchingSwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](exports_schema.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, { `initialPress`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `longPress`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `longRelease`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `multiPressComplete`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `multiPressOngoing`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `shortRelease`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `switchLatched`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\>  }\>

This cluster supports all Switch features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:449

___

### LatchingSwitchComponent

• `Const` **LatchingSwitchComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `switchLatched`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:204

___

### MomentarySwitchComponent

• `Const` **MomentarySwitchComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `initialPress`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:220

___

### MomentarySwitchLongPressComponent

• `Const` **MomentarySwitchLongPressComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `longPress`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `longRelease`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:235

___

### MomentarySwitchMultiPressComponent

• `Const` **MomentarySwitchMultiPressComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `multiPressMax`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `multiPressComplete`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `multiPressOngoing`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:140

___

### MomentarySwitchReleaseComponent

• `Const` **MomentarySwitchReleaseComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `shortRelease`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:265

___

### TlvInitialPressEvent

• `Const` **TlvInitialPressEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the Switch initialPress event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:41

___

### TlvLongPressEvent

• `Const` **TlvLongPressEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the Switch longPress event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:49

___

### TlvLongReleaseEvent

• `Const` **TlvLongReleaseEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the Switch longRelease event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:57

___

### TlvMultiPressCompleteEvent

• `Const` **TlvMultiPressCompleteEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the Switch multiPressComplete event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:24

___

### TlvMultiPressOngoingEvent

• `Const` **TlvMultiPressOngoingEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the Switch multiPressOngoing event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:15

___

### TlvShortReleaseEvent

• `Const` **TlvShortReleaseEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the Switch shortRelease event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:65

___

### TlvSwitchLatchedEvent

• `Const` **TlvSwitchLatchedEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the Switch switchLatched event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.11.7.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/SwitchCluster.d.ts:33
