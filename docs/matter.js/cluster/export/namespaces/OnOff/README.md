[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / OnOff

# Namespace: OnOff

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [OnOffEffectIdentifier](enumerations/OnOffEffectIdentifier.md)
- [StartUpOnOff](enumerations/StartUpOnOff.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [OffWithEffectRequest](interfaces/OffWithEffectRequest.md)
- [OnWithTimedOffRequest](interfaces/OnWithTimedOffRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all OnOff clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.onOff

> `readonly` **onOff**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or
turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.

###### See

MatterSpecification.v11.Cluster § 1.5.6.1

##### commands

> `readonly` **commands**: `object`

##### commands.off

> `readonly` **off**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.1

##### commands.on

> `readonly` **on**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.2

##### commands.toggle

> `readonly` **toggle**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.3

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which OnOffCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.levelControlForLighting

> `readonly` **levelControlForLighting**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LevelControlForLighting

Behavior that supports lighting applications.

##### id

> `readonly` **id**: `6` = `0x6`

##### name

> `readonly` **name**: `"OnOff"` = `"OnOff"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L242)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:311](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L311)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.onOff

> `readonly` **onOff**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or
turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.

###### See

MatterSpecification.v11.Cluster § 1.5.6.1

##### commands

> `readonly` **commands**: `object`

##### commands.off

> `readonly` **off**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.1

##### commands.on

> `readonly` **on**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.2

##### commands.toggle

> `readonly` **toggle**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.3

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which OnOffCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.levelControlForLighting

> `readonly` **levelControlForLighting**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LevelControlForLighting

Behavior that supports lighting applications.

##### id

> `readonly` **id**: `6` = `0x6`

##### name

> `readonly` **name**: `"OnOff"` = `"OnOff"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L300)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:368](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L368)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.globalSceneControl

> `readonly` **globalSceneControl**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.offWaitTime

> `readonly` **offWaitTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.onOff

> `readonly` **onOff**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or
turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.

###### See

MatterSpecification.v11.Cluster § 1.5.6.1

##### attributes.onTime

> `readonly` **onTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.startUpOnOff

> `readonly` **startUpOnOff**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`StartUpOnOff`](enumerations/StartUpOnOff.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.off

> `readonly` **off**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.1

##### commands.offWithEffect

> `readonly` **offWithEffect**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.on

> `readonly` **on**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.2

##### commands.onWithRecallGlobalScene

> `readonly` **onWithRecallGlobalScene**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.onWithTimedOff

> `readonly` **onWithTimedOff**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.toggle

> `readonly` **toggle**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.3

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.levelControlForLighting

> `readonly` **levelControlForLighting**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

LevelControlForLighting

Behavior that supports lighting applications.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`6`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"OnOff"` = `Cluster.name`

##### revision

> `readonly` **revision**: `4` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:319](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L319)

***

### LevelControlForLightingComponent

> `const` **LevelControlForLightingComponent**: `object`

A OnOffCluster supports these elements if it supports feature LevelControlForLighting.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.globalSceneControl

> `readonly` **globalSceneControl**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

In order to support the use case where the user gets back the last setting of a set of devices (e.g.
level settings for lights), a global scene is introduced which is stored when the devices are turned off
and recalled when the devices are turned on. The global scene is defined as the scene that is stored
with group identifier 0 and scene identifier 0.

The GlobalSceneControl attribute is defined in order to prevent a second Off command storing the
all-devices-off situation as a global scene, and to prevent a second On command destroying the current
settings by going back to the global scene.

The GlobalSceneControl attribute shall be set to TRUE after the reception of a command which causes the
OnOff attribute to be set to TRUE, such as a standard On command, a MoveToLevel(WithOnOff) command, a
RecallScene command or a OnWithRecallGlobalScene command (see OnWithRecallGlobalScene Command).

The GlobalSceneControl attribute is set to FALSE after reception of a OffWithEffect command.

###### See

MatterSpecification.v11.Cluster § 1.5.6.2

##### attributes.offWaitTime

> `readonly` **offWaitTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state shall be
guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ state (e.g., when
leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and
attempts to turn the lights back on). This attribute can be written at any time, but writing a value
only has an effect when in the ‘Timed On’ state followed by a transition to the ‘Delayed Off' state, or
in the ‘Delayed Off’ state. See OnWithTimedOff Command for more details.

###### See

MatterSpecification.v11.Cluster § 1.5.6.4

##### attributes.onTime

> `readonly` **onTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state shall be
maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff command.
This attribute can be written at any time, but writing a value only has effect when in the ‘Timed On’
state. See OnWithTimedOff Command for more details.

###### See

MatterSpecification.v11.Cluster § 1.5.6.3

##### attributes.startUpOnOff

> `readonly` **startUpOnOff**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| [`StartUpOnOff`](enumerations/StartUpOnOff.md), `any`\>

The StartUpOnOff attribute shall define the desired startup behavior of a device when it is supplied
with power and this state shall be reflected in the OnOff attribute. If the value is null, the OnOff
attribute is set to its previous value. Otherwise, the behavior is defined in the table defining
StartUpOnOffEnum.

This behavior does not apply to reboots associated with OTA. After an OTA restart, the OnOff attribute
shall return to its value prior to the restart.

###### See

MatterSpecification.v11.Cluster § 1.5.6.5

##### commands

> `readonly` **commands**: `object`

##### commands.offWithEffect

> `readonly` **offWithEffect**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The OffWithEffect command allows devices to be turned off using enhanced ways of fading.

###### See

MatterSpecification.v11.Cluster § 1.5.7.4

##### commands.onWithRecallGlobalScene

> `readonly` **onWithRecallGlobalScene**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off.

The OnWithRecallGlobalScene command shall have no parameters.

###### See

MatterSpecification.v11.Cluster § 1.5.7.5

##### commands.onWithTimedOff

> `readonly` **onWithTimedOff**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received
during this time, are prevented from turning the devices back on. Further

OnWithTimedOff commands received while the server is turned on, will update the period that the device
is turned on.

###### See

MatterSpecification.v11.Cluster § 1.5.7.6

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L132)

***

### OnOffControl

> `const` **OnOffControl**: `object`

The value of OnOff.onOffControl

#### See

MatterSpecification.v11.Cluster § 1.5.7.6.1

#### Type declaration

##### acceptOnlyWhenOn

> **acceptOnlyWhenOn**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### reserved

> **reserved**: [`BitField`](../../../../schema/export/README.md#bitfield)

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L86)

***

### TlvOffWithEffectRequest

> `const` **TlvOffWithEffectRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OnOff offWithEffect command

#### See

MatterSpecification.v11.Cluster § 1.5.7.4

#### Type declaration

##### effectIdentifier

> **effectIdentifier**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`OnOffEffectIdentifier`](enumerations/OnOffEffectIdentifier.md)\>

The EffectIdentifier field specifies the fading effect to use when turning the device off. This field shall
contain one of the non-reserved values listed in Values of the EffectIdentifier Field of the OffWithEffect
Command.

###### See

MatterSpecification.v11.Cluster § 1.5.7.4.1

##### effectVariant

> **effectVariant**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The EffectVariant field is used to indicate which variant of the effect, indicated in the EffectIdentifier
field, SHOULD be triggered. If the server does not support the given variant, it shall use the default
variant. This field is dependent on the value of the EffectIdentifier field and shall contain one of the
non-reserved values listed in Values of the EffectVariant Field of the OffWithEffect Command.

###### See

MatterSpecification.v11.Cluster § 1.5.7.4.2

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L53)

***

### TlvOnWithTimedOffRequest

> `const` **TlvOnWithTimedOffRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the OnOff onWithTimedOff command

#### See

MatterSpecification.v11.Cluster § 1.5.7.6

#### Type declaration

##### offWaitTime

> **offWaitTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.

###### See

MatterSpecification.v11.Cluster § 1.5.7.6.3

##### onOffControl

> **onOffControl**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

The OnOffControl field contains information on how the server is to be operated. This field shall be
formatted as illustrated in Format of the OnOffControl Field of the OnWithTimedOff Command.

The AcceptOnlyWhenOn sub-field is 1 bit in length and specifies whether the OnWithTimedOff command is to be
processed unconditionally or only when the OnOff attribute is equal to TRUE. If this sub-field is set to 1,
the OnWithTimedOff command shall only be accepted if the OnOff attribute is equal to TRUE. If this sub-field
is set to 0, the OnWithTimedOff command shall be processed unconditionally.

###### See

MatterSpecification.v11.Cluster § 1.5.7.6.1

##### onTime

> **onTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The OnTime field is used to adjust the value of the OnTime attribute.

###### See

MatterSpecification.v11.Cluster § 1.5.7.6.2

#### Source

[packages/matter.js/src/cluster/definitions/OnOffCluster.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OnOffCluster.ts#L93)
