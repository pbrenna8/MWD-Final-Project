
export default function ProjectCreate({onClickHandler, onChangeHandler}) {
    return(
        <div>
            <form>
            Project Name:
            <input text="test" name="name" onChange={onChangeHandler} />
            Project Description:
            <input text="test" name="description" onChange={onChangeHandler} />
            Project Leaders:
            <input text="test" name="leaders" onChange={onChangeHandler} />
            <button type="submit" onClick={onClickHandler}>
            Submit
            </button>
            </form>
        </div>
    );
}