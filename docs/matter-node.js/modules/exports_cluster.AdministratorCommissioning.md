[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AdministratorCommissioning

# Namespace: AdministratorCommissioning

[exports/cluster](exports_cluster.md).AdministratorCommissioning

## Table of contents

### Enumerations

- [CommissioningWindowStatus](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md)
- [Feature](../enums/exports_cluster.AdministratorCommissioning.Feature.md)
- [StatusCode](../enums/exports_cluster.AdministratorCommissioning.StatusCode.md)

### Type Aliases

- [Extension](exports_cluster.AdministratorCommissioning.md#extension)

### Variables

- [Base](exports_cluster.AdministratorCommissioning.md#base)
- [BasicComponent](exports_cluster.AdministratorCommissioning.md#basiccomponent)
- [Cluster](exports_cluster.AdministratorCommissioning.md#cluster)
- [Complete](exports_cluster.AdministratorCommissioning.md#complete)
- [TlvOpenBasicCommissioningWindowRequest](exports_cluster.AdministratorCommissioning.md#tlvopenbasiccommissioningwindowrequest)
- [TlvOpenCommissioningWindowRequest](exports_cluster.AdministratorCommissioning.md#tlvopencommissioningwindowrequest)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.AdministratorCommissioning.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `basic`: ``true``  } ? typeof [`BasicComponent`](exports_cluster.AdministratorCommissioning.md#basiccomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:687

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `adminFabricIndex`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_FabricIndex_.md) \| ``null``, `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md) \| ``null``, `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.md#attribute)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } ; `commands`: \{ `openCommissioningWindow`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``60`` ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>

These elements and properties are present in all AdministratorCommissioning clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:135

___

### BasicComponent

• `Const` **BasicComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  }\>

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:295

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `openCommissioningWindow`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `adminFabricIndex`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_FabricIndex_.md) \| ``null``, `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md) \| ``null``, `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.md#attribute)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } ; `commands`: \{ `openCommissioningWindow`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``60`` ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.AdministratorCommissioning.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Administrator Commissioning

This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines Attributes,
Commands and Responses needed for this purpose.

For the management of Operational Credentials and Trusted Root Certificates, the Node Operational Credentials
cluster is used.

AdministratorCommissioningCluster supports optional features that you can enable with the
AdministratorCommissioningCluster.with() factory method.

**`See`**

MatterCoreSpecificationV1_1 § 11.18

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:348

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `openCommissioningWindow`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``60`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>

This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:698

___

### TlvOpenBasicCommissioningWindowRequest

• `Const` **TlvOpenBasicCommissioningWindowRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AdministratorCommissioning openBasicCommissioningWindow command

**`See`**

MatterCoreSpecificationV1_1 § 11.18.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:116

___

### TlvOpenCommissioningWindowRequest

• `Const` **TlvOpenCommissioningWindowRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AdministratorCommissioning openCommissioningWindow command

**`See`**

MatterCoreSpecificationV1_1 § 11.18.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:33
