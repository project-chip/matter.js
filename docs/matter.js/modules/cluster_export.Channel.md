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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.Channel.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `channelList`: ``true``  } ? typeof [`ChannelListComponent`](cluster_export.Channel.md#channellistcomponent) : {} & `SF` extends { `lineupInfo`: ``true``  } ? typeof [`LineupInfoComponent`](cluster_export.Channel.md#lineupinfocomponent) : {} & `SF` extends { `channelList`: ``true``  } \| { `lineupInfo`: ``true``  } ? typeof [`ChannelListOrLineupInfoComponent`](cluster_export.Channel.md#channellistorlineupinfocomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:363](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L363)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentChannel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  } ; `commands`: { `changeChannelByNumber`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `features`: { `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1284`` = 0x504; `name`: ``"Channel"`` = "Channel"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all Channel clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:220](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L220)

___

### ChannelListComponent

• `Const` **ChannelListComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `channelList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>[], `any`\>  }  }\>

A ChannelCluster supports these elements if it supports feature ChannelList.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:277](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L277)

___

### ChannelListOrLineupInfoComponent

• `Const` **ChannelListOrLineupInfoComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `commands`: { `changeChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\>  }  }\>

A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:305](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L305)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentChannel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `changeChannelByNumber`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: { `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``1284`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"Channel"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentChannel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  } ; `commands`: { `changeChannelByNumber`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `features`: { `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``1284`` = 0x504; `name`: ``"Channel"`` = "Channel"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Channel.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Channel

This cluster provides an interface for controlling the current Channel on a device or endpoint.

ChannelCluster supports optional features that you can enable with the ChannelCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:332](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L332)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `channelList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>[], `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentChannel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `lineup`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: { `changeChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `changeChannelByNumber`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `skipChannel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  } ; `features`: { `channelList`: [`BitFlag`](schema_export.md#bitflag-1) ; `lineupInfo`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``1284`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"Channel"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all Channel features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:379](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L379)

___

### LineupInfoComponent

• `Const` **LineupInfoComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `lineup`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`TypeFromFields`](tlv_export.md#typefromfields)<{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>, `any`\>  }  }\>

A ChannelCluster supports these elements if it supports feature LineupInfo.

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:291](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L291)

___

### TlvChangeChannelByNumberRequest

• `Const` **TlvChangeChannelByNumberRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the Channel changeChannelByNumber command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:75](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L75)

___

### TlvChangeChannelRequest

• `Const` **TlvChangeChannelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `match`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

Input to the Channel changeChannel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:146](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L146)

___

### TlvChangeChannelResponse

• `Const` **TlvChangeChannelResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.Channel.Status.md)\>  }\>

This command shall be generated in response to a ChangeChannel command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:180](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L180)

___

### TlvChannelInfoStruct

• `Const` **TlvChannelInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `affiliateCallSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `callSign`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `majorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `minorNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

This indicates a channel in a channel lineup.

While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
other formats which can map into these numeric values.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:28](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L28)

___

### TlvLineupInfoStruct

• `Const` **TlvLineupInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `lineupInfoType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Mso`](../enums/cluster_export.Channel.LineupInfoType.md#mso)\> ; `lineupName`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `operatorName`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `postalCode`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\>  }\>

The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
LineupName, and PostalCode MUST uniquely identify a lineup.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.5.2

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:122](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L122)

___

### TlvSkipChannelRequest

• `Const` **TlvSkipChannelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `count`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the Channel skipChannel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.6.4.4

#### Defined in

[packages/matter.js/src/cluster/definitions/ChannelCluster.ts:96](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/ChannelCluster.ts#L96)
