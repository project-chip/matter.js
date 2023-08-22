[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PulseWidthModulation

# Namespace: PulseWidthModulation

[cluster/export](cluster_export.md).PulseWidthModulation

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.PulseWidthModulation.Feature.md)
- [MoveMode](../enums/cluster_export.PulseWidthModulation.MoveMode.md)

### Type Aliases

- [Extension](cluster_export.PulseWidthModulation.md#extension)

### Variables

- [Base](cluster_export.PulseWidthModulation.md#base)
- [Cluster](cluster_export.PulseWidthModulation.md#cluster)
- [Complete](cluster_export.PulseWidthModulation.md#complete)
- [FrequencyComponent](cluster_export.PulseWidthModulation.md#frequencycomponent)
- [LightingComponent](cluster_export.PulseWidthModulation.md#lightingcomponent)
- [Options](cluster_export.PulseWidthModulation.md#options)
- [TlvMoveRequest](cluster_export.PulseWidthModulation.md#tlvmoverequest)
- [TlvMoveToClosestFrequencyRequest](cluster_export.PulseWidthModulation.md#tlvmovetoclosestfrequencyrequest)
- [TlvMoveToLevelRequest](cluster_export.PulseWidthModulation.md#tlvmovetolevelrequest)
- [TlvStepRequest](cluster_export.PulseWidthModulation.md#tlvsteprequest)
- [TlvStopRequest](cluster_export.PulseWidthModulation.md#tlvstoprequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.PulseWidthModulation.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `lighting`: ``true``  } ? typeof [`LightingComponent`](cluster_export.PulseWidthModulation.md#lightingcomponent) : {} & `SF` extends { `frequency`: ``true``  } ? typeof [`FrequencyComponent`](cluster_export.PulseWidthModulation.md#frequencycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:435](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L435)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all PulseWidthModulation clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:156](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L156)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `onOff`: ``true`` = true }, [`Merge`](util_export.md#merge)<{ `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PulseWidthModulation.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Pulse Width Modulation

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

PulseWidthModulationCluster supports optional features that you can enable with the
PulseWidthModulationCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:414](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L414)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentFrequency`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxFrequency`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minFrequency`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `remainingTime`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `startUpCurrentLevel`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToClosestFrequency`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all PulseWidthModulation features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:449](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L449)

___

### FrequencyComponent

• `Const` **FrequencyComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `maxFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, { `moveToClosestFrequency`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A PulseWidthModulationCluster supports these elements if it supports feature Frequency.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:368](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L368)

___

### LightingComponent

• `Const` **LightingComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `remainingTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A PulseWidthModulationCluster supports these elements if it supports feature Lighting.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:335](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L335)

___

### Options

• `Const` **Options**: `Object`

The value of the PulseWidthModulation options attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.5.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupleColorTempToLevel` | [`BitFlag`](schema_export.md#bitflag-1) |
| `executeIfOff` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L41)

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation move command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:70](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L70)

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the PulseWidthModulation moveToClosestFrequency command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L122)

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation moveToLevel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L48)

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation step command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L99)

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the PulseWidthModulation stop command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L112)
