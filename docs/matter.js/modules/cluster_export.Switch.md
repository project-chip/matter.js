[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Switch

# Namespace: Switch

[cluster/export](cluster_export.md).Switch

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Switch.Feature.md)

### Type Aliases

- [Extension](cluster_export.Switch.md#extension)

### Variables

- [Base](cluster_export.Switch.md#base)
- [Cluster](cluster_export.Switch.md#cluster)
- [Complete](cluster_export.Switch.md#complete)
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

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.Switch.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `momentarySwitchMultiPress`: ``true``  } ? typeof [`MomentarySwitchMultiPressComponent`](cluster_export.Switch.md#momentaryswitchmultipresscomponent) : {} & `SF` extends \{ `latchingSwitch`: ``true``  } ? typeof [`LatchingSwitchComponent`](cluster_export.Switch.md#latchingswitchcomponent) : {} & `SF` extends \{ `momentarySwitch`: ``true``  } ? typeof [`MomentarySwitchComponent`](cluster_export.Switch.md#momentaryswitchcomponent) : {} & `SF` extends \{ `momentarySwitchLongPress`: ``true``  } ? typeof [`MomentarySwitchLongPressComponent`](cluster_export.Switch.md#momentaryswitchlongpresscomponent) : {} & `SF` extends \{ `momentarySwitchRelease`: ``true``  } ? typeof [`MomentarySwitchReleaseComponent`](cluster_export.Switch.md#momentaryswitchreleasecomponent) : {} & `SF` extends \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  } ? `never` : {} & `SF` extends \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  } ? `never` : {} & `SF` extends \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  } ? `never` : {} & `SF` extends \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  } ? `never` : {} & `SF` extends \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:371](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L371)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentPosition`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\>  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all Switch clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:107](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L107)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `currentPosition`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)\<\{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: {} ; `events`: {} ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)\<``59`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"Switch"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `currentPosition`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\>  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Switch.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

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

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:333](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L333)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)\<`number`, `never`\> ; `currentPosition`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `multiPressMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `numberOfPositions`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\>  } ; `events`: \{ `initialPress`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `longPress`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `longRelease`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `multiPressComplete`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `multiPressOngoing`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `shortRelease`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `switchLatched`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `features`: \{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``59`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"Switch"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all Switch features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:399](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L399)

___

### LatchingSwitchComponent

• `Const` **LatchingSwitchComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `switchLatched`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:227](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L227)

___

### MomentarySwitchComponent

• `Const` **MomentarySwitchComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `initialPress`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:244](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L244)

___

### MomentarySwitchLongPressComponent

• `Const` **MomentarySwitchLongPressComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `longPress`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `longRelease`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:260](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L260)

___

### MomentarySwitchMultiPressComponent

• `Const` **MomentarySwitchMultiPressComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `multiPressOngoing`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:163](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L163)

___

### MomentarySwitchReleaseComponent

• `Const` **MomentarySwitchReleaseComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `events`: \{ `shortRelease`: [`Event`](cluster_export.md#event)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>  }  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:290](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L290)

___

### TlvInitialPressEvent

• `Const` **TlvInitialPressEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch initialPress event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:49](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L49)

___

### TlvLongPressEvent

• `Const` **TlvLongPressEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch longPress event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:56](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L56)

___

### TlvLongReleaseEvent

• `Const` **TlvLongReleaseEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch longRelease event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.5

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:63](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L63)

___

### TlvMultiPressCompleteEvent

• `Const` **TlvMultiPressCompleteEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch multiPressComplete event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.7

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:32](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L32)

___

### TlvMultiPressOngoingEvent

• `Const` **TlvMultiPressOngoingEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch multiPressOngoing event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:22](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L22)

___

### TlvShortReleaseEvent

• `Const` **TlvShortReleaseEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch shortRelease event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:70](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L70)

___

### TlvSwitchLatchedEvent

• `Const` **TlvSwitchLatchedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Body of the Switch switchLatched event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:42](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L42)
