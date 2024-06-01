[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/datatype

# exports/datatype

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

packages/matter.js/dist/esm/datatype/AttributeId.d.ts:14

***

### CaseAuthenticatedTag

> **CaseAuthenticatedTag**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"CaseAuthenticatedTag"`\>

A CASE Authenticated Tag (CAT) is a special subject distinguished name within the Operational Certificate.

#### See

MatterSpecification.v12.Core § 6.6.2.1.2.

#### Source

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:14

***

### ClusterId

> **ClusterId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"ClusterId"`\>

A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
SHALL define conformance to that specification.

#### See

MatterSpecification.v10.Core § 7.10

#### Source

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:16

***

### CommandId

> **CommandId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"CommandId"`\>

A Command ID is a 32 bit number and indicates a command defined in a cluster specification.

#### See

MatterSpecification.v10.Core § 7.18.2.18

#### Source

packages/matter.js/dist/esm/datatype/CommandId.d.ts:14

***

### DataVersion

> **DataVersion**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"DataVersion"`\>

A "data version" is an unsigned 32-bit integer that identifies a specific
version of cluster attribute data.

#### See

MatterSpecification.v11.Core § 7.18.2.26

#### Source

packages/matter.js/dist/esm/datatype/DataVersion.d.ts:15

***

### DeviceTypeId

> **DeviceTypeId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"DeviceTypeId"`\>

A Device type ID is a 32-bit number that defines the type of the device.

#### See

MatterSpecification.v10.Core § 7.15

#### Source

packages/matter.js/dist/esm/datatype/DeviceTypeId.d.ts:14

***

### EndpointNumber

> **EndpointNumber**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"EndpointNumber"`\>

A Endpoint Number is a 16-bit number that that indicates an instance of a device type.

#### See

MatterSpecification.v10.Core § 7.18.2.11

#### Source

packages/matter.js/dist/esm/datatype/EndpointNumber.d.ts:14

***

### EntryIndex

> **EntryIndex**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"EntryIndex"`\>

An "entry index" is a 16-bit unsigned integer that identifies a specific
entry in a list.

#### See

MatterSpecification.v11.Core § 7.18.2.23

#### Source

packages/matter.js/dist/esm/datatype/EntryIndex.d.ts:15

***

### EventId

> **EventId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"EventId"`\>

An EVent ID is a 32 bit number and indicates an event defined in a cluster specification.

#### See

MatterSpecification.v10.Core § 7.18.2.17

#### Source

packages/matter.js/dist/esm/datatype/EventId.d.ts:14

***

### EventNumber

> **EventNumber**: [`Branded`](../../util/export/README.md#brandedtb)\<`bigint`, `"EventNumber"`\>

An "event number" is an increasing 64-bit unsigned integer assigned to
cluster events.

#### See

MatterSpecification.v11.Core § 7.14.2.1

#### Source

packages/matter.js/dist/esm/datatype/EventNumber.d.ts:15

***

### FabricId

> **FabricId**: [`Branded`](../../util/export/README.md#brandedtb)\<`bigint`, `"FabricId"`\>

A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
a particular root CA.

#### See

MatterSpecification.v10.Core § 2.5.1

#### Source

packages/matter.js/dist/esm/datatype/FabricId.d.ts:15

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

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:19

***

### FieldId

> **FieldId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"FieldId"`\>

A "field ID" is an unsigned 32-bit integer that identifies a specific field
in a cluster struct type.

#### See

MatterSpecification.v11.Core § 7.18.2.18

#### Source

packages/matter.js/dist/esm/datatype/FieldId.d.ts:15

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

packages/matter.js/dist/esm/datatype/GroupId.d.ts:21

***

### NodeId

> **NodeId**: [`Branded`](../../util/export/README.md#brandedtb)\<`bigint`, `"NodeId"`\>

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

#### See

MatterSpecification.v10.Core § 2.5.5

#### Source

packages/matter.js/dist/esm/datatype/NodeId.d.ts:16

***

### SubjectId

> **SubjectId**: [`NodeId`](README.md#nodeid)

The meaning of a "Subject" is primarily that of describing the source for an action, using a given
authentication method provided by the Secure Channel architecture.

#### See

MatterSpecification.v10.Core § 6.6.2.1

#### Source

packages/matter.js/dist/esm/datatype/SubjectId.d.ts:13

***

### VendorId

> **VendorId**: [`Branded`](../../util/export/README.md#brandedtb)\<`number`, `"VendorId"`\>

A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).

#### See

MatterSpecification.v10.Core § 2.5.2

#### Source

packages/matter.js/dist/esm/datatype/VendorId.d.ts:16

## Variables

### TlvAttributeId

> `const` **TlvAttributeId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`AttributeId`](README.md#attributeid), `number`\>

Tlv schema for an Attribute Id.

#### Source

packages/matter.js/dist/esm/datatype/AttributeId.d.ts:20

***

### TlvCaseAuthenticatedTag

> `const` **TlvCaseAuthenticatedTag**: [`TlvCaseAuthenticatedTagSchema`](-internal-/classes/TlvCaseAuthenticatedTagSchema.md)

#### Source

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:26

***

### TlvClusterId

> `const` **TlvClusterId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`ClusterId`](README.md#clusterid), `number`\>

Tlv schema for a cluster Id.

#### Source

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:23

***

### TlvCommandId

> `const` **TlvCommandId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`CommandId`](README.md#commandid), `number`\>

Tlv schema for an Command Id.

#### Source

packages/matter.js/dist/esm/datatype/CommandId.d.ts:19

***

### TlvDataVersion

> `const` **TlvDataVersion**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`DataVersion`](README.md#dataversion), `number`\>

TLV schema for a data version.

#### Source

packages/matter.js/dist/esm/datatype/DataVersion.d.ts:17

***

### TlvDeviceTypeId

> `const` **TlvDeviceTypeId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`DeviceTypeId`](README.md#devicetypeid), `number`\>

Tlv schema for a Device type ID.

#### Source

packages/matter.js/dist/esm/datatype/DeviceTypeId.d.ts:19

***

### TlvEndpointNumber

> `const` **TlvEndpointNumber**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`EndpointNumber`](README.md#endpointnumber), `number`\>

Tlv schema for an Endpoint number.

#### Source

packages/matter.js/dist/esm/datatype/EndpointNumber.d.ts:19

***

### TlvEntryIndex

> `const` **TlvEntryIndex**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`EntryIndex`](README.md#entryindex), `number`\>

TLV schema for an entry index.

#### Source

packages/matter.js/dist/esm/datatype/EntryIndex.d.ts:17

***

### TlvEventId

> `const` **TlvEventId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`EventId`](README.md#eventid), `number`\>

Tlv schema for an Event Id.

#### Source

packages/matter.js/dist/esm/datatype/EventId.d.ts:19

***

### TlvEventNumber

> `const` **TlvEventNumber**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`EventNumber`](README.md#eventnumber), `number` \| `bigint`\>

TLV schema for a data version.

#### Source

packages/matter.js/dist/esm/datatype/EventNumber.d.ts:17

***

### TlvFabricId

> `const` **TlvFabricId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`FabricId`](README.md#fabricid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Source

packages/matter.js/dist/esm/datatype/FabricId.d.ts:17

***

### TlvFabricIndex

> `const` **TlvFabricIndex**: [`FabricIndexTlvWrapper`](-internal-/classes/FabricIndexTlvWrapper.md)

Tlv Schema for a Fabric Index.

#### Source

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:29

***

### TlvFieldId

> `const` **TlvFieldId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`FieldId`](README.md#fieldid), `number`\>

TLV schema for a field ID.

#### Source

packages/matter.js/dist/esm/datatype/FieldId.d.ts:21

***

### TlvGroupId

> `const` **TlvGroupId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`GroupId`](README.md#groupid), `number`\>

Tlv Schema for a Group Id.

#### Source

packages/matter.js/dist/esm/datatype/GroupId.d.ts:27

***

### TlvNodeId

> `const` **TlvNodeId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`NodeId`](README.md#nodeid), `number` \| `bigint`\>

Tlv schema for a Node Identifier.

#### Source

packages/matter.js/dist/esm/datatype/NodeId.d.ts:57

***

### TlvSubjectId

> `const` **TlvSubjectId**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvWrapper"`](-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvWrapper/README.md)

Tlv schema for a Subject Id

#### Source

packages/matter.js/dist/esm/datatype/SubjectId.d.ts:15

***

### TlvVendorId

> `const` **TlvVendorId**: [`TlvWrapper`](../tlv/classes/TlvWrapper.md)\<[`VendorId`](README.md#vendorid), `number`\>

Data model for a Vendor Identifier.

#### Source

packages/matter.js/dist/esm/datatype/VendorId.d.ts:21

## Functions

### AttributeId()

> **AttributeId**(`attributeId`, `validate`?): [`AttributeId`](README.md#attributeid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributeId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`AttributeId`](README.md#attributeid)

#### Source

packages/matter.js/dist/esm/datatype/AttributeId.d.ts:14

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

packages/matter.js/dist/esm/datatype/CaseAuthenticatedTag.d.ts:14

***

### ClusterId()

> **ClusterId**(`clusterId`, `validate`?): [`ClusterId`](README.md#clusterid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`ClusterId`](README.md#clusterid)

#### Source

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:16

***

### CommandId()

> **CommandId**(`commandId`, `validate`?): [`CommandId`](README.md#commandid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commandId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`CommandId`](README.md#commandid)

#### Source

packages/matter.js/dist/esm/datatype/CommandId.d.ts:14

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

packages/matter.js/dist/esm/datatype/DataVersion.d.ts:15

***

### DeviceTypeId()

> **DeviceTypeId**(`deviceTypeId`, `validate`?): [`DeviceTypeId`](README.md#devicetypeid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `deviceTypeId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`DeviceTypeId`](README.md#devicetypeid)

#### Source

packages/matter.js/dist/esm/datatype/DeviceTypeId.d.ts:14

***

### EndpointNumber()

> **EndpointNumber**(`endpointId`, `validate`?): [`EndpointNumber`](README.md#endpointnumber)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`EndpointNumber`](README.md#endpointnumber)

#### Source

packages/matter.js/dist/esm/datatype/EndpointNumber.d.ts:14

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

packages/matter.js/dist/esm/datatype/EntryIndex.d.ts:15

***

### EventId()

> **EventId**(`eventId`, `validate`?): [`EventId`](README.md#eventid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`EventId`](README.md#eventid)

#### Source

packages/matter.js/dist/esm/datatype/EventId.d.ts:14

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

packages/matter.js/dist/esm/datatype/EventNumber.d.ts:15

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

packages/matter.js/dist/esm/datatype/FabricId.d.ts:15

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

packages/matter.js/dist/esm/datatype/FabricIndex.d.ts:19

***

### FieldId()

> **FieldId**(`fieldId`, `validate`?): [`FieldId`](README.md#fieldid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fieldId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`FieldId`](README.md#fieldid)

#### Source

packages/matter.js/dist/esm/datatype/FieldId.d.ts:15

***

### GroupId()

> **GroupId**(`groupId`, `validate`?): [`GroupId`](README.md#groupid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `groupId` | `number` \| `bigint` |
| `validate`? | `boolean` |

#### Returns

[`GroupId`](README.md#groupid)

#### Source

packages/matter.js/dist/esm/datatype/GroupId.d.ts:21

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

packages/matter.js/dist/esm/datatype/NodeId.d.ts:16

***

### VendorId()

> **VendorId**(`vendorId`, `validate`?): [`VendorId`](README.md#vendorid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorId` | `number` |
| `validate`? | `boolean` |

#### Returns

[`VendorId`](README.md#vendorid)

#### Source

packages/matter.js/dist/esm/datatype/VendorId.d.ts:16
