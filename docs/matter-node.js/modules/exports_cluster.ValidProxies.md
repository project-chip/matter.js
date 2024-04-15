[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ValidProxies

# Namespace: ValidProxies

[exports/cluster](exports_cluster.md).ValidProxies

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.ValidProxies.Cluster.md)
- [ValidProxyStruct](../interfaces/exports_cluster.ValidProxies.ValidProxyStruct.md)

### Variables

- [Cluster](exports_cluster.ValidProxies.md#cluster)
- [ClusterInstance](exports_cluster.ValidProxies.md#clusterinstance)
- [Complete](exports_cluster.ValidProxies.md#complete)
- [TlvValidProxyStruct](exports_cluster.ValidProxies.md#tlvvalidproxystruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ValidProxies.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:59

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:61

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `validProxyList`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `getValidProxiesRequest`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``68`` ; `name`: ``"ValidProxies"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.ValidProxies.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:30

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.ValidProxies.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:62

___

### TlvValidProxyStruct

• `Const` **TlvValidProxyStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Encapsulates the Node ID of a Valid Proxy.

**`See`**

MatterSpecification.v11.Core § 9.15.15.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:17
