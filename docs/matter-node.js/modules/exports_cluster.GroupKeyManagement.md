[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / GroupKeyManagement

# Namespace: GroupKeyManagement

[exports/cluster](exports_cluster.md).GroupKeyManagement

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.GroupKeyManagement.Feature.md)
- [GroupKeyMulticastPolicy](../enums/exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md)
- [GroupKeySecurityPolicy](../enums/exports_cluster.GroupKeyManagement.GroupKeySecurityPolicy.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.GroupKeyManagement.Cluster.md)
- [GroupInfoMapStruct](../interfaces/exports_cluster.GroupKeyManagement.GroupInfoMapStruct.md)
- [GroupKeyMapStruct](../interfaces/exports_cluster.GroupKeyManagement.GroupKeyMapStruct.md)
- [GroupKeySetStruct](../interfaces/exports_cluster.GroupKeyManagement.GroupKeySetStruct.md)
- [KeySetReadAllIndicesResponse](../interfaces/exports_cluster.GroupKeyManagement.KeySetReadAllIndicesResponse.md)
- [KeySetReadRequest](../interfaces/exports_cluster.GroupKeyManagement.KeySetReadRequest.md)
- [KeySetReadResponse](../interfaces/exports_cluster.GroupKeyManagement.KeySetReadResponse.md)
- [KeySetRemoveRequest](../interfaces/exports_cluster.GroupKeyManagement.KeySetRemoveRequest.md)
- [KeySetWriteRequest](../interfaces/exports_cluster.GroupKeyManagement.KeySetWriteRequest.md)

### Variables

