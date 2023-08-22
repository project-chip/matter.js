[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / Identify

# Namespace: Identify

[cluster/export](cluster_export.md).Identify

* THIS FILE IS GENERATED, DO NOT EDIT **

## Table of contents

### Enumerations

- [EffectIdentifier](../enums/cluster_export.Identify.EffectIdentifier.md)
- [EffectVariant](../enums/cluster_export.Identify.EffectVariant.md)
- [Feature](../enums/cluster_export.Identify.Feature.md)
- [IdentifyType](../enums/cluster_export.Identify.IdentifyType.md)

### Type Aliases

- [Extension](cluster_export.Identify.md#extension)

### Variables

- [Base](cluster_export.Identify.md#base)
- [Cluster](cluster_export.Identify.md#cluster)
- [Complete](cluster_export.Identify.md#complete)
- [QueryComponent](cluster_export.Identify.md#querycomponent)
- [TlvIdentifyQueryResponse](cluster_export.Identify.md#tlvidentifyqueryresponse)
- [TlvIdentifyRequest](cluster_export.Identify.md#tlvidentifyrequest)
- [TlvTriggerEffectRequest](cluster_export.Identify.md#tlvtriggereffectrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.Identify.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `query`: ``true``  } ? typeof [`QueryComponent`](cluster_export.Identify.md#querycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:305](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L305)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `identifyTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.md#attribute)<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  }, { `identify`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all Identify clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:187](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L187)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.md#attribute)<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `identify`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Identify.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

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

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:286](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L286)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.md#attribute)<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `identify`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `identifyQuery`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  }, {}\>

This cluster supports all Identify features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:317](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L317)

___

### QueryComponent

• `Const` **QueryComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `identifyQuery`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A IdentifyCluster supports these elements if it supports feature Query.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:253](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L253)

___

### TlvIdentifyQueryResponse

• `Const` **TlvIdentifyQueryResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:160](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L160)

___

### TlvIdentifyRequest

• `Const` **TlvIdentifyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the Identify identify command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:73](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L73)

___

### TlvTriggerEffectRequest

• `Const` **TlvTriggerEffectRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>

Input to the Identify triggerEffect command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:128](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L128)
