[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ApplicationLauncher

# Namespace: ApplicationLauncher

## Index

### Enumerations

- [Feature](enumerations/Feature.md)
- [Status](enumerations/Status.md)

### Interfaces

- [ApplicationEPStruct](interfaces/ApplicationEPStruct.md)
- [ApplicationStruct](interfaces/ApplicationStruct.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [HideAppRequest](interfaces/HideAppRequest.md)
- [LaunchAppRequest](interfaces/LaunchAppRequest.md)
- [LauncherResponse](interfaces/LauncherResponse.md)
- [StopAppRequest](interfaces/StopAppRequest.md)

## Variables

### ApplicationPlatformComponent

> `const` **ApplicationPlatformComponent**: `object`

A ApplicationLauncherCluster supports these elements if it supports feature ApplicationPlatform.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.catalogList

> `readonly` **catalogList**: [`Attribute`](../../interfaces/Attribute.md)\<`number`[], `any`\>

This attribute shall specify the list of supported application catalogs, where each entry in the list is
the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) shall use value 0x0000.

It is expected that Content App Platform providers will have their own catalog vendor ID (set to their
own Vendor ID) and will assign an ApplicationID to each Content App.

###### See

MatterSpecification.v11.Cluster § 6.4.3.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:254

***

### Base

> `const` **Base**: `object`

These elements and properties are present in all ApplicationLauncher clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

This attribute shall specify the current in-focus application, identified using an Application ID,
catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
App endpoint. A null shall be used to indicate there is no current in-focus application.

###### See

MatterSpecification.v11.Cluster § 6.4.3.2

##### commands

> `readonly` **commands**: `object`

##### commands.hideApp

> `readonly` **hideApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource
constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which
the action was taken. The Status attribute shall be updated on any other application whose Status may
have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.3

##### commands.launchApp

> `readonly` **launchApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall launch the application with optional data. The
application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not
already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
Application Basic cluster of the Endpoint corresponding to the launched application. The Status
attribute shall be updated on any other application whose Status may have changed as a result of this
command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the
foreground.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.1

##### commands.stopApp

> `readonly` **stopApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall stop the application if it is running. The application
shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.2

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which ApplicationLauncherCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.applicationPlatform

> `readonly` **applicationPlatform**: [`BitFlag`](../../../schema/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

##### id

> `readonly` **id**: `1292`

##### name

> `readonly` **name**: `"ApplicationLauncher"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:285

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:806

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

This attribute shall specify the current in-focus application, identified using an Application ID,
catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
App endpoint. A null shall be used to indicate there is no current in-focus application.

###### See

MatterSpecification.v11.Cluster § 6.4.3.2

##### commands

> `readonly` **commands**: `object`

##### commands.hideApp

> `readonly` **hideApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource
constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which
the action was taken. The Status attribute shall be updated on any other application whose Status may
have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.3

##### commands.launchApp

> `readonly` **launchApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall launch the application with optional data. The
application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not
already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
Application Basic cluster of the Endpoint corresponding to the launched application. The Status
attribute shall be updated on any other application whose Status may have changed as a result of this
command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the
foreground.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.1

##### commands.stopApp

> `readonly` **stopApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall stop the application if it is running. The application
shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.2

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which ApplicationLauncherCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.applicationPlatform

> `readonly` **applicationPlatform**: [`BitFlag`](../../../schema/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

##### id

> `readonly` **id**: `1292`

##### name

> `readonly` **name**: `"ApplicationLauncher"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:542

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:1069

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.catalogList

> `readonly` **catalogList**: [`Attribute`](../../interfaces/Attribute.md)\<`number`[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

###### See

MatterSpecification.v11.Cluster § 6.4.4.4

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md) \| `null`, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### commands

> `readonly` **commands**: `object`

##### commands.hideApp

> `readonly` **hideApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource
constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which
the action was taken. The Status attribute shall be updated on any other application whose Status may
have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.3

##### commands.launchApp

> `readonly` **launchApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall launch the application with optional data. The
application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not
already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
Application Basic cluster of the Endpoint corresponding to the launched application. The Status
attribute shall be updated on any other application whose Status may have changed as a result of this
command. The CurrentApp attribute, if supported, shall be updated to reflect the new application in the
foreground.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.1

##### commands.stopApp

> `readonly` **stopApp**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

Upon receipt of this command, the server shall stop the application if it is running. The application
shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.2

##### features

> `readonly` **features**: `object`

##### features.applicationPlatform

> `readonly` **applicationPlatform**: [`BitFlag`](../../../schema/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"ApplicationLauncher"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:812

***

### TlvApplicationEPStruct

> `const` **TlvApplicationEPStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This specifies an app along with its corresponding endpoint.

#### See

MatterSpecification.v11.Cluster § 6.4.5.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:50

***

### TlvApplicationStruct

> `const` **TlvApplicationStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This indicates a global identifier for an Application given a catalog.

#### See

MatterSpecification.v11.Cluster § 6.4.5.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:18

***

### TlvHideAppRequest

> `const` **TlvHideAppRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ApplicationLauncher hideApp command

#### See

MatterSpecification.v11.Cluster § 6.4.4.3

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:217

***

### TlvLaunchAppRequest

> `const` **TlvLaunchAppRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ApplicationLauncher launchApp command

#### See

MatterSpecification.v11.Cluster § 6.4.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:85

***

### TlvLauncherResponse

> `const` **TlvLauncherResponse**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

#### See

MatterSpecification.v11.Cluster § 6.4.4.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:152

***

### TlvStopAppRequest

> `const` **TlvStopAppRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ApplicationLauncher stopApp command

#### See

MatterSpecification.v11.Cluster § 6.4.4.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:178
