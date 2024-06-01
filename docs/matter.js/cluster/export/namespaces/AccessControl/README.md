[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / AccessControl

# Namespace: AccessControl

## Index

### Enumerations

- [AccessControlEntryAuthMode](enumerations/AccessControlEntryAuthMode.md)
- [AccessControlEntryPrivilege](enumerations/AccessControlEntryPrivilege.md)
- [ChangeType](enumerations/ChangeType.md)

### Interfaces

- [AccessControlEntryChangedEvent](interfaces/AccessControlEntryChangedEvent.md)
- [AccessControlEntryStruct](interfaces/AccessControlEntryStruct.md)
- [AccessControlExtensionChangedEvent](interfaces/AccessControlExtensionChangedEvent.md)
- [AccessControlExtensionStruct](interfaces/AccessControlExtensionStruct.md)
- [AccessControlTargetStruct](interfaces/AccessControlTargetStruct.md)
- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:512](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L512)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.accessControlEntriesPerFabric

> `readonly` **accessControlEntriesPerFabric**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of ACL Entries per fabric that are supported by this
server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.7

##### attributes.acl

> `readonly` **acl**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

An attempt to add an Access Control Entry when no more entries are available shall result in a
RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry

added to it. See access control limits.

See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per fabric
supported by the server.

Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the Access
Control Privilege Granting algorithm to determine if a subject has privilege to interact with targets on
the Node.

###### See

MatterSpecification.v11.Core § 9.10.5.3

##### attributes.extension

> `readonly` **extension**: [`OptionalWritableFabricScopedAttribute`](../../interfaces/OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

If present, the Access Control Extensions may be used by Administrators to store arbitrary data related
to fabric’s Access Control Entries.

The Access Control Extension list shall support a single extension entry per supported fabric.

###### See

MatterSpecification.v11.Core § 9.10.5.4

##### attributes.subjectsPerAccessControlEntry

> `readonly` **subjectsPerAccessControlEntry**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of Subjects per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.5

##### attributes.targetsPerAccessControlEntry

> `readonly` **targetsPerAccessControlEntry**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of Targets per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.6

##### events

> `readonly` **events**: `object`

##### events.accessControlEntryChanged

> `readonly` **accessControlEntryChanged**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
Administrator.

  • Each added entry shall generate an event with ChangeType Added.

  • Each changed entry shall generate an event with ChangeType Changed.

  • Each removed entry shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.1

##### events.accessControlExtensionChanged

> `readonly` **accessControlExtensionChanged**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is
changed by an Administrator.

  • Each added extension shall generate an event with ChangeType Added.

  • Each changed extension shall generate an event with ChangeType Changed.

  • Each removed extension shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.2

##### id

> `readonly` **id**: `31` = `0x1f`

##### name

> `readonly` **name**: `"AccessControl"` = `"AccessControl"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:379](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L379)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:515](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L515)

***

### TlvAccessControlEntryChangedEvent

> `const` **TlvAccessControlEntryChangedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the AccessControl accessControlEntryChanged event

#### See

MatterSpecification.v11.Core § 9.10.7.1

#### Type declaration

##### adminNodeId

> **adminNodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid)\>

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

###### See

MatterSpecification.v11.Core § 9.10.7.1.1

##### adminPasscodeId

> **adminPasscodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

###### See

MatterSpecification.v11.Core § 9.10.7.1.2

##### changeType

> **changeType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ChangeType`](enumerations/ChangeType.md)\>

The type of change as appropriate.

###### See

MatterSpecification.v11.Core § 9.10.7.1.3

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### latestValue

> **latestValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

The latest value of the changed entry.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

###### See

MatterSpecification.v11.Core § 9.10.7.1.4

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:273](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L273)

***

### TlvAccessControlEntryStruct

> `const` **TlvAccessControlEntryStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 9.10.4.5

#### Type declaration

##### authMode

> **authMode**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`AccessControlEntryAuthMode`](enumerations/AccessControlEntryAuthMode.md)\>

The AuthMode field shall specify the authentication mode required by this Access Control Entry.

###### See

MatterSpecification.v11.Core § 9.10.4.5.2

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### privilege

> **privilege**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`AccessControlEntryPrivilege`](enumerations/AccessControlEntryPrivilege.md)\>

The privilege field shall specify the level of privilege granted by this Access Control Entry.

NOTE The Proxy View privilege is provisional.

Each privilege builds upon its predecessor, expanding the set of actions that can be performed upon a Node.
Administer is the highest privilege, and is special as it pertains to the administration of privileges
itself, via the Access Control Cluster.

When a Node is granted a particular privilege, it is also implicitly granted all logically lower privilege
levels as well. The following diagram illustrates how the higher privilege levels subsume the lower
privilege levels:

Figure 39. Access Control Privilege Levels

Individual clusters shall define whether attributes are readable, writable, or both readable and writable.
Clusters also shall define which privilege is minimally required to be able to perform a particular read or
write action on those attributes, or invoke particular commands. Device type specifications may further
restrict the privilege required.

