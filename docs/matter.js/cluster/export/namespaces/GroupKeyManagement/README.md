[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / GroupKeyManagement

# Namespace: GroupKeyManagement

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [GroupKeyMulticastPolicy](enumerations/GroupKeyMulticastPolicy.md)
- [GroupKeySecurityPolicy](enumerations/GroupKeySecurityPolicy.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [GroupInfoMapStruct](interfaces/GroupInfoMapStruct.md)
- [GroupKeyMapStruct](interfaces/GroupKeyMapStruct.md)
- [GroupKeySetStruct](interfaces/GroupKeySetStruct.md)
- [KeySetReadAllIndicesResponse](interfaces/KeySetReadAllIndicesResponse.md)
- [KeySetReadRequest](interfaces/KeySetReadRequest.md)
- [KeySetReadResponse](interfaces/KeySetReadResponse.md)
- [KeySetRemoveRequest](interfaces/KeySetRemoveRequest.md)
- [KeySetWriteRequest](interfaces/KeySetWriteRequest.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all GroupKeyManagement clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.groupKeyMap

> `readonly` **groupKeyMap**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
particular group key set.

###### See

MatterSpecification.v11.Core § 11.2.7.1

##### attributes.groupTable

> `readonly` **groupTable**: [`FabricScopedAttribute`](../../interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
general terms referred to as the 'node-wide Group Table'.

The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a
RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped
endpoint, the entire GroupTable entry for that given GroupId shall be removed.

###### See

MatterSpecification.v11.Core § 11.2.7.2

##### attributes.maxGroupKeysPerFabric

> `readonly` **maxGroupKeysPerFabric**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of group key sets this node supports per fabric. The
value of this attribute shall be set according to the minimum number of group key sets to support as
specified in Group Limits.

###### See

MatterSpecification.v11.Core § 11.2.7.4

##### attributes.maxGroupsPerFabric

> `readonly` **maxGroupsPerFabric**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of groups that this node supports per fabric. The value
of this attribute shall be set to be no less than the required minimum supported groups as specified in
Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of
the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.

###### See

MatterSpecification.v11.Core § 11.2.7.3

##### commands

> `readonly` **commands**: `object`

##### commands.keySetRead

> `readonly` **keySetRead**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command is used by Administrators to read the state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a
KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.

Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric,
then this command shall fail with a NOT_FOUND status code.

###### See

MatterSpecification.v11.Core § 11.2.8.2

##### commands.keySetReadAllIndices

> `readonly` **keySetReadAllIndices**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command is used by Administrators to query a list of all Group Key Sets associated with the
accessing fabric.

Effect on Receipt

Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing
fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values
from those structs.

###### See

MatterSpecification.v11.Core § 11.2.8.5

##### commands.keySetRemove

> `readonly` **keySetRemove**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

###### See

MatterSpecification.v11.Core § 11.2.8.4

##### commands.keySetWrite

> `readonly` **keySetWrite**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

###### See

MatterSpecification.v11.Core § 11.2.8.1

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which GroupKeyManagementCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.cacheAndSync

> `readonly` **cacheAndSync**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CacheAndSync

The ability to support CacheAndSync security policy and MCSP.

##### id

> `readonly` **id**: `63` = `0x3f`

##### name

> `readonly` **name**: `"GroupKeyManagement"` = `"GroupKeyManagement"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L334)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:537](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L537)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.groupKeyMap

> `readonly` **groupKeyMap**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
particular group key set.

###### See

MatterSpecification.v11.Core § 11.2.7.1

##### attributes.groupTable

> `readonly` **groupTable**: [`FabricScopedAttribute`](../../interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
general terms referred to as the 'node-wide Group Table'.

The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a
RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped
endpoint, the entire GroupTable entry for that given GroupId shall be removed.

###### See

MatterSpecification.v11.Core § 11.2.7.2

##### attributes.maxGroupKeysPerFabric

> `readonly` **maxGroupKeysPerFabric**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of group key sets this node supports per fabric. The
value of this attribute shall be set according to the minimum number of group key sets to support as
specified in Group Limits.

###### See

MatterSpecification.v11.Core § 11.2.7.4

##### attributes.maxGroupsPerFabric

> `readonly` **maxGroupsPerFabric**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum number of groups that this node supports per fabric. The value
of this attribute shall be set to be no less than the required minimum supported groups as specified in
Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of
the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.

###### See

MatterSpecification.v11.Core § 11.2.7.3

##### commands

> `readonly` **commands**: `object`

##### commands.keySetRead

> `readonly` **keySetRead**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command is used by Administrators to read the state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a
KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.

Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric,
then this command shall fail with a NOT_FOUND status code.

###### See

MatterSpecification.v11.Core § 11.2.8.2

##### commands.keySetReadAllIndices

> `readonly` **keySetReadAllIndices**: [`Command`](../../interfaces/Command.md)\<`void`, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This command is used by Administrators to query a list of all Group Key Sets associated with the
accessing fabric.

Effect on Receipt

Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing
fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values
from those structs.

###### See

MatterSpecification.v11.Core § 11.2.8.5

##### commands.keySetRemove

> `readonly` **keySetRemove**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

###### See

MatterSpecification.v11.Core § 11.2.8.4

##### commands.keySetWrite

> `readonly` **keySetWrite**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

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

###### See

MatterSpecification.v11.Core § 11.2.8.1

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which GroupKeyManagementCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.cacheAndSync

> `readonly` **cacheAndSync**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

CacheAndSync

The ability to support CacheAndSync security policy and MCSP.

##### id

> `readonly` **id**: `63` = `0x3f`

##### name

> `readonly` **name**: `"GroupKeyManagement"` = `"GroupKeyManagement"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L525)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:540](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L540)

***

### TlvGroupInfoMapStruct

> `const` **TlvGroupInfoMapStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.2.6.5

#### Type declaration

##### endpoints

> **endpoints**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)[]\>

This field provides the list of Endpoint IDs on the Node to which messages to this group shall be forwarded.

###### See

MatterSpecification.v11.Core § 11.2.6.5.2

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

This field uniquely identifies the group within the scope of the given Fabric.

###### See

MatterSpecification.v11.Core § 11.2.6.5.1

##### groupName

> **groupName**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This field provides a name for the group. This field shall contain the last GroupName written for a given
GroupId on any Endpoint via the Groups cluster.

###### See

MatterSpecification.v11.Core § 11.2.6.5.3

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L66)

