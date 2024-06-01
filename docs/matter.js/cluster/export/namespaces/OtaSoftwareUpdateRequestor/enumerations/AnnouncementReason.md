[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / AnnouncementReason

# Enumeration: AnnouncementReason

## See

MatterSpecification.v11.Core § 11.19.7.4.1

## Enumeration Members

### SimpleAnnouncement

> **SimpleAnnouncement**: `0`

An OTA Provider is announcing its presence.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L109)

***

### UpdateAvailable

> **UpdateAvailable**: `1`

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L115)

***

### UrgentUpdateAvailable

> **UrgentUpdateAvailable**: `2`

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available, which contains an update that needs to be applied urgently.

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L121)
