[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / Groups

# Namespace: Groups

## Index

### Enumerations

- [Feature](enumerations/Feature.md)

### Interfaces

- [AddGroupIfIdentifyingRequest](interfaces/AddGroupIfIdentifyingRequest.md)
- [AddGroupRequest](interfaces/AddGroupRequest.md)
- [AddGroupResponse](interfaces/AddGroupResponse.md)
- [Cluster](interfaces/Cluster.md)
- [GetGroupMembershipRequest](interfaces/GetGroupMembershipRequest.md)
- [GetGroupMembershipResponse](interfaces/GetGroupMembershipResponse.md)
- [RemoveGroupRequest](interfaces/RemoveGroupRequest.md)
- [RemoveGroupResponse](interfaces/RemoveGroupResponse.md)
- [ViewGroupRequest](interfaces/ViewGroupRequest.md)
- [ViewGroupResponse](interfaces/ViewGroupResponse.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all Groups clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.nameSupport

> `readonly` **nameSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute provides legacy, read-only access to whether the Group Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

###### See

MatterSpecification.v11.Cluster § 1.3.6.1

##### commands

> `readonly` **commands**: `object`

##### commands.addGroup

> `readonly` **addGroup**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The AddGroup command allows a client to add group membership in a particular group for the server
endpoint.

###### See

MatterSpecification.v11.Cluster § 1.3.7.1

##### commands.addGroupIfIdentifying

> `readonly` **addGroupIfIdentifying**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the
server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is
controlled using the Identify cluster, (see Identify).

This command might be used to assist configuring group membership in the absence of a commissioning tool.

###### See

MatterSpecification.v11.Cluster § 1.3.7.6

##### commands.getGroupMembership

> `readonly` **getGroupMembership**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The GetGroupMembership command allows a client to inquire about the group membership of the server
endpoint, in a number of ways.

###### See

MatterSpecification.v11.Cluster § 1.3.7.3

##### commands.removeAllGroups

> `readonly` **removeAllGroups**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

The RemoveAllGroups command allows a client to direct the server to remove all group associations for
the server endpoint.

The RemoveAllGroups command has no data fields.

###### See

MatterSpecification.v11.Cluster § 1.3.7.5

##### commands.removeGroup

> `readonly` **removeGroup**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The RemoveGroup command allows a client to request that the server removes the membership for the server
endpoint, if any, in a particular group.

###### See

MatterSpecification.v11.Cluster § 1.3.7.4

##### commands.viewGroup

> `readonly` **viewGroup**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse
command containing the name string for a particular group.

###### See

MatterSpecification.v11.Cluster § 1.3.7.2

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which GroupsCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.groupNames

> `readonly` **groupNames**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

GroupNames

The ability to store a name for a group.

##### id

> `readonly` **id**: `4` = `0x4`

##### name

> `readonly` **name**: `"Groups"` = `"Groups"`

##### revision

> `readonly` **revision**: `4` = `4`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:247](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L247)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:374](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L374)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.nameSupport

> `readonly` **nameSupport**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `any`\>

This attribute provides legacy, read-only access to whether the Group Names feature is supported. The
most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall
be 0.

###### See

MatterSpecification.v11.Cluster § 1.3.6.1

##### commands

> `readonly` **commands**: `object`

##### commands.addGroup

> `readonly` **addGroup**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The AddGroup command allows a client to add group membership in a particular group for the server
endpoint.

###### See

MatterSpecification.v11.Cluster § 1.3.7.1

##### commands.addGroupIfIdentifying

> `readonly` **addGroupIfIdentifying**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the
server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is
controlled using the Identify cluster, (see Identify).

This command might be used to assist configuring group membership in the absence of a commissioning tool.

###### See

MatterSpecification.v11.Cluster § 1.3.7.6

##### commands.getGroupMembership

> `readonly` **getGroupMembership**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The GetGroupMembership command allows a client to inquire about the group membership of the server
endpoint, in a number of ways.

###### See

MatterSpecification.v11.Cluster § 1.3.7.3

##### commands.removeAllGroups

> `readonly` **removeAllGroups**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

The RemoveAllGroups command allows a client to direct the server to remove all group associations for
the server endpoint.

The RemoveAllGroups command has no data fields.

###### See

MatterSpecification.v11.Cluster § 1.3.7.5

##### commands.removeGroup

