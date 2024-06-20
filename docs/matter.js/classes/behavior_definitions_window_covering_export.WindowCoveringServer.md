[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md) / WindowCoveringServer

# Class: WindowCoveringServer

[behavior/definitions/window-covering/export](../modules/behavior_definitions_window_covering_export.md).WindowCoveringServer

## Hierarchy

- [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)\<`this`\> & `Omit`\<[`WindowCoveringServerLogic`](behavior_definitions_window_covering_export.WindowCoveringServerLogic-1.md), ``"state"`` \| ``"initialize"`` \| typeof `asyncDispose` \| ``"events"`` \| ``"cluster"`` \| ``"goToLiftPercentage"`` \| ``"goToTiltPercentage"`` \| ``"goToLiftValue"`` \| ``"goToTiltValue"`` \| keyof Base \| ``"handleMovement"`` \| ``"handleStopMovement"`` \| ``"executeCalibration"``\> & [`Base`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.Base.md) & `Omit`\<\{ `downOrClose`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>\> ; `stopMotion`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>\> ; `upOrOpen`: [`MethodForCommand`](../modules/behavior_cluster_export.ClusterInterface.md#methodforcommand)\<[`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>\>  } & {}, keyof [`Base`](../interfaces/behavior_definitions_window_covering_export.WindowCoveringInterface.Base.md)\> & \{ `executeCalibration`: () => [`MaybePromise`](../modules/util_export.md#maybepromise) ; `handleMovement`: (`type`: [`MovementType`](../enums/behavior_definitions_window_covering_export.MovementType.md), `reversed`: `boolean`, `direction`: [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md), `targetPercent100ths?`: `number`) => `Promise`\<`void`\> ; `handleStopMovement`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)  } & \{ `cluster`: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<... \| ..., `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<... \| ..., `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\> ; `events`: [`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, typeof [`WindowCoveringServerLogic`](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md)\> ; `features`: {} ; `state`: [`ClusterState`](../modules/behavior_cluster_export.md#clusterstate)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, typeof [`WindowCoveringServerLogic`](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md)\> ; `[asyncDispose]`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>  }

  ↳ **`WindowCoveringServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_window_covering_export.WindowCoveringServer.md#constructor)

### Properties

- [#agent](behavior_definitions_window_covering_export.WindowCoveringServer.md##agent)
- [[reference]](behavior_definitions_window_covering_export.WindowCoveringServer.md#[reference])
- [agent](behavior_definitions_window_covering_export.WindowCoveringServer.md#agent)
- [cluster](behavior_definitions_window_covering_export.WindowCoveringServer.md#cluster)
- [context](behavior_definitions_window_covering_export.WindowCoveringServer.md#context)
- [endpoint](behavior_definitions_window_covering_export.WindowCoveringServer.md#endpoint)
- [events](behavior_definitions_window_covering_export.WindowCoveringServer.md#events)
- [features](behavior_definitions_window_covering_export.WindowCoveringServer.md#features)
- [session](behavior_definitions_window_covering_export.WindowCoveringServer.md#session)
- [state](behavior_definitions_window_covering_export.WindowCoveringServer.md#state)
- [Events](behavior_definitions_window_covering_export.WindowCoveringServer.md#events-1)
- [ExtensionInterface](behavior_definitions_window_covering_export.WindowCoveringServer.md#extensioninterface)
- [Interface](behavior_definitions_window_covering_export.WindowCoveringServer.md#interface)
- [Internal](behavior_definitions_window_covering_export.WindowCoveringServer.md#internal)
- [State](behavior_definitions_window_covering_export.WindowCoveringServer.md#state-1)
- [cluster](behavior_definitions_window_covering_export.WindowCoveringServer.md#cluster-1)
- [defaults](behavior_definitions_window_covering_export.WindowCoveringServer.md#defaults)
- [dependencies](behavior_definitions_window_covering_export.WindowCoveringServer.md#dependencies)
- [early](behavior_definitions_window_covering_export.WindowCoveringServer.md#early)
- [id](behavior_definitions_window_covering_export.WindowCoveringServer.md#id)
- [name](behavior_definitions_window_covering_export.WindowCoveringServer.md#name)
- [schema](behavior_definitions_window_covering_export.WindowCoveringServer.md#schema)
- [supervisor](behavior_definitions_window_covering_export.WindowCoveringServer.md#supervisor)
- [supports](behavior_definitions_window_covering_export.WindowCoveringServer.md#supports)

### Methods

- [[asyncDispose]](behavior_definitions_window_covering_export.WindowCoveringServer.md#[asyncdispose])
- [asAdmin](behavior_definitions_window_covering_export.WindowCoveringServer.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_window_covering_export.WindowCoveringServer.md#assertattributeenabled)
- [callback](behavior_definitions_window_covering_export.WindowCoveringServer.md#callback)
- [downOrClose](behavior_definitions_window_covering_export.WindowCoveringServer.md#downorclose)
- [executeCalibration](behavior_definitions_window_covering_export.WindowCoveringServer.md#executecalibration)
- [handleMovement](behavior_definitions_window_covering_export.WindowCoveringServer.md#handlemovement)
- [handleStopMovement](behavior_definitions_window_covering_export.WindowCoveringServer.md#handlestopmovement)
- [initialize](behavior_definitions_window_covering_export.WindowCoveringServer.md#initialize)
- [reactTo](behavior_definitions_window_covering_export.WindowCoveringServer.md#reactto)
- [requireAttributeEnabled](behavior_definitions_window_covering_export.WindowCoveringServer.md#requireattributeenabled)
- [stopMotion](behavior_definitions_window_covering_export.WindowCoveringServer.md#stopmotion)
- [toString](behavior_definitions_window_covering_export.WindowCoveringServer.md#tostring)
- [upOrOpen](behavior_definitions_window_covering_export.WindowCoveringServer.md#uporopen)
- [alter](behavior_definitions_window_covering_export.WindowCoveringServer.md#alter)
- [enable](behavior_definitions_window_covering_export.WindowCoveringServer.md#enable)
- [for](behavior_definitions_window_covering_export.WindowCoveringServer.md#for)
- [set](behavior_definitions_window_covering_export.WindowCoveringServer.md#set)
- [with](behavior_definitions_window_covering_export.WindowCoveringServer.md#with)

## Constructors

### constructor

• **new WindowCoveringServer**(`agent`, `backing`): [`WindowCoveringServer`](behavior_definitions_window_covering_export.WindowCoveringServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`WindowCoveringServer`](behavior_definitions_window_covering_export.WindowCoveringServer.md)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, readonly [[`Lift`](../enums/cluster_export.WindowCovering.Feature.md#lift), [`Tilt`](../enums/cluster_export.WindowCovering.Feature.md#tilt), [`PositionAwareLift`](../enums/cluster_export.WindowCovering.Feature.md#positionawarelift), [`PositionAwareTilt`](../enums/cluster_export.WindowCovering.Feature.md#positionawaretilt), [`AbsolutePosition`](../enums/cluster_export.WindowCovering.Feature.md#absoluteposition)]\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<...\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<..., ...\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<..., ...\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<..., ...\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<..., ..., ...\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<..., ..., ...\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>, [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)\>\>, ``"type$Changing"`` \| ``"configStatus$Changing"`` \| ``"operationalStatus$Changing"`` \| ``"endProductType$Changing"`` \| ``"mode$Changing"`` \| ``"safetyStatus$Changing"`` \| ``"type$Changed"`` \| ``"configStatus$Changed"`` \| ``"operationalStatus$Changed"`` \| ``"endProductType$Changed"`` \| ``"mode$Changed"`` \| ``"safetyStatus$Changed"`` \| ``"installedOpenLimitLift$Changing"`` \| ``"installedClosedLimitLift$Changing"`` \| ``"installedOpenLimitTilt$Changing"`` \| ``"installedClosedLimitTilt$Changing"`` \| ``"targetPositionLiftPercent100ths$Changing"`` \| ``"currentPositionLiftPercent100ths$Changing"`` \| ``"targetPositionTiltPercent100ths$Changing"`` \| ``"currentPositionTiltPercent100ths$Changing"`` \| ``"physicalClosedLimitLift$Changing"`` \| ``"currentPositionLift$Changing"`` \| ``"physicalClosedLimitTilt$Changing"`` \| ``"currentPositionTilt$Changing"`` \| ``"numberOfActuationsLift$Changing"`` \| ``"numberOfActuationsTilt$Changing"`` \| ``"currentPositionLiftPercentage$Changing"`` \| ``"currentPositionTiltPercentage$Changing"`` \| ``"installedOpenLimitLift$Changed"`` \| ``"installedClosedLimitLift$Changed"`` \| ``"installedOpenLimitTilt$Changed"`` \| ``"installedClosedLimitTilt$Changed"`` \| ``"targetPositionLiftPercent100ths$Changed"`` \| ``"currentPositionLiftPercent100ths$Changed"`` \| ``"targetPositionTiltPercent100ths$Changed"`` \| ``"currentPositionTiltPercent100ths$Changed"`` \| ``"physicalClosedLimitLift$Changed"`` \| ``"currentPositionLift$Changed"`` \| ``"physicalClosedLimitTilt$Changed"`` \| ``"currentPositionTilt$Changed"`` \| ``"numberOfActuationsLift$Changed"`` \| ``"numberOfActuationsTilt$Changed"`` \| ``"currentPositionLiftPercentage$Changed"`` \| ``"currentPositionTiltPercentage$Changed"``\> & \{ `configStatus$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `endProductType$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\>\> ; `mode$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `operationalStatus$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\>\> ; `type$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>\>  } & \{ `safetyStatus$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & \{ `configStatus$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `endProductType$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\>\> ; `mode$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\> ; `operationalStatus$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\>\> ; `type$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>\>  } & \{ `safetyStatus$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: [`FeaturesAsFlags`](../modules/cluster_export.ClusterComposer.md#featuresasflags)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, readonly [[`Lift`](../enums/cluster_export.WindowCovering.Feature.md#lift), [`Tilt`](../enums/cluster_export.WindowCovering.Feature.md#tilt), [`PositionAwareLift`](../enums/cluster_export.WindowCovering.Feature.md#positionawarelift), [`PositionAwareTilt`](../enums/cluster_export.WindowCovering.Feature.md#positionawaretilt), [`AbsolutePosition`](../enums/cluster_export.WindowCovering.Feature.md#absoluteposition)]\>

Supported features as a flag object.

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`State`](behavior_definitions_window_covering_export.WindowCoveringServerLogic.State.md), ``"type"`` \| ``"mode"`` \| ``"physicalClosedLimitLift"`` \| ``"currentPositionLift"`` \| ``"installedOpenLimitLift"`` \| ``"installedClosedLimitLift"`` \| ``"physicalClosedLimitTilt"`` \| ``"currentPositionTilt"`` \| ``"installedOpenLimitTilt"`` \| ``"installedClosedLimitTilt"`` \| ``"numberOfActuationsLift"`` \| ``"numberOfActuationsTilt"`` \| ``"currentPositionLiftPercentage"`` \| ``"targetPositionLiftPercent100ths"`` \| ``"currentPositionLiftPercent100ths"`` \| ``"currentPositionTiltPercentage"`` \| ``"targetPositionTiltPercent100ths"`` \| ``"currentPositionTiltPercent100ths"`` \| ``"configStatus"`` \| ``"operationalStatus"`` \| ``"endProductType"`` \| ``"safetyStatus"``\> & \{ `configStatus`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `mode`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> ; `operationalStatus`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>  } & \{ `safetyStatus?`: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>  } & \{ `endProductType`: [`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md) ; `type`: [`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md)  } & {}

Access the behavior's state.

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, typeof [`WindowCoveringServerLogic`](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md)\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executeCalibration` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |
| `handleMovement` | (`type`: [`MovementType`](../enums/behavior_definitions_window_covering_export.MovementType.md), `reversed`: `boolean`, `direction`: [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md), `targetPercent100ths?`: `number`) => `Promise`\<`void`\> |
| `handleStopMovement` | () => [`MaybePromise`](../modules/util_export.md#maybepromise) |

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`WindowCoveringInterface`](../modules/behavior_definitions_window_covering_export.md#windowcoveringinterface)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

▪ `Static` `Readonly` **Internal**: typeof [`Internal`](behavior_definitions_window_covering_export.WindowCoveringServerLogic.Internal.md)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, typeof [`WindowCoveringServerLogic`](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md)\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, typeof [`WindowCoveringServerLogic`](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md)\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: ...  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: ...  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, typeof [`WindowCoveringServerLogic`](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md)\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `liftEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftMovementReversed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `liftPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onlineReserved`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `operational`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltEncoderControlled`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tiltPositionAware`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`EndProductType`](../enums/cluster_export.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `calibrationMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `ledFeedback`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `maintenanceMode`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorDirectionReversed`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `global`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](../modules/schema_export.md#bitfieldenum)\<[`MovementStatus`](../enums/cluster_export.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `failedCommunication`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hardwareFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `manualOperation`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `motorJammed`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `obstacleDetected`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionFailure`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `power`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `protection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `remoteLockout`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `stopInput`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tamperDetection`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `thermalProtection`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\> ; `type`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`WindowCoveringType`](../enums/cluster_export.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = LiftAndPositionAwareLiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } = TiltAndPositionAwareTiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftComponent; `flags`: \{ `lift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltComponent; `flags`: \{ `tilt`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndPositionAwareLiftComponent; `flags`: \{ `lift`: ``true`` = true; `positionAwareLift`: ``true`` = true }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltPercent100thsValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndPositionAwareTiltComponent; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `liftValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = LiftAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `lift`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `tiltValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>, `void`, `any`\>  }  } = TiltAndAbsolutePositionComponent; `flags`: \{ `absolutePosition`: ``true`` = true; `tilt`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `positionAwareLift`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `positionAwareTilt`: ``true`` = true; `tilt`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `lift`: ``false`` = false; `tilt`: ``false`` = false }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareLift`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `tilt`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``258`` = 0x102; `name`: ``"WindowCovering"`` = "WindowCovering"; `revision`: ``5`` = 5 }\>, typeof [`WindowCoveringServerLogic`](../modules/behavior_definitions_window_covering_export.WindowCoveringServerLogic.md)\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"windowCovering"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

___

### supports

▪ `Static` **supports**: (`other`: [`Type`](../interfaces/behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### assertAttributeEnabled

▸ **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).assertAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### downOrClose

▸ **downOrClose**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum closed/down position. This will happen as fast as possible. The server attributes
supported shall be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 100.00%.

  • CurrentPositionLiftPercentage attribute shall be 100%.

  • CurrentPositionTiltPercent100ths attribute shall be 100.00%.

  • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.2

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).downOrClose

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:140](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L140)

___

### executeCalibration

▸ **executeCalibration**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).executeCalibration

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:730](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L730)

