[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md).Cluster

Group Key Management

The Group Key Management Cluster is the mechanism by which group keys are managed.

GroupKeyManagementCluster supports optional features that you can enable with the
GroupKeyManagementCluster.with() factory method.

**`See`**

MatterSpecification.v11.Core § 11.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.GroupKeyManagement.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.GroupKeyManagement.Cluster.md#attributes)
- [base](exports_cluster.GroupKeyManagement.Cluster.md#base)
- [commands](exports_cluster.GroupKeyManagement.Cluster.md#commands)
- [events](exports_cluster.GroupKeyManagement.Cluster.md#events)
- [extensions](exports_cluster.GroupKeyManagement.Cluster.md#extensions)
- [features](exports_cluster.GroupKeyManagement.Cluster.md#features)
- [id](exports_cluster.GroupKeyManagement.Cluster.md#id)
- [name](exports_cluster.GroupKeyManagement.Cluster.md#name)
- [revision](exports_cluster.GroupKeyManagement.Cluster.md#revision)
- [supportedFeatures](exports_cluster.GroupKeyManagement.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.GroupKeyManagement.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.GroupKeyManagement.Cluster.md#alter)
- [enable](exports_cluster.GroupKeyManagement.Cluster.md#enable)
- [set](exports_cluster.GroupKeyManagement.Cluster.md#set)
- [with](exports_cluster.GroupKeyManagement.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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
| `keySetRead` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>, `any`\> | This command is used by Administrators to read the state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null. Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then this command shall fail with a NOT_FOUND status code. **`See`** MatterSpecification.v11.Core § 11.2.8.2 |
| `keySetReadAllIndices` | [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> | This command is used by Administrators to query a list of all Group Key Sets associated with the accessing fabric. Effect on Receipt Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values from those structs. **`See`** MatterSpecification.v11.Core § 11.2.8.5 |
| `keySetRemove` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> | This command is used by Administrators to remove all state of a given Group Key Set. Effect on Receipt If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed, including all epoch keys it contains. If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the GroupKeySetID just removed, then these entries shall be removed from that list. This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID being removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only method to remove the IPK is usage of the RemoveFabric command or any operation which causes the equivalent of a RemoveFabric to occur by side-effect. This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the GroupKeySetID requested did not exist. **`See`** MatterSpecification.v11.Core § 11.2.8.4 |
| `keySetWrite` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>, `void`, `any`\> | This command is used by Administrators to set the state of a given Group Key Set, including atomically updating the state of all epoch keys. Effect on Receipt If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch start time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall fail with an INVALID_COMMAND status code sent back to the initiator. If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set with the given GroupKeySetID, followed by an addition of a Group Key Set with the provided configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set associated with the accessing fabric shall be created with the provided data. The Group Key Set shall be written to non-volatile storage. Upon completion, this command shall send a status code back to the initiator: • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to SUCCESS. • If there are insufficient resources on the receiver to store an additional Group Key Set, the status code shall be set to RESOURCE_EXHAUSTED (see group key limits); • Otherwise, this status code shall be set to FAILURE. **`See`** MatterSpecification.v11.Core § 11.2.8.1 |

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
| `cacheAndSync` | [`BitFlag`](../modules/exports_schema.md#bitflag) | CacheAndSync The ability to support CacheAndSync security policy and MCSP. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``63``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"GroupKeyManagement"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `endpoints`: [`FieldType`](exports_tlv.FieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\> ; `groupId`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupId`](../modules/exports_datatype.md#groupid)\> ; `groupName`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `keySetRead`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.Command.md)\<`void`, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetIDs`: [`FieldType`](exports_tlv.FieldType.md)\<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `groupKeySet`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, `void`, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `cacheAndSync`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
