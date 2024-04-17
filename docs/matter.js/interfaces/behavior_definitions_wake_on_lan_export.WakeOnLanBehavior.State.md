[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/wake-on-lan/export](../modules/behavior_definitions_wake_on_lan_export.md) / [WakeOnLanBehavior](../modules/behavior_definitions_wake_on_lan_export.WakeOnLanBehavior.md) / State

# Interface: State

[behavior/definitions/wake-on-lan/export](../modules/behavior_definitions_wake_on_lan_export.md).[WakeOnLanBehavior](../modules/behavior_definitions_wake_on_lan_export.WakeOnLanBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_wake_on_lan_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [linkLocalAddress](behavior_definitions_wake_on_lan_export.WakeOnLanBehavior.State.md#linklocaladdress)
- [macAddress](behavior_definitions_wake_on_lan_export.WakeOnLanBehavior.State.md#macaddress)

## Properties

### linkLocalAddress

• `Optional` **linkLocalAddress**: `Uint8Array`

This shall indicate the current link-local address of the device. Only 128-bit IPv6 link-local addresses
shall be used for this attribute.

NOTE

Some companies may consider MAC Address to be protected data subject to PII handling considerations and
will therefore choose not to include it or read it. The MAC Address can often be determined using ARP in
IPv4 or NDP in IPv6.

**`See`**

MatterSpecification.v11.Cluster § 1.10.2.2

#### Inherited from

StateType.linkLocalAddress

#### Defined in

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L45)

___

### macAddress

• `Optional` **macAddress**: `Uint8Array`

This shall indicate the current MAC address of the device. Only 48-bit MAC Addresses shall be used for
this attribute as required by the Wake on LAN protocol.

**`See`**

MatterSpecification.v11.Cluster § 1.10.2.1

#### Inherited from

StateType.macAddress

#### Defined in

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L31)
