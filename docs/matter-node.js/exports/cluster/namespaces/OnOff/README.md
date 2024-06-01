[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / OnOff

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

> `readonly` **levelControlForLighting**: [`BitFlag`](../../../schema/README.md#bitflag)

LevelControlForLighting

Behavior that supports lighting applications.

##### id

> `readonly` **id**: `6`

##### name

> `readonly` **name**: `"OnOff"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:263

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:631

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

> `readonly` **levelControlForLighting**: [`BitFlag`](../../../schema/README.md#bitflag)

LevelControlForLighting

Behavior that supports lighting applications.

##### id

> `readonly` **id**: `6`

##### name

> `readonly` **name**: `"OnOff"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:444

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:794

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

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.globalSceneControl

> `readonly` **globalSceneControl**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.offWaitTime

> `readonly` **offWaitTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.onOff

> `readonly` **onOff**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

##### attributes.onTime

> `readonly` **onTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.startUpOnOff

> `readonly` **startUpOnOff**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`StartUpOnOff`](enumerations/StartUpOnOff.md) \| `null`, `any`\> & `object`

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

##### commands.off

> `readonly` **off**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.1

##### commands.offWithEffect

> `readonly` **offWithEffect**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.on

> `readonly` **on**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.2

##### commands.onWithRecallGlobalScene

> `readonly` **onWithRecallGlobalScene**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.onWithTimedOff

> `readonly` **onWithTimedOff**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.toggle

> `readonly` **toggle**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command does not have any data fields.

###### See

MatterSpecification.v11.Cluster § 1.5.7.3

##### features

> `readonly` **features**: `object`

##### features.levelControlForLighting

> `readonly` **levelControlForLighting**: [`BitFlag`](../../../schema/README.md#bitflag)

LevelControlForLighting

Behavior that supports lighting applications.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"OnOff"`

##### revision

> `readonly` **revision**: `4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:637

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

> `readonly` **offWaitTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state shall be
guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ state (e.g., when
leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and
attempts to turn the lights back on). This attribute can be written at any time, but writing a value
only has an effect when in the ‘Timed On’ state followed by a transition to the ‘Delayed Off' state, or
in the ‘Delayed Off’ state. See OnWithTimedOff Command for more details.

###### See

MatterSpecification.v11.Cluster § 1.5.6.4

##### attributes.onTime

> `readonly` **onTime**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state shall be
maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff command.
This attribute can be written at any time, but writing a value only has effect when in the ‘Timed On’
state. See OnWithTimedOff Command for more details.

###### See

MatterSpecification.v11.Cluster § 1.5.6.3

##### attributes.startUpOnOff

> `readonly` **startUpOnOff**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`StartUpOnOff`](enumerations/StartUpOnOff.md) \| `null`, `any`\>

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

> `readonly` **offWithEffect**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **onWithTimedOff**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received
during this time, are prevented from turning the devices back on. Further

OnWithTimedOff commands received while the server is turned on, will update the period that the device
is turned on.

###### See

MatterSpecification.v11.Cluster § 1.5.7.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:119

***

### OnOffControl

> `const` **OnOffControl**: `object`

The value of OnOff.onOffControl

#### See

MatterSpecification.v11.Cluster § 1.5.7.6.1

#### Type declaration

##### acceptOnlyWhenOn

> **acceptOnlyWhenOn**: [`BitFlag`](../../../schema/README.md#bitflag)

##### reserved

> **reserved**: [`BitField`](../../../schema/README.md#bitfield)

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:71

***

### TlvOffWithEffectRequest

> `const` **TlvOffWithEffectRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OnOff offWithEffect command

#### See

MatterSpecification.v11.Cluster § 1.5.7.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:40

***

### TlvOnWithTimedOffRequest

> `const` **TlvOnWithTimedOffRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the OnOff onWithTimedOff command

#### See

MatterSpecification.v11.Cluster § 1.5.7.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:80
