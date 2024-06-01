[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/access-control/export](../../../README.md) / [AccessControlBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### accessControlEntriesPerFabric

> **accessControlEntriesPerFabric**: `number`

This attribute shall provide the minimum number of ACL Entries per fabric that are supported by this
server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

#### See

MatterSpecification.v11.Core § 9.10.5.7

#### Inherited from

`StateType.accessControlEntriesPerFabric`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:455](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L455)

***

### acl

> **acl**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

An attempt to add an Access Control Entry when no more entries are available shall result in a
RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry

added to it. See access control limits.

See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per fabric
supported by the server.

Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the Access
Control Privilege Granting algorithm to determine if a subject has privilege to interact with targets on
the Node.

#### See

MatterSpecification.v11.Core § 9.10.5.3

#### Inherited from

`StateType.acl`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:400](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L400)

***

### extension?

> `optional` **extension**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

If present, the Access Control Extensions may be used by Administrators to store arbitrary data related
to fabric’s Access Control Entries.

The Access Control Extension list shall support a single extension entry per supported fabric.

#### See

MatterSpecification.v11.Core § 9.10.5.4

#### Inherited from

`StateType.extension`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:414](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L414)

***

### subjectsPerAccessControlEntry

> **subjectsPerAccessControlEntry**: `number`

This attribute shall provide the minimum number of Subjects per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

#### See

MatterSpecification.v11.Core § 9.10.5.5

#### Inherited from

`StateType.subjectsPerAccessControlEntry`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:430](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L430)

***

### targetsPerAccessControlEntry

> **targetsPerAccessControlEntry**: `number`

This attribute shall provide the minimum number of Targets per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

#### See

MatterSpecification.v11.Core § 9.10.5.6

#### Inherited from

`StateType.targetsPerAccessControlEntry`

#### Source

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:442](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L442)
