[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / datatype/export

# Module: datatype/export

## Table of contents

### Modules

- [\<internal\>](datatype_export._internal_.md)

### Namespaces

- [CaseAuthenticatedTag](datatype_export.CaseAuthenticatedTag.md)
- [ClusterId](datatype_export.ClusterId.md)
- [FabricIndex](datatype_export.FabricIndex.md)
- [NodeId](datatype_export.NodeId.md)

### Type Aliases

- [AttributeId](datatype_export.md#attributeid)
- [CaseAuthenticatedTag](datatype_export.md#caseauthenticatedtag)
- [ClusterId](datatype_export.md#clusterid)
- [CommandId](datatype_export.md#commandid)
- [DataVersion](datatype_export.md#dataversion)
- [DeviceTypeId](datatype_export.md#devicetypeid)
- [EndpointNumber](datatype_export.md#endpointnumber)
- [EntryIndex](datatype_export.md#entryindex)
- [EventId](datatype_export.md#eventid)
- [EventNumber](datatype_export.md#eventnumber)
- [FabricId](datatype_export.md#fabricid)
- [FabricIndex](datatype_export.md#fabricindex)
- [FieldId](datatype_export.md#fieldid)
- [GroupId](datatype_export.md#groupid)
- [NodeId](datatype_export.md#nodeid)
- [SubjectId](datatype_export.md#subjectid)
- [VendorId](datatype_export.md#vendorid)

### Variables

- [TlvAttributeId](datatype_export.md#tlvattributeid)
- [TlvCaseAuthenticatedTag](datatype_export.md#tlvcaseauthenticatedtag)
- [TlvClusterId](datatype_export.md#tlvclusterid)
- [TlvCommandId](datatype_export.md#tlvcommandid)
- [TlvDataVersion](datatype_export.md#tlvdataversion)
- [TlvDeviceTypeId](datatype_export.md#tlvdevicetypeid)
- [TlvEndpointNumber](datatype_export.md#tlvendpointnumber)
- [TlvEntryIndex](datatype_export.md#tlventryindex)
- [TlvEventId](datatype_export.md#tlveventid)
- [TlvEventNumber](datatype_export.md#tlveventnumber)
- [TlvFabricId](datatype_export.md#tlvfabricid)
- [TlvFabricIndex](datatype_export.md#tlvfabricindex)
- [TlvFieldId](datatype_export.md#tlvfieldid)
- [TlvGroupId](datatype_export.md#tlvgroupid)
- [TlvNodeId](datatype_export.md#tlvnodeid)
- [TlvSubjectId](datatype_export.md#tlvsubjectid)
- [TlvVendorId](datatype_export.md#tlvvendorid)

### Functions

- [AttributeId](datatype_export.md#attributeid-1)
- [CaseAuthenticatedTag](datatype_export.md#caseauthenticatedtag-1)
- [ClusterId](datatype_export.md#clusterid-1)
- [CommandId](datatype_export.md#commandid-1)
- [DataVersion](datatype_export.md#dataversion-1)
- [DeviceTypeId](datatype_export.md#devicetypeid-1)
- [EndpointNumber](datatype_export.md#endpointnumber-1)
- [EntryIndex](datatype_export.md#entryindex-1)
- [EventId](datatype_export.md#eventid-1)
- [EventNumber](datatype_export.md#eventnumber-1)
- [FabricId](datatype_export.md#fabricid-1)
- [FabricIndex](datatype_export.md#fabricindex-1)
- [FieldId](datatype_export.md#fieldid-1)
- [GroupId](datatype_export.md#groupid-1)
- [NodeId](datatype_export.md#nodeid-1)
- [VendorId](datatype_export.md#vendorid-1)

## Type Aliases

### AttributeId

Ƭ **AttributeId**: [`Branded`](util_export.md#branded)\<`number`, ``"AttributeId"``\>

An Attribute ID is a 32 bit number and indicates an attribute defined in a cluster specification.

**`See`**

MatterSpecification.v10.Core § 7.18.2.15

#### Defined in

[packages/matter.js/src/datatype/AttributeId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/AttributeId.ts#L18)

[packages/matter.js/src/datatype/AttributeId.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/AttributeId.ts#L16)

___

### CaseAuthenticatedTag

Ƭ **CaseAuthenticatedTag**: [`Branded`](util_export.md#branded)\<`number`, ``"CaseAuthenticatedTag"``\>

A CASE Authenticated Tag (CAT) is a special subject distinguished name within the Operational Certificate.

**`See`**

MatterSpecification.v12.Core § 6.6.2.1.2.

#### Defined in

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L19)

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L17)

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L26)

___

### ClusterId

Ƭ **ClusterId**\<`ID`\>: [`Branded`](util_export.md#branded)\<`ID`, ``"ClusterId"``\>

A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
SHALL define conformance to that specification.

**`See`**

MatterSpecification.v10.Core § 7.10

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `number` = `number` |

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/ClusterId.ts#L20)

[packages/matter.js/src/datatype/ClusterId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/ClusterId.ts#L18)

[packages/matter.js/src/datatype/ClusterId.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/ClusterId.ts#L24)

___

### CommandId

Ƭ **CommandId**: [`Branded`](util_export.md#branded)\<`number`, ``"CommandId"``\>

A Command ID is a 32 bit number and indicates a command defined in a cluster specification.

**`See`**

MatterSpecification.v10.Core § 7.18.2.18

#### Defined in

[packages/matter.js/src/datatype/CommandId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CommandId.ts#L18)

[packages/matter.js/src/datatype/CommandId.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CommandId.ts#L16)

___

### DataVersion

Ƭ **DataVersion**: [`Branded`](util_export.md#branded)\<`number`, ``"DataVersion"``\>

A "data version" is an unsigned 32-bit integer that identifies a specific
version of cluster attribute data.

**`See`**

MatterSpecification.v11.Core § 7.18.2.26

#### Defined in

[packages/matter.js/src/datatype/DataVersion.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DataVersion.ts#L19)

[packages/matter.js/src/datatype/DataVersion.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DataVersion.ts#L17)

___

### DeviceTypeId

Ƭ **DeviceTypeId**\<`ID`\>: [`Branded`](util_export.md#branded)\<`ID`, ``"DeviceTypeId"``\>

A Device type ID is a 32-bit number that defines the type of the device.

**`See`**

MatterSpecification.v10.Core § 7.15

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `number` = `number` |

#### Defined in

[packages/matter.js/src/datatype/DeviceTypeId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DeviceTypeId.ts#L18)

[packages/matter.js/src/datatype/DeviceTypeId.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DeviceTypeId.ts#L16)

___

### EndpointNumber

Ƭ **EndpointNumber**: [`Branded`](util_export.md#branded)\<`number`, ``"EndpointNumber"``\>

A Endpoint Number is a 16-bit number that that indicates an instance of a device type.

**`See`**

MatterSpecification.v10.Core § 7.18.2.11

#### Defined in

[packages/matter.js/src/datatype/EndpointNumber.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EndpointNumber.ts#L18)

[packages/matter.js/src/datatype/EndpointNumber.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EndpointNumber.ts#L16)

___

### EntryIndex

Ƭ **EntryIndex**: [`Branded`](util_export.md#branded)\<`number`, ``"EntryIndex"``\>

An "entry index" is a 16-bit unsigned integer that identifies a specific
entry in a list.

**`See`**

MatterSpecification.v11.Core § 7.18.2.23

#### Defined in

[packages/matter.js/src/datatype/EntryIndex.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EntryIndex.ts#L19)

[packages/matter.js/src/datatype/EntryIndex.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EntryIndex.ts#L17)

___

### EventId

Ƭ **EventId**: [`Branded`](util_export.md#branded)\<`number`, ``"EventId"``\>

An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.

**`See`**

MatterSpecification.v10.Core § 7.18.2.17

#### Defined in

[packages/matter.js/src/datatype/EventId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventId.ts#L18)

[packages/matter.js/src/datatype/EventId.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventId.ts#L16)

___

### EventNumber

Ƭ **EventNumber**: [`Branded`](util_export.md#branded)\<`bigint`, ``"EventNumber"``\>

An "event number" is an increasing 64-bit unsigned integer assigned to
cluster events.

**`See`**

MatterSpecification.v11.Core § 7.14.2.1

#### Defined in

[packages/matter.js/src/datatype/EventNumber.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventNumber.ts#L19)

[packages/matter.js/src/datatype/EventNumber.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventNumber.ts#L17)

___

### FabricId

Ƭ **FabricId**: [`Branded`](util_export.md#branded)\<`bigint`, ``"FabricId"``\>

A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
a particular root CA.

**`See`**

MatterSpecification.v10.Core § 2.5.1

#### Defined in

[packages/matter.js/src/datatype/FabricId.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricId.ts#L20)

[packages/matter.js/src/datatype/FabricId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricId.ts#L18)

___

### FabricIndex

Ƭ **FabricIndex**: [`Branded`](util_export.md#branded)\<`number`, ``"FabricIndex"``\>

Each fabric supported on a node is referenced by fabric-index that is unique on the node. This
fabric-index enables the look-up of the full fabric information from the fabric-index. A fabric-index
of 0 (zero) or null SHALL indicate that there is no fabric associated with the context in which the
fabric-index is being used. If fabric-index is used in a context that is exclusively associated with
a fabric, such as fabric-scoped data model elements, then the fabric-index values SHALL NOT include 0
(zero) or null.

**`See`**

MatterSpecification.v10.Core § 7.5.2

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricIndex.ts#L23)

[packages/matter.js/src/datatype/FabricIndex.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricIndex.ts#L21)

[packages/matter.js/src/datatype/FabricIndex.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricIndex.ts#L27)

___

### FieldId

Ƭ **FieldId**: [`Branded`](util_export.md#branded)\<`number`, ``"FieldId"``\>

A "field ID" is an unsigned 32-bit integer that identifies a specific field
in a cluster struct type.

**`See`**

MatterSpecification.v11.Core § 7.18.2.18

#### Defined in

[packages/matter.js/src/datatype/FieldId.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FieldId.ts#L19)

[packages/matter.js/src/datatype/FieldId.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FieldId.ts#L17)

___

### GroupId

Ƭ **GroupId**: [`Branded`](util_export.md#branded)\<`number`, ``"GroupId"``\>

A Group Identifier (Group ID or GID) is a 16-bit number that identifies a set of Nodes across a
Fabric at the message layer (see Section 4.15, “Group Key Management”). A Group ID can further
be bound to one or more Endpoints within each Node in the group at the interaction layer.

The Group ID space is allocated as described in Table 2, “Group ID Allocations”:
0x0000 - Null or unspecified Group ID
0x0001 - 0xFEFF: Application Group ID, assigned by fabric Administrator
0xFF00 - 0xFFFF: Universal Group ID range reserved for static multicast and anycast identifiers

**`See`**

MatterSpecification.v10.Core § 2.5.4

#### Defined in

[packages/matter.js/src/datatype/GroupId.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/GroupId.ts#L25)

[packages/matter.js/src/datatype/GroupId.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/GroupId.ts#L23)

___

### NodeId

Ƭ **NodeId**: [`Branded`](util_export.md#branded)\<`bigint`, ``"NodeId"``\>

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

**`See`**

MatterSpecification.v10.Core § 2.5.5

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/NodeId.ts#L25)

[packages/matter.js/src/datatype/NodeId.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/NodeId.ts#L23)

[packages/matter.js/src/datatype/NodeId.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/NodeId.ts#L29)

___

### SubjectId

Ƭ **SubjectId**: [`NodeId`](datatype_export.md#nodeid)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

**`See`**

MatterSpecification.v10.Core § 6.6.2.1

#### Defined in

[packages/matter.js/src/datatype/SubjectId.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/SubjectId.ts#L15)

___

### VendorId

Ƭ **VendorId**: [`Branded`](util_export.md#branded)\<`number`, ``"VendorId"``\>

A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).

**`See`**

MatterSpecification.v10.Core § 2.5.2

#### Defined in

[packages/matter.js/src/datatype/VendorId.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/VendorId.ts#L20)

[packages/matter.js/src/datatype/VendorId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/VendorId.ts#L18)

## Variables

### TlvAttributeId

• `Const` **TlvAttributeId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`AttributeId`](datatype_export.md#attributeid), `number`\>

Tlv schema for an Attribute Id.

#### Defined in

[packages/matter.js/src/datatype/AttributeId.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/AttributeId.ts#L23)

___

### TlvCaseAuthenticatedTag

• `Const` **TlvCaseAuthenticatedTag**: [`TlvCaseAuthenticatedTagSchema`](../classes/datatype_export._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Defined in

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L71)

___

### TlvClusterId

• `Const` **TlvClusterId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`ClusterId`](datatype_export.md#clusterid)\<`number`\>, `number`\>

Tlv schema for a cluster Id.

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/ClusterId.ts#L35)

___

### TlvCommandId

• `Const` **TlvCommandId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`CommandId`](datatype_export.md#commandid), `number`\>

Tlv schema for an Command Id.

#### Defined in

[packages/matter.js/src/datatype/CommandId.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CommandId.ts#L23)

___

### TlvDataVersion

• `Const` **TlvDataVersion**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`DataVersion`](datatype_export.md#dataversion), `number`\>

TLV schema for a data version.

#### Defined in

[packages/matter.js/src/datatype/DataVersion.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DataVersion.ts#L24)

___

### TlvDeviceTypeId

• `Const` **TlvDeviceTypeId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`DeviceTypeId`](datatype_export.md#devicetypeid)\<`number`\>, `number`\>

Tlv schema for a Device type ID.

#### Defined in

[packages/matter.js/src/datatype/DeviceTypeId.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DeviceTypeId.ts#L23)

___

### TlvEndpointNumber

• `Const` **TlvEndpointNumber**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`EndpointNumber`](datatype_export.md#endpointnumber), `number`\>

Tlv schema for an Endpoint number.

#### Defined in

[packages/matter.js/src/datatype/EndpointNumber.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EndpointNumber.ts#L23)

___

### TlvEntryIndex

• `Const` **TlvEntryIndex**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`EntryIndex`](datatype_export.md#entryindex), `number`\>

TLV schema for an entry index.

#### Defined in

[packages/matter.js/src/datatype/EntryIndex.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EntryIndex.ts#L24)

___

### TlvEventId

• `Const` **TlvEventId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`EventId`](datatype_export.md#eventid), `number`\>

Tlv schema for an Event Id.

#### Defined in

[packages/matter.js/src/datatype/EventId.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventId.ts#L23)

___

### TlvEventNumber

• `Const` **TlvEventNumber**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`EventNumber`](datatype_export.md#eventnumber), `number` \| `bigint`\>

TLV schema for a data version.

#### Defined in

[packages/matter.js/src/datatype/EventNumber.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventNumber.ts#L24)

___

### TlvFabricId

• `Const` **TlvFabricId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`FabricId`](datatype_export.md#fabricid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

[packages/matter.js/src/datatype/FabricId.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricId.ts#L25)

___

### TlvFabricIndex

• `Const` **TlvFabricIndex**: [`FabricIndexTlvWrapper`](../classes/datatype_export._internal_.FabricIndexTlvWrapper.md)

Tlv Schema for a Fabric Index.

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricIndex.ts#L59)

___

### TlvFieldId

• `Const` **TlvFieldId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`FieldId`](datatype_export.md#fieldid), `number`\>

TLV schema for a field ID.

#### Defined in

[packages/matter.js/src/datatype/FieldId.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FieldId.ts#L24)

___

### TlvGroupId

• `Const` **TlvGroupId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`GroupId`](datatype_export.md#groupid), `number`\>

Tlv Schema for a Group Id.

#### Defined in

[packages/matter.js/src/datatype/GroupId.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/GroupId.ts#L30)

___

### TlvNodeId

• `Const` **TlvNodeId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`NodeId`](datatype_export.md#nodeid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/NodeId.ts#L108)

___

### TlvSubjectId

• `Const` **TlvSubjectId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`NodeId`](datatype_export.md#nodeid), `number` \| `bigint`\> = `TlvNodeId`

Tlv schema for a Subject Id

#### Defined in

[packages/matter.js/src/datatype/SubjectId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/SubjectId.ts#L18)

___

### TlvVendorId

• `Const` **TlvVendorId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)\<[`VendorId`](datatype_export.md#vendorid), `number`\>

Data model for a Vendor Identifier.

#### Defined in

[packages/matter.js/src/datatype/VendorId.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/VendorId.ts#L25)

## Functions

### AttributeId

▸ **AttributeId**(`id`): [`AttributeId`](datatype_export.md#attributeid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`AttributeId`](datatype_export.md#attributeid)

#### Defined in

[packages/matter.js/src/datatype/AttributeId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/AttributeId.ts#L18)

___

### CaseAuthenticatedTag

▸ **CaseAuthenticatedTag**(`id`): [`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)

#### Defined in

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L19)

___

### ClusterId

▸ **ClusterId**\<`ID`\>(`id`): [`ClusterId`](datatype_export.md#clusterid)\<`ID`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

[`ClusterId`](datatype_export.md#clusterid)\<`ID`\>

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/ClusterId.ts#L20)

___

### CommandId

▸ **CommandId**(`v`): [`CommandId`](datatype_export.md#commandid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`CommandId`](datatype_export.md#commandid)

#### Defined in

[packages/matter.js/src/datatype/CommandId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/CommandId.ts#L18)

___

### DataVersion

▸ **DataVersion**(`id`): [`DataVersion`](datatype_export.md#dataversion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`DataVersion`](datatype_export.md#dataversion)

#### Defined in

[packages/matter.js/src/datatype/DataVersion.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DataVersion.ts#L19)

___

### DeviceTypeId

▸ **DeviceTypeId**\<`ID`\>(`v`): [`DeviceTypeId`](datatype_export.md#devicetypeid)\<`ID`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `ID` |

#### Returns

[`DeviceTypeId`](datatype_export.md#devicetypeid)\<`ID`\>

#### Defined in

[packages/matter.js/src/datatype/DeviceTypeId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/DeviceTypeId.ts#L18)

___

### EndpointNumber

▸ **EndpointNumber**(`n`): [`EndpointNumber`](datatype_export.md#endpointnumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`EndpointNumber`](datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/datatype/EndpointNumber.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EndpointNumber.ts#L18)

___

### EntryIndex

▸ **EntryIndex**(`id`): [`EntryIndex`](datatype_export.md#entryindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`EntryIndex`](datatype_export.md#entryindex)

#### Defined in

[packages/matter.js/src/datatype/EntryIndex.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EntryIndex.ts#L19)

___

### EventId

▸ **EventId**(`v`): [`EventId`](datatype_export.md#eventid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`EventId`](datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/datatype/EventId.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventId.ts#L18)

___

### EventNumber

▸ **EventNumber**(`id`): [`EventNumber`](datatype_export.md#eventnumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` \| `bigint` |

#### Returns

[`EventNumber`](datatype_export.md#eventnumber)

#### Defined in

[packages/matter.js/src/datatype/EventNumber.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/EventNumber.ts#L19)

___

### FabricId

▸ **FabricId**(`value`): [`FabricId`](datatype_export.md#fabricid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`FabricId`](datatype_export.md#fabricid)

#### Defined in

[packages/matter.js/src/datatype/FabricId.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricId.ts#L20)

___

### FabricIndex

▸ **FabricIndex**(`value`): [`FabricIndex`](datatype_export.md#fabricindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`FabricIndex`](datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FabricIndex.ts#L23)

___

### FieldId

▸ **FieldId**(`id`): [`FieldId`](datatype_export.md#fieldid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`FieldId`](datatype_export.md#fieldid)

#### Defined in

[packages/matter.js/src/datatype/FieldId.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/FieldId.ts#L19)

___

### GroupId

▸ **GroupId**(`v`): [`GroupId`](datatype_export.md#groupid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`GroupId`](datatype_export.md#groupid)

#### Defined in

[packages/matter.js/src/datatype/GroupId.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/GroupId.ts#L25)

___

### NodeId

▸ **NodeId**(`v`): [`NodeId`](datatype_export.md#nodeid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` \| `bigint` |

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/NodeId.ts#L25)

___

### VendorId

▸ **VendorId**(`v`): [`VendorId`](datatype_export.md#vendorid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`VendorId`](datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/datatype/VendorId.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/VendorId.ts#L20)
