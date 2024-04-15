[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/group-key-management/export

# Module: behavior/definitions/group-key-management/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_group_key_management_export._internal_.md)

### Namespaces

- [GroupKeyManagementBehavior](behavior_definitions_group_key_management_export.GroupKeyManagementBehavior.md)
- [GroupKeyManagementInterface](behavior_definitions_group_key_management_export.GroupKeyManagementInterface.md)

### Classes

- [GroupKeyManagementServer](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)

### Interfaces

- [GroupKeyManagementBehavior](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior-1.md)

### Type Aliases

- [GroupKeyManagementInterface](behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)
- [KeySetReadAllIndicesResponse](behavior_definitions_group_key_management_export.md#keysetreadallindicesresponse)
- [KeySetReadRequest](behavior_definitions_group_key_management_export.md#keysetreadrequest)
- [KeySetReadResponse](behavior_definitions_group_key_management_export.md#keysetreadresponse)
- [KeySetRemoveRequest](behavior_definitions_group_key_management_export.md#keysetremoverequest)
- [KeySetWriteRequest](behavior_definitions_group_key_management_export.md#keysetwriterequest)

### Variables

- [GroupKeyManagementBehavior](behavior_definitions_group_key_management_export.md#groupkeymanagementbehavior)

## Type Aliases

### GroupKeyManagementInterface

Ƭ **GroupKeyManagementInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_group_key_management_export.GroupKeyManagementInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L116)

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:216](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L216)

___

### KeySetReadAllIndicesResponse

Ƭ **KeySetReadAllIndicesResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvKeySetReadAllIndicesResponse`](cluster_export.GroupKeyManagement.md#tlvkeysetreadallindicesresponse)\>

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of GroupKeySetID
for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

**`See`**

MatterSpecification.v11.Core § 11.2.8.6

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L114)

___

### KeySetReadRequest

Ƭ **KeySetReadRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvKeySetReadRequest`](cluster_export.GroupKeyManagement.md#tlvkeysetreadrequest)\>

This command is used by Administrators to read the state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that
provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a KeySetReadResponse
command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.

Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then this
command shall fail with a NOT_FOUND status code.

**`See`**

MatterSpecification.v11.Core § 11.2.8.2

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L67)

___

### KeySetReadResponse

Ƭ **KeySetReadResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvKeySetReadResponse`](cluster_export.GroupKeyManagement.md#tlvkeysetreadresponse)\>

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It shall
contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key contents
replaced by null.

**`See`**

MatterSpecification.v11.Core § 11.2.8.3

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L76)

___

### KeySetRemoveRequest

Ƭ **KeySetRemoveRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvKeySetRemoveRequest`](cluster_export.GroupKeyManagement.md#tlvkeysetremoverequest)\>

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

**`See`**

MatterSpecification.v11.Core § 11.2.8.4

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L100)

___

### KeySetWriteRequest

Ƭ **KeySetWriteRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvKeySetWriteRequest`](cluster_export.GroupKeyManagement.md#tlvkeysetwriterequest)\>

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

**`See`**

MatterSpecification.v11.Core § 11.2.8.1

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L51)

## Variables

### GroupKeyManagementBehavior

• `Const` **GroupKeyManagementBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`GroupKeyManagementInterface`](behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)\>, [`GroupKeyManagementInterface`](behavior_definitions_group_key_management_export.md#groupkeymanagementinterface)\>

GroupKeyManagementBehavior is the base class for objects that support interaction with GroupKeyManagement.Cluster.

#### Defined in

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts#L17)

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts#L22)

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementBehavior.ts#L24)
