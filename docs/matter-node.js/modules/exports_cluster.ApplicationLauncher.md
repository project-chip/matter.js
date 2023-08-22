[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ApplicationLauncher

# Namespace: ApplicationLauncher

[exports/cluster](exports_cluster.md).ApplicationLauncher

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.ApplicationLauncher.Feature.md)
- [Status](../enums/exports_cluster.ApplicationLauncher.Status.md)

### Type Aliases

- [Extension](exports_cluster.ApplicationLauncher.md#extension)

### Variables

- [ApplicationPlatformComponent](exports_cluster.ApplicationLauncher.md#applicationplatformcomponent)
- [Base](exports_cluster.ApplicationLauncher.md#base)
- [Cluster](exports_cluster.ApplicationLauncher.md#cluster)
- [Complete](exports_cluster.ApplicationLauncher.md#complete)
- [TlvApplicationEPStruct](exports_cluster.ApplicationLauncher.md#tlvapplicationepstruct)
- [TlvApplicationStruct](exports_cluster.ApplicationLauncher.md#tlvapplicationstruct)
- [TlvHideAppRequest](exports_cluster.ApplicationLauncher.md#tlvhideapprequest)
- [TlvLaunchAppRequest](exports_cluster.ApplicationLauncher.md#tlvlaunchapprequest)
- [TlvLauncherResponse](exports_cluster.ApplicationLauncher.md#tlvlauncherresponse)
- [TlvStopAppRequest](exports_cluster.ApplicationLauncher.md#tlvstopapprequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.ApplicationLauncher.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `applicationPlatform`: ``true``  } ? typeof [`ApplicationPlatformComponent`](exports_cluster.ApplicationLauncher.md#applicationplatformcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:720

## Variables

### ApplicationPlatformComponent

• `Const` **ApplicationPlatformComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `catalogList`: [`Attribute`](exports_cluster.md#attribute)<`number`[], `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:450

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentApp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md) \| ``null``, `any`\>  }, { `hideApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all ApplicationLauncher clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:223

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `hideApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ApplicationLauncher.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Application Launcher

This cluster provides an interface for launching applications on a Video Player device such as a TV.

ApplicationLauncherCluster supports optional features that you can enable with the
ApplicationLauncherCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:472

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `hideApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, {}\>

This cluster supports all ApplicationLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:731

___

### TlvApplicationEPStruct

• `Const` **TlvApplicationEPStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This specifies an app along with its corresponding endpoint.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.5.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:40

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.5.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:15

___

### TlvHideAppRequest

• `Const` **TlvHideAppRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ApplicationLauncher hideApp command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:179

___

### TlvLaunchAppRequest

• `Const` **TlvLaunchAppRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ApplicationLauncher launchApp command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:68

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:128

___

### TlvStopAppRequest

• `Const` **TlvStopAppRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ApplicationLauncher stopApp command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ApplicationLauncherCluster.d.ts:147
