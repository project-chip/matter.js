[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [KeypadInput](../README.md) / Status

# Enumeration: Status

## See

MatterSpecification.v11.Cluster § 6.8.4.1

## Enumeration Members

### InvalidKeyInCurrentState

> **InvalidKeyInCurrentState**: `2`

Command failed: Requested key code is invalid in the context of the responder’s current state.

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L146)

***

### Success

> **Success**: `0`

Command succeeded

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L136)

***

### UnsupportedKey

> **UnsupportedKey**: `1`

Command failed: Key code is not supported.

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L141)
