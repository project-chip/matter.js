[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / PulseWidthModulation

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

> `readonly` **currentLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

###### See

MatterSpecification.v11.Cluster § 1.6.5.1

##### attributes.defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.12

##### attributes.onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.11

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

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

> `readonly` **move**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.2

##### commands.moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **step**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **frequency**: [`BitFlag`](../../../schema/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

##### features.lighting

> `readonly` **lighting**: [`BitFlag`](../../../schema/README.md#bitflag)

Lighting

Behavior that supports lighting applications

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `28`

##### name

> `readonly` **name**: `"PulseWidthModulation"`

##### revision

> `readonly` **revision**: `5`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:248

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:829

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
dependent.

###### See

MatterSpecification.v11.Cluster § 1.6.5.1

##### attributes.defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The OffTransitionTime attribute represents the time taken to move the current level from the maximum
level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.12

##### attributes.onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

The OnTransitionTime attribute represents the time taken to move the current level from the minimum
level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
OnOffTransitionTime will be used instead.

###### See

MatterSpecification.v11.Cluster § 1.6.5.11

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

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

> `readonly` **move**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.2

##### commands.moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **step**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **frequency**: [`BitFlag`](../../../schema/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

##### features.lighting

> `readonly` **lighting**: [`BitFlag`](../../../schema/README.md#bitflag)

Lighting

Behavior that supports lighting applications

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `28`

##### name

> `readonly` **name**: `"PulseWidthModulation"`

##### revision

> `readonly` **revision**: `5`

##### supportedFeatures

> `readonly` **supportedFeatures**: `object`

##### supportedFeatures.onOff

> `readonly` **onOff**: `true`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:533

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:1058

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentFrequency

> `readonly` **currentFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.currentLevel

> `readonly` **currentLevel**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `null`, `any`\>

##### attributes.defaultMoveRate

> `readonly` **defaultMoveRate**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.maxFrequency

> `readonly` **maxFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.maxLevel

> `readonly` **maxLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### attributes.minFrequency

> `readonly` **minFrequency**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.minLevel

> `readonly` **minLevel**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

##### attributes.offTransitionTime

> `readonly` **offTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.onLevel

> `readonly` **onLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.onOffTransitionTime

> `readonly` **onOffTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.onTransitionTime

> `readonly` **onTransitionTime**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.options

> `readonly` **options**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `any`\>

##### attributes.remainingTime

> `readonly` **remainingTime**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.startUpCurrentLevel

> `readonly` **startUpCurrentLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.move

> `readonly` **move**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.2

##### commands.moveToClosestFrequency

> `readonly` **moveToClosestFrequency**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.moveToLevel

> `readonly` **moveToLevel**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **step**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **stop**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.4

##### commands.stopWithOnOff

> `readonly` **stopWithOnOff**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6

##### features

> `readonly` **features**: `object`

##### features.frequency

> `readonly` **frequency**: [`BitFlag`](../../../schema/README.md#bitflag)

Frequency

Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
control.

##### features.lighting

> `readonly` **lighting**: [`BitFlag`](../../../schema/README.md#bitflag)

Lighting

Behavior that supports lighting applications

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"PulseWidthModulation"`

##### revision

> `readonly` **revision**: `5`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:835

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

> `readonly` **moveToClosestFrequency**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 1.6.6.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:186

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

> `readonly` **startUpCurrentLevel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

The StartUpCurrentLevel attribute shall define the desired startup level for a device when it is
supplied with power and this level shall be reflected in the CurrentLevel attribute. The values of the
StartUpCurrentLevel attribute are listed below:

Table 20. Values of the StartUpCurrentLevel attribute

This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel
attribute shall return to its value prior to the restart.

###### See

MatterSpecification.v11.Cluster § 1.6.5.14

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:159

***

### Options

> `const` **Options**: `object`

The value of the PulseWidthModulation options attribute

#### See

MatterSpecification.v11.Cluster § 1.6.5.8

#### Type declaration

##### coupleColorTempToLevel

> **coupleColorTempToLevel**: [`BitFlag`](../../../schema/README.md#bitflag)

##### executeIfOff

> **executeIfOff**: [`BitFlag`](../../../schema/README.md#bitflag)

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:33

***

### TlvMoveRequest

> `const` **TlvMoveRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the PulseWidthModulation move command

#### See

MatterSpecification.v11.Cluster § 1.6.6.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:75

***

### TlvMoveToClosestFrequencyRequest

> `const` **TlvMoveToClosestFrequencyRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the PulseWidthModulation moveToClosestFrequency command

#### See

MatterSpecification.v11.Cluster § 1.6.6.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:18

***

### TlvMoveToLevelRequest

> `const` **TlvMoveToLevelRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the PulseWidthModulation moveToLevel command

#### See

MatterSpecification.v11.Cluster § 1.6.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:42

***

### TlvStepRequest

> `const` **TlvStepRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the PulseWidthModulation step command

#### See

MatterSpecification.v11.Cluster § 1.6.6.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:114

***

### TlvStopRequest

> `const` **TlvStopRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the PulseWidthModulation stop command

#### See

MatterSpecification.v11.Cluster § 1.6.6.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/PulseWidthModulationCluster.d.ts:139
