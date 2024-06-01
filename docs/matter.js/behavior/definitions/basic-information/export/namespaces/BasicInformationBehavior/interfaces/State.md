[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/basic-information/export](../../../README.md) / [BasicInformationBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### capabilityMinima

> **capabilityMinima**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This attribute shall provide the minimum guaranteed value for some system-wide resource capabilities
that are not otherwise cluster-specific and do not appear elsewhere. This attribute may be used by
clients to optimize communication with Nodes by allowing them to use more than the strict minimum values
required by this specification, wherever available.

The values supported by the server in reality may be larger than the values provided in this attribute,
such as if a server is not resource-constrained at all. However, clients SHOULD only rely on the amounts
provided in this attribute.

Note that since the fixed values within this attribute may change over time, both increasing and
decreasing, as software versions change for a given Node, clients SHOULD take care not to assume forever
unchanging values and SHOULD NOT cache this value permanently at Commissioning time.

#### See

MatterSpecification.v11.Core § 11.1.5.20

#### Type declaration

##### caseSessionsPerFabric

> **caseSessionsPerFabric**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the actual minimum number of concurrent CASE sessions that are supported per
fabric.

This value shall NOT be smaller than the required minimum indicated in Section 4.13.2.8, “Minimal Number of
CASE Sessions”.

###### See

MatterSpecification.v11.Core § 11.1.4.1.1

##### subscriptionsPerFabric

> **subscriptionsPerFabric**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the actual minimum number of concurrent subscriptions supported per fabric.

This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe
Transaction”.

###### See

MatterSpecification.v11.Core § 11.1.4.1.2

#### Inherited from

`StateType.capabilityMinima`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:404](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L404)

***

### dataModelRevision

> **dataModelRevision**: `number`

This attribute shall be set to the revision number of the Data Model against which the Node is certified.

#### See

MatterSpecification.v11.Core § 11.1.5.1

#### Inherited from

`StateType.dataModelRevision`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L188)

***

### hardwareVersion

> **hardwareVersion**: `number`

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined.

#### See

MatterSpecification.v11.Core § 11.1.5.8

#### Inherited from

