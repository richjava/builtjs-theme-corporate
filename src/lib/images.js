import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const urlForImage = (source) => {
  return `${publicRuntimeConfig.BACKEND_URL || ""}${
    source?.data?.attributes?.url
  }`
}

export const widthForImage = (source) =>
source?.data?.attributes?.width

export const heightForImage = (source) =>
source?.data?.attributes?.height