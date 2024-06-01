[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Channel](../README.md) / Complete

# Interface: Complete

This cluster supports all Channel features. It may support illegal feature combinations.

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

##### channelList

> `readonly` **channelList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### currentChannel

> `readonly` **currentChannel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

###### See

MatterSpecification.v11.Cluster § 6.6.3.3

##### eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### lineup

> `readonly` **lineup**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

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

#### changeChannel

> `readonly` **changeChannel**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

##### See

MatterSpecification.v11.Cluster § 6.6.4.3

#### skipChannel

> `readonly` **skipChannel**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and
continue. For example, if the current channel is at index 0 and count value of -1 is given, then the
current channel should change to the last channel.

##### See

MatterSpecification.v11.Cluster § 6.6.4.4

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

#### channelList

> `readonly` **channelList**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ChannelList

Provides list of available channels.

#### lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<[`Branded`](../../../../../util/export/README.md#brandedtb)\<`1284`, `"ClusterId"`\>, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"Channel"`

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

##### attributes.channelList

> `readonly` **channelList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.currentChannel

> `readonly` **currentChannel**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This optional field contains the current channel. When supported but a channel is not currently tuned to
(if a content application is in foreground), the value of the field shall be null.

###### See

MatterSpecification.v11.Cluster § 6.6.3.3

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.lineup

> `readonly` **lineup**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.changeChannel

> `readonly` **changeChannel**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.changeChannelByNumber

> `readonly` **changeChannelByNumber**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

Change the channel to the channel with the given Number in the ChannelList attribute.

###### See

MatterSpecification.v11.Cluster § 6.6.4.3

##### commands.skipChannel

> `readonly` **skipChannel**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command provides channel up and channel down functionality, but allows channel index jumps of size
Count.

When the value of the increase or decrease is larger than the number of channels remaining in the given
direction, then the behavior shall be to return to the beginning (or end) of the channel list and
continue. For example, if the current channel is at index 0 and count value of -1 is given, then the
current channel should change to the last channel.

###### See

MatterSpecification.v11.Cluster § 6.6.4.4

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.channelList

> `readonly` **channelList**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

ChannelList

Provides list of available channels.

##### features.lineupInfo

> `readonly` **lineupInfo**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

LineupInfo

Provides lineup info, which is a reference to an external source of lineup information.

##### id

> `readonly` **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`1284`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"Channel"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
