[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / WindowCovering

# Namespace: WindowCovering

[exports/cluster](exports_cluster.md).WindowCovering

## Table of contents

### Enumerations

- [EndProductType](../enums/exports_cluster.WindowCovering.EndProductType.md)
- [Feature](../enums/exports_cluster.WindowCovering.Feature.md)
- [MovementStatus](../enums/exports_cluster.WindowCovering.MovementStatus.md)
- [WindowCoveringType](../enums/exports_cluster.WindowCovering.WindowCoveringType.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.WindowCovering.Cluster.md)
- [Complete](../interfaces/exports_cluster.WindowCovering.Complete.md)
- [GoToLiftPercentageRequest](../interfaces/exports_cluster.WindowCovering.GoToLiftPercentageRequest.md)
- [GoToLiftValueRequest](../interfaces/exports_cluster.WindowCovering.GoToLiftValueRequest.md)
- [GoToTiltPercentageRequest](../interfaces/exports_cluster.WindowCovering.GoToTiltPercentageRequest.md)
- [GoToTiltValueRequest](../interfaces/exports_cluster.WindowCovering.GoToTiltValueRequest.md)

### Variables

- [Base](exports_cluster.WindowCovering.md#base)
- [Cluster](exports_cluster.WindowCovering.md#cluster)
- [ClusterInstance](exports_cluster.WindowCovering.md#clusterinstance)
- [Complete](exports_cluster.WindowCovering.md#complete)
- [CompleteInstance](exports_cluster.WindowCovering.md#completeinstance)
- [ConfigStatus](exports_cluster.WindowCovering.md#configstatus)
- [LiftAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#liftandabsolutepositioncomponent)
- [LiftAndPositionAwareLiftAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#liftandpositionawareliftandabsolutepositioncomponent)
- [LiftAndPositionAwareLiftComponent](exports_cluster.WindowCovering.md#liftandpositionawareliftcomponent)
- [LiftComponent](exports_cluster.WindowCovering.md#liftcomponent)
- [Mode](exports_cluster.WindowCovering.md#mode)
- [OperationalStatus](exports_cluster.WindowCovering.md#operationalstatus)
- [SafetyStatus](exports_cluster.WindowCovering.md#safetystatus)
- [TiltAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#tiltandabsolutepositioncomponent)
- [TiltAndPositionAwareTiltAndAbsolutePositionComponent](exports_cluster.WindowCovering.md#tiltandpositionawaretiltandabsolutepositioncomponent)
- [TiltAndPositionAwareTiltComponent](exports_cluster.WindowCovering.md#tiltandpositionawaretiltcomponent)
- [TiltComponent](exports_cluster.WindowCovering.md#tiltcomponent)
- [TlvGoToLiftPercentageRequest](exports_cluster.WindowCovering.md#tlvgotoliftpercentagerequest)
- [TlvGoToLiftValueRequest](exports_cluster.WindowCovering.md#tlvgotoliftvaluerequest)
- [TlvGoToTiltPercentageRequest](exports_cluster.WindowCovering.md#tlvgototiltpercentagerequest)
- [TlvGoToTiltValueRequest](exports_cluster.WindowCovering.md#tlvgototiltvaluerequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all WindowCovering clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `configStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `type`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\>  } | - |
| `attributes.configStatus` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | The ConfigStatus attribute makes configuration and status information available. To change settings, devices shall write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior causing the setting or clearing of each bit is vendor specific. See table below for details on each bit. **`See`** MatterSpecification.v11.Cluster § 5.3.5.8 |
| `attributes.endProductType` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> | The EndProductType attribute identifies the product type in complement of the main category indicated by the Type attribute. The window covering shall set this value to one of the values in the table below. **`See`** MatterSpecification.v11.Cluster § 5.3.5.16 |
| `attributes.mode` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction, placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling the network, and disabling status LEDs. See below for details. In the case a device does not support or implement a specific mode, e.g. the device has a specific installation method and reversal is not relevant or the device does not include a maintenance mode, any write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits set, must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned. **`See`** MatterSpecification.v11.Cluster § 5.3.5.21 |
| `attributes.operationalStatus` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of devices. See below for details about the meaning of individual bits. **`See`** MatterSpecification.v11.Cluster § 5.3.5.15 |
| `attributes.safetyStatus` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> | The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing movements. By default for nominal operation all flags are cleared (0). A device might support none, one or several bit flags from this attribute (all optional). See below for details about the meaning of individual bits. **`See`** MatterSpecification.v11.Cluster § 5.3.5.22 |
| `attributes.type` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\> | The Type attribute identifies the type of window covering being controlled by this endpoint and shall be set to one of the non-reserved values in the table below. **`See`** MatterSpecification.v11.Cluster § 5.3.5.1 |
| `commands` | \{ `downOrClose`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.downOrClose` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and tilt is at the maximum closed/down position. This will happen as fast as possible. The server attributes supported shall be updated as follows: if Position Aware feature is supported: • TargetPositionLiftPercent100ths attribute shall be set to 100.00%. • TargetPositionTiltPercent100ths attribute shall be set to 100.00%. The server positioning attributes will follow the movements, once the movement has successfully finished, the server attributes shall be updated as follows: if Position Aware feature is supported: • CurrentPositionLiftPercent100ths attribute shall be 100.00%. • CurrentPositionLiftPercentage attribute shall be 100%. • CurrentPositionTiltPercent100ths attribute shall be 100.00%. • CurrentPositionTiltPercentage attribute shall be 100%. if Absolute Position feature is supported: • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute. • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute. **`See`** MatterSpecification.v11.Cluster § 5.3.6.2 |
| `commands.stopMotion` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and lift/slide that is currently occurring. The server attributes supported shall be updated as follows: • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths attribute value. • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths attribute value. **`See`** MatterSpecification.v11.Cluster § 5.3.6.3 |
| `commands.upOrOpen` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide and tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes shall be updated as follows: if Position Aware feature is supported: • TargetPositionLiftPercent100ths attribute shall be set to 0.00%. • TargetPositionTiltPercent100ths attribute shall be set to 0.00%. The server positioning attributes will follow the movements, once the movement has successfully finished, the server attributes shall be updated as follows: if Position Aware feature is supported: • CurrentPositionLiftPercent100ths attribute shall be 0.00%. • CurrentPositionLiftPercentage attribute shall be 0%. • CurrentPositionTiltPercent100ths attribute shall be 0.00%. • CurrentPositionTiltPercentage attribute shall be 0%. if Absolute Position feature is supported: • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute. • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute. **`See`** MatterSpecification.v11.Cluster § 5.3.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `lift`: ``true`` ; `positionAwareLift`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `positionAwareTilt`: ``true`` ; `tilt`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `lift`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `tilt`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `lift`: ``true`` ; `positionAwareLift`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `positionAwareTilt`: ``true`` ; `tilt`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `lift`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `tilt`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `lift`: ``false`` ; `positionAwareLift`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `positionAwareTilt`: ``true`` ; `tilt`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `lift`: ``false`` ; `tilt`: ``false``  }  }] | This metadata controls which WindowCoveringCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag) ; `lift`: [`BitFlag`](exports_schema.md#bitflag) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.absolutePosition` | [`BitFlag`](exports_schema.md#bitflag) | AbsolutePosition Absolute positioning is supported. |
| `features.lift` | [`BitFlag`](exports_schema.md#bitflag) | Lift Lift Control and behavior for lifting/sliding window coverings |
| `features.positionAwareLift` | [`BitFlag`](exports_schema.md#bitflag) | PositionAwareLift Position Aware lift control is supported. |
| `features.positionAwareTilt` | [`BitFlag`](exports_schema.md#bitflag) | PositionAwareTilt Position Aware tilt control is supported. |
| `features.tilt` | [`BitFlag`](exports_schema.md#bitflag) | Tilt Tilt Control and behavior for tilting window coverings |
| `id` | ``258`` | - |
| `name` | ``"WindowCovering"`` | - |
| `revision` | ``5`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:627

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.WindowCovering.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:1895

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:1897

___

### ClusterInstance

• `Const` **ClusterInstance**: [`ExtensibleOnly`](../interfaces/exports_cluster.MutableCluster.ExtensibleOnly.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `endProductType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `operationalStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `safetyStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `type`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `lift`: ``true`` ; `positionAwareLift`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `positionAwareTilt`: ``true`` ; `tilt`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `lift`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `tilt`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `goToLiftPercentage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `lift`: ``true`` ; `positionAwareLift`: ``true``  }  }, \{ `component`: \{ `attributes`: \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } ; `commands`: \{ `goToTiltPercentage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `positionAwareTilt`: ``true`` ; `tilt`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `lift`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `absolutePosition`: ``true`` ; `tilt`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `lift`: ``false`` ; `positionAwareLift`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `positionAwareTilt`: ``true`` ; `tilt`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `lift`: ``false`` ; `tilt`: ``false``  }  }] ; `features`: \{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag) ; `lift`: [`BitFlag`](exports_schema.md#bitflag) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``258`` ; `name`: ``"WindowCovering"`` ; `revision`: ``5``  }\>

**`See`**

[Cluster](exports_cluster.WindowCovering.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:1257

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.WindowCovering.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:2401

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:2403

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `configStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `currentPositionLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` ; `lift`: `boolean` ; `positionAwareLift`: `boolean`  }]  } ; `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lift`: `boolean` ; `positionAwareLift`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `lift`: `boolean` ; `positionAwareLift`: `boolean`  }]  } ; `currentPositionTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` ; `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }]  } ; `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }]  } ; `endProductType`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` ; `lift`: `boolean` ; `positionAwareLift`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` ; `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `installedOpenLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` ; `lift`: `boolean` ; `positionAwareLift`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `absolutePosition`: `boolean` ; `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `mode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `lift`: `boolean`  }]  } ; `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `tilt`: `boolean`  }]  } ; `operationalStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` ; `lift`: `boolean` ; `positionAwareLift`: `boolean`  }]  } ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` ; `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }]  } ; `safetyStatus`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lift`: `boolean` ; `positionAwareLift`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `type`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\>  } ; `commands`: \{ `downOrClose`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `goToLiftPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `lift`: `boolean` ; `positionAwareLift`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `lift`: `boolean`  }]  } ; `goToLiftValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` ; `lift`: `boolean`  }]  } ; `goToTiltPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `positionAwareTilt`: `boolean` ; `tilt`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `tilt`: `boolean`  }]  } ; `goToTiltValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md) ; `optional`: ``true`` ; `optionalIf`: [] \| [\{ `absolutePosition`: `boolean` ; `tilt`: `boolean`  }]  } ; `stopMotion`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag) ; `lift`: [`BitFlag`](exports_schema.md#bitflag) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``258`` ; `name`: ``"WindowCovering"`` ; `revision`: ``5``  }\>

**`See`**

[Complete](exports_cluster.WindowCovering.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:1901

___

### ConfigStatus

• `Const` **ConfigStatus**: `Object`

The value of the WindowCovering configStatus attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.8

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `liftEncoderControlled` | [`BitFlag`](exports_schema.md#bitflag) | Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for positioning the height of the window covering. |
| `liftMovementReversed` | [`BitFlag`](exports_schema.md#bitflag) | Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be adjusted by setting the appropriate reversal bit value in the Mode attribute |
| `liftPositionAware` | [`BitFlag`](exports_schema.md#bitflag) | Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control |
| `onlineReserved` | [`BitFlag`](exports_schema.md#bitflag) | deprecated |
| `operational` | [`BitFlag`](exports_schema.md#bitflag) | Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode attributes might affect this bit |
| `tiltEncoderControlled` | [`BitFlag`](exports_schema.md#bitflag) | Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for tilting the window covering. |
| `tiltPositionAware` | [`BitFlag`](exports_schema.md#bitflag) | Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:96

___

### LiftAndAbsolutePositionComponent

• `Const` **LiftAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Lift and AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `goToLiftValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.goToLiftValue` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:552

___

### LiftAndPositionAwareLiftAndAbsolutePositionComponent

• `Const` **LiftAndPositionAwareLiftAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Lift, PositionAwareLift and
AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `installedClosedLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.currentPositionLift` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.installedClosedLimitLift` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.installedOpenLimitLift` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.physicalClosedLimitLift` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:297

___

### LiftAndPositionAwareLiftComponent

• `Const` **LiftAndPositionAwareLiftComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Lift and PositionAwareLift.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.currentPositionLiftPercent100ths` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.currentPositionLiftPercentage` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.targetPositionLiftPercent100ths` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `commands` | \{ `goToLiftPercentage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.goToLiftPercentage` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:445

___

### LiftComponent

• `Const` **LiftComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports feature Lift.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfActuationsLift`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfActuationsLift` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `goToLiftPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.goToLiftPercentage` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:368

___

### Mode

• `Const` **Mode**: `Object`

The value of the WindowCovering mode attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.21

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calibrationMode` | [`BitFlag`](exports_schema.md#bitflag) | Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a self-calibration being initiated before the command is executed. In case the Window Covering does not have the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode, is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device must perform its calibration routine, either as a self- calibration or assisted by external tool(s), depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit to its not operational value, if applicable during calibration mode |
| `ledFeedback` | [`BitFlag`](exports_schema.md#bitflag) | Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an endpoint where they may cause distraction to the occupant. |
| `maintenanceMode` | [`BitFlag`](exports_schema.md#bitflag) | Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status. Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value. |
| `motorDirectionReversed` | [`BitFlag`](exports_schema.md#bitflag) | Disables (0) or Enables (1) Lift reversal |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:204

___

### OperationalStatus

• `Const` **OperationalStatus**: `Object`

The value of the WindowCovering operationalStatus attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.15

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `global` | [`BitFieldEnum`](exports_schema.md#bitfieldenum)\<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover |
| `lift` | [`BitFieldEnum`](exports_schema.md#bitfieldenum)\<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover's lift function |
| `tilt` | [`BitFieldEnum`](exports_schema.md#bitfieldenum)\<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover's tilt function |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:136

___

### SafetyStatus

• `Const` **SafetyStatus**: `Object`

The value of the WindowCovering safetyStatus attribute

**`See`**

MatterSpecification.v11.Cluster § 5.3.5.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedCommunication` | [`BitFlag`](exports_schema.md#bitflag) | Communication failure to sensors or other safety equipment. |
| `hardwareFailure` | [`BitFlag`](exports_schema.md#bitflag) | PCB, fuse and other electrics problems. |
| `manualOperation` | [`BitFlag`](exports_schema.md#bitflag) | Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled). |
| `motorJammed` | [`BitFlag`](exports_schema.md#bitflag) | Mechanical problem related to the motor(s) detected. |
| `obstacleDetected` | [`BitFlag`](exports_schema.md#bitflag) | An obstacle is preventing actuator movement. |
| `positionFailure` | [`BitFlag`](exports_schema.md#bitflag) | Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached. |
| `power` | [`BitFlag`](exports_schema.md#bitflag) | Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment. |
| `protection` | [`BitFlag`](exports_schema.md#bitflag) | Protection is activated. |
| `remoteLockout` | [`BitFlag`](exports_schema.md#bitflag) | Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range. |
| `stopInput` | [`BitFlag`](exports_schema.md#bitflag) | Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335). |
| `tamperDetection` | [`BitFlag`](exports_schema.md#bitflag) | Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s). |
| `thermalProtection` | [`BitFlag`](exports_schema.md#bitflag) | Motor(s) and/or electric circuit thermal protection activated. |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:240

___

### TiltAndAbsolutePositionComponent

• `Const` **TiltAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Tilt and AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `goToTiltValue`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.goToTiltValue` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:571

___

### TiltAndPositionAwareTiltAndAbsolutePositionComponent

• `Const` **TiltAndPositionAwareTiltAndAbsolutePositionComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Tilt, PositionAwareTilt and
AbsolutePosition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\>  } |
| `attributes.currentPositionTilt` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.installedClosedLimitTilt` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.installedOpenLimitTilt` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> |
| `attributes.physicalClosedLimitTilt` | [`OptionalFixedAttribute`](../interfaces/exports_cluster.OptionalFixedAttribute.md)\<`number`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:333

___

### TiltAndPositionAwareTiltComponent

• `Const` **TiltAndPositionAwareTiltComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports features Tilt and PositionAwareTilt.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `currentPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.currentPositionTiltPercent100ths` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.currentPositionTiltPercentage` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| ``null``, `any`\> |
| `attributes.targetPositionTiltPercent100ths` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number` \| ``null``, `any`\> |
| `commands` | \{ `goToTiltPercentage`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.goToTiltPercentage` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:498

___

### TiltComponent

• `Const` **TiltComponent**: `Object`

A WindowCoveringCluster supports these elements if it supports feature Tilt.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `numberOfActuationsTilt`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\>  } |
| `attributes.numberOfActuationsTilt` | [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> |
| `commands` | \{ `goToTiltPercentage`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.goToTiltPercentage` | [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:406

___

### TlvGoToLiftPercentageRequest

• `Const` **TlvGoToLiftPercentageRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToLiftPercentage command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:18

___

### TlvGoToLiftValueRequest

• `Const` **TlvGoToLiftValueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToLiftValue command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:48

___

### TlvGoToTiltPercentageRequest

• `Const` **TlvGoToTiltPercentageRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToTiltPercentage command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:33

___

### TlvGoToTiltValueRequest

• `Const` **TlvGoToTiltValueRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the WindowCovering goToTiltValue command

**`See`**

MatterSpecification.v11.Cluster § 5.3.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WindowCoveringCluster.d.ts:63
