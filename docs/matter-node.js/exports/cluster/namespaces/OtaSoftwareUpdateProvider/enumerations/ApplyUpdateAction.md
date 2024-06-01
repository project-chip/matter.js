[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / ApplyUpdateAction

# Enumeration: ApplyUpdateAction

See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This enumeration is used in
the Action field of the ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).

## See

MatterSpecification.v11.Core § 11.19.6.4.2

## Enumeration Members

### AwaitNextAction

> **AwaitNextAction**: `1`

Wait at least the given delay time.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:130

***

### Discontinue

> **Discontinue**: `2`

The OTA Provider is conveying a desire to rescind a previously provided Software Image.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:134

***

### Proceed

> **Proceed**: `0`

Apply the update.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:126
