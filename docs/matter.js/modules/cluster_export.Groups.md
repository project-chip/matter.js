[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Groups

# Namespace: Groups

[cluster/export](cluster_export.md).Groups

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Groups.Feature.md)

### Type Aliases

- [Extension](cluster_export.Groups.md#extension)

### Variables

- [Base](cluster_export.Groups.md#base)
- [Cluster](cluster_export.Groups.md#cluster)
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

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.Groups.md#base), `SF`\> & { `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:287](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L287)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `groupNames`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `nameSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, { `addGroup`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all Groups clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L163)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `groupNames`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `groupNames`: ``true`` = true }, [`Merge`](util_export.md#merge)<{ `nameSupport`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `nameSupport`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `groupNames`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `addGroup`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Groups.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `groupNames`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Groups

The Groups cluster manages, per endpoint, the content of the node-wide Group Table that is part of the
underlying interaction layer.

In a network supporting fabrics, group IDs referenced by attributes or other elements of this cluster are scoped
to the accessing fabric.

The Groups cluster is scoped to the endpoint. Groups cluster commands support discovering the endpoint
membership in a group, adding the endpoint to a group, removing the endpoint from a group, removing endpoint
membership from all groups. All commands defined in this cluster shall only affect groups scoped to the
accessing fabric.

When group names are supported, the server stores a name string, which is set by the client for each assigned
group and indicated in response to a client request.

Note that configuration of group addresses for outgoing commands is achieved using the Message Layer mechanisms
where the Group Table is not involved. Hence this cluster does not play a part in that.

GroupsCluster supports optional features that you can enable with the GroupsCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:268](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L268)

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Groups nameSupport attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](schema_export.md#bitflag-1) | The ability to store a name for a group. |

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L33)

___

### TlvAddGroupIfIdentifyingRequest

• `Const` **TlvAddGroupIfIdentifyingRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the Groups addGroupIfIdentifying command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.6

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:141](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L141)

___

### TlvAddGroupRequest

• `Const` **TlvAddGroupRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the Groups addGroup command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L45)

___

### TlvAddGroupResponse

• `Const` **TlvAddGroupResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.7

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L55)

___

### TlvGetGroupMembershipRequest

• `Const` **TlvGetGroupMembershipRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)[]\>  }\>

Input to the Groups getGroupMembership command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:83](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L83)

___

### TlvGetGroupMembershipResponse

• `Const` **TlvGetGroupMembershipResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `capacity`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\> ; `groupList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)[]\>  }\>

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

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.9

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L114)

___

### TlvRemoveGroupRequest

• `Const` **TlvRemoveGroupRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Groups removeGroup command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:124](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L124)

___

### TlvRemoveGroupResponse

• `Const` **TlvRemoveGroupResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.10

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:131](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L131)

___

### TlvViewGroupRequest

• `Const` **TlvViewGroupRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\>  }\>

Input to the Groups viewGroup command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L65)

___

### TlvViewGroupResponse

• `Const` **TlvViewGroupResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.3.7.8

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupsCluster.ts:72](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupsCluster.ts#L72)
