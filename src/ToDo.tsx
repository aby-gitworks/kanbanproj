import './ToDo.css'
interface Props {
    count: Number;
}
function ToDo({count}:Props) {
    return (<>
        <div className="ToDo">
        <form>
        <input placeholder="New Item"></input>
        <button action="submit" onClick={(event) => (handleClick(event))}>Submit</button>
        </form>
        </div>
        </>)
}
function handleClick(event) {
    event.preventDefault();
    console.log(event.clientX);
}
export default ToDo;