[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ModeSelect

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

> `readonly` **standardNamespace**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number` \| `null`, `any`\>

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

###### See

MatterSpecification.v11.Cluster § 1.8.5.2

##### attributes.startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **supportedModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

###### See

MatterSpecification.v11.Cluster § 1.8.5.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeToMode

> `readonly` **changeToMode**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **onOff**: [`BitFlag`](../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `80`

##### name

> `readonly` **name**: `"ModeSelect"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:157

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:506

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

> `readonly` **standardNamespace**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number` \| `null`, `any`\>

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

###### See

MatterSpecification.v11.Cluster § 1.8.5.2

##### attributes.startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

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

> `readonly` **supportedModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

###### See

MatterSpecification.v11.Cluster § 1.8.5.3

##### commands

> `readonly` **commands**: `object`

##### commands.changeToMode

> `readonly` **changeToMode**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

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

> `readonly` **onOff**: [`BitFlag`](../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: `80`

##### name

> `readonly` **name**: `"ModeSelect"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:320

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:623

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

##### attributes.currentMode

> `readonly` **currentMode**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.onMode

> `readonly` **onMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.standardNamespace

> `readonly` **standardNamespace**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number` \| `null`, `any`\>

##### attributes.supportedModes

> `readonly` **supportedModes**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.changeToMode

> `readonly` **changeToMode**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

###### See

MatterSpecification.v11.Cluster § 1.8.6.1

##### features

> `readonly` **features**: `object`

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../schema/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"ModeSelect"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:512

***

### OnOffComponent

> `const` **OnOffComponent**: `object`

A ModeSelectCluster supports these elements if it supports feature OnOff.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.onMode

> `readonly` **onMode**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number` \| `null`, `any`\>

This attribute shall indicate the value of CurrentMode that depends on the state of the On/Off cluster
on the same endpoint. If this attribute is not present or is set to null, it shall NOT have an effect,
otherwise the CurrentMode attribute shall depend on the OnOff attribute of the On/Off cluster

The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.5.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:127

***

### TlvChangeToModeRequest

> `const` **TlvChangeToModeRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ModeSelect changeToMode command

#### See

MatterSpecification.v11.Cluster § 1.8.6.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:114

***

### TlvModeOptionStruct

> `const` **TlvModeOptionStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This is a struct representing a possible mode of the server.

#### See

MatterSpecification.v11.Cluster § 1.8.8.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:50

***

### TlvSemanticTagStruct

> `const` **TlvSemanticTagStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

#### See

MatterSpecification.v11.Cluster § 1.8.8.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:18
