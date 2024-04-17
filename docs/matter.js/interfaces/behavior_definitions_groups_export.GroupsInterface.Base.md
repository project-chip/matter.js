[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/groups/export](../modules/behavior_definitions_groups_export.md) / [GroupsInterface](../modules/behavior_definitions_groups_export.GroupsInterface.md) / Base

# Interface: Base

[behavior/definitions/groups/export](../modules/behavior_definitions_groups_export.md).[GroupsInterface](../modules/behavior_definitions_groups_export.GroupsInterface.md).Base

## Table of contents

### Methods

- [addGroup](behavior_definitions_groups_export.GroupsInterface.Base.md#addgroup)
- [addGroupIfIdentifying](behavior_definitions_groups_export.GroupsInterface.Base.md#addgroupifidentifying)
- [getGroupMembership](behavior_definitions_groups_export.GroupsInterface.Base.md#getgroupmembership)
- [removeAllGroups](behavior_definitions_groups_export.GroupsInterface.Base.md#removeallgroups)
- [removeGroup](behavior_definitions_groups_export.GroupsInterface.Base.md#removegroup)
- [viewGroup](behavior_definitions_groups_export.GroupsInterface.Base.md#viewgroup)

## Methods

### addGroup

▸ **addGroup**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

The AddGroup command allows a client to add group membership in a particular group for the server endpoint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.1

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L112)

___

### addGroupIfIdentifying

▸ **addGroupIfIdentifying**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the
server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is
controlled using the Identify cluster, (see Identify).

This command might be used to assist configuring group membership in the absence of a commissioning tool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.6

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L157)

___

### getGroupMembership

▸ **getGroupMembership**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>\>

The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint,
in a number of ways.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.3

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L128)

___

### removeAllGroups

▸ **removeAllGroups**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

The RemoveAllGroups command allows a client to direct the server to remove all group associations for the
server endpoint.

The RemoveAllGroups command has no data fields.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.5

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L146)

___

### removeGroup

▸ **removeGroup**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

The RemoveGroup command allows a client to request that the server removes the membership for the server
endpoint, if any, in a particular group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.4

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L136)

___

### viewGroup

▸ **viewGroup**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command
containing the name string for a particular group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 1.3.7.2

#### Defined in

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L120)
