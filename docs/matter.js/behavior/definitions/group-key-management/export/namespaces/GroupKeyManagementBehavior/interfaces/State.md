[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/group-key-management/export](../../../README.md) / [GroupKeyManagementBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### groupKeyMap

> **groupKeyMap**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
particular group key set.

#### See

MatterSpecification.v11.Core § 11.2.7.1

#### Inherited from

`StateType.groupKeyMap`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:355](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L355)

***

### groupTable

> **groupTable**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
general terms referred to as the 'node-wide Group Table'.

The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a
RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped
endpoint, the entire GroupTable entry for that given GroupId shall be removed.

#### See

MatterSpecification.v11.Core § 11.2.7.2

#### Inherited from

`StateType.groupTable`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:373](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L373)

***

### maxGroupKeysPerFabric

> **maxGroupKeysPerFabric**: `number`

This attribute shall indicate the maximum number of group key sets this node supports per fabric. The
value of this attribute shall be set according to the minimum number of group key sets to support as
specified in Group Limits.

#### See

MatterSpecification.v11.Core § 11.2.7.4

#### Inherited from

`StateType.maxGroupKeysPerFabric`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:396](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L396)

***

### maxGroupsPerFabric

> **maxGroupsPerFabric**: `number`

This attribute shall indicate the maximum number of groups that this node supports per fabric. The value
of this attribute shall be set to be no less than the required minimum supported groups as specified in
Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of
the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.

#### See

MatterSpecification.v11.Core § 11.2.7.3

#### Inherited from

`StateType.maxGroupsPerFabric`

#### Source

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:387](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L387)
