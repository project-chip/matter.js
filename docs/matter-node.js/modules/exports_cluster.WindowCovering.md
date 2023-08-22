[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / WindowCovering

# Namespace: WindowCovering

[exports/cluster](exports_cluster.md).WindowCovering

## Table of contents

### Enumerations

- [EndProductType](../enums/exports_cluster.WindowCovering.EndProductType.md)
- [Feature](../enums/exports_cluster.WindowCovering.Feature.md)
- [MovementStatus](../enums/exports_cluster.WindowCovering.MovementStatus.md)
- [WindowCoveringType](../enums/exports_cluster.WindowCovering.WindowCoveringType.md)

### Type Aliases

- [Extension](exports_cluster.WindowCovering.md#extension)

### Variables

- [Base](exports_cluster.WindowCovering.md#base)
- [Cluster](exports_cluster.WindowCovering.md#cluster)
- [Complete](exports_cluster.WindowCovering.md#complete)
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

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.WindowCovering.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `absolutePosition`: ``true`` ; `lift`: ``true`` ; `positionAwareLift`: ``true``  } ? typeof [`LiftAndPositionAwareLiftAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#liftandpositionawareliftandabsolutepositioncomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `positionAwareTilt`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndPositionAwareTiltAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#tiltandpositionawaretiltandabsolutepositioncomponent) : {} & `SF` extends { `lift`: ``true``  } ? typeof [`LiftComponent`](exports_cluster.WindowCovering.md#liftcomponent) : {} & `SF` extends { `tilt`: ``true``  } ? typeof [`TiltComponent`](exports_cluster.WindowCovering.md#tiltcomponent) : {} & `SF` extends { `lift`: ``true`` ; `positionAwareLift`: ``true``  } ? typeof [`LiftAndPositionAwareLiftComponent`](exports_cluster.WindowCovering.md#liftandpositionawareliftcomponent) : {} & `SF` extends { `positionAwareTilt`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndPositionAwareTiltComponent`](exports_cluster.WindowCovering.md#tiltandpositionawaretiltcomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `lift`: ``true``  } ? typeof [`LiftAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#liftandabsolutepositioncomponent) : {} & `SF` extends { `absolutePosition`: ``true`` ; `tilt`: ``true``  } ? typeof [`TiltAndAbsolutePositionComponent`](exports_cluster.WindowCovering.md#tiltandabsolutepositioncomponent) : {} & `SF` extends { `lift`: ``false`` ; `positionAwareLift`: ``true``  } ? `never` : {} & `SF` extends { `positionAwareTilt`: ``true`` ; `tilt`: ``false``  } ? `never` : {} & `SF` extends { `lift`: ``false`` ; `tilt`: ``false``  } ? `never` : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:1264

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `configStatus`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `liftEncoderControlled`: [`BitFlag`](exports_schema.md#bitflag-1) ; `liftMovementReversed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `liftPositionAware`: [`BitFlag`](exports_schema.md#bitflag-1) ; `onlineReserved`: [`BitFlag`](exports_schema.md#bitflag-1) ; `operational`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tiltEncoderControlled`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tiltPositionAware`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `endProductType`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`EndProductType`](../enums/exports_cluster.WindowCovering.EndProductType.md), `any`\> ; `mode`: [`WritableAttribute`](exports_cluster.md#writableattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `calibrationMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `ledFeedback`: [`BitFlag`](exports_schema.md#bitflag-1) ; `maintenanceMode`: [`BitFlag`](exports_schema.md#bitflag-1) ; `motorDirectionReversed`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `operationalStatus`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `global`: [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> ; `lift`: [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> ; `tilt`: [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\>  }\>, `any`\> ; `safetyStatus`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `failedCommunication`: [`BitFlag`](exports_schema.md#bitflag-1) ; `hardwareFailure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `manualOperation`: [`BitFlag`](exports_schema.md#bitflag-1) ; `motorJammed`: [`BitFlag`](exports_schema.md#bitflag-1) ; `obstacleDetected`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionFailure`: [`BitFlag`](exports_schema.md#bitflag-1) ; `power`: [`BitFlag`](exports_schema.md#bitflag-1) ; `protection`: [`BitFlag`](exports_schema.md#bitflag-1) ; `remoteLockout`: [`BitFlag`](exports_schema.md#bitflag-1) ; `stopInput`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tamperDetection`: [`BitFlag`](exports_schema.md#bitflag-1) ; `thermalProtection`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `type`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<[`WindowCoveringType`](../enums/exports_cluster.WindowCovering.WindowCoveringType.md), `any`\>  }, { `downOrClose`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all WindowCovering clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:304

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `downOrClose`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `stopMotion`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.WindowCovering.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Window Covering

The window covering cluster provides an interface for controlling and adjusting automatic window coverings such
as drapery motors, automatic shades, curtains and blinds.

WindowCoveringCluster supports optional features that you can enable with the WindowCoveringCluster.with()
factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:882

___

### Complete

• `Const` **Complete**: [`Cluster`](exports_cluster.md#cluster)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `absolutePosition`: [`BitFlag`](exports_schema.md#bitflag-1) ; `lift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareLift`: [`BitFlag`](exports_schema.md#bitflag-1) ; `positionAwareTilt`: [`BitFlag`](exports_schema.md#bitflag-1) ; `tilt`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `downOrClose`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `goToLiftPercentage`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `goToLiftValue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `goToTiltPercentage`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `goToTiltValue`: [`AsConditional`](exports_cluster.md#asconditional)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>\> ; `stopMotion`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\> ; `upOrOpen`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all WindowCovering features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:1306

___

### ConfigStatus

• `Const` **ConfigStatus**: `Object`

The value of the WindowCovering configStatus attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.8

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `liftEncoderControlled` | [`BitFlag`](exports_schema.md#bitflag-1) | Encoder - Lift: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for positioning the height of the window covering. |
| `liftMovementReversed` | [`BitFlag`](exports_schema.md#bitflag-1) | Reversal: This status bit identifies if the directions of the lift/slide movements have been reversed in order for commands (e.g: Open, Close, GoTos) to match the physical installation conditionsThis bit can be adjusted by setting the appropriate reversal bit value in the Mode attribute |
| `liftPositionAware` | [`BitFlag`](exports_schema.md#bitflag-1) | Control - Lift: This status bit identifies if the window covering supports the Position Aware Lift Control |
| `onlineReserved` | [`BitFlag`](exports_schema.md#bitflag-1) | deprecated |
| `operational` | [`BitFlag`](exports_schema.md#bitflag-1) | Operational: This status bit defines if the Window Covering is operational.The SafetyStatus & Mode attributes might affect this bit |
| `tiltEncoderControlled` | [`BitFlag`](exports_schema.md#bitflag-1) | Encoder - Tilt: This status bit identifies if a Position Aware Controlled Window Covering is employing an encoder for tilting the window covering. |
| `tiltPositionAware` | [`BitFlag`](exports_schema.md#bitflag-1) | Control - Tilt: This status bit identifies if the window covering supports the Position Aware Tilt Control |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:33

___

### LiftAndAbsolutePositionComponent

• `Const` **LiftAndAbsolutePositionComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `goToLiftValue`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports features Lift and AbsolutePosition.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:840

___

### LiftAndPositionAwareLiftAndAbsolutePositionComponent

• `Const` **LiftAndPositionAwareLiftAndAbsolutePositionComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentPositionLift`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `installedClosedLimitLift`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `installedOpenLimitLift`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `physicalClosedLimitLift`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports features Lift, PositionAwareLift and
AbsolutePosition.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:597

___

### LiftAndPositionAwareLiftComponent

• `Const` **LiftAndPositionAwareLiftComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentPositionLiftPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `currentPositionLiftPercentage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `targetPositionLiftPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  }, { `goToLiftPercentage`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports features Lift and PositionAwareLift.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:737

___

### LiftComponent

• `Const` **LiftComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `numberOfActuationsLift`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  }, { `goToLiftPercentage`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports feature Lift.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:664

___

### Mode

• `Const` **Mode**: `Object`

The value of the WindowCovering mode attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.21

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calibrationMode` | [`BitFlag`](exports_schema.md#bitflag-1) | Disabled (0) or Enabled (1) placing the Window Covering into calibration Mode where limits are either setup using tools or learned by the Window Covering by doing self-calibration.If in calibration mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, could be accepted and result in a self-calibration being initiated before the command is executed. In case the Window Covering does not have the ability or is not able to perform a self-calibration, the command SHOULD be ignored and a FAILURE status SHOULD be returned.In a write interaction, setting this bit to 0, while the device is in calibration mode, is not allowed and SHALL generate a FAILURE error status. In order to leave calibration mode, the device must perform its calibration routine, either as a self- calibration or assisted by external tool(s), depending on the device/manufacturer implementation.A manufacturer might choose to set the operational bit to its not operational value, if applicable during calibration mode |
| `ledFeedback` | [`BitFlag`](exports_schema.md#bitflag-1) | Disables (0) or Enables (1) the display of any feedback LEDs resident especially on the packaging of an endpoint where they may cause distraction to the occupant. |
| `maintenanceMode` | [`BitFlag`](exports_schema.md#bitflag-1) | Disables (0) or Enables (1) placing the Window Covering into Maintenance Mode where it cannot be moved over the network or by a switch connected to a Local Switch Input.While in maintenance mode, all commands (e.g: UpOrOpen, DownOrClose, GoTos) that can result in movement, must be ignored and respond with a BUSY status. Additionally, the operational bit of the ConfigStatus attribute should be set to its not operational value. |
| `motorDirectionReversed` | [`BitFlag`](exports_schema.md#bitflag-1) | Disables (0) or Enables (1) Lift reversal |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:141

___

### OperationalStatus

• `Const` **OperationalStatus**: `Object`

The value of the WindowCovering operationalStatus attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.15

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `global` | [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover |
| `lift` | [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover's lift function |
| `tilt` | [`BitFieldEnum`](exports_schema.md#bitfieldenum-1)<[`MovementStatus`](../enums/exports_cluster.WindowCovering.MovementStatus.md)\> | Movement status of the cover's tilt function |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:73

___

### SafetyStatus

• `Const` **SafetyStatus**: `Object`

The value of the WindowCovering safetyStatus attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.5.22

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedCommunication` | [`BitFlag`](exports_schema.md#bitflag-1) | Communication failure to sensors or other safety equipment. |
| `hardwareFailure` | [`BitFlag`](exports_schema.md#bitflag-1) | PCB, fuse and other electrics problems. |
| `manualOperation` | [`BitFlag`](exports_schema.md#bitflag-1) | Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled). |
| `motorJammed` | [`BitFlag`](exports_schema.md#bitflag-1) | Mechanical problem related to the motor(s) detected. |
| `obstacleDetected` | [`BitFlag`](exports_schema.md#bitflag-1) | An obstacle is preventing actuator movement. |
| `positionFailure` | [`BitFlag`](exports_schema.md#bitflag-1) | Device has failed to reach the desired position. e.g. with Position Aware device, time expired before TargetPosition is reached. |
| `power` | [`BitFlag`](exports_schema.md#bitflag-1) | Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment. |
| `protection` | [`BitFlag`](exports_schema.md#bitflag-1) | Protection is activated. |
| `remoteLockout` | [`BitFlag`](exports_schema.md#bitflag-1) | Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range. |
| `stopInput` | [`BitFlag`](exports_schema.md#bitflag-1) | Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335). |
| `tamperDetection` | [`BitFlag`](exports_schema.md#bitflag-1) | Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s). |
| `thermalProtection` | [`BitFlag`](exports_schema.md#bitflag-1) | Motor(s) and/or electric circuit thermal protection activated. |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:177

___

### TiltAndAbsolutePositionComponent

• `Const` **TiltAndAbsolutePositionComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `goToTiltValue`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports features Tilt and AbsolutePosition.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:857

___

### TiltAndPositionAwareTiltAndAbsolutePositionComponent

• `Const` **TiltAndPositionAwareTiltAndAbsolutePositionComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentPositionTilt`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `installedClosedLimitTilt`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `installedOpenLimitTilt`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `physicalClosedLimitTilt`: [`OptionalFixedAttribute`](exports_cluster.md#optionalfixedattribute)<`number`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports features Tilt, PositionAwareTilt and
AbsolutePosition.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:631

___

### TiltAndPositionAwareTiltComponent

• `Const` **TiltAndPositionAwareTiltComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `currentPositionTiltPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\> ; `currentPositionTiltPercentage`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number` \| ``null``, `any`\> ; `targetPositionTiltPercent100ths`: [`Attribute`](exports_cluster.md#attribute)<`number` \| ``null``, `any`\>  }, { `goToTiltPercentage`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports features Tilt and PositionAwareTilt.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:788

___

### TiltComponent

• `Const` **TiltComponent**: [`ClusterComponent`](exports_cluster.md#clustercomponent)<{ `numberOfActuationsTilt`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`number`, `any`\>  }, { `goToTiltPercentage`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

A WindowCoveringCluster supports these elements if it supports feature Tilt.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:700

___

### TlvGoToLiftPercentageRequest

• `Const` **TlvGoToLiftPercentageRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the WindowCovering goToLiftPercentage command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:235

___

### TlvGoToLiftValueRequest

• `Const` **TlvGoToLiftValueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the WindowCovering goToLiftValue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:253

___

### TlvGoToTiltPercentageRequest

• `Const` **TlvGoToTiltPercentageRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the WindowCovering goToTiltPercentage command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:244

___

### TlvGoToTiltValueRequest

• `Const` **TlvGoToTiltValueRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the WindowCovering goToTiltValue command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 5.3.6.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/WindowCoveringCluster.d.ts:261
