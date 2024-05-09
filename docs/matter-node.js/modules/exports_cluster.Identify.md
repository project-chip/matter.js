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

### Interfaces

- [Cluster](../interfaces/exports_cluster.Identify.Cluster.md)
- [Complete](../interfaces/exports_cluster.Identify.Complete.md)
- [IdentifyQueryResponse](../interfaces/exports_cluster.Identify.IdentifyQueryResponse.md)
- [IdentifyRequest](../interfaces/exports_cluster.Identify.IdentifyRequest.md)
- [TriggerEffectRequest](../interfaces/exports_cluster.Identify.TriggerEffectRequest.md)

### Variables

- [Base](exports_cluster.Identify.md#base)
- [Cluster](exports_cluster.Identify.md#cluster)
- [ClusterInstance](exports_cluster.Identify.md#clusterinstance)
- [Complete](exports_cluster.Identify.md#complete)
- [CompleteInstance](exports_cluster.Identify.md#completeinstance)
- [QueryComponent](exports_cluster.Identify.md#querycomponent)
- [TlvIdentifyQueryResponse](exports_cluster.Identify.md#tlvidentifyqueryresponse)
- [TlvIdentifyRequest](exports_cluster.Identify.md#tlvidentifyrequest)
- [TlvTriggerEffectRequest](exports_cluster.Identify.md#tlvtriggereffectrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all Identify clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `identifyTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } | - |
| `attributes.identifyTime` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> | This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to identify itself. If this attribute is set to a value other than 0 then the device shall enter its identification state, in order to indicate to an observer which of several nodes and/or endpoints it is. It is RECOMMENDED that this state consists of flashing a light with a period of 0.5 seconds. The IdentifyTime attribute shall be decremented every second while in this state. If this attribute reaches or is set to the value 0 then the device shall terminate its identification state. **`See`** MatterSpecification.v11.Cluster § 1.2.5.1 |
| `attributes.identifyType` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\> | This attribute specifies how the identification state is presented to the user. This field shall contain one of the values listed below: Table 2. Values of the IdentifyType attribute **`See`** MatterSpecification.v11.Cluster § 1.2.5.2 |
| `commands` | \{ `identify`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.identify` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | This command starts or stops the receiving device identifying itself. **`See`** MatterSpecification.v11.Cluster § 1.2.6.1 |
| `commands.triggerEffect` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | This command allows the support of feedback to the user, such as a certain light effect. It is used to allow an implementation to provide visual feedback to the user under certain circumstances such as a color light turning green when it has successfully connected to a network. The use of this command and the effects themselves are entirely up to the implementer to use whenever a visual feedback is useful but it is not the same as and does not replace the identify mechanism used during commissioning. **`See`** MatterSpecification.v11.Cluster § 1.2.6.3 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] | This metadata controls which IdentifyCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `query`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.query` | [`BitFlag`](exports_schema.md#bitflag) | Query Multicast query for identification state |
| `id` | ``3`` | - |
| `name` | ``"Identify"`` | - |
| `revision` | ``4`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:197

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.Identify.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:441

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:443

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `identifyTime`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `identifyType`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`IdentifyType`](../enums/exports_cluster.Identify.IdentifyType.md), `any`\>  } ; `commands`: \{ `identify`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `identifyQuery`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  } ; `flags`: \{ `query`: ``true``  }  }] ; `features`: \{ `query`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``3`` ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>

**`See`**

[Cluster](exports_cluster.Identify.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:311

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.Identify.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:558

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:560

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `identify`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `identifyQuery`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `query`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `triggerEffect`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `query`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Identify"`` ; `revision`: ``4``  }\>

**`See`**

[Complete](exports_cluster.Identify.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:447

___

### QueryComponent

• `Const` **QueryComponent**: `Object`

A IdentifyCluster supports these elements if it supports feature Query.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `identifyQuery`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } |
| `commands.identifyQuery` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:160

___

### TlvIdentifyQueryResponse

• `Const` **TlvIdentifyQueryResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:19

___

### TlvIdentifyRequest

• `Const` **TlvIdentifyRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Identify identify command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:70

___

### TlvTriggerEffectRequest

• `Const` **TlvTriggerEffectRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Identify triggerEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:126