___

### handleMovement

▸ **handleMovement**(`type`, `reversed`, `direction`, `targetPercent100ths?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`MovementType`](../enums/behavior_definitions_window_covering_export.MovementType.md) |
| `reversed` | `boolean` |
| `direction` | [`MovementDirection`](../enums/behavior_definitions_window_covering_export.MovementDirection.md) |
| `targetPercent100ths?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).handleMovement

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:723](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L723)

___

### handleStopMovement

▸ **handleStopMovement**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).handleStopMovement

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts:729](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringServer.ts#L729)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### requireAttributeEnabled

▸ **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### stopMotion

▸ **stopMotion**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
lift/slide that is currently occurring. The server attributes supported shall be updated as follows:

  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute
    value.

  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute
    value.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.3

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).stopMotion

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:154](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L154)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### upOrOpen

▸ **upOrOpen**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and
tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes shall
be updated as follows:

if Position Aware feature is supported:

  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%.

  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%.

The server positioning attributes will follow the movements, once the movement has successfully finished,
the server attributes shall be updated as follows:

if Position Aware feature is supported:

  • CurrentPositionLiftPercent100ths attribute shall be 0.00%.

  • CurrentPositionLiftPercentage attribute shall be 0%.

  • CurrentPositionTiltPercent100ths attribute shall be 0.00%.

  • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported:

  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute.

  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.1

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).upOrOpen

#### Defined in

[packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts:108](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/window-covering/WindowCoveringInterface.ts#L108)

___

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

WindowCoveringServerLogic.for(ClusterType(WindowCovering.Base)).with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
