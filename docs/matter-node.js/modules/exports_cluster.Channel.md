[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Channel

# Namespace: Channel

[exports/cluster](exports_cluster.md).Channel

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Channel.Feature.md)
- [LineupInfoType](../enums/exports_cluster.Channel.LineupInfoType.md)
- [Status](../enums/exports_cluster.Channel.Status.md)

### Type Aliases

- [Extension](exports_cluster.Channel.md#extension)

### Variables

- [Base](exports_cluster.Channel.md#base)
- [ChannelListComponent](exports_cluster.Channel.md#channellistcomponent)
- [ChannelListOrLineupInfoComponent](exports_cluster.Channel.md#channellistorlineupinfocomponent)
- [Cluster](exports_cluster.Channel.md#cluster)
- [Complete](exports_cluster.Channel.md#complete)
- [LineupInfoComponent](exports_cluster.Channel.md#lineupinfocomponent)
- [TlvChangeChannelByNumberRequest](exports_cluster.Channel.md#tlvchangechannelbynumberrequest)
- [TlvChangeChannelRequest](exports_cluster.Channel.md#tlvchangechannelrequest)
- [TlvChangeChannelResponse](exports_cluster.Channel.md#tlvchangechannelresponse)
- [TlvChannelInfoStruct](exports_cluster.Channel.md#tlvchannelinfostruct)
- [TlvLineupInfoStruct](exports_cluster.Channel.md#tlvlineupinfostruct)
- [TlvSkipChannelRequest](exports_cluster.Channel.md#tlvskipchannelrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](exports_cluster.Channel.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `channelList`: ``true``  } ? typeof [`ChannelListComponent`](exports_cluster.Channel.md#channellistcomponent) : {} & `SF` extends { `lineupInfo`: ``true``  } ? typeof [`LineupInfoComponent`](exports_cluster.Channel.md#lineupinfocomponent) : {} & `SF` extends { `channelList`: ``true``  } \| { `lineupInfo`: ``true``  } ? typeof [`ChannelListOrLineupInfoComponent`](exports_cluster.Channel.md#channellistorlineupinfocomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:677

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `currentChannel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } ; `commands`: { `changeChannelByNumber`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>

These elements and properties are present in all Channel clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:191

___

### ChannelListComponent

• `Const` **ChannelListComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `channelList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  }  }\>

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:299

___

### ChannelListOrLineupInfoComponent

• `Const` **ChannelListOrLineupInfoComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `commands`: { `changeChannel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  }  }\>

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:376

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: { `changeChannelByNumber`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: {} ; `features`: { `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Channel"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `currentChannel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  } ; `commands`: { `changeChannelByNumber`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1284`` ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & { `with`: <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Channel.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>  }

Channel

This cluster provides an interface for controlling the current Channel on a device or endpoint.

ChannelCluster supports optional features that you can enable with the ChannelCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:422

___

### Complete

• `Const` **Complete**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `channelList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `clusterRevision`: [`Attribute`](exports_cluster.md#attribute)<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> ; `eventList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `lineup`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  }  } ; `commands`: { `changeChannel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> & { `isConditional`: ``true`` ; `mandatoryIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: readonly [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `changeChannelByNumber`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: { `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  } ; `id`: ``1284`` & [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"Channel"`` ; `revision`: ``1``  }\>

This cluster supports all Channel features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:694

___

### LineupInfoComponent

• `Const` **LineupInfoComponent**: [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<{ `attributes`: { `lineup`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md) \| ``null``, `any`\>  }  }\>

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:348

___

### TlvChangeChannelByNumberRequest

• `Const` **TlvChangeChannelByNumberRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Channel changeChannelByNumber command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:61

___

### TlvChangeChannelRequest

• `Const` **TlvChangeChannelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Channel changeChannel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:125

___

### TlvChangeChannelResponse

• `Const` **TlvChangeChannelResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to a ChangeChannel command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:155

___

### TlvChannelInfoStruct

• `Const` **TlvChannelInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:19

___

### TlvLineupInfoStruct

• `Const` **TlvLineupInfoStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.5.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:104

___

### TlvSkipChannelRequest

• `Const` **TlvSkipChannelRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Channel skipChannel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ChannelCluster.d.ts:80
