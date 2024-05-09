[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/application-launcher/export](../modules/behavior_definitions_application_launcher_export.md) / [ApplicationLauncherBehavior](../modules/behavior_definitions_application_launcher_export.ApplicationLauncherBehavior.md) / State

# Interface: State

[behavior/definitions/application-launcher/export](../modules/behavior_definitions_application_launcher_export.md).[ApplicationLauncherBehavior](../modules/behavior_definitions_application_launcher_export.ApplicationLauncherBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_application_launcher_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [currentApp](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior.State.md#currentapp)

## Properties

### currentApp

• `Optional` **currentApp**: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>

This attribute shall specify the current in-focus application, identified using an Application ID,
catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
App endpoint. A null shall be used to indicate there is no current in-focus application.

**`See`**

MatterSpecification.v11.Cluster § 6.4.3.2

#### Inherited from

StateType.currentApp

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:256](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L256)
