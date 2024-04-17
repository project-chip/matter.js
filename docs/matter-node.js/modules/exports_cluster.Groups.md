[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Groups

# Namespace: Groups

[exports/cluster](exports_cluster.md).Groups

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Groups.Feature.md)

### Interfaces

- [AddGroupIfIdentifyingRequest](../interfaces/exports_cluster.Groups.AddGroupIfIdentifyingRequest.md)
- [AddGroupRequest](../interfaces/exports_cluster.Groups.AddGroupRequest.md)
- [AddGroupResponse](../interfaces/exports_cluster.Groups.AddGroupResponse.md)
- [Cluster](../interfaces/exports_cluster.Groups.Cluster.md)
- [GetGroupMembershipRequest](../interfaces/exports_cluster.Groups.GetGroupMembershipRequest.md)
- [GetGroupMembershipResponse](../interfaces/exports_cluster.Groups.GetGroupMembershipResponse.md)
- [RemoveGroupRequest](../interfaces/exports_cluster.Groups.RemoveGroupRequest.md)
- [RemoveGroupResponse](../interfaces/exports_cluster.Groups.RemoveGroupResponse.md)
- [ViewGroupRequest](../interfaces/exports_cluster.Groups.ViewGroupRequest.md)
- [ViewGroupResponse](../interfaces/exports_cluster.Groups.ViewGroupResponse.md)

### Variables

- [Base](exports_cluster.Groups.md#base)
- [Cluster](exports_cluster.Groups.md#cluster)
- [ClusterInstance](exports_cluster.Groups.md#clusterinstance)
- [Complete](exports_cluster.Groups.md#complete)
- [NameSupport](exports_cluster.Groups.md#namesupport)
- [TlvAddGroupIfIdentifyingRequest](exports_cluster.Groups.md#tlvaddgroupifidentifyingrequest)
- [TlvAddGroupRequest](exports_cluster.Groups.md#tlvaddgrouprequest)
- [TlvAddGroupResponse](exports_cluster.Groups.md#tlvaddgroupresponse)
- [TlvGetGroupMembershipRequest](exports_cluster.Groups.md#tlvgetgroupmembershiprequest)
- [TlvGetGroupMembershipResponse](exports_cluster.Groups.md#tlvgetgroupmembershipresponse)
- [TlvRemoveGroupRequest](exports_cluster.Groups.md#tlvremovegrouprequest)
- [TlvRemoveGroupResponse](exports_cluster.Groups.md#tlvremovegroupresponse)
- [TlvViewGroupRequest](exports_cluster.Groups.md#tlvviewgrouprequest)
- [TlvViewGroupResponse](exports_cluster.Groups.md#tlvviewgroupresponse)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Groups clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `nameSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } | - |
| `attributes.nameSupport` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | This attribute provides legacy, read-only access to whether the Group Names feature is supported. The most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall be 0. **`See`** MatterSpecification.v11.Cluster § 1.3.6.1 |
| `commands` | \{ `addGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `addGroupIfIdentifying`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getGroupMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeAllGroups`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `commands.addGroup` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The AddGroup command allows a client to add group membership in a particular group for the server endpoint. **`See`** MatterSpecification.v11.Cluster § 1.3.7.1 |
| `commands.addGroupIfIdentifying` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is controlled using the Identify cluster, (see Identify). This command might be used to assist configuring group membership in the absence of a commissioning tool. **`See`** MatterSpecification.v11.Cluster § 1.3.7.6 |
| `commands.getGroupMembership` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint, in a number of ways. **`See`** MatterSpecification.v11.Cluster § 1.3.7.3 |
| `commands.removeAllGroups` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | The RemoveAllGroups command allows a client to direct the server to remove all group associations for the server endpoint. The RemoveAllGroups command has no data fields. **`See`** MatterSpecification.v11.Cluster § 1.3.7.5 |
| `commands.removeGroup` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The RemoveGroup command allows a client to request that the server removes the membership for the server endpoint, if any, in a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.4 |
| `commands.viewGroup` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command containing the name string for a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.2 |
| `extensions` | readonly [] | This metadata controls which GroupsCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.groupNames` | [`BitFlag`](exports_schema.md#bitflag) | GroupNames The ability to store a name for a group. |
| `id` | ``4`` | - |
| `name` | ``"Groups"`` | - |
| `revision` | ``4`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:231

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Groups.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:473

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:475

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `addGroupIfIdentifying`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getGroupMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeAllGroups`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>

**`See`**

[Cluster](exports_cluster.Groups.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:340

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.Groups.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:476

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Groups nameSupport attribute

**`See`**

MatterSpecification.v11.Cluster § 1.3.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](exports_schema.md#bitflag) | The ability to store a name for a group. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:19

___

### TlvAddGroupIfIdentifyingRequest

• `Const` **TlvAddGroupIfIdentifyingRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups addGroupIfIdentifying command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:204

___

### TlvAddGroupRequest

• `Const` **TlvAddGroupRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups addGroup command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:30

___

### TlvAddGroupResponse

• `Const` **TlvAddGroupResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:46

___

### TlvGetGroupMembershipRequest

• `Const` **TlvGetGroupMembershipRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups getGroupMembership command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:94

___

### TlvGetGroupMembershipResponse

• `Const` **TlvGetGroupMembershipResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

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

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:133

___

### TlvRemoveGroupRequest

• `Const` **TlvRemoveGroupRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups removeGroup command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:173

___

### TlvRemoveGroupResponse

• `Const` **TlvRemoveGroupResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:188

___

### TlvViewGroupRequest

• `Const` **TlvViewGroupRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups viewGroup command

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:62

___

### TlvViewGroupResponse

• `Const` **TlvViewGroupResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:77
