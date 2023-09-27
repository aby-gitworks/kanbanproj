import './Draggable.css'
interface Props {
	children: string;
}
function Draggable({ children }: Props) {
	return (<p draggable='true' className='drag'>{children}</p>);
}

export default Draggable;