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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.Switch.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `momentarySwitchMultiPress`: ``true``  } ? typeof [`MomentarySwitchMultiPressComponent`](cluster_export.Switch.md#momentaryswitchmultipresscomponent) : {} & `SF` extends { `latchingSwitch`: ``true``  } ? typeof [`LatchingSwitchComponent`](cluster_export.Switch.md#latchingswitchcomponent) : {} & `SF` extends { `momentarySwitch`: ``true``  } ? typeof [`MomentarySwitchComponent`](cluster_export.Switch.md#momentaryswitchcomponent) : {} & `SF` extends { `momentarySwitchLongPress`: ``true``  } ? typeof [`MomentarySwitchLongPressComponent`](cluster_export.Switch.md#momentaryswitchlongpresscomponent) : {} & `SF` extends { `momentarySwitchRelease`: ``true``  } ? typeof [`MomentarySwitchReleaseComponent`](cluster_export.Switch.md#momentaryswitchreleasecomponent) : {} & `SF` extends { `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  } ? `never` : {} & `SF` extends { `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  } ? `never` : {} & `SF` extends { `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends { `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  } ? `never` : {} & `SF` extends { `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  } ? `never` : {} & `SF` extends { `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  } ? `never` : {} & `SF` extends { `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:377](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L377)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentPosition`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all Switch clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L116)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `currentPosition`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Switch.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

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

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:342](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L342)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentPosition`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `multiPressMax`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `latchingSwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitch`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchLongPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchMultiPress`: [`BitFlag`](schema_export.md#bitflag-1) ; `momentarySwitchRelease`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, {}, { `initialPress`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `longPress`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `longRelease`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `multiPressComplete`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `multiPressOngoing`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `shortRelease`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `switchLatched`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\>  }\>

This cluster supports all Switch features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:405](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L405)

___

### LatchingSwitchComponent

• `Const` **LatchingSwitchComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), { `switchLatched`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:236](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L236)

___

### MomentarySwitchComponent

• `Const` **MomentarySwitchComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), { `initialPress`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:253](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L253)

___

### MomentarySwitchLongPressComponent

• `Const` **MomentarySwitchLongPressComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), { `longPress`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `longRelease`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:269](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L269)

___

### MomentarySwitchMultiPressComponent

• `Const` **MomentarySwitchMultiPressComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `multiPressMax`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), { `multiPressComplete`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `multiPressOngoing`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:172](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L172)

___

### MomentarySwitchReleaseComponent

• `Const` **MomentarySwitchReleaseComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), { `shortRelease`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }\>

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:299](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L299)

___

### TlvInitialPressEvent

• `Const` **TlvInitialPressEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the Switch initialPress event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L58)

___

### TlvLongPressEvent

• `Const` **TlvLongPressEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the Switch longPress event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L65)

___

### TlvLongReleaseEvent

• `Const` **TlvLongReleaseEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the Switch longRelease event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.5

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:72](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L72)

___

### TlvMultiPressCompleteEvent

• `Const` **TlvMultiPressCompleteEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the Switch multiPressComplete event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.7

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L41)

___

### TlvMultiPressOngoingEvent

• `Const` **TlvMultiPressOngoingEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the Switch multiPressOngoing event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L31)

___

### TlvShortReleaseEvent

• `Const` **TlvShortReleaseEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the Switch shortRelease event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L79)

___

### TlvSwitchLatchedEvent

• `Const` **TlvSwitchLatchedEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Body of the Switch switchLatched event

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.11.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L51)