***

### TlvGroupKeyMapStruct

> `const` **TlvGroupKeyMapStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.2.6.3

#### Type declaration

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

This field uniquely identifies the group within the scope of the given Fabric.

###### See

MatterSpecification.v11.Core § 11.2.6.3.1

##### groupKeySetId

> **groupKeySetId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field references the set of group keys that generate operational group keys for use with this

group, as specified in Section 4.15.3.5.1, “Group Key Set ID”.

A GroupKeyMapStruct shall NOT accept GroupKeySetID of 0, which is reserved for the IPK.

###### See

MatterSpecification.v11.Core § 11.2.6.3.2

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L36)

***

### TlvGroupKeySetStruct

> `const` **TlvGroupKeySetStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.2.6.4

#### Type declaration

##### epochKey0

> **epochKey0**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `Uint8Array`\>

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 shall NOT be null.

###### See

MatterSpecification.v11.Core § 11.2.6.4.3

##### epochKey1

> **epochKey1**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `Uint8Array`\>

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 shall NOT be null.

###### See

MatterSpecification.v11.Core § 11.2.6.4.5

##### epochKey2

> **epochKey2**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `Uint8Array`\>

This field, if not null, shall be the root credential used in the derivation of an operational group key for
epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 shall NOT be null.

###### See

MatterSpecification.v11.Core § 11.2.6.4.7

##### epochStartTime0

> **epochStartTime0**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

This field, if not null, shall define when EpochKey0 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

###### See

MatterSpecification.v11.Core § 11.2.6.4.4

##### epochStartTime1

> **epochStartTime1**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

This field, if not null, shall define when EpochKey1 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

###### See

MatterSpecification.v11.Core § 11.2.6.4.6

##### epochStartTime2

> **epochStartTime2**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number` \| `bigint`\>

This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.15.3, “Epoch
Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.

###### See

MatterSpecification.v11.Core § 11.2.6.4.8

##### groupKeyMulticastPolicy

> **groupKeyMulticastPolicy**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](enumerations/GroupKeyMulticastPolicy.md)\>

This field specifies how the IPv6 Multicast Address shall be formed for groups using this operational group
key set.

The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive only
multicast messages for groups to which they are subscribed.

The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to subscribe.

NOTE Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied by value
PerGroupID.

###### See

MatterSpecification.v11.Core § 11.2.6.4.9

##### groupKeySecurityPolicy

> **groupKeySecurityPolicy**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupKeySecurityPolicy`](enumerations/GroupKeySecurityPolicy.md)\>

This field shall provide the security policy for an operational group key set.

When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set
CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.

###### See

MatterSpecification.v11.Core § 11.2.6.4.2

##### groupKeySetId

> **groupKeySetId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

###### See

MatterSpecification.v11.Core § 11.2.6.4.1

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L138)

***

### TlvKeySetReadAllIndicesResponse

> `const` **TlvKeySetReadAllIndicesResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

#### See

MatterSpecification.v11.Core § 11.2.8.6

#### Type declaration

##### groupKeySetIDs

> **groupKeySetIDs**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`[]\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L300)

***

### TlvKeySetReadRequest

> `const` **TlvKeySetReadRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the GroupKeyManagement keySetRead command

#### See

MatterSpecification.v11.Core § 11.2.8.2

#### Type declaration

##### groupKeySetId

> **groupKeySetId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L246)

***

### TlvKeySetReadResponse

> `const` **TlvKeySetReadResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It
shall contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
contents replaced by null.

#### See

MatterSpecification.v11.Core § 11.2.8.3

#### Type declaration

##### groupKeySet

> **groupKeySet**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L262)

***

### TlvKeySetRemoveRequest

> `const` **TlvKeySetRemoveRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the GroupKeyManagement keySetRemove command

#### See

MatterSpecification.v11.Core § 11.2.8.4

#### Type declaration

##### groupKeySetId

> **groupKeySetId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L278)

***

### TlvKeySetWriteRequest

> `const` **TlvKeySetWriteRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the GroupKeyManagement keySetWrite command

#### See

MatterSpecification.v11.Core § 11.2.8.1

#### Type declaration

##### groupKeySet

> **groupKeySet**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L232)