The Access Control Cluster shall require the Administer privilege to observe and modify the Access Control
Cluster itself. The Administer privilege shall NOT be used on Access Control Entries which use the Group
auth mode.

###### See

MatterSpecification.v11.Core § 9.10.4.5.1

##### subjects

> **subjects**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid)[]\>

The subjects field shall specify a list of Subject IDs, to which this Access Control Entry grants access.

Device types may impose additional constraints on the minimum number of subjects per Access Control Entry.

An attempt to create an entry with more subjects than the node can support shall result in a
RESOURCE_EXHAUSTED error and the entry shall NOT be created.

Subject ID shall be of type uint64 with semantics depending on the entry’s AuthMode as follows:

Subject Semantics

An empty subjects list indicates a wildcard; that is, this entry shall grant access to any Node that
successfully authenticates via AuthMode. The subjects list shall NOT be empty if the entry’s AuthMode is
PASE.

The PASE AuthMode is reserved for future use (see Section 6.6.2.8, “Bootstrapping of the Access Control
Cluster”). An attempt to write an entry with AuthMode set to PASE shall fail with a status code of
CONSTRAINT_ERROR.

For PASE authentication, the Passcode ID identifies the required passcode verifier, and shall be 0 for the
default commissioning passcode.

For CASE authentication, the Subject ID is a distinguished name within the Operational Certificate shared
during CASE session establishment, the type of which is determined by its range to be one of:

  • a Node ID, which identifies the required source node directly (by ID)

  • a CASE Authenticated Tag, which identifies the required source node indirectly (by tag)

For Group authentication, the Group ID identifies the required group, as defined in the Group Key Management
Cluster.

###### See

MatterSpecification.v11.Core § 9.10.4.5.3

##### targets

> **targets**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

The targets field shall specify a list of AccessControlTargetStruct, which define the clusters on this Node
to which this Access Control Entry grants access.

Device types may impose additional constraints on the minimum number of targets per Access Control Entry.

An attempt to create an entry with more targets than the node can support shall result in a
RESOURCE_EXHAUSTED error and the entry shall NOT be created.

A single target shall contain at least one field (Cluster, Endpoint, or DeviceType), and shall NOT contain
both an Endpoint field and a DeviceType field.

A target grants access based on the presence of fields as follows:

Target Semantics

An empty targets list indicates a wildcard: that is, this entry shall grant access to all cluster instances
on all endpoints on this Node.

###### See

MatterSpecification.v11.Core § 9.10.4.5.4

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L117)

***

### TlvAccessControlExtensionChangedEvent

> `const` **TlvAccessControlExtensionChangedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the AccessControl accessControlExtensionChanged event

#### See

MatterSpecification.v11.Core § 9.10.7.2

#### Type declaration

##### adminNodeId

> **adminNodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`NodeId`](../../../../datatype/export/README.md#nodeid)\>

The Node ID of the Administrator that made the change, if the change occurred via a CASE session.

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

###### See

MatterSpecification.v11.Core § 9.10.7.2.1

##### adminPasscodeId

> **adminPasscodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| `number`\>

The Passcode ID of the Administrator that made the change, if the change occurred via a PASE session.
Non-zero values are reserved for future use (see PasscodeId generation in PBKDFParamRequest).

Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change occurred via a
CASE or PASE session; the other shall be null.

###### See

MatterSpecification.v11.Core § 9.10.7.2.2

##### changeType

> **changeType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ChangeType`](enumerations/ChangeType.md)\>

The type of change as appropriate.

###### See

MatterSpecification.v11.Core § 9.10.7.2.3

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

##### latestValue

> **latestValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

The latest value of the changed extension.

This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if resources
are scarce.

###### See

MatterSpecification.v11.Core § 9.10.7.2.4

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:327](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L327)

***

### TlvAccessControlExtensionStruct

> `const` **TlvAccessControlExtensionStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 9.10.4.6

#### Type declaration

##### data

> **data**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`Uint8Array`\>

This field may be used by manufacturers to store arbitrary TLV-encoded data related to a fabric’s

Access Control Entries.

The contents shall consist of a top-level anonymous list; each list element shall include a profile-specific
tag encoded in fully-qualified form.

Administrators may iterate over this list of elements, and interpret selected elements at their discretion.
The content of each element is not specified, but may be coordinated among manufacturers at their discretion.

###### See

MatterSpecification.v11.Core § 9.10.4.6.1

##### fabricIndex

> **fabricIndex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FabricIndex`](../../../../datatype/export/README.md#fabricindex)\>

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L224)

***

### TlvAccessControlTargetStruct

> `const` **TlvAccessControlTargetStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 9.10.4.4

#### Type declaration

##### cluster

> **cluster**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`ClusterId`](../../../../datatype/export/README.md#clusterid)\>

##### deviceType

> **deviceType**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`DeviceTypeId`](../../../../datatype/export/README.md#devicetypeid)\>

##### endpoint

> **endpoint**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)\>

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L103)
