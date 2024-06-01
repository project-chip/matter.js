[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/application-basic/export](../../../README.md) / [ApplicationBasicBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### allowedVendorList

> **allowedVendorList**: [`VendorId`](../../../../../../../datatype/export/README.md#vendorid)[]

This is a list of vendor IDs. Each entry is a vendor-id.

#### See

MatterSpecification.v11.Cluster § 6.3.3.8

#### Inherited from

`StateType.allowedVendorList`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L151)

***

### application

> **application**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This attribute shall specify a Content App which consists of an Application ID using a specified catalog.

#### See

MatterSpecification.v11.Cluster § 6.3.3.5

#### Type declaration

##### applicationId

> **applicationId**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the application identifier, expressed as a string, such as "123456-5433", "PruneVideo"
or "Company X". This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix.

###### See

MatterSpecification.v11.Cluster § 6.3.4.1.2

##### catalogVendorId

> **catalogVendorId**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL registry
shall use value 0x0000.

It is assumed that Content App Platform providers (see Video Player Architecture section in [MatterDevLib] )
will have their own catalog vendor ID (set to their own Vendor ID) and will assign an ApplicationID to each
Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.4.1.1

#### Inherited from

`StateType.application`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L129)

***

### applicationName

> **applicationName**: `string`

This attribute shall specify a human readable (displayable) name of the Content App assigned by the
vendor. For example, "NPR On Demand". The maximum length of the ApplicationName attribute is 256 bytes
of UTF-8 characters.

#### See

MatterSpecification.v11.Cluster § 6.3.3.3

#### Inherited from

`StateType.applicationName`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L113)

***

### applicationVersion

> **applicationVersion**: `string`

This attribute shall specify a human readable (displayable) version of the Content App assigned by the
vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.

#### See

MatterSpecification.v11.Cluster § 6.3.3.7

#### Inherited from

`StateType.applicationVersion`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L144)

***

### productId?

> `optional` **productId**: `number`

This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific
Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then
this would be the Product ID as specified by the vendor for the certification.

#### See

MatterSpecification.v11.Cluster § 6.3.3.4

#### Inherited from

`StateType.productId`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L122)

***

### status

> **status**: [`ApplicationStatus`](../../../../../../../cluster/export/namespaces/ApplicationBasic/enumerations/ApplicationStatus.md)

This attribute shall specify the current running status of the application.

#### See

MatterSpecification.v11.Cluster § 6.3.3.6

#### Inherited from

`StateType.status`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L136)

***

### vendorId?

> `optional` **vendorId**: [`VendorId`](../../../../../../../datatype/export/README.md#vendorid)

This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for the
Content App.

#### See

MatterSpecification.v11.Cluster § 6.3.3.2

#### Inherited from

`StateType.vendorId`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L104)

***

### vendorName?

> `optional` **vendorName**: `string`

This attribute shall specify a human readable (displayable) name of the vendor for the Content App.

#### See

MatterSpecification.v11.Cluster § 6.3.3.1

#### Inherited from

`StateType.vendorName`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L96)
