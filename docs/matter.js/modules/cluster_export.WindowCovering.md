[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / WindowCovering

# Namespace: WindowCovering

[cluster/export](cluster_export.md).WindowCovering

## Table of contents

### Enumerations

- [EndProductType](../enums/cluster_export.WindowCovering.EndProductType.md)
- [Feature](../enums/cluster_export.WindowCovering.Feature.md)
- [MovementStatus](../enums/cluster_export.WindowCovering.MovementStatus.md)
- [WindowCoveringType](../enums/cluster_export.WindowCovering.WindowCoveringType.md)

### Type Aliases

- [Extension](cluster_export.WindowCovering.md#extension)

### Variables

- [Base](cluster_export.WindowCovering.md#base)
- [Cluster](cluster_export.WindowCovering.md#cluster)
- [Complete](cluster_export.WindowCovering.md#complete)
- [ConfigStatus](cluster_export.WindowCovering.md#configstatus)
- [LiftAndAbsolutePositionComponent](cluster_export.WindowCovering.md#liftandabsolutepositioncomponent)
- [LiftAndPositionAwareLiftAndAbsolutePositionComponent](cluster_export.WindowCovering.md#liftandpositionawareliftandabsolutepositioncomponent)
- [LiftAndPositionAwareLiftComponent](cluster_export.WindowCovering.md#liftandpositionawareliftcomponent)
- [LiftComponent](cluster_export.WindowCovering.md#liftcomponent)
- [Mode](cluster_export.WindowCovering.md#mode)
- [OperationalStatus](cluster_export.WindowCovering.md#operationalstatus)
- [SafetyStatus](cluster_export.WindowCovering.md#safetystatus)
- [TiltAndAbsolutePositionComponent](cluster_export.WindowCovering.md#tiltandabsolutepositioncomponent)
- [TiltAndPositionAwareTiltAndAbsolutePositionComponent](cluster_export.WindowCovering.md#tiltandpositionawaretiltandabsolutepositioncomponent)
- [TiltAndPositionAwareTiltComponent](cluster_export.WindowCovering.md#tiltandpositionawaretiltcomponent)
- [TiltComponent](cluster_export.WindowCovering.md#tiltcomponent)
- [TlvGoToLiftPercentageRequest](cluster_export.WindowCovering.md#tlvgotoliftpercentagerequest)
- [TlvGoToLiftValueRequest](cluster_export.WindowCovering.md#tlvgotoliftvaluerequest)
- [TlvGoToTiltPercentageRequest](cluster_export.WindowCovering.md#tlvgototiltpercentagerequest)
- [TlvGoToTiltValueRequest](cluster_export.WindowCovering.md#tlvgototiltvaluerequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.WindowCovering.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `absolutePosition`: ``true`` ; `lift`: ``true`` ; `positionAwareLift`: ``true``  } ? typeof [`LiftAndPositionAwareLiftAndAbsolutePositionComponent`](cluster_export.WindowCovering.md#liftandpositionawareliftandabsolutepositioncomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `positionAwareTilt`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndPositionAwareTiltAndAbsolutePositionComponent`](cluster_export.WindowCovering.md#tiltandpositionawaretiltandabsolutepositioncomponent) : {} & `SF` extends { `lift`: ``true``  } ? typeof [`LiftComponent`](cluster_export.WindowCovering.md#liftcomponent) : {} & `SF` extends { `tilt`: ``true``  } ? typeof [`TiltComponent`](cluster_export.WindowCovering.md#tiltcomponent) : {} & `SF` extends { `lift`: ``true`` ; `positionAwareLift`: ``true``  } ? typeof [`LiftAndPositionAwareLiftComponent`](cluster_export.WindowCovering.md#liftandpositionawareliftcomponent) : {} & `SF` extends { `positionAwareTilt`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndPositionAwareTiltComponent`](cluster_export.WindowCovering.md#tiltandpositionawaretiltcomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `lift`: ``true``  } ? typeof [`LiftAndAbsolutePositionComponent`](cluster_export.WindowCovering.md#liftandabsolutepositioncomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndAbsolutePositionComponent`](cluster_export.WindowCovering.md#tiltandabsolutepositioncomponent) : {} & `SF` extends { `lift`: ``false`` ; `positionAwareLift`: ``true``  } ? `never` : {} & `SF` extends { `positionAwareTilt`: ``true`` ; `tilt`: ``false``  } ? `never` : {} & `SF` extends { `lift`: ``false`` ; `tilt`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:965](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L965)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `configStatus`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag-1) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag-1) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag-1) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `operational`: [`BitFlag`](schema_export.md#bitflag-1) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag-1) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag-1) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag-1) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `power`: [`BitFlag`](schema_export.md#bitflag-1) ; `protection`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag-1) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag-1) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `type`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  }, { `downOrClose`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all WindowCovering clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:375](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L375)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `configStatus`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag-1) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag-1) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag-1) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `operational`: [`BitFlag`](schema_export.md#bitflag-1) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag-1) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag-1) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag-1) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `power`: [`BitFlag`](schema_export.md#bitflag-1) ; `protection`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag-1) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag-1) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `type`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `downOrClose`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.WindowCovering.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Window Covering

The window covering cluster provides an interface for controlling and adjusting automatic window coverings such
as drapery motors, automatic shades, curtains and blinds.

WindowCoveringCluster supports optional features that you can enable with the WindowCoveringCluster.with()
factory method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:923](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L923)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `acceptedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `attributeList`: [`Attribute`](cluster_export.md#attribute)<[`AttributeId`](datatype_export.md#attributeid)[], `never`\> ; `clusterRevision`: [`Attribute`](cluster_export.md#attribute)<`number`, `never`\> ; `configStatus`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag-1) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag-1) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag-1) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag-1) ; `operational`: [`BitFlag`](schema_export.md#bitflag-1) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag-1) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `currentPositionLift`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `currentPositionLiftPercent100ths`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `currentPositionLiftPercentage`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `currentPositionTilt`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `currentPositionTiltPercent100ths`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `currentPositionTiltPercentage`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\>\> ; `endProductType`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `eventList`: [`Attribute`](cluster_export.md#attribute)<[`EventId`](datatype_export.md#eventid)[], `never`\> ; `featureMap`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `never`\> ; `generatedCommandList`: [`Attribute`](cluster_export.md#attribute)<[`CommandId`](datatype_export.md#commandid)[], `never`\> ; `installedClosedLimitLift`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `installedClosedLimitTilt`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `installedOpenLimitLift`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `installedOpenLimitTilt`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>\> ; `mode`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag-1) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag-1) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `numberOfActuationsLift`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>\> ; `numberOfActuationsTilt`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>\> ; `operationalStatus`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `physicalClosedLimitLift`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\>\> ; `physicalClosedLimitTilt`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\>\> ; `safetyStatus`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag-1) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag-1) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag-1) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag-1) ; `power`: [`BitFlag`](schema_export.md#bitflag-1) ; `protection`: [`BitFlag`](schema_export.md#bitflag-1) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag-1) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag-1) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag-1) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, `any`\> ; `targetPositionLiftPercent100ths`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `targetPositionTiltPercent100ths`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>\> ; `type`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag-1) ; `lift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag-1) ; `tilt`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `downOrClose`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `goToLiftPercentage`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `liftPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `liftPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `goToLiftValue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `goToTiltPercentage`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `tiltPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `tiltPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `goToTiltValue`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `stopMotion`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all WindowCovering features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:995](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L995)

___

### ConfigStatus

• `Const` **ConfigStatus**: `Object`

The value of the WindowCovering configStatus attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.5.8

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `liftEncoderControlled` | [`BitFlag`](schema_export.md#bitflag-1) | Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for positioning the height of the window covering. |
| `liftMovementReversed` | [`BitFlag`](schema_export.md#bitflag-1) | Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be adjusted by setting the appropriate reversal bit value in the Mode attribute |
| `liftPositionAware` | [`BitFlag`](schema_export.md#bitflag-1) | Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control |
| `onlineReserved` | [`BitFlag`](schema_export.md#bitflag-1) | deprecated |
| `operational` | [`BitFlag`](schema_export.md#bitflag-1) | Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode attributes might affect this bit |
| `tiltEncoderControlled` | [`BitFlag`](schema_export.md#bitflag-1) | Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for tilting the window covering. |
| `tiltPositionAware` | [`BitFlag`](schema_export.md#bitflag-1) | Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:69](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L69)

___

### LiftAndAbsolutePositionComponent

• `Const` **LiftAndAbsolutePositionComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `goToLiftValue`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports features Lift and AbsolutePosition.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:879](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L879)

___

### LiftAndPositionAwareLiftAndAbsolutePositionComponent

• `Const` **LiftAndPositionAwareLiftAndAbsolutePositionComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentPositionLift`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports features Lift, PositionAwareLift and
AbsolutePosition.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:572](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L572)

___

### LiftAndPositionAwareLiftComponent

• `Const` **LiftAndPositionAwareLiftComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentPositionLiftPercent100ths`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }, { `goToLiftPercentage`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `liftPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `liftPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports features Lift and PositionAwareLift.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:744](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L744)

___

### LiftComponent

• `Const` **LiftComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `numberOfActuationsLift`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  }, { `goToLiftPercentage`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `liftPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `liftPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports feature Lift.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:667](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L667)

___

### Mode

• `Const` **Mode**: `Object`

The value of the WindowCovering mode attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.5.21

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calibrationMode` | [`BitFlag`](schema_export.md#bitflag-1) | Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a self-calibration being initiated before the command is executed. In case the Window Covering does not have the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode, is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device must perform its calibration routine, either as a self- calibration or assisted by external tool(s), depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit to its not operational value, if applicable during calibration mode |
| `ledFeedback` | [`BitFlag`](schema_export.md#bitflag-1) | Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an endpoint where they may cause distraction to the occupant. |
| `maintenanceMode` | [`BitFlag`](schema_export.md#bitflag-1) | Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status. Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value. |
| `motorDirectionReversed` | [`BitFlag`](schema_export.md#bitflag-1) | Disables (0) or Enables (1) Lift reversal |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:191](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L191)

___

### OperationalStatus

• `Const` **OperationalStatus**: `Object`

The value of the WindowCovering operationalStatus attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.5.15

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `global` | [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> | Movement status of the cover |
| `lift` | [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> | Movement status of the cover's lift function |
| `tilt` | [`BitFieldEnum`](schema_export.md#bitfieldenum-1)<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> | Movement status of the cover's tilt function |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L116)

___

### SafetyStatus

• `Const` **SafetyStatus**: `Object`

The value of the WindowCovering safetyStatus attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.5.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedCommunication` | [`BitFlag`](schema_export.md#bitflag-1) | Communication failure to sensors or other safety equipment. |
| `hardwareFailure` | [`BitFlag`](schema_export.md#bitflag-1) | PCB, fuse and other electrics problems. |
| `manualOperation` | [`BitFlag`](schema_export.md#bitflag-1) | Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled). |
| `motorJammed` | [`BitFlag`](schema_export.md#bitflag-1) | Mechanical problem related to the motor(s) detected. |
| `obstacleDetected` | [`BitFlag`](schema_export.md#bitflag-1) | An obstacle is preventing actuator movement. |
| `positionFailure` | [`BitFlag`](schema_export.md#bitflag-1) | Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached. |
| `power` | [`BitFlag`](schema_export.md#bitflag-1) | Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment. |
| `protection` | [`BitFlag`](schema_export.md#bitflag-1) | Protection is activated. |
| `remoteLockout` | [`BitFlag`](schema_export.md#bitflag-1) | Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range. |
| `stopInput` | [`BitFlag`](schema_export.md#bitflag-1) | Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335). |
| `tamperDetection` | [`BitFlag`](schema_export.md#bitflag-1) | Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s). |
| `thermalProtection` | [`BitFlag`](schema_export.md#bitflag-1) | Motor(s) and/or electric circuit thermal protection activated. |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:231](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L231)

___

### TiltAndAbsolutePositionComponent

• `Const` **TiltAndAbsolutePositionComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `goToTiltValue`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports features Tilt and AbsolutePosition.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:897](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L897)

___

### TiltAndPositionAwareTiltAndAbsolutePositionComponent

• `Const` **TiltAndPositionAwareTiltAndAbsolutePositionComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentPositionTilt`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](cluster_export.md#optionalfixedattribute)<`number`, `any`\>  }, [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports features Tilt, PositionAwareTilt and
AbsolutePosition.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:620](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L620)

___

### TiltAndPositionAwareTiltComponent

• `Const` **TiltAndPositionAwareTiltComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `currentPositionTiltPercent100ths`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](cluster_export.md#attribute)<``null`` \| `number`, `any`\>  }, { `goToTiltPercentage`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `tiltPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `tiltPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports features Tilt and PositionAwareTilt.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:811](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L811)

___

### TiltComponent

• `Const` **TiltComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<{ `numberOfActuationsTilt`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\>  }, { `goToTiltPercentage`: [`OptionalCommand`](cluster_export.md#optionalcommand)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `tiltPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `tiltPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A WindowCoveringCluster supports these elements if it supports feature Tilt.

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:705](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L705)

___

### TlvGoToLiftPercentageRequest

• `Const` **TlvGoToLiftPercentageRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `liftPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `liftPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the WindowCovering goToLiftPercentage command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:301](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L301)

___

### TlvGoToLiftValueRequest

• `Const` **TlvGoToLiftValueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the WindowCovering goToLiftValue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:321](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L321)

___

### TlvGoToTiltPercentageRequest

• `Const` **TlvGoToTiltPercentageRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `tiltPercent100thsValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `tiltPercentageValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>

Input to the WindowCovering goToTiltPercentage command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:311](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L311)

___

### TlvGoToTiltValueRequest

• `Const` **TlvGoToTiltValueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the WindowCovering goToTiltValue command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.3.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:328](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L328)
