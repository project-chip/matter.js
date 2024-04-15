[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Groups](../modules/cluster_export.Groups.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[Groups](../modules/cluster_export.Groups.md).Cluster

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

MatterSpecification.v11.Cluster § 1.3

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.Groups.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.Groups.Cluster.md#attributes)
- [base](cluster_export.Groups.Cluster.md#base)
- [commands](cluster_export.Groups.Cluster.md#commands)
- [events](cluster_export.Groups.Cluster.md#events)
- [extensions](cluster_export.Groups.Cluster.md#extensions)
- [features](cluster_export.Groups.Cluster.md#features)
- [id](cluster_export.Groups.Cluster.md#id)
- [name](cluster_export.Groups.Cluster.md#name)
- [revision](cluster_export.Groups.Cluster.md#revision)
- [supportedFeatures](cluster_export.Groups.Cluster.md#supportedfeatures)
- [unknown](cluster_export.Groups.Cluster.md#unknown)

### Methods

- [alter](cluster_export.Groups.Cluster.md#alter)
- [enable](cluster_export.Groups.Cluster.md#enable)
- [set](cluster_export.Groups.Cluster.md#set)
- [with](cluster_export.Groups.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addGroup` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The AddGroup command allows a client to add group membership in a particular group for the server endpoint. **`See`** MatterSpecification.v11.Cluster § 1.3.7.1 |
| `addGroupIfIdentifying` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> | The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is controlled using the Identify cluster, (see Identify). This command might be used to assist configuring group membership in the absence of a commissioning tool. **`See`** MatterSpecification.v11.Cluster § 1.3.7.6 |
| `getGroupMembership` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> | The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint, in a number of ways. **`See`** MatterSpecification.v11.Cluster § 1.3.7.3 |
| `removeAllGroups` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | The RemoveAllGroups command allows a client to direct the server to remove all group associations for the server endpoint. The RemoveAllGroups command has no data fields. **`See`** MatterSpecification.v11.Cluster § 1.3.7.5 |
| `removeGroup` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The RemoveGroup command allows a client to request that the server removes the membership for the server endpoint, if any, in a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.4 |
| `viewGroup` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> | The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command containing the name string for a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.2 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: readonly []

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupNames` | [`BitFlag`](../modules/schema_export.md#bitflag) | GroupNames The ability to store a name for a group. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``4``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"Groups"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``4``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `groupNames` | ``true`` |

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `capacity`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``4`` = 0x4; `name`: ``"Groups"`` = "Groups"; `revision`: ``4`` = 4; `supportedFeatures`: \{ `groupNames`: ``true`` = true }  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
