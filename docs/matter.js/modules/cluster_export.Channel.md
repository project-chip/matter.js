[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Channel

# Namespace: Channel

[cluster/export](cluster_export.md).Channel

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.Channel.Feature.md)
- [LineupInfoType](../enums/cluster_export.Channel.LineupInfoType.md)
- [Status](../enums/cluster_export.Channel.Status.md)

### Type Aliases

- [Extension](cluster_export.Channel.md#extension)

### Variables

- [Base](cluster_export.Channel.md#base)
- [ChannelListComponent](cluster_export.Channel.md#channellistcomponent)
- [ChannelListOrLineupInfoComponent](cluster_export.Channel.md#channellistorlineupinfocomponent)
- [Cluster](cluster_export.Channel.md#cluster)
- [Complete](cluster_export.Channel.md#complete)
- [LineupInfoComponent](cluster_export.Channel.md#lineupinfocomponent)
- [TlvChangeChannelByNumberRequest](cluster_export.Channel.md#tlvchangechannelbynumberrequest)
- [TlvChangeChannelRequest](cluster_export.Channel.md#tlvchangechannelrequest)
- [TlvChangeChannelResponse](cluster_export.Channel.md#tlvchangechannelresponse)
- [TlvChannelInfoStruct](cluster_export.Channel.md#tlvchannelinfostruct)
- [TlvLineupInfoStruct](cluster_export.Channel.md#tlvlineupinfostruct)
- [TlvSkipChannelRequest](cluster_export.Channel.md#tlvskipchannelrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.Channel.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `channelList`: ``true``  } ? typeof [`ChannelListComponent`](cluster_export.Channel.md#channellistcomponent) : {} & `SF` extends { `lineupInfo`: ``true``  } ? typeof [`LineupInfoComponent`](cluster_export.Channel.md#lineupinfocomponent) : {} & `SF` extends { `channelList`: ``true``  } \| { `lineupInfo`: ``true``  } ? typeof [`ChannelListOrLineupInfoComponent`](cluster_export.Channel.md#channellistorlineupinfocomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:367](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L367)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentChannel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }, { `changeChannelByNumber`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all Channel clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:234](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L234)

___

### ChannelListComponent

• `Const` **ChannelListComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `channelList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>[], `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:291](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L291)

___

### ChannelListOrLineupInfoComponent

• `Const` **ChannelListOrLineupInfoComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `changeChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:319](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L319)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `currentChannel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `changeChannelByNumber`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Channel.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Channel

This cluster provides an interface for controlling the current Channel on a device or endpoint.

ChannelCluster supports optional features that you can enable with the ChannelCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:346](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L346)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>[], `any`\>\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `lineup`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `changeChannel`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>\> ; `changeChannelByNumber`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, {}\>

This cluster supports all Channel features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:383](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L383)

___

### LineupInfoComponent

• `Const` **LineupInfoComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `lineup`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:305](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L305)

___

### TlvChangeChannelByNumberRequest

• `Const` **TlvChangeChannelByNumberRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the Channel changeChannelByNumber command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L89)

___

### TlvChangeChannelRequest

• `Const` **TlvChangeChannelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the Channel changeChannel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:160](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L160)

___

### TlvChangeChannelResponse

• `Const` **TlvChangeChannelResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>

This command shall be generated in response to a ChangeChannel command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:194](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L194)

___

### TlvChannelInfoStruct

• `Const` **TlvChannelInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L42)

___

### TlvLineupInfoStruct

• `Const` **TlvLineupInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L136)

___

### TlvSkipChannelRequest

• `Const` **TlvSkipChannelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the Channel skipChannel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L110)
