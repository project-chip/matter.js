[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AdministratorCommissioning

# Namespace: AdministratorCommissioning

[exports/cluster](exports_cluster.md).AdministratorCommissioning

## Table of contents

### Enumerations

- [CommissioningWindowStatus](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md)
- [Feature](../enums/exports_cluster.AdministratorCommissioning.Feature.md)

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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.AdministratorCommissioning.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `basic`: ``true``  } ? typeof [`BasicComponent`](exports_cluster.AdministratorCommissioning.md#basiccomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AdministratorCommissioningCluster.d.ts:489

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `adminFabricIndex`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/datatype/FabricIndex"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_datatype_FabricIndex_.md) \| ``null``, `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/datatype/VendorId"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_datatype_VendorId_.md) \| ``null``, `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.md#attribute)<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, { `openCommissioningWindow`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all AdministratorCommissioning clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AdministratorCommissioningCluster.d.ts:114

___

### BasicComponent

• `Const` **BasicComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `openBasicCommissioningWindow`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AdministratorCommissioningCluster.d.ts:267

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `openCommissioningWindow`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.AdministratorCommissioning.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

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

packages/matter.js/dist/cjs/cluster/definitions/AdministratorCommissioningCluster.d.ts:318

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `basic`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `openBasicCommissioningWindow`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `openCommissioningWindow`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AdministratorCommissioningCluster.d.ts:500

___

### TlvOpenBasicCommissioningWindowRequest

• `Const` **TlvOpenBasicCommissioningWindowRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the AdministratorCommissioning openBasicCommissioningWindow command

**`See`**

MatterCoreSpecificationV1_1 § 11.18.8.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AdministratorCommissioningCluster.d.ts:95

___

### TlvOpenCommissioningWindowRequest

• `Const` **TlvOpenCommissioningWindowRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the AdministratorCommissioning openCommissioningWindow command

**`See`**

MatterCoreSpecificationV1_1 § 11.18.8.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AdministratorCommissioningCluster.d.ts:32
