import React, { useCallback, useEffect, useRef} from "react"
import Thought from "./Thought"
import { Background, ReactFlow } from '@xyflow/react';
import "./thoughtnetwork.css"
import "@xyflow/react/dist/style.css"
import { Controls } from "@xyflow/react";
import Dagre from '@dagrejs/dagre'
import { ReactFlowProvider, useNodesState, useEdgesState, useReactFlow} from '@xyflow/react'
import { Panel } from "@xyflow/react";

const nodesMap = [
    {
        id: "topic",
        data:{label: <Thought name='Placeholder' text='Hellooooooooooooooooooooooooooooooooo'/>},
        position:{x: 20, y: 0}
    },

    {
        id: "o1",
        data:{label: <Thought/>},
        position:{x: -500, y: 350}
    },
    {
        id: "o2",
        data:{label: <Thought />},
        position:{x: 20, y: 250}
    },
    {
        id: "o3",
        data:{label: <Thought />},
        position:{x: 500, y: 350}
    },


    {
        id: "o1d1",
        data:{label: <Thought />},
        position:{x: 0, y: 0}
    },    {
        id: "o1d2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o1d3",
        data:{},
        position:{x: 0, y: 0}
    },



    {
        id: "o2d1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o2d2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o2d3",
        data:{},
        position:{x: 0, y: 0}
    },



    {
        id: "o3d1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o3d2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o3d3",
        data:{},
        position:{x: 0, y: 0}
    },



    {
        id: "o1a1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o1a2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o1a3",
        data:{},
        position:{x: 0, y: 0}
    },
    

    {
        id: "o2a1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o2a2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o2a3",
        data:{},
        position:{x: 0, y: 0}
    },

    
    {
        id: "o3a1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o3a2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o3a3",
        data:{},
        position:{x: 0, y: 0}
    },

    
    {
        id: "o1e1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o1e2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o1e3",
        data:{},
        position:{x: 0, y: 0}
    },
    

    {
        id: "o2e1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o2e2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o2e3",
        data:{},
        position:{x: 0, y: 0}
    },

    
    {
        id: "o3e1",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o3e2",
        data:{},
        position:{x: 0, y: 0}
    },    {
        id: "o3e3",
        data:{},
        position:{x: 0, y: 0}
    },

    
    {
        id: "thesis",
        data:{},
        position:{x: 0, y: 0}
    },
]

const edgesMap = [
    {
        id: 't-o1',
        source:"topic",
        target:'o1'
    },
    {
        id: 't-o2',
        source:"topic",
        target:'o2'
    },
    {
        id: 't-o3',
        source:"topic",
        target:'o3'
    },


    
    {
        id: 'o1-o1d1',
        source:"o1",
        target:'o1d1'
    },
    {
        id: 'o1-o1d2',
        source:"o1",
        target:'o1d2'
    },
    {
        id: 'o1-o1d3',
        source:"o1",
        target:'o1d3'
    },

    
    {
        id: 'o2-o2d1',
        source:"o2",
        target:'o2d1'
    },
    {
        id: 'o2-o2d2',
        source:"o2",
        target:'o2d2'
    },
    {
        id: 'o2-o2d3',
        source:"o2",
        target:'o2d3'
    },
    
    {
        id: 'o3-o3d1',
        source:"o3",
        target:'o3d1'
    },
    {
        id: 'o3-o3d2',
        source:"o3",
        target:'o3d2'
    },
    {
        id: 'o3-o3d3',
        source:"o3",
        target:'o3d3'
    },
    
    {
        id: 'o1d1-o1a1',
        source:"o1d1",
        target:'o1a1'
    },
    {
        id: 'o1d2-o1a2',
        source:"o1d2",
        target:'o1a2'
    },
    {
        id: 'o1d3-o1a3',
        source:"o1d3",
        target:'o1a3'
    },

    
    {
        id: 'o2d1-o2a1',
        source:"o2d1",
        target:'o2a1'
    },
    {
        id: 'o2d2-o2a2',
        source:"o2d2",
        target:'o2a2'
    },
    {
        id: 'o2d3-o2a3',
        source:"o2d3",
        target:'o2a3'
    },
    
    {
        id: 'o3d1-o3a1',
        source:"o3d1",
        target:'o3a1'
    },
    {
        id: 'o3d2-o3a2',
        source:"o3d2",
        target:'o3a2'
    },
    {
        id: 'o3d3-o3a3',
        source:"o3d3",
        target:'o3a3'
    },
    
    {
        id: 'o1a1-o1e1',
        source:"o1a1",
        target:'o1e1'
    },
    {
        id: 'o1a2-o1e2',
        source:"o1a2",
        target:'o1e2'
    },
    {
        id: 'o1a3-o1e3',
        source:"o1a3",
        target:'o1e3'
    },

    {
        id: 'o2a1-o2e1',
        source:"o2a1",
        target:'o2e1'
    },
    {
        id: 'o2a2-o2e2',
        source:"o2a2",
        target:'o2e2'
    },
    {
        id: 'o2a3-o2e3',
        source:"o2a3",
        target:'o2e3'
    },

    {
        id: 'o3a1-o3e1',
        source:"o3a1",
        target:'o3e1'
    },
    {
        id: 'o3a2-o3e2',
        source:"o3a2",
        target:'o3e2'
    },
    {
        id: 'o3a3-o3e3',
        source:"o3a3",
        target:'o3e3'
    },
]

// var dagre = require("dagre")

const layoutElements = (nodes, edges) => {
    return {nodes, edges}
}

const getLayoutedElements = (nodes, edges, options) => {
    const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))
    g.setGraph({rankdir: options.direction})

    edges.forEach((edge) => g.setEdge(edge.source, edge.target))
    nodes.forEach((node) =>
        g.setNode(node.id, {
            ...node,
            width: node.measured?.width??0,
            height: node.measured?.height??0,
        })
    )

    Dagre.layout(g)

    return {
        nodes: nodes.map((node => {
            const position = g.node(node.id)
            const x = position.x - (node.measured?.width ?? 0)/2
            const y = position.y - (node.measured?.height??0)/2

            return {...node, position: {x, y}}
        }),
        edges)
    }
}

const LayoutFlow = () => {      {/*initialize many useState hooks*/}
    const {fitView} = useReactFlow()
    const [nodes, setNodes, onNodesChange] = useNodesState(nodesMap)
    const [edges, setEdges, onEdgesChange] = useEdgesState(edgesMap)

    const onLayout = useCallback((direction) => {
        const layoutedElements = getLayoutedElements(nodes, edges, {direction})
        setNodes([...layoutedElements.nodes])
        setEdges([...layoutedElements.edges])

        window.requestAnimationFrame(() => {
            fitView()
        })
    }, [nodes, edges])

    return (
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView>
            <Panel position='top-right'>
                <button onClick={() => onLayout('TB')}>Vertical layout</button>
                <button onClick={() => onLayout('LR')}>Horizontal layout</button>
            </Panel>
        </ReactFlow>
    )
}

function ThoughtNetwork() {
    return (
        <>
        {/* <div>
            <ul>
                
            </ul>
        </div> */}
        {/* <div style={{width: '100%', height: '100%'}}>
            <ReactFlow nodes={nodes} edges={edges} fitView>
                <Background />
                <Controls />
            </ReactFlow>

        </div> */}

            <ReactFlowProvider>
                <LayoutFlow/>
            </ReactFlowProvider>

        </>
    )


}

export default ThoughtNetwork
