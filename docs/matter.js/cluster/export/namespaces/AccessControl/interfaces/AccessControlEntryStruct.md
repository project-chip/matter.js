[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AccessControl](../README.md) / AccessControlEntryStruct

# Interface: AccessControlEntryStruct

## See

MatterSpecification.v11.Core § 9.10.4.5

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAccessControlEntryStruct`](../README.md#tlvaccesscontrolentrystruct)\>

## Properties

### authMode

> **authMode**: [`AccessControlEntryAuthMode`](../enumerations/AccessControlEntryAuthMode.md)

The AuthMode field shall specify the authentication mode required by this Access Control Entry.

#### See

MatterSpecification.v11.Core § 9.10.4.5.2

#### Inherited from

`TypeFromSchema.authMode`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L151)

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L213)

***

### privilege

> **privilege**: [`AccessControlEntryPrivilege`](../enumerations/AccessControlEntryPrivilege.md)

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

#### See

MatterSpecification.v11.Core § 9.10.4.5.1

#### Inherited from

`TypeFromSchema.privilege`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L144)

***

### subjects

> **subjects**: `null` \| [`NodeId`](../../../../../datatype/export/README.md#nodeid)[]

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

#### See

MatterSpecification.v11.Core § 9.10.4.5.3

#### Inherited from

`TypeFromSchema.subjects`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L188)

***

### targets

> **targets**: `null` \| [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

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

#### See

MatterSpecification.v11.Core § 9.10.4.5.4

#### Inherited from

`TypeFromSchema.targets`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L211)
