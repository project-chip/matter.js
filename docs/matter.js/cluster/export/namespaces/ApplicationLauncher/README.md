[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ApplicationLauncher

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

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L200)

***

### Base

> `const` **Base**: `object`

These elements and properties are present in all ApplicationLauncher clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This attribute shall specify the current in-focus application, identified using an Application ID,
catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
App endpoint. A null shall be used to indicate there is no current in-focus application.

###### See

MatterSpecification.v11.Cluster § 6.4.3.2

##### commands

> `readonly` **commands**: `object`

##### commands.hideApp

> `readonly` **hideApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **launchApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **stopApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **applicationPlatform**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

##### id

> `readonly` **id**: `1292` = `0x50c`

##### name

> `readonly` **name**: `"ApplicationLauncher"` = `"ApplicationLauncher"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L233)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:343](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L343)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This attribute shall specify the current in-focus application, identified using an Application ID,
catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
App endpoint. A null shall be used to indicate there is no current in-focus application.

###### See

MatterSpecification.v11.Cluster § 6.4.3.2

##### commands

> `readonly` **commands**: `object`

##### commands.hideApp

> `readonly` **hideApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **launchApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **stopApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **applicationPlatform**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

##### id

> `readonly` **id**: `1292` = `0x50c`

##### name

> `readonly` **name**: `"ApplicationLauncher"` = `"ApplicationLauncher"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:331](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L331)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:374](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L374)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.catalogList

> `readonly` **catalogList**: [`Attribute`](../../interfaces/Attribute.md)\<`number`[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.currentApp

> `readonly` **currentApp**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This attribute shall specify the current in-focus application, identified using an Application ID,
catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
App endpoint. A null shall be used to indicate there is no current in-focus application.

###### See

MatterSpecification.v11.Cluster § 6.4.3.2

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### commands

> `readonly` **commands**: `object` = `Cluster.commands`

##### commands.hideApp

> `readonly` **hideApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **launchApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **stopApp**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

> `readonly` **features**: `object` = `Cluster.features`

##### features.applicationPlatform

> `readonly` **applicationPlatform**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

ApplicationPlatform

Support for attributes and commands required for endpoint to support launching any application within
the supported application catalogs

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`1292`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"ApplicationLauncher"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L351)

***

### TlvApplicationEPStruct

> `const` **TlvApplicationEPStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This specifies an app along with its corresponding endpoint.

#### See

MatterSpecification.v11.Cluster § 6.4.5.3

#### Type declaration

##### application

> **application**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

##### endpoint

> **endpoint**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)\>

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L62)

***

### TlvApplicationStruct

> `const` **TlvApplicationStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This indicates a global identifier for an Application given a catalog.

#### See

MatterSpecification.v11.Cluster § 6.4.5.2

#### Type declaration

##### applicationId

> **applicationId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the application identifier, expressed as a string, such as "PruneVideo" or "Company X".
This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).

###### See

MatterSpecification.v11.Cluster § 6.4.5.2.2

##### catalogVendorId

> **catalogVendorId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use value 0x0000.

Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) and will
assign an ApplicationID to each Content App.

###### See

MatterSpecification.v11.Cluster § 6.4.5.2.1

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L28)

***

### TlvHideAppRequest

> `const` **TlvHideAppRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ApplicationLauncher hideApp command

#### See

MatterSpecification.v11.Cluster § 6.4.4.3

#### Type declaration

##### application

> **application**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This field shall specify the Application to hide.

###### See

MatterSpecification.v11.Cluster § 6.4.4.3.1

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L181)

***

### TlvLaunchAppRequest

> `const` **TlvLaunchAppRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ApplicationLauncher launchApp command

#### See

MatterSpecification.v11.Cluster § 6.4.4.1

#### Type declaration

##### application

> **application**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This field shall specify the Application to launch.

###### See

MatterSpecification.v11.Cluster § 6.4.4.1.1

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

This field shall specify optional app-specific data to be sent to the app.

Note: This format and meaning of this value is proprietary and outside the specification. It provides a
transition path for device makers that use other protocols (like DIAL) which allow for proprietary data.
Apps that are not yet Matter aware can be launched via Matter, while retaining the existing ability to
launch with proprietary data.

###### See

MatterSpecification.v11.Cluster § 6.4.4.1.2

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L79)

***

### TlvLauncherResponse

> `const` **TlvLauncherResponse**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

#### See

MatterSpecification.v11.Cluster § 6.4.4.4

#### Type declaration

##### data

> **data**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

This shall specify Optional app-specific data.

###### See

MatterSpecification.v11.Cluster § 6.4.4.4.2

##### status

> **status**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`Status`](enumerations/Status.md)\>

This shall indicate the status of the command which resulted in this response.

###### See

MatterSpecification.v11.Cluster § 6.4.4.4.1

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L132)

***

### TlvStopAppRequest

> `const` **TlvStopAppRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ApplicationLauncher stopApp command

#### See

MatterSpecification.v11.Cluster § 6.4.4.2

#### Type declaration

##### application

> **application**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This field shall specify the Application to stop.

###### See

MatterSpecification.v11.Cluster § 6.4.4.2.1

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L160)
