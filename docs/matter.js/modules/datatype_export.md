[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / datatype/export

# Module: datatype/export

## Table of contents

### Namespaces

- [FabricIndex](datatype_export.FabricIndex.md)
- [NodeId](datatype_export.NodeId.md)

### Type Aliases

- [AttributeId](datatype_export.md#attributeid)
- [ClusterId](datatype_export.md#clusterid)
- [CommandId](datatype_export.md#commandid)
- [DeviceTypeId](datatype_export.md#devicetypeid)
- [EndpointNumber](datatype_export.md#endpointnumber)
- [EventId](datatype_export.md#eventid)
- [FabricId](datatype_export.md#fabricid)
- [FabricIndex](datatype_export.md#fabricindex)
- [GroupId](datatype_export.md#groupid)
- [NodeId](datatype_export.md#nodeid)
- [SubjectId](datatype_export.md#subjectid)
- [VendorId](datatype_export.md#vendorid)

### Variables

- [TlvAttributeId](datatype_export.md#tlvattributeid)
- [TlvClusterId](datatype_export.md#tlvclusterid)
- [TlvCommandId](datatype_export.md#tlvcommandid)
- [TlvDeviceTypeId](datatype_export.md#tlvdevicetypeid)
- [TlvEndpointNumber](datatype_export.md#tlvendpointnumber)
- [TlvEventId](datatype_export.md#tlveventid)
- [TlvFabricId](datatype_export.md#tlvfabricid)
- [TlvFabricIndex](datatype_export.md#tlvfabricindex)
- [TlvGroupId](datatype_export.md#tlvgroupid)
- [TlvNodeId](datatype_export.md#tlvnodeid)
- [TlvSubjectId](datatype_export.md#tlvsubjectid)
- [TlvVendorId](datatype_export.md#tlvvendorid)

### Functions

- [AttributeId](datatype_export.md#attributeid-1)
- [ClusterId](datatype_export.md#clusterid-1)
- [CommandId](datatype_export.md#commandid-1)
- [DeviceTypeId](datatype_export.md#devicetypeid-1)
- [EndpointNumber](datatype_export.md#endpointnumber-1)
- [EventId](datatype_export.md#eventid-1)
- [FabricId](datatype_export.md#fabricid-1)
- [FabricIndex](datatype_export.md#fabricindex-1)
- [GroupId](datatype_export.md#groupid-1)
- [NodeId](datatype_export.md#nodeid-1)
- [VendorId](datatype_export.md#vendorid-1)

## Type Aliases

### AttributeId

Ƭ **AttributeId**: [`Branded`](util_export.md#branded)<`number`, ``"AttributeId"``\>

An Attribute ID is a 32 bit number and indicates an attribute defined in a cluster specification.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 7.18.2.15

#### Defined in

[packages/matter.js/src/datatype/AttributeId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/AttributeId.ts#L19)

[packages/matter.js/src/datatype/AttributeId.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/AttributeId.ts#L17)

___

### ClusterId

Ƭ **ClusterId**: [`Branded`](util_export.md#branded)<`number`, ``"ClusterId"``\>

A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
SHALL define conformance to that specification.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 7.10

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/ClusterId.ts#L20)

[packages/matter.js/src/datatype/ClusterId.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/ClusterId.ts#L18)

___

### CommandId

Ƭ **CommandId**: [`Branded`](util_export.md#branded)<`number`, ``"CommandId"``\>

A Command ID is a 32 bit number and indicates a command defined in a cluster specification.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 7.18.2.18

#### Defined in

[packages/matter.js/src/datatype/CommandId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/CommandId.ts#L19)

[packages/matter.js/src/datatype/CommandId.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/CommandId.ts#L17)

___

### DeviceTypeId

Ƭ **DeviceTypeId**: [`Branded`](util_export.md#branded)<`number`, ``"DeviceTypeId"``\>

A Device type ID is a 32-bit number that defines the type of the device.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 7.15

#### Defined in

[packages/matter.js/src/datatype/DeviceTypeId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/DeviceTypeId.ts#L19)

[packages/matter.js/src/datatype/DeviceTypeId.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/DeviceTypeId.ts#L17)

___

### EndpointNumber

Ƭ **EndpointNumber**: [`Branded`](util_export.md#branded)<`number`, ``"EndpointNumber"``\>

A Endpoint Number is a 16-bit number that that indicates an instance of a device type.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 7.18.2.11

#### Defined in

[packages/matter.js/src/datatype/EndpointNumber.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EndpointNumber.ts#L19)

[packages/matter.js/src/datatype/EndpointNumber.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EndpointNumber.ts#L17)

___

### EventId

Ƭ **EventId**: [`Branded`](util_export.md#branded)<`number`, ``"EventId"``\>

An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 7.18.2.17

#### Defined in

[packages/matter.js/src/datatype/EventId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EventId.ts#L19)

[packages/matter.js/src/datatype/EventId.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EventId.ts#L17)

___

### FabricId

Ƭ **FabricId**: [`Branded`](util_export.md#branded)<`bigint`, ``"FabricId"``\>

A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
a particular root CA.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 2.5.1

#### Defined in

[packages/matter.js/src/datatype/FabricId.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricId.ts#L21)

[packages/matter.js/src/datatype/FabricId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricId.ts#L19)

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

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 7.5.2

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricIndex.ts#L24)

[packages/matter.js/src/datatype/FabricIndex.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricIndex.ts#L22)

[packages/matter.js/src/datatype/FabricIndex.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricIndex.ts#L28)

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

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 2.5.4

#### Defined in

[packages/matter.js/src/datatype/GroupId.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/GroupId.ts#L26)

[packages/matter.js/src/datatype/GroupId.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/GroupId.ts#L24)

___

### NodeId

Ƭ **NodeId**: [`Branded`](util_export.md#branded)<`bigint`, ``"NodeId"``\>

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 2.5.5

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L25)

[packages/matter.js/src/datatype/NodeId.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L23)

[packages/matter.js/src/datatype/NodeId.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L29)

___

### SubjectId

Ƭ **SubjectId**: [`NodeId`](datatype_export.md#nodeid)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 6.6.2.1

#### Defined in

[packages/matter.js/src/datatype/SubjectId.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/SubjectId.ts#L16)

___

### VendorId

Ƭ **VendorId**: [`Branded`](util_export.md#branded)<`number`, ``"VendorId"``\>

A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § 2.5.2

#### Defined in

[packages/matter.js/src/datatype/VendorId.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/VendorId.ts#L21)

[packages/matter.js/src/datatype/VendorId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/VendorId.ts#L19)

## Variables

### TlvAttributeId

• `Const` **TlvAttributeId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`AttributeId`](datatype_export.md#attributeid), `number`\>

Tlv schema for an Attribute Id.

#### Defined in

[packages/matter.js/src/datatype/AttributeId.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/AttributeId.ts#L24)

___

### TlvClusterId

• `Const` **TlvClusterId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`ClusterId`](datatype_export.md#clusterid), `number`\>

Tlv schema for a cluster Id.

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/ClusterId.ts#L25)

___

### TlvCommandId

• `Const` **TlvCommandId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`CommandId`](datatype_export.md#commandid), `number`\>

Tlv schema for an Command Id.

#### Defined in

[packages/matter.js/src/datatype/CommandId.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/CommandId.ts#L24)

___

### TlvDeviceTypeId

• `Const` **TlvDeviceTypeId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`DeviceTypeId`](datatype_export.md#devicetypeid), `number`\>

Tlv schema for a Device type ID.

#### Defined in

[packages/matter.js/src/datatype/DeviceTypeId.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/DeviceTypeId.ts#L24)

___

### TlvEndpointNumber

• `Const` **TlvEndpointNumber**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`EndpointNumber`](datatype_export.md#endpointnumber), `number`\>

Tlv schema for an Endpoint number.

#### Defined in

[packages/matter.js/src/datatype/EndpointNumber.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EndpointNumber.ts#L24)

___

### TlvEventId

• `Const` **TlvEventId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`EventId`](datatype_export.md#eventid), `number`\>

Tlv schema for an Event Id.

#### Defined in

[packages/matter.js/src/datatype/EventId.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EventId.ts#L24)

___

### TlvFabricId

• `Const` **TlvFabricId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`FabricId`](datatype_export.md#fabricid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

[packages/matter.js/src/datatype/FabricId.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricId.ts#L26)

___

### TlvFabricIndex

• `Const` **TlvFabricIndex**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`FabricIndex`](datatype_export.md#fabricindex), `undefined` \| `number`\>

Tlv Schema for a Fabric Index.

#### Defined in

[packages/matter.js/src/datatype/FabricIndex.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricIndex.ts#L34)

___

### TlvGroupId

• `Const` **TlvGroupId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`GroupId`](datatype_export.md#groupid), `number`\>

Tlv Schema for a Group Id.

#### Defined in

[packages/matter.js/src/datatype/GroupId.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/GroupId.ts#L31)

___

### TlvNodeId

• `Const` **TlvNodeId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`NodeId`](datatype_export.md#nodeid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L57)

___

### TlvSubjectId

• `Const` **TlvSubjectId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`NodeId`](datatype_export.md#nodeid), `number` \| `bigint`\> = `TlvNodeId`

Tlv schema for a Subject Id

#### Defined in

[packages/matter.js/src/datatype/SubjectId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/SubjectId.ts#L19)

___

### TlvVendorId

• `Const` **TlvVendorId**: [`TlvWrapper`](../classes/tlv_export.TlvWrapper.md)<[`VendorId`](datatype_export.md#vendorid), `number`\>

Data model for a Vendor Identifier.

#### Defined in

[packages/matter.js/src/datatype/VendorId.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/VendorId.ts#L26)

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

[packages/matter.js/src/datatype/AttributeId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/AttributeId.ts#L19)

___

### ClusterId

▸ **ClusterId**(`v`): [`ClusterId`](datatype_export.md#clusterid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`ClusterId`](datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/ClusterId.ts#L20)

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

[packages/matter.js/src/datatype/CommandId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/CommandId.ts#L19)

___

### DeviceTypeId

▸ **DeviceTypeId**(`v`): [`DeviceTypeId`](datatype_export.md#devicetypeid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`DeviceTypeId`](datatype_export.md#devicetypeid)

#### Defined in

[packages/matter.js/src/datatype/DeviceTypeId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/DeviceTypeId.ts#L19)

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

[packages/matter.js/src/datatype/EndpointNumber.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EndpointNumber.ts#L19)

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

[packages/matter.js/src/datatype/EventId.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/EventId.ts#L19)

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

[packages/matter.js/src/datatype/FabricId.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricId.ts#L21)

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

[packages/matter.js/src/datatype/FabricIndex.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/FabricIndex.ts#L24)

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

[packages/matter.js/src/datatype/GroupId.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/GroupId.ts#L26)

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

[packages/matter.js/src/datatype/NodeId.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L25)

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

[packages/matter.js/src/datatype/VendorId.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/VendorId.ts#L21)
