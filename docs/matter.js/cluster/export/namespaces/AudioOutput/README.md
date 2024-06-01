[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / AudioOutput

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

> `readonly` **outputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This list provides the outputs supported by the device.

###### See

MatterSpecification.v11.Cluster § 6.5.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.selectOutput

> `readonly` **selectOutput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 6.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which AudioOutputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NameUpdates

Supports updates to output names

##### id

> `readonly` **id**: `1291` = `0x50b`

##### name

> `readonly` **name**: `"AudioOutput"` = `"AudioOutput"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L137)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:196](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L196)

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

> `readonly` **outputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This list provides the outputs supported by the device.

###### See

MatterSpecification.v11.Cluster § 6.5.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.selectOutput

> `readonly` **selectOutput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 6.5.4

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which AudioOutputCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NameUpdates

Supports updates to output names

##### id

> `readonly` **id**: `1291` = `0x50b`

##### name

> `readonly` **name**: `"AudioOutput"` = `"AudioOutput"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L184)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L226)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: [`Merge`](../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../README.md#globalattributesf)\<`object`\>\> = `Cluster.attributes`

###### Type declaration

###### currentOutput

> `readonly` **currentOutput**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This field contains the value of the index field of the currently selected OutputInfoStruct.

###### See

MatterSpecification.v11.Cluster § 6.5.3.2

###### outputList

> `readonly` **outputList**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This list provides the outputs supported by the device.

###### See

MatterSpecification.v11.Cluster § 6.5.3.1

##### commands

> `readonly` **commands**: `object`

##### commands.renameOutput

> `readonly` **renameOutput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### commands.selectOutput

> `readonly` **selectOutput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

###### See

MatterSpecification.v11.Cluster § 6.5.4

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.nameUpdates

> `readonly` **nameUpdates**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

NameUpdates

Supports updates to output names

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`1291`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"AudioOutput"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L204)

***

### NameUpdatesComponent

> `const` **NameUpdatesComponent**: `object`

A AudioOutputCluster supports these elements if it supports feature NameUpdates.

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.renameOutput

> `readonly` **renameOutput**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Upon receipt, this shall rename the output at a specific index in the Output List.

Updates to the output name shall appear in the device’s settings menus. Name updates may automatically
be sent to the actual device to which the output connects.

###### See

MatterSpecification.v11.Cluster § 6.5.4.2

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L106)

***

### TlvOutputInfoStruct

> `const` **TlvOutputInfoStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This contains information about an output.

#### See

MatterSpecification.v11.Cluster § 6.5.5.1

#### Type declaration

##### index

> **index**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the unique index into the list of outputs.

###### See

MatterSpecification.v11.Cluster § 6.5.5.1.1

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank,
but SHOULD be provided when known.

###### See

MatterSpecification.v11.Cluster § 6.5.5.1.3

##### outputType

> **outputType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`OutputType`](enumerations/OutputType.md)\>

This shall indicate the type of output

###### See

MatterSpecification.v11.Cluster § 6.5.5.1.2

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L58)

***

### TlvRenameOutputRequest

> `const` **TlvRenameOutputRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the AudioOutput renameOutput command

#### See

MatterSpecification.v11.Cluster § 6.5.4.2

#### Type declaration

##### index

> **index**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### name

> **name**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L26)

***

### TlvSelectOutputRequest

> `const` **TlvSelectOutputRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the AudioOutput selectOutput command

#### See

MatterSpecification.v11.Cluster § 6.5.4

#### Type declaration

##### index

> **index**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AudioOutputCluster.ts#L94)
