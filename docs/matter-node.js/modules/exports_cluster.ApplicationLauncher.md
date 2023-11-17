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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.ApplicationLauncher.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `applicationPlatform`: ``true``  } ? typeof [`ApplicationPlatformComponent`](exports_cluster.ApplicationLauncher.md#applicationplatformcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:974

## Variables

### ApplicationPlatformComponent

• `Const` **ApplicationPlatformComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `catalogList`: [`Attribute`](exports_cluster.md#attribute)<`number`[], `any`\>  }  }\>

A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:458

___

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `currentApp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } ; `commands`: { `hideApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: { `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>

These elements and properties are present in all ApplicationLauncher clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:224

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `hideApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `events`: {} ; `features`: { `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `currentApp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } ; `commands`: { `hideApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: { `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.ApplicationLauncher.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Application Launcher

This cluster provides an interface for launching applications on a Video Player device such as a TV.

ApplicationLauncherCluster supports optional features that you can enable with the
ApplicationLauncherCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:482

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `catalogList`: [`Attribute`](exports_cluster.md#attribute)<`number`[], `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `currentApp`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\>  } ; `commands`: { `hideApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: { `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1292`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>

This cluster supports all ApplicationLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:985

___

### TlvApplicationEPStruct

• `Const` **TlvApplicationEPStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This specifies an app along with its corresponding endpoint.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:41

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:16

___

### TlvHideAppRequest

• `Const` **TlvHideAppRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ApplicationLauncher hideApp command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:180

___

### TlvLaunchAppRequest

• `Const` **TlvLaunchAppRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ApplicationLauncher launchApp command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:69

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:129

___

### TlvStopAppRequest

• `Const` **TlvStopAppRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ApplicationLauncher stopApp command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.4.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:148
