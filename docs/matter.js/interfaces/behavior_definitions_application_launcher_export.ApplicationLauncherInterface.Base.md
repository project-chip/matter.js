[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/application-launcher/export](../modules/behavior_definitions_application_launcher_export.md) / [ApplicationLauncherInterface](../modules/behavior_definitions_application_launcher_export.ApplicationLauncherInterface.md) / Base

# Interface: Base

[behavior/definitions/application-launcher/export](../modules/behavior_definitions_application_launcher_export.md).[ApplicationLauncherInterface](../modules/behavior_definitions_application_launcher_export.ApplicationLauncherInterface.md).Base

## Table of contents

### Methods

- [hideApp](behavior_definitions_application_launcher_export.ApplicationLauncherInterface.Base.md#hideapp)
- [launchApp](behavior_definitions_application_launcher_export.ApplicationLauncherInterface.Base.md#launchapp)
- [stopApp](behavior_definitions_application_launcher_export.ApplicationLauncherInterface.Base.md#stopapp)

## Methods

### hideApp

▸ **hideApp**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

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

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L132)

___

### launchApp

▸ **launchApp**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

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

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L95)

___

### stopApp

▸ **stopApp**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

Upon receipt of this command, the server shall stop the application if it is running. The application shall
be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L113)
