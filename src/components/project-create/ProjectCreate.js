export default function ProjectCreate({onClickHandler, onChangeHandler}) {
    return(
        <div>
            <h1 class="about-heading">Create a New Project</h1>
            <div class="new-project-form">
            <form class="create-form">
            Project Name: 
            <input text="test" name="name" onChange={onChangeHandler} />
            <br></br>
            <br></br>
            Project Description: 
            <input text="test" name="description" onChange={onChangeHandler} />
            <br></br>
            <br></br>
            Project Leaders: 
            <input text="test" name="leaders" onChange={onChangeHandler} />
            <br></br>
            <br></br>
            <button type="submit" onClick={onClickHandler}>
            Submit
            </button>
            
            </form>
        </div> 
        </div>
    );
}