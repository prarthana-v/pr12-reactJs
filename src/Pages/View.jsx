import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_User, Multiple_delete, View_User } from '../Redux/action/userAction';

const View = () => {
  const notes = useSelector(state => state.Notes.Notes)
  // console.log(notes);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(View_User())
  }, [])

  return (
    <div className='container  mt-5'>
      <div className="col-12 mb-3 d-flex justify-content-between rounded bg-light border mb-4">
        <h3 className='ps-3 pt-1' >NOTES</h3>
        <button className='btn btn-danger fw-bold' onClick={() => dispatch(Multiple_delete())}>Clear List</button>
      </div>
      <div >
        {
          notes.map((n, i) => {
            return (
              <div key={i} className="col-12 mb-3">
                <div className="form-control bg-light d-flex align-items-center justify-content-between shadow-sm">
                  <div className="">
                    {++i}.    {n.note}
                  </div>
                  <div>
                    <button className='btn btn-secondary' onClick={() => dispatch(Delete_User(n.id))}>Remove</button>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default View
