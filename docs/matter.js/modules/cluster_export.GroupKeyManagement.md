[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / GroupKeyManagement

# Namespace: GroupKeyManagement

[cluster/export](cluster_export.md).GroupKeyManagement

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.GroupKeyManagement.Feature.md)
- [GroupKeyMulticastPolicy](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)
- [GroupKeySecurityPolicy](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.GroupKeyManagement.Cluster.md)
- [GroupInfoMapStruct](../interfaces/cluster_export.GroupKeyManagement.GroupInfoMapStruct.md)
- [GroupKeyMapStruct](../interfaces/cluster_export.GroupKeyManagement.GroupKeyMapStruct.md)
- [GroupKeySetStruct](../interfaces/cluster_export.GroupKeyManagement.GroupKeySetStruct.md)
- [KeySetReadAllIndicesResponse](../interfaces/cluster_export.GroupKeyManagement.KeySetReadAllIndicesResponse.md)
- [KeySetReadRequest](../interfaces/cluster_export.GroupKeyManagement.KeySetReadRequest.md)
- [KeySetReadResponse](../interfaces/cluster_export.GroupKeyManagement.KeySetReadResponse.md)
- [KeySetRemoveRequest](../interfaces/cluster_export.GroupKeyManagement.KeySetRemoveRequest.md)
- [KeySetWriteRequest](../interfaces/cluster_export.GroupKeyManagement.KeySetWriteRequest.md)

### Variables

