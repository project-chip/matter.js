[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/group-key-management/export

# behavior/definitions/group-key-management/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [GroupKeyManagementBehavior](namespaces/GroupKeyManagementBehavior/README.md)
- [GroupKeyManagementInterface](namespaces/GroupKeyManagementInterface/README.md)

### Classes

- [GroupKeyManagementServer](classes/GroupKeyManagementServer.md)

### Interfaces

- [GroupKeyManagementBehavior](interfaces/GroupKeyManagementBehavior.md)

## Type Aliases

### GroupKeyManagementInterface

> **GroupKeyManagementInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L116)

***

### KeySetReadAllIndicesResponse

> **KeySetReadAllIndicesResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvKeySetReadAllIndicesResponse`](../../../../cluster/export/namespaces/GroupKeyManagement/README.md#tlvkeysetreadallindicesresponse)\>

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of GroupKeySetID
for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

#### See

MatterSpecification.v11.Core § 11.2.8.6

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L114)

***

### KeySetReadRequest

> **KeySetReadRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvKeySetReadRequest`](../../../../cluster/export/namespaces/GroupKeyManagement/README.md#tlvkeysetreadrequest)\>

This command is used by Administrators to read the state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that
provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a KeySetReadResponse
command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.

Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then this
command shall fail with a NOT_FOUND status code.

#### See

MatterSpecification.v11.Core § 11.2.8.2

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L67)

***

### KeySetReadResponse

> **KeySetReadResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvKeySetReadResponse`](../../../../cluster/export/namespaces/GroupKeyManagement/README.md#tlvkeysetreadresponse)\>

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It shall
contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key contents
replaced by null.

#### See

MatterSpecification.v11.Core § 11.2.8.3

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L76)

***

### KeySetRemoveRequest

> **KeySetRemoveRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvKeySetRemoveRequest`](../../../../cluster/export/namespaces/GroupKeyManagement/README.md#tlvkeysetremoverequest)\>

This command is used by Administrators to remove all state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that
provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed, including all epoch
keys it contains.

If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the GroupKeySetID
just removed, then these entries shall be removed from that list.

This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID being removed
is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only method to remove the IPK is
usage of the RemoveFabric command or any operation which causes the equivalent of a RemoveFabric to occur by
side-effect.

This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the GroupKeySetID
requested did not exist.

#### See

MatterSpecification.v11.Core § 11.2.8.4

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L100)

***

### KeySetWriteRequest

> **KeySetWriteRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvKeySetWriteRequest`](../../../../cluster/export/namespaces/GroupKeyManagement/README.md#tlvkeysetwriterequest)\>

This command is used by Administrators to set the state of a given Group Key Set, including atomically updating the
state of all epoch keys.

Effect on Receipt

If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall fail with an
INVALID_COMMAND status code sent back to the initiator.

If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch start time than
the epoch start time found in the EpochStartTime0 field. Otherwise this command shall fail with an INVALID_COMMAND
status code sent back to the initiator.

If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command shall fail
with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch start time than
the epoch start time found in the EpochStartTime1 field. Otherwise this command shall fail with an INVALID_COMMAND
status code sent back to the initiator.

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that
provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A replacement shall be
done by executing the equivalent of entirely removing the previous Group Key Set with the given GroupKeySetID,
followed by an addition of a Group Key Set with the provided configuration. Otherwise, if the GroupKeySetID did not
match an existing entry, a new Group Key Set associated with the accessing fabric shall be created with the provided
data. The Group Key Set shall be written to non-volatile storage.

Upon completion, this command shall send a status code back to the initiator:

  • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to SUCCESS.

  • If there are insufficient resources on the receiver to store an additional Group Key Set, the status code shall
    be set to RESOURCE_EXHAUSTED (see group key limits);

  • Otherwise, this status code shall be set to FAILURE.

#### See

MatterSpecification.v11.Core § 11.2.8.1

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L51)

## Variables

### GroupKeyManagementBehavior

> `const` **GroupKeyManagementBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/GroupKeyManagement/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`GroupKeyManagementInterface`](README.md#groupkeymanagementinterface)\>, [`GroupKeyManagementInterface`](README.md#groupkeymanagementinterface)\>

GroupKeyManagementBehavior is the base class for objects that support interaction with GroupKeyManagement.Cluster.

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts#L17)
