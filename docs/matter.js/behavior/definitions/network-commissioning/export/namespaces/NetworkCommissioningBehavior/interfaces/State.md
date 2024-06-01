[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/network-commissioning/export](../../../README.md) / [NetworkCommissioningBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### interfaceEnabled

> **interfaceEnabled**: `boolean`

This attribute shall indicate whether the associated network interface is enabled or not. By default all
network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).

It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which
is used to write the value. In that case, it is possible that the Administrator would have to await
expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before
being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”).

It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a
write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled,
an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the
cable shall NOT re-enable the interface.

On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster
instances with InterfaceEnabled set to true.

#### See

MatterSpecification.v11.Core § 11.8.6.5

#### Inherited from

`StateType.interfaceEnabled`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1150)

***

### lastConnectErrorValue

> **lastConnectErrorValue**: `null` \| `number`

This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an
operational network, using this interface, whether by invocation of the ConnectNetwork command or by
autonomous connection after loss of connectivity or during initial establishment. If no such attempt was
made, or no network configurations exist in the Networks attribute, then this attribute shall be set to
null.

If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus
attribute, then this field shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

#### See

MatterSpecification.v11.Core § 11.8.6.8

#### Inherited from

`StateType.lastConnectErrorValue`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1208)

***

### lastNetworkId

> **lastNetworkId**: `null` \| `Uint8Array`

This attribute shall indicate the NetworkID used in the last attempt to connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

If a network configuration is removed from the Networks attribute using the RemoveNetwork command after
a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

#### See

MatterSpecification.v11.Core § 11.8.6.7

#### Inherited from

`StateType.lastNetworkId`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1187)

***

### lastNetworkingStatus

> **lastNetworkingStatus**: `null` \| [`NetworkCommissioningStatus`](../../../../../../../cluster/export/namespaces/NetworkCommissioning/enumerations/NetworkCommissioningStatus.md)

This attribute shall indicate the status of the last attempt either scan or connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

#### See

MatterSpecification.v11.Core § 11.8.6.6

#### Inherited from

`StateType.lastNetworkingStatus`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1167)

***

### maxNetworks

> **maxNetworks**: `number`

This shall indicate the maximum number of network configuration entries that can be added, based on
available device resources. The length of the Networks attribute list shall be less than or equal to
this value.

#### See

MatterSpecification.v11.Core § 11.8.6.1

#### Inherited from

`StateType.maxNetworks`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1099](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1099)

***

### networks

> **networks**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This attribute shall indicate the network configurations that are usable on the network interface
represented by this cluster server instance.

The order of configurations in the list reflects precedence. That is, any time the Node attempts to
connect to the network it shall attempt to do so using the configurations in Networks Attribute in the
order as they appear in the list.

The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork
and ReorderNetwork commands. In other words, the list shall be stable over

time, unless mutated externally.

Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning
Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their
Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to
those Cluster instances.

#### See

MatterSpecification.v11.Core § 11.8.6.2

#### Inherited from

`StateType.networks`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:1125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L1125)
