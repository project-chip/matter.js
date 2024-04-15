[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / NetworkInterface

# Interface: NetworkInterface

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).NetworkInterface

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNetworkInterface`](../modules/cluster_export.GeneralDiagnostics.md#tlvnetworkinterface)\>

  ↳ **`NetworkInterface`**

## Table of contents

### Properties

- [hardwareAddress](cluster_export.GeneralDiagnostics.NetworkInterface.md#hardwareaddress)
- [iPv4Addresses](cluster_export.GeneralDiagnostics.NetworkInterface.md#ipv4addresses)
- [iPv6Addresses](cluster_export.GeneralDiagnostics.NetworkInterface.md#ipv6addresses)
- [isOperational](cluster_export.GeneralDiagnostics.NetworkInterface.md#isoperational)
- [name](cluster_export.GeneralDiagnostics.NetworkInterface.md#name)
- [offPremiseServicesReachableIPv4](cluster_export.GeneralDiagnostics.NetworkInterface.md#offpremiseservicesreachableipv4)
- [offPremiseServicesReachableIPv6](cluster_export.GeneralDiagnostics.NetworkInterface.md#offpremiseservicesreachableipv6)
- [type](cluster_export.GeneralDiagnostics.NetworkInterface.md#type)

## Properties

### hardwareAddress

• **hardwareAddress**: `Uint8Array`

This field shall contain the current link-layer address for a 802.3 or IEEE 802.11-2020 network interface
and contain the current extended MAC address for a 802.15.4 interface. The byte order of the octstr shall be
in wire byte order. For addresses values less than 64 bits, the first two bytes shall be zero.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.5

#### Inherited from

TypeFromSchema.hardwareAddress

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L109)

___

### iPv4Addresses

• **iPv4Addresses**: `Uint8Array`[]

This field shall provide a list of the IPv4 addresses that are currently assigned to the network interface.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.6

#### Inherited from

TypeFromSchema.iPv4Addresses

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L116)

___

### iPv6Addresses

• **iPv6Addresses**: `Uint8Array`[]

This field shall provide a list of the unicast IPv6 addresses that are currently assigned to the network
interface. This list shall include the Node’s link-local address and SHOULD include any assigned GUA and ULA
addresses. This list shall NOT include any multicast group addresses to which the Node is subscribed.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.7

#### Inherited from

TypeFromSchema.iPv6Addresses

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L125)

___

### isOperational

• **isOperational**: `boolean`

This field shall indicate if the Node is currently advertising itself operationally on this network
interface and is capable of successfully receiving incoming traffic from other Nodes.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.2

#### Inherited from

TypeFromSchema.isOperational

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L82)

___

### name

• **name**: `string`

This field shall indicate a human-readable (displayable) name for the network interface, that is different
from all other interfaces.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.1

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L74)

___

### offPremiseServicesReachableIPv4

• **offPremiseServicesReachableIPv4**: ``null`` \| `boolean`

This field shall indicate whether the Node is currently able to reach off-premise services it uses by
utilizing IPv4. The value shall be null if the Node does not use such services or does not know whether it
can reach them.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.3

#### Inherited from

TypeFromSchema.offPremiseServicesReachableIPv4

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L91)

___

### offPremiseServicesReachableIPv6

• **offPremiseServicesReachableIPv6**: ``null`` \| `boolean`

This field shall indicate whether the Node is currently able to reach off-premise services it uses by
utilizing IPv6. The value shall be null if the Node does not use such services or does not know whether it
can reach them.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.4

#### Inherited from

TypeFromSchema.offPremiseServicesReachableIPv6

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L100)

___

### type

• **type**: [`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)

This field shall indicate the type of the interface using the InterfaceTypeEnum.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6.8

#### Inherited from

TypeFromSchema.type

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L132)