- [Base](exports_cluster.GroupKeyManagement.md#base)
- [Cluster](exports_cluster.GroupKeyManagement.md#cluster)
- [ClusterInstance](exports_cluster.GroupKeyManagement.md#clusterinstance)
- [Complete](exports_cluster.GroupKeyManagement.md#complete)
- [TlvGroupInfoMapStruct](exports_cluster.GroupKeyManagement.md#tlvgroupinfomapstruct)
- [TlvGroupKeyMapStruct](exports_cluster.GroupKeyManagement.md#tlvgroupkeymapstruct)
- [TlvGroupKeySetStruct](exports_cluster.GroupKeyManagement.md#tlvgroupkeysetstruct)
- [TlvKeySetReadAllIndicesResponse](exports_cluster.GroupKeyManagement.md#tlvkeysetreadallindicesresponse)
- [TlvKeySetReadRequest](exports_cluster.GroupKeyManagement.md#tlvkeysetreadrequest)
- [TlvKeySetReadResponse](exports_cluster.GroupKeyManagement.md#tlvkeysetreadresponse)
- [TlvKeySetRemoveRequest](exports_cluster.GroupKeyManagement.md#tlvkeysetremoverequest)
- [TlvKeySetWriteRequest](exports_cluster.GroupKeyManagement.md#tlvkeysetwriterequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all GroupKeyManagement clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](../interfaces/exports_cluster.WritableFabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](../interfaces/exports_cluster.FabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } | - |
| `attributes.groupKeyMap` | [`WritableFabricScopedAttribute`](../interfaces/exports_cluster.WritableFabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> | This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a particular group key set. **`See`** MatterSpecification.v11.Core § 11.2.7.1 |
| `attributes.groupTable` | [`FabricScopedAttribute`](../interfaces/exports_cluster.FabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> | This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in general terms referred to as the 'node-wide Group Table'. The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped endpoint, the entire GroupTable entry for that given GroupId shall be removed. **`See`** MatterSpecification.v11.Core § 11.2.7.2 |
| `attributes.maxGroupKeysPerFabric` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> | This attribute shall indicate the maximum number of group key sets this node supports per fabric. The value of this attribute shall be set according to the minimum number of group key sets to support as specified in Group Limits. **`See`** MatterSpecification.v11.Core § 11.2.7.4 |
| `attributes.maxGroupsPerFabric` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> | This attribute shall indicate the maximum number of groups that this node supports per fabric. The value of this attribute shall be set to be no less than the required minimum supported groups as specified in Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics. **`See`** MatterSpecification.v11.Core § 11.2.7.3 |
| `commands` | \{ `keySetRead`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetReadAllIndices`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetRemove`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `keySetWrite`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.keySetRead` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | This command is used by Administrators to read the state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null. Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then this command shall fail with a NOT_FOUND status code. **`See`** MatterSpecification.v11.Core § 11.2.8.2 |
| `commands.keySetReadAllIndices` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | This command is used by Administrators to query a list of all Group Key Sets associated with the accessing fabric. Effect on Receipt Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values from those structs. **`See`** MatterSpecification.v11.Core § 11.2.8.5 |
| `commands.keySetRemove` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | This command is used by Administrators to remove all state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed, including all epoch keys it contains. If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the GroupKeySetID just removed, then these entries shall be removed from that list. This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID being removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only method to remove the IPK is usage of the RemoveFabric command or any operation which causes the equivalent of a RemoveFabric to occur by side-effect. This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the GroupKeySetID requested did not exist. **`See`** MatterSpecification.v11.Core § 11.2.8.4 |
| `commands.keySetWrite` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | This command is used by Administrators to set the state of a given Group Key Set, including atomically updating the state of all epoch keys. Effect on Receipt If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set with the given GroupKeySetID, followed by an addition of a Group Key Set with the provided configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set associated with the accessing fabric shall be created with the provided data. The Group Key Set shall be written to non-volatile storage. Upon completion, this command shall send a status code back to the initiator: • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to SUCCESS. • If there are insufficient resources on the receiver to store an additional Group Key Set, the status code shall be set to RESOURCE_EXHAUSTED (see group key limits); • Otherwise, this status code shall be set to FAILURE. **`See`** MatterSpecification.v11.Core § 11.2.8.1 |
| `extensions` | readonly [] | This metadata controls which GroupKeyManagementCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.cacheAndSync` | [`BitFlag`](exports_schema.md#bitflag) | CacheAndSync The ability to support CacheAndSync security policy and MCSP. |
| `id` | ``63`` | - |
| `name` | ``"GroupKeyManagement"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:433

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.GroupKeyManagement.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:1108

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:1110

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](../interfaces/exports_cluster.WritableFabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](../interfaces/exports_cluster.FabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetReadAllIndices`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetRemove`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `keySetWrite`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.GroupKeyManagement.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:767

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.GroupKeyManagement.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:1111

___

### TlvGroupInfoMapStruct

• `Const` **TlvGroupInfoMapStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field uniquely identifies the group within the scope of the given Fabric.

**`See`**

MatterSpecification.v11.Core § 11.2.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:45

___

### TlvGroupKeyMapStruct

• `Const` **TlvGroupKeyMapStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 11.2.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:16

___

### TlvGroupKeySetStruct

• `Const` **TlvGroupKeySetStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:109

___

### TlvKeySetReadAllIndicesResponse

• `Const` **TlvKeySetReadAllIndicesResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

**`See`**

MatterSpecification.v11.Core § 11.2.8.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:399

___

### TlvKeySetReadRequest

• `Const` **TlvKeySetReadRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GroupKeyManagement keySetRead command

**`See`**

MatterSpecification.v11.Core § 11.2.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:274

___

### TlvKeySetReadResponse

• `Const` **TlvKeySetReadResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It
shall contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
contents replaced by null.

**`See`**

MatterSpecification.v11.Core § 11.2.8.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:291

___

### TlvKeySetRemoveRequest

• `Const` **TlvKeySetRemoveRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GroupKeyManagement keySetRemove command

**`See`**

MatterSpecification.v11.Core § 11.2.8.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:376

___

### TlvKeySetWriteRequest

• `Const` **TlvKeySetWriteRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GroupKeyManagement keySetWrite command

**`See`**

MatterSpecification.v11.Core § 11.2.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:191
