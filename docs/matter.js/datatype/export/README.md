[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / datatype/export

# datatype/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [AttributeId](namespaces/AttributeId/README.md)
- [CaseAuthenticatedTag](namespaces/CaseAuthenticatedTag/README.md)
- [ClusterId](namespaces/ClusterId/README.md)
- [CommandId](namespaces/CommandId/README.md)
- [DeviceTypeId](namespaces/DeviceTypeId/README.md)
- [EndpointNumber](namespaces/EndpointNumber/README.md)
- [EventId](namespaces/EventId/README.md)
- [FabricIndex](namespaces/FabricIndex/README.md)
- [FieldId](namespaces/FieldId/README.md)
- [GroupId](namespaces/GroupId/README.md)
- [NodeId](namespaces/NodeId/README.md)
- [VendorId](namespaces/VendorId/README.md)

## Type Aliases

### AttributeId

> **AttributeId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"AttributeId"`\>

An Attribute ID is a 32 bit number and indicates an attribute defined in a cluster specification.

#### See

MatterSpecification.v10.Core § 7.18.2.15

#### Source

[packages/matter.js/src/datatype/AttributeId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/AttributeId.ts#L21)

***

### CaseAuthenticatedTag

> **CaseAuthenticatedTag**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"CaseAuthenticatedTag"`\>

A CASE Authenticated Tag (CAT) is a special subject distinguished name within the Operational Certificate.

#### See

MatterSpecification.v12.Core § 6.6.2.1.2.

#### Source

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L19)

***

### ClusterId

> **ClusterId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"ClusterId"`\>

A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
SHALL define conformance to that specification.

#### See

MatterSpecification.v10.Core § 7.10

#### Source

[packages/matter.js/src/datatype/ClusterId.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/ClusterId.ts#L23)

***

### CommandId

> **CommandId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"CommandId"`\>

A Command ID is a 32 bit number and indicates a command defined in a cluster specification.

#### See

MatterSpecification.v10.Core § 7.18.2.18

#### Source

