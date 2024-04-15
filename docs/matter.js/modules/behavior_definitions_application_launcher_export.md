[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/application-launcher/export

# Module: behavior/definitions/application-launcher/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_application_launcher_export._internal_.md)

### Namespaces

- [ApplicationLauncherBehavior](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior.md)
- [ApplicationLauncherInterface](behavior_definitions_application_launcher_export.ApplicationLauncherInterface.md)

### Classes

- [ApplicationLauncherServer](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)

### Interfaces

- [ApplicationLauncherBehavior](../interfaces/behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md)

### Type Aliases

- [ApplicationLauncherInterface](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)
- [HideAppRequest](behavior_definitions_application_launcher_export.md#hideapprequest)
- [LaunchAppRequest](behavior_definitions_application_launcher_export.md#launchapprequest)
- [LauncherResponse](behavior_definitions_application_launcher_export.md#launcherresponse)
- [StopAppRequest](behavior_definitions_application_launcher_export.md#stopapprequest)

### Variables

- [ApplicationLauncherBehavior](behavior_definitions_application_launcher_export.md#applicationlauncherbehavior)

## Type Aliases

### ApplicationLauncherInterface

Ƭ **ApplicationLauncherInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_application_launcher_export.ApplicationLauncherInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L75)

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L136)

___

### HideAppRequest

Ƭ **HideAppRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvHideAppRequest`](cluster_export.ApplicationLauncher.md#tlvhideapprequest)\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource constraints if
any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the action taken, on the
Application Basic cluster of the Endpoint corresponding to the application on which the action was taken. The Status
attribute shall be updated on any other application whose Status may have changed as a result of this command.

This command returns a Launcher Response.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L73)

___

### LaunchAppRequest

Ƭ **LaunchAppRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvLaunchAppRequest`](cluster_export.ApplicationLauncher.md#tlvlaunchapprequest)\>

Upon receipt of this command, the server shall launch the application with optional data. The application shall be
either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not already
launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the Application Basic
cluster of the Endpoint corresponding to the launched application. The Status attribute shall be updated on any
other application whose Status may have changed as a result of this command. The CurrentApp attribute, if supported,
shall be updated to reflect the new application in the foreground.

This command returns a Launcher Response.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L31)

___

### LauncherResponse

Ƭ **LauncherResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvLauncherResponse`](cluster_export.ApplicationLauncher.md#tlvlauncherresponse)\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.4

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L38)

___

### StopAppRequest

Ƭ **StopAppRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvStopAppRequest`](cluster_export.ApplicationLauncher.md#tlvstopapprequest)\>

Upon receipt of this command, the server shall stop the application if it is running. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint corresponding to
the stopped application. The Status attribute shall be updated on any other application whose Status may have
changed as a result of this command.

This command returns a Launcher Response.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L55)

## Variables

### ApplicationLauncherBehavior

• `Const` **ApplicationLauncherBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.ApplicationLauncher.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\>, [`ApplicationLauncherInterface`](behavior_definitions_application_launcher_export.md#applicationlauncherinterface)\>

ApplicationLauncherBehavior is the base class for objects that support interaction with ApplicationLauncher.Cluster.

This class does not have optional features of ApplicationLauncher.Cluster enabled. You can enable additional
features using ApplicationLauncherBehavior.with.

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts#L20)

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts#L25)

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts#L27)
