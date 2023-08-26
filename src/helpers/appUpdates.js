import * as Updates from "expo-updates";

const reactToUpdates = async () => {
  Updates.addListener(async (event) => {
    if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
      await Updates.reloadAsync();
    }
  });
};

export default reactToUpdates;
