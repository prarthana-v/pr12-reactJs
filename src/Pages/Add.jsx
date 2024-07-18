import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Add_User } from "../Redux/action/userAction";
import View from './View';
import './style.css'

const Add = () => {
  const [note, setNote] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      note: note,
    }
    dispatch(Add_User(obj))
    setNote("");
  }

  return (
    <div className='container mt-5' >
      <h2 align="center" className='bg-secondary text-white py-2 text-uppercase rounded'>To Do List.........</h2>
      <div className="col-12" >
        <form className='' onSubmit={handleSubmit}>
          <div className="mt-4 d-flex justify-content-end">
            <div className="col-11">
              <textarea type="text" rows={1} cols={2} className="form-control" placeholder='Take a Note...' onChange={(e) => setNote(e.target.value)} value={note || ""} />
            </div>
            <div className="col-1  d-flex justify-content-end">
              <button type="submit" className="btn btn-primary" align="right">Submit</button></div>
          </div>
          {/* <Link to={'/view'} className="btn btn-primary ms-3">View</Link> */}
        </form>

      </div>
      <View />
    </div>
  )
}

export default Add
