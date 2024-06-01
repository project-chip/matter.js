[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralDiagnostics](../README.md) / HardwareFaultChangeEvent

# Interface: HardwareFaultChangeEvent

Body of the GeneralDiagnostics hardwareFaultChange event

## See

MatterSpecification.v11.Core § 11.11.8.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvHardwareFaultChangeEvent`](../README.md#tlvhardwarefaultchangeevent)\>

## Properties

### current

> **current**: [`HardwareFault`](../enumerations/HardwareFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.1,
“HardwareFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.1.1

#### Inherited from

`TypeFromSchema.current`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:317

***

### previous

> **previous**: [`HardwareFault`](../enumerations/HardwareFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section

11.11.4.1, “HardwareFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.1.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:325
