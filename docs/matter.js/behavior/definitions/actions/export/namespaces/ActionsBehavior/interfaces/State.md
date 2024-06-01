[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/actions/export](../../../README.md) / [ActionsBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### actionList

> **actionList**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and its
EndpointListID shall exist in the EndpointLists attribute.

#### See

MatterSpecification.v11.Core § 9.14.5.1

#### Inherited from

`StateType.actionList`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:711](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L711)

***

### endpointLists

> **endpointLists**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique
EndpointListID.

#### See

MatterSpecification.v11.Core § 9.14.5.2

#### Inherited from

`StateType.endpointLists`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:719](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L719)

***

### setupUrl?

> `optional` **setupUrl**: `string`

The SetupURL attribute (when provided) shall indicate a URL; its syntax shall follow the syntax as
specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL shall provide
additional information for the actions provided:

  • When used without suffix, it shall provide information about the various actions which the cluster
    provides.

    ◦ Example: SetupURL could take the value of example://Actions or https://domain.example/
      Matter/bridgev1/Actions for this generic case (access generic info how to use actions provided by
      this cluster).

  • When used with a suffix of "/?a=" and the decimal value of ActionID for one of the actions, it may
    provide information about that particular action. This could be a deeplink to
    manufacturer-app/website (associated somehow to the server node) with the information/edit-screen
    for this action so that the user can view and update details of the action, e.g. edit the scene, or
    change the wake-up experience time period.

    ◦ Example of SetupURL with suffix added: example://Actions/?a=12345 or
      https://domain.example/Matter/bridgev1/Actions/?a=12345 for linking to specific info/editing of
      the action with ActionID 0x3039.

#### See

MatterSpecification.v11.Core § 9.14.5.3

#### Inherited from

`StateType.setupUrl`

#### Source

[packages/matter.js/src/cluster/definitions/ActionsCluster.ts:745](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ActionsCluster.ts#L745)
