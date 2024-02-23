[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ValidProxies

# Namespace: ValidProxies

[exports/cluster](exports_cluster.md).ValidProxies

## Table of contents

### Variables

- [Cluster](exports_cluster.ValidProxies.md#cluster)
- [TlvValidProxyStruct](exports_cluster.ValidProxies.md#tlvvalidproxystruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `validProxyList`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `commands`: \{ `getValidProxiesRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``68`` ; `name`: ``"ValidProxies"`` ; `revision`: ``1``  }\>

Proxy Valid

This cluster provides a means for a device to be told of the valid set of possible proxies that can proxy
subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.15

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:26

___

### TlvValidProxyStruct

• `Const` **TlvValidProxyStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Encapsulates the Node ID of a Valid Proxy.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.15.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:15
