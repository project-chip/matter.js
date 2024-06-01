[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / PulseWidthModulation

# Namespace: PulseWidthModulation

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [MoveMode](enumerations/MoveMode.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [MoveRequest](interfaces/MoveRequest.md)
- [MoveToClosestFrequencyRequest](interfaces/MoveToClosestFrequencyRequest.md)
- [MoveToLevelRequest](interfaces/MoveToLevelRequest.md)
- [StepRequest](interfaces/StepRequest.md)
- [StopRequest](interfaces/StopRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all PulseWidthModulation clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

###### See

MatterSpecification.v11.Cluster § 1.6.5.1

##### attributes.defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
received with a null value Rate parameter.

###### See

MatterSpecification.v11.Cluster § 1.6.5.13

##### attributes.maxLevel

> `readonly` **maxLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.4

##### attributes.minLevel

> `readonly` **minLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.3

##### attributes.offTransitionTime

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.12

##### attributes.onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.

###### See

MatterSpecification.v11.Cluster § 1.6.5.10

##### attributes.onOffTransitionTime

> `readonly` **onOffTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
second.

The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that
if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
implemented.

###### See

MatterSpecification.v11.Cluster § 1.6.5.9

##### attributes.onTransitionTime

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.11

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 19. Options Attribute

###### See

MatterSpecification.v11.Cluster § 1.6.5.8

##### commands

> `readonly` **commands**: `object`

##### commands.move

> `readonly` **move**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.2

##### commands.moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.1

##### commands.moveToLevelWithOnOff

> `readonly` **moveToLevelWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.moveWithOnOff

> `readonly` **moveWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.step

> `readonly` **step**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a
second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as
close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD
move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

###### See

MatterSpecification.v11.Cluster § 1.6.6.3

##### commands.stepWithOnOff

> `readonly` **stepWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.4

##### commands.stopWithOnOff

> `readonly` **stopWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`]

This metadata controls which PulseWidthModulationCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.frequency

> `readonly` **frequency**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

##### features.lighting

> `readonly` **lighting**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Lighting

Behavior that supports lighting applications

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `28` = `0x1c`

##### name

> `readonly` **name**: `"PulseWidthModulation"` = `"PulseWidthModulation"`

##### revision

> `readonly` **revision**: `5` = `5`

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L255)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:452](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L452)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

###### See

MatterSpecification.v11.Cluster § 1.6.5.1

##### attributes.defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
received with a null value Rate parameter.

###### See

MatterSpecification.v11.Cluster § 1.6.5.13

##### attributes.maxLevel

> `readonly` **maxLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.4

##### attributes.minLevel

> `readonly` **minLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.3

##### attributes.offTransitionTime

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.12

##### attributes.onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.

###### See

MatterSpecification.v11.Cluster § 1.6.5.10

##### attributes.onOffTransitionTime

> `readonly` **onOffTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
second.

The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that
if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
implemented.

###### See

MatterSpecification.v11.Cluster § 1.6.5.9

##### attributes.onTransitionTime

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.11

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 19. Options Attribute

###### See

MatterSpecification.v11.Cluster § 1.6.5.8

##### commands

> `readonly` **commands**: `object`

##### commands.move

> `readonly` **move**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.2

##### commands.moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.1

##### commands.moveToLevelWithOnOff

> `readonly` **moveToLevelWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.moveWithOnOff

> `readonly` **moveWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.step

> `readonly` **step**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a
second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as
close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD
move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

###### See

MatterSpecification.v11.Cluster § 1.6.6.3

##### commands.stepWithOnOff

> `readonly` **stepWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.4

##### commands.stopWithOnOff

> `readonly` **stopWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`]

This metadata controls which PulseWidthModulationCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.frequency

> `readonly` **frequency**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

##### features.lighting

> `readonly` **lighting**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Lighting

Behavior that supports lighting applications

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `28` = `0x1c`

##### name

> `readonly` **name**: `"PulseWidthModulation"` = `"PulseWidthModulation"`

##### revision

> `readonly` **revision**: `5` = `5`

##### supportedFeatures

> `readonly` **supportedFeatures**: `object`

##### supportedFeatures.onOff

> `readonly` **onOff**: `true` = `true`

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:439](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L439)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:506](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L506)

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

##### attributes.currentFrequency

> `readonly` **currentFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

###### See

MatterSpecification.v11.Cluster § 1.6.5.1

##### attributes.defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
received with a null value Rate parameter.

###### See

MatterSpecification.v11.Cluster § 1.6.5.13

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.maxFrequency

> `readonly` **maxFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.maxLevel

> `readonly` **maxLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.4

##### attributes.minFrequency

> `readonly` **minFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.minLevel

> `readonly` **minLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.

###### See

MatterSpecification.v11.Cluster § 1.6.5.3

##### attributes.offTransitionTime

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.12

##### attributes.onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.

###### See

MatterSpecification.v11.Cluster § 1.6.5.10

##### attributes.onOffTransitionTime

> `readonly` **onOffTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
second.

The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that
if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
implemented.

###### See

MatterSpecification.v11.Cluster § 1.6.5.9

##### attributes.onTransitionTime

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.11

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

The Options attribute is meant to be changed only during commissioning. The Options attribute is a
bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
the Options attribute shall first construct a temporary Options bitmap that is in effect during the
command processing. The temporary Options bitmap has the same format and meaning as the Options
attribute, but includes any bits that may be overridden by command fields.

