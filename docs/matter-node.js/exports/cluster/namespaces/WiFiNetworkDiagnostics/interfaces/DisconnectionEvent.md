[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [WiFiNetworkDiagnostics](../README.md) / DisconnectionEvent

# Interface: DisconnectionEvent

Body of the WiFiNetworkDiagnostics disconnection event

## See

MatterSpecification.v11.Core § 11.14.8.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvDisconnectionEvent`](../README.md#tlvdisconnectionevent)\>

## Properties

### reasonCode

> **reasonCode**: `number`

This field shall contain the Reason Code field value for the Disassociation or Deauthentication event that
caused the disconnection and the value shall align with Table 9-49 "Reason codes" of IEEE 802.11-2020.

#### See

MatterSpecification.v11.Core § 11.14.8.1.1

#### Inherited from

`TypeFromSchema.reasonCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:83
