import boundingRect from "./task-3.js";
import runRover from "./task-4.js";

function getExpeditionsTargets(commandSeries) {
    return commandSeries.map(runRover);
}

export default function boundingRover(commandSeries) {
    return boundingRect(getExpeditionsTargets(commandSeries));
}
