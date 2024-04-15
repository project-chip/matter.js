[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/group-key-management/export](../modules/behavior_definitions_group_key_management_export.md) / [GroupKeyManagementBehavior](../modules/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior.md) / State

# Interface: State

[behavior/definitions/group-key-management/export](../modules/behavior_definitions_group_key_management_export.md).[GroupKeyManagementBehavior](../modules/behavior_definitions_group_key_management_export.GroupKeyManagementBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_group_key_management_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [groupKeyMap](behavior_definitions_group_key_management_export.GroupKeyManagementBehavior.State.md#groupkeymap)
- [groupTable](behavior_definitions_group_key_management_export.GroupKeyManagementBehavior.State.md#grouptable)
- [maxGroupKeysPerFabric](behavior_definitions_group_key_management_export.GroupKeyManagementBehavior.State.md#maxgroupkeysperfabric)
- [maxGroupsPerFabric](behavior_definitions_group_key_management_export.GroupKeyManagementBehavior.State.md#maxgroupsperfabric)

## Properties

### groupKeyMap

• **groupKeyMap**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[]

This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
particular group key set.

**`See`**

MatterSpecification.v11.Core § 11.2.7.1

#### Inherited from

StateType.groupKeyMap

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:354](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L354)

___

### groupTable

• **groupTable**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[]

This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
general terms referred to as the 'node-wide Group Table'.

The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a
RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped
endpoint, the entire GroupTable entry for that given GroupId shall be removed.

**`See`**

MatterSpecification.v11.Core § 11.2.7.2

#### Inherited from

StateType.groupTable

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:372](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L372)

___

### maxGroupKeysPerFabric

• **maxGroupKeysPerFabric**: `number`

This attribute shall indicate the maximum number of group key sets this node supports per fabric. The
value of this attribute shall be set according to the minimum number of group key sets to support as
specified in Group Limits.

**`See`**

MatterSpecification.v11.Core § 11.2.7.4

#### Inherited from

StateType.maxGroupKeysPerFabric

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L395)

___

### maxGroupsPerFabric

• **maxGroupsPerFabric**: `number`

This attribute shall indicate the maximum number of groups that this node supports per fabric. The value
of this attribute shall be set to be no less than the required minimum supported groups as specified in
Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of
the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.

**`See`**

MatterSpecification.v11.Core § 11.2.7.3

#### Inherited from

StateType.maxGroupsPerFabric

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:386](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L386)
