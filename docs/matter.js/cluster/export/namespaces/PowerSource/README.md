[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / PowerSource

# Namespace: PowerSource

## Index

### Enumerations

- [BatApprovedChemistry](enumerations/BatApprovedChemistry.md)
- [BatChargeFault](enumerations/BatChargeFault.md)
- [BatChargeLevel](enumerations/BatChargeLevel.md)
- [BatChargeState](enumerations/BatChargeState.md)
- [BatCommonDesignation](enumerations/BatCommonDesignation.md)
- [BatFault](enumerations/BatFault.md)
- [BatReplaceability](enumerations/BatReplaceability.md)
- [Feature](enumerations/Feature.md)
- [PowerSourceStatus](enumerations/PowerSourceStatus.md)
- [WiredCurrentType](enumerations/WiredCurrentType.md)
- [WiredFault](enumerations/WiredFault.md)

### Interfaces

- [BatChargeFaultChangeEvent](interfaces/BatChargeFaultChangeEvent.md)
- [BatFaultChangeEvent](interfaces/BatFaultChangeEvent.md)
- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [WiredFaultChangeEvent](interfaces/WiredFaultChangeEvent.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all PowerSource clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall provide a user-facing description of this source, used to distinguish it from other
power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used
to convey information such as battery form factor, or chemistry.

###### See

MatterSpecification.v11.Core § 11.7.6.3

##### attributes.order

> `readonly` **order**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute shall indicate the relative preference with which the Node will select this source to
provide power. A source with a lower order shall be selected by the Node to provide power before any
other source with a higher order, if the lower order source is available (see Status).

Note, Order is read-only and therefore NOT intended to allow clients control over power source selection.

###### See

MatterSpecification.v11.Core § 11.7.6.2

##### attributes.status

> `readonly` **status**: [`Attribute`](../../interfaces/Attribute.md)\<[`PowerSourceStatus`](enumerations/PowerSourceStatus.md), `any`\>

This attribute shall indicate the participation of this power source in providing power to the Node as
specified in PowerSourceStatusEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which PowerSourceCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.battery

> `readonly` **battery**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Battery

A battery power source

##### features.rechargeable

> `readonly` **rechargeable**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Rechargeable

A rechargeable battery power source (requires Battery feature)

##### features.replaceable

> `readonly` **replaceable**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Replaceable

A replaceable battery power source (requires Battery feature)

##### features.wired

> `readonly` **wired**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Wired

A wired power source

##### id

> `readonly` **id**: `47` = `0x2f`

##### name

> `readonly` **name**: `"PowerSource"` = `"PowerSource"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1265)

***

### BatteryComponent

> `const` **BatteryComponent**: `object`

A PowerSourceCluster supports these elements if it supports feature Battery.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeBatFaults

> `readonly` **activeBatFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`BatFault`](enumerations/BatFault.md)[], `any`\>

This attribute shall indicate the set of battery faults currently detected by the Node on this power
source. This set is represented as a list of BatFaultEnum. When the Node detects a fault has been
raised, the appropriate BatFaultEnum value shall be added to this list, provided it is not already
present. This list shall NOT contain more than one instance of a specific BatFaultEnum value. When the
Node detects all conditions contributing to a fault have been cleared, the corresponding BatFaultEnum
value shall be removed from this list. An empty list shall indicate there are currently no active
faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes in
active faults may subscribe to this attribute, or they may subscribe to Section 11.7.7.2,
“BatFaultChange Event”.

###### See

MatterSpecification.v11.Core § 11.7.6.19

##### attributes.batChargeLevel

> `readonly` **batChargeLevel**: [`Attribute`](../../interfaces/Attribute.md)\<[`BatChargeLevel`](enumerations/BatChargeLevel.md), `any`\>

This attribute shall indicate a coarse ranking of the charge level of the battery, used to indicate when
intervention is required as specified in BatChargeLevelEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.15

##### attributes.batPercentRemaining

> `readonly` **batPercentRemaining**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the estimated percentage of battery charge remaining until the battery
will no longer be able to provide power to the Node. Values are expressed in half percent units, ranging
from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of NULL shall indicate the Node is
currently unable to assess the value.

###### See

MatterSpecification.v11.Core § 11.7.6.13

##### attributes.batPresent

> `readonly` **batPresent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean`, `any`\>

This attribute shall indicate whether the Node detects that the batteries are properly installed.

###### See

MatterSpecification.v11.Core § 11.7.6.18

##### attributes.batReplaceability

> `readonly` **batReplaceability**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`BatReplaceability`](enumerations/BatReplaceability.md), `any`\>

This attribute shall indicate the replaceability of the battery as specified in BatReplaceabilityEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.17

##### attributes.batReplacementNeeded

> `readonly` **batReplacementNeeded**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

This attribute shall indicate if the battery needs to be replaced. Replacement may be simple routine
maintenance, such as with a single use, non-rechargeable cell. Replacement, however, may also indicate
end of life, or serious fault with a rechargeable or even non-replaceable cell.

###### See

MatterSpecification.v11.Core § 11.7.6.16

##### attributes.batTimeRemaining

> `readonly` **batTimeRemaining**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the estimated time in seconds before the battery will no longer be able to
provide power to the Node. A value of NULL shall indicate the Node is currently unable to assess the
value.

###### See

MatterSpecification.v11.Core § 11.7.6.14

##### attributes.batVoltage

> `readonly` **batVoltage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the currently measured output voltage of the battery in mV (millivolts). A
value of NULL shall indicate the Node is currently unable to assess the value.

###### See

MatterSpecification.v11.Core § 11.7.6.12

##### events

> `readonly` **events**: `object`

##### events.batFaultChange

> `readonly` **batFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The BatFaultChange Event shall be generated when the set of battery faults currently detected by the
Node on this battery power source changes. This event shall correspond to a change in value of
ActiveBatFaults.

###### See

MatterSpecification.v11.Core § 11.7.7.2

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1006](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1006)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1360)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall provide a user-facing description of this source, used to distinguish it from other
power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used
to convey information such as battery form factor, or chemistry.

