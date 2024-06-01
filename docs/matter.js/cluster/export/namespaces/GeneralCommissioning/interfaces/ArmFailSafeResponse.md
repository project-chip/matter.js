[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralCommissioning](../README.md) / ArmFailSafeResponse

# Interface: ArmFailSafeResponse

## See

MatterSpecification.v11.Core § 11.9.6.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvArmFailSafeResponse`](../README.md#tlvarmfailsaferesponse)\>

## Properties

### debugText

> **debugText**: `string`

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

#### See

MatterSpecification.v11.Core § 11.9.6.3.2

#### Inherited from

`TypeFromSchema.debugText`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L148)

***

### errorCode

> **errorCode**: [`CommissioningError`](../enumerations/CommissioningError.md)

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the ArmFailSafe command.

#### See

MatterSpecification.v11.Core § 11.9.6.3.1

#### Inherited from

`TypeFromSchema.errorCode`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L141)
