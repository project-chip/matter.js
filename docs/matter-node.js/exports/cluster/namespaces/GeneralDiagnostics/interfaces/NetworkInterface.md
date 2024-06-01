[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralDiagnostics](../README.md) / NetworkInterface

# Interface: NetworkInterface

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

## See

MatterSpecification.v11.Core § 11.11.4.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNetworkInterface`](../README.md#tlvnetworkinterface)\>

## Properties

### hardwareAddress

> **hardwareAddress**: `Uint8Array`

This field shall contain the current link-layer address for a 802.3 or IEEE 802.11-2020 network interface
and contain the current extended MAC address for a 802.15.4 interface. The byte order of the octstr shall be
in wire byte order. For addresses values less than 64 bits, the first two bytes shall be zero.

#### See

MatterSpecification.v11.Core § 11.11.4.6.5

#### Inherited from

`TypeFromSchema.hardwareAddress`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:81

***

### iPv4Addresses

> **iPv4Addresses**: `Uint8Array`[]

This field shall provide a list of the IPv4 addresses that are currently assigned to the network interface.

#### See

MatterSpecification.v11.Core § 11.11.4.6.6

#### Inherited from

`TypeFromSchema.iPv4Addresses`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:87

***

### iPv6Addresses

> **iPv6Addresses**: `Uint8Array`[]

This field shall provide a list of the unicast IPv6 addresses that are currently assigned to the network
interface. This list shall include the Node’s link-local address and SHOULD include any assigned GUA and ULA
addresses. This list shall NOT include any multicast group addresses to which the Node is subscribed.

#### See

MatterSpecification.v11.Core § 11.11.4.6.7

#### Inherited from

`TypeFromSchema.iPv6Addresses`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:95

***

### isOperational

> **isOperational**: `boolean`

This field shall indicate if the Node is currently advertising itself operationally on this network
interface and is capable of successfully receiving incoming traffic from other Nodes.

#### See

MatterSpecification.v11.Core § 11.11.4.6.2

#### Inherited from

`TypeFromSchema.isOperational`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:57

***

### name

> **name**: `string`

This field shall indicate a human-readable (displayable) name for the network interface, that is different
from all other interfaces.

#### See

MatterSpecification.v11.Core § 11.11.4.6.1

#### Inherited from

`TypeFromSchema.name`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:50

***

### offPremiseServicesReachableIPv4

> **offPremiseServicesReachableIPv4**: `null` \| `boolean`

This field shall indicate whether the Node is currently able to reach off-premise services it uses by
utilizing IPv4. The value shall be null if the Node does not use such services or does not know whether it
can reach them.

#### See

MatterSpecification.v11.Core § 11.11.4.6.3

#### Inherited from

`TypeFromSchema.offPremiseServicesReachableIPv4`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:65

***

### offPremiseServicesReachableIPv6

> **offPremiseServicesReachableIPv6**: `null` \| `boolean`

This field shall indicate whether the Node is currently able to reach off-premise services it uses by
utilizing IPv6. The value shall be null if the Node does not use such services or does not know whether it
can reach them.

#### See

MatterSpecification.v11.Core § 11.11.4.6.4

#### Inherited from

`TypeFromSchema.offPremiseServicesReachableIPv6`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:73

***

### type

> **type**: [`InterfaceType`](../enumerations/InterfaceType.md)

This field shall indicate the type of the interface using the InterfaceTypeEnum.

#### See

MatterSpecification.v11.Core § 11.11.4.6.8

#### Inherited from

`TypeFromSchema.type`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:101
