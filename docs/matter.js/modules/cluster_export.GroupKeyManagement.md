[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / GroupKeyManagement

# Namespace: GroupKeyManagement

[cluster/export](cluster_export.md).GroupKeyManagement

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.GroupKeyManagement.Feature.md)
- [GroupKeyMulticastPolicy](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)
- [GroupKeySecurityPolicy](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)

### Type Aliases

- [Extension](cluster_export.GroupKeyManagement.md#extension)

### Variables

- [Base](cluster_export.GroupKeyManagement.md#base)
- [Cluster](cluster_export.GroupKeyManagement.md#cluster)
- [TlvGroupInfoMapStruct](cluster_export.GroupKeyManagement.md#tlvgroupinfomapstruct)
- [TlvGroupKeyMapStruct](cluster_export.GroupKeyManagement.md#tlvgroupkeymapstruct)
- [TlvGroupKeySetStruct](cluster_export.GroupKeyManagement.md#tlvgroupkeysetstruct)
- [TlvKeySetReadAllIndicesResponse](cluster_export.GroupKeyManagement.md#tlvkeysetreadallindicesresponse)
- [TlvKeySetReadRequest](cluster_export.GroupKeyManagement.md#tlvkeysetreadrequest)
- [TlvKeySetReadResponse](cluster_export.GroupKeyManagement.md#tlvkeysetreadresponse)
- [TlvKeySetRemoveRequest](cluster_export.GroupKeyManagement.md#tlvkeysetremoverequest)
- [TlvKeySetWriteRequest](cluster_export.GroupKeyManagement.md#tlvkeysetwriterequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.GroupKeyManagement.md#base), `SF`\> & { `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:464](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L464)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `cacheAndSync`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.md#writablefabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.md#fabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, { `keySetRead`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all GroupKeyManagement clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:272](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L272)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `cacheAndSync`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `cacheAndSync`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `groupKeyMap`: [`WritableFabricScopedAttribute`](cluster_export.md#writablefabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](cluster_export.md#fabricscopedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `cacheAndSync`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `keySetRead`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, `any`\> ; `keySetReadAllIndices`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`[]\>  }\>, `any`\> ; `keySetRemove`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `keySetWrite`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.GroupKeyManagement.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `cacheAndSync`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Group Key Management

The Group Key Management Cluster is the mechanism by which group keys are managed.

GroupKeyManagementCluster supports optional features that you can enable with the
GroupKeyManagementCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:446](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L446)

___

### TlvGroupInfoMapStruct

• `Const` **TlvGroupInfoMapStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `endpoints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)[]\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

This field uniquely identifies the group within the scope of the given Fabric.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L67)

___

### TlvGroupKeyMapStruct

• `Const` **TlvGroupKeyMapStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricIndex`](datatype_export.md#fabricindex)\> ; `groupId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupId`](datatype_export.md#groupid)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L40)

___

### TlvGroupKeySetStruct

• `Const` **TlvGroupKeySetStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:132](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L132)

___

### TlvKeySetReadAllIndicesResponse

• `Const` **TlvKeySetReadAllIndicesResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupKeySetIDs`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`[]\>  }\>

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.8.6

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:253](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L253)

___

### TlvKeySetReadRequest

• `Const` **TlvKeySetReadRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the GroupKeyManagement keySetRead command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:222](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L222)

___

### TlvKeySetReadResponse

• `Const` **TlvKeySetReadResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It
shall contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
contents replaced by null.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:231](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L231)

___

### TlvKeySetRemoveRequest

• `Const` **TlvKeySetRemoveRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the GroupKeyManagement keySetRemove command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.8.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:238](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L238)

___

### TlvKeySetWriteRequest

• `Const` **TlvKeySetWriteRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `groupKeySet`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>

Input to the GroupKeyManagement keySetWrite command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.2.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:215](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L215)
