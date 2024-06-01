[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ModeSelect

# Namespace: ModeSelect

## Index

### Enumerations

- [Feature](enumerations/Feature.md)

### Interfaces

- [ChangeToModeRequest](interfaces/ChangeToModeRequest.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [ModeOptionStruct](interfaces/ModeOptionStruct.md)
- [SemanticTagStruct](interfaces/SemanticTagStruct.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all ModeSelect clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentMode

> `readonly` **currentMode**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute represents the current mode of the server.

The value of this field must match the Mode field of one of the entries in the SupportedModes

attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.5.4

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute describes the purpose of the server, in readable text.

For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another
Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the
description Milk and the second instance can have the description Sugar. This allows the user to tell
the purpose of each of the instances.

###### See

MatterSpecification.v11.Cluster § 1.8.5.1

##### attributes.standardNamespace

> `readonly` **standardNamespace**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

###### See

MatterSpecification.v11.Cluster § 1.8.5.2

##### attributes.startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The StartUpMode attribute value indicates the desired startup mode for the server when it is supplied
with power.

If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when the
server is powered up, except in the case when the OnMode attribute overrides the StartUpMode attribute.

This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode
attribute shall return to its value prior to the restart.

The value of this field shall match the Mode field of one of the entries in the SupportedModes

attribute.

If this attribute is not implemented, or is set to the null value, it shall have no effect.

###### See

MatterSpecification.v11.Cluster § 1.8.5.5

##### attributes.supportedModes

> `readonly` **supportedModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

###### See

MatterSpecification.v11.Cluster § 1.8.5.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeToMode

> `readonly` **changeToMode**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

###### See

MatterSpecification.v11.Cluster § 1.8.6.1

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which ModeSelectCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `80` = `0x50`

##### name

> `readonly` **name**: `"ModeSelect"` = `"ModeSelect"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L161)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:290](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L290)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentMode

> `readonly` **currentMode**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute represents the current mode of the server.

The value of this field must match the Mode field of one of the entries in the SupportedModes

attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.5.4

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute describes the purpose of the server, in readable text.

For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another
Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the
description Milk and the second instance can have the description Sugar. This allows the user to tell
the purpose of each of the instances.

###### See

MatterSpecification.v11.Cluster § 1.8.5.1

##### attributes.standardNamespace

> `readonly` **standardNamespace**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

###### See

MatterSpecification.v11.Cluster § 1.8.5.2

##### attributes.startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The StartUpMode attribute value indicates the desired startup mode for the server when it is supplied
with power.

If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when the
server is powered up, except in the case when the OnMode attribute overrides the StartUpMode attribute.

This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode
attribute shall return to its value prior to the restart.

The value of this field shall match the Mode field of one of the entries in the SupportedModes

attribute.

If this attribute is not implemented, or is set to the null value, it shall have no effect.

###### See

MatterSpecification.v11.Cluster § 1.8.5.5

##### attributes.supportedModes

> `readonly` **supportedModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

###### See

MatterSpecification.v11.Cluster § 1.8.5.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeToMode

> `readonly` **changeToMode**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

###### See

MatterSpecification.v11.Cluster § 1.8.6.1

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which ModeSelectCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `80` = `0x50`

##### name

> `readonly` **name**: `"ModeSelect"` = `"ModeSelect"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L262)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:316](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L316)

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

##### attributes.currentMode

> `readonly` **currentMode**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute represents the current mode of the server.

The value of this field must match the Mode field of one of the entries in the SupportedModes

attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.5.4

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute describes the purpose of the server, in readable text.

For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another
Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the
description Milk and the second instance can have the description Sugar. This allows the user to tell
the purpose of each of the instances.

###### See

MatterSpecification.v11.Cluster § 1.8.5.1

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.onMode

> `readonly` **onMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.standardNamespace

> `readonly` **standardNamespace**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

###### See

MatterSpecification.v11.Cluster § 1.8.5.2

##### attributes.startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

The StartUpMode attribute value indicates the desired startup mode for the server when it is supplied
with power.

If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when the
server is powered up, except in the case when the OnMode attribute overrides the StartUpMode attribute.

This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode
attribute shall return to its value prior to the restart.

The value of this field shall match the Mode field of one of the entries in the SupportedModes

attribute.

If this attribute is not implemented, or is set to the null value, it shall have no effect.

###### See

MatterSpecification.v11.Cluster § 1.8.5.5

##### attributes.supportedModes

> `readonly` **supportedModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

###### See

MatterSpecification.v11.Cluster § 1.8.5.3

##### commands

> `readonly` **commands**: `object` = `Cluster.commands`

##### commands.changeToMode

> `readonly` **changeToMode**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

###### See

MatterSpecification.v11.Cluster § 1.8.6.1

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`80`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"ModeSelect"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:298](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L298)

