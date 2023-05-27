import { FanControlCluster, FanMode, FanModeSequence } from "../FanControlCluster.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServer.js";
import { ClusterServer } from "../../protocol/interaction/InteractionServer.js";

export const FanControlClusterHandler: () => ClusterServerHandlers<typeof FanControlCluster> = () => ({
  setFanMode: async ({ request: { fanMode }, attributes: { fanMode: fanModeAttr } }) => {
    fanModeAttr.set(fanMode);
  },

  setFanModeSequence: async ({ request: { fanModeSequence }, attributes: { fanModeSequence: fanModeSequenceAttr } }) => {
    fanModeSequenceAttr.set(fanModeSequence);
  },

  setPercentSetting: async ({ request: { percentSetting }, attributes: { percentSetting: percentSettingAttr } }) => {
    percentSettingAttr.set(percentSetting);
  },

  setFanSpeed: async ({ request: { speed }, attributes: { speedSetting } }) => {
    speedSetting.set(speed);
  },

  setRockSupport: async ({ request: { rockSupport }, attributes: { rockSupport: rockSupportAttr } }) => {
    rockSupportAttr.set(rockSupport);
  },

  setRockSetting: async ({ request: { rockSetting }, attributes: { rockSetting: rockSettingAttr } }) => {
    rockSettingAttr?.set(rockSetting);
  },

  setWindSupport: async ({ request: { windSupport }, attributes: { windSupport: windSupportAttr } }) => {
    windSupportAttr.set(windSupport);
  },

  setWindSetting: async ({ request: { windSetting }, attributes: { windSetting: windSettingAttr } }) => {
    windSettingAttr?.set(windSetting);
  },
});

export const createDefaultFanControlClusterServer = (
  attributeInitialValues?: AttributeInitialValues<typeof FanControlCluster.attributes>
) =>
  ClusterServer(FanControlCluster, attributeInitialValues ?? {
    fanMode: FanMode.Off,
    fanModeSequence: FanModeSequence.OffOn,
    percentSetting: 0,
    speedSetting: 0,
    rockSupport: { rockLeftRight: false, rockRound: false, rockUpDown: false },
    rockSetting: { rockLeftRight: false, rockRound: false, rockUpDown: false },
    windSupport: { sleepWind: false, naturalWind: false },
    windSetting: { sleepWind: false, naturalWind: false },
    percentCurrent: 0,
    speedCurrent: 0,
    speedMax: 100,
  }, FanControlClusterHandler());