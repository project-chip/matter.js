[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/application-launcher/export

# behavior/definitions/application-launcher/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ApplicationLauncherBehavior](namespaces/ApplicationLauncherBehavior/README.md)
- [ApplicationLauncherInterface](namespaces/ApplicationLauncherInterface/README.md)

### Classes

- [ApplicationLauncherServer](classes/ApplicationLauncherServer.md)

### Interfaces

- [ApplicationLauncherBehavior](interfaces/ApplicationLauncherBehavior.md)

## Type Aliases

### ApplicationLauncherInterface

> **ApplicationLauncherInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L75)

***

### HideAppRequest

> **HideAppRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvHideAppRequest`](../../../../cluster/export/namespaces/ApplicationLauncher/README.md#tlvhideapprequest)\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource constraints if
any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the action taken, on the
Application Basic cluster of the Endpoint corresponding to the application on which the action was taken. The Status
attribute shall be updated on any other application whose Status may have changed as a result of this command.

This command returns a Launcher Response.

#### See

MatterSpecification.v11.Cluster § 6.4.4.3

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L73)

***

### LaunchAppRequest

> **LaunchAppRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLaunchAppRequest`](../../../../cluster/export/namespaces/ApplicationLauncher/README.md#tlvlaunchapprequest)\>

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

#### See

MatterSpecification.v11.Cluster § 6.4.4.1

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L31)

***

### LauncherResponse

> **LauncherResponse**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvLauncherResponse`](../../../../cluster/export/namespaces/ApplicationLauncher/README.md#tlvlauncherresponse)\>

This command shall be generated in response to LaunchApp/StopApp/HideApp commands.

#### See

MatterSpecification.v11.Cluster § 6.4.4.4

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L38)

***

### StopAppRequest

> **StopAppRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStopAppRequest`](../../../../cluster/export/namespaces/ApplicationLauncher/README.md#tlvstopapprequest)\>

Upon receipt of this command, the server shall stop the application if it is running. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint corresponding to
the stopped application. The Status attribute shall be updated on any other application whose Status may have
changed as a result of this command.

This command returns a Launcher Response.

#### See

MatterSpecification.v11.Cluster § 6.4.4.2

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L55)

## Variables

### ApplicationLauncherBehavior

> `const` **ApplicationLauncherBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/ApplicationLauncher/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ApplicationLauncherInterface`](README.md#applicationlauncherinterface)\>, [`ApplicationLauncherInterface`](README.md#applicationlauncherinterface)\>

ApplicationLauncherBehavior is the base class for objects that support interaction with ApplicationLauncher.Cluster.

This class does not have optional features of ApplicationLauncher.Cluster enabled. You can enable additional
features using ApplicationLauncherBehavior.with.

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherBehavior.ts#L20)
