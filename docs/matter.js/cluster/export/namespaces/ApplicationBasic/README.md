[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ApplicationBasic

# Namespace: ApplicationBasic

## Index

### Enumerations

- [ApplicationStatus](enumerations/ApplicationStatus.md)

### Interfaces

- [ApplicationStruct](interfaces/ApplicationStruct.md)
- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L167)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.allowedVendorList

> `readonly` **allowedVendorList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid)[], `any`\>

This is a list of vendor IDs. Each entry is a vendor-id.

###### See

MatterSpecification.v11.Cluster § 6.3.3.8

##### attributes.application

> `readonly` **application**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This attribute shall specify a Content App which consists of an Application ID using a specified catalog.

###### See

MatterSpecification.v11.Cluster § 6.3.3.5

##### attributes.applicationName

> `readonly` **applicationName**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the Content App assigned by the
vendor. For example, "NPR On Demand". The maximum length of the ApplicationName attribute is 256 bytes
of UTF-8 characters.

###### See

MatterSpecification.v11.Cluster § 6.3.3.3

##### attributes.applicationVersion

> `readonly` **applicationVersion**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) version of the Content App assigned by the
vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.

###### See

MatterSpecification.v11.Cluster § 6.3.3.7

##### attributes.productId

> `readonly` **productId**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific
Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then
this would be the Product ID as specified by the vendor for the certification.

###### See

MatterSpecification.v11.Cluster § 6.3.3.4

##### attributes.status

> `readonly` **status**: [`Attribute`](../../interfaces/Attribute.md)\<[`ApplicationStatus`](enumerations/ApplicationStatus.md), `any`\>

This attribute shall specify the current running status of the application.

###### See

MatterSpecification.v11.Cluster § 6.3.3.6

##### attributes.vendorId

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid), `any`\>

This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for the
Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.3.2

##### attributes.vendorName

> `readonly` **vendorName**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the vendor for the Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.3.1

##### id

> `readonly` **id**: `1293` = `0x50d`

##### name

> `readonly` **name**: `"ApplicationBasic"` = `"ApplicationBasic"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L85)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L170)

***

### TlvApplicationStruct

> `const` **TlvApplicationStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This indicates a global identifier for an Application given a catalog.

#### See

MatterSpecification.v11.Cluster § 6.3.4.1

#### Type declaration

##### applicationId

> **applicationId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`string`\>

This shall indicate the application identifier, expressed as a string, such as "123456-5433", "PruneVideo"
or "Company X". This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix.

###### See

MatterSpecification.v11.Cluster § 6.3.4.1.2

##### catalogVendorId

> **catalogVendorId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This shall indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL registry
shall use value 0x0000.

It is assumed that Content App Platform providers (see Video Player Architecture section in [MatterDevLib] )
will have their own catalog vendor ID (set to their own Vendor ID) and will assign an ApplicationID to each
Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.4.1.1

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L26)
