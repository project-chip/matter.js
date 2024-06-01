[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / AccessControl

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

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:850

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

> `readonly` **acl**: [`WritableFabricScopedAttribute`](../../interfaces/WritableFabricScopedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

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

> `readonly` **extension**: [`OptionalWritableFabricScopedAttribute`](../../interfaces/OptionalWritableFabricScopedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

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

> `readonly` **accessControlEntryChanged**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
Administrator.

  • Each added entry shall generate an event with ChangeType Added.

  • Each changed entry shall generate an event with ChangeType Changed.

  • Each removed entry shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.1

##### events.accessControlExtensionChanged

> `readonly` **accessControlExtensionChanged**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is
changed by an Administrator.

  • Each added extension shall generate an event with ChangeType Added.

  • Each changed extension shall generate an event with ChangeType Changed.

  • Each removed extension shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.2

##### id

> `readonly` **id**: `31`

##### name

> `readonly` **name**: `"AccessControl"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:445

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:853

***

### TlvAccessControlEntryChangedEvent

> `const` **TlvAccessControlEntryChangedEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the AccessControl accessControlEntryChanged event

#### See

MatterSpecification.v11.Core § 9.10.7.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:236

***

### TlvAccessControlEntryStruct

> `const` **TlvAccessControlEntryStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 9.10.4.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:86

***

### TlvAccessControlExtensionChangedEvent

> `const` **TlvAccessControlExtensionChangedEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the AccessControl accessControlExtensionChanged event

#### See

MatterSpecification.v11.Core § 9.10.7.2

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:382

***

### TlvAccessControlExtensionStruct

> `const` **TlvAccessControlExtensionStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 9.10.4.6

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:192

***

### TlvAccessControlTargetStruct

> `const` **TlvAccessControlTargetStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 9.10.4.4

#### Source

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:73
