[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ApplicationBasic

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

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:161

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.allowedVendorList

> `readonly` **allowedVendorList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`VendorId`](../../../datatype/README.md#vendorid)[], `any`\>

This is a list of vendor IDs. Each entry is a vendor-id.

###### See

MatterSpecification.v11.Cluster § 6.3.3.8

##### attributes.application

> `readonly` **application**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../datatype/README.md#vendorid), `any`\>

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

> `readonly` **id**: `1293`

##### name

> `readonly` **name**: `"ApplicationBasic"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:71

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:164

***

### TlvApplicationStruct

> `const` **TlvApplicationStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

This indicates a global identifier for an Application given a catalog.

#### See

MatterSpecification.v11.Cluster § 6.3.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ApplicationBasicCluster.d.ts:18
