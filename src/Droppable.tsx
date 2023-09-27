import Draggable from './Draggable.tsx'
import './Droppable.css'
interface Props {
    drags: string[];
}
function Droppable({ drags }: Props) {
    return (<div className="Droppable dropps">{drags.map((drag) => (<Draggable key={drag}>{drag}</Draggable>))}</div>);
}

export default Droppable;