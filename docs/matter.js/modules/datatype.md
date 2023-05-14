[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / datatype

# Module: datatype

## Table of contents

### Classes

- [AttributeId](../classes/datatype.AttributeId.md)
- [ClusterId](../classes/datatype.ClusterId.md)
- [CommandId](../classes/datatype.CommandId.md)
- [DeviceTypeId](../classes/datatype.DeviceTypeId.md)
- [EndpointNumber](../classes/datatype.EndpointNumber.md)
- [EventId](../classes/datatype.EventId.md)
- [FabricId](../classes/datatype.FabricId.md)
- [FabricIndex](../classes/datatype.FabricIndex.md)
- [GroupId](../classes/datatype.GroupId.md)
- [NodeId](../classes/datatype.NodeId.md)
- [VendorId](../classes/datatype.VendorId.md)

### Type Aliases

- [SubjectId](datatype.md#subjectid)

### Variables

- [TlvAttributeId](datatype.md#tlvattributeid)
- [TlvClusterId](datatype.md#tlvclusterid)
- [TlvCommandId](datatype.md#tlvcommandid)
- [TlvDeviceTypeId](datatype.md#tlvdevicetypeid)
- [TlvEndpointNumber](datatype.md#tlvendpointnumber)
- [TlvEventId](datatype.md#tlveventid)
- [TlvFabricId](datatype.md#tlvfabricid)
- [TlvFabricIndex](datatype.md#tlvfabricindex)
- [TlvGroupId](datatype.md#tlvgroupid)
- [TlvNodeId](datatype.md#tlvnodeid)
- [TlvSubjectId](datatype.md#tlvsubjectid)
- [TlvVendorId](datatype.md#tlvvendorid)

## Type Aliases

### SubjectId

Ƭ **SubjectId**: [`NodeId`](../classes/datatype.NodeId.md)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 6.6.2.1

#### Defined in

[packages/matter.js/src/datatype/SubjectId.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/SubjectId.ts#L16)

## Variables

### TlvAttributeId

• `Const` **TlvAttributeId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`AttributeId`](../classes/datatype.AttributeId.md), `number`\>

Tlv schema for an Attribute Id.

#### Defined in

[packages/matter.js/src/datatype/AttributeId.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/AttributeId.ts#L23)

___

### TlvClusterId

• `Const` **TlvClusterId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`ClusterId`](../classes/datatype.ClusterId.md), `number`\>

Tlv schema for a cluster Id.

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/ClusterId.ts#L24)

___

### TlvCommandId

• `Const` **TlvCommandId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`CommandId`](../classes/datatype.CommandId.md), `number`\>

Tlv schema for an Command Id.

#### Defined in

[packages/matter.js/src/datatype/CommandId.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/CommandId.ts#L23)

___

### TlvDeviceTypeId

• `Const` **TlvDeviceTypeId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`DeviceTypeId`](../classes/datatype.DeviceTypeId.md), `number`\>

Tlv schema for a Device type ID.

#### Defined in

[packages/matter.js/src/datatype/DeviceTypeId.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/DeviceTypeId.ts#L23)

___

### TlvEndpointNumber

• `Const` **TlvEndpointNumber**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`EndpointNumber`](../classes/datatype.EndpointNumber.md), `number`\>

Tlv schema for an Endpoint number.

#### Defined in

[packages/matter.js/src/datatype/EndpointNumber.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/EndpointNumber.ts#L23)

___

### TlvEventId

• `Const` **TlvEventId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`EventId`](../classes/datatype.EventId.md), `number`\>

Tlv schema for an Event Id.

#### Defined in

[packages/matter.js/src/datatype/EventId.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/EventId.ts#L23)

___

### TlvFabricId

• `Const` **TlvFabricId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`FabricId`](../classes/datatype.FabricId.md), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

[packages/matter.js/src/datatype/FabricId.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/FabricId.ts#L24)

___

### TlvFabricIndex

• `Const` **TlvFabricIndex**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`FabricIndex`](../classes/datatype.FabricIndex.md), `number`\>

Tlv Schema for a Fabric Index.

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/FabricIndex.ts#L30)

___

### TlvGroupId

• `Const` **TlvGroupId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`GroupId`](../classes/datatype.GroupId.md), `number`\>

Tlv Schema for a Group Id.

#### Defined in

[packages/matter.js/src/datatype/GroupId.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/GroupId.ts#L30)

___

### TlvNodeId

• `Const` **TlvNodeId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`NodeId`](../classes/datatype.NodeId.md), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/NodeId.ts#L52)

___

### TlvSubjectId

• `Const` **TlvSubjectId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`NodeId`](../classes/datatype.NodeId.md), `number` \| `bigint`\> = `TlvNodeId`

Tlv schema for a Subject Id

#### Defined in

[packages/matter.js/src/datatype/SubjectId.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/SubjectId.ts#L19)

___

### TlvVendorId

• `Const` **TlvVendorId**: [`TlvWrapper`](../classes/tlv.TlvWrapper.md)<[`VendorId`](../classes/datatype.VendorId.md), `number`\>

Data model for a Vendor Identifier.

#### Defined in

[packages/matter.js/src/datatype/VendorId.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/VendorId.ts#L25)
