[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / Switch

# Namespace: Switch

## Index

### Enumerations

- [Feature](enumerations/Feature.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [InitialPressEvent](interfaces/InitialPressEvent.md)
- [LongPressEvent](interfaces/LongPressEvent.md)
- [LongReleaseEvent](interfaces/LongReleaseEvent.md)
- [MultiPressCompleteEvent](interfaces/MultiPressCompleteEvent.md)
- [MultiPressOngoingEvent](interfaces/MultiPressOngoingEvent.md)
- [ShortReleaseEvent](interfaces/ShortReleaseEvent.md)
- [SwitchLatchedEvent](interfaces/SwitchLatchedEvent.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all Switch clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentPosition

> `readonly` **currentPosition**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute shall indicate the position of the switch. The valid range is zero to
NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
for example the "open" state of a rocker switch, or the "idle" state of a push button switch.

###### See

MatterSpecification.v11.Cluster § 1.11.5.2

##### attributes.numberOfPositions

> `readonly` **numberOfPositions**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
NumberOfPositions>2.

###### See

MatterSpecification.v11.Cluster § 1.11.5.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which SwitchCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.latchingSwitch

> `readonly` **latchingSwitch**: [`BitFlag`](../../../schema/README.md#bitflag)

LatchingSwitch

##### features.momentarySwitch

> `readonly` **momentarySwitch**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitch

##### features.momentarySwitchLongPress

> `readonly` **momentarySwitchLongPress**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchLongPress

##### features.momentarySwitchMultiPress

> `readonly` **momentarySwitchMultiPress**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchMultiPress

##### features.momentarySwitchRelease

> `readonly` **momentarySwitchRelease**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchRelease

##### id

> `readonly` **id**: `59`

##### name

> `readonly` **name**: `"Switch"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:311

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:849

***

### ClusterInstance

> `const` **ClusterInstance**: [`ExtensibleOnly`](../MutableCluster/interfaces/ExtensibleOnly.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentPosition

> `readonly` **currentPosition**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute shall indicate the position of the switch. The valid range is zero to
NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
for example the "open" state of a rocker switch, or the "idle" state of a push button switch.

###### See

MatterSpecification.v11.Cluster § 1.11.5.2

##### attributes.numberOfPositions

> `readonly` **numberOfPositions**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
NumberOfPositions>2.

###### See

MatterSpecification.v11.Cluster § 1.11.5.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

This metadata controls which SwitchCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.latchingSwitch

> `readonly` **latchingSwitch**: [`BitFlag`](../../../schema/README.md#bitflag)

LatchingSwitch

##### features.momentarySwitch

> `readonly` **momentarySwitch**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitch

##### features.momentarySwitchLongPress

> `readonly` **momentarySwitchLongPress**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchLongPress

##### features.momentarySwitchMultiPress

> `readonly` **momentarySwitchMultiPress**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchMultiPress

##### features.momentarySwitchRelease

> `readonly` **momentarySwitchRelease**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchRelease

##### id

> `readonly` **id**: `59`

##### name

> `readonly` **name**: `"Switch"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:571

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:988

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentPosition

> `readonly` **currentPosition**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

This attribute shall indicate the position of the switch. The valid range is zero to
NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the switch:
for example the "open" state of a rocker switch, or the "idle" state of a push button switch.

###### See

MatterSpecification.v11.Cluster § 1.11.5.2

##### attributes.multiPressMax

> `readonly` **multiPressMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.numberOfPositions

> `readonly` **numberOfPositions**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of positions the switch has. Any kind of switch has a
minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case
NumberOfPositions>2.

###### See

MatterSpecification.v11.Cluster § 1.11.5.1

##### events

> `readonly` **events**: `object`

##### events.initialPress

> `readonly` **initialPress**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.longPress

> `readonly` **longPress**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.longRelease

> `readonly` **longRelease**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.multiPressComplete

> `readonly` **multiPressComplete**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.multiPressOngoing

> `readonly` **multiPressOngoing**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.shortRelease

> `readonly` **shortRelease**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events.switchLatched

> `readonly` **switchLatched**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### features

> `readonly` **features**: `object`

##### features.latchingSwitch

> `readonly` **latchingSwitch**: [`BitFlag`](../../../schema/README.md#bitflag)

LatchingSwitch

##### features.momentarySwitch

> `readonly` **momentarySwitch**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitch

##### features.momentarySwitchLongPress

> `readonly` **momentarySwitchLongPress**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchLongPress

##### features.momentarySwitchMultiPress

> `readonly` **momentarySwitchMultiPress**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchMultiPress

##### features.momentarySwitchRelease

> `readonly` **momentarySwitchRelease**: [`BitFlag`](../../../schema/README.md#bitflag)

MomentarySwitchRelease

##### id

> `readonly` **id**: `59`

##### name

> `readonly` **name**: `"Switch"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:855

***

### LatchingSwitchComponent

> `const` **LatchingSwitchComponent**: `object`

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.switchLatched

> `readonly` **switchLatched**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated, when the latching switch is moved to a new position. It may have been
delayed by debouncing within the switch.

The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. after the move.

###### See

MatterSpecification.v11.Cluster § 1.11.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:190

***

### MomentarySwitchComponent

> `const` **MomentarySwitchComponent**: `object`

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.initialPress

> `readonly` **initialPress**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated, when the momentary switch starts to be pressed (after debouncing).

The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.

###### See

MatterSpecification.v11.Cluster § 1.11.7.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:208

***

### MomentarySwitchLongPressComponent

> `const` **MomentarySwitchLongPressComponent**: `object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.longPress

> `readonly` **longPress**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated, when the momentary switch has been pressed for a "long" time (this time
interval is manufacturer determined (e.g. since it depends on the switch physics)).

The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.

###### See

MatterSpecification.v11.Cluster § 1.11.7.3

##### events.longRelease

> `readonly` **longRelease**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated, when the momentary switch has been released (after debouncing) and after
having been pressed for a long time, i.e. this event shall be generated when the switch is released if a
LongPress event has been generated since since the previous InitialPress event. Also see Section 1.11.8,
“Sequence of generated events”.

The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. just
prior to release.

###### See

MatterSpecification.v11.Cluster § 1.11.7.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:225

***

### MomentarySwitchMultiPressComponent

> `const` **MomentarySwitchMultiPressComponent**: `object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchMultiPress.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.multiPressMax

> `readonly` **multiPressMax**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate how many consecutive presses can be detected and reported by a momentary
switch which supports multi-press (e.g. it will report the value 3 if it can detect single press, double
press and triple press, but not quad press and beyond).

###### See

MatterSpecification.v11.Cluster § 1.11.5.3

##### events

> `readonly` **events**: `object`

##### events.multiPressComplete

> `readonly` **multiPressComplete**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated to indicate how many times the momentary switch has been pressed in a
multi-press sequence, after it has been detected that the sequence has ended. See Section 1.11.9,
“Sequence of events for MultiPress” below.

The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. just
prior to release.

The TotalNumberOfPressesCounted field shall contain:

  • a value of 1 when there was one press in a multi-press sequence (and the sequence has ended),

    i.e. there was no double press (or more),

  • a value of 2 when there were exactly two presses in a multi-press sequence (and the sequence has
    ended),

  • a value of 3 when there were exactly three presses in a multi-press sequence (and the sequence has
    ended),

  • a value of N when there were exactly N presses in a multi-press sequence (and the sequence has
    ended).

###### See

MatterSpecification.v11.Cluster § 1.11.7.7

##### events.multiPressOngoing

> `readonly` **multiPressOngoing**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated to indicate how many times the momentary switch has been pressed in a
multi-press sequence, during that sequence. See Section 1.11.9, “Sequence of events for MultiPress”
below.

The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.

The CurrentNumberOfPressesCounted field shall contain:

  • a value of 2 when the second press of a multi-press sequence has been detected,

  • a value of 3 when the third press of a multi-press sequence has been detected,

  • a value of N when the Nth press of a multi-press sequence has been detected.

###### See

MatterSpecification.v11.Cluster § 1.11.7.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:123

***

### MomentarySwitchReleaseComponent

> `const` **MomentarySwitchReleaseComponent**: `object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.shortRelease

> `readonly` **shortRelease**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

This event shall be generated, when the momentary switch has been released (after debouncing).

  • If the server supports the Momentary Switch LongPress (MSL) feature, this event shall be generated
    when the switch is released if no LongPress event had been generated since the previous InitialPress
    event.

  • If the server does not support the Momentary Switch LongPress (MSL) feature, this event shall be
    generated when the switch is released - even when the switch was pressed for a long time.

  • Also see Section 1.11.8, “Sequence of generated events”.

The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. just
prior to release.

###### See

MatterSpecification.v11.Cluster § 1.11.7.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:257

***

### TlvInitialPressEvent

> `const` **TlvInitialPressEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Switch initialPress event

#### See

MatterSpecification.v11.Cluster § 1.11.7.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:65

***

### TlvLongPressEvent

> `const` **TlvLongPressEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Switch longPress event

#### See

MatterSpecification.v11.Cluster § 1.11.7.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:80

***

### TlvLongReleaseEvent

> `const` **TlvLongReleaseEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Switch longRelease event

#### See

MatterSpecification.v11.Cluster § 1.11.7.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:95

***

### TlvMultiPressCompleteEvent

> `const` **TlvMultiPressCompleteEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Switch multiPressComplete event

#### See

MatterSpecification.v11.Cluster § 1.11.7.7

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:34

***

### TlvMultiPressOngoingEvent

> `const` **TlvMultiPressOngoingEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Switch multiPressOngoing event

#### See

MatterSpecification.v11.Cluster § 1.11.7.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:18

***

### TlvShortReleaseEvent

> `const` **TlvShortReleaseEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Switch shortRelease event

#### See

MatterSpecification.v11.Cluster § 1.11.7.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:110

***

### TlvSwitchLatchedEvent

> `const` **TlvSwitchLatchedEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the Switch switchLatched event

#### See

MatterSpecification.v11.Cluster § 1.11.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/SwitchCluster.d.ts:50
