[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

[exports/cluster](exports_cluster.md).ProxyConfiguration

## Table of contents

### Variables

- [Cluster](exports_cluster.ProxyConfiguration.md#cluster)
- [TlvConfigurationStruct](exports_cluster.ProxyConfiguration.md#tlvconfigurationstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `configurationList`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `id`: ``66`` ; `name`: ``"ProxyConfiguration"`` ; `revision`: ``1``  }\>

Proxy Configuration

This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:34

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

MatterCoreSpecificationV1_1 § 9.15.14.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:23
