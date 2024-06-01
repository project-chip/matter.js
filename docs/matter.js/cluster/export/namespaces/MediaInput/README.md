[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / MediaInput

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

> `readonly` **inputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

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

> `readonly` **selectInput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **nameUpdates**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NameUpdates

Supports updates to the input names

##### id

> `readonly` **id**: `1287` = `0x507`

##### name

> `readonly` **name**: `"MediaInput"` = `"MediaInput"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L158)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L234)

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

> `readonly` **inputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

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

> `readonly` **selectInput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **nameUpdates**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NameUpdates

Supports updates to the input names

##### id

> `readonly` **id**: `1287` = `0x507`

##### name

> `readonly` **name**: `"MediaInput"` = `"MediaInput"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L222)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:260](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L260)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: [`Merge`](../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../README.md#globalattributesf)\<`object`\>\> = `Cluster.attributes`

###### Type declaration

###### currentInput

> `readonly` **currentInput**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This field contains the value of the index field of the currently selected InputInfoStruct.

###### See

MatterSpecification.v11.Cluster § 6.9.3.2

###### inputList

> `readonly` **inputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

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

##### commands.renameInput

> `readonly` **renameInput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.selectInput

> `readonly` **selectInput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

> `readonly` **features**: `object` = `Cluster.features`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NameUpdates

Supports updates to the input names

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`1287`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"MediaInput"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L242)

***

### NameUpdatesComponent

> `const` **NameUpdatesComponent**: `object`

A MediaInputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.renameInput

> `readonly` **renameInput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the input
name shall appear in the device’s settings menus.

###### See

MatterSpecification.v11.Cluster § 6.9.4.4

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L129)

***

### TlvInputInfoStruct

> `const` **TlvInputInfoStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This contains information about an input.

#### See

MatterSpecification.v11.Cluster § 6.9.5.1

#### Type declaration

##### description

> **description**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the user editable input description, such as “Living room Playstation”. This field may
be blank, but SHOULD be provided when known.

###### See

MatterSpecification.v11.Cluster § 6.9.5.1.4

##### index

> **index**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the unique index into the list of Inputs.

###### See

MatterSpecification.v11.Cluster § 6.9.5.1.1

##### inputType

> **inputType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`InputType`](enumerations/InputType.md)\>

This shall indicate the type of input

###### See

MatterSpecification.v11.Cluster § 6.9.5.1.2

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when
known.

###### See

MatterSpecification.v11.Cluster § 6.9.5.1.3

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L65)

***

### TlvRenameInputRequest

> `const` **TlvRenameInputRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the MediaInput renameInput command

#### See

MatterSpecification.v11.Cluster § 6.9.4.4

#### Type declaration

##### index

> **index**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L27)

***

### TlvSelectInputRequest

> `const` **TlvSelectInputRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the MediaInput selectInput command

#### See

MatterSpecification.v11.Cluster § 6.9.4.1

#### Type declaration

##### index

> **index**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the index field of the InputInfoStruct from the InputList attribute in which to change
to.

###### See

MatterSpecification.v11.Cluster § 6.9.4.1.1

#### Source

[packages/matter.js/src/cluster/definitions/MediaInputCluster.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/MediaInputCluster.ts#L109)
