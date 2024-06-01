[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / ApplyUpdateAction

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

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L152)

***

### Discontinue

> **Discontinue**: `2`

The OTA Provider is conveying a desire to rescind a previously provided Software Image.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L157)

***

### Proceed

> **Proceed**: `0`

Apply the update.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L147)
