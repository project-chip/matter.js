[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / WakeOnLan

# Namespace: WakeOnLan

[cluster/export](cluster_export.md).WakeOnLan

## Table of contents

### Variables

- [Cluster](cluster_export.WakeOnLan.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `linkLocalAddress`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`Uint8Array`, `any`\> ; `macAddress`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`Uint8Array`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Wake on LAN

This cluster provides an interface for managing low power mode on a device that supports the Wake On LAN or Wake
On Wireless LAN (WLAN) protocol (see [Wake On LAN]).

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.10

#### Defined in

[packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WakeOnLanCluster.ts#L22)
