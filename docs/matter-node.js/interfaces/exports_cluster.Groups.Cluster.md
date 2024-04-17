[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Groups](../modules/exports_cluster.Groups.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[Groups](../modules/exports_cluster.Groups.md).Cluster

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

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.Groups.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.Groups.Cluster.md#attributes)
- [base](exports_cluster.Groups.Cluster.md#base)
- [commands](exports_cluster.Groups.Cluster.md#commands)
- [events](exports_cluster.Groups.Cluster.md#events)
- [extensions](exports_cluster.Groups.Cluster.md#extensions)
- [features](exports_cluster.Groups.Cluster.md#features)
- [id](exports_cluster.Groups.Cluster.md#id)
- [name](exports_cluster.Groups.Cluster.md#name)
- [revision](exports_cluster.Groups.Cluster.md#revision)
- [supportedFeatures](exports_cluster.Groups.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.Groups.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.Groups.Cluster.md#alter)
- [enable](exports_cluster.Groups.Cluster.md#enable)
- [set](exports_cluster.Groups.Cluster.md#set)
- [with](exports_cluster.Groups.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addGroup` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> | The AddGroup command allows a client to add group membership in a particular group for the server endpoint. **`See`** MatterSpecification.v11.Cluster § 1.3.7.1 |
| `addGroupIfIdentifying` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> | The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is controlled using the Identify cluster, (see Identify). This command might be used to assist configuring group membership in the absence of a commissioning tool. **`See`** MatterSpecification.v11.Cluster § 1.3.7.6 |
| `getGroupMembership` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> | The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint, in a number of ways. **`See`** MatterSpecification.v11.Cluster § 1.3.7.3 |
| `removeAllGroups` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | The RemoveAllGroups command allows a client to direct the server to remove all group associations for the server endpoint. The RemoveAllGroups command has no data fields. **`See`** MatterSpecification.v11.Cluster § 1.3.7.5 |
| `removeGroup` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> | The RemoveGroup command allows a client to request that the server removes the membership for the server endpoint, if any, in a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.4 |
| `viewGroup` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> | The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command containing the name string for a particular group. **`See`** MatterSpecification.v11.Cluster § 1.3.7.2 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly []

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupNames` | [`BitFlag`](../modules/exports_schema.md#bitflag) | GroupNames The ability to store a name for a group. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``4``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"Groups"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``4``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

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

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `nameSupport`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `nameSupport`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `addGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `addGroupIfIdentifying`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `getGroupMembership`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `capacity`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number`\> ; `groupList`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)[]\>  }\>, `any`\> ; `removeAllGroups`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `removeGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\> ; `viewGroup`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `groupNames`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``4`` ; `name`: ``"Groups"`` ; `revision`: ``4`` ; `supportedFeatures`: \{ `groupNames`: ``true``  }  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
