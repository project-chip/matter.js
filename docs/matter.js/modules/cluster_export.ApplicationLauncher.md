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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.ApplicationLauncher.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `applicationPlatform`: ``true``  } ? typeof [`ApplicationPlatformComponent`](cluster_export.ApplicationLauncher.md#applicationplatformcomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:313](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L313)

## Variables

### ApplicationPlatformComponent

• `Const` **ApplicationPlatformComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `catalogList`: [`Attribute`](cluster_export.md#attribute)<`number`[], `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:269](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L269)

___

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentApp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\>  }, { `hideApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all ApplicationLauncher clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:179](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L179)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `currentApp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `hideApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.ApplicationLauncher.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Application Launcher

This cluster provides an interface for launching applications on a Video Player device such as a TV.

ApplicationLauncherCluster supports optional features that you can enable with the
ApplicationLauncherCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:294](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L294)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `catalogList`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`[], `any`\>\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentApp`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `applicationPlatform`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `hideApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  }, {}\>

This cluster supports all ApplicationLauncher features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:325](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L325)

___

### TlvApplicationEPStruct

• `Const` **TlvApplicationEPStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](datatype_export.md#endpointnumber)\>  }\>

This specifies an app along with its corresponding endpoint.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L61)

___

### TlvApplicationStruct

• `Const` **TlvApplicationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This indicates a global identifier for an Application given a catalog.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L34)

___

### TlvHideAppRequest

• `Const` **TlvHideAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>

Input to the ApplicationLauncher hideApp command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:152](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L152)

___

### TlvLaunchAppRequest

• `Const` **TlvLaunchAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\>  }\>

Input to the ApplicationLauncher launchApp command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L71)

___

### TlvLauncherResponse

• `Const` **TlvLauncherResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:117](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L117)

___

### TlvStopAppRequest

• `Const` **TlvStopAppRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `application`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `applicationId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `catalogVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>\>  }\>

Input to the ApplicationLauncher stopApp command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L138)
