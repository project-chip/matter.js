[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / WakeOnLan

# Namespace: WakeOnLan

[cluster/export](cluster_export.md).WakeOnLan

## Table of contents

### Variables

- [Cluster](cluster_export.WakeOnLan.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `linkLocalAddress`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`Uint8Array`, `any`\> ; `macAddress`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`Uint8Array`, `any`\>  } ; `id`: ``1283`` = 0x503; `name`: ``"WakeOnLan"`` = "WakeOnLan"; `revision`: ``1`` = 1 }\>

Wake on LAN

This cluster provides an interface for managing low power mode on a device that supports the Wake On LAN or Wake
On Wireless LAN (WLAN) protocol (see [Wake On LAN]).

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.10

#### Defined in

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:23](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L23)
