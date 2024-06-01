[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / BasicInformation

# Namespace: BasicInformation

## Index

### Enumerations

- [Color](enumerations/Color.md)
- [ProductFinish](enumerations/ProductFinish.md)

### Interfaces

- [CapabilityMinimaStruct](interfaces/CapabilityMinimaStruct.md)
- [Cluster](interfaces/Cluster.md)
- [LeaveEvent](interfaces/LeaveEvent.md)
- [ProductAppearanceStruct](interfaces/ProductAppearanceStruct.md)
- [ReachableChangedEvent](interfaces/ReachableChangedEvent.md)
- [StartUpEvent](interfaces/StartUpEvent.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:469](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L469)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.capabilityMinima

> `readonly` **capabilityMinima**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

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

###### See

MatterSpecification.v11.Core § 11.1.5.20

##### attributes.dataModelRevision

> `readonly` **dataModelRevision**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall be set to the revision number of the Data Model against which the Node is certified.

###### See

MatterSpecification.v11.Core § 11.1.5.1

##### attributes.hardwareVersion

> `readonly` **hardwareVersion**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined.

###### See

MatterSpecification.v11.Core § 11.1.5.8

##### attributes.hardwareVersionString

> `readonly` **hardwareVersionString**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined. The HardwareVersionString attribute shall be used to
provide a more user-friendly value than that represented by the HardwareVersion attribute.

###### See

MatterSpecification.v11.Core § 11.1.5.9

##### attributes.localConfigDisabled

> `readonly` **localConfigDisabled**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`boolean`, `any`\>

This attribute shall allow a local Node configuration to be disabled. When this attribute is set to True
the Node shall disable the ability to configure the Node through an on-Node user interface. The value of
the LocalConfigDisabled attribute shall NOT in any way modify, disable, or otherwise affect the user’s
ability to trigger a factory reset on the Node.

###### See

MatterSpecification.v11.Core § 11.1.5.17

##### attributes.location

> `readonly` **location**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`string`, `any`\>

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

###### See

MatterSpecification.v11.Core § 11.1.5.7

##### attributes.manufacturingDate

> `readonly` **manufacturingDate**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall specify the date that the Node was manufactured. The first 8 characters shall
specify the date of manufacture of the Node in international date notation according to ISO 8601, i.e.,
YYYYMMDD, e.g., 20060814. The final 8 characters may include country, factory, line, shift or other
related information at the option of the vendor. The format of this information is vendor

defined.

###### See

MatterSpecification.v11.Core § 11.1.5.12

##### attributes.nodeLabel

> `readonly` **nodeLabel**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`string`, `any`\>

This attribute shall represent a user defined name for the Node. This attribute SHOULD be set during
initial commissioning and may be updated by further reconfigurations.

###### See

MatterSpecification.v11.Core § 11.1.5.6

##### attributes.partNumber

> `readonly` **partNumber**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human-readable (displayable) vendor assigned part number for the Node
whose meaning and numbering scheme is vendor defined.

Multiple products (and hence PartNumbers) can share a ProductID. For instance, there may be different
packaging (with different PartNumbers) for different regions; also different colors of a product might
share the ProductID but may have a different PartNumber.

###### See

MatterSpecification.v11.Core § 11.1.5.13

##### attributes.productAppearance

> `readonly` **productAppearance**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### attributes.productId

> `readonly` **productId**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall specify the Product ID assigned by the vendor that is unique to the specific
product of the Node.

###### See

MatterSpecification.v11.Core § 11.1.5.5

##### attributes.productLabel

> `readonly` **productLabel**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a vendor specific human readable (displayable) product label. The
ProductLabel attribute may be used to provide a more user-friendly value than that represented by the
ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as defined
within the VendorName attribute.

###### See

MatterSpecification.v11.Core § 11.1.5.15

##### attributes.productName

> `readonly` **productName**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the model for the Node such as the
model number (or other identifier) assigned by the vendor.

###### See

MatterSpecification.v11.Core § 11.1.5.4

##### attributes.productUrl

> `readonly` **productUrl**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a link to a product specific web page. The syntax of the ProductURL
attribute shall follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The
specified URL SHOULD resolve to a maintained web page available for the lifetime of the product. The
maximum length of the ProductUrl attribute is 256 ASCII characters.

###### See

MatterSpecification.v11.Core § 11.1.5.14

##### attributes.reachable

> `readonly` **reachable**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean`, `any`\>

This attribute (when used) shall indicate whether the Node can be reached. For a native Node this is
implicitly True (and its use is optional).

Its main use case is in the derived Bridged Device Basic Information cluster where it is used to
indicate whether the bridged device is reachable by the bridge over the non-native network.

###### See

MatterSpecification.v11.Core § 11.1.5.18

##### attributes.serialNumber

> `readonly` **serialNumber**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attributes shall specify a human readable (displayable) serial number.

###### See

MatterSpecification.v11.Core § 11.1.5.16

##### attributes.softwareVersion

> `readonly` **softwareVersion**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall contain the current version number for the software running on this Node. The
version number can be compared using a total ordering to determine if a version is logically newer than
another one. A larger value of SoftwareVersion is newer than a lower value, from the perspective of
software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes may query this field
to determine the currently running version of software on another given Node.

###### See

MatterSpecification.v11.Core § 11.1.5.10

##### attributes.softwareVersionString

> `readonly` **softwareVersionString**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall contain a current human-readable representation for the software running on the
Node. This version information may be conveyed to users. The maximum length of the SoftwareVersionString
attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple 7-bit ASCII alphanumeric
and punctuation characters, so as to simplify the conveyance of the value to a variety of cultures.

Examples of version strings include "1.0", "1.2.3456", "1.2-2", "1.0b123", "1.2_3".

###### See

MatterSpecification.v11.Core § 11.1.5.11

##### attributes.uniqueId

> `readonly` **uniqueId**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute (when used) shall indicate a unique identifier for the device, which is constructed in a
manufacturer specific manner.

It may be constructed using a permanent device identifier (such as device MAC address) as basis. In
order to prevent tracking,

  • it SHOULD NOT be identical to (or easily derived from) such permanent device identifier

  • it SHOULD be updated when the device is factory reset

  • it shall not be identical to the SerialNumber attribute

  • it shall not be printed on the product or delivered with the product The value does not need to be
    human readable.

###### See

MatterSpecification.v11.Core § 11.1.5.19

##### attributes.vendorId

> `readonly` **vendorId**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid), `any`\>

This attribute shall specify the Vendor ID.

###### See

MatterSpecification.v11.Core § 11.1.5.3

##### attributes.vendorName

> `readonly` **vendorName**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the vendor for the Node.

###### See

MatterSpecification.v11.Core § 11.1.5.2

##### events

> `readonly` **events**: `object`

##### events.leave

> `readonly` **leave**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as when
the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some other
manufacturer specific action to disable or reset the operational data in the Node. When a Leave event is
generated, it SHOULD be assumed that the fabric recorded in the event is no longer usable, and
subsequent interactions targeting that fabric will most likely fail.

Upon receipt of Leave Event on a subscription, the receiving Node may update other nodes in the fabric
by removing related bindings, access control list entries and other data referencing the leaving Node.

###### See

MatterSpecification.v11.Core § 11.1.6.3

##### events.reachableChanged

> `readonly` **reachableChanged**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be supported if and only if the Reachable attribute is supported.

This event (when supported) shall be generated when there is a change in the Reachable attribute.

Its main use case is in the derived Bridged Device Basic Information cluster.

###### See

MatterSpecification.v11.Core § 11.1.6.4

##### events.shutDown

> `readonly` **shutDown**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a best-effort
basis. When a ShutDown event is generated, it SHOULD be the last Data Model event recorded by the Node.
This event SHOULD be delivered urgently to current subscribers on a best- effort basis. Any subsequent
incoming interactions to the Node may be dropped until the completion of a future boot or reboot process.

###### See

MatterSpecification.v11.Core § 11.1.6.2

##### events.startUp

> `readonly` **startUp**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The StartUp event shall be generated by a Node as soon as reasonable after completing a boot or reboot
process. The StartUp event SHOULD be the first Data Model event recorded by the Node after it completes
a boot or reboot process.

###### See

MatterSpecification.v11.Core § 11.1.6.1

##### id

> `readonly` **id**: `40` = `0x28`

##### name

> `readonly` **name**: `"BasicInformation"` = `"BasicInformation"`

##### revision

> `readonly` **revision**: `2` = `2`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L177)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:472](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L472)

***

### TlvCapabilityMinimaStruct

> `const` **TlvCapabilityMinimaStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

#### See

MatterSpecification.v11.Core § 11.1.4.1

#### Type declaration

##### caseSessionsPerFabric

> **caseSessionsPerFabric**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the actual minimum number of concurrent CASE sessions that are supported per
fabric.

This value shall NOT be smaller than the required minimum indicated in Section 4.13.2.8, “Minimal Number of
CASE Sessions”.

###### See

MatterSpecification.v11.Core § 11.1.4.1.1

##### subscriptionsPerFabric

> **subscriptionsPerFabric**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall indicate the actual minimum number of concurrent subscriptions supported per fabric.

This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe
Transaction”.

###### See

MatterSpecification.v11.Core § 11.1.4.1.2

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L40)

***

### TlvLeaveEvent

> `const` **TlvLeaveEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the BasicInformation leave event

#### See

MatterSpecification.v11.Core § 11.1.6.3

#### Type declaration

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

This field shall contain the local Fabric Index of the fabric which the node is about to leave.

###### See

MatterSpecification.v11.Core § 11.1.6.3.1

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L137)

***

### TlvProductAppearanceStruct

> `const` **TlvProductAppearanceStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### finish

> **finish**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ProductFinish`](enumerations/ProductFinish.md)\>

##### primaryColor

> **primaryColor**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`Color`](enumerations/Color.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L104)

***

### TlvReachableChangedEvent

> `const` **TlvReachableChangedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the BasicInformation reachableChanged event

#### See

MatterSpecification.v11.Core § 11.1.6.4

#### Type declaration

##### reachableNewValue

> **reachableNewValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

This field shall indicate the value of the Reachable attribute after it was changed.

###### See

MatterSpecification.v11.Core § 11.1.6.4.1

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L158)

***

### TlvStartUpEvent

> `const` **TlvStartUpEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the BasicInformation startUp event

#### See

MatterSpecification.v11.Core § 11.1.6.1

#### Type declaration

##### softwareVersion

> **softwareVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall be set to the same value as the one available in the Software Version attribute of the
Basic Information Cluster.

###### See

MatterSpecification.v11.Core § 11.1.6.1.1

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L115)
