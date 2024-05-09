[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md) / BasicCommissioningInfo

# Interface: BasicCommissioningInfo

[cluster/export](../modules/cluster_export.md).[GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md).BasicCommissioningInfo

This structure provides some constant values that may be of use to all commissioners.

**`See`**

MatterSpecification.v11.Core § 11.9.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvBasicCommissioningInfo`](../modules/cluster_export.GeneralCommissioning.md#tlvbasiccommissioninginfo)\>

  ↳ **`BasicCommissioningInfo`**

## Table of contents

### Properties

- [failSafeExpiryLengthSeconds](cluster_export.GeneralCommissioning.BasicCommissioningInfo.md#failsafeexpirylengthseconds)
- [maxCumulativeFailsafeSeconds](cluster_export.GeneralCommissioning.BasicCommissioningInfo.md#maxcumulativefailsafeseconds)

## Properties

### failSafeExpiryLengthSeconds

• **failSafeExpiryLengthSeconds**: `number`

This field shall contain a conservative initial duration (in seconds) to set in the FailSafe for the
commissioning flow to complete successfully. This may vary depending on the speed or sleepiness of the
Commissionee. This value, if used in the ArmFailSafe command’s ExpiryLengthSeconds field SHOULD allow a
Commissioner to proceed with a nominal commissioning without having to-rearm the fail-safe, with some margin.

**`See`**

MatterSpecification.v11.Core § 11.9.4.3.1

#### Inherited from

TypeFromSchema.failSafeExpiryLengthSeconds

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L35)

___

### maxCumulativeFailsafeSeconds

• **maxCumulativeFailsafeSeconds**: `number`

This field shall contain a conservative value in seconds denoting the maximum total duration for which a
fail safe timer can be re-armed. See Section 11.9.6.2.1, “Fail Safe Context”.

The value of this field shall be greater than or equal to the FailSafeExpiryLengthSeconds. Absent additional
guidelines, it is RECOMMENDED that the value of this field be aligned with Section 5.4.2.3, “Announcement
Duration” and default to 900 seconds.

**`See`**

MatterSpecification.v11.Core § 11.9.4.3.2

#### Inherited from

TypeFromSchema.maxCumulativeFailsafeSeconds

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L47)
