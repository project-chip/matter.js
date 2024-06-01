[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / WakeOnLan

# Namespace: WakeOnLan

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L57)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.linkLocalAddress

> `readonly` **linkLocalAddress**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`Uint8Array`, `any`\>

This shall indicate the current link-local address of the device. Only 128-bit IPv6 link-local addresses
shall be used for this attribute.

NOTE

Some companies may consider MAC Address to be protected data subject to PII handling considerations and
will therefore choose not to include it or read it. The MAC Address can often be determined using ARP in
IPv4 or NDP in IPv6.

###### See

MatterSpecification.v11.Cluster § 1.10.2.2

##### attributes.macAddress

> `readonly` **macAddress**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`Uint8Array`, `any`\>

This shall indicate the current MAC address of the device. Only 48-bit MAC Addresses shall be used for
this attribute as required by the Wake on LAN protocol.

###### See

MatterSpecification.v11.Cluster § 1.10.2.1

##### id

> `readonly` **id**: `1283` = `0x503`

##### name

> `readonly` **name**: `"WakeOnLan"` = `"WakeOnLan"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L19)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L61)
