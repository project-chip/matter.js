[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ValidProxies

# Namespace: ValidProxies

[exports/cluster](exports_cluster.md).ValidProxies

## Table of contents

### Variables

- [Cluster](exports_cluster.ValidProxies.md#cluster)
- [TlvValidProxyStruct](exports_cluster.ValidProxies.md#tlvvalidproxystruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `getValidProxiesRequest`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

Proxy Valid

This cluster provides a means for a device to be told of the valid set of possible proxies that can proxy
subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.15

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ValidProxiesCluster.d.ts:25

___

### TlvValidProxyStruct

• `Const` **TlvValidProxyStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Encapsulates the Node ID of a Valid Proxy.

**`See`**

MatterCoreSpecificationV1_1 § 9.15.15.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ValidProxiesCluster.d.ts:14
