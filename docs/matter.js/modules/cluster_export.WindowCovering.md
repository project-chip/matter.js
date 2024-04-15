[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / WindowCovering

# Namespace: WindowCovering

[cluster/export](cluster_export.md).WindowCovering

## Table of contents

### Enumerations

- [EndProductType](../enums/cluster_export.WindowCovering.EndProductType.md)
- [Feature](../enums/cluster_export.WindowCovering.Feature.md)
- [MovementStatus](../enums/cluster_export.WindowCovering.MovementStatus.md)
- [WindowCoveringType](../enums/cluster_export.WindowCovering.WindowCoveringType.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.WindowCovering.Cluster.md)
- [Complete](../interfaces/cluster_export.WindowCovering.Complete.md)
- [GoToLiftPercentageRequest](../interfaces/cluster_export.WindowCovering.GoToLiftPercentageRequest.md)
- [GoToLiftValueRequest](../interfaces/cluster_export.WindowCovering.GoToLiftValueRequest.md)
- [GoToTiltPercentageRequest](../interfaces/cluster_export.WindowCovering.GoToTiltPercentageRequest.md)
- [GoToTiltValueRequest](../interfaces/cluster_export.WindowCovering.GoToTiltValueRequest.md)

### Variables

- [Base](cluster_export.WindowCovering.md#base)
- [Cluster](cluster_export.WindowCovering.md#cluster)
- [ClusterInstance](cluster_export.WindowCovering.md#clusterinstance)
- [Complete](cluster_export.WindowCovering.md#complete)
- [CompleteInstance](cluster_export.WindowCovering.md#completeinstance)
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

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all WindowCovering clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag) ; `operational`: [`BitFlag`](schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag) ; `power`: [`BitFlag`](schema_export.md#bitflag) ; `protection`: [`BitFlag`](schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } | - |
| `attributes.configStatus` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag) ; `operational`: [`BitFlag`](schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | The ConfigStatus attribute makes configuration and status information available. To change settings, devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior causing the setting or clearing of each bit is vendor specific. See table below for details on each bit. **`See`** MatterSpecification.v11.Cluster § 5.3.5.8 |
| `attributes.endProductType` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> | The EndProductType attribute identifies the product type in complement of the main category indicated by the Type attribute. The window covering shall set this value to one of the values in the table below. **`See`** MatterSpecification.v11.Cluster § 5.3.5.16 |
| `attributes.mode` | [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction, placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling the network, and disabling status LEDs. See below for details. In the case a device does not support or implement a specific mode, e.g. the device has a specific installation method and reversal is not relevant or the device does not include a maintenance mode, any write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set, must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned. **`See`** MatterSpecification.v11.Cluster § 5.3.5.21 |
| `attributes.operationalStatus` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> | The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of devices. See below for details about the meaning of individual bits. **`See`** MatterSpecification.v11.Cluster § 5.3.5.15 |
| `attributes.safetyStatus` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag) ; `power`: [`BitFlag`](schema_export.md#bitflag) ; `protection`: [`BitFlag`](schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> | The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing movements. By default for nominal operation all flags are cleared (0). A device might support none, one or several bit flags from this attribute (all optional). See below for details about the meaning of individual bits. **`See`** MatterSpecification.v11.Cluster § 5.3.5.22 |
| `attributes.type` | [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\> | The Type attribute identifies the type of window covering being controlled by this endpoint and shall be set to one of the non-reserved values in the table below. **`See`** MatterSpecification.v11.Cluster § 5.3.5.1 |
| `commands` | \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.downOrClose` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and tilt is at the maximum closed/down position. This will happen as fast as possible. The server attributes supported shall be updated as follows: if Position Aware feature is supported: • TargetPositionLiftPercent100ths attribute shall be set to 100.00%. • TargetPositionTiltPercent100ths attribute shall be set to 100.00%. The server positioning attributes will follow the movements, once the movement has successfully finished, the server attributes shall be updated as follows: if Position Aware feature is supported: • CurrentPositionLiftPercent100ths attribute shall be 100.00%. • CurrentPositionLiftPercentage attribute shall be 100%. • CurrentPositionTiltPercent100ths attribute shall be 100.00%. • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported: • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute. • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute. **`See`** MatterSpecification.v11.Cluster § 5.3.6.2 |
| `commands.stopMotion` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and lift/slide that is currently occurring. The server attributes supported shall be updated as follows: • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute value. • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute value. **`See`** MatterSpecification.v11.Cluster § 5.3.6.3 |
| `commands.upOrOpen` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes shall be updated as follows: if Position Aware feature is supported: • TargetPositionLiftPercent100ths attribute shall be set to 0.00%. • TargetPositionTiltPercent100ths attribute shall be set to 0.00%. The server positioning attributes will follow the movements, once the movement has successfully finished, the server attributes shall be updated as follows: if Position Aware feature is supported: • CurrentPositionLiftPercent100ths attribute shall be 0.00%. • CurrentPositionLiftPercentage attribute shall be 0%. • CurrentPositionTiltPercent100ths attribute shall be 0.00%. • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported: • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute. • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute. **`See`** MatterSpecification.v11.Cluster § 5.3.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] | This metadata controls which WindowCoveringCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag) ; `lift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag) ; `tilt`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.absolutePosition` | [`BitFlag`](schema_export.md#bitflag) | AbsolutePosition Absolute positioning is supported. |
| `features.lift` | [`BitFlag`](schema_export.md#bitflag) | Lift Lift Control and behavior for lifting/sliding window coverings |
| `features.positionAwareLift` | [`BitFlag`](schema_export.md#bitflag) | PositionAwareLift Position Aware lift control is supported. |
| `features.positionAwareTilt` | [`BitFlag`](schema_export.md#bitflag) | PositionAwareTilt Position Aware tilt control is supported. |
| `features.tilt` | [`BitFlag`](schema_export.md#bitflag) | Tilt Tilt Control and behavior for tilting window coverings |
| `id` | ``258`` | - |
| `name` | ``"WindowCovering"`` | - |
| `revision` | ``5`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:719](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L719)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.WindowCovering.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:952](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L952)

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:954](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L954)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/cluster_export.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag) ; `operational`: [`BitFlag`](schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag) ; `power`: [`BitFlag`](schema_export.md#bitflag) ; `protection`: [`BitFlag`](schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag) ; `lift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag) ; `tilt`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>

**`See`**

[Cluster](cluster_export.WindowCovering.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:939](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L939)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.WindowCovering.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:1068](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L1068)

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:1070](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L1070)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](schema_export.md#bitflag) ; `operational`: [`BitFlag`](schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }]  } ; `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }]  } ; `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }]  } ; `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }]  } ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `lift`: `boolean` = true }]  } ; `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `tilt`: `boolean` = true }]  } ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }]  } ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }]  } ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](schema_export.md#bitflag) ; `power`: [`BitFlag`](schema_export.md#bitflag) ; `protection`: [`BitFlag`](schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](schema_export.md#bitflag)  }\>, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `lift`: `boolean` = true; `positionAwareLift`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `lift`: `boolean` = true }]  } ; `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `lift`: `boolean` = true }]  } ; `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `positionAwareTilt`: `boolean` = true; `tilt`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `tilt`: `boolean` = true }]  } ; `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\> ; `optional`: ``true`` = true; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` = true; `tilt`: `boolean` = true }]  } ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `absolutePosition`: [`BitFlag`](schema_export.md#bitflag) ; `lift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](schema_export.md#bitflag) ; `tilt`: [`BitFlag`](schema_export.md#bitflag)  } = Base.features; `id`: ``258`` = Base.id; `name`: ``"WindowCovering"`` = Base.name; `revision`: ``5`` = Base.revision }\>

**`See`**

[Complete](cluster_export.WindowCovering.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:967](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L967)

___

### ConfigStatus

• `Const` **ConfigStatus**: `Object`

The value of the WindowCovering configStatus attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.8

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `liftEncoderControlled` | [`BitFlag`](schema_export.md#bitflag) | Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for positioning the height of the window covering. |
| `liftMovementReversed` | [`BitFlag`](schema_export.md#bitflag) | Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be adjusted by setting the appropriate reversal bit value in the Mode attribute |
| `liftPositionAware` | [`BitFlag`](schema_export.md#bitflag) | Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control |
| `onlineReserved` | [`BitFlag`](schema_export.md#bitflag) | deprecated |
| `operational` | [`BitFlag`](schema_export.md#bitflag) | Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode attributes might affect this bit |
| `tiltEncoderControlled` | [`BitFlag`](schema_export.md#bitflag) | Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for tilting the window covering. |
| `tiltPositionAware` | [`BitFlag`](schema_export.md#bitflag) | Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L111)

___

### LiftAndAbsolutePositionComponent

• `Const` **LiftAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Lift and AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.goToLiftValue` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:641](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L641)

___

### LiftAndPositionAwareLiftAndAbsolutePositionComponent

• `Const` **LiftAndPositionAwareLiftAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Lift, PositionAwareLift and
AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.currentPositionLift` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.installedClosedLimitLift` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.installedOpenLimitLift` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.physicalClosedLimitLift` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:342](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L342)

___

### LiftAndPositionAwareLiftComponent

• `Const` **LiftAndPositionAwareLiftComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Lift and PositionAwareLift.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.currentPositionLiftPercent100ths` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.currentPositionLiftPercentage` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.targetPositionLiftPercent100ths` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `commands` | \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.goToLiftPercentage` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:506](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L506)

___

### LiftComponent

• `Const` **LiftComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports feature Lift.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfActuationsLift` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.goToLiftPercentage` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:429](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L429)

___

### Mode

• `Const` **Mode**: `Object`

The value of the WindowCovering mode attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.21

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calibrationMode` | [`BitFlag`](schema_export.md#bitflag) | Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a self-calibration being initiated before the command is executed. In case the Window Covering does not have the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode, is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device must perform its calibration routine, either as a self- calibration or assisted by external tool(s), depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit to its not operational value, if applicable during calibration mode |
| `ledFeedback` | [`BitFlag`](schema_export.md#bitflag) | Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an endpoint where they may cause distraction to the occupant. |
| `maintenanceMode` | [`BitFlag`](schema_export.md#bitflag) | Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status. Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value. |
| `motorDirectionReversed` | [`BitFlag`](schema_export.md#bitflag) | Disables (0) or Enables (1) Lift reversal |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L233)

___

### OperationalStatus

• `Const` **OperationalStatus**: `Object`

The value of the WindowCovering operationalStatus attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.15

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `global` | [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> | Movement status of the cover |
| `lift` | [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> | Movement status of the cover's lift function |
| `tilt` | [`BitFieldEnum`](schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> | Movement status of the cover's tilt function |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L158)

___

### SafetyStatus

• `Const` **SafetyStatus**: `Object`

The value of the WindowCovering safetyStatus attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedCommunication` | [`BitFlag`](schema_export.md#bitflag) | Communication failure to sensors or other safety equipment. |
| `hardwareFailure` | [`BitFlag`](schema_export.md#bitflag) | PCB, fuse and other electrics problems. |
| `manualOperation` | [`BitFlag`](schema_export.md#bitflag) | Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled). |
| `motorJammed` | [`BitFlag`](schema_export.md#bitflag) | Mechanical problem related to the motor(s) detected. |
| `obstacleDetected` | [`BitFlag`](schema_export.md#bitflag) | An obstacle is preventing actuator movement. |
| `positionFailure` | [`BitFlag`](schema_export.md#bitflag) | Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached. |
| `power` | [`BitFlag`](schema_export.md#bitflag) | Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment. |
| `protection` | [`BitFlag`](schema_export.md#bitflag) | Protection is activated. |
| `remoteLockout` | [`BitFlag`](schema_export.md#bitflag) | Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range. |
| `stopInput` | [`BitFlag`](schema_export.md#bitflag) | Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335). |
| `tamperDetection` | [`BitFlag`](schema_export.md#bitflag) | Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s). |
| `thermalProtection` | [`BitFlag`](schema_export.md#bitflag) | Motor(s) and/or electric circuit thermal protection activated. |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:273](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L273)

___

### TiltAndAbsolutePositionComponent

• `Const` **TiltAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Tilt and AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.goToTiltValue` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:659](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L659)

___

### TiltAndPositionAwareTiltAndAbsolutePositionComponent

• `Const` **TiltAndPositionAwareTiltAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Tilt, PositionAwareTilt and
AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.currentPositionTilt` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.installedClosedLimitTilt` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.installedOpenLimitTilt` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> |
| `attributes.physicalClosedLimitTilt` | [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:386](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L386)

___

### TiltAndPositionAwareTiltComponent

• `Const` **TiltAndPositionAwareTiltComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Tilt and PositionAwareTilt.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } |
| `attributes.currentPositionTiltPercent100ths` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.currentPositionTiltPercentage` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> |
| `attributes.targetPositionTiltPercent100ths` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> |
| `commands` | \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.goToTiltPercentage` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:573](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L573)

___

### TiltComponent

• `Const` **TiltComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports feature Tilt.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfActuationsTilt` | [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.goToTiltPercentage` | [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:467](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L467)

___

### TlvGoToLiftPercentageRequest

• `Const` **TlvGoToLiftPercentageRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the WindowCovering goToLiftPercentage command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L36)

___

### TlvGoToLiftValueRequest

• `Const` **TlvGoToLiftValueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the WindowCovering goToLiftValue command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L64)

___

### TlvGoToTiltPercentageRequest

• `Const` **TlvGoToTiltPercentageRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the WindowCovering goToTiltPercentage command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L50)

___

### TlvGoToTiltValueRequest

• `Const` **TlvGoToTiltValueRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the WindowCovering goToTiltValue command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.6

#### Defined in

[packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WindowCoveringCluster.ts#L78)
