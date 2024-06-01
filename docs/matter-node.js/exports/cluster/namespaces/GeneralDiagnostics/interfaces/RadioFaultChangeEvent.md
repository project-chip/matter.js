[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralDiagnostics](../README.md) / RadioFaultChangeEvent

# Interface: RadioFaultChangeEvent

Body of the GeneralDiagnostics radioFaultChange event

## See

MatterSpecification.v11.Core § 11.11.8.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvRadioFaultChangeEvent`](../README.md#tlvradiofaultchangeevent)\>

## Properties

### current

> **current**: [`RadioFault`](../enumerations/RadioFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.2, “RadioFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.2.1

#### Inherited from

`TypeFromSchema.current`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:345

***

### previous

> **previous**: [`RadioFault`](../enumerations/RadioFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.2,
“RadioFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.2.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:352
