[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/wake-on-lan/export](../../../README.md) / [WakeOnLanBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### linkLocalAddress?

> `optional` **linkLocalAddress**: `Uint8Array`

This shall indicate the current link-local address of the device. Only 128-bit IPv6 link-local addresses
shall be used for this attribute.

NOTE

Some companies may consider MAC Address to be protected data subject to PII handling considerations and
will therefore choose not to include it or read it. The MAC Address can often be determined using ARP in
IPv4 or NDP in IPv6.

#### See

MatterSpecification.v11.Cluster § 1.10.2.2

#### Inherited from

`StateType.linkLocalAddress`

#### Source

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L45)

***

### macAddress?

> `optional` **macAddress**: `Uint8Array`

This shall indicate the current MAC address of the device. Only 48-bit MAC Addresses shall be used for
this attribute as required by the Wake on LAN protocol.

#### See

MatterSpecification.v11.Cluster § 1.10.2.1

#### Inherited from

`StateType.macAddress`

#### Source

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L31)
