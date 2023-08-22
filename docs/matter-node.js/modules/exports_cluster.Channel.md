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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.Channel.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `channelList`: ``true``  } ? typeof [`ChannelListComponent`](exports_cluster.Channel.md#channellistcomponent) : {} & `SF` extends { `lineupInfo`: ``true``  } ? typeof [`LineupInfoComponent`](exports_cluster.Channel.md#lineupinfocomponent) : {} & `SF` extends { `channelList`: ``true``  } \| { `lineupInfo`: ``true``  } ? typeof [`ChannelListOrLineupInfoComponent`](exports_cluster.Channel.md#channellistorlineupinfocomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:545

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentChannel`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md) \| ``null``, `any`\>  }, { `changeChannelByNumber`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all Channel clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:190

___

### ChannelListComponent

• `Const` **ChannelListComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `channelList`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)[], `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:291

___

### ChannelListOrLineupInfoComponent

• `Const` **ChannelListOrLineupInfoComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `changeChannel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:364

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `changeChannelByNumber`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Channel.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Channel

This cluster provides an interface for controlling the current Channel on a device or endpoint.

ChannelCluster supports optional features that you can enable with the ChannelCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:408

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `channelList`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `changeChannel`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>\> ; `changeChannelByNumber`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `skipChannel`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, {}\>

This cluster supports all Channel features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:562

___

### LineupInfoComponent

• `Const` **LineupInfoComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `lineup`: [`Attribute`](exports_cluster.md#attribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md) \| ``null``, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:338

___

### TlvChangeChannelByNumberRequest

• `Const` **TlvChangeChannelByNumberRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Channel changeChannelByNumber command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:60

___

### TlvChangeChannelRequest

• `Const` **TlvChangeChannelRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Channel changeChannel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:124

___

### TlvChangeChannelResponse

• `Const` **TlvChangeChannelResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to a ChangeChannel command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:154

___

### TlvChannelInfoStruct

• `Const` **TlvChannelInfoStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.5.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:18

___

### TlvLineupInfoStruct

• `Const` **TlvLineupInfoStruct**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.5.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:103

___

### TlvSkipChannelRequest

• `Const` **TlvSkipChannelRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Channel skipChannel command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.6.4.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ChannelCluster.d.ts:79
