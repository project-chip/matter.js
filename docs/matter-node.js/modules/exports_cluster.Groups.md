[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Groups

# Namespace: Groups

[exports/cluster](exports_cluster.md).Groups

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Groups.Feature.md)

### Type Aliases

- [Extension](exports_cluster.Groups.md#extension)

### Variables

- [Base](exports_cluster.Groups.md#base)
- [Cluster](exports_cluster.Groups.md#cluster)
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

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.Groups.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:511

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `addGroupIfIdentifying`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getGroupMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeAllGroups`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4``  }\>

These elements and properties are present in all Groups clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:142

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `addGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `addGroupIfIdentifying`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getGroupMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeAllGroups`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `events`: {} ; `features`: \{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  } ; `unknown`: ``false``  } & `Omit`\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `addGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `addGroupIfIdentifying`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `getGroupMembership`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `removeAllGroups`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `viewGroup`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `events`: {} ; `features`: \{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``4`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  } ; `unknown`: ``false``  }, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Groups.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `groupNames`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

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

MatterApplicationClusterSpecificationV1_1 § 1.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:268

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Groups nameSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.6.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](exports_schema.md#bitflag) | The ability to store a name for a group. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:17

___

### TlvAddGroupIfIdentifyingRequest

• `Const` **TlvAddGroupIfIdentifyingRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups addGroupIfIdentifying command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:122

___

### TlvAddGroupRequest

• `Const` **TlvAddGroupRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups addGroup command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:28

___

### TlvAddGroupResponse

• `Const` **TlvAddGroupResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:37

___

### TlvGetGroupMembershipRequest

• `Const` **TlvGetGroupMembershipRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups getGroupMembership command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:64

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

MatterApplicationClusterSpecificationV1_1 § 1.3.7.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:96

___

### TlvRemoveGroupRequest

• `Const` **TlvRemoveGroupRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups removeGroup command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:105

___

### TlvRemoveGroupResponse

• `Const` **TlvRemoveGroupResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:113

___

### TlvViewGroupRequest

• `Const` **TlvViewGroupRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Groups viewGroup command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:46

___

### TlvViewGroupResponse

• `Const` **TlvViewGroupResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.3.7.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupsCluster.d.ts:54