[packages/matter.js/src/datatype/CommandId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CommandId.ts#L21)

***

### DataVersion

> **DataVersion**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"DataVersion"`\>

A "data version" is an unsigned 32-bit integer that identifies a specific
version of cluster attribute data.

#### See

MatterSpecification.v11.Core § 7.18.2.26

#### Source

[packages/matter.js/src/datatype/DataVersion.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/DataVersion.ts#L19)

***

### DeviceTypeId

> **DeviceTypeId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"DeviceTypeId"`\>

A Device type ID is a 32-bit number that defines the type of the device.

#### See

MatterSpecification.v10.Core § 7.15

#### Source

[packages/matter.js/src/datatype/DeviceTypeId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/DeviceTypeId.ts#L21)

***

### EndpointNumber

> **EndpointNumber**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"EndpointNumber"`\>

A Endpoint Number is a 16-bit number that that indicates an instance of a device type.

#### See

MatterSpecification.v10.Core § 7.18.2.11

#### Source

[packages/matter.js/src/datatype/EndpointNumber.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EndpointNumber.ts#L20)

***

### EntryIndex

> **EntryIndex**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"EntryIndex"`\>

An "entry index" is a 16-bit unsigned integer that identifies a specific
entry in a list.

#### See

MatterSpecification.v11.Core § 7.18.2.23

#### Source

[packages/matter.js/src/datatype/EntryIndex.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EntryIndex.ts#L19)

***

### EventId

> **EventId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"EventId"`\>

An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.

#### See

MatterSpecification.v10.Core § 7.18.2.17

#### Source

[packages/matter.js/src/datatype/EventId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EventId.ts#L21)

***

### EventNumber

> **EventNumber**: [`Branded`](../../util/export/README.md#brandedtb)\<`bigint`, `"EventNumber"`\>

An "event number" is an increasing 64-bit unsigned integer assigned to
cluster events.

#### See

MatterSpecification.v11.Core § 7.14.2.1

#### Source

[packages/matter.js/src/datatype/EventNumber.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EventNumber.ts#L19)

***

### FabricId

> **FabricId**: [`Branded`](../../util/export/README.md#brandedtb)\<`bigint`, `"FabricId"`\>

A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
a particular root CA.

#### See

MatterSpecification.v10.Core § 2.5.1

#### Source

[packages/matter.js/src/datatype/FabricId.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FabricId.ts#L20)

***

### FabricIndex

> **FabricIndex**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"FabricIndex"`\>

Each fabric supported on a node is referenced by fabric-index that is unique on the node. This
fabric-index enables the look-up of the full fabric information from the fabric-index. A fabric-index
of 0 (zero) or null SHALL indicate that there is no fabric associated with the context in which the
fabric-index is being used. If fabric-index is used in a context that is exclusively associated with
a fabric, such as fabric-scoped data model elements, then the fabric-index values SHALL NOT include 0
(zero) or null.

#### See

MatterSpecification.v10.Core § 7.5.2

#### Source

[packages/matter.js/src/datatype/FabricIndex.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FabricIndex.ts#L23)

***

### FieldId

> **FieldId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"FieldId"`\>

A "field ID" is an unsigned 32-bit integer that identifies a specific field
in a cluster struct type.

#### See

MatterSpecification.v11.Core § 7.18.2.18

#### Source

[packages/matter.js/src/datatype/FieldId.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FieldId.ts#L22)

***

### GroupId

> **GroupId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"GroupId"`\>

A Group Identifier (Group ID or GID) is a 16-bit number that identifies a set of Nodes across a
Fabric at the message layer (see Section 4.15, “Group Key Management”). A Group ID can further
be bound to one or more Endpoints within each Node in the group at the interaction layer.

The Group ID space is allocated as described in Table 2, “Group ID Allocations”:
0x0000 - Null or unspecified Group ID
0x0001 - 0xFEFF: Application Group ID, assigned by fabric Administrator
0xFF00 - 0xFFFF: Universal Group ID range reserved for static multicast and anycast identifiers

#### See

MatterSpecification.v10.Core § 2.5.4

#### Source

[packages/matter.js/src/datatype/GroupId.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/GroupId.ts#L27)

***

### NodeId

> **NodeId**: [`Branded`](../../util/export/README.md#brandedtb)\<`bigint`, `"NodeId"`\>

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

#### See

MatterSpecification.v10.Core § 2.5.5

#### Source

[packages/matter.js/src/datatype/NodeId.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/NodeId.ts#L25)

***

### SubjectId

> **SubjectId**: [`NodeId`](README.md#nodeid)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

#### See

MatterSpecification.v10.Core § 6.6.2.1

#### Source

[packages/matter.js/src/datatype/SubjectId.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/SubjectId.ts#L15)

***

### VendorId

> **VendorId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"VendorId"`\>

A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).

#### See

MatterSpecification.v10.Core § 2.5.2

#### Source

[packages/matter.js/src/datatype/VendorId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/VendorId.ts#L21)

## Variables

### TlvAttributeId

> `const` **TlvAttributeId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`AttributeId`](README.md#attributeid), `number`\>

Tlv schema for an Attribute Id.

#### Source

[packages/matter.js/src/datatype/AttributeId.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/AttributeId.ts#L53)

***

### TlvCaseAuthenticatedTag

> `const` **TlvCaseAuthenticatedTag**: [`TlvCaseAuthenticatedTagSchema`](-internal-/classes/TlvCaseAuthenticatedTagSchema.md)

#### Source

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L71)

***

### TlvClusterId

> `const` **TlvClusterId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`ClusterId`](README.md#clusterid), `number`\>

Tlv schema for a cluster Id.

#### Source

[packages/matter.js/src/datatype/ClusterId.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/ClusterId.ts#L66)

***

### TlvCommandId

> `const` **TlvCommandId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`CommandId`](README.md#commandid), `number`\>

Tlv schema for an Command Id.

#### Source

[packages/matter.js/src/datatype/CommandId.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CommandId.ts#L46)

***

### TlvDataVersion

> `const` **TlvDataVersion**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`DataVersion`](README.md#dataversion), `number`\>

TLV schema for a data version.

#### Source

[packages/matter.js/src/datatype/DataVersion.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/DataVersion.ts#L24)

***

### TlvDeviceTypeId

> `const` **TlvDeviceTypeId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`DeviceTypeId`](README.md#devicetypeid), `number`\>

Tlv schema for a Device type ID.

#### Source

[packages/matter.js/src/datatype/DeviceTypeId.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/DeviceTypeId.ts#L46)

***

### TlvEndpointNumber

> `const` **TlvEndpointNumber**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`EndpointNumber`](README.md#endpointnumber), `number`\>

Tlv schema for an Endpoint number.

#### Source

[packages/matter.js/src/datatype/EndpointNumber.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EndpointNumber.ts#L41)

***

### TlvEntryIndex

> `const` **TlvEntryIndex**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`EntryIndex`](README.md#entryindex), `number`\>

TLV schema for an entry index.

#### Source

[packages/matter.js/src/datatype/EntryIndex.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EntryIndex.ts#L24)

***

### TlvEventId

> `const` **TlvEventId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`EventId`](README.md#eventid), `number`\>

Tlv schema for an Event Id.

#### Source

[packages/matter.js/src/datatype/EventId.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EventId.ts#L46)

***

### TlvEventNumber

> `const` **TlvEventNumber**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`EventNumber`](README.md#eventnumber), `number` \| `bigint`\>

TLV schema for a data version.

#### Source

[packages/matter.js/src/datatype/EventNumber.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EventNumber.ts#L24)

***

### TlvFabricId

> `const` **TlvFabricId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`FabricId`](README.md#fabricid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Source

[packages/matter.js/src/datatype/FabricId.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FabricId.ts#L25)

***

### TlvFabricIndex

> `const` **TlvFabricIndex**: [`FabricIndexTlvWrapper`](-internal-/classes/FabricIndexTlvWrapper.md)

Tlv Schema for a Fabric Index.

#### Source

[packages/matter.js/src/datatype/FabricIndex.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FabricIndex.ts#L60)

***

### TlvFieldId

> `const` **TlvFieldId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`FieldId`](README.md#fieldid), `number`\>

TLV schema for a field ID.

#### Source

[packages/matter.js/src/datatype/FieldId.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FieldId.ts#L55)

***

### TlvGroupId

> `const` **TlvGroupId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`GroupId`](README.md#groupid), `number`\>

Tlv Schema for a Group Id.

#### Source

[packages/matter.js/src/datatype/GroupId.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/GroupId.ts#L50)

***

### TlvNodeId

> `const` **TlvNodeId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`NodeId`](README.md#nodeid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Source

[packages/matter.js/src/datatype/NodeId.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/NodeId.ts#L123)

***

### TlvSubjectId

> `const` **TlvSubjectId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`NodeId`](README.md#nodeid), `number` \| `bigint`\> = `TlvNodeId`

Tlv schema for a Subject Id

#### Source

[packages/matter.js/src/datatype/SubjectId.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/SubjectId.ts#L18)

***

### TlvVendorId

> `const` **TlvVendorId**: [`TlvWrapper`](../../tlv/export/classes/TlvWrapper.md)\<[`VendorId`](README.md#vendorid), `number`\>

Data model for a Vendor Identifier.

#### Source

[packages/matter.js/src/datatype/VendorId.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/VendorId.ts#L40)

## Functions

### AttributeId()

> **AttributeId**(`attributeId`, `validate`): [`AttributeId`](README.md#attributeid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `attributeId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`AttributeId`](README.md#attributeid)

#### Source

[packages/matter.js/src/datatype/AttributeId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/AttributeId.ts#L21)

***

### CaseAuthenticatedTag()

> **CaseAuthenticatedTag**(`id`): [`CaseAuthenticatedTag`](README.md#caseauthenticatedtag)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`CaseAuthenticatedTag`](README.md#caseauthenticatedtag)

#### Source

[packages/matter.js/src/datatype/CaseAuthenticatedTag.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CaseAuthenticatedTag.ts#L19)

***

### ClusterId()

> **ClusterId**(`clusterId`, `validate`): [`ClusterId`](README.md#clusterid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `clusterId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`ClusterId`](README.md#clusterid)

#### Source

[packages/matter.js/src/datatype/ClusterId.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/ClusterId.ts#L23)

***

### CommandId()

> **CommandId**(`commandId`, `validate`): [`CommandId`](README.md#commandid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `commandId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`CommandId`](README.md#commandid)

#### Source

[packages/matter.js/src/datatype/CommandId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/CommandId.ts#L21)

***

### DataVersion()

> **DataVersion**(`id`): [`DataVersion`](README.md#dataversion)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`DataVersion`](README.md#dataversion)

#### Source

[packages/matter.js/src/datatype/DataVersion.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/DataVersion.ts#L19)

***

### DeviceTypeId()

> **DeviceTypeId**(`deviceTypeId`, `validate`): [`DeviceTypeId`](README.md#devicetypeid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `deviceTypeId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`DeviceTypeId`](README.md#devicetypeid)

#### Source

[packages/matter.js/src/datatype/DeviceTypeId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/DeviceTypeId.ts#L21)

***

### EndpointNumber()

> **EndpointNumber**(`endpointId`, `validate`): [`EndpointNumber`](README.md#endpointnumber)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `endpointId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`EndpointNumber`](README.md#endpointnumber)

#### Source

[packages/matter.js/src/datatype/EndpointNumber.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EndpointNumber.ts#L20)

***

### EntryIndex()

> **EntryIndex**(`id`): [`EntryIndex`](README.md#entryindex)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`EntryIndex`](README.md#entryindex)

#### Source

[packages/matter.js/src/datatype/EntryIndex.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EntryIndex.ts#L19)

***

### EventId()

> **EventId**(`eventId`, `validate`): [`EventId`](README.md#eventid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `eventId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`EventId`](README.md#eventid)

#### Source

[packages/matter.js/src/datatype/EventId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EventId.ts#L21)

***

### EventNumber()

> **EventNumber**(`id`): [`EventNumber`](README.md#eventnumber)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `number` \| `bigint` |

#### Returns

[`EventNumber`](README.md#eventnumber)

#### Source

[packages/matter.js/src/datatype/EventNumber.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/EventNumber.ts#L19)

***

### FabricId()

> **FabricId**(`value`): [`FabricId`](README.md#fabricid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

[`FabricId`](README.md#fabricid)

#### Source

[packages/matter.js/src/datatype/FabricId.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FabricId.ts#L20)

***

### FabricIndex()

> **FabricIndex**(`value`): [`FabricIndex`](README.md#fabricindex)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`FabricIndex`](README.md#fabricindex)

#### Source

[packages/matter.js/src/datatype/FabricIndex.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FabricIndex.ts#L23)

***

### FieldId()

> **FieldId**(`fieldId`, `validate`): [`FieldId`](README.md#fieldid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `fieldId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`FieldId`](README.md#fieldid)

#### Source

[packages/matter.js/src/datatype/FieldId.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/FieldId.ts#L22)

***

### GroupId()

> **GroupId**(`groupId`, `validate`): [`GroupId`](README.md#groupid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `groupId` | `number` \| `bigint` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`GroupId`](README.md#groupid)

#### Source

[packages/matter.js/src/datatype/GroupId.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/GroupId.ts#L27)

***

### NodeId()

> **NodeId**(`v`): [`NodeId`](README.md#nodeid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| `bigint` |

#### Returns

[`NodeId`](README.md#nodeid)

#### Source

[packages/matter.js/src/datatype/NodeId.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/NodeId.ts#L25)

***

### VendorId()

> **VendorId**(`vendorId`, `validate`): [`VendorId`](README.md#vendorid)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `vendorId` | `number` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`VendorId`](README.md#vendorid)

#### Source

[packages/matter.js/src/datatype/VendorId.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/VendorId.ts#L21)
