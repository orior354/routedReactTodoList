import React from "react";

class AddTodoForm extends React.Component {

    render () {
        return (
            <div>
                <form>
                    <textarea></textarea>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default AddTodoForm;