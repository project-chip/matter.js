[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/basic-information/export](../modules/behavior_definitions_basic_information_export.md) / [BasicInformationBehavior](../modules/behavior_definitions_basic_information_export.BasicInformationBehavior.md) / State

# Interface: State

[behavior/definitions/basic-information/export](../modules/behavior_definitions_basic_information_export.md).[BasicInformationBehavior](../modules/behavior_definitions_basic_information_export.BasicInformationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_basic_information_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [capabilityMinima](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#capabilityminima)
- [dataModelRevision](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#datamodelrevision)
- [hardwareVersion](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#hardwareversion)
- [hardwareVersionString](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#hardwareversionstring)
- [localConfigDisabled](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#localconfigdisabled)
- [location](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#location)
- [manufacturingDate](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#manufacturingdate)
- [nodeLabel](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#nodelabel)
- [partNumber](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#partnumber)
- [productAppearance](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#productappearance)
- [productId](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#productid)
- [productLabel](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#productlabel)
- [productName](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#productname)
- [productUrl](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#producturl)
- [reachable](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#reachable)
- [serialNumber](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#serialnumber)
- [softwareVersion](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#softwareversion)
- [softwareVersionString](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#softwareversionstring)
- [uniqueId](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#uniqueid)
- [vendorId](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#vendorid)
- [vendorName](behavior_definitions_basic_information_export.BasicInformationBehavior.State.md#vendorname)

## Properties

### capabilityMinima

• **capabilityMinima**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

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

**`See`**

MatterSpecification.v11.Core § 11.1.5.20

#### Inherited from

StateType.capabilityMinima

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:404](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L404)

___

### dataModelRevision

• **dataModelRevision**: `number`

This attribute shall be set to the revision number of the Data Model against which the Node is certified.

**`See`**

MatterSpecification.v11.Core § 11.1.5.1

#### Inherited from

StateType.dataModelRevision

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L188)

___

### hardwareVersion

• **hardwareVersion**: `number`

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined.

**`See`**

MatterSpecification.v11.Core § 11.1.5.8

#### Inherited from

StateType.hardwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:258](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L258)

___

### hardwareVersionString

• **hardwareVersionString**: `string`

This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
and the versioning scheme, are vendor defined. The HardwareVersionString attribute shall be used to
provide a more user-friendly value than that represented by the HardwareVersion attribute.

**`See`**

MatterSpecification.v11.Core § 11.1.5.9

#### Inherited from

StateType.hardwareVersionString

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:267](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L267)

___

### localConfigDisabled

• `Optional` **localConfigDisabled**: `boolean`

This attribute shall allow a local Node configuration to be disabled. When this attribute is set to True
the Node shall disable the ability to configure the Node through an on-Node user interface. The value of
the LocalConfigDisabled attribute shall NOT in any way modify, disable, or otherwise affect the user’s
ability to trigger a factory reset on the Node.

**`See`**

MatterSpecification.v11.Core § 11.1.5.17

#### Inherited from

StateType.localConfigDisabled

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L351)

___

### location

• **location**: `string`

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

**`See`**

MatterSpecification.v11.Core § 11.1.5.7

#### Inherited from

StateType.location

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:246](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L246)

___

### manufacturingDate

• `Optional` **manufacturingDate**: `string`

This attribute shall specify the date that the Node was manufactured. The first 8 characters shall
specify the date of manufacture of the Node in international date notation according to ISO 8601, i.e.,
YYYYMMDD, e.g., 20060814. The final 8 characters may include country, factory, line, shift or other
related information at the option of the vendor. The format of this information is vendor

defined.

**`See`**

MatterSpecification.v11.Core § 11.1.5.12

#### Inherited from

StateType.manufacturingDate

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:302](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L302)

___

### nodeLabel

• **nodeLabel**: `string`

This attribute shall represent a user defined name for the Node. This attribute SHOULD be set during
initial commissioning and may be updated by further reconfigurations.

**`See`**

MatterSpecification.v11.Core § 11.1.5.6

#### Inherited from

StateType.nodeLabel

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L226)

___

### partNumber

• `Optional` **partNumber**: `string`

This attribute shall specify a human-readable (displayable) vendor assigned part number for the Node
whose meaning and numbering scheme is vendor defined.

Multiple products (and hence PartNumbers) can share a ProductID. For instance, there may be different
packaging (with different PartNumbers) for different regions; also different colors of a product might
share the ProductID but may have a different PartNumber.

**`See`**

MatterSpecification.v11.Core § 11.1.5.13

#### Inherited from

StateType.partNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:314](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L314)

___

### productAppearance

• `Optional` **productAppearance**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>

#### Inherited from

StateType.productAppearance

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:410](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L410)

___

### productId

• **productId**: `number`

This attribute shall specify the Product ID assigned by the vendor that is unique to the specific
product of the Node.

**`See`**

MatterSpecification.v11.Core § 11.1.5.5

#### Inherited from

StateType.productId

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:218](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L218)

___

### productLabel

• `Optional` **productLabel**: `string`

This attribute shall specify a vendor specific human readable (displayable) product label. The
ProductLabel attribute may be used to provide a more user-friendly value than that represented by the
ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as defined
within the VendorName attribute.

**`See`**

MatterSpecification.v11.Core § 11.1.5.15

#### Inherited from

StateType.productLabel

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L334)

___

### productName

• **productName**: `string`

This attribute shall specify a human readable (displayable) name of the model for the Node such as the
model number (or other identifier) assigned by the vendor.

**`See`**

MatterSpecification.v11.Core § 11.1.5.4

#### Inherited from

StateType.productName

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L210)

___

### productUrl

• `Optional` **productUrl**: `string`

This attribute shall specify a link to a product specific web page. The syntax of the ProductURL
attribute shall follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The
specified URL SHOULD resolve to a maintained web page available for the lifetime of the product. The
maximum length of the ProductUrl attribute is 256 ASCII characters.

**`See`**

MatterSpecification.v11.Core § 11.1.5.14

#### Inherited from

StateType.productUrl

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:324](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L324)

___

### reachable

• `Optional` **reachable**: `boolean`

This attribute (when used) shall indicate whether the Node can be reached. For a native Node this is
implicitly True (and its use is optional).

Its main use case is in the derived Bridged Device Basic Information cluster where it is used to
indicate whether the bridged device is reachable by the bridge over the non-native network.

**`See`**

MatterSpecification.v11.Core § 11.1.5.18

#### Inherited from

StateType.reachable

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:366](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L366)

___

### serialNumber

• `Optional` **serialNumber**: `string`

This attributes shall specify a human readable (displayable) serial number.

**`See`**

MatterSpecification.v11.Core § 11.1.5.16

#### Inherited from

StateType.serialNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:341](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L341)

___

### softwareVersion

• **softwareVersion**: `number`

This attribute shall contain the current version number for the software running on this Node. The
version number can be compared using a total ordering to determine if a version is logically newer than
another one. A larger value of SoftwareVersion is newer than a lower value, from the perspective of
software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes may query this field
to determine the currently running version of software on another given Node.

**`See`**

MatterSpecification.v11.Core § 11.1.5.10

#### Inherited from

StateType.softwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:278](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L278)

___

### softwareVersionString

• **softwareVersionString**: `string`

This attribute shall contain a current human-readable representation for the software running on the
Node. This version information may be conveyed to users. The maximum length of the SoftwareVersionString
attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple 7-bit ASCII alphanumeric
and punctuation characters, so as to simplify the conveyance of the value to a variety of cultures.

Examples of version strings include "1.0", "1.2.3456", "1.2-2", "1.0b123", "1.2_3".

**`See`**

MatterSpecification.v11.Core § 11.1.5.11

#### Inherited from

StateType.softwareVersionString

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L290)

___

### uniqueId

• `Optional` **uniqueId**: `string`

This attribute (when used) shall indicate a unique identifier for the device, which is constructed in a
manufacturer specific manner.

It may be constructed using a permanent device identifier (such as device MAC address) as basis. In
order to prevent tracking,

  • it SHOULD NOT be identical to (or easily derived from) such permanent device identifier

  • it SHOULD be updated when the device is factory reset

  • it shall not be identical to the SerialNumber attribute

  • it shall not be printed on the product or delivered with the product The value does not need to be
    human readable.

**`See`**

MatterSpecification.v11.Core § 11.1.5.19

#### Inherited from

StateType.uniqueId

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:386](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L386)

___

### vendorId

• **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

This attribute shall specify the Vendor ID.

**`See`**

MatterSpecification.v11.Core § 11.1.5.3

#### Inherited from

StateType.vendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L202)

___

### vendorName

• **vendorName**: `string`

This attribute shall specify a human readable (displayable) name of the vendor for the Node.

**`See`**

MatterSpecification.v11.Core § 11.1.5.2

#### Inherited from

StateType.vendorName

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L195)
