[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Switch

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

> `readonly` **latchingSwitch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LatchingSwitch

##### features.momentarySwitch

> `readonly` **momentarySwitch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitch

##### features.momentarySwitchLongPress

> `readonly` **momentarySwitchLongPress**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchLongPress

##### features.momentarySwitchMultiPress

> `readonly` **momentarySwitchMultiPress**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchMultiPress

##### features.momentarySwitchRelease

> `readonly` **momentarySwitchRelease**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchRelease

##### id

> `readonly` **id**: `59` = `0x3b`

##### name

> `readonly` **name**: `"Switch"` = `"Switch"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:311](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L311)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:408](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L408)

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

> `readonly` **latchingSwitch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LatchingSwitch

##### features.momentarySwitch

> `readonly` **momentarySwitch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitch

##### features.momentarySwitchLongPress

> `readonly` **momentarySwitchLongPress**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchLongPress

##### features.momentarySwitchMultiPress

> `readonly` **momentarySwitchMultiPress**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchMultiPress

##### features.momentarySwitchRelease

> `readonly` **momentarySwitchRelease**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchRelease

##### id

> `readonly` **id**: `59` = `0x3b`

##### name

> `readonly` **name**: `"Switch"` = `"Switch"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:385](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L385)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:472](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L472)

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

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

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

> `readonly` **initialPress**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.longPress

> `readonly` **longPress**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.longRelease

> `readonly` **longRelease**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.multiPressComplete

> `readonly` **multiPressComplete**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.multiPressOngoing

> `readonly` **multiPressOngoing**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.shortRelease

> `readonly` **shortRelease**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events.switchLatched

> `readonly` **switchLatched**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### features

> `readonly` **features**: `object` = `Base.features`

##### features.latchingSwitch

> `readonly` **latchingSwitch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LatchingSwitch

##### features.momentarySwitch

> `readonly` **momentarySwitch**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitch

##### features.momentarySwitchLongPress

> `readonly` **momentarySwitchLongPress**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchLongPress

##### features.momentarySwitchMultiPress

> `readonly` **momentarySwitchMultiPress**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchMultiPress

##### features.momentarySwitchRelease

> `readonly` **momentarySwitchRelease**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

MomentarySwitchRelease

##### id

> `readonly` **id**: `59` = `Base.id`

##### name

> `readonly` **name**: `"Switch"` = `Base.name`

##### revision

> `readonly` **revision**: `1` = `Base.revision`

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:420](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L420)

***

### LatchingSwitchComponent

> `const` **LatchingSwitchComponent**: `object`

A SwitchCluster supports these elements if it supports feature LatchingSwitch.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.switchLatched

> `readonly` **switchLatched**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated, when the latching switch is moved to a new position. It may have been
delayed by debouncing within the switch.

The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. after the move.

###### See

MatterSpecification.v11.Cluster § 1.11.7.1

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L190)

***

### MomentarySwitchComponent

> `const` **MomentarySwitchComponent**: `object`

A SwitchCluster supports these elements if it supports feature MomentarySwitch.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.initialPress

> `readonly` **initialPress**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated, when the momentary switch starts to be pressed (after debouncing).

The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.

###### See

MatterSpecification.v11.Cluster § 1.11.7.2

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L207)

***

### MomentarySwitchLongPressComponent

> `const` **MomentarySwitchLongPressComponent**: `object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchLongPress.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.longPress

> `readonly` **longPress**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated, when the momentary switch has been pressed for a "long" time (this time
interval is manufacturer determined (e.g. since it depends on the switch physics)).

The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.

###### See

MatterSpecification.v11.Cluster § 1.11.7.3

##### events.longRelease

> `readonly` **longRelease**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated, when the momentary switch has been released (after debouncing) and after
having been pressed for a long time, i.e. this event shall be generated when the switch is released if a
LongPress event has been generated since since the previous InitialPress event. Also see Section 1.11.8,
“Sequence of generated events”.

The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. just
prior to release.

###### See

MatterSpecification.v11.Cluster § 1.11.7.5

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L223)

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

> `readonly` **multiPressComplete**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **multiPressOngoing**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L126)

***

### MomentarySwitchReleaseComponent

> `const` **MomentarySwitchReleaseComponent**: `object`

A SwitchCluster supports these elements if it supports feature MomentarySwitchRelease.

#### Type declaration

##### events

> `readonly` **events**: `object`

##### events.shortRelease

> `readonly` **shortRelease**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:253](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L253)

***

### TlvInitialPressEvent

> `const` **TlvInitialPressEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Switch initialPress event

#### See

MatterSpecification.v11.Cluster § 1.11.7.2

#### Type declaration

##### newPosition

> **newPosition**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L72)

***

### TlvLongPressEvent

> `const` **TlvLongPressEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Switch longPress event

#### See

MatterSpecification.v11.Cluster § 1.11.7.3

#### Type declaration

##### newPosition

> **newPosition**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L86)

***

### TlvLongReleaseEvent

> `const` **TlvLongReleaseEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Switch longRelease event

#### See

MatterSpecification.v11.Cluster § 1.11.7.5

#### Type declaration

##### previousPosition

> **previousPosition**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L100)

***

### TlvMultiPressCompleteEvent

> `const` **TlvMultiPressCompleteEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Switch multiPressComplete event

#### See

MatterSpecification.v11.Cluster § 1.11.7.7

#### Type declaration

##### previousPosition

> **previousPosition**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### totalNumberOfPressesCounted

> **totalNumberOfPressesCounted**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L41)

***

### TlvMultiPressOngoingEvent

> `const` **TlvMultiPressOngoingEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Switch multiPressOngoing event

#### See

MatterSpecification.v11.Cluster § 1.11.7.6

#### Type declaration

##### currentNumberOfPressesCounted

> **currentNumberOfPressesCounted**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### newPosition

> **newPosition**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L24)

***

### TlvShortReleaseEvent

> `const` **TlvShortReleaseEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Switch shortRelease event

#### See

MatterSpecification.v11.Cluster § 1.11.7.4

#### Type declaration

##### previousPosition

> **previousPosition**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L114)

***

### TlvSwitchLatchedEvent

> `const` **TlvSwitchLatchedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the Switch switchLatched event

#### See

MatterSpecification.v11.Cluster § 1.11.7.1

#### Type declaration

##### newPosition

> **newPosition**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L58)
