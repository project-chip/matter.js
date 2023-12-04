[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / LevelControl

# Namespace: LevelControl

[cluster/export](cluster_export.md).LevelControl

## Table of contents

### Enumerations

- [Feature](../enums/cluster_export.LevelControl.Feature.md)
- [MoveMode](../enums/cluster_export.LevelControl.MoveMode.md)
- [StepMode](../enums/cluster_export.LevelControl.StepMode.md)

### Type Aliases

- [Extension](cluster_export.LevelControl.md#extension)

### Variables

- [Base](cluster_export.LevelControl.md#base)
- [Cluster](cluster_export.LevelControl.md#cluster)
- [Complete](cluster_export.LevelControl.md#complete)
- [FrequencyComponent](cluster_export.LevelControl.md#frequencycomponent)
- [LightingComponent](cluster_export.LevelControl.md#lightingcomponent)
- [Options](cluster_export.LevelControl.md#options)
- [TlvMoveRequest](cluster_export.LevelControl.md#tlvmoverequest)
- [TlvMoveToClosestFrequencyRequest](cluster_export.LevelControl.md#tlvmovetoclosestfrequencyrequest)
- [TlvMoveToLevelRequest](cluster_export.LevelControl.md#tlvmovetolevelrequest)
- [TlvMoveToLevelWithOnOffRequest](cluster_export.LevelControl.md#tlvmovetolevelwithonoffrequest)
- [TlvMoveWithOnOffRequest](cluster_export.LevelControl.md#tlvmovewithonoffrequest)
- [TlvStepRequest](cluster_export.LevelControl.md#tlvsteprequest)
- [TlvStepWithOnOffRequest](cluster_export.LevelControl.md#tlvstepwithonoffrequest)
- [TlvStopRequest](cluster_export.LevelControl.md#tlvstoprequest)
- [TlvStopWithOnOffRequest](cluster_export.LevelControl.md#tlvstopwithonoffrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: `Omit`<typeof [`Base`](cluster_export.LevelControl.md#base), ``"supportedFeatures"``\> & { `supportedFeatures`: `SF`  } & `SF` extends { `lighting`: ``true``  } ? typeof [`LightingComponent`](cluster_export.LevelControl.md#lightingcomponent) : {} & `SF` extends { `frequency`: ``true``  } ? typeof [`FrequencyComponent`](cluster_export.LevelControl.md#frequencycomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:474](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L474)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  } ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  } ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``8`` = 0x8; `name`: ``"LevelControl"`` = "LevelControl"; `revision`: ``5`` = 5 }\>

These elements and properties are present in all LevelControl clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:193](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L193)

___

### Cluster

• `Const` **Cluster**: { `attributes`: [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: [`Branded`](util_export.md#branded)<``8`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"LevelControl"`` ; `revision`: ``5`` ; `supportedFeatures`: { `onOff`: ``true`` = true } ; `unknown`: ``false``  } & `Omit`<{ `attributes`: [`Merge`](util_export.md#merge)<{ `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  } ; `events`: {} ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } ; `id`: ``8`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> ; `name`: ``"LevelControl"`` ; `revision`: ``5`` ; `supportedFeatures`: { `onOff`: ``true`` = true } ; `unknown`: ``false``  }, ``"attributes"``\> & { `with`: <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.LevelControl.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\> = extender }

Level Control

This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
example the brightness of a light, the degree of closure of a door, or the power output of a heater.

LevelControlCluster supports optional features that you can enable with the LevelControlCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:451](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L451)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `currentFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentLevel`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `maxFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `maxLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `minLevel`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `remainingTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `startUpCurrentLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  }  } ; `commands`: { `move`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToClosestFrequency`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\> & { `isConditional`: ``true`` = true; `mandatoryIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: readonly [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<[`BitSchema`](schema_export.md#bitschema)\>  } ; `moveToLevel`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveToLevelWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `moveWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `step`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stepWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>, `void`, `any`\> ; `stop`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\> ; `stopWithOnOff`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>, `void`, `any`\>  } ; `features`: { `frequency`: [`BitFlag`](schema_export.md#bitflag-1) ; `lighting`: [`BitFlag`](schema_export.md#bitflag-1) ; `onOff`: [`BitFlag`](schema_export.md#bitflag-1)  } = Cluster.features; `id`: ``8`` & [`Brand`](util_export.md#brand)<``"ClusterId"``\> = Cluster.id; `name`: ``"LevelControl"`` = Cluster.name; `revision`: ``5`` = Cluster.revision }\>

This cluster supports all LevelControl features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:488](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L488)

___

### FrequencyComponent

• `Const` **FrequencyComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `currentFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `maxFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `minFrequency`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `commands`: { `moveToClosestFrequency`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }  }\>

A LevelControlCluster supports these elements if it supports feature Frequency.

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:405](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L405)

___

### LightingComponent

• `Const` **LightingComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<{ `attributes`: { `remainingTime`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `startUpCurrentLevel`: [`WritableAttribute`](cluster_export.md#writableattribute)<``null`` \| `number`, `any`\>  }  }\>

A LevelControlCluster supports these elements if it supports feature Lighting.

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:372](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L372)

___

### Options

• `Const` **Options**: `Object`

The value of the LevelControl options attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.5.8

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupleColorTempToLevel` | [`BitFlag`](schema_export.md#bitflag-1) |
| `executeIfOff` | [`BitFlag`](schema_export.md#bitflag-1) |

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:31](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L31)

___

### TlvMoveRequest

• `Const` **TlvMoveRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the LevelControl move command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:55](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L55)

___

### TlvMoveToClosestFrequencyRequest

• `Const` **TlvMoveToClosestFrequencyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `frequency`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the LevelControl moveToClosestFrequency command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:159](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L159)

___

### TlvMoveToLevelRequest

• `Const` **TlvMoveToLevelRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the LevelControl moveToLevel command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.1

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:38](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L38)

___

### TlvMoveToLevelWithOnOffRequest

• `Const` **TlvMoveToLevelWithOnOffRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `level`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the LevelControl moveToLevelWithOnOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:112](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L112)

___

### TlvMoveWithOnOffRequest

• `Const` **TlvMoveWithOnOffRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `moveMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`MoveMode`](../enums/cluster_export.LevelControl.MoveMode.md)\> ; `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `rate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the LevelControl moveWithOnOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:124](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L124)

___

### TlvStepRequest

• `Const` **TlvStepRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the LevelControl step command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:89](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L89)

___

### TlvStepWithOnOffRequest

• `Const` **TlvStepWithOnOffRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `stepMode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`StepMode`](../enums/cluster_export.LevelControl.StepMode.md)\> ; `stepSize`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `transitionTime`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `number`\>  }\>

Input to the LevelControl stepWithOnOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:136](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L136)

___

### TlvStopRequest

• `Const` **TlvStopRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the LevelControl stop command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:102](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L102)

___

### TlvStopWithOnOffRequest

• `Const` **TlvStopWithOnOffRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `optionsMask`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\> ; `optionsOverride`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromBitSchema`](schema_export.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](schema_export.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>  }\>

Input to the LevelControl stopWithOnOff command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/LevelControlCluster.ts:149](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/definitions/LevelControlCluster.ts#L149)