- [Base](cluster_export.GroupKeyManagement.md#base)
- [Cluster](cluster_export.GroupKeyManagement.md#cluster)
- [ClusterInstance](cluster_export.GroupKeyManagement.md#clusterinstance)
- [Complete](cluster_export.GroupKeyManagement.md#complete)
- [TlvGroupInfoMapStruct](cluster_export.GroupKeyManagement.md#tlvgroupinfomapstruct)
- [TlvGroupKeyMapStruct](cluster_export.GroupKeyManagement.md#tlvgroupkeymapstruct)
- [TlvGroupKeySetStruct](cluster_export.GroupKeyManagement.md#tlvgroupkeysetstruct)
- [TlvKeySetReadAllIndicesResponse](cluster_export.GroupKeyManagement.md#tlvkeysetreadallindicesresponse)
- [TlvKeySetReadRequest](cluster_export.GroupKeyManagement.md#tlvkeysetreadrequest)
- [TlvKeySetReadResponse](cluster_export.GroupKeyManagement.md#tlvkeysetreadresponse)
- [TlvKeySetRemoveRequest](cluster_export.GroupKeyManagement.md#tlvkeysetremoverequest)
- [TlvKeySetWriteRequest](cluster_export.GroupKeyManagement.md#tlvkeysetwriterequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all GroupKeyManagement clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } | - |
| `attributes.groupKeyMap` | [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> | This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a particular group key set. **`See`** MatterSpecification.v11.Core § 11.2.7.1 |
| `attributes.groupTable` | [`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> | This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in general terms referred to as the 'node-wide Group Table'. The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped endpoint, the entire GroupTable entry for that given GroupId shall be removed. **`See`** MatterSpecification.v11.Core § 11.2.7.2 |
| `attributes.maxGroupKeysPerFabric` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> | This attribute shall indicate the maximum number of group key sets this node supports per fabric. The value of this attribute shall be set according to the minimum number of group key sets to support as specified in Group Limits. **`See`** MatterSpecification.v11.Core § 11.2.7.4 |
| `attributes.maxGroupsPerFabric` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> | This attribute shall indicate the maximum number of groups that this node supports per fabric. The value of this attribute shall be set to be no less than the required minimum supported groups as specified in Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics. **`See`** MatterSpecification.v11.Core § 11.2.7.3 |
| `commands` | \{ `keySetRead`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `void`, `any`\>  } | - |
| `commands.keySetRead` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `any`\> | This command is used by Administrators to read the state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null. Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then this command shall fail with a NOT_FOUND status code. **`See`** MatterSpecification.v11.Core § 11.2.8.2 |
| `commands.keySetReadAllIndices` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> | This command is used by Administrators to query a list of all Group Key Sets associated with the accessing fabric. Effect on Receipt Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values from those structs. **`See`** MatterSpecification.v11.Core § 11.2.8.5 |
| `commands.keySetRemove` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command is used by Administrators to remove all state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed, including all epoch keys it contains. If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the GroupKeySetID just removed, then these entries shall be removed from that list. This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID being removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only method to remove the IPK is usage of the RemoveFabric command or any operation which causes the equivalent of a RemoveFabric to occur by side-effect. This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the GroupKeySetID requested did not exist. **`See`** MatterSpecification.v11.Core § 11.2.8.4 |
| `commands.keySetWrite` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `void`, `any`\> | This command is used by Administrators to set the state of a given Group Key Set, including atomically updating the state of all epoch keys. Effect on Receipt If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set with the given GroupKeySetID, followed by an addition of a Group Key Set with the provided configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set associated with the accessing fabric shall be created with the provided data. The Group Key Set shall be written to non-volatile storage. Upon completion, this command shall send a status code back to the initiator: • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to SUCCESS. • If there are insufficient resources on the receiver to store an additional Group Key Set, the status code shall be set to RESOURCE_EXHAUSTED (see group key limits); • Otherwise, this status code shall be set to FAILURE. **`See`** MatterSpecification.v11.Core § 11.2.8.1 |
| `extensions` | readonly [] | This metadata controls which GroupKeyManagementCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `cacheAndSync`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.cacheAndSync` | [`BitFlag`](schema_export.md#bitflag) | CacheAndSync The ability to support CacheAndSync security policy and MCSP. |
| `id` | ``63`` | - |
| `name` | ``"GroupKeyManagement"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:333](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L333)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:536](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L536)

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:538](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L538)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ... \| ...\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ... \| ...\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ... \| ...\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ...\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ... \| ...\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ... \| ...\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<... \| ... \| ...\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.GroupKeyManagement.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:524](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L524)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.GroupKeyManagement.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:539](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L539)

___

### TlvGroupInfoMapStruct

• `Const` **TlvGroupInfoMapStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\>  }\>

This field uniquely identifies the group within the scope of the given Fabric.

**`See`**

MatterSpecification.v11.Core § 11.2.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L68)

___

### TlvGroupKeyMapStruct

• `Const` **TlvGroupKeyMapStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

**`See`**

MatterSpecification.v11.Core § 11.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L36)

___

### TlvGroupKeySetStruct

• `Const` **TlvGroupKeySetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

**`See`**

MatterSpecification.v11.Core § 11.2.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L140)

___

### TlvKeySetReadAllIndicesResponse

• `Const` **TlvKeySetReadAllIndicesResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`[]\>  }\>

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

**`See`**

MatterSpecification.v11.Core § 11.2.8.6

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:299](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L299)

___

### TlvKeySetReadRequest

• `Const` **TlvKeySetReadRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the GroupKeyManagement keySetRead command

**`See`**

MatterSpecification.v11.Core § 11.2.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L245)

___

### TlvKeySetReadResponse

• `Const` **TlvKeySetReadResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It
shall contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
contents replaced by null.

**`See`**

MatterSpecification.v11.Core § 11.2.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L261)

___

### TlvKeySetRemoveRequest

• `Const` **TlvKeySetRemoveRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the GroupKeyManagement keySetRemove command

**`See`**

MatterSpecification.v11.Core § 11.2.8.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:277](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L277)

___

### TlvKeySetWriteRequest

• `Const` **TlvKeySetWriteRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

Input to the GroupKeyManagement keySetWrite command

**`See`**

MatterSpecification.v11.Core § 11.2.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L231)
