[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralDiagnostics](../README.md) / BootReasonEvent

# Interface: BootReasonEvent

Body of the GeneralDiagnostics bootReason event

## See

MatterSpecification.v11.Core § 11.11.8.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvBootReasonEvent`](../README.md#tlvbootreasonevent)\>

## Properties

### bootReason

> **bootReason**: [`BootReason`](../enumerations/BootReason.md)

This field shall contain the reason for this BootReason event.

#### See

MatterSpecification.v11.Core § 11.11.8.4.1

#### Inherited from

`TypeFromSchema.bootReason`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:469](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L469)
