[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/application-launcher/export](../../../README.md) / [ApplicationLauncherBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### currentApp?

> `optional` **currentApp**: `null` \| [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This attribute shall specify the current in-focus application, identified using an Application ID,
catalog vendor ID and the corresponding endpoint number when the application is represented by a Content
App endpoint. A null shall be used to indicate there is no current in-focus application.

#### See

MatterSpecification.v11.Cluster § 6.4.3.2

#### Inherited from

`StateType.currentApp`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:256](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L256)
