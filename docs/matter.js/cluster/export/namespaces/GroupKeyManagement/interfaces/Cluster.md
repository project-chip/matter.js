[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GroupKeyManagement](../README.md) / Cluster

# Interface: Cluster

Group Key Management

The Group Key Management Cluster is the mechanism by which group keys are managed.

GroupKeyManagementCluster supports optional features that you can enable with the
GroupKeyManagementCluster.with() factory method.

## See

MatterSpecification.v11.Core § 11.2

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### groupKeyMap

> `readonly` **groupKeyMap**: [`WritableFabricScopedAttribute`](../../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
particular group key set.

###### See

MatterSpecification.v11.Core § 11.2.7.1

##### groupTable

> `readonly` **groupTable**: [`FabricScopedAttribute`](../../../interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
general terms referred to as the 'node-wide Group Table'.

The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a
RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped
endpoint, the entire GroupTable entry for that given GroupId shall be removed.

###### See

MatterSpecification.v11.Core § 11.2.7.2

##### maxGroupKeysPerFabric

> `readonly` **maxGroupKeysPerFabric**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of group key sets this node supports per fabric. The
value of this attribute shall be set according to the minimum number of group key sets to support as
specified in Group Limits.

###### See

MatterSpecification.v11.Core § 11.2.7.4

##### maxGroupsPerFabric

> `readonly` **maxGroupsPerFabric**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of groups that this node supports per fabric. The value
of this attribute shall be set to be no less than the required minimum supported groups as specified in
Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of
the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.

###### See

MatterSpecification.v11.Core § 11.2.7.3

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

#### keySetRead

> `readonly` **keySetRead**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command is used by Administrators to read the state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a
KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.

Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric,
then this command shall fail with a NOT_FOUND status code.

##### See

MatterSpecification.v11.Core § 11.2.8.2

#### keySetReadAllIndices

> `readonly` **keySetReadAllIndices**: [`Command`](../../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command is used by Administrators to query a list of all Group Key Sets associated with the
accessing fabric.

Effect on Receipt

Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing
fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values
from those structs.

##### See

MatterSpecification.v11.Core § 11.2.8.5

#### keySetRemove

> `readonly` **keySetRemove**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command is used by Administrators to remove all state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed,
including all epoch keys it contains.

If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the
GroupKeySetID just removed, then these entries shall be removed from that list.

This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID
being removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only
method to remove the IPK is usage of the RemoveFabric command or any operation which causes the
equivalent of a RemoveFabric to occur by side-effect.

This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the
GroupKeySetID requested did not exist.

##### See

MatterSpecification.v11.Core § 11.2.8.4

#### keySetWrite

> `readonly` **keySetWrite**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command is used by Administrators to set the state of a given Group Key Set, including atomically
updating the state of all epoch keys.

Effect on Receipt

If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall
fail with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch
start time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall
fail with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command
shall fail with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch
start time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall
fail with an INVALID_COMMAND status code sent back to the initiator.

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A
replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set
with the given GroupKeySetID, followed by an addition of a Group Key Set with the provided
configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set
associated with the accessing fabric shall be created with the provided data. The Group Key Set shall be
written to non-volatile storage.

Upon completion, this command shall send a status code back to the initiator:

  • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to
    SUCCESS.

  • If there are insufficient resources on the receiver to store an additional Group Key Set, the status
    code shall be set to RESOURCE_EXHAUSTED (see group key limits);

  • Otherwise, this status code shall be set to FAILURE.

##### See

MatterSpecification.v11.Core § 11.2.8.1

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

> **extensions**: readonly []

#### Inherited from

`Identity.extensions`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `object`

#### cacheAndSync

> `readonly` **cacheAndSync**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

CacheAndSync

The ability to support CacheAndSync security policy and MCSP.

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`63`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"GroupKeyManagement"`

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

> **with**\<`SelectionT`\>(...`selection`): [`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

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

[`WithFeatures`](../../ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `SelectionT`\>

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
