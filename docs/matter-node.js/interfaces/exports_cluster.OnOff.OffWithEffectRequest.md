[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OnOff](../modules/exports_cluster.OnOff.md) / OffWithEffectRequest

# Interface: OffWithEffectRequest

[exports/cluster](../modules/exports_cluster.md).[OnOff](../modules/exports_cluster.OnOff.md).OffWithEffectRequest

Input to the OnOff offWithEffect command

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvOffWithEffectRequest`](../modules/exports_cluster.OnOff.md#tlvoffwitheffectrequest)\>

  ↳ **`OffWithEffectRequest`**

## Table of contents

### Properties

- [effectIdentifier](exports_cluster.OnOff.OffWithEffectRequest.md#effectidentifier)
- [effectVariant](exports_cluster.OnOff.OffWithEffectRequest.md#effectvariant)

## Properties

### effectIdentifier

• **effectIdentifier**: [`OnOffEffectIdentifier`](../enums/exports_cluster.OnOff.OnOffEffectIdentifier.md)

The EffectIdentifier field specifies the fading effect to use when turning the device off. This field shall
contain one of the non-reserved values listed in Values of the EffectIdentifier Field of the OffWithEffect
Command.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4.1

#### Inherited from

TypeFromSchema.effectIdentifier

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:48

___

### effectVariant

• **effectVariant**: `number`

The EffectVariant field is used to indicate which variant of the effect, indicated in the EffectIdentifier
field, SHOULD be triggered. If the server does not support the given variant, it shall use the default
variant. This field is dependent on the value of the EffectIdentifier field and shall contain one of the
non-reserved values listed in Values of the EffectVariant Field of the OffWithEffect Command.

**`See`**

MatterSpecification.v11.Cluster § 1.5.7.4.2

#### Inherited from

TypeFromSchema.effectVariant

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OnOffCluster.d.ts:57
