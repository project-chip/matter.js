[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/datatype

# Module: exports/datatype

## Table of contents

### Classes

- [AttributeId](../classes/exports_datatype.AttributeId.md)
- [ClusterId](../classes/exports_datatype.ClusterId.md)
- [CommandId](../classes/exports_datatype.CommandId.md)
- [DeviceTypeId](../classes/exports_datatype.DeviceTypeId.md)
- [EndpointNumber](../classes/exports_datatype.EndpointNumber.md)
- [EventId](../classes/exports_datatype.EventId.md)
- [FabricId](../classes/exports_datatype.FabricId.md)
- [FabricIndex](../classes/exports_datatype.FabricIndex.md)
- [GroupId](../classes/exports_datatype.GroupId.md)
- [NodeId](../classes/exports_datatype.NodeId.md)
- [VendorId](../classes/exports_datatype.VendorId.md)

### Type Aliases

- [SubjectId](exports_datatype.md#subjectid)

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

## Type Aliases

### SubjectId

Ƭ **SubjectId**: [`NodeId`](../classes/exports_datatype.NodeId.md)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

**`See`**

MatterCoreSpecificationV1_0 § 6.6.2.1

#### Defined in

packages/matter.js/dist/cjs/datatype/SubjectId.d.ts:13

## Variables

### TlvAttributeId

• `Const` **TlvAttributeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`AttributeId`](../classes/exports_datatype.AttributeId.md), `number`\>

Tlv schema for an Attribute Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/AttributeId.d.ts:17

___

### TlvClusterId

• `Const` **TlvClusterId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`ClusterId`](../classes/exports_datatype.ClusterId.md), `number`\>

Tlv schema for a cluster Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/ClusterId.d.ts:18

___

### TlvCommandId

• `Const` **TlvCommandId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`CommandId`](../classes/exports_datatype.CommandId.md), `number`\>

Tlv schema for an Command Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/CommandId.d.ts:17

___

### TlvDeviceTypeId

• `Const` **TlvDeviceTypeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`DeviceTypeId`](../classes/exports_datatype.DeviceTypeId.md), `number`\>

Tlv schema for a Device type ID.

#### Defined in

packages/matter.js/dist/cjs/datatype/DeviceTypeId.d.ts:17

___

### TlvEndpointNumber

• `Const` **TlvEndpointNumber**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`EndpointNumber`](../classes/exports_datatype.EndpointNumber.md), `number`\>

Tlv schema for an Endpoint number.

#### Defined in

packages/matter.js/dist/cjs/datatype/EndpointNumber.d.ts:17

___

### TlvEventId

• `Const` **TlvEventId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`EventId`](../classes/exports_datatype.EventId.md), `number`\>

Tlv schema for an Event Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/EventId.d.ts:17

___

### TlvFabricId

• `Const` **TlvFabricId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`FabricId`](../classes/exports_datatype.FabricId.md), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricId.d.ts:18

___

### TlvFabricIndex

• `Const` **TlvFabricIndex**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`FabricIndex`](../classes/exports_datatype.FabricIndex.md), `number`\>

Tlv Schema for a Fabric Index.

#### Defined in

packages/matter.js/dist/cjs/datatype/FabricIndex.d.ts:23

___

### TlvGroupId

• `Const` **TlvGroupId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`GroupId`](../classes/exports_datatype.GroupId.md), `number`\>

Tlv Schema for a Group Id.

#### Defined in

packages/matter.js/dist/cjs/datatype/GroupId.d.ts:24

___

### TlvNodeId

• `Const` **TlvNodeId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`NodeId`](../classes/exports_datatype.NodeId.md), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:21

___

### TlvSubjectId

• `Const` **TlvSubjectId**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvWrapper"`](index._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvWrapper_.md)

Tlv schema for a Subject Id

#### Defined in

packages/matter.js/dist/cjs/datatype/SubjectId.d.ts:15

___

### TlvVendorId

• `Const` **TlvVendorId**: [`TlvWrapper`](../classes/exports_tlv.TlvWrapper.md)<[`VendorId`](../classes/exports_datatype.VendorId.md), `number`\>

Data model for a Vendor Identifier.

#### Defined in

packages/matter.js/dist/cjs/datatype/VendorId.d.ts:19