###### See

MatterSpecification.v11.Core § 11.7.6.3

##### attributes.order

> `readonly` **order**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute shall indicate the relative preference with which the Node will select this source to
provide power. A source with a lower order shall be selected by the Node to provide power before any
other source with a higher order, if the lower order source is available (see Status).

Note, Order is read-only and therefore NOT intended to allow clients control over power source selection.

###### See

MatterSpecification.v11.Core § 11.7.6.2

##### attributes.status

> `readonly` **status**: [`Attribute`](../../interfaces/Attribute.md)\<[`PowerSourceStatus`](enumerations/PowerSourceStatus.md), `any`\>

This attribute shall indicate the participation of this power source in providing power to the Node as
specified in PowerSourceStatusEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.1

##### extensions

> `readonly` **extensions**: readonly [`object`, `object`, `object`, `object`]

This metadata controls which PowerSourceCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.battery

> `readonly` **battery**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Battery

A battery power source

##### features.rechargeable

> `readonly` **rechargeable**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Rechargeable

A rechargeable battery power source (requires Battery feature)

##### features.replaceable

> `readonly` **replaceable**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Replaceable

A replaceable battery power source (requires Battery feature)

##### features.wired

> `readonly` **wired**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Wired

A wired power source

##### id

> `readonly` **id**: `47` = `0x2f`

##### name

> `readonly` **name**: `"PowerSource"` = `"PowerSource"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1345](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1345)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1503](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1503)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.activeBatChargeFaults

> `readonly` **activeBatChargeFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`BatChargeFault`](enumerations/BatChargeFault.md)[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.activeBatFaults

> `readonly` **activeBatFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`BatFault`](enumerations/BatFault.md)[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.activeWiredFaults

> `readonly` **activeWiredFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`WiredFault`](enumerations/WiredFault.md)[], `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.batAnsiDesignation

> `readonly` **batAnsiDesignation**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batApprovedChemistry