`StateType.hardwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:258](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L258)

***

### hardwareVersionString

> **hardwareVersionString**: `string`

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined. The HardwareVersionString attribute shall be used to
provide a more user-friendly value than that represented by the HardwareVersion attribute.

#### See

MatterSpecification.v11.Core § 11.1.5.9

#### Inherited from

`StateType.hardwareVersionString`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:267](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L267)

***

### localConfigDisabled?

> `optional` **localConfigDisabled**: `boolean`

This attribute shall allow a local Node configuration to be disabled. When this attribute is set to True
the Node shall disable the ability to configure the Node through an on-Node user interface. The value of
the LocalConfigDisabled attribute shall NOT in any way modify, disable, or otherwise affect the user’s
ability to trigger a factory reset on the Node.

#### See

MatterSpecification.v11.Core § 11.1.5.17

#### Inherited from

`StateType.localConfigDisabled`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L351)

***

### location

> **location**: `string`

This attribute shall be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, or
special area of geographic interest in which the Node is located at the time of the attribute being set.
This attribute shall be set during initial commissioning (unless already set) and may be updated by
further reconfigurations. This attribute may affect some regulatory aspects of the Node’s operation,
such as radio transmission power levels in given spectrum allocation bands if technologies where this is
applicable are used. The Location’s region code shall be interpreted in a case-insensitive manner. If
the Node cannot understand the location code with which it was configured, or the location code has not
yet been configured, it shall configure itself in a region- agnostic manner as determined by the vendor,
avoiding region-specific assumptions as much as is practical. The special value XX shall indicate that
region-agnostic mode is used.

#### See

MatterSpecification.v11.Core § 11.1.5.7

#### Inherited from

`StateType.location`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L246)

***

### manufacturingDate?

> `optional` **manufacturingDate**: `string`

This attribute shall specify the date that the Node was manufactured. The first 8 characters shall
specify the date of manufacture of the Node in international date notation according to ISO 8601, i.e.,
YYYYMMDD, e.g., 20060814. The final 8 characters may include country, factory, line, shift or other
related information at the option of the vendor. The format of this information is vendor

defined.

#### See

MatterSpecification.v11.Core § 11.1.5.12

#### Inherited from

`StateType.manufacturingDate`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:302](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L302)

***

### nodeLabel

> **nodeLabel**: `string`

This attribute shall represent a user defined name for the Node. This attribute SHOULD be set during
initial commissioning and may be updated by further reconfigurations.

#### See

MatterSpecification.v11.Core § 11.1.5.6

#### Inherited from

`StateType.nodeLabel`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L226)

***

### partNumber?

> `optional` **partNumber**: `string`

This attribute shall specify a human-readable (displayable) vendor assigned part number for the Node
whose meaning and numbering scheme is vendor defined.

Multiple products (and hence PartNumbers) can share a ProductID. For instance, there may be different
packaging (with different PartNumbers) for different regions; also different colors of a product might
share the ProductID but may have a different PartNumber.

#### See

MatterSpecification.v11.Core § 11.1.5.13

#### Inherited from

`StateType.partNumber`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:314](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L314)

***

### productAppearance?

> `optional` **productAppearance**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Type declaration

##### finish

> **finish**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<[`ProductFinish`](../../../../../../../cluster/export/namespaces/BasicInformation/enumerations/ProductFinish.md)\>

##### primaryColor

> **primaryColor**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`Color`](../../../../../../../cluster/export/namespaces/BasicInformation/enumerations/Color.md)\>

#### Inherited from

`StateType.productAppearance`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:410](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L410)

***

### productId

> **productId**: `number`

This attribute shall specify the Product ID assigned by the vendor that is unique to the specific
product of the Node.

#### See

MatterSpecification.v11.Core § 11.1.5.5

#### Inherited from

`StateType.productId`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L218)

***

### productLabel?

> `optional` **productLabel**: `string`

This attribute shall specify a vendor specific human readable (displayable) product label. The
ProductLabel attribute may be used to provide a more user-friendly value than that represented by the
ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as defined
within the VendorName attribute.

#### See

MatterSpecification.v11.Core § 11.1.5.15

#### Inherited from

`StateType.productLabel`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:334](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L334)

***

### productName

> **productName**: `string`

This attribute shall specify a human readable (displayable) name of the model for the Node such as the
model number (or other identifier) assigned by the vendor.

#### See

MatterSpecification.v11.Core § 11.1.5.4

#### Inherited from

`StateType.productName`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:210](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L210)

***

### productUrl?

> `optional` **productUrl**: `string`

This attribute shall specify a link to a product specific web page. The syntax of the ProductURL
attribute shall follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The
specified URL SHOULD resolve to a maintained web page available for the lifetime of the product. The
maximum length of the ProductUrl attribute is 256 ASCII characters.

#### See

MatterSpecification.v11.Core § 11.1.5.14

#### Inherited from

`StateType.productUrl`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:324](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L324)

***

### reachable?

> `optional` **reachable**: `boolean`

This attribute (when used) shall indicate whether the Node can be reached. For a native Node this is
implicitly True (and its use is optional).

Its main use case is in the derived Bridged Device Basic Information cluster where it is used to
indicate whether the bridged device is reachable by the bridge over the non-native network.

#### See

MatterSpecification.v11.Core § 11.1.5.18

#### Inherited from

`StateType.reachable`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:366](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L366)

***

### serialNumber?

> `optional` **serialNumber**: `string`

This attributes shall specify a human readable (displayable) serial number.

#### See

MatterSpecification.v11.Core § 11.1.5.16

#### Inherited from

`StateType.serialNumber`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:341](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L341)

***

### softwareVersion

> **softwareVersion**: `number`

This attribute shall contain the current version number for the software running on this Node. The
version number can be compared using a total ordering to determine if a version is logically newer than
another one. A larger value of SoftwareVersion is newer than a lower value, from the perspective of
software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes may query this field
to determine the currently running version of software on another given Node.

#### See

MatterSpecification.v11.Core § 11.1.5.10

#### Inherited from

`StateType.softwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L278)

***

### softwareVersionString

> **softwareVersionString**: `string`

This attribute shall contain a current human-readable representation for the software running on the
Node. This version information may be conveyed to users. The maximum length of the SoftwareVersionString
attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple 7-bit ASCII alphanumeric
and punctuation characters, so as to simplify the conveyance of the value to a variety of cultures.

Examples of version strings include "1.0", "1.2.3456", "1.2-2", "1.0b123", "1.2_3".

#### See

MatterSpecification.v11.Core § 11.1.5.11

#### Inherited from

`StateType.softwareVersionString`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:290](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L290)

***

### uniqueId?

> `optional` **uniqueId**: `string`

This attribute (when used) shall indicate a unique identifier for the device, which is constructed in a
manufacturer specific manner.

It may be constructed using a permanent device identifier (such as device MAC address) as basis. In
order to prevent tracking,

  • it SHOULD NOT be identical to (or easily derived from) such permanent device identifier

  • it SHOULD be updated when the device is factory reset

  • it shall not be identical to the SerialNumber attribute

  • it shall not be printed on the product or delivered with the product The value does not need to be
    human readable.

#### See

MatterSpecification.v11.Core § 11.1.5.19

#### Inherited from

`StateType.uniqueId`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L386)

***

### vendorId

> **vendorId**: [`VendorId`](../../../../../../../datatype/export/README.md#vendorid)

This attribute shall specify the Vendor ID.

#### See

MatterSpecification.v11.Core § 11.1.5.3

#### Inherited from

`StateType.vendorId`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L202)

***

### vendorName

> **vendorName**: `string`

This attribute shall specify a human readable (displayable) name of the vendor for the Node.

#### See

MatterSpecification.v11.Core § 11.1.5.2

#### Inherited from

`StateType.vendorName`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L195)
