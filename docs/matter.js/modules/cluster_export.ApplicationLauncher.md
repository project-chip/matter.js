[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ApplicationLauncher

# Namespace: ApplicationLauncher

[cluster/export](cluster_export.md).ApplicationLauncher

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.ApplicationLauncher.Feature.md)
- [Status](../enums/cluster_export.ApplicationLauncher.Status.md)

### Interfaces

- [ApplicationEPStruct](../interfaces/cluster_export.ApplicationLauncher.ApplicationEPStruct.md)
- [ApplicationStruct](../interfaces/cluster_export.ApplicationLauncher.ApplicationStruct.md)
- [Cluster](../interfaces/cluster_export.ApplicationLauncher.Cluster.md)
- [Complete](../interfaces/cluster_export.ApplicationLauncher.Complete.md)
- [HideAppRequest](../interfaces/cluster_export.ApplicationLauncher.HideAppRequest.md)
- [LaunchAppRequest](../interfaces/cluster_export.ApplicationLauncher.LaunchAppRequest.md)
- [LauncherResponse](../interfaces/cluster_export.ApplicationLauncher.LauncherResponse.md)
- [StopAppRequest](../interfaces/cluster_export.ApplicationLauncher.StopAppRequest.md)

### Variables

- [ApplicationPlatformComponent](cluster_export.ApplicationLauncher.md#applicationplatformcomponent)
- [Base](cluster_export.ApplicationLauncher.md#base)
- [Cluster](cluster_export.ApplicationLauncher.md#cluster)
- [ClusterInstance](cluster_export.ApplicationLauncher.md#clusterinstance)
- [Complete](cluster_export.ApplicationLauncher.md#complete)
- [CompleteInstance](cluster_export.ApplicationLauncher.md#completeinstance)
- [TlvApplicationEPStruct](cluster_export.ApplicationLauncher.md#tlvapplicationepstruct)
- [TlvApplicationStruct](cluster_export.ApplicationLauncher.md#tlvapplicationstruct)
- [TlvHideAppRequest](cluster_export.ApplicationLauncher.md#tlvhideapprequest)
- [TlvLaunchAppRequest](cluster_export.ApplicationLauncher.md#tlvlaunchapprequest)
- [TlvLauncherResponse](cluster_export.ApplicationLauncher.md#tlvlauncherresponse)
- [TlvStopAppRequest](cluster_export.ApplicationLauncher.md#tlvstopapprequest)

## Variables

### ApplicationPlatformComponent

• `Const` **ApplicationPlatformComponent**: `Object`

A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `catalogList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`[], `any`\>  } |
| `attributes.catalogList` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`[], `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L200)

___

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all ApplicationLauncher clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentApp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\>  } | - |
| `attributes.currentApp` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\> | This attribute shall specify the current in-focus application, identified using an Application ID, catalog vendor ID and the corresponding endpoint number when the application is represented by a Content App endpoint. A null shall be used to indicate there is no current in-focus application. **`See`** MatterSpecification.v11.Cluster § 6.4.3.2 |
| `commands` | \{ `hideApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } | - |
| `commands.hideApp` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall hide the application. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint may decide to stop the application based on manufacturer specific behavior or resource constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which the action was taken. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.3 |
| `commands.launchApp` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall launch the application with optional data. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint shall launch and bring to foreground the requisite application if the application is not already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the Application Basic cluster of the Endpoint corresponding to the launched application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the foreground. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.1 |
| `commands.stopApp` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall stop the application if it is running. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint corresponding to the stopped application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.2 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] | This metadata controls which ApplicationLauncherCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.applicationPlatform` | [`BitFlag`](schema_export.md#bitflag) | ApplicationPlatform Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs |
| `id` | ``1292`` | - |
| `name` | ``"ApplicationLauncher"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L233)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:343](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L343)

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:345](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L345)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.ApplicationLauncher.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:331](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L331)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.ApplicationLauncher.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:374](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L374)

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:376](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L376)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `catalogList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`[], `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `applicationPlatform`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `never`\> ; `currentApp`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\> ; `eventList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommandId`](datatype_export.md#commandid)[], `never`\>  } ; `commands`: \{ `hideApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } = Cluster.commands; `features`: \{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``1292``, ``"ClusterId"``\> = Cluster.id; `name`: ``"ApplicationLauncher"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.ApplicationLauncher.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L351)

___

### TlvApplicationEPStruct

• `Const` **TlvApplicationEPStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>

This specifies an app along with its corresponding endpoint.

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L62)

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L28)

___

### TlvHideAppRequest

• `Const` **TlvHideAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

Input to the ApplicationLauncher hideApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L181)

___

### TlvLaunchAppRequest

• `Const` **TlvLaunchAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>

Input to the ApplicationLauncher launchApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L79)

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L132)

___

### TlvStopAppRequest

• `Const` **TlvStopAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>

Input to the ApplicationLauncher stopApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:160](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L160)
