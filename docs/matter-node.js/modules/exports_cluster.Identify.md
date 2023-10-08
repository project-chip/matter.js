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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.Identify.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `query`: ``true``  } ? typeof [`QueryComponent`](exports_cluster.Identify.md#querycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:463

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `identifyTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.md#attribute)<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: { `identify`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `query`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>

These elements and properties are present in all Identify clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:149

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `identify`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: { `query`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Identify"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `identifyTime`: [`WritableAttribute`](exports_cluster.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](exports_cluster.md#attribute)<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: { `identify`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `query`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Identify.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `query`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

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

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:274

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `identify`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `identifyQuery`: [`Command`](exports_cluster.md#command)<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `triggerEffect`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `query`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``3`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>

This cluster supports all Identify features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:474

___

### QueryComponent

• `Const` **QueryComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `identifyQuery`: [`Command`](exports_cluster.md#command)<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A IdentifyCluster supports these elements if it supports feature Query.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:234

___

### TlvIdentifyQueryResponse

• `Const` **TlvIdentifyQueryResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:124

___

### TlvIdentifyRequest

• `Const` **TlvIdentifyRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Identify identify command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:45

___

### TlvTriggerEffectRequest

• `Const` **TlvTriggerEffectRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Identify triggerEffect command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.2.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:94
