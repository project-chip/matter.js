[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ProxyDiscovery

# Namespace: ProxyDiscovery

[cluster/export](cluster_export.md).ProxyDiscovery

## Table of contents

### Variables

- [Cluster](cluster_export.ProxyDiscovery.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{}, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `proxyDiscoverRequest`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, {}\>

Proxy Discovery

This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, “Step 2: Proxy
Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall Section 9.15.7, “Proxy Discovery
& Assignment Flow”.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.15.13

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ProxyDiscoveryCluster.ts#L23)
