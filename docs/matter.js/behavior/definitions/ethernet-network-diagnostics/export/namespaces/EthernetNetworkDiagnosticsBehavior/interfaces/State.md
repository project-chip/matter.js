[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/ethernet-network-diagnostics/export](../../../README.md) / [EthernetNetworkDiagnosticsBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### carrierDetect?

> `optional` **carrierDetect**: `null` \| `boolean`

The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
ethernet network interface. A value of null shall indicate that the interface is not currently
configured or operational.

#### See

MatterSpecification.v11.Core § 11.15.6.8

#### Inherited from

`StateType.carrierDetect`

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L231)

***

### fullDuplex?

> `optional` **fullDuplex**: `null` \| `boolean`

The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
mode. A value of null shall indicate that the interface is not currently configured or operational.

#### See

MatterSpecification.v11.Core § 11.15.6.2

#### Inherited from

`StateType.fullDuplex`

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L222)

***

### phyRate?

> `optional` **phyRate**: `null` \| [`PHYRate`](../../../../../../../cluster/export/namespaces/EthernetNetworkDiagnostics/enumerations/PHYRate.md)

The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer
of the Node. A value of null shall indicate that the interface is not currently configured or
operational.

#### See

MatterSpecification.v11.Core § 11.15.6.1

#### Inherited from

`StateType.phyRate`

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L214)

***

### timeSinceReset?

> `optional` **timeSinceReset**: `number` \| `bigint`

#### See

MatterSpecification.v11.Core § 11.15.6

#### Inherited from

`StateType.timeSinceReset`

#### Source

[packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts:236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/EthernetNetworkDiagnosticsCluster.ts#L236)
