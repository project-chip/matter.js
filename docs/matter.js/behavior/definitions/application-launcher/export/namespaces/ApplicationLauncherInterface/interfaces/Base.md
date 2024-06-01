[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/application-launcher/export](../../../README.md) / [ApplicationLauncherInterface](../README.md) / Base

# Interface: Base

## Methods

### hideApp()

> **hideApp**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource
constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which the
action was taken. The Status attribute shall be updated on any other application whose Status may have
changed as a result of this command.

This command returns a Launcher Response.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.4.4.3

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L132)

***

### launchApp()

> **launchApp**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

Upon receipt of this command, the server shall launch the application with optional data. The application
shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not
already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
Application Basic cluster of the Endpoint corresponding to the launched application. The Status attribute
shall be updated on any other application whose Status may have changed as a result of this command. The
CurrentApp attribute, if supported, shall be updated to reflect the new application in the foreground.

This command returns a Launcher Response.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.4.4.1

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L95)

***

### stopApp()

> **stopApp**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

Upon receipt of this command, the server shall stop the application if it is running. The application shall
be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Cluster § 6.4.4.2

#### Source

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L113)
