import React from 'react';
import AddForm from "../components/AddForm/AddForm";

const AddBook = props => {
    return (
              <div className="form-container">
          <AddForm onSubmit={props.onSubmit} />
        </div>
     );
};



export default AddBook;