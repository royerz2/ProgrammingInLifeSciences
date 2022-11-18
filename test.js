import {ForceGraph} from "@d3/force-directed-graph"

chart = ForceGraph(miserables, {
    nodeId: d => d.id,
    nodeGroup: d => d.group,
    nodeTitle: d => `${d.id}\n${d.group}`,
    linkStrokeWidth: l => Math.sqrt(l.value),
    width,
    height: 600,
    invalidation // a promise to stop the simulation when the cell is re-run
})

miserables = FileAttachment("miserables.json").json()
