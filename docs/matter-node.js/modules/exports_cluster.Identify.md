[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Identify

# Namespace: Identify

[exports/cluster](exports_cluster.md).Identify

* THIS FILE IS GENERATED, DO NOT EDIT **

## Table of contents

### Enumerations

- [EffectIdentifier](../enums/exports_cluster.Identify.EffectIdentifier.md)
- [EffectVariant](../enums/exports_cluster.Identify.EffectVariant.md)
- [Feature](../enums/exports_cluster.Identify.Feature.md)
- [IdentifyType](../enums/exports_cluster.Identify.IdentifyType.md)

### Type Aliases

- [Extension](exports_cluster.Identify.md#extension)

### Variables

- [Base](exports_cluster.Identify.md#base)
- [Cluster](exports_cluster.Identify.md#cluster)
- [Complete](exports_cluster.Identify.md#complete)
- [QueryComponent](exports_cluster.Identify.md#querycomponent)
- [TlvIdentifyQueryResponse](exports_cluster.Identify.md#tlvidentifyqueryresponse)
- [TlvIdentifyRequest](exports_cluster.Identify.md#tlvidentifyrequest)
- [TlvTriggerEffectRequest](exports_cluster.Identify.md#tlvtriggereffectrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.Identify.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `query`: ``true``  } ? typeof [`QueryComponent`](exports_cluster.Identify.md#querycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:360

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `identifyTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.md#attribute)<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  }, { `identify`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all Identify clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:148

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `identify`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Identify.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Identify

This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to an observer
(e.g., an installer) which of several nodes and/or endpoints it is. It also supports a multicast request that
any endpoint that is identifying itself to respond to the initiator.

The state of this cluster may be shared on more than one endpoint on a node.

For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, may both share
the same cluster instance and therefore identification state (e.g. single LED on the node).

Zigbee: Note that this cluster cannot be disabled, and remains functional regardless of the setting of the
DeviceEnable attribute in the Basic cluster.

IdentifyCluster supports optional features that you can enable with the IdentifyCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:264

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `identify`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `identifyQuery`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, {}\>

This cluster supports all Identify features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:371

___

### QueryComponent

• `Const` **QueryComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `identifyQuery`: [`Command`](exports_cluster.md#command)<`void`, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A IdentifyCluster supports these elements if it supports feature Query.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:226

___

### TlvIdentifyQueryResponse

• `Const` **TlvIdentifyQueryResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:123

___

### TlvIdentifyRequest

• `Const` **TlvIdentifyRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Identify identify command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:44

___

### TlvTriggerEffectRequest

• `Const` **TlvTriggerEffectRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Identify triggerEffect command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2.6.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/IdentifyCluster.d.ts:93
