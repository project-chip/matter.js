[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / GroupKeyManagement

# Namespace: GroupKeyManagement

[exports/cluster](exports_cluster.md).GroupKeyManagement

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.GroupKeyManagement.Feature.md)
- [GroupKeyMulticastPolicy](../enums/exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md)
- [GroupKeySecurityPolicy](../enums/exports_cluster.GroupKeyManagement.GroupKeySecurityPolicy.md)

### Type Aliases

- [Extension](exports_cluster.GroupKeyManagement.md#extension)

### Variables

- [Base](exports_cluster.GroupKeyManagement.md#base)
- [Cluster](exports_cluster.GroupKeyManagement.md#cluster)
- [TlvGroupInfoMapStruct](exports_cluster.GroupKeyManagement.md#tlvgroupinfomapstruct)
- [TlvGroupKeyMapStruct](exports_cluster.GroupKeyManagement.md#tlvgroupkeymapstruct)
- [TlvGroupKeySetStruct](exports_cluster.GroupKeyManagement.md#tlvgroupkeysetstruct)
- [TlvKeySetReadAllIndicesResponse](exports_cluster.GroupKeyManagement.md#tlvkeysetreadallindicesresponse)
- [TlvKeySetReadRequest](exports_cluster.GroupKeyManagement.md#tlvkeysetreadrequest)
- [TlvKeySetReadResponse](exports_cluster.GroupKeyManagement.md#tlvkeysetreadresponse)
- [TlvKeySetRemoveRequest](exports_cluster.GroupKeyManagement.md#tlvkeysetremoverequest)
- [TlvKeySetWriteRequest](exports_cluster.GroupKeyManagement.md#tlvkeysetwriterequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.GroupKeyManagement.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:1379

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.md#writablefabricscopedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.md#fabricscopedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `keySetRead`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.md#command)<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetRemove`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>

These elements and properties are present in all GroupKeyManagement clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:366

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `keySetRead`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.md#command)<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetRemove`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: { `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `groupKeyMap`: [`WritableFabricScopedAttribute`](exports_cluster.md#writablefabricscopedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `groupTable`: [`FabricScopedAttribute`](exports_cluster.md#fabricscopedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `maxGroupKeysPerFabric`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `maxGroupsPerFabric`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `commands`: { `keySetRead`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetReadAllIndices`: [`Command`](exports_cluster.md#command)<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `keySetRemove`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `keySetWrite`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``63`` ; `name`: ``"GroupKeyManagement"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.GroupKeyManagement.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `cacheAndSync`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Group Key Management

The Group Key Management Cluster is the mechanism by which group keys are managed.

GroupKeyManagementCluster supports optional features that you can enable with the
GroupKeyManagementCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:702

___

### TlvGroupInfoMapStruct

• `Const` **TlvGroupInfoMapStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field uniquely identifies the group within the scope of the given Fabric.

**`See`**

MatterCoreSpecificationV1_1 § 11.2.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:38

___

### TlvGroupKeyMapStruct

• `Const` **TlvGroupKeyMapStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 11.2.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:14

___

### TlvGroupKeySetStruct

• `Const` **TlvGroupKeySetStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This field shall provide the fabric-unique index for the associated group key set, as specified in Section
4.15.3.5.1, “Group Key Set ID”.

**`See`**

MatterCoreSpecificationV1_1 § 11.2.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:95

___

### TlvKeySetReadAllIndicesResponse

• `Const` **TlvKeySetReadAllIndicesResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

**`See`**

MatterCoreSpecificationV1_1 § 11.2.8.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:347

___

### TlvKeySetReadRequest

• `Const` **TlvKeySetReadRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GroupKeyManagement keySetRead command

**`See`**

MatterCoreSpecificationV1_1 § 11.2.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:245

___

### TlvKeySetReadResponse

• `Const` **TlvKeySetReadResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It
shall contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
contents replaced by null.

**`See`**

MatterCoreSpecificationV1_1 § 11.2.8.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:255

___

### TlvKeySetRemoveRequest

• `Const` **TlvKeySetRemoveRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GroupKeyManagement keySetRemove command

**`See`**

MatterCoreSpecificationV1_1 § 11.2.8.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:331

___

### TlvKeySetWriteRequest

• `Const` **TlvKeySetWriteRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GroupKeyManagement keySetWrite command

**`See`**

MatterCoreSpecificationV1_1 § 11.2.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:169