***

### OnOffComponent

> `const` **OnOffComponent**: `object`

A ModeSelectCluster supports these elements if it supports feature OnOff.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.onMode

> `readonly` **onMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the value of CurrentMode that depends on the state of the On/Off cluster
on the same endpoint. If this attribute is not present or is set to null, it shall NOT have an effect,
otherwise the CurrentMode attribute shall depend on the OnOff attribute of the On/Off cluster

The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.5.6

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L129)

***

### TlvChangeToModeRequest

> `const` **TlvChangeToModeRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ModeSelect changeToMode command

#### See

MatterSpecification.v11.Cluster § 1.8.6.1

#### Type declaration

##### newMode

> **newMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L117)

***

### TlvModeOptionStruct

> `const` **TlvModeOptionStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This is a struct representing a possible mode of the server.

#### See

MatterSpecification.v11.Cluster § 1.8.8.1

#### Type declaration

##### label

> **label**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This field is readable text that describes the mode option that can be used by a client to indicate to the
user what this option means. This field is meant to be readable and understandable by the user.

###### See

MatterSpecification.v11.Cluster § 1.8.8.1.1

##### mode

> **mode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

The Mode field is used to identify the mode option. The value shall be unique for every item in the
SupportedModes attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.8.1.2

##### semanticTags

> **semanticTags**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

This field is a list of semantic tags that map to the mode option. This may be used by clients to determine
the meaning of the mode option as defined in a standard or manufacturer specific namespace. Semantic tags
can help clients look for options that meet certain criteria. A semantic tag shall be either a standard tag
or manufacturer specific tag as defined in each SemanticTagStruct list entry.

A mode option may have more than one semantic tag. A mode option may be mapped to a mixture of standard and
manufacturer specific semantic tags.

All standard semantic tags are from a single namespace indicated by the StandardNamespace attribute.

For example: A mode labeled "100%" can have both the HIGH (MS) and MAX (standard) semantic tag. Clients
seeking the option for either HIGH or MAX will find the same option in this case.

###### See

MatterSpecification.v11.Cluster § 1.8.8.1.3

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L69)

***

### TlvSemanticTagStruct

> `const` **TlvSemanticTagStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

#### See

MatterSpecification.v11.Cluster § 1.8.8.2

#### Type declaration

##### mfgCode

> **mfgCode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`VendorId`](../../../../datatype/export/README.md#vendorid)\>

If this field is null, the Value field shall be defined in a standard namespace as indicated by the
StandardNamespace attribute. If this field is not null, it shall indicate a manufacturer code (Vendor ID),
and the Value field shall indicate a semantic tag defined by the manufacturer. Each manufacturer code
supports a single namespace of values. The same manufacturer code and semantic tag value in separate cluster
instances are part of the same namespace and have the same meaning. For example: a manufacturer tag meaning
"pinch", has the same meaning in a cluster whose purpose is to choose the amount of sugar, or amount of salt.

###### See

MatterSpecification.v11.Cluster § 1.8.8.2.2

##### value

> **value**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the semantic tag within a semantic tag namespace which is either manufacturer
specific or standard. For semantic tags in a standard namespace, see Standard Namespace.

###### See

MatterSpecification.v11.Cluster § 1.8.8.2.1

#### Source

[packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ModeSelectCluster.ts#L35)
