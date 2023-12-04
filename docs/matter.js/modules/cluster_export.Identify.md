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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.Identify.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `query`: ``true``  } ? typeof [`QueryComponent`](cluster_export.Identify.md#querycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:312](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L312)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `identifyTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.md#attribute)<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: { `identify`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `features`: { `query`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>

These elements and properties are present in all Identify clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:179](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L179)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.md#attribute)<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `identify`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: { `query`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``3`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"Identify"`` ; `revision`: ``4`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`<[`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `identifyTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.md#attribute)<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  } ; `commands`: { `identify`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `triggerEffect`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `features`: { `query`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``3`` = 0x3; `name`: ``"Identify"`` = "Identify"; `revision`: ``4`` = 4 }\>, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.Identify.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

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

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:290](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L290)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `identifyTime`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number`, `any`\> ; `identifyType`: [`Attribute`](cluster_export.md#attribute)<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `query`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> = Cluster.attributes; `commands`: { `identify`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> ; `identifyQuery`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `triggerEffect`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>, `void`, `any`\>  } ; `features`: { `query`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``3`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"Identify"`` = Cluster.name; `revision`: ``4`` = Cluster.revision }\>

This cluster supports all Identify features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:324](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L324)

___

### QueryComponent

• `Const` **QueryComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `commands`: { `identifyQuery`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\>  }  }\>

A IdentifyCluster supports these elements if it supports feature Query.

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:251](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L251)

___

### TlvIdentifyQueryResponse

• `Const` **TlvIdentifyQueryResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `timeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:152](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L152)

___

### TlvIdentifyRequest

• `Const` **TlvIdentifyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `identifyTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the Identify identify command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:65](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L65)

___

### TlvTriggerEffectRequest

• `Const` **TlvTriggerEffectRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `effectIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`EffectIdentifier`](../enums/cluster_export.Identify.EffectIdentifier.md)\> ; `effectVariant`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Default`](../enums/cluster_export.Identify.EffectVariant.md#default)\>  }\>

Input to the Identify triggerEffect command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.2.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:120](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L120)
