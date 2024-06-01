[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/access-control/export](../../../README.md) / [AccessControlServer](../README.md) / Internal

# Class: Internal

## Constructors

### new Internal()

> **new Internal**(): [`Internal`](Internal.md)

#### Returns

[`Internal`](Internal.md)

## Properties

### aclManager?

> `optional` **aclManager**: [`AccessControlManager`](../../../-internal-/classes/AccessControlManager.md)

AccessControlManager instance that is used to manage the ACL checks for this device.

#### Source

[packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts:457](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts#L457)

***

### aclUpdateDelayed

> **aclUpdateDelayed**: `boolean` = `false`

If set to true ACL updates are delayed while in a write transaction. More details see getter/setter above.

#### Source

[packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts:460](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts#L460)

***

### delayedAclData?

> `optional` **delayedAclData**: [`AccessControlEntryStruct`](../../../../../../../cluster/export/namespaces/AccessControl/interfaces/AccessControlEntryStruct.md)[]

Latest delayed data of acl

#### Source

[packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts:463](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts#L463)
