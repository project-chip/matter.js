[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ApplicationLauncher

# Namespace: ApplicationLauncher

[exports/cluster](exports_cluster.md).ApplicationLauncher

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.ApplicationLauncher.Feature.md)
- [Status](../enums/exports_cluster.ApplicationLauncher.Status.md)

### Interfaces

- [ApplicationEPStruct](../interfaces/exports_cluster.ApplicationLauncher.ApplicationEPStruct.md)
- [ApplicationStruct](../interfaces/exports_cluster.ApplicationLauncher.ApplicationStruct.md)
- [Cluster](../interfaces/exports_cluster.ApplicationLauncher.Cluster.md)
- [Complete](../interfaces/exports_cluster.ApplicationLauncher.Complete.md)
- [HideAppRequest](../interfaces/exports_cluster.ApplicationLauncher.HideAppRequest.md)
- [LaunchAppRequest](../interfaces/exports_cluster.ApplicationLauncher.LaunchAppRequest.md)
- [LauncherResponse](../interfaces/exports_cluster.ApplicationLauncher.LauncherResponse.md)
- [StopAppRequest](../interfaces/exports_cluster.ApplicationLauncher.StopAppRequest.md)

### Variables

- [ApplicationPlatformComponent](exports_cluster.ApplicationLauncher.md#applicationplatformcomponent)
- [Base](exports_cluster.ApplicationLauncher.md#base)
- [Cluster](exports_cluster.ApplicationLauncher.md#cluster)
- [ClusterInstance](exports_cluster.ApplicationLauncher.md#clusterinstance)
- [Complete](exports_cluster.ApplicationLauncher.md#complete)
- [CompleteInstance](exports_cluster.ApplicationLauncher.md#completeinstance)
- [TlvApplicationEPStruct](exports_cluster.ApplicationLauncher.md#tlvapplicationepstruct)
- [TlvApplicationStruct](exports_cluster.ApplicationLauncher.md#tlvapplicationstruct)
- [TlvHideAppRequest](exports_cluster.ApplicationLauncher.md#tlvhideapprequest)
- [TlvLaunchAppRequest](exports_cluster.ApplicationLauncher.md#tlvlaunchapprequest)
- [TlvLauncherResponse](exports_cluster.ApplicationLauncher.md#tlvlauncherresponse)
- [TlvStopAppRequest](exports_cluster.ApplicationLauncher.md#tlvstopapprequest)

## Variables

### ApplicationPlatformComponent

• `Const` **ApplicationPlatformComponent**: `Object`

A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `catalogList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`[], `any`\>  } |
| `attributes.catalogList` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`[], `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:254

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all ApplicationLauncher clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentApp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } | - |
| `attributes.currentApp` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> | This attribute shall specify the current in-focus application, identified using an Application ID, catalog vendor ID and the corresponding endpoint number when the application is represented by a Content App endpoint. A null shall be used to indicate there is no current in-focus application. **`See`** MatterSpecification.v11.Cluster § 6.4.3.2 |
| `commands` | \{ `hideApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `commands.hideApp` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt of this command, the server shall hide the application. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint may decide to stop the application based on manufacturer specific behavior or resource constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which the action was taken. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.3 |
| `commands.launchApp` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt of this command, the server shall launch the application with optional data. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint shall launch and bring to foreground the requisite application if the application is not already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the Application Basic cluster of the Endpoint corresponding to the launched application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the foreground. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.1 |
| `commands.stopApp` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt of this command, the server shall stop the application if it is running. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint corresponding to the stopped application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.2 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] | This metadata controls which ApplicationLauncherCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.applicationPlatform` | [`BitFlag`](exports_schema.md#bitflag) | ApplicationPlatform Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs |
| `id` | ``1292`` | - |
| `name` | ``"ApplicationLauncher"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:285

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ApplicationLauncher.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:806

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:808

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.ApplicationLauncher.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:542

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.ApplicationLauncher.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:1069

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:1071

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `catalogList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`[], `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `applicationPlatform`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentApp`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\>  } ; `commands`: \{ `hideApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `launchApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stopApp`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `applicationPlatform`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.ApplicationLauncher.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:812

___

### TlvApplicationEPStruct

• `Const` **TlvApplicationEPStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This specifies an app along with its corresponding endpoint.

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:50

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:18

___

### TlvHideAppRequest

• `Const` **TlvHideAppRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ApplicationLauncher hideApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:217

___

### TlvLaunchAppRequest

• `Const` **TlvLaunchAppRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ApplicationLauncher launchApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:85

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:152

___

### TlvStopAppRequest

• `Const` **TlvStopAppRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ApplicationLauncher stopApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:178