Below is the format and description of the Options attribute and temporary Options bitmap and the effect
on dependent commands.

Table 19. Options Attribute

###### See

MatterSpecification.v11.Cluster § 1.6.5.8

##### attributes.remainingTime

> `readonly` **remainingTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.startUpCurrentLevel

> `readonly` **startUpCurrentLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

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

##### commands.move

> `readonly` **move**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.2

##### commands.moveToClosestFrequency

> `readonly` **moveToClosestFrequency**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.1

##### commands.moveToLevelWithOnOff

> `readonly` **moveToLevelWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.moveWithOnOff

> `readonly` **moveWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.step

> `readonly` **step**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.

The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a
second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as
close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD
move as fast as it is able.

If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.

###### See

MatterSpecification.v11.Cluster § 1.6.6.3

##### commands.stepWithOnOff

> `readonly` **stepWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### commands.stop

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.4

##### commands.stopWithOnOff

> `readonly` **stopWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.frequency

> `readonly` **frequency**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

##### features.lighting

> `readonly` **lighting**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Lighting

Behavior that supports lighting applications

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`28`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"PulseWidthModulation"` = `Cluster.name`

##### revision

> `readonly` **revision**: `5` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:461](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L461)

***

### FrequencyComponent

> `const` **FrequencyComponent**: `object`

A PulseWidthModulationCluster supports these elements if it supports feature Frequency.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentFrequency

> `readonly` **currentFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A
CurrentFrequency of 0 is unknown.

###### See

MatterSpecification.v11.Cluster § 1.6.5.5

##### attributes.maxFrequency

> `readonly` **maxFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being
assigned. MaxFrequency shall be greater than or equal to MinFrequency. A value of 0 indicates undefined.

###### See

MatterSpecification.v11.Cluster § 1.6.5.7

##### attributes.minFrequency

> `readonly` **minFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being
assigned. MinFrequency shall be less than or equal to MaxFrequency. A value of 0 indicates undefined.

###### See

MatterSpecification.v11.Cluster § 1.6.5.6

##### commands

> `readonly` **commands**: `object`

##### commands.moveToClosestFrequency

> `readonly` **moveToClosestFrequency**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.5

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L188)

***

### LightingComponent

> `const` **LightingComponent**: `object`

A PulseWidthModulationCluster supports these elements if it supports feature Lighting.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.remainingTime

> `readonly` **remainingTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

The RemainingTime attribute represents the time remaining until the current command is complete - it is
specified in 1/10ths of a second.

###### See

MatterSpecification.v11.Cluster § 1.6.5.2

##### attributes.startUpCurrentLevel

> `readonly` **startUpCurrentLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

The StartUpCurrentLevel attribute shall define the desired startup level for a device when it is
supplied with power and this level shall be reflected in the CurrentLevel attribute. The values of the
StartUpCurrentLevel attribute are listed below:

Table 20. Values of the StartUpCurrentLevel attribute

This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel
attribute shall return to its value prior to the restart.

###### See

MatterSpecification.v11.Cluster § 1.6.5.14

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L155)

***

### Options

> `const` **Options**: `object`

The value of the PulseWidthModulation options attribute

#### See

MatterSpecification.v11.Cluster § 1.6.5.8

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L48)

***

### TlvMoveRequest

> `const` **TlvMoveRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the PulseWidthModulation move command

#### See

MatterSpecification.v11.Cluster § 1.6.6.2

#### Type declaration

##### moveMode

> **moveMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`MoveMode`](enumerations/MoveMode.md)\>

The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field.

###### See

MatterSpecification.v11.Cluster § 1.6.6.2.1

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### rate

> **rate**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The Rate field specifies the rate of movement in units per second. The actual rate of movement SHOULD be as
close to this rate as the device is able. If the Rate field is equal to null, then the value in
DefaultMoveRate attribute shall be used. However, if the Rate field is equal to null and the DefaultMoveRate
attribute is not supported, or if the Rate field is equal to null and the value of the DefaultMoveRate
attribute is equal to null, then the device SHOULD move as fast as it is able. If the device is not able to
move at a variable rate, this field may be disregarded.

###### See

MatterSpecification.v11.Cluster § 1.6.6.2.2

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L84)

***

### TlvMoveToClosestFrequencyRequest

> `const` **TlvMoveToClosestFrequencyRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the PulseWidthModulation moveToClosestFrequency command

#### See

MatterSpecification.v11.Cluster § 1.6.6.5

#### Type declaration

##### frequency

> **frequency**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L34)

***

### TlvMoveToLevelRequest

> `const` **TlvMoveToLevelRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the PulseWidthModulation moveToLevel command

#### See

MatterSpecification.v11.Cluster § 1.6.6.1

#### Type declaration

##### level

> **level**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L55)

***

### TlvStepRequest

> `const` **TlvStepRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the PulseWidthModulation step command

#### See

MatterSpecification.v11.Cluster § 1.6.6.3

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### stepMode

> **stepMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### stepSize

> **stepSize**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### transitionTime

> **transitionTime**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L120)

***

### TlvStopRequest

> `const` **TlvStopRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the PulseWidthModulation stop command

#### See

MatterSpecification.v11.Cluster § 1.6.6.4

#### Type declaration

##### optionsMask

> **optionsMask**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

##### optionsOverride

> **optionsOverride**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>\>

#### Source

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L140)
