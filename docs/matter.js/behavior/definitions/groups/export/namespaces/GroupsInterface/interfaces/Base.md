[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/groups/export](../../../README.md) / [GroupsInterface](../README.md) / Base

# Interface: Base

## Methods

### addGroup()

> **addGroup**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

The AddGroup command allows a client to add group membership in a particular group for the server endpoint.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 1.3.7.1

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L112)

***

### addGroupIfIdentifying()

> **addGroupIfIdentifying**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the
server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is
controlled using the Identify cluster, (see Identify).

This command might be used to assist configuring group membership in the absence of a commissioning tool.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.3.7.6

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L157)

***

### getGroupMembership()

> **getGroupMembership**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint,
in a number of ways.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 1.3.7.3

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L128)

***

### removeAllGroups()

> **removeAllGroups**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

The RemoveAllGroups command allows a client to direct the server to remove all group associations for the
server endpoint.

The RemoveAllGroups command has no data fields.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Cluster § 1.3.7.5

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L146)

***

### removeGroup()

> **removeGroup**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

The RemoveGroup command allows a client to request that the server removes the membership for the server
endpoint, if any, in a particular group.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 1.3.7.4

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L136)

***

### viewGroup()

> **viewGroup**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command
containing the name string for a particular group.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 1.3.7.2

#### Source

[packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/groups/GroupsInterface.ts#L120)
