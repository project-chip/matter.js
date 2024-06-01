[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralDiagnostics](../README.md) / BootReasonEvent

# Interface: BootReasonEvent

Body of the GeneralDiagnostics bootReason event

## See

MatterSpecification.v11.Core § 11.11.8.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvBootReasonEvent`](../README.md#tlvbootreasonevent)\>

## Properties

### bootReason

> **bootReason**: [`BootReason`](../enumerations/BootReason.md)

This field shall contain the reason for this BootReason event.

#### See

MatterSpecification.v11.Core § 11.11.8.4.1

#### Inherited from

`TypeFromSchema.bootReason`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:400
