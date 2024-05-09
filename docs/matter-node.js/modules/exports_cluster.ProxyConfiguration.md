[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

[exports/cluster](exports_cluster.md).ProxyConfiguration

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.ProxyConfiguration.Cluster.md)
- [ConfigurationStruct](../interfaces/exports_cluster.ProxyConfiguration.ConfigurationStruct.md)

### Variables

- [Cluster](exports_cluster.ProxyConfiguration.md#cluster)
- [ClusterInstance](exports_cluster.ProxyConfiguration.md#clusterinstance)
- [Complete](exports_cluster.ProxyConfiguration.md#complete)
- [TlvConfigurationStruct](exports_cluster.ProxyConfiguration.md#tlvconfigurationstruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ProxyConfiguration.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:70

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:72

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `configurationList`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `id`: ``66`` ; `name`: ``"ProxyConfiguration"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.ProxyConfiguration.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:47

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.ProxyConfiguration.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:73

___

### TlvConfigurationStruct

• `Const` **TlvConfigurationStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

**`See`**

MatterSpecification.v11.Core § 9.15.14.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:25
