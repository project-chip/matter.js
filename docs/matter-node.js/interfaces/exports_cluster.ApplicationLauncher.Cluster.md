[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md).Cluster

Application Launcher

This cluster provides an interface for launching applications on a Video Player device such as a TV.

ApplicationLauncherCluster supports optional features that you can enable with the
ApplicationLauncherCluster.with() factory method.

**`See`**

MatterSpecification.v11.Cluster § 6.4

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.ApplicationLauncher.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.ApplicationLauncher.Cluster.md#attributes)
- [base](exports_cluster.ApplicationLauncher.Cluster.md#base)
- [commands](exports_cluster.ApplicationLauncher.Cluster.md#commands)
- [events](exports_cluster.ApplicationLauncher.Cluster.md#events)
- [extensions](exports_cluster.ApplicationLauncher.Cluster.md#extensions)
- [features](exports_cluster.ApplicationLauncher.Cluster.md#features)
- [id](exports_cluster.ApplicationLauncher.Cluster.md#id)
- [name](exports_cluster.ApplicationLauncher.Cluster.md#name)
- [revision](exports_cluster.ApplicationLauncher.Cluster.md#revision)
- [supportedFeatures](exports_cluster.ApplicationLauncher.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.ApplicationLauncher.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.ApplicationLauncher.Cluster.md#alter)
- [enable](exports_cluster.ApplicationLauncher.Cluster.md#enable)
- [set](exports_cluster.ApplicationLauncher.Cluster.md#set)
- [with](exports_cluster.ApplicationLauncher.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hideApp` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall hide the application. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint may decide to stop the application based on manufacturer specific behavior or resource constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which the action was taken. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.3 |
| `launchApp` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall launch the application with optional data. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The endpoint shall launch and bring to foreground the requisite application if the application is not already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the Application Basic cluster of the Endpoint corresponding to the launched application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the foreground. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.1 |
| `stopApp` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> | Upon receipt of this command, the server shall stop the application if it is running. The application shall be either • the specified application, if the Application Platform feature is supported; • otherwise the application corresponding to the endpoint. The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint corresponding to the stopped application. The Status attribute shall be updated on any other application whose Status may have changed as a result of this command. This command returns a Launcher Response. **`See`** MatterSpecification.v11.Cluster § 6.4.4.2 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `applicationPlatform` | [`BitFlag`](../modules/exports_schema.md#bitflag) | ApplicationPlatform Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1292``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"ApplicationLauncher"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentApp`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>, `any`\>  } ; `commands`: \{ `hideApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `launchApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\> ; `stopApp`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ApplicationLauncher.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `catalogList`: [`Attribute`](exports_cluster.Attribute.md)\<`number`[], `any`\>  }  } ; `flags`: \{ `applicationPlatform`: ``true``  }  }] ; `features`: \{ `applicationPlatform`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1292`` ; `name`: ``"ApplicationLauncher"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
