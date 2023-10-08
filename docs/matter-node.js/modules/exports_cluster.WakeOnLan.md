[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / WakeOnLan

# Namespace: WakeOnLan

[exports/cluster](exports_cluster.md).WakeOnLan

## Table of contents

### Variables

- [Cluster](exports_cluster.WakeOnLan.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `linkLocalAddress`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`Uint8Array`, `any`\> ; `macAddress`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`Uint8Array`, `any`\>  } ; `id`: ``1283`` ; `name`: ``"WakeOnLan"`` ; `revision`: ``1``  }\>

Wake on LAN

This cluster provides an interface for managing low power mode on a device that supports the Wake On LAN or Wake
On Wireless LAN (WLAN) protocol (see [Wake On LAN]).

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WakeOnLanCluster.d.ts:18