> `readonly` **removeGroup**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The RemoveGroup command allows a client to request that the server removes the membership for the server
endpoint, if any, in a particular group.

###### See

MatterSpecification.v11.Cluster § 1.3.7.4

##### commands.viewGroup

> `readonly` **viewGroup**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse
command containing the name string for a particular group.

###### See

MatterSpecification.v11.Cluster § 1.3.7.2

##### extensions

> `readonly` **extensions**: readonly []

This metadata controls which GroupsCluster elements matter.js activates for specific feature combinations.

##### features

> `readonly` **features**: `object`

##### features.groupNames

> `readonly` **groupNames**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

GroupNames

The ability to store a name for a group.

##### id

> `readonly` **id**: `4` = `0x4`

##### name

> `readonly` **name**: `"Groups"` = `"Groups"`

##### revision

> `readonly` **revision**: `4` = `4`

##### supportedFeatures

> `readonly` **supportedFeatures**: `object`

##### supportedFeatures.groupNames

> `readonly` **groupNames**: `true` = `true`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:348](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L348)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:377](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L377)

***

### NameSupport

> `const` **NameSupport**: `object`

The value of the Groups nameSupport attribute

#### See

MatterSpecification.v11.Cluster § 1.3.6.1

#### Type declaration

##### nameSupport

> **nameSupport**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

The ability to store a name for a group.

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L30)

***

### TlvAddGroupIfIdentifyingRequest

> `const` **TlvAddGroupIfIdentifyingRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Groups addGroupIfIdentifying command

#### See

MatterSpecification.v11.Cluster § 1.3.7.6

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### groupName

> **groupName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L218)

***

### TlvAddGroupRequest

> `const` **TlvAddGroupRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Groups addGroup command

#### See

MatterSpecification.v11.Cluster § 1.3.7.1

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### groupName

> **groupName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L42)

***

### TlvAddGroupResponse

> `const` **TlvAddGroupResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

#### See

MatterSpecification.v11.Cluster § 1.3.7.7

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L59)

***

### TlvGetGroupMembershipRequest

> `const` **TlvGetGroupMembershipRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Groups getGroupMembership command

#### See

MatterSpecification.v11.Cluster § 1.3.7.3

#### Type declaration

##### groupList

> **groupList**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)[]\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L108)

***

### TlvGetGroupMembershipResponse

> `const` **TlvGetGroupMembershipResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a GetGroupMembership
command.

The fields of the GetGroupMembershipResponse command have the following semantics:

The Capacity field shall contain the remaining capacity of the Group Table of the node. The following values
apply:

  • 0 - No further groups may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of groups that may be added.

  • 0xfe - At least 1 further group may be added (exact number is unknown).

  • null - It is unknown if any further groups may be added.

The GroupList field shall contain either the group IDs of all the groups in the Group Table for which the server
endpoint is a member of the group (in the case where the GroupList field of the received GetGroupMembership
command was empty), or the group IDs of all the groups in the Group Table for which the server endpoint is a
member of the group and for which the group ID was included in the the GroupList field of the received
GetGroupMembership command (in the case where the GroupList field of the received GetGroupMembership command was
not empty).

Zigbee: If the total number of groups will cause the maximum payload length of a frame to be exceeded, then the
GroupList field shall contain only as many groups as will fit.

#### See

MatterSpecification.v11.Cluster § 1.3.7.9

#### Type declaration

##### capacity

> **capacity**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

##### groupList

> **groupList**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)[]\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L146)

***

### TlvRemoveGroupRequest

> `const` **TlvRemoveGroupRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Groups removeGroup command

#### See

MatterSpecification.v11.Cluster § 1.3.7.4

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L187)

***

### TlvRemoveGroupResponse

> `const` **TlvRemoveGroupResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.

#### See

MatterSpecification.v11.Cluster § 1.3.7.10

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L201)

***

### TlvViewGroupRequest

> `const` **TlvViewGroupRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the Groups viewGroup command

#### See

MatterSpecification.v11.Cluster § 1.3.7.2

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L76)

***

### TlvViewGroupResponse

> `const` **TlvViewGroupResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

#### See

MatterSpecification.v11.Cluster § 1.3.7.8

#### Type declaration

##### groupId

> **groupId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`GroupId`](../../../../datatype/export/README.md#groupid)\>

##### groupName

> **groupName**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`StatusCode`](../../../../protocol/interaction/export/enumerations/StatusCode.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L90)
