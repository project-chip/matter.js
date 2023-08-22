[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

[exports/cluster](exports_cluster.md).ProxyConfiguration

## Table of contents

### Variables

- [Cluster](exports_cluster.ProxyConfiguration.md#cluster)
- [TlvConfigurationStruct](exports_cluster.ProxyConfiguration.md#tlvconfigurationstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), {}, {}\>

Proxy Configuration

This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.14

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ProxyConfigurationCluster.d.ts:33

___

### TlvConfigurationStruct

• `Const` **TlvConfigurationStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.14.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ProxyConfigurationCluster.d.ts:22
