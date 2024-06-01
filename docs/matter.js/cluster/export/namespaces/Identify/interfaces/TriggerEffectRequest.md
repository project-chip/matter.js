[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Identify](../README.md) / TriggerEffectRequest

# Interface: TriggerEffectRequest

Input to the Identify triggerEffect command

## See

MatterSpecification.v11.Cluster § 1.2.6.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvTriggerEffectRequest`](../README.md#tlvtriggereffectrequest)\>

## Properties

### effectIdentifier

> **effectIdentifier**: [`EffectIdentifier`](../enumerations/EffectIdentifier.md)

This field specifies the identify effect to use. All values of the EffectIdentifier shall be supported.
Implementors may deviate from the example light effects in the table below, but they SHOULD indicate during
testing how they handle each effect.

This field shall contain one of the non-reserved values listed below.

Table 3. Values of the EffectIdentifier Field of the TriggerEffect Command

#### See

MatterSpecification.v11.Cluster § 1.2.6.3.1

#### Inherited from

`TypeFromSchema.effectIdentifier`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L165)

***

### effectVariant

> **effectVariant**: [`Default`](../enumerations/EffectVariant.md#default)

This field is used to indicate which variant of the effect, indicated in the EffectIdentifier field, SHOULD
be triggered. If a device does not support the given variant, it shall use the default variant. This field
shall contain one of the values listed below:

Table 4. Values of the EffectVariant Field of the TriggerEffect Command

#### See

MatterSpecification.v11.Cluster § 1.2.6.3.2

#### Inherited from

`TypeFromSchema.effectVariant`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L176)
