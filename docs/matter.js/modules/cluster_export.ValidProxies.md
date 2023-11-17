[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ValidProxies

# Namespace: ValidProxies

[cluster/export](cluster_export.md).ValidProxies

## Table of contents

### Variables

- [Cluster](cluster_export.ValidProxies.md#cluster)
- [TlvValidProxyStruct](cluster_export.ValidProxies.md#tlvvalidproxystruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `validProxyList`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>[], `any`\>  } ; `commands`: { `getValidProxiesRequest`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  } ; `id`: ``68`` = 0x44; `name`: ``"ValidProxies"`` = "ValidProxies"; `revision`: ``1`` = 1 }\>

Proxy Valid

This cluster provides a means for a device to be told of the valid set of possible proxies that can proxy
subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.15.15

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:33](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L33)

___

### TlvValidProxyStruct

• `Const` **TlvValidProxyStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>

Encapsulates the Node ID of a Valid Proxy.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.15.15.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:23](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L23)
