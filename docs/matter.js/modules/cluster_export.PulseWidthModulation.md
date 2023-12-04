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

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.PulseWidthModulation.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `lighting`: ``true``  } ? typeof [`LightingComponent`](cluster_export.PulseWidthModulation.md#lightingcomponent) : {} & `SF` extends { `frequency`: ``true``  } ? typeof [`FrequencyComponent`](cluster_export.PulseWidthModulation.md#frequencycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:428](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L428)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  } ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  } ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``28`` = 0x1c; `name`: ``"PulseWidthModulation"`` = "PulseWidthModulation"; `revision`: ``5`` = 5 }\>

These elements and properties are present in all PulseWidthModulation clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:147](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L147)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``28`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5`` ; `supportedFeatures`: { `onOff`: ``true`` = true } ; `unknown`: ``false``  } & `Omit`<{ `attributes`: [`Merge`](util_export.md#merge)<{ `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``28`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> ; `name`: ``"PulseWidthModulation"`` ; `revision`: ``5`` ; `supportedFeatures`: { `onOff`: ``true`` = true } ; `unknown`: ``false``  }, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.PulseWidthModulation.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Pulse Width Modulation

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

PulseWidthModulationCluster supports optional features that you can enable with the
PulseWidthModulationCluster.with() factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:405](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L405)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `remainingTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `startUpCurrentLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToClosestFrequency`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  } ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``28`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"PulseWidthModulation"`` = Cluster.name; `revision`: ``5`` = Cluster.revision }\>

This cluster supports all PulseWidthModulation features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:442](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L442)

___

### FrequencyComponent

• `Const` **FrequencyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `maxFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `commands`: { `moveToClosestFrequency`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A PulseWidthModulationCluster supports these elements if it supports feature Frequency.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:359](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L359)

___

### LightingComponent

• `Const` **LightingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `remainingTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }  }\>

A PulseWidthModulationCluster supports these elements if it supports feature Lighting.

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:326](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L326)

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

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:32](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L32)

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.PulseWidthModulation.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation move command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:61](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L61)

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the PulseWidthModulation moveToClosestFrequency command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:113](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L113)

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation moveToLevel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:39](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L39)

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the PulseWidthModulation step command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:90](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L90)

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the PulseWidthModulation stop command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts:103](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/PulseWidthModulationCluster.ts#L103)
