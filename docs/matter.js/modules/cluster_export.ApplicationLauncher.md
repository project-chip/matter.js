[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ApplicationLauncher

# Namespace: ApplicationLauncher

[cluster/export](cluster_export.md).ApplicationLauncher

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.ApplicationLauncher.Feature.md)
- [Status](../enums/cluster_export.ApplicationLauncher.Status.md)

### Type Aliases

- [Extension](cluster_export.ApplicationLauncher.md#extension)

### Variables

- [ApplicationPlatformComponent](cluster_export.ApplicationLauncher.md#applicationplatformcomponent)
- [Base](cluster_export.ApplicationLauncher.md#base)
- [Cluster](cluster_export.ApplicationLauncher.md#cluster)
- [Complete](cluster_export.ApplicationLauncher.md#complete)
- [TlvApplicationEPStruct](cluster_export.ApplicationLauncher.md#tlvapplicationepstruct)
- [TlvApplicationStruct](cluster_export.ApplicationLauncher.md#tlvapplicationstruct)
- [TlvHideAppRequest](cluster_export.ApplicationLauncher.md#tlvhideapprequest)
- [TlvLaunchAppRequest](cluster_export.ApplicationLauncher.md#tlvlaunchapprequest)
- [TlvLauncherResponse](cluster_export.ApplicationLauncher.md#tlvlauncherresponse)
- [TlvStopAppRequest](cluster_export.ApplicationLauncher.md#tlvstopapprequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.ApplicationLauncher.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `applicationPlatform`: ``true``  } ? typeof [`ApplicationPlatformComponent`](cluster_export.ApplicationLauncher.md#applicationplatformcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:308](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L308)

## Variables

### ApplicationPlatformComponent

• `Const` **ApplicationPlatformComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `catalogList`: [`Attribute`](cluster_export.md#attribute)<`number`[], `any`\>  }  }\>

A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:261](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L261)

___

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentApp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: { `hideApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `features`: { `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all ApplicationLauncher clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:171](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L171)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentApp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `hideApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `events`: {} ; `features`: { `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``1292`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentApp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: { `hideApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `features`: { `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ApplicationLauncher.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Application Launcher

This cluster provides an interface for launching applications on a Video Player device such as a TV.

ApplicationLauncherCluster supports optional features that you can enable with the
ApplicationLauncherCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:286](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L286)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `catalogList`: [`Attribute`](cluster_export.md#attribute)<`number`[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentApp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\>  } ; `commands`: { `hideApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } = Cluster.commands; `features`: { `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``1292`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"ApplicationLauncher"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all ApplicationLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:320](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L320)

___

### TlvApplicationEPStruct

• `Const` **TlvApplicationEPStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>

This specifies an app along with its corresponding endpoint.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:53](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L53)

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This indicates a global identifier for an Application given a catalog.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:26](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L26)

___

### TlvHideAppRequest

• `Const` **TlvHideAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>

Input to the ApplicationLauncher hideApp command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:144](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L144)

___

### TlvLaunchAppRequest

• `Const` **TlvLaunchAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>

Input to the ApplicationLauncher launchApp command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:63](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L63)

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:109](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L109)

___

### TlvStopAppRequest

• `Const` **TlvStopAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>

Input to the ApplicationLauncher stopApp command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:130](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L130)
