[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).Cluster

Application Launcher

This cluster provides an interface for launching applications on a Video Player device such as a TV.

ApplicationLauncherCluster supports optional features that you can enable with the
ApplicationLauncherCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 6.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.ApplicationLauncher.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.ApplicationLauncher.Cluster.md#attributes)
- [base](cluster_export.ApplicationLauncher.Cluster.md#base)
- [commands](cluster_export.ApplicationLauncher.Cluster.md#commands)
- [events](cluster_export.ApplicationLauncher.Cluster.md#events)
- [extensions](cluster_export.ApplicationLauncher.Cluster.md#extensions)
- [features](cluster_export.ApplicationLauncher.Cluster.md#features)
- [id](cluster_export.ApplicationLauncher.Cluster.md#id)
- [name](cluster_export.ApplicationLauncher.Cluster.md#name)
- [revision](cluster_export.ApplicationLauncher.Cluster.md#revision)
- [supportedFeatures](cluster_export.ApplicationLauncher.Cluster.md#supportedfeatures)
- [unknown](cluster_export.ApplicationLauncher.Cluster.md#unknown)

### Methods

- [alter](cluster_export.ApplicationLauncher.Cluster.md#alter)
- [enable](cluster_export.ApplicationLauncher.Cluster.md#enable)
- [set](cluster_export.ApplicationLauncher.Cluster.md#set)
- [with](cluster_export.ApplicationLauncher.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hideApp` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall hide the application. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint may decide to stop the application based on manufacturer specific behavior or resource constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which the action was taken. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.3 |
| `launchApp` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall launch the application with optional data. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint shall launch and bring to foreground the requisite application if the application is not already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the Application Basic cluster of the Endpoint corresponding to the launched application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the foreground. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.1 |
| `stopApp` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall stop the application if it is running. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint corresponding to the stopped application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.2 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }]

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `applicationPlatform` | [`BitFlag`](../modules/schema_export.md#bitflag) | ApplicationPlatform Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1292``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"ApplicationLauncher"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](cluster_export.Attribute.md)\<`number`[], `any`\>  }  } = ApplicationPlatformComponent; `flags`: \{ `applicationPlatform`: ``true`` = true }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1292`` = 0x50c; `name`: ``"ApplicationLauncher"`` = "ApplicationLauncher"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
