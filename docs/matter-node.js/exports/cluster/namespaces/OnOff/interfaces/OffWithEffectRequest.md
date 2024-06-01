[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OnOff](../README.md) / OffWithEffectRequest

# Interface: OffWithEffectRequest

Input to the OnOff offWithEffect command

## See

MatterSpecification.v11.Cluster § 1.5.7.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvOffWithEffectRequest`](../README.md#tlvoffwitheffectrequest)\>

## Properties

### effectIdentifier

> **effectIdentifier**: [`OnOffEffectIdentifier`](../enumerations/OnOffEffectIdentifier.md)

The EffectIdentifier field specifies the fading effect to use when turning the device off. This field shall
contain one of the non-reserved values listed in Values of the EffectIdentifier Field of the OffWithEffect
Command.

#### See

MatterSpecification.v11.Cluster § 1.5.7.4.1

#### Inherited from

`TypeFromSchema.effectIdentifier`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:48

***

### effectVariant

> **effectVariant**: `number`

The EffectVariant field is used to indicate which variant of the effect, indicated in the EffectIdentifier
field, SHOULD be triggered. If the server does not support the given variant, it shall use the default
variant. This field is dependent on the value of the EffectIdentifier field and shall contain one of the
non-reserved values listed in Values of the EffectVariant Field of the OffWithEffect Command.

#### See

MatterSpecification.v11.Cluster § 1.5.7.4.2

#### Inherited from

`TypeFromSchema.effectVariant`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:57
