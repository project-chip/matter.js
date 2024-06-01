[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / AudioOutput

# Namespace: AudioOutput

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [OutputType](enumerations/OutputType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [OutputInfoStruct](interfaces/OutputInfoStruct.md)
- [RenameOutputRequest](interfaces/RenameOutputRequest.md)
- [SelectOutputRequest](interfaces/SelectOutputRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all AudioOutput clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentOutput

> `readonly` **currentOutput**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This field contains the value of the index field of the currently selected OutputInfoStruct.

###### See

MatterSpecification.v11.Cluster § 6.5.3.2

##### attributes.outputList

> `readonly` **outputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This list provides the outputs supported by the device.

###### See

MatterSpecification.v11.Cluster § 6.5.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.selectOutput

> `readonly` **selectOutput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 6.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which AudioOutputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../schema/README.md#bitflag)

NameUpdates

Supports updates to output names

##### id

> `readonly` **id**: `1291`

##### name

> `readonly` **name**: `"AudioOutput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:128

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:301

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentOutput

> `readonly` **currentOutput**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This field contains the value of the index field of the currently selected OutputInfoStruct.

###### See

MatterSpecification.v11.Cluster § 6.5.3.2

##### attributes.outputList

> `readonly` **outputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This list provides the outputs supported by the device.

###### See

MatterSpecification.v11.Cluster § 6.5.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.selectOutput

> `readonly` **selectOutput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 6.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which AudioOutputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../schema/README.md#bitflag)

NameUpdates

Supports updates to output names

##### id

> `readonly` **id**: `1291`

##### name

> `readonly` **name**: `"AudioOutput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:211

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:390

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### commands

> `readonly` **commands**: `object`

##### commands.renameOutput

> `readonly` **renameOutput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.selectOutput

> `readonly` **selectOutput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 6.5.4

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../schema/README.md#bitflag)

NameUpdates

Supports updates to output names

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"AudioOutput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:307

***

### NameUpdatesComponent

> `const` **NameUpdatesComponent**: `object`

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.renameOutput

> `readonly` **renameOutput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Upon receipt, this shall rename the output at a specific index in the Output List.

Updates to the output name shall appear in the device’s settings menus. Name updates may automatically
be sent to the actual device to which the output connects.

###### See

MatterSpecification.v11.Cluster § 6.5.4.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:96

***

### TlvOutputInfoStruct

> `const` **TlvOutputInfoStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This contains information about an output.

#### See

MatterSpecification.v11.Cluster § 6.5.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:50

***

### TlvRenameOutputRequest

> `const` **TlvRenameOutputRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the AudioOutput renameOutput command

#### See

MatterSpecification.v11.Cluster § 6.5.4.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:18

***

### TlvSelectOutputRequest

> `const` **TlvSelectOutputRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the AudioOutput selectOutput command

#### See

MatterSpecification.v11.Cluster § 6.5.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/AudioOutputCluster.d.ts:83
