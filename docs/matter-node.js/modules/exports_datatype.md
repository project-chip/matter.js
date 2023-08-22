[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/datatype

# Module: exports/datatype

## Table of contents

### Namespaces

- [FabricIndex](exports_datatype.FabricIndex.md)
- [NodeId](exports_datatype.NodeId.md)

### Type Aliases

- [AttributeId](exports_datatype.md#attributeid)
- [ClusterId](exports_datatype.md#clusterid)
- [CommandId](exports_datatype.md#commandid)
- [DeviceTypeId](exports_datatype.md#devicetypeid)
- [EndpointNumber](exports_datatype.md#endpointnumber)
- [EventId](exports_datatype.md#eventid)
- [FabricId](exports_datatype.md#fabricid)
- [FabricIndex](exports_datatype.md#fabricindex)
- [GroupId](exports_datatype.md#groupid)
- [NodeId](exports_datatype.md#nodeid)
- [SubjectId](exports_datatype.md#subjectid)
- [VendorId](exports_datatype.md#vendorid)

### Variables

- [TlvAttributeId](exports_datatype.md#tlvattributeid)
- [TlvClusterId](exports_datatype.md#tlvclusterid)
- [TlvCommandId](exports_datatype.md#tlvcommandid)
- [TlvDeviceTypeId](exports_datatype.md#tlvdevicetypeid)
- [TlvEndpointNumber](exports_datatype.md#tlvendpointnumber)
- [TlvEventId](exports_datatype.md#tlveventid)
- [TlvFabricId](exports_datatype.md#tlvfabricid)
- [TlvFabricIndex](exports_datatype.md#tlvfabricindex)
- [TlvGroupId](exports_datatype.md#tlvgroupid)
- [TlvNodeId](exports_datatype.md#tlvnodeid)
- [TlvSubjectId](exports_datatype.md#tlvsubjectid)
- [TlvVendorId](exports_datatype.md#tlvvendorid)

### Functions

- [AttributeId](exports_datatype.md#attributeid-1)
- [ClusterId](exports_datatype.md#clusterid-1)
- [CommandId](exports_datatype.md#commandid-1)
- [DeviceTypeId](exports_datatype.md#devicetypeid-1)
- [EndpointNumber](exports_datatype.md#endpointnumber-1)
- [EventId](exports_datatype.md#eventid-1)
- [FabricId](exports_datatype.md#fabricid-1)
- [FabricIndex](exports_datatype.md#fabricindex-1)
- [GroupId](exports_datatype.md#groupid-1)
- [NodeId](exports_datatype.md#nodeid-1)
- [VendorId](exports_datatype.md#vendorid-1)

## Type Aliases

### AttributeId

Ƭ **AttributeId**: [`Branded`](util_export.md#branded)<`number`, ``"AttributeId"``\>

An Attribute ID is a 32 bit number and indicates an attribute defined in a cluster specification.

**`See`**

MatterCoreSpecificationV1_0 § 7.18.2.15

#### Defined in

packages/matter.js/dist/cjs/datatype/AttributeId.d.ts:14

packages/matter.js/dist/cjs/datatype/AttributeId.d.ts:13

___

### ClusterId

Ƭ **ClusterId**: [`Branded`](util_export.md#branded)<`number`, ``"ClusterId"``\>

A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
SHALL define conformance to that specification.

**`See`**

MatterCoreSpecificationV1_0 § 7.10

#### Defined in

packages/matter.js/dist/cjs/datatype/ClusterId.d.ts:15

packages/matter.js/dist/cjs/datatype/ClusterId.d.ts:14

___

### CommandId

Ƭ **CommandId**: [`Branded`](util_export.md#branded)<`number`, ``"CommandId"``\>

A Command ID is a 32 bit number and indicates a command defined in a cluster specification.

**`See`**

MatterCoreSpecificationV1_0 § 7.18.2.18

#### Defined in

packages/matter.js/dist/cjs/datatype/CommandId.d.ts:14

packages/matter.js/dist/cjs/datatype/CommandId.d.ts:13

___

### DeviceTypeId

Ƭ **DeviceTypeId**: [`Branded`](util_export.md#branded)<`number`, ``"DeviceTypeId"``\>

A Device type ID is a 32-bit number that defines the type of the device.

**`See`**

MatterCoreSpecificationV1_0 § 7.15

#### Defined in

packages/matter.js/dist/cjs/datatype/DeviceTypeId.d.ts:14

packages/matter.js/dist/cjs/datatype/DeviceTypeId.d.ts:13

___

### EndpointNumber

Ƭ **EndpointNumber**: [`Branded`](util_export.md#branded)<`number`, ``"EndpointNumber"``\>

A Endpoint Number is a 16-bit number that that indicates an instance of a device type.

**`See`**

MatterCoreSpecificationV1_0 § 7.18.2.11

#### Defined in

packages/matter.js/dist/cjs/datatype/EndpointNumber.d.ts:14

packages/matter.js/dist/cjs/datatype/EndpointNumber.d.ts:13

___

### EventId

Ƭ **EventId**: [`Branded`](util_export.md#branded)<`number`, ``"EventId"``\>

An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.

**`See`**

MatterCoreSpecificationV1_0 § 7.18.2.17

#### Defined in

packages/matter.js/dist/cjs/datatype/EventId.d.ts:14

packages/matter.js/dist/cjs/datatype/EventId.d.ts:13

___

### FabricId

Ƭ **FabricId**: [`Branded`](util_export.md#branded)<`bigint`, ``"FabricId"``\>

A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
a particular root CA.

**`See`**

MatterCoreSpecificationV1_0 § 2.5.1

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricId.d.ts:15

packages/matter.js/dist/cjs/datatype/FabricId.d.ts:14

___

### FabricIndex

Ƭ **FabricIndex**: [`Branded`](util_export.md#branded)<`number`, ``"FabricIndex"``\>

Each fabric supported on a node is referenced by fabric-index that is unique on the node. This
fabric-index enables the look-up of the full fabric information from the fabric-index. A fabric-index
of 0 (zero) or null SHALL indicate that there is no fabric associated with the context in which the
fabric-index is being used. If fabric-index is used in a context that is exclusively associated with
a fabric, such as fabric-scoped data model elements, then the fabric-index values SHALL NOT include 0
(zero) or null.

**`See`**

MatterCoreSpecificationV1_0 § 7.5.2

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:19

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:18

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:20

___

### GroupId

Ƭ **GroupId**: [`Branded`](util_export.md#branded)<`number`, ``"GroupId"``\>

A Group Identifier (Group ID or GID) is a 16-bit number that identifies a set of Nodes across a
Fabric at the message layer (see Section 4.15, “Group Key Management”). A Group ID can further
be bound to one or more Endpoints within each Node in the group at the interaction layer.

The Group ID space is allocated as described in Table 2, “Group ID Allocations”:
0x0000 - Null or unspecified Group ID
0x0001 - 0xFEFF: Application Group ID, assigned by fabric Administrator
0xFF00 - 0xFFFF: Universal Group ID range reserved for static multicast and anycast identifiers

**`See`**

MatterCoreSpecificationV1_0 § 2.5.4

#### Defined in

packages/matter.js/dist/cjs/datatype/GroupId.d.ts:21

packages/matter.js/dist/cjs/datatype/GroupId.d.ts:20

___

### NodeId

Ƭ **NodeId**: [`Branded`](util_export.md#branded)<`bigint`, ``"NodeId"``\>

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

**`See`**

MatterCoreSpecificationV1_0 § 2.5.5

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:15

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:14

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:16

___

### SubjectId

Ƭ **SubjectId**: [`NodeId`](exports_datatype.md#nodeid)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

**`See`**

MatterCoreSpecificationV1_0 § 6.6.2.1

#### Defined in

packages/matter.js/dist/cjs/datatype/SubjectId.d.ts:13

___

### VendorId

Ƭ **VendorId**: [`Branded`](util_export.md#branded)<`number`, ``"VendorId"``\>

A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).

**`See`**

MatterCoreSpecificationV1_0 § 2.5.2

#### Defined in

packages/matter.js/dist/cjs/datatype/VendorId.d.ts:16

packages/matter.js/dist/cjs/datatype/VendorId.d.ts:15

## Variables

### TlvAttributeId

• `Const` **TlvAttributeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`AttributeId`](exports_datatype.md#attributeid), `number`\>

Tlv schema for an Attribute Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/AttributeId.d.ts:16

___

### TlvClusterId

• `Const` **TlvClusterId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`ClusterId`](exports_datatype.md#clusterid), `number`\>

Tlv schema for a cluster Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/ClusterId.d.ts:17

___

### TlvCommandId

• `Const` **TlvCommandId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`CommandId`](exports_datatype.md#commandid), `number`\>

Tlv schema for an Command Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/CommandId.d.ts:16

___

### TlvDeviceTypeId

• `Const` **TlvDeviceTypeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`DeviceTypeId`](exports_datatype.md#devicetypeid), `number`\>

Tlv schema for a Device type ID.

#### Defined in

packages/matter.js/dist/cjs/datatype/DeviceTypeId.d.ts:16

___

### TlvEndpointNumber

• `Const` **TlvEndpointNumber**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`EndpointNumber`](exports_datatype.md#endpointnumber), `number`\>

Tlv schema for an Endpoint number.

#### Defined in

packages/matter.js/dist/cjs/datatype/EndpointNumber.d.ts:16

___

### TlvEventId

• `Const` **TlvEventId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`EventId`](exports_datatype.md#eventid), `number`\>

Tlv schema for an Event Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/EventId.d.ts:16

___

### TlvFabricId

• `Const` **TlvFabricId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`FabricId`](exports_datatype.md#fabricid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricId.d.ts:17

___

### TlvFabricIndex

• `Const` **TlvFabricIndex**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`FabricIndex`](exports_datatype.md#fabricindex), `number` \| `undefined`\>

Tlv Schema for a Fabric Index.

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:25

___

### TlvGroupId

• `Const` **TlvGroupId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`GroupId`](exports_datatype.md#groupid), `number`\>

Tlv Schema for a Group Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/GroupId.d.ts:23

___

### TlvNodeId

• `Const` **TlvNodeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`NodeId`](exports_datatype.md#nodeid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:22

___

### TlvSubjectId

• `Const` **TlvSubjectId**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvWrapper"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvWrapper_.md)

Tlv schema for a Subject Id

#### Defined in

packages/matter.js/dist/cjs/datatype/SubjectId.d.ts:15

___

### TlvVendorId

• `Const` **TlvVendorId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`VendorId`](exports_datatype.md#vendorid), `number`\>

Data model for a Vendor Identifier.

#### Defined in

packages/matter.js/dist/cjs/datatype/VendorId.d.ts:18

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

packages/matter.js/dist/cjs/datatype/AttributeId.d.ts:14

___

### ClusterId

▸ **ClusterId**(`v`): [`ClusterId`](exports_datatype.md#clusterid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`ClusterId`](exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/datatype/ClusterId.d.ts:15

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

packages/matter.js/dist/cjs/datatype/CommandId.d.ts:14

___

### DeviceTypeId

▸ **DeviceTypeId**(`v`): [`DeviceTypeId`](exports_datatype.md#devicetypeid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`DeviceTypeId`](exports_datatype.md#devicetypeid)

#### Defined in

packages/matter.js/dist/cjs/datatype/DeviceTypeId.d.ts:14

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

packages/matter.js/dist/cjs/datatype/EndpointNumber.d.ts:14

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

packages/matter.js/dist/cjs/datatype/EventId.d.ts:14

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

packages/matter.js/dist/cjs/datatype/FabricId.d.ts:15

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

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:19

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

packages/matter.js/dist/cjs/datatype/GroupId.d.ts:21

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

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:15

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

packages/matter.js/dist/cjs/datatype/VendorId.d.ts:16
