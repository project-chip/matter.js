[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / MediaInput

# Namespace: MediaInput

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [InputType](enumerations/InputType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [InputInfoStruct](interfaces/InputInfoStruct.md)
- [RenameInputRequest](interfaces/RenameInputRequest.md)
- [SelectInputRequest](interfaces/SelectInputRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all MediaInput clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentInput

> `readonly` **currentInput**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This field contains the value of the index field of the currently selected InputInfoStruct.

###### See

MatterSpecification.v11.Cluster § 6.9.3.2

##### attributes.inputList

> `readonly` **inputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This list provides the media inputs supported by the device.

###### See

MatterSpecification.v11.Cluster § 6.9.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.hideInputStatus

> `readonly` **hideInputStatus**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt, this shall hide the input list from the screen.

###### See

MatterSpecification.v11.Cluster § 6.9.4.3

##### commands.selectInput

> `readonly` **selectInput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Upon receipt, this shall change the media input on the device to the input at a specific index in the
Input List.

###### See

MatterSpecification.v11.Cluster § 6.9.4.1

##### commands.showInputStatus

> `readonly` **showInputStatus**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt, this shall display the active status of the input list on screen.

###### See

MatterSpecification.v11.Cluster § 6.9.4.2

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which MediaInputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../schema/README.md#bitflag)

NameUpdates

Supports updates to the input names

##### id

> `readonly` **id**: `1287`

##### name

> `readonly` **name**: `"MediaInput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:145

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:370

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentInput

> `readonly` **currentInput**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This field contains the value of the index field of the currently selected InputInfoStruct.

###### See

MatterSpecification.v11.Cluster § 6.9.3.2

##### attributes.inputList

> `readonly` **inputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

This list provides the media inputs supported by the device.

###### See

MatterSpecification.v11.Cluster § 6.9.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.hideInputStatus

> `readonly` **hideInputStatus**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt, this shall hide the input list from the screen.

###### See

MatterSpecification.v11.Cluster § 6.9.4.3

##### commands.selectInput

> `readonly` **selectInput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Upon receipt, this shall change the media input on the device to the input at a specific index in the
Input List.

###### See

MatterSpecification.v11.Cluster § 6.9.4.1

##### commands.showInputStatus

> `readonly` **showInputStatus**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt, this shall display the active status of the input list on screen.

###### See

MatterSpecification.v11.Cluster § 6.9.4.2

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which MediaInputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../schema/README.md#bitflag)

NameUpdates

Supports updates to the input names

##### id

> `readonly` **id**: `1287`

##### name

> `readonly` **name**: `"MediaInput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:254

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:487

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

##### commands.hideInputStatus

> `readonly` **hideInputStatus**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt, this shall hide the input list from the screen.

###### See

MatterSpecification.v11.Cluster § 6.9.4.3

##### commands.renameInput

> `readonly` **renameInput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### commands.selectInput

> `readonly` **selectInput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Upon receipt, this shall change the media input on the device to the input at a specific index in the
Input List.

###### See

MatterSpecification.v11.Cluster § 6.9.4.1

##### commands.showInputStatus

> `readonly` **showInputStatus**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Upon receipt, this shall display the active status of the input list on screen.

###### See

MatterSpecification.v11.Cluster § 6.9.4.2

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../schema/README.md#bitflag)

NameUpdates

Supports updates to the input names

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"MediaInput"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:376

***

### NameUpdatesComponent

> `const` **NameUpdatesComponent**: `object`

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.renameInput

> `readonly` **renameInput**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input
name shall appear in the device’s settings menus.

###### See

MatterSpecification.v11.Cluster § 6.9.4.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:115

***

### TlvInputInfoStruct

> `const` **TlvInputInfoStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This contains information about an input.

#### See

MatterSpecification.v11.Cluster § 6.9.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:56

***

### TlvRenameInputRequest

> `const` **TlvRenameInputRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the MediaInput renameInput command

#### See

MatterSpecification.v11.Cluster § 6.9.4.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:18

***

### TlvSelectInputRequest

> `const` **TlvSelectInputRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the MediaInput selectInput command

#### See

MatterSpecification.v11.Cluster § 6.9.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:96
