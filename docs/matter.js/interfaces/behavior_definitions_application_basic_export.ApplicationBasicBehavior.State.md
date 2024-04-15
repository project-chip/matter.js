[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/application-basic/export](../modules/behavior_definitions_application_basic_export.md) / [ApplicationBasicBehavior](../modules/behavior_definitions_application_basic_export.ApplicationBasicBehavior.md) / State

# Interface: State

[behavior/definitions/application-basic/export](../modules/behavior_definitions_application_basic_export.md).[ApplicationBasicBehavior](../modules/behavior_definitions_application_basic_export.ApplicationBasicBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_application_basic_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [allowedVendorList](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#allowedvendorlist)
- [application](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#application)
- [applicationName](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#applicationname)
- [applicationVersion](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#applicationversion)
- [productId](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#productid)
- [status](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#status)
- [vendorId](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#vendorid)
- [vendorName](behavior_definitions_application_basic_export.ApplicationBasicBehavior.State.md#vendorname)

## Properties

### allowedVendorList

• **allowedVendorList**: [`VendorId`](../modules/datatype_export.md#vendorid)[]

This is a list of vendor IDs. Each entry is a vendor-id.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.8

#### Inherited from

StateType.allowedVendorList

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L151)

___

### application

• **application**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

This attribute shall specify a Content App which consists of an Application ID using a specified catalog.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.5

#### Inherited from

StateType.application

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L129)

___

### applicationName

• **applicationName**: `string`

This attribute shall specify a human readable (displayable) name of the Content App assigned by the
vendor. For example, "NPR On Demand". The maximum length of the ApplicationName attribute is 256 bytes
of UTF-8 characters.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.3

#### Inherited from

StateType.applicationName

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L113)

___

### applicationVersion

• **applicationVersion**: `string`

This attribute shall specify a human readable (displayable) version of the Content App assigned by the
vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.7

#### Inherited from

StateType.applicationVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L144)

___

### productId

• `Optional` **productId**: `number`

This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific
Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then
this would be the Product ID as specified by the vendor for the certification.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.4

#### Inherited from

StateType.productId

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L122)

___

### status

• **status**: [`ApplicationStatus`](../enums/cluster_export.ApplicationBasic.ApplicationStatus.md)

This attribute shall specify the current running status of the application.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.6

#### Inherited from

StateType.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L136)

___

### vendorId

• `Optional` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for the
Content App.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.2

#### Inherited from

StateType.vendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L104)

___

### vendorName

• `Optional` **vendorName**: `string`

This attribute shall specify a human readable (displayable) name of the vendor for the Content App.

**`See`**

MatterSpecification.v11.Cluster § 6.3.3.1

#### Inherited from

StateType.vendorName

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L96)
