[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).Cluster

Group Key Management

The Group Key Management Cluster is the mechanism by which group keys are managed.

GroupKeyManagementCluster supports optional features that you can enable with the
GroupKeyManagementCluster.with() factory method.

**`See`**

MatterSpecification.v11.Core § 11.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.GroupKeyManagement.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.GroupKeyManagement.Cluster.md#attributes)
- [base](cluster_export.GroupKeyManagement.Cluster.md#base)
- [commands](cluster_export.GroupKeyManagement.Cluster.md#commands)
- [events](cluster_export.GroupKeyManagement.Cluster.md#events)
- [extensions](cluster_export.GroupKeyManagement.Cluster.md#extensions)
- [features](cluster_export.GroupKeyManagement.Cluster.md#features)
- [id](cluster_export.GroupKeyManagement.Cluster.md#id)
- [name](cluster_export.GroupKeyManagement.Cluster.md#name)
- [revision](cluster_export.GroupKeyManagement.Cluster.md#revision)
- [supportedFeatures](cluster_export.GroupKeyManagement.Cluster.md#supportedfeatures)
- [unknown](cluster_export.GroupKeyManagement.Cluster.md#unknown)

### Methods

- [alter](cluster_export.GroupKeyManagement.Cluster.md#alter)
- [enable](cluster_export.GroupKeyManagement.Cluster.md#enable)
- [set](cluster_export.GroupKeyManagement.Cluster.md#set)
- [with](cluster_export.GroupKeyManagement.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

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
| `keySetRead` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `any`\> | This command is used by Administrators to read the state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null. Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then this command shall fail with a NOT_FOUND status code. **`See`** MatterSpecification.v11.Core § 11.2.8.2 |
| `keySetReadAllIndices` | [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> | This command is used by Administrators to query a list of all Group Key Sets associated with the accessing fabric. Effect on Receipt Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values from those structs. **`See`** MatterSpecification.v11.Core § 11.2.8.5 |
| `keySetRemove` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command is used by Administrators to remove all state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed, including all epoch keys it contains. If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the GroupKeySetID just removed, then these entries shall be removed from that list. This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID being removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only method to remove the IPK is usage of the RemoveFabric command or any operation which causes the equivalent of a RemoveFabric to occur by side-effect. This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the GroupKeySetID requested did not exist. **`See`** MatterSpecification.v11.Core § 11.2.8.4 |
| `keySetWrite` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, `void`, `any`\> | This command is used by Administrators to set the state of a given Group Key Set, including atomically updating the state of all epoch keys. Effect on Receipt If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set with the given GroupKeySetID, followed by an addition of a Group Key Set with the provided configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set associated with the accessing fabric shall be created with the provided data. The Group Key Set shall be written to non-volatile storage. Upon completion, this command shall send a status code back to the initiator: • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to SUCCESS. • If there are insufficient resources on the receiver to store an additional Group Key Set, the status code shall be set to RESOURCE_EXHAUSTED (see group key limits); • Otherwise, this status code shall be set to FAILURE. **`See`** MatterSpecification.v11.Core § 11.2.8.1 |

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
| `cacheAndSync` | [`BitFlag`](../modules/schema_export.md#bitflag) | CacheAndSync The ability to support CacheAndSync security policy and MCSP. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``63``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"GroupKeyManagement"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

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

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoints`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupId`](../modules/datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.Command.md)\<`void`, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](tlv_export.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``63`` = 0x3f; `name`: ``"GroupKeyManagement"`` = "GroupKeyManagement"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
