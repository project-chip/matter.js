[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ModeSelect](../README.md) / Complete

# Interface: Complete

This cluster supports all ModeSelect features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### currentMode

> `readonly` **currentMode**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute represents the current mode of the server.

The value of this field must match the Mode field of one of the entries in the SupportedModes

attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.5.4

##### description

> `readonly` **description**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute describes the purpose of the server, in readable text.

For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another
Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the
description Milk and the second instance can have the description Sugar. This allows the user to tell
the purpose of each of the instances.

###### See

MatterSpecification.v11.Cluster § 1.8.5.1

##### eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### onMode

> `readonly` **onMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### standardNamespace

> `readonly` **standardNamespace**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

###### See

MatterSpecification.v11.Cluster § 1.8.5.2

##### startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

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

##### supportedModes

> `readonly` **supportedModes**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

###### See

MatterSpecification.v11.Cluster § 1.8.5.3

#### Inherited from

`Identity.attributes`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L86)

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L92)

***

### commands

> **commands**: `object`

#### changeToMode

> `readonly` **changeToMode**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

##### See

MatterSpecification.v11.Cluster § 1.8.6.1

#### Inherited from

`Identity.commands`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L90)

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `object`

#### onOff

> `readonly` **onOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<[`Branded`](../../../../../util/export/README.md#brandedtb)\<`80`, `"ClusterId"`\>, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"ModeSelect"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L82)

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L83)

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L85)

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.currentMode

> `readonly` **currentMode**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute represents the current mode of the server.

The value of this field must match the Mode field of one of the entries in the SupportedModes

attribute.

###### See

MatterSpecification.v11.Cluster § 1.8.5.4

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute describes the purpose of the server, in readable text.

For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another
Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the
description Milk and the second instance can have the description Sugar. This allows the user to tell
the purpose of each of the instances.

###### See

MatterSpecification.v11.Cluster § 1.8.5.1

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.onMode

> `readonly` **onMode**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.standardNamespace

> `readonly` **standardNamespace**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`null` \| `number`, `any`\>

This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag
value supported in this or any other cluster instance with the same value of this attribute. A null
value indicates no standard namespace, and therefore, no standard semantic tags are provided in this
cluster instance. Each standard namespace and corresponding values and value meanings shall be defined
in another document.

###### See

MatterSpecification.v11.Cluster § 1.8.5.2

##### attributes.startUpMode

> `readonly` **startUpMode**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`null` \| `number`, `any`\>

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

> `readonly` **supportedModes**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each
item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each
entry in this list shall have a unique value for the Mode field.

###### See

MatterSpecification.v11.Cluster § 1.8.5.3

##### commands

> `readonly` **commands**: `object` = `Cluster.commands`

##### commands.changeToMode

> `readonly` **changeToMode**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the

server shall respond with an INVALID_COMMAND status response.

###### See

MatterSpecification.v11.Cluster § 1.8.6.1

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.onOff

> `readonly` **onOff**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

OnOff

Dependency with the On/Off cluster

##### id

> `readonly` **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`80`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"ModeSelect"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
