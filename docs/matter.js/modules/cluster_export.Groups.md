[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Groups

# Namespace: Groups

[cluster/export](cluster_export.md).Groups

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Groups.Feature.md)

### Interfaces

- [AddGroupIfIdentifyingRequest](../interfaces/cluster_export.Groups.AddGroupIfIdentifyingRequest.md)
- [AddGroupRequest](../interfaces/cluster_export.Groups.AddGroupRequest.md)
- [AddGroupResponse](../interfaces/cluster_export.Groups.AddGroupResponse.md)
- [Cluster](../interfaces/cluster_export.Groups.Cluster.md)
- [GetGroupMembershipRequest](../interfaces/cluster_export.Groups.GetGroupMembershipRequest.md)
- [GetGroupMembershipResponse](../interfaces/cluster_export.Groups.GetGroupMembershipResponse.md)
- [RemoveGroupRequest](../interfaces/cluster_export.Groups.RemoveGroupRequest.md)
- [RemoveGroupResponse](../interfaces/cluster_export.Groups.RemoveGroupResponse.md)
- [ViewGroupRequest](../interfaces/cluster_export.Groups.ViewGroupRequest.md)
- [ViewGroupResponse](../interfaces/cluster_export.Groups.ViewGroupResponse.md)

### Variables

- [Base](cluster_export.Groups.md#base)
- [Cluster](cluster_export.Groups.md#cluster)
- [ClusterInstance](cluster_export.Groups.md#clusterinstance)
- [Complete](cluster_export.Groups.md#complete)
- [NameSupport](cluster_export.Groups.md#namesupport)
- [TlvAddGroupIfIdentifyingRequest](cluster_export.Groups.md#tlvaddgroupifidentifyingrequest)
- [TlvAddGroupRequest](cluster_export.Groups.md#tlvaddgrouprequest)
- [TlvAddGroupResponse](cluster_export.Groups.md#tlvaddgroupresponse)
- [TlvGetGroupMembershipRequest](cluster_export.Groups.md#tlvgetgroupmembershiprequest)
- [TlvGetGroupMembershipResponse](cluster_export.Groups.md#tlvgetgroupmembershipresponse)
- [TlvRemoveGroupRequest](cluster_export.Groups.md#tlvremovegrouprequest)
- [TlvRemoveGroupResponse](cluster_export.Groups.md#tlvremovegroupresponse)
- [TlvViewGroupRequest](cluster_export.Groups.md#tlvviewgrouprequest)
- [TlvViewGroupResponse](cluster_export.Groups.md#tlvviewgroupresponse)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Groups clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `nameSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } | - |
| `attributes.nameSupport` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | This attribute provides legacy, read-only access to whether the Group Names feature is supported. The most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall be 0. **`See`** MatterSpecification.v11.Cluster § 1.3.6.1 |
| `commands` | \{ `addGroup`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } | - |
| `commands.addGroup` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The AddGroup command allows a client to add group membership in a particular group for the server endpoint. **`See`** MatterSpecification.v11.Cluster § 1.3.7.1 |
| `commands.addGroupIfIdentifying` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> | The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is controlled using the Identify cluster, (see Identify). This command might be used to assist configuring group membership in the absence of a commissioning tool. **`See`** MatterSpecification.v11.Cluster § 1.3.7.6 |
| `commands.getGroupMembership` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, `any`\> | The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint, in a number of ways. **`See`** MatterSpecification.v11.Cluster § 1.3.7.3 |
| `commands.removeAllGroups` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | The RemoveAllGroups command allows a client to direct the server to remove all group associations for the server endpoint. The RemoveAllGroups command has no data fields. **`See`** MatterSpecification.v11.Cluster § 1.3.7.5 |
| `commands.removeGroup` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The RemoveGroup command allows a client to request that the server removes the membership for the server endpoint, if any, in a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.4 |
| `commands.viewGroup` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command containing the name string for a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.2 |
| `extensions` | readonly [] | This metadata controls which GroupsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `groupNames`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.groupNames` | [`BitFlag`](schema_export.md#bitflag) | GroupNames The ability to store a name for a group. |
| `id` | ``4`` | - |
| `name` | ``"Groups"`` | - |
| `revision` | ``4`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:247](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L247)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.Groups.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:374](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L374)

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:376](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L376)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>

**`See`**

[Cluster](cluster_export.Groups.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:348](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L348)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.Groups.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:377](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L377)

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Groups nameSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 1.3.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](schema_export.md#bitflag) | The ability to store a name for a group. |

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L30)

___

### TlvAddGroupIfIdentifyingRequest

• `Const` **TlvAddGroupIfIdentifyingRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the Groups addGroupIfIdentifying command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:218](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L218)

___

### TlvAddGroupRequest

• `Const` **TlvAddGroupRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the Groups addGroup command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L42)

___

### TlvAddGroupResponse

• `Const` **TlvAddGroupResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.7

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L59)

___

### TlvGetGroupMembershipRequest

• `Const` **TlvGetGroupMembershipRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>

Input to the Groups getGroupMembership command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L108)

___

### TlvGetGroupMembershipResponse

• `Const` **TlvGetGroupMembershipResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)[]\>  }\>

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

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.9

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L146)

___

### TlvRemoveGroupRequest

• `Const` **TlvRemoveGroupRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Groups removeGroup command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L187)

___

### TlvRemoveGroupResponse

• `Const` **TlvRemoveGroupResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.10

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L201)

___

### TlvViewGroupRequest

• `Const` **TlvViewGroupRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Groups viewGroup command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L76)

___

### TlvViewGroupResponse

• `Const` **TlvViewGroupResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.8

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L90)