> `readonly` **batApprovedChemistry**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](enumerations/BatApprovedChemistry.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batCapacity

> `readonly` **batCapacity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batChargeLevel

> `readonly` **batChargeLevel**: [`Attribute`](../../interfaces/Attribute.md)\<[`BatChargeLevel`](enumerations/BatChargeLevel.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.batChargeState

> `readonly` **batChargeState**: [`Attribute`](../../interfaces/Attribute.md)\<[`BatChargeState`](enumerations/BatChargeState.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.batChargingCurrent

> `readonly` **batChargingCurrent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batCommonDesignation

> `readonly` **batCommonDesignation**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`BatCommonDesignation`](enumerations/BatCommonDesignation.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batFunctionalWhileCharging

> `readonly` **batFunctionalWhileCharging**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.batIecDesignation

> `readonly` **batIecDesignation**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batPercentRemaining

> `readonly` **batPercentRemaining**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batPresent

> `readonly` **batPresent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batQuantity

> `readonly` **batQuantity**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.batReplaceability

> `readonly` **batReplaceability**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`BatReplaceability`](enumerations/BatReplaceability.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.batReplacementDescription

> `readonly` **batReplacementDescription**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.batReplacementNeeded

> `readonly` **batReplacementNeeded**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.batTimeRemaining

> `readonly` **batTimeRemaining**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batTimeToFullCharge

> `readonly` **batTimeToFullCharge**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.batVoltage

> `readonly` **batVoltage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.description

> `readonly` **description**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall provide a user-facing description of this source, used to distinguish it from other
power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute shall NOT be used
to convey information such as battery form factor, or chemistry.

###### See

MatterSpecification.v11.Core § 11.7.6.3

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.order

> `readonly` **order**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `any`\>

This attribute shall indicate the relative preference with which the Node will select this source to
provide power. A source with a lower order shall be selected by the Node to provide power before any
other source with a higher order, if the lower order source is available (see Status).

Note, Order is read-only and therefore NOT intended to allow clients control over power source selection.

###### See

MatterSpecification.v11.Core § 11.7.6.2

##### attributes.status

> `readonly` **status**: [`Attribute`](../../interfaces/Attribute.md)\<[`PowerSourceStatus`](enumerations/PowerSourceStatus.md), `any`\>

This attribute shall indicate the participation of this power source in providing power to the Node as
specified in PowerSourceStatusEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.1

##### attributes.wiredAssessedCurrent

> `readonly` **wiredAssessedCurrent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.wiredAssessedInputFrequency

> `readonly` **wiredAssessedInputFrequency**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.wiredAssessedInputVoltage

> `readonly` **wiredAssessedInputVoltage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.wiredCurrentType

> `readonly` **wiredCurrentType**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`WiredCurrentType`](enumerations/WiredCurrentType.md), `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.wiredMaximumCurrent

> `readonly` **wiredMaximumCurrent**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.wiredNominalVoltage

> `readonly` **wiredNominalVoltage**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.wiredPresent

> `readonly` **wiredPresent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### events

> `readonly` **events**: `object`

##### events.batChargeFaultChange

> `readonly` **batChargeFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### events.batFaultChange

> `readonly` **batFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### events.wiredFaultChange

> `readonly` **wiredFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.battery

> `readonly` **battery**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Battery

A battery power source

##### features.rechargeable

> `readonly` **rechargeable**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Rechargeable

A rechargeable battery power source (requires Battery feature)

##### features.replaceable

> `readonly` **replaceable**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Replaceable

A replaceable battery power source (requires Battery feature)

##### features.wired

> `readonly` **wired**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Wired

A wired power source

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`47`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"PowerSource"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1371](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1371)

***

### RechargeableComponent

> `const` **RechargeableComponent**: `object`

A PowerSourceCluster supports these elements if it supports feature Rechargeable.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeBatChargeFaults

> `readonly` **activeBatChargeFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`BatChargeFault`](enumerations/BatChargeFault.md)[], `any`\>

This attribute shall indicate the set of charge faults currently detected by the Node on this power
source. This set is represented as a list of BatChargeFaultEnum. When the Node detects a fault has been
raised, the appropriate BatChargeFaultEnum value shall be added to this list, provided it is not already
present. This list shall NOT contain more than one instance of a specific BatChargeFaultEnum value. When
the Node detects all conditions contributing to a fault have been cleared, the corresponding
BatChargeFaultEnum value shall be removed from this list. An empty list shall indicate there are
currently no active faults. The order of this list SHOULD have no significance. Clients interested in
monitoring changes in active faults may subscribe to this attribute, or they may subscribe to the
BatFaultChange event.

###### See

MatterSpecification.v11.Core § 11.7.6.31

##### attributes.batChargeState

> `readonly` **batChargeState**: [`Attribute`](../../interfaces/Attribute.md)\<[`BatChargeState`](enumerations/BatChargeState.md), `any`\>

This attribute shall indicate the current state of the battery source with respect to charging as
specified in BatChargeStateEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.27

##### attributes.batChargingCurrent

> `readonly` **batChargingCurrent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate assessed current in mA (milliamps) presently supplied to charge the
battery source. A value of NULL shall indicate the Node is currently unable to assess the value.

###### See

MatterSpecification.v11.Core § 11.7.6.30

##### attributes.batFunctionalWhileCharging

> `readonly` **batFunctionalWhileCharging**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

This attribute shall indicate whether the Node can remain operational while the battery source is
charging.

###### See

MatterSpecification.v11.Core § 11.7.6.29

##### attributes.batTimeToFullCharge

> `readonly` **batTimeToFullCharge**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the estimated time in seconds before the battery source will be at full
charge. A value of NULL shall indicate the Node is currently unable to assess the value.

###### See

MatterSpecification.v11.Core § 11.7.6.28

##### events

> `readonly` **events**: `object`

##### events.batChargeFaultChange

> `readonly` **batChargeFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The BatChargeFaultChange Event shall be generated when the set of charge faults currently

detected by the Node on this battery power source changes. This event shall correspond to a change in
value of ActiveBatChargeFaults.

###### See

MatterSpecification.v11.Core § 11.7.7.3

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1164)

***

### ReplaceableComponent

> `const` **ReplaceableComponent**: `object`

A PowerSourceCluster supports these elements if it supports feature Replaceable.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.batAnsiDesignation

> `readonly` **batAnsiDesignation**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall indicate the string representing the ANSI designation for the battery as specified
in ANSI C18.

###### See

MatterSpecification.v11.Core § 11.7.6.22

##### attributes.batApprovedChemistry

> `readonly` **batApprovedChemistry**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`BatApprovedChemistry`](enumerations/BatApprovedChemistry.md), `any`\>

This attribute shall indicate the ID of the preferred chemistry of the battery source as specified in
BatApprovedChemistryEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.24

##### attributes.batCapacity

> `readonly` **batCapacity**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the preferred minimum charge capacity rating in mAh of individual, user-
or factory-serviceable battery cells or packs in the battery source.

###### See

MatterSpecification.v11.Core § 11.7.6.25

##### attributes.batCommonDesignation

> `readonly` **batCommonDesignation**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`BatCommonDesignation`](enumerations/BatCommonDesignation.md), `any`\>

This attribute shall indicate the ID of the common or colloquial designation of the battery, as
specified in BatCommonDesignationEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.21

##### attributes.batIecDesignation

> `readonly` **batIecDesignation**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall indicate the string representing the IEC designation for the battery as specified
in IEC 60086.

###### See

MatterSpecification.v11.Core § 11.7.6.23

##### attributes.batQuantity

> `readonly` **batQuantity**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the quantity of individual, user- or factory-serviceable battery cells or
packs in the battery source.

###### See

MatterSpecification.v11.Core § 11.7.6.26

##### attributes.batReplacementDescription

> `readonly` **batReplacementDescription**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall provide a user-facing description of this battery, which SHOULD contain information
required to identify a replacement, such as form factor, chemistry or preferred manufacturer.

###### See

MatterSpecification.v11.Core § 11.7.6.20

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:1101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L1101)

***

### TlvBatChargeFaultChangeEvent

> `const` **TlvBatChargeFaultChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the PowerSource batChargeFaultChange event

#### See

MatterSpecification.v11.Core § 11.7.7.3

#### Type declaration

##### current

> **current**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`BatChargeFault`](enumerations/BatChargeFault.md)[]\>

This field shall represent the set of faults currently detected, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

###### See

MatterSpecification.v11.Core § 11.7.7.3.1

##### previous

> **previous**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`BatChargeFault`](enumerations/BatChargeFault.md)[]\>

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.31,
“ActiveBatChargeFaults Attribute”.

###### See

MatterSpecification.v11.Core § 11.7.7.3.2

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:860](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L860)

***

### TlvBatFaultChangeEvent

> `const` **TlvBatFaultChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the PowerSource batFaultChange event

#### See

MatterSpecification.v11.Core § 11.7.7.2

#### Type declaration

##### current

> **current**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`BatFault`](enumerations/BatFault.md)[]\>

This field shall represent the set of faults currently detected, as per Section 11.7.6.19, “ActiveBatFaults
Attribute”.

###### See

MatterSpecification.v11.Core § 11.7.7.2.1

##### previous

> **previous**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`BatFault`](enumerations/BatFault.md)[]\>

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.19,
“ActiveBatFaults Attribute”.

###### See

MatterSpecification.v11.Core § 11.7.7.2.2

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L165)

***

### TlvWiredFaultChangeEvent

> `const` **TlvWiredFaultChangeEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the PowerSource wiredFaultChange event

#### See

MatterSpecification.v11.Core § 11.7.7.1

#### Type declaration

##### current

> **current**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`WiredFault`](enumerations/WiredFault.md)[]\>

This field shall represent the set of faults currently detected, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

###### See

MatterSpecification.v11.Core § 11.7.7.1.1

##### previous

> **previous**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`WiredFault`](enumerations/WiredFault.md)[]\>

This field shall represent the set of faults detected prior to this change event, as per Section 11.7.6.11,
“ActiveWiredFaults Attribute”.

###### See

MatterSpecification.v11.Core § 11.7.7.1.2

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L70)

***

### WiredComponent

> `const` **WiredComponent**: `object`

A PowerSourceCluster supports these elements if it supports feature Wired.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeWiredFaults

> `readonly` **activeWiredFaults**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`WiredFault`](enumerations/WiredFault.md)[], `any`\>

This attribute shall indicate the set of wired faults currently detected by the Node on this power
source. This set is represented as a list of WiredFaultEnum. When the Node detects a fault has been
raised, the appropriate WiredFaultEnum value shall be added to this list, provided it is not already
present. This list shall NOT contain more than one instance of a specific WiredFaultEnum value. When the
Node detects all conditions contributing to a fault have been cleared, the corresponding WiredFaultEnum
value shall be removed from this list. An empty list shall indicate there are currently no active
faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes in
active faults may subscribe to this attribute, or they may subscribe to WiredFaultChange.

###### See

MatterSpecification.v11.Core § 11.7.6.11

##### attributes.wiredAssessedCurrent

> `readonly` **wiredAssessedCurrent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the assessed instantaneous current draw of the Node on the hard- wired
source, in mA (milliamps). A value of NULL shall indicate the Node is currently unable to assess the
value. If the wired source is not connected, but the Node is still able to assess a value, then the
assessed value may be reported.

###### See

MatterSpecification.v11.Core § 11.7.6.7

##### attributes.wiredAssessedInputFrequency

> `readonly` **wiredAssessedInputFrequency**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the assessed frequency of the voltage, currently provided by the
hard-wired source, in Hz. A value of NULL shall indicate the Node is currently unable to assess the
value. If the wired source is not connected, but the Node is still able to assess a value, then the
assessed value may be reported.

###### See

MatterSpecification.v11.Core § 11.7.6.5

##### attributes.wiredAssessedInputVoltage

> `readonly` **wiredAssessedInputVoltage**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the assessed RMS or DC voltage currently provided by the hard-wired
source, in mV (millivolts). A value of NULL shall indicate the Node is currently unable to assess the
value. If the wired source is not connected, but the Node is still able to assess a value, then the
assessed value may be reported.

###### See

MatterSpecification.v11.Core § 11.7.6.4

##### attributes.wiredCurrentType

> `readonly` **wiredCurrentType**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`WiredCurrentType`](enumerations/WiredCurrentType.md), `any`\>

This attribute shall indicate the type of current the Node expects to be provided by the hard- wired
source as specified in WiredCurrentTypeEnum.

###### See

MatterSpecification.v11.Core § 11.7.6.6

##### attributes.wiredMaximumCurrent

> `readonly` **wiredMaximumCurrent**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the maximum current, printed as part of the Node’s regulatory compliance
label in mA (milliamps), expected to be provided by the hard-wired source.

###### See

MatterSpecification.v11.Core § 11.7.6.9

##### attributes.wiredNominalVoltage

> `readonly` **wiredNominalVoltage**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute shall indicate the nominal voltage, printed as part of the Node’s regulatory compliance
label in mV (millivolts), expected to be provided by the hard-wired source.

###### See

MatterSpecification.v11.Core § 11.7.6.8

##### attributes.wiredPresent

> `readonly` **wiredPresent**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`boolean`, `any`\>

This attribute shall indicate if the Node detects that the hard-wired power source is properly connected.

###### See

MatterSpecification.v11.Core § 11.7.6.10

##### events

> `readonly` **events**: `object`

##### events.wiredFaultChange

> `readonly` **wiredFaultChange**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The WiredFaultChange Event shall be generated when the set of wired faults currently detected by the
Node on this wired power source changes. This event shall correspond to a change in value of
ActiveWiredFaults.

###### See

MatterSpecification.v11.Core § 11.7.7.1

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:913](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts#L913)
