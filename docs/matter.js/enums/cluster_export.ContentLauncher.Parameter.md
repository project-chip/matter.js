[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / Parameter

# Enumeration: Parameter

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).Parameter

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.4

## Table of contents

### Enumeration Members

- [Actor](cluster_export.ContentLauncher.Parameter.md#actor)
- [Channel](cluster_export.ContentLauncher.Parameter.md#channel)
- [Character](cluster_export.ContentLauncher.Parameter.md#character)
- [Director](cluster_export.ContentLauncher.Parameter.md#director)
- [Event](cluster_export.ContentLauncher.Parameter.md#event)
- [Franchise](cluster_export.ContentLauncher.Parameter.md#franchise)
- [Genre](cluster_export.ContentLauncher.Parameter.md#genre)
- [League](cluster_export.ContentLauncher.Parameter.md#league)
- [Popularity](cluster_export.ContentLauncher.Parameter.md#popularity)
- [Provider](cluster_export.ContentLauncher.Parameter.md#provider)
- [Sport](cluster_export.ContentLauncher.Parameter.md#sport)
- [SportsTeam](cluster_export.ContentLauncher.Parameter.md#sportsteam)
- [Type](cluster_export.ContentLauncher.Parameter.md#type)
- [Video](cluster_export.ContentLauncher.Parameter.md#video)

## Enumeration Members

### Actor

• **Actor** = ``0``

Actor represents an actor credited in video media content; for example, “Gaby sHoffman”

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:269](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L269)

___

### Channel

• **Channel** = ``1``

Channel represents the identifying data for a television channel; for example, "PBS"

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:274](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L274)

___

### Character

• **Character** = ``2``

A character represented in video media content; for example, “Snow White”

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:279](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L279)

___

### Director

• **Director** = ``3``

A director of the video media content; for example, “Spike Lee”

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:284](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L284)

___

### Event

• **Event** = ``4``

An event is a reference to a type of event; examples would include sports, music, or other types of events.
For example, searching for "Football games" would search for a 'game' event entity and a 'football' sport
entity.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:291](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L291)

___

### Franchise

• **Franchise** = ``5``

A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For
example, take the fictional franchise "Intergalactic Wars" which represents a collection of movie trilogies,
as well as animated and live action TV shows. This entity type was introduced to account for requests by
customers such as "Find Intergalactic Wars movies", which would search for all 'Intergalactic Wars' programs
of the MOVIE MediaType, rather than attempting to match to a single title.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:300](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L300)

___

### Genre

• **Genre** = ``6``

Genre represents the genre of video media content such as action, drama or comedy.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:305](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L305)

___

### League

• **League** = ``7``

League represents the categorical information for a sporting league; for example, "NCAA"

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:310](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L310)

___

### Popularity

• **Popularity** = ``8``

Popularity indicates whether the user asks for popular content.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:315](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L315)

___

### Provider

• **Provider** = ``9``

The provider (MSP) the user wants this media to be played on; for example, "Netflix".

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:320](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L320)

___

### Sport

• **Sport** = ``10``

Sport represents the categorical information of a sport; for example, football

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:325](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L325)

___

### SportsTeam

• **SportsTeam** = ``11``

SportsTeam represents the categorical information of a professional sports team; for example, "University of
Washington Huskies"

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:331](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L331)

___

### Type

• **Type** = ``12``

The type of content requested. Supported types are "Movie", "MovieSeries", "TVSeries", "TVSeason",
"TVEpisode", "SportsEvent", and "Video"

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:337](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L337)

___

### Video

• **Video** = ``13``

Video represents the identifying data for a specific piece of video content; for example, "Manchester by the
Sea".

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:343](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L343)
