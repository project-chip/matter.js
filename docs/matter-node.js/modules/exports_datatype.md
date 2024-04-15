[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/datatype

# Module: exports/datatype

## Table of contents

### Modules

- [\<internal\>](exports_datatype._internal_.md)

### Namespaces

- [CaseAuthenticatedTag](exports_datatype.CaseAuthenticatedTag.md)
- [ClusterId](exports_datatype.ClusterId.md)
- [FabricIndex](exports_datatype.FabricIndex.md)
- [NodeId](exports_datatype.NodeId.md)

### Type Aliases

- [AttributeId](exports_datatype.md#attributeid)
- [CaseAuthenticatedTag](exports_datatype.md#caseauthenticatedtag)
- [ClusterId](exports_datatype.md#clusterid)
- [CommandId](exports_datatype.md#commandid)
- [DataVersion](exports_datatype.md#dataversion)
- [DeviceTypeId](exports_datatype.md#devicetypeid)
- [EndpointNumber](exports_datatype.md#endpointnumber)
- [EntryIndex](exports_datatype.md#entryindex)
- [EventId](exports_datatype.md#eventid)
- [EventNumber](exports_datatype.md#eventnumber)
- [FabricId](exports_datatype.md#fabricid)
- [FabricIndex](exports_datatype.md#fabricindex)
- [FieldId](exports_datatype.md#fieldid)
- [GroupId](exports_datatype.md#groupid)
- [NodeId](exports_datatype.md#nodeid)
- [SubjectId](exports_datatype.md#subjectid)
- [VendorId](exports_datatype.md#vendorid)

### Variables

- [TlvAttributeId](exports_datatype.md#tlvattributeid)
- [TlvCaseAuthenticatedTag](exports_datatype.md#tlvcaseauthenticatedtag)
- [TlvClusterId](exports_datatype.md#tlvclusterid)
- [TlvCommandId](exports_datatype.md#tlvcommandid)
- [TlvDataVersion](exports_datatype.md#tlvdataversion)
- [TlvDeviceTypeId](exports_datatype.md#tlvdevicetypeid)
- [TlvEndpointNumber](exports_datatype.md#tlvendpointnumber)
- [TlvEntryIndex](exports_datatype.md#tlventryindex)
- [TlvEventId](exports_datatype.md#tlveventid)
- [TlvEventNumber](exports_datatype.md#tlveventnumber)
- [TlvFabricId](exports_datatype.md#tlvfabricid)
- [TlvFabricIndex](exports_datatype.md#tlvfabricindex)
- [TlvFieldId](exports_datatype.md#tlvfieldid)
- [TlvGroupId](exports_datatype.md#tlvgroupid)
- [TlvNodeId](exports_datatype.md#tlvnodeid)
- [TlvSubjectId](exports_datatype.md#tlvsubjectid)
- [TlvVendorId](exports_datatype.md#tlvvendorid)

### Functions

- [AttributeId](exports_datatype.md#attributeid-1)
- [CaseAuthenticatedTag](exports_datatype.md#caseauthenticatedtag-1)
- [ClusterId](exports_datatype.md#clusterid-1)
- [CommandId](exports_datatype.md#commandid-1)
- [DataVersion](exports_datatype.md#dataversion-1)
- [DeviceTypeId](exports_datatype.md#devicetypeid-1)
- [EndpointNumber](exports_datatype.md#endpointnumber-1)
- [EntryIndex](exports_datatype.md#entryindex-1)
- [EventId](exports_datatype.md#eventid-1)
- [EventNumber](exports_datatype.md#eventnumber-1)
- [FabricId](exports_datatype.md#fabricid-1)
- [FabricIndex](exports_datatype.md#fabricindex-1)
- [FieldId](exports_datatype.md#fieldid-1)
- [GroupId](exports_datatype.md#groupid-1)
- [NodeId](exports_datatype.md#nodeid-1)
- [VendorId](exports_datatype.md#vendorid-1)

## Type Aliases

### AttributeId

Ƭ **AttributeId**: [`Branded`](util_export.md#branded)\<`number`, ``"AttributeId"``\>

An Attribute ID is a 32 bit number and indicates an attribute defined in a cluster specification.

**`See`**

MatterSpecification.v10.Core § 7.18.2.15

#### Defined in

packages/matter.js/dist/esm/datatype/AttributeId.d.ts:14

packages/matter.js/dist/esm/datatype/AttributeId.d.ts:13

___

### CaseAuthenticatedTag

Ƭ **CaseAuthenticatedTag**: [`Branded`](util_export.md#branded)\<`number`, ``"CaseAuthenticatedTag"``\>

A CASE Authenticated Tag (CAT) is a special subject distinguished name within the Operational Certificate.

**`See`**

MatterSpecification.v12.Core § 6.6.2.1.2.

#### Defined in

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:14

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:13

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:15

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

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:16

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:15

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:17

___

### CommandId

Ƭ **CommandId**: [`Branded`](util_export.md#branded)\<`number`, ``"CommandId"``\>

A Command ID is a 32 bit number and indicates a command defined in a cluster specification.

**`See`**

MatterSpecification.v10.Core § 7.18.2.18

#### Defined in

packages/matter.js/dist/esm/datatype/CommandId.d.ts:14

packages/matter.js/dist/esm/datatype/CommandId.d.ts:13

___

### DataVersion

Ƭ **DataVersion**: [`Branded`](util_export.md#branded)\<`number`, ``"DataVersion"``\>

A "data version" is an unsigned 32-bit integer that identifies a specific
version of cluster attribute data.

**`See`**

MatterSpecification.v11.Core § 7.18.2.26

#### Defined in

packages/matter.js/dist/esm/datatype/DataVersion.d.ts:15

packages/matter.js/dist/esm/datatype/DataVersion.d.ts:14

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

packages/matter.js/dist/esm/datatype/DeviceTypeId.d.ts:14

packages/matter.js/dist/esm/datatype/DeviceTypeId.d.ts:13

___

### EndpointNumber

Ƭ **EndpointNumber**: [`Branded`](util_export.md#branded)\<`number`, ``"EndpointNumber"``\>

A Endpoint Number is a 16-bit number that that indicates an instance of a device type.

**`See`**

MatterSpecification.v10.Core § 7.18.2.11

#### Defined in

packages/matter.js/dist/esm/datatype/EndpointNumber.d.ts:14

packages/matter.js/dist/esm/datatype/EndpointNumber.d.ts:13

___

### EntryIndex

Ƭ **EntryIndex**: [`Branded`](util_export.md#branded)\<`number`, ``"EntryIndex"``\>

An "entry index" is a 16-bit unsigned integer that identifies a specific
entry in a list.

**`See`**

MatterSpecification.v11.Core § 7.18.2.23

#### Defined in

packages/matter.js/dist/esm/datatype/EntryIndex.d.ts:15

packages/matter.js/dist/esm/datatype/EntryIndex.d.ts:14

___

### EventId

Ƭ **EventId**: [`Branded`](util_export.md#branded)\<`number`, ``"EventId"``\>

An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.

**`See`**

MatterSpecification.v10.Core § 7.18.2.17

#### Defined in

packages/matter.js/dist/esm/datatype/EventId.d.ts:14

packages/matter.js/dist/esm/datatype/EventId.d.ts:13

___

### EventNumber

Ƭ **EventNumber**: [`Branded`](util_export.md#branded)\<`bigint`, ``"EventNumber"``\>

An "event number" is an increasing 64-bit unsigned integer assigned to
cluster events.

**`See`**

MatterSpecification.v11.Core § 7.14.2.1

#### Defined in

packages/matter.js/dist/esm/datatype/EventNumber.d.ts:15

packages/matter.js/dist/esm/datatype/EventNumber.d.ts:14

___

### FabricId

Ƭ **FabricId**: [`Branded`](util_export.md#branded)\<`bigint`, ``"FabricId"``\>

A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
a particular root CA.

**`See`**

MatterSpecification.v10.Core § 2.5.1

#### Defined in

packages/matter.js/dist/esm/datatype/FabricId.d.ts:15

packages/matter.js/dist/esm/datatype/FabricId.d.ts:14

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

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:19

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:18

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:20

___

### FieldId

Ƭ **FieldId**: [`Branded`](util_export.md#branded)\<`number`, ``"FieldId"``\>

A "field ID" is an unsigned 32-bit integer that identifies a specific field
in a cluster struct type.

**`See`**

MatterSpecification.v11.Core § 7.18.2.18

#### Defined in

packages/matter.js/dist/esm/datatype/FieldId.d.ts:15

packages/matter.js/dist/esm/datatype/FieldId.d.ts:14

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

packages/matter.js/dist/esm/datatype/GroupId.d.ts:21

packages/matter.js/dist/esm/datatype/GroupId.d.ts:20

___

### NodeId

Ƭ **NodeId**: [`Branded`](util_export.md#branded)\<`bigint`, ``"NodeId"``\>

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

**`See`**

MatterSpecification.v10.Core § 2.5.5

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:16

packages/matter.js/dist/esm/datatype/NodeId.d.ts:15

packages/matter.js/dist/esm/datatype/NodeId.d.ts:17

___

### SubjectId

Ƭ **SubjectId**: [`NodeId`](exports_datatype.md#nodeid)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

**`See`**

MatterSpecification.v10.Core § 6.6.2.1

#### Defined in

packages/matter.js/dist/esm/datatype/SubjectId.d.ts:13

___

### VendorId

Ƭ **VendorId**: [`Branded`](util_export.md#branded)\<`number`, ``"VendorId"``\>

A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).

**`See`**

MatterSpecification.v10.Core § 2.5.2

#### Defined in

packages/matter.js/dist/esm/datatype/VendorId.d.ts:16

packages/matter.js/dist/esm/datatype/VendorId.d.ts:15

## Variables

### TlvAttributeId

• `Const` **TlvAttributeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`AttributeId`](exports_datatype.md#attributeid), `number`\>

Tlv schema for an Attribute Id.

#### Defined in

packages/matter.js/dist/esm/datatype/AttributeId.d.ts:16

___

### TlvCaseAuthenticatedTag

• `Const` **TlvCaseAuthenticatedTag**: [`TlvCaseAuthenticatedTagSchema`](../classes/exports_datatype._internal_.TlvCaseAuthenticatedTagSchema.md)

#### Defined in

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:26

___

### TlvClusterId

• `Const` **TlvClusterId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>, `number`\>

Tlv schema for a cluster Id.

#### Defined in

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:22

___

### TlvCommandId

• `Const` **TlvCommandId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`CommandId`](exports_datatype.md#commandid), `number`\>

Tlv schema for an Command Id.

#### Defined in

packages/matter.js/dist/esm/datatype/CommandId.d.ts:16

___

### TlvDataVersion

• `Const` **TlvDataVersion**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`DataVersion`](exports_datatype.md#dataversion), `number`\>

TLV schema for a data version.

#### Defined in

packages/matter.js/dist/esm/datatype/DataVersion.d.ts:17

___

### TlvDeviceTypeId

• `Const` **TlvDeviceTypeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`DeviceTypeId`](exports_datatype.md#devicetypeid)\<`number`\>, `number`\>

Tlv schema for a Device type ID.

#### Defined in

packages/matter.js/dist/esm/datatype/DeviceTypeId.d.ts:16

___

### TlvEndpointNumber

• `Const` **TlvEndpointNumber**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`EndpointNumber`](exports_datatype.md#endpointnumber), `number`\>

Tlv schema for an Endpoint number.

#### Defined in

packages/matter.js/dist/esm/datatype/EndpointNumber.d.ts:16

___

### TlvEntryIndex

• `Const` **TlvEntryIndex**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`EntryIndex`](exports_datatype.md#entryindex), `number`\>

TLV schema for an entry index.

#### Defined in

packages/matter.js/dist/esm/datatype/EntryIndex.d.ts:17

___

### TlvEventId

• `Const` **TlvEventId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`EventId`](exports_datatype.md#eventid), `number`\>

Tlv schema for an Event Id.

#### Defined in

packages/matter.js/dist/esm/datatype/EventId.d.ts:16

___

### TlvEventNumber

• `Const` **TlvEventNumber**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`EventNumber`](exports_datatype.md#eventnumber), `number` \| `bigint`\>

TLV schema for a data version.

#### Defined in

packages/matter.js/dist/esm/datatype/EventNumber.d.ts:17

___

### TlvFabricId

• `Const` **TlvFabricId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`FabricId`](exports_datatype.md#fabricid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

packages/matter.js/dist/esm/datatype/FabricId.d.ts:17

___

### TlvFabricIndex

• `Const` **TlvFabricIndex**: [`FabricIndexTlvWrapper`](../classes/exports_datatype._internal_.FabricIndexTlvWrapper.md)

Tlv Schema for a Fabric Index.

#### Defined in

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:29

___

### TlvFieldId

• `Const` **TlvFieldId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`FieldId`](exports_datatype.md#fieldid), `number`\>

TLV schema for a field ID.

#### Defined in

packages/matter.js/dist/esm/datatype/FieldId.d.ts:17

___

### TlvGroupId

• `Const` **TlvGroupId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`GroupId`](exports_datatype.md#groupid), `number`\>

Tlv Schema for a Group Id.

#### Defined in

packages/matter.js/dist/esm/datatype/GroupId.d.ts:23

___

### TlvNodeId

• `Const` **TlvNodeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`NodeId`](exports_datatype.md#nodeid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:52

___

### TlvSubjectId

• `Const` **TlvSubjectId**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvWrapper"`](exports_datatype._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvWrapper_.md)

Tlv schema for a Subject Id

#### Defined in

packages/matter.js/dist/esm/datatype/SubjectId.d.ts:15

___

### TlvVendorId

• `Const` **TlvVendorId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)\<[`VendorId`](exports_datatype.md#vendorid), `number`\>

Data model for a Vendor Identifier.

#### Defined in

packages/matter.js/dist/esm/datatype/VendorId.d.ts:18

## Functions

### AttributeId

▸ **AttributeId**(`id`): [`AttributeId`](exports_datatype.md#attributeid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`AttributeId`](exports_datatype.md#attributeid)

#### Defined in

packages/matter.js/dist/esm/datatype/AttributeId.d.ts:14

___

### CaseAuthenticatedTag

▸ **CaseAuthenticatedTag**(`id`): [`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag)

#### Defined in

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:14

___

### ClusterId

▸ **ClusterId**\<`ID`\>(`id`): [`ClusterId`](exports_datatype.md#clusterid)\<`ID`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

[`ClusterId`](exports_datatype.md#clusterid)\<`ID`\>

#### Defined in

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:16

___

### CommandId

▸ **CommandId**(`v`): [`CommandId`](exports_datatype.md#commandid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`CommandId`](exports_datatype.md#commandid)

#### Defined in

packages/matter.js/dist/esm/datatype/CommandId.d.ts:14

___

### DataVersion

▸ **DataVersion**(`id`): [`DataVersion`](exports_datatype.md#dataversion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`DataVersion`](exports_datatype.md#dataversion)

#### Defined in

packages/matter.js/dist/esm/datatype/DataVersion.d.ts:15

___

### DeviceTypeId

▸ **DeviceTypeId**\<`ID`\>(`v`): [`DeviceTypeId`](exports_datatype.md#devicetypeid)\<`ID`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `ID` |

#### Returns

[`DeviceTypeId`](exports_datatype.md#devicetypeid)\<`ID`\>

#### Defined in

packages/matter.js/dist/esm/datatype/DeviceTypeId.d.ts:14

___

### EndpointNumber

▸ **EndpointNumber**(`n`): [`EndpointNumber`](exports_datatype.md#endpointnumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`EndpointNumber`](exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/esm/datatype/EndpointNumber.d.ts:14

___

### EntryIndex

▸ **EntryIndex**(`id`): [`EntryIndex`](exports_datatype.md#entryindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`EntryIndex`](exports_datatype.md#entryindex)

#### Defined in

packages/matter.js/dist/esm/datatype/EntryIndex.d.ts:15

___

### EventId

▸ **EventId**(`v`): [`EventId`](exports_datatype.md#eventid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`EventId`](exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/esm/datatype/EventId.d.ts:14

___

### EventNumber

▸ **EventNumber**(`id`): [`EventNumber`](exports_datatype.md#eventnumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` \| `bigint` |

#### Returns

[`EventNumber`](exports_datatype.md#eventnumber)

#### Defined in

packages/matter.js/dist/esm/datatype/EventNumber.d.ts:15

___

### FabricId

▸ **FabricId**(`value`): [`FabricId`](exports_datatype.md#fabricid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`FabricId`](exports_datatype.md#fabricid)

#### Defined in

packages/matter.js/dist/esm/datatype/FabricId.d.ts:15

___

### FabricIndex

▸ **FabricIndex**(`value`): [`FabricIndex`](exports_datatype.md#fabricindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`FabricIndex`](exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:19

___

### FieldId

▸ **FieldId**(`id`): [`FieldId`](exports_datatype.md#fieldid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`FieldId`](exports_datatype.md#fieldid)

#### Defined in

packages/matter.js/dist/esm/datatype/FieldId.d.ts:15

___

### GroupId

▸ **GroupId**(`v`): [`GroupId`](exports_datatype.md#groupid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`GroupId`](exports_datatype.md#groupid)

#### Defined in

packages/matter.js/dist/esm/datatype/GroupId.d.ts:21

___

### NodeId

▸ **NodeId**(`v`): [`NodeId`](exports_datatype.md#nodeid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` \| `bigint` |

#### Returns

[`NodeId`](exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:16

___

### VendorId

▸ **VendorId**(`v`): [`VendorId`](exports_datatype.md#vendorid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`VendorId`](exports_datatype.md#vendorid)

#### Defined in

packages/matter.js/dist/esm/datatype/VendorId.d.ts:16
